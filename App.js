/*
* @bainloko
* DDM I
* 22/10/2021
*/

import * as React from 'react';
import { View, StatusBar, Pressable, StyleSheet } from 'react-native';
import * as Speech from 'expo-speech';

export default function App(){
  const falar = () => {
    var thingToSay = 'Olá, pessoas da informática!';
    Speech.speak(thingToSay, { language: "pt-BR" });
  };

  return(
    <View style={estilos.container}>
      <StatusBar />
      <Pressable style={estilos.botao} onPress={falar}>
        <Text>Clique aqui para escutar o TTS do aplicativo!</Text>
      </Pressable>
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

  botaoExemplo: {
    backgroundColor: 'black',
    marginTop: 5,
    paddingVertical: 12,
    width: 110,
    textAlign: 'center',
    borderRadius: 4,
    elevation: 3,
  },

  fonteExemplo: {
    color: 'white',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
  },
});