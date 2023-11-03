import React, { Component } from 'react';

import { fetchImages } from 'api';



export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

async componentDidMount() {
  const images = await fetchImages();
  this.setState({images});
}



  changeQuery = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery}`, 
      images: [],
      page: 1,
    });
  };


  componentDidUpdate(prevProps, prevState) {
    if(prevState.query !== this.state.query || prevState.page !== this.state.page) {
      alert(
        `HTTP запрос за ${this.state.query} page=${this.state.page}`
        );
      // Не забыть отрезать id/ от query
      // this.setState({ images: рeзультат запроса})
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };


  render() {
    return (
      <div>
        <header className='searchbar'>
         <form className='form' onSubmit={(e) => {
            e.preventDefault();
            this.changeQuery(e.target.element.query.value);
            e.target.reset();
            }}>

            <button type="submit" className='button'>
              <span className='button-label'>Search</span>
            </button>
            <input
            name='query'
            className='input'
            type='text'
            autoComplete='off'
            autoFocus
            placeholder='Search images and photos'/>
          </form>
        </header>

      <ul>Gallery
        <li className='gallery'>
          <img src='' alt=''/>
        </li>
      </ul>

      <div>
        <button onClick={this.handleLoadMore}>Load more</button>
      </div>
    </div>
    );
  }
}

