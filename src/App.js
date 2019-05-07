import React from "react";

import SearchBar from "./Components/Search-Bar";
import TrackList from "./Components/Track-List";
import TrackListItem from "./Components/Track-List-Item";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faKey);

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
        <header>
          <SearchBar
            onSearchInputChangeHandler={this.onSearchInputChange}
            searchTerm={searchTerm}
          />
        </header>
        <main>
          {tracks ? (
            <React.Fragment>
              <h1 className="app-title">The sound of {searchTerm}</h1>
              <TrackList tracks={tracks} />
            </React.Fragment>
          ) : (
              <div className="search-field">Search to find music</div>
            )}

        </main>
      </div>
    );
  }
}

export default App;
