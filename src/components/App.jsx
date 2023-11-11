import { fetchImages } from 'api';
import React, { Component } from 'react';

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
      console.log(`HTTP запрос за ${this.state.query} page=${this.state.page}`);

      // Получаем и добавляем изображения в состояние
      this.setState({ loading: true });
      const { query, page } = this.state;
      const actualQuery = query.split('/')[1];
      const getImage = await fetchImages({ query: actualQuery, page }); // HTTP запрос за query
      
      this.setState(prevState => ({
        // this.setState({images: рузультат запроса})
        images:
          this.state.page > 1 ? [prevState.images, ...getImage] : getImage,
        loading: false,
      }));
    }
  }

  // Загружает следующую порцию картинок
  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { loading, images } = this.state;
    return (
      <div>
        <header className="searchbar">
          <form
            className="form"
            onSubmit={evt => {
              evt.preventDefault();
              this.changeQuery(evt.target.elements.query.value);
              evt.target.reset();
            }}
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
        </header>
        {loading ? <div>Loading</div> : <ul images={images}>
          Gallery
          {images.map(({id, webformatURL, tags }) => (
            <li key={id} className="gallery">
              <img src={webformatURL} alt={tags} />
            </li>
          ))}
          
        </ul>}
      <div>
          <button onClick={this.handleLoadMore}>Load more</button>
        </div>
      </div>
    );
  }
}
