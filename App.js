import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState("");

  const buttonPressed = () => {
    Alert.alert(text)
  }

  return (
    <View style={styles.container}>
      <Text>Hello maailma</Text>
      <TextInput
        placeholder='Enter text here'
        onChangeText={text => setText(text)}
        value={text}
      />
      <Button onPress={buttonPressed} title="Press me" />
      <Image
        style={{ height: 100, width: 100 }}
        source={require('./assets/icon.png')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
