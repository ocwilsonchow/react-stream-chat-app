import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  GridItem,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import {
  ChannelListContainer,
  ChannelContainer,
  Sidebar,
  Auth,
} from './components';

import './App.css';

const cookies = new Cookies();
const apiKey = '93myuqwykf99';
const authToken = cookies.get('token');
const client = StreamChat.getInstance(apiKey);

if (authToken) {
  client.connectUser({
    id: cookies.get('userId'),
    name: cookies.get('username'),
    userId: cookies.get('userId'),
    image: cookies.get('avatarURL'),
    email: cookies.get('email'),
    hashedPassword: cookies.get('hashedPassword'),
  }, authToken);
}

function App() {
  if (!authToken)
    return (
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <Grid p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Grid>
          <Auth />
        </Box>
      </ChakraProvider>
    );

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Grid>

        <Chat client={client}>
          <Grid
            h="100vh"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(10, 1fr)"
          >
            <GridItem colSpan={1}>
              <Sidebar />
            </GridItem>
            <GridItem colSpan={1}>
              <ChannelListContainer />
            </GridItem>
            <GridItem colSpan={8}>
              <ChannelContainer />
            </GridItem>
          </Grid>
        </Chat>
      </Box>
    </ChakraProvider>
  );
}

export default App;
