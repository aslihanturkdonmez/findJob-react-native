import React from 'react';
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
    <Drawer.Navigator 
      initialRouteName="JobsPage"         
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff7fd',
        },
        drawerActiveTintColor:'#5c1a9c',
        drawerInactiveTintColor:'#ad6bed'
      }}
    >
      <Drawer.Screen 
        name="JobsPage" 
        component={Jobs}
        options={{
          headerTitleAlign:'center',
          title: 'JOBS',
          headerTintColor:'#774E9F'
        }}
      />
      <Drawer.Screen 
        name="FavoritiesPage" 
        component={Favorities}
        options={{
          headerTitleAlign:'center',
          title: 'FAVORITIES',
          headerTintColor:'#774E9F'
        }}
      />
    </Drawer.Navigator>
  )
}

const Router = () =>{
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Jobs" >
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
          options={({ route }) => ({
            title: route.params.name,
            headerTintColor: '#774E9F',
          })
        }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

};

export default Router;