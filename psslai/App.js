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
import COLORS from './app/colors/COLORS';
import {color} from 'react-native-reanimated';

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
      <ScrollView>
        <View
          style={{
            backgroundColor: COLORS.transparent,
            width: '100%',
            marginTop: 20,
          }}>
          <Image
            style={{marginStart: 20, height: 30, width: 90}}
            source={require('./src/images/psslai_logo.png')}
          />
          <TouchableOpacity>
            <Image
              style={{
                marginStart: '90%',
                height: 25,
                width: 25,
                marginTop: -25,
              }}
              source={require('./src/images/notification_icon.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={{marginStart: 20, marginTop: 30}}>
          <Text
            style={{color: COLORS.primary, fontSize: 30, fontWeight: 'bold'}}>
            Get yours now!
          </Text>
        </View>

        <View
          style={{
            backgroundColor: COLORS.primary,
            width: '90%',
            height: '55%',
            marginStart: 20,
            marginTop: 20,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: COLORS.white,
              marginStart: 20,
              marginTop: 20,
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            PSSLAI Visa Card
          </Text>
          <Text
            style={{
              color: COLORS.white,
              marginStart: 20,
              fontSize: 20,
            }}>
            xxxx xxxx xxxx
          </Text>
        </View>

        <View
          style={{
            marginStart: 25,
            marginTop: 50,
            flexDirection: 'row',
            flex: 1,
          }}>
          <Image
            style={{width: 30, height: 30}}
            source={require('./src/images/withdraw_icon.png')}
          />

          <Text
            style={{flex: 1, flexWrap: 'wrap', marginStart: 30, marginEnd: 30}}>
            Withdraw cash from any UnionBank/Banknet/Visa ATM
          </Text>
        </View>

        <View
          style={{
            marginStart: 20,
            marginEnd: 20,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              marginTop: 40,
              borderColor: COLORS.primary,
              borderWidth: 2,
              width: 200,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 6,
            }}>
            <Text style={{fontWeight: 'bold', color: COLORS.medium}}>
              Apply for Visa Card
            </Text>
          </View>
        </View>
      </ScrollView>
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
      {/* <CustomHeader title="Transfer" navigation={navigation} /> */}
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Transfer Funds</Text>
        {/* <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('TransferDetails')}>
          <Text>Go Transfer Detail</Text>
        </TouchableOpacity> */}
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
      {/* <CustomHeader title="Pay Bills" navigation={navigation} /> */}
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Pay Bills!</Text>
        {/* <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('PayBillsDetails')}>
          <Text>Go Pay Bills Detail</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}

function BuyLoadScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <CustomHeader title="Buy Load" navigation={navigation} /> */}
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Buy Load!</Text>
        {/* <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('PayBillsDetails')}>
          <Text>Go Pay Bills Detail</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}

function MoreScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <CustomHeader title="More" navigation={navigation} /> */}
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>More Screen!</Text>
        {/* <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('PayBillsDetails')}>
          <Text>Go Pay Bills Detail</Text>
        </TouchableOpacity> */}
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
      <Text
        style={{
          color: '#FFF',
          marginTop: 10,
          marginStart: 25,
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
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            height: 50,
            alignItems: 'center',
          }}>
          <View style={{marginStart: 25}}>
            <Image
              style={{width: 20, height: 20}}
              source={require('./src/images/home_icon_white.png')}
              resizeMode="contain"
            />
          </View>
          <Text
            style={{
              color: '#FFF',
              marginStart: 15,
              marginTop: 3,
              fontWeight: 'bold',
            }}>
            Home
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginTop: 10}}
        onPress={() => props.navigation.navigate('MenuTab')}>
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            alignItems: 'center',
          }}>
          <View style={{marginStart: 25}}>
            <Image
              style={{width: 20, height: 20}}
              source={require('./src/images/home_icon_white.png')}
              resizeMode="contain"
            />
          </View>
          <Text
            style={{
              color: '#FFF',
              marginStart: 15,
              marginTop: 3,
              fontWeight: 'bold',
            }}>
            Login
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginTop: 10}}
        onPress={() => props.navigation.navigate('MenuTab')}>
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            alignItems: 'center',
          }}>
          <View style={{marginStart: 25}}>
            <Image
              style={{width: 20, height: 20}}
              source={require('./src/images/home_icon_white.png')}
              resizeMode="contain"
            />
          </View>
          <Text
            style={{
              color: '#FFF',
              marginStart: 15,
              marginTop: 3,
              fontWeight: 'bold',
            }}>
            Sign Up
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginTop: 10}}
        onPress={() => props.navigation.navigate('MenuTab')}>
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            alignItems: 'center',
          }}>
          <View style={{marginStart: 25}}>
            <Image
              style={{width: 20, height: 20}}
              source={require('./src/images/home_icon_white.png')}
              resizeMode="contain"
            />
          </View>
          <Text
            style={{
              color: '#FFF',
              marginStart: 15,
              marginTop: 3,
              fontWeight: 'bold',
            }}>
            Membership
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginTop: 10}}
        onPress={() => props.navigation.navigate('MenuTab')}>
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            alignItems: 'center',
          }}>
          <View style={{marginStart: 25}}>
            <Image
              style={{width: 20, height: 20}}
              source={require('./src/images/home_icon_white.png')}
              resizeMode="contain"
            />
          </View>
          <Text
            style={{
              color: '#FFF',
              marginStart: 15,
              marginTop: 3,
              fontWeight: 'bold',
            }}>
            Products
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginTop: 10}}
        onPress={() => props.navigation.navigate('MenuTab')}>
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            alignItems: 'center',
          }}>
          <View style={{marginStart: 25}}>
            <Image
              style={{width: 20, height: 20}}
              source={require('./src/images/home_icon_white.png')}
              resizeMode="contain"
            />
          </View>
          <Text
            style={{
              color: '#FFF',
              marginStart: 15,
              marginTop: 3,
              fontWeight: 'bold',
            }}>
            About
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginTop: 10}}
        onPress={() => props.navigation.navigate('MenuTab')}>
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            alignItems: 'center',
          }}>
          <View style={{marginStart: 25}}>
            <Image
              style={{width: 20, height: 20}}
              source={require('./src/images/home_icon_white.png')}
              resizeMode="contain"
            />
          </View>
          <Text
            style={{
              color: '#FFF',
              marginStart: 15,
              marginTop: 3,
              fontWeight: 'bold',
            }}>
            Our Offices
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginTop: 10}}
        onPress={() => props.navigation.navigate('MenuTab')}>
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            alignItems: 'center',
          }}>
          <View style={{marginStart: 25}}>
            <Image
              style={{width: 20, height: 20}}
              source={require('./src/images/home_icon_white.png')}
              resizeMode="contain"
            />
          </View>
          <Text
            style={{
              color: '#FFF',
              marginStart: 15,
              marginTop: 3,
              fontWeight: 'bold',
            }}>
            Contact
          </Text>
        </View>
      </TouchableOpacity>

      <View style={{marginStart: 25, marginTop: 200}}>
        <Text style={{color: '#FFF'}}>App Version 2.5.2-UAT</Text>
      </View>
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
      {/* <StackTransfer.Screen
        name="TransferDetails"
        component={TransferDetails}
        options={navOptionHandler}
      /> */}
    </StackTransfer.Navigator>
  );
}

const StackBuyLoad = createStackNavigator();

function BuyLoadStack() {
  return (
    <StackTransfer.Navigator>
      <StackTransfer.Screen
        name="Transfer"
        component={BuyLoadScreen}
        options={navOptionHandler}
      />
      {/* <StackTransfer.Screen
        name="TransferDetails"
        component={TransferDetails}
        options={navOptionHandler}
      /> */}
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
      {/* <StackPayBills.Screen
        name="PayBillsDetails"
        component={PayBillsDetails}
        options={navOptionHandler}
      /> */}
    </StackPayBills.Navigator>
  );
}

const StackMoreScreen = createStackNavigator();

function MoreScreenStack() {
  return (
    <StackPayBills.Navigator>
      <StackPayBills.Screen
        name="More"
        component={MoreScreen}
        options={navOptionHandler}
      />
      {/* <StackPayBills.Screen
        name="PayBillsDetails"
        component={PayBillsDetails}
        options={navOptionHandler}
      /> */}
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
      <Tab.Screen name="Buy Load" component={BuyLoadStack} />
      <Tab.Screen name="More" component={MoreScreenStack} />
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
