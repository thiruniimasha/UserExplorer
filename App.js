import { registerRootComponent } from 'expo';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import UserListScreen from './screens/UserListScreen';
import UserDetailsScreen from './screens/UserDetailsScreen';

// Create a native stack navigator for screen management
const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Users"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007AFF', // iOS blue color
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {/* User List Screen */}
        <Stack.Screen 
          name="Users" 
          component={UserListScreen}
          options={{ title: 'User Explorer' }}
        />
        
        {/* User Details Screen */}
        <Stack.Screen 
          name="UserDetails" 
          component={UserDetailsScreen}
          options={{ title: 'User Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

registerRootComponent(App);

export default App;
