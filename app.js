let score = [0,1];
var turn;
var team1={
    name:"FCB",
    goal:[],
    score:0
};
console.log(team1);
var team2={
    name:"REAL",
    goal:[],
    score:0
};
console.log(team2);
window.onload=()=>{
    //decide the toss and who's gonna goal first
    selectTurn();
    //update the text of the button based on the strike
    updateButtonText();
    updateScore();//updating the initial score board
    updateName();//update the team name at the start
    
};
selectTurn=()=>{
    console.log("select turn");
    turn=Math.round(Math.random())+1;
    console.log(turn);
};
updateButtonText=()=>{
    var button=document.getElementById('strike-button');
    console.log(button);
    button.textContent=`${turn===1?team1.name:team2.name} Strike`;
};
updateScore=()=>{
    //update team1 score 
    document.getElementById('team-1-score').textContent=team1.score;
    //update team2 score 
    document.getElementById('team-2-score').textContent=team2.score;
       
};
updateName=()=>{
    //update team-1 name
    document.getElementById('team-1-name').textContent=team1.name;
    //update team-2 name
    document.getElementById('team-2-name').textContent=team2.name;
};