import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {styleBase} from '../../assets/styles';
// import {LightBox, LightBoxProvider} from '@alantoa/lightbox';
import {width} from '../../ultis/constan';

const App3 = () => {
  return (
    <SafeAreaView style={styleBase.conainer}>
      {/* <LightBoxProvider>
        <LightBox
          width={width / 3}
          height={width / 3}
          imgLayout={{width, height: width}}>
          <Image
            source={{
              uri: 'https://picsum.photos/200/300',
            }}
            style={StyleSheet.absoluteFillObject}
          />
        </LightBox>
      </LightBoxProvider> */}
    </SafeAreaView>
  );
};

export default App3;

const styles = StyleSheet.create({});
