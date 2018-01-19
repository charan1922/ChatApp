import { AsyncStorage } from "react-native";
const FLASHCARDS_STORAGE_KEY = "sender:charan";

const initialData = {
  chatData: [{userName:'teja', msg: 'hi'}, {userName:'chakri', msg: "yo"}, {userName: "teja", msg: "how r u??"}]
};

export const getData = () => {
  return initialData;
};

export function getChats() {
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
