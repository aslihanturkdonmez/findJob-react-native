import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Jobs from './pages/Jobs';
import Favorities from './pages/Favorities';

const Drawer = createDrawerNavigator();

const Router = () =>{
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="JobsPage">
        <Drawer.Screen name="JobsPage" component={Jobs}/>
        <Drawer.Screen name="FavoritiesPage" component={Favorities}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Router;