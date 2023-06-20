import React from 'react';
import { View, Text, TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const DetailsScreen = ({ route }) => {
  const { name, funcionario, endereco, cortes } = route.params;
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#fff'}}>
      <TouchableOpacity onPress={handleGoBack} style={{ position: 'absolute', top: 60, left: 16 }}>
        <View style={{
          backgroundColor: '#AE31FF',
          borderRadius: 8,
          paddingHorizontal: 16,
          paddingVertical: 8,
          
        }}>
          <Text style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#fff',
          }}>Voltar</Text>
        </View>
      </TouchableOpacity>
      <View style={{ flex: 1, position: 'relative', marginTop: 140, width:'90%', padding: 10}}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#AE31FF' }}>Detalhes da Barbearia:</Text>
        <Text style={{ fontSize: 16, marginTop: 16, color: '#AE31FF'  }}>Nome: {name}</Text>
        <Text style={{ fontSize: 16, color: '#AE31FF' }}>Funcionarios: {funcionario}</Text>
        <Text style={{ fontSize: 16, color: '#AE31FF' }}>Endereço: {endereco}</Text>
        <Text style={{ fontSize: 16, color: '#AE31FF' }}>Serviços: {cortes}</Text>
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#AE31FF'}}>Horários Disponíveis:</Text>
        </View>
        {/* Exiba outras informações adicionais aqui */}
      </View>
    </View>
  );
};

export default DetailsScreen;
