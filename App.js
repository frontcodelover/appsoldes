import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [price, onPrice] = useState(null);
  const [reduction, onChangeReduciton] = useState(null);
  const [total, setTotal] = useState(null);

  //(prix * (100 - pourcentage))/100

  return (
    <View style={styles.container}>
      <Text
        style={styles.textValue}>
        Quel est le montant de la réduction ?</Text>
        <Text style={styles.label}>Prix de l'article</Text>
      <TextInput
        style={styles.input}
        onChangeText={onPrice}
        value={price}
        placeholder="Quel est le prix de l'article"
        keyboardType="numeric"
        />
        <Text style={styles.label}>Pourcentage de la réduction</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeReduciton}
        value={reduction}
        placeholder="Réduction en pourcentage"
        keyboardType="numeric"
      />
      <StatusBar style="auto" />
      {price && reduction && (
        <Text style={styles.total}>
          Le prix soldé est de {(price * (100 - reduction)) / 100}€
          soit une
          réduction de {price - (price * (100 - reduction)) / 100}€
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: 'center',
  },
  textValue: {
    fontSize: 40,
    marginBottom: 40,
    marginHorizontal:20,
    fontWeight: '600',
    textAlign: 'center',
  },
  input: {
    fontSize: 30,
    margin: 20,
    textAlign:'center'
  },
  label: {
    fontWeight: '800',
    fontSize: 20,
    padding: 10,
    backgroundColor: 'purple',
    color:'#fff'
    
  },
  total: {
    fontSize: 25,
    textAlign:'center'
  }
});
