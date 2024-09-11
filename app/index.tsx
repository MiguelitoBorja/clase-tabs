import React, { useState } from 'react';
import { View, Text, Button,StyleSheet,TextInput, Image } from 'react-native';

export default function Perfil() {
  const [nombre, setNombre] = useState("Nombre");  // Estado para el nombre
  const [nuevoNombre, setNuevoNombre] = useState(""); // Estado para almacenar el nuevo nombre
  const [aparecer, setAparecer] = useState(false);

  const cambiarNombre = () => {
    if (nuevoNombre.trim() !== "") {
      setNombre(nuevoNombre);  // Cambiar el nombre
      setNuevoNombre("");  // Limpiar el input
      setAparecer(false);
    }
  };
  const mostrarContenido = () => {
    setAparecer(true);  // Hacer aparecer el contenido
  };
  return (
    <View style={styles.container}>
      
      <Image
        style={styles.avatar}
        source={{uri: "../assets/images/icon.png" }} 
      />
    <Text style={styles.name}>{nombre}</Text>
      {/* Botón para mostrar contenido */}
      <Button title="cambiar contenido" onPress={mostrarContenido} />

    
    {aparecer && <><TextInput
        style={styles.input}
        placeholder="Nuevo nombre"
        value={nuevoNombre}
        onChangeText={text => setNuevoNombre(text)} /><Button title="Cambiar nombre" onPress={cambiarNombre} /></>
    }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e4f0ef',
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
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    textAlign:'center',
    borderWidth: 1,
    
  },
  aparecer: {
    
    backgroundColor: 'black',
  },
});
