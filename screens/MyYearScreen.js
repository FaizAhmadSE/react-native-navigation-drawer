import React from 'react';
import {View, Text, Button, StyleSheet, Switch, Image} from 'react-native';
import AppInput from '../components/AppInput';
import AppSelect from '../components/AppSelect';
import BaseScreen from '../components/BaseScreen';
import GradientButton from '../components/GradientButton';
import tailwind, {getColor} from 'tailwind-rn';
import {TouchableRipple, useTheme, Avatar} from 'react-native-paper';
import AppText from '../components/AppText';
import Icon from 'react-native-vector-icons/Ionicons';
const MyYearScreen = ({navigation}) => {
  const paperTheme = useTheme();
  return (
    <BaseScreen
      height={7}
      navigation={navigation}
      headerLabel="My Year"
      backgroundColor={getColor('gray-200')}
      onBack={() => navigation.navigate('Home')}>
      <AppSelect
        placeholder="Trimester"
        style={tailwind('mb-4 bg-blue-700 font-bold text-white rounded-3xl')}
        value=""
        items={[
          {value: 1, label: 'Middle School'},
          {value: 2, label: 'High School'},
          {value: 3, label: 'College'},
          {value: 4, label: 'University'},
        ]}
      />
      <View
        style={[
          {
            elevation: 3,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
            shadowRadius: 10,
          },
          tailwind(
            'bg-white rounded-3xl flex-1 h-48 border border-gray-100 mb-5 mx-1',
          ),
        ]}
      />
    </BaseScreen>
  );
};
export default MyYearScreen;
