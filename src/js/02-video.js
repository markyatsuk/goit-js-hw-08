import Player from '@vimeo/player';

import throttle from 'lodash.throttle';


// const iframe = document.querySelector('iframe');
 // Создаем элемент player, библиотеки Player
// const player = new Player(iframe);


const iframe = document.querySelector("iframe");

const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data){
    const time = data.seconds;
    localStorage.setItem('videoplayer-current-time', time);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function(){


}).catch(function(error){
    switch (error.name){
        case 'RangeError':
            break;
            default: 
            break;

    }
});

// Метод player.setCurrentTime(seconds) - устанавливает время старта видео, при запуске плеера
// аргумент seconds - время в секудах (localStorage.getItem('videoplayer-current-time') - время из локального хранилища)
player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function() {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});;

//Ф-ция - принимает объект события "timeupdate" ({duration: 61.857, percent: 0.049, seconds: 3.034}),
//Сохраняет в локальное хранилище текущее время видео (time), ключ - 'videoplayer-current-time'
// function onPlay(data) {
//     const time = data.seconds;
//     localStorage.setItem('videoplayer-current-time', time);
// }