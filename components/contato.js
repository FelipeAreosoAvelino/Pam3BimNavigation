import { StyleSheet, Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const Contato = () => {
  return (
    <View style={styles.container}>

      <View style={styles.content}>

        <Ionicons
          name="call-outline"
          size={48}
        />

        <Text style={styles.title}>
          Contato
        </Text>

        <Text style={styles.subtitle}>
          Exemplo de contato.
        </Text>


        <View style={styles.card}>
          <View style={styles.contactItem}>

            <Ionicons
              name="call-outline"
              size={22}
            />

            <View style={styles.contactText}>
              <Text style={styles.label}>
                Telefone
              </Text>

              <Text style={styles.value}>
                (00) 00000-0000
              </Text>
            </View>

          </View>

        </View>

      </View>

    </View>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },


  content: {
    width: '100%',
    maxWidth: 500,
    alignItems: 'center',
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
    marginBottom: 25,
    opacity: 0.65,
    maxWidth: 400,
    lineHeight: 21,
  },


  card: {
    width: '100%',
    maxWidth: 450,
    borderWidth: 1,
    borderRadius: 12,
    padding: 20,
    gap: 20,
  },


  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },


  contactText: {
    flex: 1,
    marginLeft: 12,
  },


  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },


  value: {
    fontSize: 14,
    marginTop: 3,
    opacity: 0.65,
    flexShrink: 1,
  },

});


export default Contato;