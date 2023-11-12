import { fetchImages } from 'api';
import React, { Component } from 'react';
import { Wrapper } from './app.styled';
import { Searchbar } from '../searchbar/Searchbar';
import { ImageGallery } from '../imageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
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
      // const { query, page } = this.state;
      // const actualQuery = query.split('/')[1];

      // const getImage = await fetchImages(actualQuery, page); // HTTP запрос за query

      // this.setState(prevState => ({
      //   // this.setState({images: рузультат запроса})
      //   images:
      //     this.state.page > 1 ? [prevState.images, ...getImage] : getImage,
      //   loading: false,
      // }));
    }
  }

  //  Метод для получения и добавление в состояние:
  getImages = async () => {
    const { query, page } = this.state;
    const actualQuery = query.split('/')[1];

    try {
      this.setState({ loading: true });
      const images = await fetchImages(actualQuery, page); // HTTP запрос за query

      if (images.length) {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
        }));
        this.setState({ loading: false });
      }
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }
  };

  // Загружает следующую порцию картинок
  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  // Метод для обработки отправки формы поиска
  handleSubmit = evt => {
    evt.preventDefault();
    if (evt.target.elements.query.value.trim() === '') {
      console.log('error');
      return;
    }
    this.changeQuery(evt.target.elements.query.value);
    evt.target.reset();
  };

  render() {
    const { loading, images } = this.state;
    return (
      <Wrapper>
        <Searchbar onSubmit={this.handleSubmit} />
        {/* <header className="searchbar">
          <form
            className="form"
            onSubmit={this.handleSubmit}
            // onSubmit={evt => {
            //   evt.preventDefault();
            //   this.changeQuery(evt.target.elements.query.value);
            //   evt.target.reset();
            // }}
          >
            <button className="button">
              <span className="button-label">Search</span>
            </button>
            <input
              className="input"
              type="text"
              autoComplete="off"
              name="query"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header> */}
        {loading ? (
          <div>Loading</div>
        ) : (
          <ImageGallery images={images} />
          // <ul images={images}>
          //   Gallery
          //   {images.map(({ id, webformatURL, tags }) => (
          //     <li key={id} className="gallery">
          //       <img src={webformatURL} alt={tags} />
          //     </li>
          //   ))}
          // </ul>
        )}
        <div>
          <button onClick={this.handleLoadMore}>Load more</button>
        </div>
      </Wrapper>
    );
  }
}
