import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

const App4 = () => {
  const singleTap = Gesture.Tap()
    .maxDuration(250)
    .onStart(() => {
      Alert.alert('Single tap!');
    });

  const doubleTap = Gesture.Tap()
    .maxDuration(250)
    .onStart(() => {
      Alert.alert('Double tap!');
    });
  return (
    <GestureDetector gesture={Gesture.Exclusive(doubleTap, singleTap)}>
      <View style={styles.box} />
    </GestureDetector>
  );
};

export default App4;

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    backgroundColor: '#000',
  },
});
