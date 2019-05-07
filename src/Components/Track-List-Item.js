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
    <div className={primaryGenreName + "-genre single-item col-12 col-sm-4 col-md-3 col-lg-2 shadow m-2 pb-2 pt-2 d-flex flex-column justify-content-between"}>
      <div className="text-center">
        <img src={artworkUrl100} alt={trackName + "- Cover"} className="img-thumbnail" />
      </div>
      <div className="row">
        <div className="label col-4">Track</div>
        <div className="col-8">
          {trackName}
        </div>
        <div className="label col-4">Artist</div>
        <div className="col-8">
          {artistName}
        </div>
        <div className="label col-4">Genre</div>
        <div className="col-8">
          {primaryGenreName}
        </div>
        <div className="label col-4">Collection</div>
        <div className="col-8">
          <p>{collectionName}</p>
        </div>
      </div>
      <div className="bottom-elements">
        <div className="text-center single-item-price bg-dark font-weight-bold text-light p-2 m-2">
          {trackPrice === -1 ? "Only album" : trackPrice}
          {currency === "USD" ? (trackPrice === -1 ? "" : "$") : "€"}
        </div>

        <div className="text-center">
          <i className="fas fa-play bg-dark text-light rounded-circle p-2 m-1" id={trackId} />
          <i className="fas fa-pause bg-dark text-light rounded-circle p-2 m-1" id={trackId} />
        </div>
      </div>
    </div>
  );
};

export default TrackListItem;
