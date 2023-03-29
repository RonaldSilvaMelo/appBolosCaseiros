import * as React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function BoloChocolate() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Bolo de Chocolate</Text>
        <Image
          style={styles.image}
          source={require('../assets/chocolate.jpg')}
        />

        <Text style={styles.subtitle}>Ingredientes</Text>

        <View style={styles.left}>
          <Text style={styles.text}>- 2 xícaras de açúcar</Text>
          <Text style={styles.text}>
            - 1 e 3/4 de xícaras de farinha de trigo
          </Text>
          <Text style={styles.text}>- 3/4 de xícara de cacau em pó</Text>
          <Text style={styles.text}>
            - 1 e 1/2 colher de chá de bicarbonato de sódio
          </Text>
          <Text style={styles.text}>- 1 colher de chá de sal</Text>
          <Text style={styles.text}>- 2 ovos</Text>
          <Text style={styles.text}>- 1 xícara de leite</Text>
          <Text style={styles.text}>- 1/2 xícara de óleo</Text>
          <Text style={styles.text}>
            - 2 colheres de chá de essência de baunilha
          </Text>
          <Text style={styles.text}>- 1 xícara de água quente</Text>
        </View>

        <View style={styles.left}>
          <Text style={styles.subtitle}>Modo de preparo</Text>
          <Text style={styles.text}>
            1. Pré-aqueça o forno a 180 graus Celsius e unte uma forma de bolo
            com manteiga e farinha de trigo.
          </Text>
          <Text style={styles.text}>
            2. Em uma tigela grande, misture o açúcar, a farinha de trigo, o
            cacau em pó, o bicarbonato de sódio e o sal.
          </Text>
          <Text style={styles.text}>
            3. Em outra tigela, bata os ovos, o leite, o óleo e a essência de
            baunilha.
          </Text>
          <Text style={styles.text}>
            4. Adicione os ingredientes líquidos à mistura de ingredientes secos
            e misture até ficar homogêneo.
          </Text>
          <Text style={styles.text}>
            5. Adicione a água quente e misture novamente até que a massa esteja
            bem lisa.
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
