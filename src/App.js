import React from 'react';
import {
  ChakraProvider,
  theme,
  Container,
} from '@chakra-ui/react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CreateBook from './components/CreateBook';
import ListBooks from './components/List'
import Book from './components/Book';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW='2xl'>
        <Navbar />
        <Routes>
          <Route path='/' element={<ListBooks />} />
          <Route path='/book/new' element={<CreateBook />} />
          <Route path='/book/:id/show' element={<Book />} />
          <Route path='/book/:id/edit' element={<CreateBook />} />
          <Route path='/book/:id/delete' element={<CreateBook />} />
        </Routes>
        <Footer />
      </Container>
    </ChakraProvider>
  );
}

export default App;
