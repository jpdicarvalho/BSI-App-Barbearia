import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { UserContext } from '../../contexts/UserContext';

import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles';

import SignInput from '../../components/SignInput';

import Api from '../../Api';

import BarberLogo from '../../assets/barber.svg';
import PersonIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {
        if(nameField != '' && emailField != '' && passwordField != '') {
            let res = await Api.signUp(nameField, emailField, passwordField);
            
            if(res.token) {
                await AsyncStorage.setItem('token', res.token);

                userDispatch({
                    type: 'setAvatar',
                    payload:{
                        avatar: res.data.avatar
                    }
                });

                navigation.reset({
                    routes:[{name:'MainTab'}]
                });

            } else {
                alert("Erro: "+res.error);
            }
        } else {
            alert("Preencha os campos");
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
    }

    return (
        <Container>
            <BarberLogo width= "100%" height="100" />
            <Text 
            style={{fontWeight: 'bold',fontSize: 20, color: "#fff", marginTop:20}}>Bem Vindo</Text>
            <Text 
            style={{fontWeight: 'bold',fontSize: 12, color: "#fff", marginTop:5}}>Faça login</Text>
            
            <InputArea>

            <SignInput
                    IconSvg={PersonIcon}
                    placeholder="Digite seu nome"
                    value={emailField}
                   onChangeText={t=>setEmailField(t)}
                
                />

            <SignInput
                    IconSvg={EmailIcon}
                    placeholder="Endereço de e-mail"
                    value={nameField}
                   onChangeText={t=>setNameField(t)}
                
                />

            <SignInput
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}s                
                />

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>Cadastrar</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Já tem uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça login!</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
}