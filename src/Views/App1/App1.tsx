import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {styleBase} from '../../assets/styles';
import CalendarModule from '../../nativeModule/CalendarModule';

const TwoScreen = () => {
  const onPress = () => {
    CalendarModule.createCalendarEvent(
      'testName',
      'testLocation',
      (error, eventId) => {
        if (error) {
          console.error(`Error found! ${error}`);
        }
        console.log(`event id ${eventId} returned`);
      },
    );
    const {DEFAULT_EVENT_NAME} = CalendarModule.getConstants();
    console.log(DEFAULT_EVENT_NAME);
  };
  return (
    <SafeAreaView style={styleBase.containerCenter}>
      <TouchableOpacity onPress={onPress}>
        <Text>TwoScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <Text>TwoScreen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TwoScreen;
