import chatsData from "../data/chats.json";
import useLocalStorage from "./useLocalStorage";

export const useChats = () => {
    const [chats, setChats] = useLocalStorage(
        "samebeat_chats",
        chatsData
    );

    return { 
        chats, 
        setChats
    };
};