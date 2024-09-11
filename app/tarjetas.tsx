import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

interface TarjetaProps {
  texto: string;
}

const Tarjeta = ({ texto }: TarjetaProps) => {
  const [isTouched, setIsTouched] = useState(false);

  const handlePress = () => {
	setIsTouched(!isTouched);
  };

  return (
	<Pressable onPress={handlePress}>
	  <Text style = {[styles.Pressable, isTouched && styles.PressableTouched]}>
		{texto}
	  </Text>
	</Pressable>
  );
};

const Tarjetas = () => {
  return (

	<View style={{width: '60%',backgroundColor: "#e8f5f4",alignSelf: 'center',marginTop:10,
  } }>
    <Tarjeta texto="Tarjeta 1" />
	  <Tarjeta texto="Tarjeta 2" />
	  <Tarjeta texto="Tarjeta 3" /> 
	</View>
  );
};

const styles = StyleSheet.create({

Pressable: {
    color: 'white',
    backgroundColor: 'blue',
    padding: 40,
    textAlign: 'center',
    fontSize: 24,
    margin: 10,
    flex:1,
    borderRadius:20,
    borderColor: 'black',
    borderWidth: 2,
    },

PressableTouched: {
    color: 'black',
    backgroundColor: '#72f9ef',
    borderColor: 'black',
    }

});

export default Tarjetas; styles;