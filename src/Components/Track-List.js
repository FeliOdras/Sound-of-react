import React from "react";

import TrackListItem from "./Track-List-Item";

const TrackList = props => {
  const { tracks } = props;
  return (
    <div className="tracklist d-flex justify-content-around flex-wrap">
      {tracks.map((trackInfo, index) => (
        <TrackListItem trackInfo={trackInfo} key={index} />
      ))}
    </div>
  );
};

export default TrackList;
