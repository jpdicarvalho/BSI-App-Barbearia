import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button, Alert } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../../../config/config.json";

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

import BarberLogo from '../../assets/barber.svg';
import PersonIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default function CadastroUser() {
    const navigation = useNavigation();
    
    const [user, setUser] = useState (null);
    const [password, setPassword]=useState(null);
    const [email, setEmail]=useState(null);
    
     //send data for form
     async function sendForm(){
        try {
            let response = await fetch(`${config.urlRoot}create`, {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-type': 'application/json'
                },
                body: JSON.stringify({
                  name: user,
                  password: password,
                  email: email
                })
              });
        
              if (response.status === 201) {
                // Cadastro realizado com sucesso
                Alert.alert('Sucesso', 'Cadastro realizado com sucesso!', [
                    { text: 'OK', onPress: () => navigation.navigate('SignIn') }
                  ]);
              } else {
                // Ocorreu um erro no cadastro
                Alert.alert('Erro', 'Ocorreu um erro ao cadastrar o usuário.');
              }
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao cadastrar o usuário.');
        }
    } 

    return (
        
            <Container>
                <BarberLogo width= "100%" height="100" />
                <Text 
                style={{fontWeight: 'bold',fontSize: 20, color: "#fff", marginTop:20}}>Bem Vindo</Text>
                <Text 
                style={{fontWeight: 'bold',fontSize: 12, color: "#fff", marginTop:5}}>Cadastre-se</Text>
                
                <InputArea>
                <SignInput
                        IconSvg={PersonIcon}
                        placeholder="Nome de usuário" 
                        onChangeText={text=>setUser(text)}
                    />
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
                        <CustomButtonText>Cadastrar</CustomButtonText>
                    </CustomButton>
                </InputArea>

                <SignMessageButton >
                    <SignMessageButtonText>Já tem uma conta?</SignMessageButtonText>
                    <SignMessageButtonTextBold>Faça login!</SignMessageButtonTextBold>
                </SignMessageButton>

            </Container>
        );
    }
