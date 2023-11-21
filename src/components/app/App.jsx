import { fetchImages } from 'api';
import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Wrapper } from './app.styled';
import { Searchbar } from '../searchbar/Searchbar';
import { ImageGallery } from '../imageGallery/ImageGallery';
import { Loader } from '../loader/Loader';
import { Button } from '../button/Button';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    error: null,
  };

  changeQuery = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      // очищаем массив для последующего писка
      images: [],
      page: 1,
    });
  };

  // Метод жизненного цикла: вызывается при обновлении компонента
  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      // Получаем и добавляем изображения в состояние:
      this.getImages();
    }
  }

  //  Метод для получения и добавление в состояние:
  getImages = async () => {
    const { query, page } = this.state;
    const actualQuery = query.split('/')[1];

    try {
      this.setState({ loading: true });
      const images = await fetchImages(actualQuery, page); // HTTP запрос за query

      // Если изображения не найдены, выводим сообщение
      if (images.length === 0) {
        return toast.info('Image not found...');
      }

      if (images.length) {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
        }));
        this.setState({ loading: false, error: '' });
      }
    } catch (error) {
      this.setState({ loading: false, error: 'Something went wrong!' });
    }
  };

  // Загружает следующую порцию картинок
  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { loading, images } = this.state;
    return (
      <Wrapper>
        <ToastContainer />
        <Searchbar onSubmit={this.changeQuery} />
        {loading && <Loader />}
        {images.length > 0 && <ImageGallery images={images} />}
        {images.length > 0 && !loading && (
          <Button onClick={this.handleLoadMore}>Load more</Button>
        )}
      </Wrapper>
    );
  }
}
