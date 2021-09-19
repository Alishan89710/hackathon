const firebaseConfig = {
    apiKey: "AIzaSyCH0pMbH3ZXBlmTsu0CTadMC665O1z6D0w",
    authDomain: "chartapp-76eb5.firebaseapp.com",
    databaseURL: "https://chartapp-76eb5-default-rtdb.firebaseio.com",
    projectId: "chartapp-76eb5",
    storageBucket: "chartapp-76eb5.appspot.com",
    messagingSenderId: "1009974553910",
    appId: "1:1009974553910:web:4518881a4c519cdebfd797",
    measurementId: "G-T353STYN6X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log(firebase)
const auth = firebase.auth();
const fairbase = firebase.firestore()
console.log(firebase.database)





function switchToSignUp(){
    document.getElementById("signIn-box").style.display="none";
    document.getElementById("signUp-box").style.display="block";
}

function switchToSignIn(){
    document.getElementById("signUp-box").style.display="none";
    document.getElementById("signIn-box").style.display="block";
}

function signIn() {
    const email = document.getElementById("iemail").value;
    const password = document.getElementById("ipassword").value;
    console.log(email, password);

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
}

function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

function signUp() {
    const email = document.getElementById("uemail").value;
    const password = document.getElementById("upassword").value;
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}
let popped = 0;

document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "balloon-red"){
        
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "POP!";
                popped++;
                removeEvent(e);
                checkAllPopped();
    }    else if (e.target.className === "balloon"){
        
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "FAIL!";
                popped++;
                removeEvent(e);
                checkAllPopped();
            }
            else if (e.target.className === "balloonyellow"){
        
                        e.target.style.backgroundColor = "#ededed";
                        e.target.textContent = "FAIL!";
                        popped++;
                        removeEvent(e);
                        checkAllPopped();
                    }
                    else if (e.target.className === "balloongrey"){
        
                                e.target.style.backgroundColor = "#ededed";
                                e.target.textContent = "FAIL!";
                                popped++;
                                removeEvent(e);
                                checkAllPopped();
                            }
});

