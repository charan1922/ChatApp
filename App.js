import React,{Component} from 'react';
import { View } from 'react-native'
import ChatApp from './src/components/ChatApp';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer  from './src/reducers/'

const store = createStore(reducer)
console.log(store.getState(), "store")
class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <View style={{flex: 1}}>
          <ChatApp/>
        </View>
      </Provider>
    );
  }
}

export default App;