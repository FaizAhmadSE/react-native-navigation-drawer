import React from 'react';
import {View, Text, Button, StyleSheet, Switch, Image} from 'react-native';
import AppInput from '../components/AppInput';
import AppSelect from '../components/AppSelect';
import BaseScreen from '../components/BaseScreen';
import GradientButton from '../components/GradientButton';
import tailwind from 'tailwind-rn';
import {TouchableRipple, useTheme, Avatar} from 'react-native-paper';
import AppText from '../components/AppText';
import Icon from 'react-native-vector-icons/Ionicons';
const SettingsScreen = ({navigation}) => {
  const paperTheme = useTheme();
  return (
    <BaseScreen
      height={7}
      navigation={navigation}
      headerLabel="Settings"
      onBack={() => navigation.navigate('Home')}>
      <View style={{alignSelf: 'center', marginBottom: 15}}>
        <View>
          <Avatar.Image
            source={{
              uri: 'https://i.pravatar.cc/300',
            }}
            size={150}
          />
        </View>
        <View
          style={[
            {
              backgroundColor: '#3945d5',
              width: 35,
              height: 35,
            },
            tailwind(
              'flex-1 flex-shrink-0 items-center justify-center rounded-full absolute right-2 bottom-2',
            ),
          ]}>
          <Icon.Button
            name="camera"
            size={20}
            color="#DFD8C8"
            style={tailwind('-mr-3')}
            backgroundColor="transparent"
          />
        </View>
      </View>
      <AppInput
        label="Change Name"
        placeholder="Your name"
        // startIcon="user-o"
        // endIcon="check-circle"
        onChangeText={val => textInputChange(val)}
        style={tailwind('')}
      />
      <AppSelect
        label="Change my level"
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
        label="Change Grade System"
        placeholder="Grade System (e.g. 20/20,A+...)"
        value=""
        items={[{value: 0, label: 'Hello'}, {value: 1, label: 'Hi'}]}
      />
      <TouchableRipple onPress={() => {}} style={tailwind('mb-4')}>
        <View style={tailwind('flex-1 items-center justify-between flex-row')}>
          <Text style={[{fontFamily: 'Arial'}, tailwind('font-bold text-lg')]}>
            Notifications
          </Text>
          <View pointerEvents="none">
            <Switch value={paperTheme.dark} />
          </View>
        </View>
      </TouchableRipple>
      <GradientButton onPress={() => {}} label="Save" />
    </BaseScreen>
  );
};
export default SettingsScreen;
