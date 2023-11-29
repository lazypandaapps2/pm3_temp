import React from 'react';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import BasicWebview from '../screens/BasicWebview';
import Language from '../screens/Language';

import Stack from './Stack';

const HomeNavigation = () => (
    <Stack.Navigator
        screenOptions={{ headerShown: false, animation: 'fade' }}
        initialRouteName='Home'
    >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="BasicWebview" component={BasicWebview} />
        <Stack.Screen name="Language" component={Language} />
    </Stack.Navigator>
)
export default HomeNavigation;