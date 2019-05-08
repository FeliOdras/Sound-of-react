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
    primaryGenreName,
    previewUrl
  } = props.trackInfo;

  let onPlay = () => {
    const track = `${trackId}-audio`;
    console.log(`Playing ${track}`)
  }

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
          {trackPrice === -1 || trackPrice === undefined ? "Only album" : trackPrice}
          {currency === "USD" ? (trackPrice === -1 || trackPrice === undefined ? "" : "$") : "€"}
        </div>

        <div className="text-center">
          <i onClick={onPlay} className="fas fa-play play-button bg-dark text-light rounded-circle p-2 m-1" id={trackId} />
          <i className="fas fa-pause pause-button bg-dark text-light rounded-circle p-2 m-1" id={trackId} />
          <audio id={trackId + "-audio"} src={previewUrl}></audio>
        </div>
      </div>
    </div>
  );
};

export default TrackListItem;
