import React, {useState} from 'react';
import tailwind from 'tailwind-rn';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

function ColorPicker({placeholder, value, onChange, items, ...props}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#bdc3c7');
  const colors = [
    '#bdc3c7',
    '#95a5a6',
    '#7f8c8d',
    '#2ecc71',
    '#27ae60',
    '#1abc9c',
    '#16a085',
    '#2c3e50',
    '#2980b9',
    '#313CCA',
    '#34495e',
    '#3498db',
    '#8e44ad',
    '#9b59b6',
    '#c0392b',
    '#C41DAD',
    '#d35400',
    '#FF3882',
    '#e74c3c',
    '#f1c40f',
    '#f39c12',
    '#FF7C5C',
    '#FFBD4D',
    '#e67e22',
  ];
  return (
    <View style={tailwind('relative mb-4 flex-1')}>
      <View
        style={tailwind(
          'relative flex-1 items-center justify-between flex-row pl-6 pr-2 h-12 border border-gray-200 rounded-3xl',
        )}
        onTouchEnd={() => setIsOpen(!isOpen)}>
        <Text style={tailwind('text-gray-400')}>Pick a Color</Text>
        <View
          style={[
            {borderColor: selectedColor},
            tailwind(
              'border border-2 flex h-8 w-8 rounded-full items-center justify-center rounded-3xl',
            ),
          ]}>
          <View
            style={[
              {backgroundColor: selectedColor},
              tailwind('h-6 w-6 rounded-full'),
            ]}
          />
        </View>
      </View>

      {isOpen && (
        <View style={[{width: 266}, tailwind('absolute z-10 right-10 mt-8')]}>
          <View
            style={[
              styles.shadow,
              tailwind(
                'bg-white border border-gray-100 rounded-2xl rounded-tr-none p-2 pb-0 pr-0 items-center justify-start flex-wrap flex-row ',
              ),
            ]}>
            {colors.map((color, index) => (
              <View style={[tailwind('h-16 w-16 pb-2 pr-2')]}>
                <View
                  key={color}
                  style={[
                    {backgroundColor: color},
                    styles.shadow,
                    tailwind('rounded-xl flex-1 items-center justify-center'),
                  ]}
                  onTouchEnd={() => {
                    setSelectedColor(color);
                    setIsOpen(false);
                  }}>
                  {selectedColor === color && (
                    <Animatable.View animation="bounceIn">
                      <Icon.Button
                        name="checkmark-circle-outline"
                        size={30}
                        style={tailwind('pl-2 -mr-3')}
                        backgroundColor="transparent"
                      />
                    </Animatable.View>
                  )}
                </View>
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
}

export default ColorPicker;

const styles = StyleSheet.create({
  shadow: {
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
});
