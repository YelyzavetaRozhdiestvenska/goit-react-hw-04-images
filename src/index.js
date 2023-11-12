import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/app/App';
import GlobalStyle from 'components/GlobalStyle';
import './index.css';

// import axios from 'axios';

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Test /> */}
    <App />
    <GlobalStyle />
  </React.StrictMode>
);
