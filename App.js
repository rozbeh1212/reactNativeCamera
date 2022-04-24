import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/UI/IconButton";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator
          ScreenOptions={{
            headerStyle: {
              backgroundColor: "#1e90ff",
            },
            headerTintColor: "darkgrey",
            contentStyle:{backgroundColor: 'darkgrey'},
          }}
        >
          <Stack.Screen
            name='AllPlaces'
            component={AllPlaces}
            opption={({ navigation }) => ({
              title: "Favorite places",
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon='add'
                  size={24}
                  color={tintColor}
                  onPress={() => {
                    console.log("pressed");
                    navigation.navigate("AddPlace");
                  }}
                />
              ),
            })}
          />
          <Stack.Screen
            name='AddPlace'
            component={AddPlace}
            opption={{
              title: "Add a new place",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
