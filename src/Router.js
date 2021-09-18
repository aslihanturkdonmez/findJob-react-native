import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Jobs from './pages/Jobs';
import Favorities from './pages/Favorities';
import Detail from './pages/Detail';

const Drawer = createDrawerNavigator();
const Stack=createNativeStackNavigator();

const JobsDrawer = () =>{
  return (

    <Drawer.Navigator initialRouteName="JobsPage">
      <Drawer.Screen name="JobsPage" component={Jobs}/>
      <Drawer.Screen name="FavoritiesPage" component={Favorities}/>
    </Drawer.Navigator>

  )
}

const Router = () =>{
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Jobs">
      <Stack.Screen 
        name="Jobs"
        component={JobsDrawer}
        options={{
          headerShown:false,
        }}
      />
      <Stack.Screen 
        name="Detail"
        component={Detail}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>

    </NavigationContainer>
  );
};

export default Router;