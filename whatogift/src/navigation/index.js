//IMPORT NAVIGATION LIBS
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Colors from '../utilis/AppColors';

//IMPORT ICONS
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//IMPORT SCREENS
import Dashboard, {screenOptions as DashboardScreenOptions} from '../screens/dashboard';

import Test from '../screens/dashboard/Test';
import Gifts from '../screens/gifts';
import GiftInfo, {screenOptions as GiftInfoScreenOptions} from '../screens/gifts/GiftInfo';
import Favorites from '../screens/favorites';
import Profile from '../screens/profile';

import Login from '../screens/account/Login';
import Signup from '../screens/account/Signup';
import Verify from '../screens/account/Verify';


const defaultOptions = {
    headerStyle: { backgroundColor: Colors.pink },
    headerTintColor: Colors.white
}


//CREATE STACK
const DashboardStackNavigator = createNativeStackNavigator();
export const DashboardStack = () => {
    return(
        <DashboardStackNavigator.Navigator screenOptions={defaultOptions}>
            <DashboardStackNavigator.Screen name='dashboard' component={Dashboard} options={DashboardScreenOptions} />
            <DashboardStackNavigator.Screen name='test' component={Test} />
        </DashboardStackNavigator.Navigator>
    )
}

//CREATE STACK
const GiftsStackNavigator = createNativeStackNavigator();
export const GiftsStack = () => {
    return(
        <GiftsStackNavigator.Navigator screenOptions={defaultOptions}>
            <GiftsStackNavigator.Screen name='gifts' component={Gifts} />
            <GiftsStackNavigator.Screen name='gift_info' component={GiftInfo} options={GiftInfoScreenOptions} />
        </GiftsStackNavigator.Navigator>
    )
}
//CREATE STACK
const FavoriteStackNavigator = createNativeStackNavigator();
export const FavoriteStack = () => {
    return(
        <FavoriteStackNavigator.Navigator screenOptions={defaultOptions}>
            <FavoriteStackNavigator.Screen name='favorite' component={Favorites} />
        </FavoriteStackNavigator.Navigator>
    )
}
//CREATE STACK
const ProfileStackNavigator = createNativeStackNavigator();
export const ProfileStack = () => {
    return(
        <ProfileStackNavigator.Navigator screenOptions={defaultOptions}>
            <ProfileStackNavigator.Screen name='profile' component={Profile} />
        </ProfileStackNavigator.Navigator>
    )
}





//ACCOUNT STACK
const AccountStackNavigator = createNativeStackNavigator();
export const AccountStack = () => {
    return(
        <AccountStackNavigator.Navigator>
            <AccountStackNavigator.Screen name='login' component={Login} />
            <AccountStackNavigator.Screen name='signup' component={Signup} />
            <AccountStackNavigator.Screen name='verify' component={Verify} />
        </AccountStackNavigator.Navigator>
    )
}

//CREATE TABS
const AppTab = createMaterialBottomTabNavigator();
export const TabsNavigator = () => {
    return(
        <AppTab.Navigator activeColor={Colors.white} inactiveColor={Colors.light_blue} barStyle={{backgroundColor:Colors.ocean}}>
            <AppTab.Screen name='dashboardTab' component={DashboardStack}
                options={{ tabBarLabel: 'Dashboard', tabBarIcon: ({color}) => (<MaterialCommunityIcons name='view-grid' color={color} size={26} />) }} />
            <AppTab.Screen name='giftsTab' component={GiftsStack}
                options={{ tabBarLabel: 'Gifts', tabBarIcon: ({color}) => (<MaterialCommunityIcons color={color} name='gift' size={26} />) }} />
            <AppTab.Screen name='favoriteTab' component={FavoriteStack}
                options={{ tabBarLabel: 'Favorite', tabBarIcon: ({color}) => (<MaterialIcons color={color} name='favorite' size={26} />) }} />
            <AppTab.Screen name='profileTab' component={ProfileStack}
                options={{ tabBarLabel: 'Profile', tabBarIcon: ({color}) => (<MaterialCommunityIcons color={color} name='account' size={26} />) }} />
        </AppTab.Navigator>
    )
}
