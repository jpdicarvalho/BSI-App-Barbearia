import React from 'react';
import styled from 'styled-components/native';

//aréa de entrada
const InputArea = styled.View` 
    width: 100%;
    height: 60px;
    background-color: #FFF;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
    margin-top: 05px;
`;
const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #202024;
    margin-left: 10px;
`;

export default ({IconSvg, placeholder, value, onChangeText, password}) => {
    return (
        <InputArea>
            <IconSvg width="24" height="24" fill="#202024" />
            <Input
                placeholder={placeholder}
                placeholderTextColor="#202024"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </InputArea>
    );
}