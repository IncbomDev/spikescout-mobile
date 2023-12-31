const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import App1 from "./App1";
import Onboard from "./Onboard";
import Login from "./Login";
import Test from "./Test";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
            {/* <Stack.Screen
              name="Onboarding"
              component={Onboard}
              options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
              name="Home"
              component={Test}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
              name="App"
              component={App1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  ); 
};
export default App;
