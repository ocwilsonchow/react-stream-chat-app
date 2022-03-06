import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  HStack,
  Code,
  Grid,
  GridItem,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelListContainer, ChannelContainer, Sidebar } from './components';

import './App.css';

const apiKey = '93myuqwykf99';
const client = StreamChat.getInstance(apiKey);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Grid>

        <Chat client={client}>
          <Grid h='100vh' templateRows='repeat(2, 1fr)' templateColumns='repeat(10, 1fr)'>
            <GridItem colSpan={1}><Sidebar /></GridItem>
            <GridItem colSpan={1}><ChannelListContainer /></GridItem>
            <GridItem colSpan={1}><ChannelContainer /></GridItem>
          </Grid>
        </Chat>
      </Box>
    </ChakraProvider>
  );
}

export default App;
