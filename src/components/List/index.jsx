import {
  Box,
    Button,
    Divider,
    Flex,
    Heading,
    HStack,
    Link,
    List,
    ListItem,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import React from 'react';
  import { ArrowRight, Link45deg, PencilSquare } from 'react-bootstrap-icons';
  
  function ListBooks() {
    const color = useColorModeValue('gray.100', 'gray.600');
    return (
      <>
        <Box display='flex'flexDirection='column' gap='5'alignItems='flex-end' mb='4'>
            <Link _hover={{ textDecoration:'none' }}><Button colorScheme='teal'>Create</Button></Link>
        </Box>
        <Divider mb='5' />
        <List mb="8">
          <ListItem
            display="flex"
            flexDirection="column"
            gap="4"
            my="4"
            p="2"
            _hover={{
              background: color,
              rounded: 'lg',
            }}
          > 
            <Flex justifyContent='space-between' alignContent='center'>
              <Heading size="md">System Shock on macOS using shocklate</Heading>
              <Link src='#'><PencilSquare/></Link>
            </Flex>
            <HStack justifyContent='space-between'>
              <Box display='flex' gap='2'>
                <Link45deg />
                <Text fontSize="xs">
                  Mulia Hartawan Negara
                </Text>
              </Box>              
                <Text fontSize="xs" fontStyle='italic'>
                  March 22, 2021
                </Text>
            </HStack>
            
            <Text>
              Here's a short post on how to run System Shock Classic Edition on
              macOS
            </Text>
            
            <Link href="#" isExternal display="flex" alignItems="center" gap='2'>
            Read More <ArrowRight mx="10px" />
            </Link>
          </ListItem>
        </List>
      </>
    );
  }
  
  export default ListBooks;
  