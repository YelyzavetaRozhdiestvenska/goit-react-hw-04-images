import { fetchImages } from 'api';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Wrapper } from './app.styled';
import { Searchbar } from '../searchbar/Searchbar';
import { ImageGallery } from '../imageGallery/ImageGallery';
import { Loader } from '../loader/Loader';
import { Button } from '../button/Button';
import { useEffect, useState } from 'react';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const changeQuery = newQuery => {
    setQuery(`${Date.now()}/${newQuery}`);
    // очищаем массив для последующего писка
    setImages([]);
    setPage(1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function getImages() {
      const actualQuery = query.split('/')[1];

      try {
        setLoading(true);
        const images = await fetchImages(actualQuery, page); // HTTP запрос за query

        // Если изображения не найдены, выводим сообщение
        if (images.length === 0) {
          return toast.info('Image not found...');
        }

        if (images.length) {
          setImages(prevImage => [...prevImage, ...images]);
          setLoading(false);
          setError('');
        } else {
          setLoading(false);
          setError(error);
        }
      } catch (error) {
        setLoading(false);
        setError('Something went wrong!');
      }
    }
    getImages();
  }, [page, query, error]);

  // Загружаем следующую страницу картинок
  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <Wrapper>
      <ToastContainer />
      <Searchbar onSubmit={changeQuery} />
      {loading && <Loader />}
      {images.length > 0 && <ImageGallery images={images} />}
      {images.length > 0 && !loading && (
        <Button onClick={handleLoadMore}>Load more</Button>
      )}
    </Wrapper>
  );
};
