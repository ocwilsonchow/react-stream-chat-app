import React from 'react'
import { Flex, Text, VStack, Button } from '@chakra-ui/react'
import Cookies from 'universal-cookie';

const cookies = new Cookies

const Sidebar = () => {


  const handleLogout = () => {
    cookies.remove('token')
    cookies.remove('userId')
    cookies.remove('username')
    cookies.remove('userId')
    cookies.remove('avatarURL')
    cookies.remove('hashedPassword')

    window.location.reload()
  }

  return (
    <VStack bg='teal.900' h='100vh' p={3}>
      <Text>Sidebar</Text>
      <Button onClick={handleLogout}>Log out</Button>
    </VStack>
  )
}

export default Sidebar
