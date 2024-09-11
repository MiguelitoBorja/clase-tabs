import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons'; // Importa los iconos de Ionicons

export default function RootLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarStyle: {
        backgroundColor: '#e4f0ef', // Color de fondo de la barra de los tabs
      },
      tabBarActiveTintColor: '#0c4ecf', // Color del texto y el icono cuando el tab está activo
      tabBarInactiveTintColor: 'black', // Color del texto y el icono cuando el tab está inactivo
    }}
  >
      <Tabs.Screen
        name="index"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="tarjetas"
        options={{
          title: "Tarjetas",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="albums" size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="sumador"
        options={{
          title: "Sumador",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calculator"  size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
