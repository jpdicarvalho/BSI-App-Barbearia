import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import config from '../../../config/config.json';

const DetailsScreen = ({ route }) => {
  const { name, funcionario, endereco, cortes, barbearia_id } = route.params;
  const navigation = useNavigation();

  const [selectedTime, setSelectedTime] = useState(null);
  const [availableTimes] = useState(['08:00', '09:00', '10:00', '11:00', '12:00', '14:00']);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  async function sendForm() {
    if (selectedTime) {
      try {
        let response = await fetch(`${config.urlRoot}agendarHorario`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            horario: selectedTime,
            barbearia_id: barbearia_id,
          }),
        });

        if (response.status === 201) {
          // Cadastro realizado com sucesso
          Alert.alert('Sucesso', 'Agendamento realizado com sucesso!', [
            { text: 'OK', onPress: () => navigation.navigate('Home') },
          ]);
        } else if (response.status === 409) {
          // Usuário já existe
          Alert.alert('Erro', 'O Horário já foi agendado.');
        } else {
          // Ocorreu um erro no cadastro
          Alert.alert('Erro', 'Ocorreu um erro ao realizar o agendamento.');
        }
      } catch (error) {
        console.error('Erro ao agendar horário:', error);
        // Ações em caso de erro no agendamento
      }
    } else {
      console.log('Selecione um horário antes de agendar.');
    }
  }

  const handleResetSelection = () => {
    setSelectedTime(null);
  };

  return (
    <View style={styles.containerHeader}>
      <TouchableOpacity onPress={handleGoBack} style={styles.buttonBack}>
        <View style={styles.containerTextButtonBack}>
          <Text style={styles.textButtonBack}>Voltar</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.descricao}>
        <Text style={styles.descricaoTitle}>Detalhes da Barbearia:</Text>
        <Text style={styles.descricaoText}>Nome: {name}</Text>
        <Text style={styles.descricaoText}>Funcionários: {funcionario}</Text>
        <Text style={styles.descricaoText}>Endereço: {endereco}</Text>
        <Text style={styles.descricaoText}>Serviços: {cortes}</Text>
        <View style={styles.titleHoraDisponive}>
          <Text style={styles.textHoraDisponivel}>Selecione um horário:</Text>
        </View>
        <View style={styles.containerHorarios}>
          {availableTimes.map((time) => (
            <TouchableOpacity
              key={time}
              style={[
                styles.buttonHorarios,
                selectedTime === time ? styles.selectedButtonHorarios : null,
              ]}
              onPress={() => handleTimeSelection(time)}
              disabled={selectedTime !== null}
            >
              <Text style={styles.buttonText}>{time}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {selectedTime && (
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.scheduleButton} onPress={sendForm}>
              <Text style={styles.scheduleButtonText}>Agendar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.resetButton} onPress={handleResetSelection}>
              <Text style={styles.resetButtonText}>Selecionar outro horário</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default DetailsScreen;
