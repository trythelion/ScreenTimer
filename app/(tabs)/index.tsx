import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Text, Pressable, TextInput, SafeAreaView, Modal, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Stats from '../../components/stats';
import { dataPool } from '@/assets/datapool'; // Import your data source

export default function EntriesScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [customRangePickerModelVisible, setCRMVisible] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedOption, setSelectedOption] = useState('This week');
  const [chartData, setChartData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const dp = dataPool();
  const [selectedEntry, setSelectedEntry] = useState(dp[dp.length - 1]);

  const show = () => setModalVisible(true);
  const hide = () => setModalVisible(false);
  const openCRModel = () => setCRMVisible(true);
  const closeCRModel = () => setCRMVisible(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await dataPool();
      setChartData(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (search) {
      const searchTerms = search.toLowerCase().split(' ');
      const filtered = chartData.filter(item => {
        const startDate = item.startDate.toLowerCase();
        const endDate = item.endDate.toLowerCase();
        const totalHours = item.totalHours.toString();

        return searchTerms.every(term =>
          startDate.includes(term) ||
          endDate.includes(term) ||
          totalHours.includes(term)
        );
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(chartData);
    }
  }, [search, chartData]);

  function changeTextHandler(text) {
    setSearch(text);
  }

  function handleOptionSelect(option) {
    setSelectedOption(option);
    hide();
  }

  function handleRowPress(item) {
    setSelectedEntry(item);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{selectedEntry.startDate.replaceAll("-", " ")} to {selectedEntry.endDate.replaceAll("-", " ")}</Text>

      <Stats devices={selectedEntry.devices} />
      <View style={styles.separator}></View>
      <Text style={styles.header}>Weeks logged</Text>
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
          }}>
          <FontAwesome name="search" size={24} color="#fff" />
        </Pressable>
      </View>
      <ScrollView style={styles.table}>
        {filteredData.length > 0 ? (
          <>
            <View style={styles.tableRow}>
              <Text style={[styles.title]}>Day range</Text>
              <Text style={styles.title}>Total Screen Time</Text>
            </View>
            {filteredData.map((item, index) => (
              <Pressable key={index} style={styles.tableRow} onPress={() => handleRowPress(item)}>
                <Text style={styles.tableText}>{item.startDate.replaceAll("-", " ")} to {item.endDate.replaceAll("-", " ")}</Text>
                <Text style={styles.tableText}>{item.totalHours} h</Text>
              </Pressable>
            ))}
          </>
        ) : (
          <Text style={styles.tableText}>No data available</Text>
        )}
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
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    width: '100%',
    marginVertical: 20,
    alignSelf: 'center',
  },
});
