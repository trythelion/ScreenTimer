import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, View, Text, Pressable, TextInput, Alert, SafeAreaView, Modal } from 'react-native';
import { useState } from 'react';
import Timerangeselector from '../../components/timerangeselector'; // Import the `Timerangeselector` component model
import { FontDisplay } from 'expo-font';
import { Linking } from 'react-native';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { Ref } from 'react';
import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import Stats  from '../../components/stats';

export default function entriesScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [search, saveSearchText] = useState('');
  const show = () => setModalVisible(true);
  const hide = () => setModalVisible(false);

  function changeTextHandler(text: string) {
    saveSearchText(text);
  }

  return (
    <SafeAreaView
     style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.searchBox}>
      <TextInput
        style={styles.searchFeild}
        placeholder='search' onChangeText={(text) => {
          changeTextHandler(text);
        }} inputMode='search'/>
        <Pressable onPress={() => {
          if (search != "" || search != null) {
            throw new Error("The searched quary was: " + search);6
          }
        }}>
        <Text><FontAwesome name="search" size={50} color={'#fff'}/></Text>
        </Pressable>
      </View>
      <View>
        <Pressable style={styles.button} onPress={show}>
          <Text style={styles.text}>This Week</Text>
          <FontAwesome name="caret-down" size={35} color={'#fff'}/>
        </Pressable>
      </View>
      <Stats/>
      <Text style={styles.text}>Days</Text>
      <Modal visible={modalVisible} style={[modalStyles.container]} animationType='slide' onRequestClose={hide}>
        <SafeAreaView style={[modalStyles.itemsRight, modalStyles.background]}>
          <Pressable onPress={hide}>
            <Text style={modalStyles.white}><FontAwesome name='close' size={25}/></Text>
          </Pressable>
        </SafeAreaView>
        <SafeAreaView style={[modalStyles.container, modalStyles.background]}>
        <Text style={[modalStyles.title, modalStyles.white]}>Select a time range</Text>
        <View style={modalStyles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Pressable style={modalStyles.button}>
          <Text style={modalStyles.white}> This Week</Text>
        </Pressable>
        <Pressable style={modalStyles.button}>
          <Text style={modalStyles.white}> Last Week</Text>
        </Pressable>
        <Pressable style={modalStyles.button}>
          <Text style={modalStyles.white}>Month to date</Text>
        </Pressable>
        <Pressable style={modalStyles.button}>
          <Text style={modalStyles.white}>Last Month</Text>
        </Pressable>
        <Pressable style={modalStyles.button}>
          <Text style={[modalStyles.white, modalStyles.push]}>Custom</Text>
          <FontAwesome style={modalStyles.white} name='caret-right'/>
        </Pressable>
       </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const modalStyles = StyleSheet.create({
  push: {
    marginRight: 'auto',
  },
  background: {
    backgroundColor: '#1E1E1E',
  },
  white: {
    color: 'white',
  },
  itemsRight: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: '#434343',
    padding: 10,
    marginBottom: 2,
    width: '90%',
    color: '#fff',
    borderRadius: 6,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#151515',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

const styles = StyleSheet.create({
  searchFeild: {
    color: 'white',
    backgroundColor: '#434343',
    padding: 15,
    margin: 5,
    width: '100%',
  },
  searchBox: {
    color: 'white',
    backgroundColor: '#434343',
    paddingLeft: 10,
    flexDirection: 'row',
  },
  button: {
    flexDirection: 'row',
    color: '#fff',
    backgroundColor: '#434343',
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginRight: 'auto',
    marginBottom: 8,
    marginTop: 5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    margin: '10px',
  },
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});