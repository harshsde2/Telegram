import { View, Text } from 'react-native'
import React from 'react'
import { ChannelList } from "stream-chat-expo";
import { router } from 'expo-router';

const MainTabsScreen = () => {
  return (
        <ChannelList onSelect={(channel) => router.push(`/channel/${channel.cid}`)} />
  )
}

export default MainTabsScreen