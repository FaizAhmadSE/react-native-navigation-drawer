import React from 'react';
import {View, Text} from 'react-native';
import tailwind from 'tailwind-rn';

const BaseInput = ({children, label, style, multiline, fullWidth}) => (
  <View
    style={[tailwind(`${fullWidth ? 'flex-1' : ''} flex-col mb-4 z-0`), style]}>
    {label && (
      <Text style={tailwind('mb-3 -mt-2 text-lg text-gray-400')}>{label}</Text>
    )}
    <View
      style={[
        tailwind(
          `border rounded-3xl border-gray-200 flex-row justify-start pl-4 pr-4 ${(multiline
            ? 'items-end'
            : 'items-center',
          fullWidth ? 'flex-1' : '')}`,
        ),
      ]}>
      {children}
    </View>
  </View>
);

export default BaseInput;
