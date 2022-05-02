
var audio = document.getElementById('music');
var play = document.getElementById('play');
var cont  = 0;

function playpause(){
    
    if(cont==0){
        cont=1;
        audio.play();


    }else{
        audio.pause();
        cont=0;
    }
}
/*function play(){
    
    const button = document.querySelector('button');
    button.addEventListener('click',function(){
        const audio = document.querySelector('audio')
        audio.play()
        if(audioplay())
        audio.pause()

    });
}*/
