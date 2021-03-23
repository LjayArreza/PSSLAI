import * as React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

function CustomHeader({title, isHome, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
      }}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        {isHome ? (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              style={{width: 20, height: 20, marginStart: 10}}
              source={require('./src/images/black_menu.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigation.goBack()}>
            <Image
              style={{width: 20, height: 20, marginStart: 10}}
              source={require('./src/images/black_back.png')}
              resizeMode="contain"
            />
            <Text>Back</Text>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          flex: 1.5,
          justifyContent: 'center',
        }}>
        <Text style={{textAlign: 'center'}}>{title}</Text>
      </View>
      <View style={{flex: 1}}></View>
    </View>
  );
}

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Home" isHome={true} navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('HomeDetails')}>
          <Text>Go Home Detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function HomeDetails({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Home Details" navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home Details</Text>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('Home')}>
          <Text>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function ContactScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Contact" navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Contact Us!</Text>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('ContactDetails')}>
          <Text>Go Contact Detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function ContactDetails({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Contact Details" isHome={true} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Contact Details</Text>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('Contact')}>
          <Text>Go to Contact</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1a237e'}}>
      <ScrollView>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => props.navigation.navigate('MenuTab')}>
          <Text style={{color: '#FFF', marginStart: 10}}>Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

const StackHome = createStackNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator>
      <StackHome.Screen
        name="Home"
        component={HomeScreen}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="HomeDetails"
        component={HomeDetails}
        options={navOptionHandler}
      />
    </StackHome.Navigator>
  );
}

const StackContact = createStackNavigator();

function ContactStack() {
  return (
    <StackContact.Navigator>
      <StackContact.Screen
        name="Contact"
        component={ContactScreen}
        options={navOptionHandler}
      />
      <StackContact.Screen
        name="ContactDetails"
        component={ContactDetails}
        options={navOptionHandler}
      />
    </StackContact.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? require('./src/images/home-filled.png')
              : require('./src/images/home.png');
          } else if (route.name === 'Contact') {
            iconName = focused
              ? require('./src/images/contact-filled.png')
              : require('./src/images/contact.png');
          }

          return (
            <Image
              source={iconName}
              style={{width: 20, height: 20, resizeMode: 'contain'}}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Contact" component={ContactStack} />
    </Tab.Navigator>
  );
}

const iDrawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <iDrawer.Navigator
        initialRouteName="MenuTab"
        drawerContent={props => CustomDrawerContent(props)}>
        <iDrawer.Screen name="MenuTab" component={TabNavigator} />
        <iDrawer.Screen name="Notifications" component={NotificationsScreen} />
      </iDrawer.Navigator>
    </NavigationContainer>
  );
}
