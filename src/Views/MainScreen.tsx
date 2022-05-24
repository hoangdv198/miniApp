import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SharedElement} from 'react-native-motion';
import {useQuery} from 'react-query';
import * as ImagePicker from 'expo-image-picker';

const MainScreen: React.FC = () => {
  const navigation = useNavigation();
  const {isLoading, error, data, isFetching} = useQuery('repoData', () =>
    axios.get('https://picsum.photos/id/237/200/300').then(res => res.data),
  );
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  useEffect(() => {
    if (isLoading) {
      console.log('data2', data);
    }
  }, [isLoading, data]);

  return (
    <SharedElement id="MainScreen">
      <SafeAreaView style={{flex: 1}}>
        <View>
          {/* <FlatList
            data={}
            renderItem={
            
            }
          /> */}
          <SharedElement id="MainScreen">
            <Image
              source={{uri: 'https://picsum.photos/id/237/200/300'}}
              style={{width: 200, height: 200}}
            />
          </SharedElement>
          <TouchableOpacity onPress={() => navigation.navigate('Home2')}>
            <Image
              source={{uri: 'https://picsum.photos/id/237/200/300'}}
              style={{width: 200, height: 200}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home2')}>
            <Image
              source={{uri: 'https://picsum.photos/id/237/200/300'}}
              style={{width: 200, height: 200}}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Home2')}>
          <Text>two screen</Text>
        </TouchableOpacity>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && (
          <Image source={{uri: image}} style={{width: 200, height: 200}} />
        )}
      </SafeAreaView>
    </SharedElement>
  );
};

export default MainScreen;
