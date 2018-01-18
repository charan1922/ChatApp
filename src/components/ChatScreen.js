import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { StackNavigator } from "react-navigation";

class ChatScreen extends React.Component {
  state = {
    text: "",
    que:false,
  };

submitName = () => {
  console.log(this.state.text);
  this.setState({que:true});
}

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Chat Screen</Text>
        <Text>{this.state.que ? this.state.text : ''}</Text>
        <TextInput onChangeText={(text)=>this.setState({text:text , que:false })}
           value={this.state.text} >
                </TextInput>
        <Button onPress={this.submitName}
        title='SEND'></Button>
      </View>
    );
  }
}

export default ChatScreen;
