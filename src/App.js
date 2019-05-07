import React from "react";

import SearchBar from "./Components/Search-Bar";
import TrackList from "./Components/Track-List";

class App extends React.Component {
  state = {
    tracks: null,
    searchTerm: ""
  };

  onSearchInputChange = e => {
    e.persist();
    const searchTerm = e.target.value;
    this.setState({ searchTerm }, () => {
      if (searchTerm.length > 2) {
        this.searchForMusic();
      }
    });
  };

  searchForMusic = (searchTerm = this.state.searchTerm) => {
    console.log("Searching ", searchTerm);
    fetch(`https://dci-fbw12-search-itunes.now.sh/?term=${searchTerm}&media=music`)
      .then(response => response.json())
      .then(data => this.setState({ tracks: data.results }));
  };

  render() {
    const { tracks, searchTerm } = this.state;
    return (
      <div className="App font-josefin">
        <header className="title-bar pl-3 pr-3 pt-1 pb-1">
          <h1 className="h4 text-center font-josefin"><i className="fas fa-headphones-alt mr-2"></i>
            The sound of
            <div className="search-field">
              <SearchBar
                onSearchInputChangeHandler={this.onSearchInputChange}
                searchTerm={searchTerm}
              />
            </div>
          </h1>
        </header>
        <main className="mt-5">
          {tracks ? (
            <TrackList tracks={tracks} />
          ) : (
              <div className="search-to-find">Search to find music</div>
            )}
        </main>
      </div>
    );
  }
}

export default App;
