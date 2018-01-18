import React from "react";
import { View, Text, Button } from "react-native";
import { StackNavigator } from "react-navigation";

class MainScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Main Screen</Text>
        <Button
          onPress={() => navigate("Chat")}
          title="Go to ChatScreen"
        />
      </View>
    );
  }
}

export default MainScreen;
