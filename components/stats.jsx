import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';
import Colors from '@/constants/Colors';
import { dataPool } from '@/assets/datapool';

export default function Stats({ devices }) {
  const sampleData = dataPool()[0];
  const deviceList = (devices !== null) ? devices : sampleData.devices;

  return (
    <View style={[styles.row, styles.background]}>
      {deviceList.map((device, index) => (
        <View key={index} style={[styles.statBox, styles.background]}>
          <Text style={[styles.stat]}>{device.hoursUsed} hours</Text>
          <Text style={styles.wrap}>{device.deviceName}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#151515',
  },
  row: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexShrink: 1,
  },
  stat: {
    marginBottom: 5,
    fontSize: 14,
    alignContent: 'center',
  },
  wrap: {
    flexWrap: 'wrap',
  },
  statBox: {
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 100,
    flexShrink: 2,
  }
});
