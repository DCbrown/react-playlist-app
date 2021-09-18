import React, { useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const list = [
    { name: 'Next to You', artist:"Flamingosis", src: 'http://angular.donovan-brown.com/music/next-to-you.mp3' },
    { name: 'Flute Salid', artist:"Flamingosis", src: 'http://angular.donovan-brown.com/music/flute-salad.mp3' },
    { name: 'Feelings of Sentimentality Due to Getting Curved', artist:"Flamingosis", src: 'http://angular.donovan-brown.com/music/feelings-of-sentimentality-due-to-getting-curved.mp3'},
    { name: 'Get Yourself Together', artist:"Flamingosis", src: 'http://angular.donovan-brown.com/music/get-yourself-together.mp3' },
    { name: 'That\'s Cold ', artist:"Flamingosis", src: 'http://angular.donovan-brown.com/music/thats-cold.mp3' }
]

// Ref https://www.npmjs.com/package/react-h5-audio-player

const Playlist = () => {
    const [currentMusicIndex, setcurrentMusicIndex] = useState(0);
    const [isShuffle, setIsShuffle] = useState(false)

    const handleClickPrevious = () => {
        setcurrentMusicIndex(currentMusicIndex === 0 ? list.length - 1 : currentMusicIndex - 1)
        // console.log(currentMusicIndex)
    }

    const handleClickNext = () => {
        setcurrentMusicIndex(currentMusicIndex < list.length - 1 ? currentMusicIndex + 1 : 0)
        // console.log(currentMusicIndex)
    }

    const handleRandom = () => {
        let random = Math.floor(Math.random() * list.length);
        // console.log(random)
        setcurrentMusicIndex(random, list[random])
    }

    const handleShuffle = () => {
        setIsShuffle(isShuffle => !isShuffle)
        // console.log(isShuffle)
    }

    return (
        <div>
            <h1>{list[currentMusicIndex].name}</h1>
            <h2>{list[currentMusicIndex].artist}</h2>
            <AudioPlayer
                autoPlayAfterSrcChange={true}
                // onEnded={handleClickNext}
                onEnded={!isShuffle ? handleClickNext : handleRandom }
                loop={false}
                showSkipControls={true}
                showJumpControls={true}
                src={list[currentMusicIndex].src}
                onClickPrevious={handleClickPrevious}
                onClickNext={!isShuffle ? handleClickNext : handleRandom }
            />
            {!isShuffle ? <button onClick={handleShuffle}>Turn On Shuffle</button> : <button onClick={handleShuffle}>Turn Off Shuffle</button>}
            <button onClick={handleRandom}>Shuffle</button> 
            {!isShuffle ? <p>Shuffle off</p> : <p>Shuffle on</p>}
            
            {/*!isShuffle ? <button onClick={handleRandom}>Shuffle off</button> : <button onClick={handleRandom}>Shuffle on</button>*/}

        </div>
    )
}

export default Playlist
