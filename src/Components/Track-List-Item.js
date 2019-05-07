import React from "react";

const TrackListItem = props => {
  const {
    trackName,
    artistName,
    collectionName,
    trackPrice,
    currency,
    trackId,
    artworkUrl100,
    primaryGenreName
  } = props.trackInfo;

  return (
    <div className="single-item col-md-3 col-lg-2 shadow m-2 pb-2 d-flex flex-column justify-content-between">
      <div className="text-center">
        <img src={artworkUrl100} alt={trackName + "- Cover"} className="img-thumbnail" />
      </div>
      <div className="row">
        <div className="col-6">
          <div className="label">Track Name</div>
          {trackName}
        </div>
        <div className="col-6">
          <div className="label">Genre</div>
          {primaryGenreName}
        </div>
        <div className="col-6">
          <div className="label">Artist Name</div>
          {artistName}</div>
        <div className="col-6">
          <div className="label">Collection Name</div>
          <p>{collectionName}</p>
        </div>
      </div>
      <div className="bottom-elements">
        <div className="text-center single-item-price">
          {trackPrice === -1 ? "Only album" : trackPrice}
          {currency === "USD" ? (trackPrice === -1 ? "" : "$") : "€"}
        </div>

        <div className="text-center">
          <i className="fas fa-play" id={trackId} />
          <i className="fas fa-pause" id={trackId} />
        </div>
      </div>
    </div>
  );
};

export default TrackListItem;
