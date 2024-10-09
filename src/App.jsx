import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { searchResult } from './articles-api'

import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

const App = () => {
  const [search, setSearch] = useState('');
  const handleSubmit = text => {
    if (text === '')
      return toast.error('Enter a search word!', {
        duration: 2000,
        style: {
          fontSize: 30,
        },
      });
  };

  return (
    <div>
      <SearchBar onHandleSubmit={handleSubmit} />
      <Toaster />
      <ImageGallery />
      <Loader />
      <ErrorMessage />
      <LoadMoreBtn />
      <ImageModal />
    </div>
  );
};

export default App;
