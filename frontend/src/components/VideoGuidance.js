import React from "react";
import ReactPlayer from "react-player";
import '../screens/videocomponent.css'

function Video() {
  const videoObject = [
    {
      link: "https://www.youtube.com/watch?v=fRlUhUWS0Hk",
      description: "How to Start a Farm From Scratch",
    },
    {
      link: "https://www.youtube.com/watch?v=jBCchveAB4I",
      description: "Complete Tree Farming Guide for OSRS",
    },
    {
      link: "https://www.youtube.com/watch?v=10n4wdrbANM",
      description: "Beginners Farming Guide for OSRS",
    },
    {
      link: "https://www.youtube.com/watch?v=mJ-MeA-W1Ts",
      description: "Starting a Farm: 7 Tips for Beginners",
    },
    {
      link: "https://www.youtube.com/watch?v=nxTzuasQLFo",
      description: "How to make Compost",
    },
    {
      link: "https://www.youtube.com/watch?v=BlFkanzLvkQ",
      description: "Don't Make These 5 Food Gardening Mistakes!",
    },
    {
      link: "https://www.youtube.com/watch?v=hXlSicZE9jI",
      description: "10 Organic Ways to Control Pests in the Garden",
    },
    {
        link: "https://www.youtube.com/watch?v=uU8oPX5xv-A",
        description: "Papaya Farming and Harvest",
      },
  ];

  return (
    <> 
    <div className='headers'>
        Video Guidance Section
    </div>
    <div className="video-class">
      {videoObject.map((video) => (
        <div className="main-video">
          <ReactPlayer
            url={video.link}
            width={450}
            height={250}
            controls
            muted
            />
          <p className="video-p">{video.description}</p>
        </div>
      ))}
    </div>
      </>
  );
}

export default Video;
