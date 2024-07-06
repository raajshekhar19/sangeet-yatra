const play = document.getElementById("play");
const music = document.querySelector('audio');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const title = document.querySelector('#title');




const songs = [
    {
    name:"day1deva",
    title:"Deva Deva",
    artist:"ARIJIT SINGH"
    },

    {
        name:"day2aaogetum",
        title:"Aaoge tum kabhi",
        artist:"THE LOCAL TRAIN"
    },


    {
        name:"day1sajni",
        title:"O sajni Re",
         artist:"ARIJIT SINGH"
    },

    {
        name:"day2choolo",
        title:"Choo Lo",
        artist:"THE LOCAL TRAIN"
    },

    {
        name:"day1tumhiho",
        title:"Tum hi ho",
         artist:"ARIJIT SINGH"
    },
    
    
    {
        name:"day2dilmere",
        title:"Dil mere",
        artist:"THE LOCAL TRAIN"
    }
];


let isPlaying = false;

 const playMusic  =()=>{
     isPlaying = true;
    music.play();
    play.classList.replace("fa-play","fa-pause");

};

const pauseMusic=()=>{
    isPlaying = false;
   music.pause();
   play.classList.replace("fa-pause","fa-play");

};

play.addEventListener('click',()=>{
    isPlaying ?pauseMusic():playMusic();
});



//changing music
const loadSong= (songs)=>{
    title.textContent =songs.title;
    artist.textContent = songs.artist;
    music.src = "./"+songs.name +".mp3";
}
let songIdx = 0;

 const nextSong = () =>{
    songIdx = (songIdx + 1) %songs.length;
    loadSong(songs[songIdx]);
    playMusic();
 };

 const prevSong = () =>{
    songIdx = (songIdx - 1 + songs.length) %songs.length;
    loadSong(songs[songIdx]);
    playMusic();
 };


next.addEventListener('click',nextSong);
prev.addEventListener('click',prevSong);

