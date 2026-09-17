import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const Galeria = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >

      <View style={styles.header}>

        <Ionicons
          name="image-outline"
          size={48}
        />

        <Text style={styles.title}>
          Galeria
        </Text>

        <Text style={styles.subtitle}>
          Imagens relacionadas ao desenvolvimento
          e à navegação em aplicativos.
        </Text>

      </View>


      <View style={styles.gallery}>

        <View style={styles.card}>

          <Image
            source={require('../assets/desenvolvimento-mobile.png')}
            style={styles.image}
            resizeMode="contain"
          />

          <Text style={styles.caption}>
            Desenvolvimento Mobile
          </Text>

        </View>


        <View style={styles.card}>

          <Image
            source={require('../assets/navegacao-react-navigation.png')}
            style={styles.image}
            resizeMode="contain"
          />

          <Text style={styles.caption}>
            Navegação entre telas
          </Text>

        </View>


        <View style={styles.card}>

          <Image
            source={require('../assets/interface-react-native.png')}
            style={styles.image}
            resizeMode="contain"
          />

          <Text style={styles.caption}>
            Interface React Native
          </Text>

        </View>

      </View>

    </ScrollView>
  );
};


const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },


  header: {
    width: '100%',
    maxWidth: 500,
    alignItems: 'center',
    marginBottom: 25,
  },


  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },


  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 8,
    opacity: 0.65,
    maxWidth: 400,
    lineHeight: 21,
  },


  gallery: {
    width: '100%',
    maxWidth: 500,
    gap: 20,
  },


  card: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
  },

  image: {
    width: '90%',
    height: 180,
  },

  caption: {
    fontSize: 16,
    fontWeight: '500',
    padding: 14,
    textAlign: 'center',
  },

});


export default Galeria;