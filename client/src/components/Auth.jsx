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
  Button,
} from '@chakra-ui/react';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);

  const handleChange = () => {};
  const switchMode = () => {
    setIsSignup(prevIsSignup => !prevIsSignup);
  };

  return (
    <Flex justifyContent="center">
      <Box p={2} minW="500px">
        <Text fontWeight="bold" fontSize="3xl">
          {isSignup ? 'Sign Up' : 'Sign In'}
        </Text>
        {isSignup && (
          <FormControl onSubmit={() => {}} isRequired>
            <FormLabel my={2} htmlFor="username">
              Username
            </FormLabel>
            <Input
              id="usernameInput"
              name="username"
              type="text"
              onChange={() => console.log('typing')}
            />
            <FormLabel my={2} htmlFor="email">
              Email address
            </FormLabel>
            <Input
              id="emailInput"
              name="email"
              type="email"
              onChange={() => console.log('typing')}
            />
            <FormLabel my={2} htmlFor="phone">
              Phone Number
            </FormLabel>
            <Input
              id="phoneInput"
              name="phone"
              type="number"
              onChange={() => console.log('typing')}
            />
            <FormLabel my={2} htmlFor="password">
              Password
            </FormLabel>
            <Input
              id="passwordInput"
              name="password"
              type="password"
              onChange={() => console.log('typing')}
            />
            <FormLabel my={2} htmlFor="passwordConfirmation">
              Password Confirmation
            </FormLabel>
            <Input
              id="passwordConfirmationInput"
              name="passwordConfirmation"
              type="password"
              onChange={() => console.log('typing')}
            />
            <Button colorScheme="blue" my={6}>
              Sign up
            </Button>
          </FormControl>
        )}

        {!isSignup && (
          <FormControl onSubmit={() => {}} isRequired>
            <FormLabel my={2} htmlFor="email">
              Email address
            </FormLabel>
            <Input
              id="emailInput"
              name="email"
              type="email"
              onChange={() => console.log('typing')}
            />
            <FormLabel my={2} htmlFor="password">
              Password
            </FormLabel>
            <Input
              id="passwordInput"
              name="password"
              type="password"
              onChange={() => console.log('typing')}
            />
            <Button colorScheme="blue" my={6}>
              Sign in
            </Button>
          </FormControl>
        )}

        <Center>
          {isSignup ? 'Already have an account?' : "Don't have an account?"}
          <Button size='xs' onClick={switchMode}>
            {isSignup ? 'Sign In' : 'Sign Up'}
          </Button>
        </Center>
      </Box>
    </Flex>
  );
};

export default Auth;
