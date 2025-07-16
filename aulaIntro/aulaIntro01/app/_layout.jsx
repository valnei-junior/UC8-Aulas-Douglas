import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, Button } from 'react-native';
import Batata from '../components/Batata';

export default function AulaIntro() {
  const [nome, setNome] = useState();
  const mostrarAlerta = () => {
    Alert.alert(`Olá, bem vindo ${nome}`)
  }

  return (
    <View style={styles.Container}>
       <Text style={styles.Text}>Apredendo React Native</Text>
       <TextInput style={styles.Input} placeholderTextColor={'#ff0'} placeholder='Digite seu nome' onChangeText={setNome} value={nome}/>
       <Button title='CLique' onPress={mostrarAlerta} />
       <Batata/>
    </View>
  )
}


const styles = StyleSheet.create({
  Container:{
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  Text:{
    color: '#00ff00',
    fontSize: 24,
    fontWeight: 'bold',
  },
  Input:{
    borderColor: '#ff0000',
    borderWidth: 2,
    borderRadius: 18,
    width: '60%',
    margin: 25,
    color: '#fff',
  } 
})

