import { ADD_CHAT, RECEIVE_CHATS } from '../actions/'

function chat(state={},action) {
  
  console.log(state,action.type)

switch (action.type) {
    case ADD_CHAT:
    const newChat = {
        [action.chat]: {
          title: action.chat,
          // questions: []
        }
      };
      return {
        ...state,
        ...newChat
      };

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