import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

export default function Loader() {
  return (
    <View style={styles.laoadingContainer}>
      <ActivityIndicator size={'large'} color={'#1DB954'} />
    </View>
  );
}

const styles = StyleSheet.create({
  laoadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
