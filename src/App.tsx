import React, { useState } from 'react';
import './App.css';

const videoFilenames = [
  'IS413 - TheWaterProject - Phase01 - 01 - Intro.mp4',
  'IS413 - TheWaterProject - Phase01 - 02 - Models.mp4',
  'IS413 - TheWaterProject - Phase01 - 03 - DatabaseSetup.mp4',
  'IS413 - TheWaterProject - Phase01 - 04 - Migrations.mp4',
  'IS413 - TheWaterProject - Phase01 - 05 - TheRepositoryPattern.mp4',
  'IS413 - TheWaterProject - Phase01 - 06 - ModelBinding.mp4',
  'IS413 - TheWaterProject - Phase01 - 07 - ListItems.mp4',
  'IS413 - TheWaterProject - Phase01 - 08 - Pagination.mp4',
  'IS413 - TheWaterProject - Phase01 - 09.mp4',
  'IS413 - TheWaterProject - Phase01 - 10 - PassingViewModels.mp4',
  'IS413 - TheWaterProject - Phase01 - 11 - CustomTagHelper - Part01.mp4',
  'IS413 - TheWaterProject - Phase01 - 12 - CustomTagHelper - Part02.mp4',
  'IS413 - TheWaterProject - Phase01 - 13 - Recap.mp4',
  'IS413 - TheWaterProject - Phase02 - 01 - Intro.mp4',
  'IS413 - TheWaterProject - Phase02 - 02 - Bootstrap.mp4',
  'IS413 - TheWaterProject - Phase02 - 03 - DynamicStyling.mp4',
  'IS413 - TheWaterProject - Phase02 - 04 - PartialViews.mp4',
  'IS413 - TheWaterProject - Phase02 - 05 - ImprovingURLs.mp4',
  'IS413 - TheWaterProject - Phase03 - 01 - Intro.mp4',
  'IS413 - TheWaterProject - Phase03 - 02 - ViewComponent.mp4',
  'IS413 - TheWaterProject - Phase03 - 03 - DefaultView.mp4',
  'IS413 - TheWaterProject - Phase03 - 04 - PassingDataThroughRoute.mp4',
  'IS413 - TheWaterProject - Phase03 - 05 - QueryingTheData.mp4',
  'IS413 - TheWaterProject - Phase03 - 06 - ImprovingTheURLs.mp4',
  'IS413 - TheWaterProject - Phase03 - 07 - VariousUpdates.mp4',
  'IS413 - TheWaterProject - Phase03 - 08 - ModifyTagHelper.mp4',
  'IS413 - TheWaterProject - Phase03 - 09 - ViewBag.mp4',
  'IS413 - TheWaterProject - Phase03 - 10 - Recap.mp4',
  'IS413 - TheWaterProject - Phase04 - 01 - Intro.mp4',
  'IS413 - TheWaterProject - Phase04 - 02 - RazorPageSetup.mp4',
  'IS413 - TheWaterProject - Phase04 - 03 - DonateButton.mp4',
  'IS413 - TheWaterProject - Phase04 - 04 - Model.mp4',
  'IS413 - TheWaterProject - Phase04 - 05 - CartItems.mp4',
  'IS413 - TheWaterProject - Phase04 - 06 - CartModel.mp4',
  'IS413 - TheWaterProject - Phase04 - 07 - CartPage.mp4',
  'IS413 - TheWaterProject - Phase04 - 08 - AddToCart.mp4',
  'IS413 - TheWaterProject - Phase04 - 09 - Session.mp4',
  'IS413 - TheWaterProject - Phase04 - 10 - ReturnUrl.mp4',
  'IS413 - TheWaterProject - Phase04 - 11 - Recap.mp4',
];

function App() {
  // State to track the current video index
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoSrc, setVideoSrc] = useState<string>(
    `videos/${videoFilenames[currentVideoIndex]}`,
  );

  const changeVideo = (videoIndex: number) => {
    setCurrentVideoIndex(videoIndex);
    setVideoSrc(`videos/${videoFilenames[videoIndex]}`);
  };

  const goToPreviousVideo = () => {
    if (currentVideoIndex > 0) {
      changeVideo(currentVideoIndex - 1);
    }
  };

  const goToNextVideo = () => {
    if (currentVideoIndex < videoFilenames.length - 1) {
      changeVideo(currentVideoIndex + 1);
    }
  };

  return (
    <div className="App">
      <div className="App-title">Spencer Out</div>
      <div className="App-container">
        <div className="App-main">
          <div className="video-list">
            {videoFilenames.map((filename, index) => (
              <p
                key={index}
                onClick={() => changeVideo(index)}
                className={currentVideoIndex === index ? 'current-video' : ''}
              >
                {filename}
              </p>
            ))}
          </div>

          <div className="video-player-container">
            <video controls src={videoSrc}>
              <source src={videoSrc} type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
            <div>
              <button className="button" onClick={goToPreviousVideo}>
                Previous
              </button>
              <button className="button" onClick={goToNextVideo}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="App-footer">Created by Isaac Limb</div>
    </div>
  );
}

export default App;
