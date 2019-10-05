// Write your JavaScript code here.
// Remember to pay attention to page loading!
// window.addEventListener("load", function(){
//     event.preventDefault();
// }

function init (){
    document.getElementById("takeoff").onclick = function(event){
        confirm("confirm that the shuttle is ready for take off");
        document.querySelector("p").innerHTML = ("Shuttle in flight!");
        document.getElementById("shuttleBackground").style.background = "blue";
        document.getElementById("spaceShuttleHeight").innerHTML = 10000;
  };
    document.getElementById("missionAbort").onclick = function(event){
        confirm("Confirm that you want to abort the mission");
        document.querySelector("p").innerHTML = "Mission aborted";
        document.getElementById("shuttleBackground").style.background = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
}
    document.getElementById("landing").onclick = function(event){
        alert("The shuttle is landing. Landing gear engaged");
        document.querySelector("p").innerHTML = ("Shuttle has landed");
        document.getElementById("shuttleBackground").style.background = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
    };
};






