import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useAuth } from '@/providers/AuthProvider'
import { router } from 'expo-router'
import { useChatContext } from 'stream-chat-react-native-core'
const UserListItem = ({ user }: { user: any }) => {

    const { client } = useChatContext()
    const { user: me } = useAuth()

    const onPress = async () => {
        const channel = client.channel('messaging', {
            members: [me?.id, user?.id]
        })
        await channel.watch()
        router.replace(`/(home)/channel/${channel.cid}` as any)
    }
    return (
        <Pressable onPress={onPress} style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: 'gray', backgroundColor: 'white' }}>
            <Text>{user?.full_name}</Text>
        </Pressable>
    )
}

export default UserListItem