import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BoasVindas from './components/boasVindas';
import Contador from './components/contador';
import NomeUsuario from './components/nomeUsuario';

export default function App() {
  return (
    <NomeUsuario></NomeUsuario>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
