import React,{Component} from 'react';
import ChatApp from './src/components/ChatApp';
import { StackNavigator } from 'react-navigation';



class App extends Component{
  render(){
    return(
      <ChatApp/>
    );
  }
}

export default App;