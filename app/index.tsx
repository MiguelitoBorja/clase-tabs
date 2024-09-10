// Perfil.js
import React from 'react';
import { View, Text, StyleSheet,TextInput, Image } from 'react-native';

export default function Perfil() {
  function setnombre(text: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <View style={styles.container}>
      
      <Image
        style={styles.avatar}
        source={{uri: "../assets/images/icon.png" }} 
      />
      <Text style={styles.name}>Javito</Text>
      <Text style={styles.bio}>Merca y tuca.</Text>
      
        <View style={styles.container}>
          {/* ... */}
          <TextInput
            style={styles.input}
            keyboardType="default"
            onChangeText={(text) => setnombre(text)}
          />
        </View>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'green',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 0,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
  },
  input: {
    // Add your input styles here
  },
});
