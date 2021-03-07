import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text, TouchableOpacity} from 'react-native';
import tailwind from 'tailwind-rn';
function GradientButton({label, onPress}) {
  return (
    <TouchableOpacity onPress={() => onPress}>
      <LinearGradient
        colors={['#3945d5', '#2f39c0']}
        style={tailwind('items-center justify-center rounded-3xl p-3')}>
        <Text style={tailwind('text-white font-bold text-base')}>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
export default GradientButton;
