import React, { useState, useEffect } from 'react';
import { useChatContext } from 'stream-chat-react';
import { Flex, Text, VStack, Input } from '@chakra-ui/react';

const ChannelSearch = () => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  const getChannels = async () => {
    try {
      // TODO: fetch channels
    } catch (err) {
      setQuery('');
    }
  };

  const onSearch = e => {
    e.preventDefault();
    setLoading(true);
    setQuery(e.target.value);
    getChannels(e.target.value);
  };

  return (
    <Flex>
      <Input
        placeholder="Search channel"
        type="text"
        value={query}
        onChange={onSearch}
      />
    </Flex>
  );
};

export default ChannelSearch;
