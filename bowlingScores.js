// Bowling scores
// https://www.reddit.com/r/dailyprogrammer/comments/3ntsni/20151007_challenge_235_intermediate_scoring_a/
// Shad and Anjana
// Oct 20 2015

console.log("hello");
var perfectGame = 'X X X X X X X X X XXX';
var sampleScore = 'X 3/ 23 5- 8/ 9- X 81 1- X5/';
var challenge1 = 'X -/ X 5- 8/ 9- X 81 1- 4/X';
var challenge2 = '62 71 X 9- 8/ X X 35 72 5/8';

var scoreArray = sampleScore.split(" ");
console.log(scoreArray);

// check if array is right size


//for all but tenth frame if length = 1 then if X check around

//if / in it then do spare function

// else add the number

var frameScores = [];


function intify(char){
    
    return parseInt(char.replace("-","0").replace('X','10'));
    
}
function scoreStrike(nextFrame, nextNextFrame) {
    var score = 10;
    if (nextFrame.length === 1) {
        score += 10 + intify(nextNextFrame[0]);
    } else if (nextFrame.indexOf('/') > -1) {
        score += 10;
    } else {
        score += intify(nextFrame[0]) + intify(nextFrame[1]);
    }
    return score;
}

function scoreSpare(nextFrame) {
    return intify(nextFrame[0]) +10;
}

function scoreNormal(frame) {
    //input = input.replace("-", "0");
    //console.log(frame[0]);
    var ball1 = intify(frame[0]),
    ball2 = intify(frame[1]);
    
    return ball1 + ball2;
}

function score(scoreCardArray) {
    // TODO check that the array has 10 elements
    
    var frameScores = [ ];
    scoreCardArray.forEach(function(frame, i) {
        //console.log("Frame: ", i, frame);
        var frameScore;
        if (i === 9) {
            // handle last frame 
            if(frame.length ===2){
                frameScore = scoreNormal(frame);
            }
            else if (frame.indexOf('X') ===0){
                frameScore = scoreStrike(frame.slice(1));
            }
            else if(frame.indexOf('/') > -1){
                frameScore = scoreSpare(frame[2]);
                console.log('checking frame 2:', frame[2]);
            }
            
        } else if (frame.length === 1) {
            //frameScore = "strike";
            frameScore = scoreStrike(scoreCardArray[i+1], scoreCardArray[i+2]);
        } else if (frame.indexOf("/") > -1) {
            frameScore = scoreSpare(scoreCardArray[i+1]);
        } else {
            frameScore = scoreNormal(frame);
        }
        frameScores.push(frameScore);
    });
    console.log("frameScores: ", frameScores);
    return frameScores.reduce(function(sum,score){
        return sum + score;
    });
}
console.log("score(scoreArray) :", score(scoreArray));
console.log(score(['23','56','99']));
console.log(score(perfectGame.split(' ')));

console.log(score(challenge1.split(' ')) === 137);
console.log(score(challenge2.split(' ')) === 140);














