export const ADD_CHAT = 'ADD_CHAT'
export const RECEIVE_CHATS = ' RECEIVE_CHATS'

export function addChat (chat) {
    return{
        type: ADD_CHAT,
        chat
    }
}

export function receiveChats(chats) {
    return{
        type: RECEIVE_CHATS,
        chats
    }
}