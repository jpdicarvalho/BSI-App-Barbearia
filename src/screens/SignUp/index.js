import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button, Alert } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../../../config/config.json";
//              let json = await response.json();let userData = await AsyncStorage.setItem('userData', JSON.stringify(json));
//                let resData = await AsyncStorage.getItem('userData');
//                console.log(JSON.parse(resData));

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
     async function sendForm() {
        try {
          // Verificar se os campos não estão vazios
          if (!user || !password || !email) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
          }
      
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
          } else if (response.status === 409) {
            // Usuário já existe
            Alert.alert('Erro', 'Usuário já cadastrado.', [
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

                <SignMessageButton onPress={handleMessageButtonClick}>
                    <SignMessageButtonText>Já tem uma conta?</SignMessageButtonText>
                    <SignMessageButtonTextBold>Faça login!</SignMessageButtonTextBold>
                </SignMessageButton>

            </Container>
        );
    }
/*
try {
        const existingUser = await user.findOne({
            where: {email: req.body.email}
        });

        if (existingUser) {
            // Usuário já existe
            return res.status(409).json({ error: 'Usuário já cadastrado.' });
          }else{
                await user.create({
                    name:req.body.name,
                    password:req.body.password,
                    email:req.body.email,
                    cretatedAt: new Date(),
                    updated: new Date()
                });
                return res.status(201).json({ success: 'Usuário cadastrado com sucesso.' });
          }

    } catch (error) {
        // Ocorreu um erro durante o processo de criação do usuário
        console.error('Erro ao criar usuário:', error);
        return res.status(500).json({ error: 'Ocorreu um erro ao criar o usuário.' });
        
    }
*/