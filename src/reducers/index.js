import { ADD_CHAT, RECEIVE_CHATS } from '../actions/'
import { getChats } from '../utils/api'

const initialData = [{userName:'teja', msg: 'hi'}, {userName:'computer', msg: "yo"}]

// [{userName:'teja', msg: 'hi'}, {userName:'chakri', msg: "yo"}, {userName: "teja", msg: "how r u??"}]

function chat(state= initialData, action) {
  
  console.log(state,action.type)

switch (action.type) {
    case ADD_CHAT:
    const newChats = [{ userName:'teja', msg:action.chat},{ userName:'computer', msg:'lorem ipsum'}];
      return [
        ...state,
        ...newChats
      ];

      case RECEIVE_CHATS:
      
        return {
          ...state,
          ...action.chats
        };
        

    default:
        return state;
}
}

export default chat;