import React from 'react';
import {View, Text, Platform, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import tailwind from 'tailwind-rn';
import Icon from 'react-native-vector-icons/Ionicons';
function BaseScreen({
  height,
  navigation,
  label,
  headerLabel,
  children,
  onBack,
  backgroundColor,
  ...props
}) {
  return (
    <View style={[{backgroundColor: '#3945d5'}, tailwind('flex-1')]}>
      {headerLabel ? (
        <View
          style={tailwind('flex-1 justify-start items-center flex flex-row')}>
          {onBack && (
            <>
              <Icon.Button
                name="arrow-back-outline"
                size={35}
                backgroundColor="transparent"
                marginLeft={10}
                onPress={onBack}
              />
              <Text style={tailwind('text-white font-bold text-3xl')}>
                {headerLabel}
              </Text>
            </>
          )}
        </View>
      ) : (
        <View
          style={tailwind('flex-1 justify-center items-center flex flex-row')}>
          <Text style={tailwind('text-white uppercase font-bold text-4xl')}>
            Alby.
          </Text>
        </View>
      )}
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          {flex: height, backgroundColor: backgroundColor ?? 'white'},
          tailwind('p-8 px-4 rounded-t-3xl'),
        ]}>
        <ScrollView>
          {label && (
            <Text
              style={tailwind(
                'text-black text-center font-bold text-2xl mb-5',
              )}>
              {label}
            </Text>
          )}
          {children}
        </ScrollView>
      </Animatable.View>
    </View>
  );
}
export default BaseScreen;
