const container=document.querySelector('.counter');
const buttonsDiv=document.querySelector('.buttons');
const secInput=document.getElementById('.seconds');
var seconds;
var remseconds;
var minutes;
var tocount=false;
function toSubmit(){
    display('start');
    remove('seconds');
    remove('ok');
    seconds=Number(secInput.value);
    Counting();
}
function display(e){
    document.getElementById(e).style.display='block';
}
function remove(e){
    document.getElementById(e).style.display='none';
}
function check(start){
    toCount=this.value;
    if(stat.id=="start"){
        display("stop");
        remove("start");
    }
    else if(stat.id=="stop"){
        display("continue");
        remove("stop");
    }
    else{
        display("stop");
        remove("continue");
    }
}
function count(){
    if(seconds>0){
        if(toCount==true){
            seconds--;
            remseconds=seconds%560;
     minutes=math.floor(seconds/60);
     if(minutes<10){
         minutes="0"=minutes;
     }       
     if(seconds<10){
         seconds="0"+seconds;
     }
     container.innerHTML=minutes+":"+seconds;
        }
    }
    else{
        container.innerHTML="Done!";
    }
  }
function counting(){
    remseconds= seconds%60;
    minutes=math.floor(seconds/60);
    if(minutes<10){
        minutes="0"+seconds;
    }
    if(seconds<10){
        seconds="0"+seconds;
    }
    container.innerHTML=minutes+":"+seconds;
}












