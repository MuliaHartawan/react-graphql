import React from 'react';
import {
  Box,
  Heading,
  Image,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';


function Navbar(){
    return(
        <>
        <Box display="flex" justifyContent="space-between" alignItems='center' py='2rem'>
            <Box display='flex' gap='2' alignItems='center'>
                <Image w='12%' src='https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg' />
                <Heading fontSize='4xl'>GraphQl</Heading>
            </Box>
            <ColorModeSwitcher justifySelf="flex-end" />
        </Box>
        </>
    );
}

export default Navbar;