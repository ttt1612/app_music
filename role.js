const music = new Audio('BTS-Butter.mp3');


// Create Array

const songs = [
    {
        id:"1",
        songName:`Butter <br>
        <div class="sub-title">BTS</div>`,
        image: "img/1.jpg",
    },
    {
        id: "2",
        songName: `Run-BTS <br>
        <div class="sub-title">BTS</div>`,
        image:  "img/2.jpg"
    },
    {
        id: "3",
        songName: `Run <br>
        <div class="sub-title">BTS</div>`,
        image:  "img/3.jpg",
    },
    {
        id: "4",
        songName: ` I need you<br>
        <div class="sub-title">BTS</div>`,
        image:  "img/4.jpg",
    },
    {
        id: "5",
        songName: `Hold me tight<br>
        <div class="sub-title">BTS</div>`,
        image:  "img/5.jpg",
    },
    {
        id: "6",
        songName: `Dynamite <br>
        <div class="sub-title">BTS</div>`,
        image:  "img/6.jpg",
    },
    {
        id: "7",
        songName: `Life goes on <br>
        <div class="sub-title">BTS</div>`,
        image:  "img/7.jpg",
    },
    {
        id: "8",
        songName: `N.O <br>
        <div class="sub-title">BTS</div>`,
        image:  "img/8.jpg",
    },
    {
        id: "9",
        songName: `Save me <br>
        <div class="sub-title">BTS</div>`,
        image:  "img/9.jpg",
    },
    {
        id: "10",
        songName: `Anpanman <br>
        <div class="sub-title">BTS</div>`,
        image:  "img/10.jpg",
    },
    {
        id: "11",
        songName: `Anpanman <br>
        <div class="sub-title">BTS</div>`,
        image:  "img/11.jpg",
    },
    {
        id: "12",
        songName: `Anpanman <br>
        <div class="sub-title">BTS</div>`,
        image:  "img/12.jpg",
    },
    {
        id: "13",
        songName: `Anpanman <br>
        <div class="sub-title">BTS</div>`,
        image:  "img/13.jpg",
    },
    {
        id: "14",
        songName: `Anpanman <br>
        <div class="sub-title">BTS</div>`,
        image:  "img/14.jpg",
    },
    {
        id: "15",
        songName: `Anpanman <br>
        <div class="sub-title">BTS</div>`,
        image:  "img/15.jpg",
    },
    {
        id: "16",
        songName: `Anpanman <br>
        <div class="sub-title">BTS</div>`,
        image:  "img/16.jpg",
    },
]

Array.from(document.getElementsByClassName('song-item')).forEach((e, i)=>{ 
    e.getElementsByTagName('img')[0].src = songs[i].image;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let btnPlay = document.getElementById('btnPlay');
let wave = document.getElementsByClassName('wave')[0];

btnPlay.addEventListener('click', () =>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        btnPlay.classList.remove('bi-play-fill');
        btnPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        btnPlay.classList.add('bi-play-fill');
        btnPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
})

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('playList-play')).forEach((element) => {
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');

})
}

const makeAllBG = () => {
    Array.from(document.getElementsByClassName('song-item')).forEach((element) => {
            element.style.background = "rgb(105,105,170,0)";

})
}

let index = 0;
let poster_master_play = document.getElementById('poster-master-play');
let title = document.getElementById('title');


