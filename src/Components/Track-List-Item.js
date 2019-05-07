import React from "react";

const TrackListItem = props => {
  const {
    trackName,
    artistName,
    collectionName,
    trackPrice,
    currency,
    trackId,
    artworkUrl100
  } = props.trackInfo;

  return (
    <div className="single-item">
      <div>
        <img src={artworkUrl100} alt={trackName + "- Cover"} />
      </div>
      <div>
        <div className="label">Track Name</div>
        {trackName}</div>
      <div>
        <div className="label">Artist Name</div>
        {artistName}</div>
      <div>
        <div className="label">Collection Name</div>
        <p>{collectionName}</p>
      </div>
      <div>
        <div className="label">Price</div>
        {trackPrice === -1 ? "Only album" : trackPrice}
        {currency === "USD" ? (trackPrice === -1 ? "" : "$") : "€"}
      </div>
      <div>
        <i className="fas fa-play" id={trackId} />
        <i className="fas fa-pause" id={trackId} />
      </div>
    </div>
  );
};

export default TrackListItem;
