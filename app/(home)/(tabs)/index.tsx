import { View, Text } from 'react-native'
import React from 'react'
import { ChannelList } from "stream-chat-expo";
import { router } from 'expo-router';
import { useAuth } from '@/providers/AuthProvider';

const MainTabsScreen = () => {
  const { user } = useAuth();
  return (
    <ChannelList
      filters={{
        members: {
          $in: [user?.id || '']
        }
      }}
      onSelect={(channel) => router.push(`/channel/${channel.cid}`)}
    />
  )
}

export default MainTabsScreen