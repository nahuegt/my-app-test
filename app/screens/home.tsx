import { Image, StyleSheet, Platform, Text, TextInput } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Hola</Text>
        </View> 
    )
}