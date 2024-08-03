import { StyleSheet, SafeAreaView } from 'react-native';
import { Text } from '@/components/Themed';
import {
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryBar
} from '../../components/modules/charts'; // Ensure correct dynamic import handling

import { Modal } from 'react-native';
import { dataPool } from '../../assets/datapool';
import { useState, useEffect } from 'react';
import { Pressable } from 'react-native';
import { ScrollView, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function analytics() {
  const sampleData = dataPool().slice(0, 4);

  const [modalVisible, setModalVisible] = useState(false);
  const [customRangePickerModelVisible, setCRMVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('This week');
  const show = () => setModalVisible(true);
  const hide = () => setModalVisible(false);
  const openCRModel = () => setCRMVisible(true);
  const closeCRModel = () => setCRMVisible(false);

  function handleOptionSelect(option: any) {
    setSelectedOption(option);
    hide();
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Your screen time patterns:</Text>
      <View style={styles.dropdownContainer}>
        <Pressable style={styles.dropdownButton} onPress={show}>
          <Text style={styles.dropdownText}>{selectedOption}</Text>
          <FontAwesome name="caret-down" size={20} color="#fff" />
        </Pressable>
      </View>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={{ x: 30 }} // Adjust padding if needed
        padding={{ top: 20, bottom: 70, left: 60, right: 20 }}
        style={{
          width: "100%",
            margin: 100,
        }}>
        <VictoryAxis
          tickValues={sampleData.map((_, index) => index + 1)}
          tickFormat={sampleData.map(data => data.startDate.replaceAll("-", " "))}
          style={{
            axis: { stroke: "#ffffff" },
            axisLabel: { fill: "#ffffff", padding: 10, marginTop: 1000 },
            ticks: { stroke: "#ffffff" },
            tickLabels: {
              fill: "#ffffff",
              angle: -50,
              textAnchor: "end"
            }
          }}
          label="Month" />
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: "#ffffff" },
            axisLabel: { fill: "#ffffff", padding: 50, marginLeft: 100, },
            ticks: { stroke: "#ffffff" },
            tickLabels: {
              fill: "#ffffff",
              fontSize: 6,
            }
          }}
          label="Total Screentime (Hours)" />
        <VictoryBar
          data={sampleData}
          x="startDate"
          y="totalHours"
          style={{
            data: {
              fill: "#fff",
              strokeWidth: 1
            }
          }}
        />
      </VictoryChart>
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
            }}>
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
    backgroundColor: '#1e1e1e',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
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
});
