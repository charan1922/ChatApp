import React from "react";
import { StyleSheet, View, Text, ScrollView, FlatList } from "react-native";
import { getChats } from "../utils/api";
import { connect } from "react-redux";
import { receiveChats } from "../actions/";

class ChatInfo extends React.Component {
  componentDidMount() {
    // getChats().then(chats => this.props.receiveAllChats(chats));
  }

  render() {
    const { chats } = this.props;
    return (
      <ScrollView>
        {/* {Object.keys(chats).map(chat => {
          const { title } = chats[chat];
          return (
            <View key={chat}>
              <Text>{title}</Text>
              <Text> hello </Text>
            </View>
            
          );
        })} */}

        {/* {
          console.log(this.props, "chat data")
        } */}

        <FlatList
          data={chats}
           renderItem={({item}) =>
            <View> 
            <Text>{item.userName}</Text>
            <Text>{item.msg}</Text>
            </View>}
        />
        
      </ScrollView>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    receiveAllChats: chats => dispatch(receiveChats(chats))
  };
}

function mapStateToProps(state) {
  return {
    chats: state
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatInfo);
