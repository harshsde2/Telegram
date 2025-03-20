import { View, Text } from 'react-native'
import React from 'react'
import { ChannelList } from "stream-chat-expo";
import { Link, router, Stack } from 'expo-router';
import { useAuth } from '@/providers/AuthProvider';
import { Button } from '@rneui/themed';
import { FontAwesome5 } from '@expo/vector-icons';
const MainTabsScreen = () => {
  const { user } = useAuth();
  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () =>
            <Link href="/(home)/users" asChild>
              <FontAwesome5
                name="users"
                size={24}
                color="black"
                style={{ marginRight: 15 }}
              />
            </Link>
        }}
      />
      <ChannelList
        filters={{
          members: {
            $in: [user?.id || '']
          }
        }}
        onSelect={(channel) => router.push(`/channel/${channel.cid}`)}
      />
    </>
  )
}

export default MainTabsScreen