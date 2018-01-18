import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import ChatInfo from './ChatInfo'
import {addChat} from '../actions/'
import {connect} from 'react-redux'
import {saveChatTitle} from '../utils/api'

class ChatScreen extends React.Component {
  state = {
    text: "",
    
  };

  submitName = () =>{
    const { text } = this.state
    
     saveChatTitle(text)
    this.props.dispatch(addChat(text))
    this.setState({text:''})
    }


  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Chat Screen</Text>
        <ChatInfo/>
        <TextInput onChangeText={(text)=>this.setState({text:text })}
           value={this.state.text} >
                </TextInput>
        <Button onPress={this.submitName}
        title='SEND'></Button>
      </View>
    );
  }
}

export default connect()(ChatScreen);
