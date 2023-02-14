import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../types/types';

export type ProfileScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Profile'
>;

const ProfileScreen = ({navigation, route}: ProfileScreenProps) => {
  const {id, name} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>id : {id}</Text>
      <Text>name : {name}</Text>
      <Button title="go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default ProfileScreen;
