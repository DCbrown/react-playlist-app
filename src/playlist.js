import React, { useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'

const songs = [
    { 
        name: 'Chambers', 
        artist:"Fat Jon", 
        src: 'https://competent-bhabha-abd8d2.netlify.app/music/chambers.mp3' 
    },
    { 
        name: 'Castlevania II Simon\'s Quest', 
        artist:"The One-Ups", 
        src: 'https://competent-bhabha-abd8d2.netlify.app/music/castlevania-II-simon-quest.mp3' 
    },
    { 
        name: 'Don\'t Even try it', 
        artist:"Nujabes", 
        src: 'https://competent-bhabha-abd8d2.netlify.app/music/dont-even-try-it.mp3'
    },
    { 
        name: 'Don\'t Even try it', 
        artist:"Nujabes", 
        src: 'https://competent-bhabha-abd8d2.netlify.app/music/dont-even-try-it.mp3'
    },
    { 
        name: 'Fire Drill', 
        artist:"Gecko Yamori", 
        src: 'https://competent-bhabha-abd8d2.netlify.app/music/fire-drill.mp3'
    },
    { 
        name: 'Just forget', 
        artist:"Force Of Nature", 
        src: 'https://competent-bhabha-abd8d2.netlify.app/music/justforget.mp3'
    },
    { 
        name: 'Let me know what u think', 
        artist:"Tsutchie", 
        src: 'https://competent-bhabha-abd8d2.netlify.app/music/let-me-know-what-u-think.mp3'
    },
    { 
        name: 'Next to You', 
        artist:"Flamingosis", 
        src: 'https://competent-bhabha-abd8d2.netlify.app/music/next-to-you.mp3'
    },
    { 
        name: 'R.A.P Rhythm and PaRapper', 
        artist:"Emcess", 
        src: 'https://competent-bhabha-abd8d2.netlify.app/music/rhythm-and-parappa.mp3'
    },
    { 
        name: 'Sincerely', 
        artist:"Tsutchie", 
        src: 'https://competent-bhabha-abd8d2.netlify.app/music/sincerely.mp3'
    },
    { 
        name: 'Street Fighter II Sagat Theme', 
        artist:"The One-Ups", 
        src: 'https://competent-bhabha-abd8d2.netlify.app/music/street-fighter-sagat.mp3'
    },
    { 
        name: 'ToeJam & Earl Alien Breakdown ', 
        artist:"The One-Ups", 
        src: 'https://competent-bhabha-abd8d2.netlify.app/music/toe-jam-earl-alien-break-down.mp3'
    },
    
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