Array.from(document.getElementsByClassName('playList-play')).forEach((element) => {
            element.addEventListener('click', (e) => {
                index = e.target.id;
                makeAllPlay();
                e.target.classList.remove('bi-play-circle-fill');
                e.target.classList.add('bi-pause-circle-fill');
                music.src = `audio/${index}.mp3`;
                poster_master_play.src = `img/${index}.jpg`;
                music.play();
                let song_title = songs.filter((ele) => {
                    return ele.id == index;
                })

                song_title.forEach(ele => {
                    let {songName} = ele;
                    title.innerHTML = songName;
                })
                
                btnPlay.classList.remove('bi-play-fill');
                btnPlay.classList.add('bi-pause-fill');
                wave.classList.add('active2');
                music.addEventListener('ended', () => {

                    btnPlay.classList.add('bi-play-fill');
                    btnPlay.classList.remove('bi-pause-fill');
                    wave.classList.remove('active2');
                })
                makeAllBG();
                Array.from(document.getElementsByClassName('song-item'))[`${index - 1}`].style.background = "rgb(105,105,170,.1)";
            })
})


let currentStart = document.getElementById('current-start');
let currentEnd = document.getElementById('current-end');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];




music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur / 60);
    let sec = Math.floor(music_dur % 60);
    if (sec < 10) {
        sec = `0${sec}`;
    }
    currentEnd.innerText = `${min}:${sec}`;

    
    let min1 = Math.floor(music_curr / 60);
    let sec1 = Math.floor(music_curr % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressBar = parseInt((music.currentTime/music.duration)* 100);
    seek.value = progressBar;
    let seekBar = seek.value;
    bar2.style.width = `${seekBar}%`;
    dot.style.left = `${seekBar}%`;

})

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', () => {
                btnPlay.classList.add('bi-play-fill');
                btnPlay.classList.remove('bi-pause-fill');
                wave.classList.remove('active2');
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol-dot');
let vol_bar = document.getElementsByClassName('vol-bar')[0];

vol.addEventListener('change', () => {
    if (vol.value === 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');

    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click',() => {
        index -= 1;
        if (index < 1) {
            index = Array.from(document.getElementsByClassName('song-item')).length;
        }
                music.src = `audio/${index}.mp3`;
                poster_master_play.src = `img/${index}.jpg`;
                music.play();
                let song_title = songs.filter((ele) => {
                    return ele.id == index;
                })

                song_title.forEach(ele =>{
                    let {songName} = ele;
                    title.innerHTML = songName;
                })
                makeAllPlay();

                document.getElementById(`${index}`).classList.remove('bi-play-fill');
                document.getElementById(`${index}`).classList.add('bi-pause-fill');
                makeAllBG();
                Array.from(document.getElementsByClassName('song-item'))[`${index - 1}`].style.background = "rgb(105,105,170,.1)";
})

next.addEventListener('click',() => {
    index -= 0;
    index += 1;

    if (index > Array.from(document.getElementsByClassName('song-item')).length) {
        index = 1;
    }
            music.src = `audio/${index}.mp3`;
            poster_master_play.src = `img/${index}.jpg`;
            music.play();
            let song_title = songs.filter((ele) => {
                return ele.id == index;
            })

             song_title.forEach(ele => {
                let {songName} = ele;
                title.innerHTML = songName;
            })
            makeAllPlay();

            document.getElementById(`${index}`).classList.remove('bi-play-fill');
            document.getElementById(`${index}`).classList.add('bi-pause-fill');
            makeAllBG();
            Array.from(document.getElementsByClassName('song-item'))[`${index - 1}`].style.background = "rgb(105,105,170,.1)";
})

let left_scrolls = document.getElementById('left-scroll');
let right_scrolls = document.getElementById('right-scroll');
let pop_song = document.getElementsByClassName('pop-song')[0];

    left_scrolls.addEventListener('click',() => {
        pop_song.scrollLeft-= 330;
    })

    right_scrolls.addEventListener('click',() => {
        pop_song.scrollLeft += 330;
    })
// Popular Artist

let left_scroll = document.getElementById('left-scrolls');
let right_scroll = document.getElementById('right-scrolls');
let pop_artist = document.getElementsByClassName('item')[0];

    left_scroll.addEventListener('click',() => {
        pop_artist.scrollLeft-= 330;
    })

    right_scroll.addEventListener('click',() => {
        pop_artist.scrollLeft += 330;
    })

