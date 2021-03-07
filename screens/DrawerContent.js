import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {AuthContext} from '../components/context';

export function DrawerContent({navigation, ...props}) {
  //   const paperTheme = useTheme();

  //   const {signOut, toggleTheme} = React.useContext(AuthContext);

  return (
    <View style={{flex: 1}}>
      <View style={styles.userInfoSection}>
        <Ionicons.Button
          name="ios-menu"
          size={35}
          backgroundColor="transparent"
          marginLeft={10}
          onPress={() => navigation.closeDrawer()}
        />
      </View>
      <View style={{flex: 5}}>
        <DrawerContentScrollView {...props}>
          <View style={{flex: 1}}>
            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="home-outline" color={color} size={size} />
                )}
                label="Home"
                onPress={() => {
                  navigation.navigate('Home');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="account-outline" color={color} size={size} />
                )}
                label="Agenda"
                onPress={() => {
                  navigation.navigate('LetsStartScreen');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="bookmark-outline" color={color} size={size} />
                )}
                label="My Courses"
                onPress={() => {
                  navigation.navigate('SubjectForm');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="settings-outline" color={color} size={size} />
                )}
                label="Timetable"
                onPress={() => {
                  navigation.navigate('TimetableScreen');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon
                    name="account-check-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="My Year"
                onPress={() => {
                  navigation.navigate('MyYearScreen');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="settings-outline" color={color} size={size} />
                )}
                label="Options"
                onPress={() => {
                  navigation.navigate('SettingsScreen');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="settings-outline" color={color} size={size} />
                )}
                label="Recycle Bin"
                onPress={() => {
                  navigation.navigate('RecycleBinScreen');
                }}
              />
            </Drawer.Section>
            {/* <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section> */}
          </View>
        </DrawerContentScrollView>
        {/* <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#3945d5',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
    flex: 4,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
