import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../components/Home";
import Display from "../components/Display";
import Capture from "../components/Capture";

const screens = {
  Home: {
    screen: Home,
  },
  Display: {
    screen: Display,
  },
  Capture: {
    screen: Capture,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
