import React, { Component } from 'react';
import { fetchImages } from 'api';

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
      images: [],
      page: 1,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      console.log(`HTTP запрос за ${nextQuery} page=${nextPage}`);
      this.handleSearch();

      // Не забыть отрезать id/ от query
      // this.setState({ images: рeзультат запроса})
    };
  };

  handleSearch = async () => {
    const nextQuery = this.state.query;
    const nextPage = this.state.page;

    try {
      this.setState({ loading: true });
      const getImage = await fetchImages(nextQuery, nextPage);
      if (getImage.length) {
        this.setState(prevState => ({
          images:
            this.state.page > 1 ? [...prevState.images, ...getImage] : getImage,
        }));
      } else {
        this.setState({ loading: false });
      }
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.changeQuery(evt.target.elements.query.value);
    evt.target.reset();
  };

  

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <div>
        <header className="searchbar">
          <form className="form" onSubmit={this.handleSubmit}>
            <button className="button" onClick={this.handleSearch}>
              <span className="button-label">Search</span>
            </button>
            <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>

        <ul>
          Gallery
          {/* {query.map(query => (
            <li className="gallery">
              <img src={webformatURL} alt={}/>
            </li>
          ))}  */}
        </ul>

        <div>
          <button onClick={this.handleLoadMore}>Load more</button>
        </div>
      </div>
    );
  }
}

//
// const API_KEY = '38086992-da778ca69db0828eccdceea4f';
// axios.defaults.baseURL = `https://pixabay.com/api/`;

// class Test extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       query: '',
//       images: [],
//       page: 1,
//     };
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     if (this.state.query !== nextState.query) return true;
//     return false;
//   }

//   handleSearhInput(query) {
//     this.setState({ query });
//   }

//   handleSearch() {
//     const getImage = async () => {
//       try {
//         const { data } = await axios.get(
//           `?q=${this.state.query}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//         );
//         const { hits } = data;
//         alert(hits);
//       } catch (err) {
//         alert(err);
//       }
//     };
//     getImage();
//   }

//   render() {
//     return (
//       <form>
//         <input
//           onChange={e => this.handleSearhInput(e.target.value)}
//           placeholder="Search..."
//         />
//         <button onClick={this.handleSearch.bind(this)}>Searh</button>
//       </form>
//     );
//   }
// }
