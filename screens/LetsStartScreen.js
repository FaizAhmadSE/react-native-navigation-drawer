import React from 'react';
import {View, Text, Platform, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import GradientButton from '../components/GradientButton';
import AppInput from '../components/AppInput';
import tailwind from 'tailwind-rn';
import AppSelect from '../components/AppSelect';
import BaseScreen from '../components/BaseScreen';

const letsStartScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    name: '',
    grade_system: '',
    education_level: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        name: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        name: val,
        check_textInputChange: false,
      });
    }
  };

  const handlegrade_systemChange = val => {
    setData({
      ...data,
      grade_system: val,
    });
  };

  const handleConfirmgrade_systemChange = val => {
    setData({
      ...data,
      education_level: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  return (
    <BaseScreen height={4} label="Let's Start!">
      <AppInput
        placeholder="Your name"
        // startIcon="user-o"
        // endIcon="check-circle"
        onChangeText={val => textInputChange(val)}
        style={tailwind('')}
      />
      <AppSelect
        // label="Country"
        placeholder="Select your level of education"
        style={tailwind('mb-4')}
        value=""
        items={[
          {value: 1, label: 'Middle School'},
          {value: 2, label: 'High School'},
          {value: 3, label: 'College'},
          {value: 4, label: 'University'},
        ]}
      />
      <AppSelect
        // label="Country"
        placeholder="Grade System (e.g. 20/20,A+...)"
        value=""
        items={[{value: 0, label: 'Hello'}, {value: 1, label: 'Hi'}]}
      />
      <View>
        <GradientButton onPress={() => {}} label="Add Timetable" />
      </View>
    </BaseScreen>
  );
};

export default letsStartScreen;
