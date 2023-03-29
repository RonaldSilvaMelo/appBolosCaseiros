import * as React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function BoloFuba() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Bolo de Fuba</Text>
        <Image style={styles.image} source={require('../assets/fuba.jpg')} />

        <Text style={styles.subtitle}>Ingredientes</Text>

        <View style={styles.left}>
          <Text style={styles.text}>- 2 xícaras de açúcar</Text>
          <Text style={styles.text}>- 3 xícaras de fubá</Text>
          <Text style={styles.text}>- 1 xícara de farinha de trigo</Text>
          <Text style={styles.text}>- 1/2 xícara de óleo</Text>
          <Text style={styles.text}>- 4 ovos</Text>
          <Text style={styles.text}>- 2 xícaras de leite</Text>
          <Text style={styles.text}>- 1 colher de sopa de fermento em pó</Text>
        </View>

        <Text style={styles.subtitle}>Modo de preparo</Text>

        <View style={styles.left}>
          <Text style={styles.text}>
            1. Pré-aqueça o forno a 180 graus Celsius e unte uma forma de bolo
            com manteiga e farinha de trigo.
          </Text>
          <Text style={styles.text}>
            2. Em uma tigela grande, misture o açúcar, o fubá e a farinha de
            trigo.
          </Text>
          <Text style={styles.text}>
            3. Adicione o óleo e os ovos e misture bem.
          </Text>
          <Text style={styles.text}>
            4. Adicione o leite e misture novamente até obter uma massa
            homogênea.
          </Text>
          <Text style={styles.text}>
            5. Adicione o fermento em pó e misture delicadamente.
          </Text>
          <Text style={styles.text}>
            6. Despeje a massa na forma preparada e leve ao forno por cerca de
            35-40 minutos ou até que um palito inserido no centro do bolo saia
            limpo.
          </Text>
          <Text style={styles.text}>
            7. Deixe esfriar por alguns minutos antes de desenformar e servir.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFDD0',
  },

  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#D0100F',
    fontWeight: 'bold',
  },

  image: {
    width: 300,
    height: 300,
    marginBottom: 10,
    alignSelf: 'center',
  },

  subtitle: {
    fontSize: 18,
    margin: 15,
    color: '#D0100F',
    textAlign: 'center',
  },

  text: {
    margin: 4,
    textAlign: 'left',
  },
});
