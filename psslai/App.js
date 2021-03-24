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

function DashboardScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Dashboard" isHome={true} navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Dashboard!</Text>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('DashboardDetails')}>
          <Text>Go Dashboard Detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function DashboardDetails({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Dashboard Details" navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Dashboard Details</Text>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('Dashboard')}>
          <Text>Go to Dashboard</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function TransferScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Transfer" navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Transfer Funds</Text>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('TransferDetails')}>
          <Text>Go Transfer Detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function TransferDetails({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Transfer Details" isHome={true} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Transfer Funds Details</Text>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('Transfer')}>
          <Text>Go to Transfer Funds</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function PayBillsScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Pay Bills" navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Pay Bills!</Text>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('PayBillsDetails')}>
          <Text>Go Pay Bills Detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function PayBillsDetails({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Pay Bills" navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Pay Bills!</Text>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('Pay Bills')}>
          <Text>Go Pay Bills Detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back Dashboard" />
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1a237e'}}>
      <ScrollView>
        <Text
          style={{
            color: '#FFF',
            marginTop: 10,
            marginStart: 10,
            fontWeight: 'bold',
            fontSize: 40,
          }}>
          PSSLAI
        </Text>
        <View
          style={{
            backgroundColor: '#FFF',
            width: '100%',
            height: 2,
            marginTop: 10,
          }}
        />
        <TouchableOpacity
          style={{marginTop: 10}}
          onPress={() => props.navigation.navigate('MenuTab')}>
          <Text style={{color: '#FFF', marginStart: 10, marginTop: 20}}>
            Home
          </Text>
          <Text style={{color: '#FFF', marginStart: 10, marginTop: 20}}>
            Login
          </Text>
          <Text style={{color: '#FFF', marginStart: 10, marginTop: 20}}>
            Sign Up
          </Text>
          <Text style={{color: '#FFF', marginStart: 10, marginTop: 20}}>
            Membership
          </Text>
          <Text style={{color: '#FFF', marginStart: 10, marginTop: 20}}>
            Products
          </Text>
          <Text style={{color: '#FFF', marginStart: 10, marginTop: 20}}>
            About
          </Text>
          <Text style={{color: '#FFF', marginStart: 10, marginTop: 20}}>
            Our Offices
          </Text>
          <Text style={{color: '#FFF', marginStart: 10, marginTop: 20}}>
            Contact
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

const StackDashboard = createStackNavigator();

function DashboardStack() {
  return (
    <StackDashboard.Navigator>
      <StackDashboard.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={navOptionHandler}
      />
      <StackDashboard.Screen
        name="DashboardDetails"
        component={DashboardDetails}
        options={navOptionHandler}
      />
    </StackDashboard.Navigator>
  );
}

const StackTransfer = createStackNavigator();

function TransferStack() {
  return (
    <StackTransfer.Navigator>
      <StackTransfer.Screen
        name="Transfer"
        component={TransferScreen}
        options={navOptionHandler}
      />
      <StackTransfer.Screen
        name="TransferDetails"
        component={TransferDetails}
        options={navOptionHandler}
      />
    </StackTransfer.Navigator>
  );
}

const StackPayBills = createStackNavigator();

function PayBillsStack() {
  return (
    <StackPayBills.Navigator>
      <StackPayBills.Screen
        name="Pay Bills"
        component={PayBillsScreen}
        options={navOptionHandler}
      />
      <StackPayBills.Screen
        name="PayBillsDetails"
        component={PayBillsDetails}
        options={navOptionHandler}
      />
    </StackPayBills.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused
              ? require('./src/images/home-filled.png')
              : require('./src/images/home.png');
          } else if (route.name === 'Transfer Funds') {
            iconName = focused
              ? require('./src/images/contact-filled.png')
              : require('./src/images/contact.png');
          } else if (route.name === 'Pay Bills') {
            iconName = focused
              ? require('./src/images/contact-filled.png')
              : require('./src/images/contact.png');
          } else if (route.name === 'Buy Load') {
            iconName = focused
              ? require('./src/images/contact-filled.png')
              : require('./src/images/contact.png');
          } else if (route.name === 'More') {
            iconName = focused
              ? require('./src/images/more-filled.png')
              : require('./src/images/more.png');
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
      <Tab.Screen name="Dashboard" component={DashboardStack} />
      <Tab.Screen name="Transfer Funds" component={TransferStack} />
      <Tab.Screen name="Pay Bills" component={PayBillsStack} />
      <Tab.Screen name="Buy Load" component={TransferStack} />
      <Tab.Screen name="More" component={TransferStack} />
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
