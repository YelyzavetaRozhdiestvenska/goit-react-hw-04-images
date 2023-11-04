

export const Searchbar = ({onSubmit}) => {
    return(
        <header className="searchbar">
          <form className="form" >
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
    );
};