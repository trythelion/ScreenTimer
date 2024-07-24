import { StatusBar } from 'expo-status-bar';
import { Platform, ScrollView, StyleSheet, Switch, TextInput } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useState } from 'react';

export default function ModalScreen() {
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Server configuration </Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.rowify}>
        <Text style={styles.text}>Server IP</Text>
        <TextInput style={styles.input} placeholder='172.0.0.1'/>
      </View>
      <View style={styles.rowify}>
        <Text style={styles.text}>Server Port</Text>
        <TextInput style={styles.input} placeholder='9002'/>
      </View>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <Text style={styles.title}>Accsesability </Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
      <View style={styles.rowify}>
      <Text>Audio Feedback </Text>
      <Switch value={isEnabled} onValueChange={toggleSwitch} thumbColor={'#f9f9f9'} trackColor={isEnabled ? 'red' : 'red'}/>
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rowify: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 2,
  },
  container: {
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    // marginRight: 'auto',
  },
  input: {
    color: 'white',
    fontSize: 20,
    marginStart: 10,
  },
  separator: {
    marginVertical: 5,
    height: 2,
    width: '100%',
  },
});
