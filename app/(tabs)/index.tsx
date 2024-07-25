import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Text, Pressable, TextInput, SafeAreaView, Modal, Alert } from 'react-native';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Stats from '../../components/stats';
import { Link } from 'expo-router';

export default function EntriesScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [customRangePickerModelVisible, setCRMVisible] = useState(false);
  const [search, saveSearchText] = useState('');
  const [selectedOption, setSelectedOption] = useState('This week');

  const show = () => setModalVisible(true);
  const hide = () => setModalVisible(false);
  const openCRModel = () => setCRMVisible(true);
  const closeCRModel = () => setCRMVisible(false);

  function changeTextHandler(text: string) {
    saveSearchText(text);
  }

  function handleOptionSelect(option: string) {
    setSelectedOption(option);
    hide();
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchField}
            placeholder="Search"
            placeholderTextColor="#aaa"
            onChangeText={changeTextHandler}
            inputMode='search'
          />
          <Pressable
            onPress={() => {
              if (search) {
                Alert.alert("Search query", `The searched query was: ${search}`);
              }
            }}
          >
            <FontAwesome name="search" size={24} color="#fff" />
          </Pressable>
        </View>
        <View style={styles.dropdownContainer}>
          <Pressable style={styles.dropdownButton} onPress={show}>
            <Text style={styles.dropdownText}>{selectedOption}</Text>
            <FontAwesome name="caret-down" size={20} color="#fff" />
          </Pressable>
        </View>
        <Stats />
        <Text style={styles.header}>Days</Text>
        <ScrollView style={styles.table}>
          {["July 1, 2024", "July 1, 2024", "July 1, 2024", "July 1, 2024"].map((date, index) => (
            <Pressable key={index} style={styles.tableRow} onPress={() => { /* Navigate to details page */ }}>
              <Text style={styles.tableText}>{date}</Text>
              <Text style={styles.tableText}>30%</Text>
            </Pressable>
          ))}
        </ScrollView>
        <Modal visible={modalVisible} animationType="slide" onRequestClose={hide}>
          <SafeAreaView style={modalStyles.modalContainer}>
            <Pressable onPress={hide}>
              <FontAwesome name="close" size={25} color="#fff" />
            </Pressable>
            <Text style={modalStyles.title}>Select a time range</Text>
            {["This week", "Last week", "Month to date", "Last month"].map((range) => (
              <Pressable key={range} style={modalStyles.button} onPress={() => handleOptionSelect(range)}>
                <Text style={modalStyles.buttonText}>{range}</Text>
              </Pressable>
            ))}
            <Pressable
              style={[modalStyles.button, modalStyles.customButton]}
              onPress={() => {
                openCRModel();
                hide();
              }}
            >
              <Text style={modalStyles.buttonText}>Custom</Text>
              <FontAwesome name="caret-right" size={20} color="#fff" />
            </Pressable>
          </SafeAreaView>
        </Modal>

        <Modal visible={customRangePickerModelVisible} animationType="slide" onRequestClose={closeCRModel}>
          <SafeAreaView style={modalStyles.modalContainer}>
            <View style={modalStyles.customRangeHeader}>
              <Pressable onPress={() => {
                closeCRModel();
                show();
              }}>
                <FontAwesome name="arrow-left" size={25} color="#fff" />
              </Pressable>
              <Pressable onPress={closeCRModel}>
                <FontAwesome name="close" size={25} color="#fff" />
              </Pressable>
            </View>
            <Text style={modalStyles.title}>Select a custom time range</Text>
          </SafeAreaView>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}

const modalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 30,
    alignContent: 'center',
    paddingRight: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 20,
    textAlign: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    width: '80%',
    marginVertical: 20,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#434343',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    marginBottom: 5,
    marginLeft: 10,
    
  },
  customButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'left',
  },
  customRangeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
    padding: 20,
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#434343',
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchField: {
    flex: 1,
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  dropdownContainer: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#434343',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  dropdownText: {
    color: '#fff',
    fontSize: 14,
    marginRight: 10,
  },
  header: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  table: {
    backgroundColor: '#434343',
    borderRadius: 10,
    padding: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomColor: '#555',
    borderBottomWidth: 1,
  },
  tableText: {
    color: '#fff',
    fontSize: 16,
  },
});