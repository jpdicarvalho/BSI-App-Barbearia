import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1238',
  },
  containerHeader: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff'
  },
  buttonBack: {
    position: 'absolute',
    top: 60,
    left: 16
  },
  containerTextButtonBack: {
    backgroundColor: '#AE31FF',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  textButtonBack: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  descricao: {
    flex: 1, 
    position: 'relative', 
    marginTop: 140, 
    width: '90%', 
    padding: 10
  },
  descricaoTitle: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#AE31FF' 
  },
  titleHoraDisponive: {
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 40,
    color: '#AE31FF' 
  },
  textHoraDisponivel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#AE31FF' 
  },
  descricaoText: {
    fontSize: 16,
    color: '#AE31FF'  
  },
  containerHorarios: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 30
  },
  textHorarios: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#AE31FF'
  },
  containerButtonHorario: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', 
    alignItems: 'center',
    position: 'relative',
    width: 250,
    alignSelf: 'center'
  },
  buttonHorarios: {
    backgroundColor: '#AE31FF',
    borderRadius: 8,
    padding: 10,
    margin: 15
  },
  selectedButtonHorarios: {
    backgroundColor: '#06D6AD'
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  },
  selectedButtonText: {
    fontWeight: 'bold'
  },
  scheduleButton: {
    backgroundColor: '#06D6AD',
    padding: 10,
    borderRadius: 8,
    alignSelf: 'center',
    position: 'relative',
    bottom: 0,
    width: '60%'
  },
  scheduleButtonText: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  resetButton:{
    backgroundColor: '#06D6AD',
    padding: 10,
    borderRadius: 8,
    alignSelf: 'center',
    position: 'relative',
    bottom: 0,
    width: '60%',
    marginTop: 20
  },
  resetButtonText: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
