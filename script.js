console.log("welcome to spotify");
//initialise the variables
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressBar=document.getElementById('myprogressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName: "cheap thrills", filepath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "somebody i used to know", filepath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "alone part 2", filepatbh: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "bad liar", filepath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "love me like you do", filepath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "cheap thrills", filepath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "somebody i used to know", filepath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "alone part 2", filepath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "bad liar", filepath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "bad liar", filepath: "songs/4.mp3", coverPath: "covers/4.jpg"},  
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

   
})
 
// audioElement.play();
//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
         gif.style.opacity=1;

    }
    else{
        audioElement.pause();
         masterPlay.classList.remove('fa-pause-circle');
         masterPlay.classList.add('fa-play-circle');
         gif.style.opacity=0;

    }
})

// listen to event
    audioElement.addEventListener('timeupdate',()=>{
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myprogressBar.value=progress;
})
myprogressBar.addEventListener('change', ()=>{
    audioElement.currentTime= myprogressBar.value *audioElement.duration/100;
})

 const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
 }

 Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
         makeAllPlays();
         songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText= songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        element.classList.remove('fa-play-circle');
        element.classList.add('fa-pause-circle');
    })
 })

 document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        
        songIndex +=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        element.classList.remove('fa-play-circle');
        element.classList.add('fa-pause-circle');
 })

 document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        
        songIndex -=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        element.classList.remove('fa-play-circle');
        element.classList.add('fa-pause-circle');
 })
