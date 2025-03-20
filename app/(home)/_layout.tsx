import { Stack } from 'expo-router'
import React from 'react'
import ChatProvider from '../providers/ChatProvider'

const HomeLayout = () => {

    return (
        <ChatProvider>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                {/* <Stack.Screen name="channel/[cid]" options={{ headerShown: false }} /> */}
            </Stack>
        </ChatProvider>

    )
}

export default HomeLayout