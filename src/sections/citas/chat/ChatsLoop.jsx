import { getChatsUser } from "@/api/matches";
import ChatLeftCard from "@/components/chat/ChatLeftCard";
import { useEffect, useState } from "react";
import { useGlobal, actionTypes } from '@/context/GlobalContext';
import { getCookie } from "@/utils/cookies";

const ChatsLoop = () => {
  const { state, dispatch, userLogin } = useGlobal();

  // useEffect(() => {
  //   getChats();
  // }, [userLogin])

  useEffect(() => {
    const auth = getCookie("AuthToken");
    const user = getCookie("User");
    if (auth != undefined && user != undefined) {
      const user_id = JSON.parse(user).id
      if (user_id == undefined) return;
      getChats(user_id);
    }
  }, [])

  async function getChats(user_id) {
    const response = await getChatsUser({ results: 20, page: 1, user_id: user_id });
    if (response?.data?.rows?.length > 0) {
      await dispatch({ type: actionTypes.SET_CHATS, payload: response.data.rows })
    }
  }
  const chatsHTML = state.chats?.map(user => (
    <ChatLeftCard key={user.id} user={user} />
  ));



  return (
    <>{chatsHTML}</>
  );
};

export default ChatsLoop;