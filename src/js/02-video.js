import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(STORAGE_KEY)).then(function(){})
.catch(function(error){
    switch (error.name){
        case 'RangeError':
            break;
            default: 
            break;
    }
});

function onPlay(data){
    const time = data.seconds;
    localStorage.setItem(STORAGE_KEY, time);
}


