import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from './Themed';

import Colors from '@/constants/Colors';

export default function Stats() {
  return (
    <View style={[styles.row, styles.background]}>
      <View style={[styles.statBox, styles.background]}>
        <Text style={[styles.stat]}>2000</Text>
        <Text style={styles.wrap}>iPad pro</Text>
      </View>
      <View style={[styles.statBox, styles.background]}>
        <Text style={[styles.stat]}>2000</Text>
        <Text style={styles.wrap}>iPhone 14 Pro max</Text>
      </View>
      <View style={[styles.statBox, styles.background]}>
        <Text style={[styles.stat]}>2000</Text>
        <Text style={styles.wrap}>Chrome</Text>
      </View>
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
