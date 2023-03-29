import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>As melhores receitas de bolo</Text>
      <Image style={styles.image} source={require('../assets/bolo.png')} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.navigation.navigate('BoloChocolate');
        }}>
        <Text style={styles.btnText}>Bolo de Chocolate</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.navigation.navigate('BoloFuba');
        }}>
        <Text style={styles.btnText}>Bolo de Fubá</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.navigation.navigate('BoloMilho');
        }}>
        <Text style={styles.btnText}>Bolo de Milho</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFDD0',
  },

  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 5,
    color: '#D0100F',
    fontWeight: 'bold',
  },

  image: {
    width: 300,
    height: 300,
    marginBottom: 10,
  },

  button: {
    margin: 10,
    backgroundColor: '#D3D3D3',
    borderWidth: 2,
    borderRadius: 20,
    padding: 5,
  },

  btnText: {
    fontSize: 18,
  },
});
