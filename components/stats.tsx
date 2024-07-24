import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from './Themed';

import Colors from '@/constants/Colors';

export default function Stats() {
  return (
    <View style={[styles.row, styles.background]}>
      <View style={[styles.statBox, styles.background]}>
        <Text style={[styles.stat]}>2000</Text>
        <Text>iPad pro</Text>
      </View>
      <View style={[styles.statBox, styles.background]}>
        <Text style={[styles.stat]}>2000</Text>
        <Text>iPhone 14 Pro max</Text>
      </View>
      <View style={[styles.statBox, styles.background]}>
        <Text style={[styles.stat]}>2000</Text>
        <Text>Chrome</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#1E1E1E',
  },
  row: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  stat: {
    marginBottom: 2,
  },
  statBox: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
  }
});
