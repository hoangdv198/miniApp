import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Screens} from '../ultis/types/Navigation';

const MainScreen: React.FC = () => {
  const navigation = useNavigation();
  const listApp = [
    {name: 'App1', screen: Screens.App1},
    {name: 'App2', screen: Screens.App2},
    {name: 'App3', screen: Screens.App1},
  ];

  const renderList = useCallback(
    ({item}) => {
      return (
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: '#123456',
            borderRadius: 10,
            marginBottom: 10,
            marginHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate(item.screen)}>
          <Text style={{color: '#fff'}}>{item.name}</Text>
        </TouchableOpacity>
      );
    },
    [navigation],
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList data={listApp} renderItem={renderList} />
    </SafeAreaView>
  );
};

export default MainScreen;
