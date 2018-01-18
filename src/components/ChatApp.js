import MainScreen from './MainScreen';
import ChatScreen from "./ChatScreen";

import { StackNavigator } from "react-navigation";

const ChatApp = StackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      headerTitle: "MainScreen"
    }
  },
  Chat: {
    screen: ChatScreen,
    navigationOptions: {
      headerTitle: "Kik Team >"
    }
  }
});

export default ChatApp;
