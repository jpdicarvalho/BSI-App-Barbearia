import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const availableTimes = [
    '09:00', '10:00', '11:00', '12:00'
  ];

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const handleSchedule = () => {
    // Lógica para agendar o horário selecionado
    if (selectedTime) {
      // Realize aqui as ações necessárias para agendar o horário
      console.log('Horário agendado:', selectedTime);
    } else {
      console.log('Selecione um horário antes de agendar.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione um horário disponível:</Text>
      
      {availableTimes.map((time) => (
        <TouchableOpacity
          key={time}
          style={[
            styles.timeButton,
            selectedTime === time ? styles.selectedTimeButton : null
          ]}
          onPress={() => handleTimeSelection(time)}
          disabled={selectedTime !== null}
        >
          <Text
            style={[
              styles.timeButtonText,
              selectedTime === time ? styles.selectedTimeButtonText : null
            ]}
          >
            {time}
          </Text>
        </TouchableOpacity>
      ))}

      {selectedTime && (
        <TouchableOpacity style={styles.scheduleButton} onPress={handleSchedule}>
          <Text style={styles.scheduleButtonText}>Agendar {selectedTime}</Text>
        </TouchableOpacity>
      )}

      {selectedTime && (
        <Text style={styles.selectedTimeText}>Horário selecionado: {selectedTime}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  },
  timeButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: 200,
    alignItems: 'center'
  },
  timeButtonText: {
    color: 'white',
    fontSize: 16
  },
  selectedTimeButton: {
    backgroundColor: 'green'
  },
  selectedTimeButtonText: {
    fontWeight: 'bold'
  },
  scheduleButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  },
  scheduleButtonText: {
    color: 'white',
    fontSize: 16
  },
  selectedTimeText: {
    fontSize: 16,
    marginTop: 20
  }
});

export default App;

/*
app.post('/create', async (req, res) =>{
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
    
});


*/