//IMPORT NAVIGATION LIBS
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//IMPORT ICONS
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//IMPORT SCREENS
import Dashboard from '../screens/dashboard';
import Test from '../screens/dashboard/Test';
import Gifts from '../screens/gifts';
import Favorites from '../screens/favorites';
import Profile from '../screens/profile';

import Login from '../screens/account/Login';
import Signup from '../screens/account/Signup';
import Verify from '../screens/account/Verify';

//CREATE STACK
const DashboardStackNavigator = createNativeStackNavigator();
export const DashboardStack = () => {
    return(
        <DashboardStackNavigator.Navigator>
            <DashboardStackNavigator.Screen name='dashboard' component={Dashboard} />
            <DashboardStackNavigator.Screen name='test' component={Test} />
        </DashboardStackNavigator.Navigator>
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
        <AppTab.Navigator>
            <AppTab.Screen name='dashboardTab' component={DashboardStack}
                options={{ tabBarLabel: 'Dashboard', tabBarIcon: () => (<MaterialCommunityIcons name='view-grid' size={28} />) }} />
            <AppTab.Screen name='giftsTab' component={Dashboard}
                options={{ tabBarLabel: 'Dashboard', tabBarIcon: () => (<MaterialCommunityIcons name='view-grid' size={28} />) }} />
            <AppTab.Screen name='favoriteTab' component={Dashboard}
                options={{ tabBarLabel: 'Dashboard', tabBarIcon: () => (<MaterialCommunityIcons name='view-grid' size={28} />) }} />
            <AppTab.Screen name='profileTab' component={Dashboard}
                options={{ tabBarLabel: 'Dashboard', tabBarIcon: () => (<MaterialCommunityIcons name='view-grid' size={28} />) }} />
        </AppTab.Navigator>
    )
}
