import { AsyncStorage } from "react-native";
const FLASHCARDS_STORAGE_KEY = "sender:cha";

const initialData = {
  Hi: {
    title: "Hi"
  },

 
};

export const getData = () => {
  return initialData;
};

export function getChats(deck) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(results => {
    if (results === null) {
      AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(initialData));
      return initialData;
    } else {
      return JSON.parse(results);
    }
  });
}

export function saveChatTitle(title) {
  return AsyncStorage.mergeItem(
    FLASHCARDS_STORAGE_KEY,
    JSON.stringify({
      [title]: {
        title: title,
    
      }
    })
  );
}
