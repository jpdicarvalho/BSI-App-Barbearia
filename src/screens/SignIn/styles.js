import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #AE31FF;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

export const InputArea = styled.View`
    width: 100%;
    padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #06D6AD;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #FFF;
    fontWeight: bold;
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;

export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    color: #268596;
    color: #FFF;
`;

export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;
    color: #268596;
    font-weight: bold;
    margin-left: 5px;
    color: #FFF;
`;

