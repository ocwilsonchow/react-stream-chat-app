import React from 'react';
import { Flex, Text, VStack } from '@chakra-ui/react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';

const ChannelListContainer = () => {
  return (
    <VStack bg="teal.700" h="100vh" p={3}>
      <Text>ChannelListContainer</Text>
      <ChannelSearch />
      <ChannelList
        filters={{}}
        channelRenderFilterFn={() => {}}
        List={(listProps)=> (
            <TeamChannelList
              {...listProps}
              type='team'
            />
        )}
        Preview={(previewProps) => (
          <TeamChannelPreview
            {...previewProps}
            type='team'
          />
        )}
      />

      <ChannelList
        filters={{}}
        channelRenderFilterFn={() => {}}
        List={(listProps)=> (
            <TeamChannelList
              {...listProps}
              type='messaging'
            />
        )}
        Preview={(previewProps) => (
          <TeamChannelPreview
            {...previewProps}
            type='messaging'
          />
        )}
      />
    </VStack>
  );
};

export default ChannelListContainer;
