import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, View} from 'react-native';
import {RootStackParamList} from './../types/types';

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

const HomeScreen = ({navigation, route}: HomeScreenProps) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="go to Profile"
        onPress={() =>
          navigation.navigate('Profile', {
            id: '아이디 넘기기',
            name: '이름 넘기기',
          })
        }
      />
      <Button
        title="go to Scanner"
        onPress={() => navigation.navigate('Scanner')}
      />
    </View>
  );
};

export default HomeScreen;
