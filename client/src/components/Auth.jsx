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

const initialState = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  avatarURL: 'https://lab-restful-api.s3.ap-northeast-2.amazonaws.com/profile.jpeg',
};

const Auth = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(true);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value})
  }

  const switchMode = () => {
    setIsSignup(prevIsSignup => !prevIsSignup);
  }

  const handleSubmit = e =>  {
    e.preventDefault()
    console.log(form)
  }

  return (
    <Flex justifyContent="center">
      <Box p={8} minW="500px">
        <Text fontWeight="bold" fontSize="3xl">
          {isSignup ? 'Sign Up' : 'Sign In'}
        </Text>
        {isSignup && (
          <FormControl onSubmit={handleSubmit} isRequired>
            <FormLabel my={2} htmlFor="username">
              Username
            </FormLabel>
            <Input
              id="usernameInput"
              name="username"
              type="text"
              onChange={handleChange}
            />
            <FormLabel my={2} htmlFor="email">
              Email address
            </FormLabel>
            <Input
              id="emailInput"
              name="email"
              type="email"
              onChange={handleChange}
            />
            <FormLabel my={2} htmlFor="password">
              Password
            </FormLabel>
            <Input
              id="passwordInput"
              name="password"
              type="password"
              onChange={handleChange}
            />
            <FormLabel my={2} htmlFor="passwordConfirmation">
              Password Confirmation
            </FormLabel>
            <Input
              id="passwordConfirmationInput"
              name="passwordConfirmation"
              type="password"
              onChange={handleChange}
            />
            <FormLabel my={2} htmlFor="avatarURL">
              Avatar
            </FormLabel>
            <Input
              id="avatarURL"
              name="avatarURL"
              type="text"
              onChange={handleChange}
            />
            <Button colorScheme="blue" my={6} type='submit' onClick={handleSubmit}>
              Sign up
            </Button>
          </FormControl>
        )}

        {!isSignup && (
          <FormControl onSubmit={handleSubmit} isRequired>
            <FormLabel my={2} htmlFor="email">
              Email address
            </FormLabel>
            <Input
              id="emailInput"
              name="email"
              type="email"
              onChange={handleChange}
            />
            <FormLabel my={2} htmlFor="password">
              Password
            </FormLabel>
            <Input
              id="passwordInput"
              name="password"
              type="password"
              onChange={handleChange}
            />
            <Button colorScheme="blue" my={6} type='submit'>
              Sign in
            </Button>
          </FormControl>
        )}

        <Center>
          <Text fontSize="sm" mr={1}>
            {isSignup ? 'Already have an account?' : "Don't have an account?"}
          </Text>
          <Button
            variant="ghost"
            size="xs"
            onClick={switchMode}
            color="blue.400"
          >
            {isSignup ? 'Sign In' : 'Sign Up'}
          </Button>
        </Center>
      </Box>
    </Flex>
  );
};

export default Auth;
