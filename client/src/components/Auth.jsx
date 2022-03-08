import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import {
  Flex,
  Text,
  Box,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);

  const handleChange = () => {};

  return (
    <Flex justifyContent="center">
      <Box p={2} minW="500px">
        <Text fontWeight='bold'>{isSignup ? 'Sign Up' : 'Sign In'}</Text>
        {isSignup && (
          <FormControl onSubmit={() => {}} isRequired>

            <FormLabel my={2} htmlFor="email">
              Username
            </FormLabel>
            <Input id="username" type="text" />

            <FormLabel my={2} htmlFor="email">
              Email address
            </FormLabel>
            <Input id="email" type="email" />

            <FormLabel my={2} htmlFor="email">
              Phone Number
            </FormLabel>
            <Input id="email" type="email" />

            <FormLabel my={2} htmlFor="email">
              Password
            </FormLabel>
            <Input id="email" type="email" />

            <FormLabel my={2} htmlFor="email">
              Password Confirmation
            </FormLabel>
            <Input id="email" type="email" />
          </FormControl>
        )}
      </Box>
    </Flex>
  );
};

export default Auth;
