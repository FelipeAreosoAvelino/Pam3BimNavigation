import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

function HomeScreen() {

  const nav = useNavigation();

  return (

    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >

      <View style={styles.header}>

        <Ionicons name="home" size={42} />

        <Text style={styles.title}>
          Home Screen
        </Text>

        <Text style={styles.subtitle}>
          Demonstração de navegação utilizando React Navigation.
        </Text>

      </View>


      <View style={styles.buttonsContainer}>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed
          ]}
          onPress={() => nav.navigate('Sobre')}
        >

          <Ionicons
            name="information-circle-outline"
            size={22}
          />

          <Text style={styles.buttonText}>
            Sobre
          </Text>

        </Pressable>


        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed
          ]}
          onPress={() => nav.navigate('Galeria')}
        >

          <Ionicons
            name="image-outline"
            size={21}
          />

          <Text style={styles.buttonText}>
            Galeria
          </Text>

        </Pressable>


        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed
          ]}
          onPress={() => nav.navigate('Contato')}
        >

          <Ionicons
            name="call-outline"
            size={21}
          />

          <Text style={styles.buttonText}>
            Contato
          </Text>

        </Pressable>

      </View>


      <Text style={styles.footer}>
      </Text>

    </ScrollView>

  );

}


const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },


  header: {
    width: '100%',
    maxWidth: 500,
    alignItems: 'center',
    marginTop: 30,
  },


  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 15,
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


  buttonsContainer: {
    width: '100%',
    maxWidth: 400,
    gap: 14,
    marginVertical: 40,
  },


  button: {
    width: '100%',
    minHeight: 52,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    paddingHorizontal: 15,
  },


  buttonPressed: {
    opacity: 0.6,
    transform: [{ scale: 0.98 }],
  },


  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },


  footer: {
    fontSize: 13,
    opacity: 0.5,
    textAlign: 'center',
  },

});


export default HomeScreen;