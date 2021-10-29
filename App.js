/*
* @bainloko
* DDM I
* 22/10/2021
*/

import * as React from 'react';
import { View, StatusBar, Button, StyleSheet } from 'react-native';
import * as Speech from 'expo-speech';

export default function App(){
  const falar = () => {
    var thingToSay = 'Olá, pessoas da informática!';
    Speech.speak(thingToSay, { language: "pt-BR" });
  };

  return(
    <View style={estilos.container}>
      <StatusBar />
      <Button style={estilos.botao} title="Clique aqui para escutar o TTS do aplicativo!" onPress={falar} />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 8,
  },

  botao: {
    width: 200,
  },
});