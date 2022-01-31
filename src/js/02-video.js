import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function(){})
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
    localStorage.setItem('videoplayer-current-time', time);
}