function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function checkAllPopped(){
    if (popped === 24){
        console.log('all popped!');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};
var balloon_1 = new Image();
balloon_1.src = 'https://drive.google.com/uc?export=view&id=0BzIuZOZL5LxeRi1YWmdXNWdjTm8';
var balloon_2 = new Image();
balloon_2.src = 'https://drive.google.com/uc?export=view&id=0BzIuZOZL5LxeQ0dvS0JZdXFqYkU';
var balloon_3 = new Image();
balloon_3.src = 'https://drive.google.com/uc?export=view&id=0BzIuZOZL5Lxed0RoajZCMjlvWFk';
var balloon_4 = new Image();
balloon_4.src = 'https://drive.google.com/uc?export=view&id=0BzIuZOZL5Lxeb3ZGZlBEaUlyMjA'
var balloon_5 = new Image();
balloon_5.src = 'https://drive.google.com/uc?export=view&id=0BzIuZOZL5LxeMHJ2N1F4OGIzMXM';
var balloon_6 = new Image();
balloon_6.src = 'https://drive.google.com/uc?export=view&id=0BzIuZOZL5LxeSnlmdURiWmI1dzg';

var pop = new Image();
pop.src = 'https://drive.google.com/uc?export=view&id=0BzIuZOZL5LxeZ2NIdGthRmM1Mk0';

var balloons = [];
var pops = [];
var scr = 0;

window.addEventListener('load', function(event){
   var animProp = {
                animate: false
            };
   
  var health = 5; document.getElementById('start').addEventListener('click', function(){
       
     if (animProp.animate) {
        document.getElementById('start').value = "Start";
        animProp.animate = false;
     }else{
        document.getElementById('start').value = "Stop";
      animProp.animate = true;
      var date = new Date();
      var time = date.getTime();
      canvasInit(time, animProp, health);
   }
});
  
 document.getElementById('reset').addEventListener('click', function(){
    var context = document.getElementById('canvas').getContext('2d');
    document.getElementById('start').value = "Start";
    animProp.animate = false;
    var canvas_width = context.canvas.width;
    var canvas_height = context.canvas.height;
    context.clearRect(0, 0, canvas_width, canvas_height);
    balloons = [];
    scr = 0;
    health = 5;
    document.getElementById('health').innerHTML = "Life: 5";
    document.getElementById('scr').innerHTML = "Score: 0";
    
   });
   
});

var canvasInit = function(lastTime, animProp, health){
   var ctx = document.getElementById('canvas').getContext('2d');
   var canvasWidth = ctx.canvas.width;
   var canvasHeight = ctx.canvas.height;
   var start = false;
   var randomBalloon = null;
   var spawnRate=1500;
   var spawnRateOfDescent=1;
   var animationID;
   var lastSpawn = -1;
   var healthDOM = document.getElementById('health');
   var scoreDOM = document.getElementById('scr');
   var mouseX = 0;
   var mouseY = 0;
   
   function Balloon(){
      this.render = function(balloon, x ,y){
         ctx.drawImage(balloon,x,y);
      }
   }
   
   function Pop(){
      this.render = function(x,y){
         ctx.drawImage(pop,x,y);
      }
      
      this.clear = function(x,y){
         ctx.clearRect(x,y,x+50,y+50);
      } 
   }
   
   function GameOverDisplay() {
      ctx.fillStyle = "rgba(168, 0, 0, 1)";
      ctx.font = "bold 50px Arial";
      ctx.textAlign = 'center';
      ctx.fillText("You LOST, leave :)", canvasWidth/2, canvasHeight/2);
   }
   
   var balon = new Balloon();
   var POP = new Pop();
   //random ballon generation , adding to object
   
   function addBalloon(){
      var x = ~~(Math.random() * (canvasWidth - 30)) + 10;
		var y = canvasHeight;
      var rand = Math.random();
      if(rand < 0.20){
         randomType="blue";
      }else if(rand >= 0.2 && rand < 0.4){
         randomType="green";
      }else if(rand >= 0.4 && rand < 0.6){
         randomType="yellow";
      }else if(rand >= 0.6 && rand < 0.8){
         if(Math.random() < 0.25){
            randomType="special";
         }else{
            randomType="red";  
         }
      }else{
         randomType="purple";
      }
		balloons.push({"x":x,"y":y,"type":randomType});
      
   }
   
   
    //animate function 
   var animate = function(){
      if (animProp.animate) {
      var time = Date.now();
      if(time > (lastSpawn + spawnRate)) {
        lastSpawn = time;
        addBalloon();
      }
         
      var date = new Date();
      var time1 = date.getTime();
      var timeDiff = time1 - lastTime;
      lastTime = time1;
      requestAnimationFrame(function(){
         animate();
      });
         
      for (var i = 0; i < balloons.length; i++) { 
         var object = balloons[i];
         
            ctx.clearRect(object.x,object.y,35,48);
             object.y -= spawnRateOfDescent;
             if(object.type === "blue"){
             balon.render(balloon_1,object.x,object.y);  
             }else if(object.type === "green"){
                balon.render(balloon_2,object.x,object.y );
             }else if(object.type === "purple"){
                  balon.render(balloon_6,object.x,object.y);
             }else if(object.type === "yellow"){
                balon.render(balloon_3,object.x,object.y);
             }else if(object.type === "special"){
                balon.render(balloon_4,object.x,object.y);
             }else if(object.type === "red"){
                balon.render(balloon_5,object.x,object.y);
             }
             if(object.y <= 0){
                ctx.clearRect(object.x,object.y,35,48);
                balloons.splice(i,1);
                health -= 1;
                scr -= 10;
                healthDOM.innerHTML ="Life: "+health;
                scoreDOM.innerHTML ="Score: "+scr ;
             }
          
         
         }
         
         if(health <= 0){
            GameOverDisplay();
         }
      }
   }
   
   
   if (animProp.animate) {
      animate();
   }
   
   
   /////////////////////////////////////////////////////
   /**Listeners**/
   //////////////////////////////////////////////////// 
   ctx.canvas.addEventListener('mousedown',function(event){
      mouseX = event.clientX - ctx.canvas.offsetLeft;
      mouseY = event.clientY  - ctx.canvas.offsetTop;
      for (var i = 0; i < balloons.length; i++){ 
      if((mouseY > balloons[i].y) && (mouseY < (balloons[i].y+48)) && (mouseX  > balloons[i].x) && (mouseX < (balloons[i].x+35))){
         ctx.clearRect(balloons[i].x,balloons[i].y,35,48);   
         POP.render(mouseX, mouseY);
            //POP.clear((balloons[i].x+35)/2,(balloons[i].y+48)/2);
            balloons.splice(i,1);
            scr++;
            scoreDOM.innerHTML ="Score: "+scr;
         }
      }
   }); 
   
};