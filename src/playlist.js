import React, { useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const list = [
    { name: 'Next to You', src: 'http://angular.donovan-brown.com/assets/img/Next-to-You.mp3' },
    { name: 'Get yourself', src: 'http://angular.donovan-brown.com/assets/img/flamingosis-get-yourself-together.mp3' },
    { name: '2 Next to You', src: 'http://angular.donovan-brown.com/assets/img/Next-to-You.mp3' },
    { name: '3 Get yourself', src: 'http://angular.donovan-brown.com/assets/img/flamingosis-get-yourself-together.mp3' },
]

// Ref https://www.npmjs.com/package/react-h5-audio-player

const Playlist = () => {
    const [currentMusicIndex, setcurrentMusicIndex] = useState(0);
    const [isShuffle, setIsShuffle] = useState(false)

    const handleClickPrevious = () => {

        setcurrentMusicIndex(currentMusicIndex === 0 ? list.length - 1 : currentMusicIndex - 1)
        console.log(currentMusicIndex)

    }

    const handleClickNext = () => {
        setcurrentMusicIndex(currentMusicIndex < list.length - 1 ? currentMusicIndex + 1 : 0)
        console.log(currentMusicIndex)
    }

    const handleRandom = () => {
        let random = Math.floor(Math.random() * list.length);
        console.log(random)
        setcurrentMusicIndex(random, list[random])
    }

    const handleShuffle = (isShuffle) => {
        setIsShuffle(isShuffle => !isShuffle)
        console.log(isShuffle)
    }

    return (
        <div>
            <h1>{list[currentMusicIndex].name}</h1>
            <AudioPlayer
                autoPlayAfterSrcChange={true}
                // onEnded={handleClickNext}
                onEnded={!isShuffle ? handleRandom : handleClickNext}
                loop={false}
                showSkipControls={true}
                showJumpControls={true}
                src={list[currentMusicIndex].src}
                onClickPrevious={handleClickPrevious}
                onClickNext={handleClickNext}
            />
            <button onClick={handleShuffle}>Random Song</button>
            {!isShuffle ? <button onClick={handleRandom}>Shuffle off</button> : <button onClick={handleRandom}>Shuffle on</button>}

        </div>
    )
}

export default Playlist
