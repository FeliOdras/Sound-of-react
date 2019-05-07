import React from "react";

import TrackListItem from "./Track-List-Item";
import TrackCounter from "./Track-Counter";

const TrackList = props => {
  const { tracks } = props;
  return (
    <React.Fragment>
      <TrackCounter tracksNum={tracks.length} />
      <div className="tracklist d-flex justify-content-around flex-wrap">
        {tracks.map((trackInfo, index) => (
          <TrackListItem trackInfo={trackInfo} key={index} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default TrackList;
