import React from 'react';
import {
    Badge,
  Box,
  Button,
  FormControl,
  FormLabel,
  Text,
} from '@chakra-ui/react';


function Book(){
    return(
        <>
        <Box display="flex" flexDirection='column' alignItems='center' py='2rem'>
            <FormControl  mb='4'>
                <FormLabel fontSize='lg' htmlFor='title'>Title Book</FormLabel>
                <Text>Cinta Brontosaurus</Text>
            </FormControl>
            <FormControl mb='4'>
                <FormLabel fontSize='lg' htmlFor='writer'>Writer</FormLabel>
                <Text>Raditya Dika</Text>
            </FormControl>
            <FormControl mb='4'>
                <FormLabel fontSize='lg' htmlFor='release'>Release Year</FormLabel>
                <Text>March 22, 2000</Text>
            </FormControl>
            <FormControl mb='4'>
                <FormLabel fontSize='lg' htmlFor='genre'>Genre</FormLabel>
                <Box>
                    <Badge mr='4' fontSize='0.8rem' colorScheme='green'>Comedy</Badge>
                    <Badge mr='4' fontSize='0.8rem' colorScheme='red'>Romance</Badge>
                    <Badge mr='4' fontSize='0.8rem' colorScheme='purple'>Mystery</Badge>
                    <Badge mr='4' fontSize='0.8rem' colorScheme='yellow'>History</Badge>
                    <Badge mr='4' fontSize='0.8rem' colorScheme='cyan'>Horor</Badge>
                </Box> 
            </FormControl>
            <FormControl mb='4'>
                <FormLabel fontSize='lg' htmlFor='writer'>Description</FormLabel>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dignissimos voluptas amet iure porro, saepe suscipit? Omnis impedit commodi quae provident repellat dignissimos sapiente explicabo vero facilis, officiis, corporis incidunt?</Text>   
            </FormControl>
        </Box>
            <Box display='flex'flexDirection='column' gap='5'alignItems='flex-end' mb='4'>
                <Button colorScheme='teal'>Back</Button>
            </Box>
        </>
    );
}

export default Book;