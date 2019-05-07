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
    fetch(`https://dci-fbw12-search-itunes.now.sh/?term=${searchTerm}`)
      .then(response => response.json())
      .then(data => this.setState({ tracks: data.results }));
  };

  render() {
    const { tracks, searchTerm } = this.state;
    return (
      <div className="App">
        <header className="title-bar">
          <h1><i class="fas fa-headphones-alt"></i>
            The sound of
            <div className="search-field">
              <SearchBar
                onSearchInputChangeHandler={this.onSearchInputChange}
                searchTerm={searchTerm}
              />
            </div>
          </h1>
        </header>
        <main>
          {tracks ? (
            <React.Fragment>
              <h1 className="app-title">The sound of {searchTerm}</h1>
              <TrackList tracks={tracks} />
            </React.Fragment>
          ) : (
              <div className="search-to-find">Search to find music</div>
            )}

        </main>
      </div>
    );
  }
}

export default App;
