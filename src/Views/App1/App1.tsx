import React, {useCallback, useRef, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import {styleBase} from '../../assets/styles';

import Video from 'react-native-video';
import {IVideo, videos} from './data';
const {height, width} = Dimensions.get('screen');

const VIDEO_HEIGHT = height / 3.5;

const ItemList: React.FC<{item: IVideo}> = ({item}) => {
  const [isPause, setPause] = useState(true);
  const [isLoading, setLoading] = useState(true);
  const player = useRef(null);

  const onBuffer = useCallback(() => {
    console.log('onBuffer');
  }, []);

  const videoError = useCallback(() => {
    console.log('videoError');
  }, []);

  return (
    <View>
      <Pressable onPress={() => setPause(true)}>
        <Video
          ref={player}
          source={{
            uri: item.sources[0],
          }} // Can be a URL or a local file.
          onBuffer={onBuffer} // Callback when remote video is buffering
          onError={videoError} // Callback when video cannot be loaded
          playWhenInactive={true}
          onReadyForDisplay={() => setLoading(false)}
          style={{height: VIDEO_HEIGHT, backgroundColor: '#000'}}
          paused={isPause}
          poster={item.thumb}
        />

        {isPause && (
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              backgroundColor: '#ccc',
              position: 'absolute',
              bottom: 125,
              right: width / 2 - 25,
            }}
            onPress={() => setPause(false)}
          />
        )}
      </Pressable>

      <View style={{flexDirection: 'row', padding: 10}}>
        <View style={styles.avatar}></View>
        <View style={{flex: 1}}>
          <Text>{item.title}</Text>
          <Text numberOfLines={2}>{item.description}</Text>
        </View>
      </View>
    </View>
  );
};

const TwoScreen = () => {
  const _renderItem = useCallback(({item}) => {
    return <ItemList item={item} />;
  }, []);

  return (
    <SafeAreaView style={styleBase.conainer}>
      <FlatList data={videos} renderItem={_renderItem} />
    </SafeAreaView>
  );
};

export default TwoScreen;

const styles = StyleSheet.create({
  avatar: {
    padding: 10,
    marginRight: 10,
    backgroundColor: '#ccc',
    height: VIDEO_HEIGHT / 5,
    width: VIDEO_HEIGHT / 5,
    borderRadius: VIDEO_HEIGHT / 10,
  },
});
