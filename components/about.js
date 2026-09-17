import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const About = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >

      <View style={styles.header}>
        <Ionicons
          name="information-circle-outline"
          size={48}
        />

        <Text style={styles.title}>
          Sobre o Projeto
        </Text>

        <Text style={styles.subtitle}>
          Desenvolvido por Felipe Avelino e Leonardo Augusto.
        </Text>
      </View>


      <View style={styles.card}>

        <Text style={styles.sectionTitle}>
          React Navigation utilizado
        </Text>


        <View style={styles.item}>
          <Ionicons name="layers-outline" size={22} />

          <Text style={styles.itemText}>
            NavigationContainer
          </Text>
        </View>


        <View style={styles.item}>
          <Ionicons name="git-branch-outline" size={22} />

          <Text style={styles.itemText}>
            createNativeStackNavigator
          </Text>
        </View>


        <View style={styles.item}>
          <Ionicons name="document-text-outline" size={22} />

          <Text style={styles.itemText}>
            Stack.Navigator e Stack.Screen
          </Text>
        </View>


        <View style={styles.item}>
          <Ionicons name="navigate-outline" size={22} />

          <Text style={styles.itemText}>
            useNavigation e navigation.navigate()
          </Text>
        </View>


        <View style={styles.item}>
          <Ionicons name="arrow-back-outline" size={22} />

          <Text style={styles.itemText}>
            navigation.goBack()
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
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },


  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 8,
    opacity: 0.65,
    maxWidth: 400,
    lineHeight: 21,
  },


  card: {
    width: '100%',
    maxWidth: 500,
    borderWidth: 1,
    borderRadius: 12,
    padding: 20,
  },


  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },


  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },


  itemText: {
    flex: 1,
    fontSize: 15,
    marginLeft: 10,
  },


  creators: {
    width: '100%',
    maxWidth: 500,
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 10,
  },


  creator: {
    fontSize: 16,
    marginBottom: 8,
  },

});


export default About;
