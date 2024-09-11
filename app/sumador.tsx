import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Sumador() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState<number | null>(null);

  const sumar = () => {
    const suma = parseFloat(num1) + parseFloat(num2);
    setResultado(suma);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sumador</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ingrese el primer número"
        value={num1}
        onChangeText={(text) => setNum1(text)}
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ingrese el segundo número"
        value={num2}
        onChangeText={(text) => setNum2(text)}
      />

      <Button title="Sumar" onPress={sumar} />

      {resultado !== null && (
        <Text style={styles.result}>
          Resultado: {resultado}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'black',
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    color: 'white',
    textAlign: 'center',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    width: '50%',
    borderRadius: 5,
  },
  result: {
    fontSize: 20,
    marginTop: 20,
    color: 'white',
  },
});
