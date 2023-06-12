import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, Alert } from 'react-native';
import config from '../../../config/config.json'
import BarberLogo from '../../assets/barber.svg';

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
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default function Login() {
      
    const navigation = useNavigation();
    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });
    }
    const [password, setPassword]=useState(null);
    const [email, setEmail]=useState(null);
     //send data for form
     async function sendForm(){
        try {
            let response = await fetch(`${config.urlRoot}login`, {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-type': 'application/json'
                },
                body: JSON.stringify({
                  password: password,
                  email: email
                })
              });
        
              if (response) {
                // Cadastro realizado com sucesso
                Alert.alert('Sucesso', 'usuário encontrado!', [
                    { text: 'OK', onPress: () => navigation.navigate('MainTab') }
                  ]);
              } else {
                // Ocorreu um erro no cadastro
                Alert.alert('Erro', 'Usuário não encontrado.');
              }
        } catch (error) {
            console.error('Erro ao buscar usuário:', error);
            Alert.alert('Erro', 'Erro ao encontrar o usuário.');
        }
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
                    IconSvg={EmailIcon}
                    placeholder="Endereço de e-mail"
                    onChangeText={text=>setEmail(text)}
                />

            <SignInput
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    password={true}
                    onChangeText={text=>setPassword(text)}
                />

                <CustomButton onPress={()=>sendForm()}>
                    <CustomButtonText>ENTRAR</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Não possui conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Crie uma agora!</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
}
