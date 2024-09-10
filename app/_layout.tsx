import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons'; // Importa los iconos de Ionicons

export default function RootLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarStyle: {
        backgroundColor: 'white', // Color de fondo de la barra de los tabs
      },
      tabBarActiveTintColor: 'red', // Color del texto y el icono cuando el tab está activo
      tabBarInactiveTintColor: 'black', // Color del texto y el icono cuando el tab está inactivo
    }}
  >
      <Tabs.Screen
        name="index"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color="red" size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="tarjetas"
        options={{
          title: "Tarjetas",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="albums" color= "red" size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="sumador"
        options={{
          title: "Sumador",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calculator" color="red" size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
