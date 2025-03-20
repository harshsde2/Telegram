import { View, Text, ActivityIndicator, SafeAreaView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Channel, MessageList, MessageInput, useChatContext } from "stream-chat-expo";
import { Channel as ChannelType } from "stream-chat";
import { useEffect, useState } from "react";

export default function ChannelScreen() {
    const { cid } = useLocalSearchParams();
    const [channel, setChannel] = useState<ChannelType | null>(null);

    const { client } = useChatContext();

    useEffect(() => {
       const fetchChannel = async () => {
        const channels = await client.queryChannels({ cid: cid as string });
        setChannel(channels[0] as ChannelType);
       }

       fetchChannel();
    }, [cid]);

    if (!channel) {
        return (
            <ActivityIndicator size="small" color="#0000ff" />
        )
    }

    return (
        <Channel channel={channel} >
            <MessageList />
            <SafeAreaView  style={{ backgroundColor: 'white' }}>
                <MessageInput />
            </SafeAreaView>
        </Channel>
    )
}