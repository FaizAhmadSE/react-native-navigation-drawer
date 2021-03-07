import React from 'react';
import {Picker} from '@react-native-picker/picker';
import BaseInput from './BaseInput';
import tailwind from 'tailwind-rn';

function AppSelect({placeholder, value, onChange, items, ...props}) {
  return (
    <BaseInput {...props}>
      <Picker
        selectedValue={value}
        onValueChange={onChange}
        style={tailwind(
          `flex-1 ${value == '' ? 'text-gray-400' : 'text-gray-800'}`,
        )}
        mode="dropdown">
        <Picker.Item key="" label={placeholder} value="" />
        {items.map(item => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Picker>
    </BaseInput>
  );
}

export default AppSelect;
