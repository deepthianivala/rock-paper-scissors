// save persistence
let userScore=0;
let pcScore=0;

window.onload=function(){
    userScore=Number(sessionStorage.getItem("userScore"));
    pcScore=Number(sessionStorage.getItem("pcScore"));
    yourScoreRef.innerHTML=userScore;
    pcScoreRef.innerHTML=pcScore;
    console.log(sessionStorage);
};
const rock="rock";
const paper="paper";
const scissor="scissors";

let userSelected="";
let pcSelected="";

var userChoiceImage="";
var pcChoiceImage="";
var ele="";

// Source Variables
const rockImageSource = "/assets/rock.png";
const paperImageSource = "/assets/paper.png";
const scissorImageSource = "/assets/scissors.png";

// UI REF
let displayYouPick_PcPick = false;

//SCORE SETTLING
const pcScoreRef = document.getElementById("computer_count");
const yourScoreRef = document.getElementById('your_count');

// TEXT SHOW SCREEN
const youWinTextRef = document.getElementById('you-win-id');
const youLoseTextRef=document.getElementById('you-lose-id');
const tieTextRef = document.getElementById('match-tie-id');
const circlesRef=document.getElementById('circles-id');
const youPickPcPickRef = document.getElementById('outer-cover-id');
const playAgainRef = document.getElementById("play-again-id");
const frame_2_Ref=document.getElementById('frame-2');

// Click events
const rockImageRef = document.getElementById('rock_img');
const paperImageRef = document.getElementById('paper_img');
const scissorImageRef = document.getElementById('scissors_img');

// Rules Box
const rulesBoxRef = document.getElementById('rules_msg');
const closeButtonRef = document.getElementById("close-btn-id");


    // you pick
    youPickPcPickRef.style.display = 'none';
    // you win
    youWinTextRef.style.display='none';
    //you loose
    youLoseTextRef.style.display='none';
    //match tie
    tieTextRef.style.display='none';
    //frame-2
    frame_2_Ref.style.display='none';
    //circles or triangle
    circlesRef.style.display='block';
    //next-btn
    if(userScore<=pcScore){
        document.getElementById('nxt-btn').style.display='none';
    } 
    

// HANDLING THE CLICK EVENT
function handleClickEvent(e,param){
    console.log("Clickinggggggg");
    displayYouPick_PcPick = true;
    if(param == 0){
        userSelected = rock;
    }else if(param == 1){
        userSelected = scissor;
    }else if(param== 2){
        userSelected=paper;
    } 
    if(displayYouPick_PcPick == true){
        youPickPcPickRef.style.display ='block'
    }
    pcSelected = randomGenerator();
    whatBeatsWhat(userSelected,pcSelected);
}

//click Events on outercircles
const outer1Ref=document.getElementById("outer1_cirlce");
const outer2Ref=document.getElementById("outer2_cirlce");
const outer3Ref=document.getElementById("outer3_cirlce");

// Click Events
rockImageRef.addEventListener('click',(e)=>{
    handleClickEvent(e,0);
});
paperImageRef.addEventListener('click',(e)=>{
    handleClickEvent(e,2);
});
scissorImageRef.addEventListener('click',(e)=>{
    handleClickEvent(e,1);
});

//random options generator
function randomGenerator(){
    const options = ['rock','paper','scissors'];
    let val = Math.floor(Math.random()*options.length);
    return options[val];
}

