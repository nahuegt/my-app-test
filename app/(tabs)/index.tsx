import { Image, StyleSheet, Platform, Text, TextInput } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Svg } from 'react-native-svg';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFFF', dark: '#FFFF' }}
      headerImage={
        <Image
          source={require('@/assets/images/Fondo-Arriba-Degrade.png')}
          style={styles.fondodegrade}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">¡Hola!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.TextInput}>
          <TextInput placeholder='Cuit sin guiones'></TextInput>
      </ThemedView>
      <ThemedView style={styles.TextInput}>
          <TextInput placeholder='Contraseña'></TextInput>
      </ThemedView>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    fontSize: 1600,
    fontFamily: 'Roboto',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  fondodegrade: {
    height: 250,
    width: 430,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  titulos: {
    fontSize: 30,
    color: '#FFFF',
    fontWeight: 'bold',
  },
  TextInput: {
    borderWidth: 1,
    borderRadius: 9,
    borderColor: 'grey',
    padding: 15,
    width: 'auto',
    height: 50,
    marginTop: 20,
  }
});
