import "react-native-gesture-handler";
import { LogBox, View } from "react-native";
// LogBox.ignoreAllLogs();
import { AppRegistry } from "react-native";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import React from "react";
import { setContext } from "@apollo/client/link/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
/**
 * screen
 */
import Home from "./pages/Home";
import Timekeeper from "./pages/Timekeeper";
import Salary from "./pages/Salary";
import Complaint from "./pages/Complaint";
import SignIn from "./pages/SignIn";
import { author, screens } from "./pages/config";
import Author from "./pages/Author";
import Layout from "./components/Layout";
const uri = "https://timekeeping.itoa.vn/admin/api";
const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
  link: setContext((_, { headers }) => {
    const { token } = author();
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  }).concat(
    new HttpLink({
      uri,
    }),
  ),
});
const Stack = createStackNavigator();
AsyncStorage.getItem("@author")
  .then((value) => {
    try {
      const authenticate = JSON.parse(value);
      if (authenticate) author(authenticate);
    } catch (e) {
      AsyncStorage.removeItem("@author").catch(() => {});
    }
  })
  .catch(() => {});

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#24c48a",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          >
            <Stack.Screen
              name={screens.SIGNIN}
              component={SignIn}
              options={{
                title: "Timekeeper Application",
                headerShown: false,
                animationTypeForReplace: true ? "pop" : "push",
              }}
            />
            <Stack.Screen
              name={screens.HOME}
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={screens.COMPLAINT}
              component={Complaint}
              options={{
                title: "New Complaint",
              }}
            />
            <Stack.Screen
              name={screens.SALARY}
              component={Salary}
              options={{
                title: "Your Salary",
              }}
            />
            <Stack.Screen
              name={screens.TIMEKEEPER}
              component={Timekeeper}
              options={{
                title: "Your Workdays",

                // headerStyleInterpolator: { backgroundColor: "transparent" },
              }}
            />
            <Stack.Screen
              name={screens.AUTHOR}
              component={Author}
              options={{
                title: "Author",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Layout>
    </ApolloProvider>
  );
}
AppRegistry.registerComponent("TimeKeeping", () => App);
export default App;
