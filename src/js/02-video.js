import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const value = "videoplayer-current-time";
 const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });
    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

const onPlay = function (data) {
    
    const time = data.seconds; 
    
localStorage.setItem(value, time) 
};

    player.on('timeupdate', throttle(onPlay, 1000));

const nouTime = localStorage.getItem(value)

console.log(nouTime);

player.setCurrentTime(nouTime).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});
console.log('ура')
    