function whatBeatsWhat(userSelected, pcSelected){

    console.log(userSelected);
    console.log(pcSelected);
    if(userSelected == rock && pcSelected == scissor){
        console.log("User Wins : 1");
        userScore += 5;
        pcScore-=3;
        youWinTextRef.style.display='block';

        userChoiceImage = InstantiateImage(rockImageSource,"28%","50%",rock,true); // for user
        pcChoiceImage = InstantiateImage(scissorImageSource,"60%","50%",scissor,false);  //for computer
        document.body.appendChild(userChoiceImage);
        document.body.appendChild(pcChoiceImage);
    }

    else if(userSelected == scissor && pcSelected == paper){
        console.log("User Wins : 2");
        userScore += 5;
        pcScore-=3;
        youWinTextRef.style.display='block';

        userChoiceImage = InstantiateImage(scissorImageSource,"28%","50%",scissor,true); // for user
        pcChoiceImage = InstantiateImage(paperImageSource,"60%","50%",paper,false);  //for computer
        document.body.appendChild(userChoiceImage);
        document.body.appendChild(pcChoiceImage);

    }else if(userSelected == paper && pcSelected == rock){
        console.log("User Wins : 3");
        userScore += 5;
        pcScore-=3;
        youWinTextRef.style.display='block';

        userChoiceImage=InstantiateImage(paperImageSource,"28%","50%",paper,true); // for user
        pcChoiceImage =InstantiateImage(rockImageSource,"60%","50%",rock,false);  //for computer
        document.body.appendChild(userChoiceImage);
        document.body.appendChild(pcChoiceImage);
    
    }else if(userSelected == scissor && pcSelected == rock){
        console.log('Pc Wins : 4');
        pcScore += 5;
        userScore-=3;
        youLoseTextRef.style.display='block';

        userChoiceImage=InstantiateImage(scissorImageSource,"28%","50%",scissor,false); // for user
        pcChoiceImage =InstantiateImage(rockImageSource,"60%","50%",rock,true);  //for computer
        document.body.appendChild(userChoiceImage);
        document.body.appendChild(pcChoiceImage);

    }else if(userSelected == rock && pcSelected == paper){
        console.log("Pc Wins : 5");
        pcScore += 5;
        userScore-=3;
        youLoseTextRef.style.display='block';

        userChoiceImage=InstantiateImage(rockImageSource,"28%","50%",rock,false); // for user
        pcChoiceImage =InstantiateImage(paperImageSource,"60%","50%",paper,true);  //for computer
        document.body.appendChild(userChoiceImage);
        document.body.appendChild(pcChoiceImage);
        
    }else if(userSelected == paper && pcSelected == scissor){
        console.log(" Pc Wins : 6");
        pcScore += 5;
        userScore-=3;   
        youLoseTextRef.style.display='block';
        
        userChoiceImage=InstantiateImage(paperImageSource,"28%","50%",paper,false); // for user
        pcChoiceImage =InstantiateImage(scissorImageSource,"60%","50%",scissor,true);  //for computer
        document.body.appendChild(userChoiceImage);
        document.body.appendChild(pcChoiceImage);
        
    }else if( userSelected == pcSelected){
        
        console.log("Tie : 7");
        let user_src = `/assets/${userSelected}.png`;
        let pc_src = `/assets/${pcSelected}.png`;
        userChoiceImage = InstantiateImage(user_src,'28%','50%',userSelected);
        pcChoiceImage = InstantiateImage(pc_src,'60%','50%',pcSelected);
        document.body.appendChild(userChoiceImage);
        document.body.appendChild(pcChoiceImage);
        tieTextRef.style.display='block';  
    }
    // UPDATE UI
    yourScoreRef.innerHTML = userScore;
    pcScoreRef.innerHTML = pcScore;
    circlesRef.style.display='none';
    sessionStorage.setItem("pcScore",pcScore);
    sessionStorage.setItem("userScore",userScore);
    if(userScore<=pcScore){
        document.getElementById('nxt-btn').style.display='none';
    }else if(userScore > pcScore){
        document.getElementById('nxt-btn').style.display='block';
    } 
}

// RULES SETTINGS

function controlRules(param){
    if(param == 1){
        rulesBoxRef.style.display='block';
        closeButtonRef.style.display="block";
    }
    else if (param==0){
        rulesBoxRef.style.display='none';
        closeButtonRef.style.display='none';
    }
}
//playagain settings

function playAgain(){
        circlesRef.style.display='block';
        youLoseTextRef.style.display='none';
        youWinTextRef.style.display='none';
        tieTextRef.style.display='none';
        youPickPcPickRef.style.display='none';  
        userChoiceImage.style.display = 'none';
        pcChoiceImage.style.display = 'none';
        frame_2_Ref.style.display='none'; 
        document.getElementById('frame-1').style.display='block';
}


function InstantiateImage(src,position_x,position_y,desiredBorder,won){

    let div = document.createElement('div');
    let img = document.createElement('IMG');

    // Set attributes div (outer circle)
    div.className = 'custom1_border';
    div.style.left = position_x;
    div.style.top = position_y;

    // Set attributes of the image
    img.setAttribute('src',`${src}`);
    img.style.position = 'absolute';
    img.style.left ='12%';
    img.style.top='16%'; 

    if(desiredBorder == rock){
        div.style.border = '16px solid #0074B6';
    }else if( desiredBorder == paper){
        img.style.left = '18%';  // scissor was not in correct position
        div.style.border = '16px solid #FFA943'
    }else if(desiredBorder == scissor){
        img.style.top = '20%'
        img.style.left = '32%';  // scissor was not in correct position
        div.style.border = '16px solid #BD00FF'
    }

    div.appendChild(img);
    if(won == true){
        div.style.left = '-15px';
        div.style.top = '-15px';
        // Show ripple effect
        ele = document.createElement('div');
        ele.className = 'win-ripple';
        ele.appendChild(div);
        ele.style.left = position_x;
        ele.style.top = position_y;
        return ele;
    }

    return div;
}
//next page play again

function next(){
    if (userScore>pcScore){
        youLoseTextRef.style.display='none';
        youWinTextRef.style.display='none';
        youPickPcPickRef.style.display='none';
        tieTextRef.style.display='none';
        document.getElementById('frame-1').style.display='none';
        document.getElementById('nxt-btn').style.display='none';
        userChoiceImage.style.display = 'none';
        pcChoiceImage.style.display = 'none';
        frame_2_Ref.style.display='block';
    }
}

