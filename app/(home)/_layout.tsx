import { Redirect, Stack } from 'expo-router'
import React from 'react'
import ChatProvider from '../../providers/ChatProvider'
import { useAuth } from '@/providers/AuthProvider';

const HomeLayout = () => {

    const { user } = useAuth();

    if (!user) {
        return <Redirect href="/(auth)/login" />
    }

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