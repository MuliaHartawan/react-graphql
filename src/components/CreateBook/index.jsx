import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import Select2 from 'react-select';



function CreateBook(){
    const options = [
        { value : 'Romance', label:'Romance'},
        { value : 'Mystery', label:'Mystery'},
        { value : 'History', label:'History'},
        { value : 'Horor', label:'Horor'},
    ];
    const color = {backgroundColor : 'red.100'}
    return(
        <>
        <form method='post'> 
            <FormControl mb='4'>
                <FormLabel htmlFor='title'>Title Book</FormLabel>
                <Input id='text' type='text' name='title' placeholder='Input here title book' />
                {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
            <FormControl mb='4'>
                <FormLabel htmlFor='writer'>Writer</FormLabel>
                <Input id='text' type='text' name='writer' placeholder='Input here writer book' />
                {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
            <FormControl mb='4'>
                <FormLabel htmlFor='release'>Release Year</FormLabel>
                <Input id='release' type='date' name='writer' placeholder='Input here release year book' />
                {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
            <FormControl mb='4'>
                <FormLabel htmlFor='genre'>Genre</FormLabel>
                <Select2 style={color} options={options} name='genre[]' isMulti/> 
            </FormControl>
            <FormControl mb='4'>
                <FormLabel htmlFor='writer'>Description</FormLabel>
                <Textarea
                    placeholder='Input here description book'
                />    
            </FormControl>
            <Stack alignItems='flex-end'>
                <Box display='flex'flexDirection='row' gap='5'alignItems='flex-end' my='3rem'>
                    <Button colorScheme='red'>Cancel</Button>
                    <Button colorScheme='teal'>Create</Button>
                </Box>
            </Stack>
        </form>
        </>
    );
}

export default CreateBook;