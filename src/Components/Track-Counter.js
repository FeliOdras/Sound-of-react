import React from 'react'

const TrackCounter = (props) => {
    return (
        <div className="bg-light pl-2 pr-2">
            {props.tracksNum} Tracks available
        </div>
    )
}

export default TrackCounter

