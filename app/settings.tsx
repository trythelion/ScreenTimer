import { StatusBar } from 'expo-status-bar';
import { Platform, ScrollView, StyleSheet, Switch, TextInput } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useState } from 'react';
import playSwitchSound from '@/components/soundHandler';

export default function ModalScreen() {
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Server Configuration</Text>
      <View style={styles.separator} />
      <View style={styles.rowify}>
        <Text style={styles.label}>Server IP</Text>
        <TextInput style={styles.input} placeholder='172.0.0.1' placeholderTextColor='#aaa'/>
      </View>
      <View style={styles.rowify}>
        <Text style={styles.label}>Server Port</Text>
        <TextInput style={styles.input} placeholder='9002' placeholderTextColor='#aaa'/>
      </View>
      <Text style={styles.title}>Accessibility</Text>
      <View style={styles.separator}/>
      <View style={styles.rowify}>
        <Text style={styles.label}>Audio Feedback</Text>
        <Switch 
          value={isEnabled} 
          onValueChange={toggleSwitch} 
          thumbColor={Platform.OS === 'ios' ? undefined : '#434343'} 
          trackColor={Platform.OS === 'ios' ? undefined : { false: '#555', true: '#777' }}
          onChange={() => {
            playSwitchSound();
          }}
        />
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515', 
    padding: 20,
  },
  rowify: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingBottom: 10,
    alignItems: 'center',
    backgroundColor: '#151515',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
  },
  label: {
    fontSize: 14, 
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 'auto',
  },
  input: {
    flex: 1,
    color: '#fff', 
    fontSize: 18,
    marginStart: 10,
    backgroundColor: '#434343', // Input background to match the rest of the UI
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,
    maxWidth: '50%',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '100%',
    backgroundColor: '#555', // Darker separator to match theme
  },
});
