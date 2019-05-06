import React from "react";

import SearchBar from "./Components/Search-Bar";
import TrackList from "./Components/Track-List";
import TrackListItem from "./Components/Track-List-Item";

class App extends React.Component {
  state = {
    tracks: null
  };

  render() {
    const { tracks } = this.state;
    return (
      <div className="App">
        <SearchBar />
        {tracks ? (
          <TrackList>
            <TrackListItem />
          </TrackList>
        ) : (
          <div>Search to find music</div>
        )}
      </div>
    );
  }
}

export default App;
