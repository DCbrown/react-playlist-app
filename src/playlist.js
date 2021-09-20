import React, { useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'

const songs = [
    { 
        name: 'Next to You', 
        artist:"Flamingosis", 
        src: 'http://angular.donovan-brown.com/music/next-to-you.mp3' 
    },
    { 
        name: 'Flute Salid', 
        artist:"Flamingosis", 
        src: 'http://angular.donovan-brown.com/music/flute-salad.mp3' 
    },
    { 
        name: 'Feelings of Sentimentality Due to Getting Curved', 
        artist:"Flamingosis", 
        src: 'http://angular.donovan-brown.com/music/feelings-of-sentimentality-due-to-getting-curved.mp3'
    },
    { 
        name: 'Get Yourself Together', 
        artist:"Flamingosis", 
        src: 'http://angular.donovan-brown.com/music/get-yourself-together.mp3' 
    },
    { 
        name: 'That\'s Cold ', 
        artist:"Flamingosis", 
        src: 'http://angular.donovan-brown.com/music/thats-cold.mp3' 
    }
]

// Ref https://www.npmjs.com/package/react-h5-audio-player

const Playlist = () => {
    const [currentMusicIndex, setcurrentMusicIndex] = useState(0);
    const [isShuffle, setIsShuffle] = useState(false);

    const handleClickPrevious = () => {
        setcurrentMusicIndex(currentMusicIndex === 0 ? songs.length - 1 : currentMusicIndex - 1)
        // console.log(currentMusicIndex)
    }

    const handleClickNext = () => {
        setcurrentMusicIndex(currentMusicIndex < songs.length - 1 ? currentMusicIndex + 1 : 0)
        // console.log(currentMusicIndex)
    }

    const handleRandom = () => {
        let random = Math.floor(Math.random() * songs.length);
        // console.log(random)
        setcurrentMusicIndex(random, songs[random])
    }

    const handleToggleShuffle = () => {
        setIsShuffle(isShuffle => !isShuffle)
        // console.log(isShuffle)
    }

    return (
        <div>
            <h1>{songs[currentMusicIndex].name}</h1>
            <h2>{songs[currentMusicIndex].artist}</h2>
            <AudioPlayer
                className="audioPlayer"
                autoPlayAfterSrcChange={true}
                onEnded={!isShuffle ? handleClickNext : handleRandom }
                loop={false}
                customAdditionalControls={
                    [
                        <FontAwesomeIcon 
                            icon={faRandom} 
                            size="2x" 
                            onClick={handleToggleShuffle}>
                        </FontAwesomeIcon>
                    ]
                }
                showSkipControls={true}
                showJumpControls={false}
                src={songs[currentMusicIndex].src}
                onClickPrevious={handleClickPrevious}
                onClickNext={!isShuffle ? handleClickNext : handleRandom }
            />
            {/* !isShuffle ? <button onClick={handleShuffle}>Turn On Shuffle</button> : <button onClick={handleShuffle}>Turn Off Shuffle</button> */}
            
            {!isShuffle ? <h3>Shuffle Off</h3> : <h3>Shuffle On</h3>}
            
            {/*!isShuffle ? <button onClick={handleRandom}>Shuffle off</button> : <button onClick={handleRandom}>Shuffle on</button>*/}

        </div>
    )
}

export default Playlist
