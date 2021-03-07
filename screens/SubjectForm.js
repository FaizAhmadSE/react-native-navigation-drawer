import React from 'react';
import {View, Text, Button, StyleSheet, Switch, Image} from 'react-native';
import AppInput from '../components/AppInput';
import AppSelect from '../components/AppSelect';
import BaseScreen from '../components/BaseScreen';
import GradientButton from '../components/GradientButton';
import tailwind, {getColor} from 'tailwind-rn';
import AppText from '../components/AppText';
import Icon from 'react-native-vector-icons/Ionicons';
import ColorPicker from '../components/ColorPicker';
const SubjectForm = ({navigation}) => {
  return (
    <BaseScreen
      height={7}
      navigation={navigation}
      headerLabel="Create Subject"
      onBack={() => navigation.navigate('Home')}>
      <AppInput
        placeholder="Subject (e.g. Mathematics)"
        // startIcon="user-o"
        // endIcon="check-circle"
        onChangeText={val => textInputChange(val)}
      />
      <ColorPicker
        placeholder="Pick a color"
        // startIcon="user-o"
        endIcon="check-circle"
        onChangeText={val => textInputChange(val)}
      />
      <View style={tailwind('flex flex-row items-center justify-between mb-4')}>
        <Text style={tailwind('text-xl ml-6')}>Coefficient: </Text>
        <AppSelect
          style={tailwind('mb-0 w-32')}
          fullWidth={false}
          placeholder=""
          value={1}
          items={[
            {value: 1, label: '1'},
            {value: 2, label: '2'},
            {value: 3, label: '3'},
            {value: 4, label: '4'},
          ]}
        />
      </View>
      <AppInput
        placeholder="Add a room (e.g. A 21)"
        // startIcon="user-o"
        // endIcon="check-circle"
        onChangeText={val => textInputChange(val)}
      />
      <AppInput
        placeholder="Add a teacher name"
        // startIcon="user-o"
        // endIcon="check-circle"
        onChangeText={val => textInputChange(val)}
      />
      <AppInput
        placeholder="Add a note (e.g. mail of the teacher)"
        // startIcon="user-o"
        // endIcon="check-circle"
        multiline={true}
        numberOfLines={5}
        onChangeText={val => textInputChange(val)}
      />
      <GradientButton onPress={() => {}} label="Create" />
    </BaseScreen>
  );
};
export default SubjectForm;
