import React from 'react';
import {SafeAreaView, Text, Image} from 'react-native';
import {SharedElement} from 'react-native-motion';
import {styleBase} from '../assets/styles';

const TwoScreen = () => {
  return (
    <SharedElement sourceId="MainScreen">
      <SafeAreaView style={styleBase.conainer}>
        <Image
          source={{uri: 'https://picsum.photos/id/237/200/300'}}
          style={{width: 200, height: 200}}
        />
        <Text>TwoScreen</Text>
      </SafeAreaView>
    </SharedElement>
  );
};

export default TwoScreen;
