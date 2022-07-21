import { Chat, OverlayProvider } from 'stream-chat-react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { useChatClient } from './useChatClient';
import { StreamChat } from 'stream-chat';
import { chatApiKey } from './chatConfig';

const Stack = createStackNavigator();

const ChannelListScreen = () => {
  return null
}

const chatClient = StreamChat.getInstance(chatApiKey);

const NavigationStack = () => {
  const { clientIsReady } = useChatClient();

  if (!clientIsReady) {
    return <Text>Loading chat ...</Text>
  }
  return (

    <OverlayProvider>
     <Chat client={chatClient}>
      <Stack.Navigator>
       <Stack.Screen name="ChannelList" component={ChannelListScreen} />
      </Stack.Navigator>
     </Chat>
    </OverlayProvider>
  );
};

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};