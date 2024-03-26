import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { styles } from '../css/indexStyle';
import { Link } from 'expo-router'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Início</Text>
      <View style={styles.btns}>
        <Link style={styles.butao} href={"/sobre"}>Sobre</Link>
        <Link style={styles.butao} href={"/contatos"}>Contatos</Link>
        <Image style={styles.imagens}
        source={require('../../assets/boalagoarock.jpg')}
      />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}