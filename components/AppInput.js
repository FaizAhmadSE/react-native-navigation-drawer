import React from 'react';
import {TextInput, View} from 'react-native';
import BaseInput from './BaseInput';
import tailwind, {getColor} from 'tailwind-rn';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
const AppInput = ({
  value,
  placeholder,
  onChange,
  startIcon,
  keyboardType = 'default',
  endIcon,
  numberOfLines,
  multiline,
  textAlign,
  fullWidth = true,
  ...props
}) => (
  <BaseInput {...props}>
    {startIcon && <FontAwesome name={startIcon} color="#05375a" size={20} />}
    <TextInput
      {...props}
      value={value}
      keyboardType={keyboardType}
      placeholder={placeholder}
      placeholderTextColor={getColor('gray-400')}
      style={tailwind(`${fullWidth ? 'flex-1' : ''} pl-2 text-gray-800`)}
      textAlign={textAlign ?? 'left'}
      autoCapitalize="none"
      onChangeText={onChange}
      multiline={multiline}
      numberOfLines={numberOfLines}
    />
    {endIcon && (
      <Animatable.View animation="bounceIn">
        <Feather name={endIcon} color="green" size={20} />
      </Animatable.View>
    )}
  </BaseInput>
);
export default AppInput;
