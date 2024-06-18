window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script42 = function()
{
  // Create a script element for GSAP
var gsapScript = document.createElement('script');
gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js";
document.head.appendChild(gsapScript);

// Create a script element for CustomEase plugin
var customEaseScript = document.createElement('script');
customEaseScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/CustomEase.min.js";
document.head.appendChild(customEaseScript);

customEaseScript.onload = function() {

	// Initialize and use GSAP with CustomEase
	gsap.registerPlugin(CustomEase);

	// Define a custom ease
	CustomEase.create("customEase", "M0,0 C0.126,0.382 0.282,0.504 0.398,0.576 0.526,0.658 0.741,0.688 0.842,0.852 0.898,0.944 1,1 1,1");

	var oval = document.querySelector("[data-acc-text='oval']");
	gsap.to(oval, {
        ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.007,0.911 0.165,1.059 0.289,1.176 0.528,0.735 0.729,0.678 0.838,0.648 0.936,1 1,1 "),
		y: -100,                      // Move the element 100px to the right
        duration: 2                  // Duration of the animation in seconds
    });

	var Group1 = document.querySelector("[data-acc-text='audioBar']");

	var original_y = 478; 

	var new_y = gsap.getProperty(Group1, "y");
	console.log("New Y is:" + new_y);
	var factor = new_y/original_y;
	console.log("Factor is:" + factor);
	gsap.to(Group1, {
        ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.007,0.911 0.165,1.059 0.289,1.176 0.528,0.735 0.729,0.678 0.838,0.648 0.936,1 1,1 "),
		y: "-="+(150*factor),     
        duration: 2.5
    });

	gsap.to(Group1, {
		delay: 4.5,
		y: "+="+(200*factor)
 	});

};




}

window.Script43 = function()
{
  var Group1 = document.querySelectorAll("[data-acc-text='7309681.jpg']");

gsap.to(Group1, {
 	duration:3,
 	scale: 1,
 	ease: "bounce.out",
 	});
 	
 	
var Group1 = document.querySelectorAll("[data-acc-text='avatar3.jpg']");

gsap.to(Group1, {
 	duration:3,
 	scale: 1,
 	ease: "bounce.out",
 	});
 	 	

var Group1 = document.querySelectorAll("[data-acc-text='avatar2.jpg']");

gsap.to(Group1, {
 	duration:3,
 	scale: 1,
 	ease: "bounce.out",
 	});
 	
 	
}

window.Script44 = function()
{
  var Group1 = document.querySelectorAll("[data-acc-text='7309681.jpg']");

gsap.to(Group1, {
 	duration:3,
 	scale: 1,
 	ease: "bounce.out",
 	});
 	
 	
var Group1 = document.querySelectorAll("[data-acc-text='avatar3.jpg']");

gsap.to(Group1, {
 	duration:3,
 	scale: 1,
 	ease: "bounce.out",
 	});
 	 	

var Group1 = document.querySelectorAll("[data-acc-text='avatar2.jpg']");

gsap.to(Group1, {
 	duration:3,
 	scale: 1,
 	ease: "bounce.out",
 	});
 	
 	
}

window.Script45 = function()
{
  var Group1 = document.querySelectorAll("[data-acc-text='avatar2.jpg']");

gsap.to(Group1, {
 	duration:3,
 	scale: 1.1,
 	ease: "bounce.out",
 	});
}

window.Script46 = function()
{
  var Group1 = document.querySelectorAll("[data-acc-text='avatar2.jpg']");

gsap.to(Group1, {
 	duration:3,
 	scale: 1.1,
 	ease: "bounce.out",
 	});
}

window.Script47 = function()
{
  var Group1 = document.querySelectorAll("[data-acc-text='avatar3.jpg']");

gsap.to(Group1, {
 	duration:3,
 	scale: 1.1,
 	ease: "bounce.out",
 	});
}

window.Script48 = function()
{
  var Group1 = document.querySelectorAll("[data-acc-text='avatar3.jpg']");

gsap.to(Group1, {
 	duration:3,
 	scale: 1.1,
 	ease: "bounce.out",
 	});
}

window.Script49 = function()
{
  var Group1 = document.querySelectorAll("[data-acc-text='7309681.jpg']");

gsap.to(Group1, {
 	duration:3,
 	scale: 1.1,
 	ease: "bounce.out",
 	});
}

window.Script50 = function()
{
  var Group1 = document.querySelectorAll("[data-acc-text='7309681.jpg']");

gsap.to(Group1, {
 	duration:3,
 	scale: 1.1,
 	ease: "bounce.out",
 	});
}

window.Script51 = function()
{
  // This is to get the Bank Account figure from Storyline
var player = GetPlayer();
var bankAccount = player.GetVar("bankAccount");

// Here I hard code the Bank Account for debugging purpose
//var bankAccount = 2479;

console.log("Bank account is " + bankAccount);

// This logic here gets the thousand, hundred, ten and one values)
// This method is easier and better than the quotient/remainder method which may not work for numbers likf 3502.
bankAccountString = new String(bankAccount)
var thousand = bankAccountString[0];
var hundred = bankAccountString[1];
var ten = bankAccountString[2];
var one = bankAccountString[3];
console.log("The thousand, hundred, ten, one values: " + thousand + ", " + hundred + ", " + ten + ", " + one);

// THe following lines call the mapping function to get the delta position to move the 4 elements.
var mapped_thousand = mapping(Number(thousand));
var mapped_hundred = mapping(Number(hundred));
var mapped_ten  = mapping(Number(ten));
var mapped_one = mapping(Number(one));

console.log("The mapped thousand, hundred, ten, one values:" + mapped_thousand + "," + mapped_hundred + "," + mapped_ten + "," + mapped_one);


// Here is the code to get the factor.
// First, need to find the baseline number first. We use the One element.
// We run the following codes first, then go to console to record the number printed
// Then comment off the lines.
// NOTE -- the querySelectorAll seems to fail here. Can only use querySelector
//var Ones = document.querySelector("[data-acc-text='Ones']");
//var original_y = gsap.getProperty(Ones, "y");
//console.log("Original Y is:" + original_y);

// We have done the above and set the baseline y value as follows
// NOTE -- this number is applicable for the Preview version running on the laptop screen.
original_y = 326;

// Now we get the One element and then move it by the mapped amount multiplied by the factor.
var Ones = document.querySelector("[data-acc-text='Ones']");

// Calculate the factor value
var new_y = gsap.getProperty(Ones, "y");
console.log("New Y is:" + new_y);
var factor = new_y/original_y;
console.log("Factor is:" + factor);

console.log("Ones position:" + mapped_one*factor);

gsap.to(Ones, {
	y: "-="+(mapped_one*factor),
	duration:5,
	ease: "bounce.out",
	});
	
var Tens = document.querySelector("[data-acc-text='Tens']");
	
gsap.to(Tens, {
	y: "-="+(mapped_ten*factor),
	duration:6,
	delay: 3,
	ease: "bounce.out",
	});
	
var Hundreds = document.querySelector("[data-acc-text='Hundreds']");
	
gsap.to(Hundreds, {
	y: "-="+(mapped_hundred*factor),
	duration:7,
	delay: 3,
	ease: "bounce.out",
	});
	
var Thousands = document.querySelector("[data-acc-text='Thousands']");
	
gsap.to(Thousands, {
	y: "-="+(mapped_thousand*factor),
	duration:8,
	delay: 3,
	ease: "bounce.out",
	});
	

// The following is the mapping values 
// This table should work for all display screens.
function mapping(p1) {
    var p2 = 0;
    if (p1 == 0) {p2 = 0}
    if (p1 == 1) {p2 = 38} 
    if (p1 == 2) {p2 = 75} 
    if (p1 == 3) {p2 = 113}
    if (p1 == 4) {p2 = 150}
    if (p1 == 5) {p2 = 188}
    if (p1 == 6) {p2 = 227}
    if (p1 == 7) {p2 = 264}
    if (p1 == 8) {p2 = 302}
    if (p1 == 9) {p2 = 340}
    return p2;
    }

}

window.Script52 = function()
{
  
console.log("I AM HERE");

// This is to get the feedbackbar from Storyline
// NOTE -- can only use querySelector not querySelectorAll
var Group1 = document.querySelector("[data-acc-text='Group1']");

// Original value of Group1's X position based on laptop screen in Preview mode.
var original_Group1_x = -520; 

// Now get the new X position for the new screen -- whatever it is now playing on.
var new_Group1_x = gsap.getProperty(Group1, "x");
console.log("New X is:" + new_Group1_x);

// This will be the factor used to display the feedback correctly for all screen sizes.
var factor = new_Group1_x/original_Group1_x;
console.log("Factor is:" + factor);

// Display the feedback bar
gsap.to(Group1, {
 	x: "+="+(640*factor),
 	duration:3,
 	ease: "bounce.out",
 	});

// Get Lily from Storyline
var Lily = document.querySelector("[data-acc-text='Lily']");

// Original value of Lily's Y position based on laptop screen in Preview mode.
var original_Lily_y = 470; 

// Now get the new Y position for the new screen -- whatever it is now playing on.
var new_Lily_y = gsap.getProperty(Lily, "y");
console.log("New Y is:" + new_Lily_y);

// This will be the factor used to display Lily correctly for all screen sizes.
var factor = new_Lily_y/original_Lily_y;
console.log("Factor is:" + factor);

// Display Lily
gsap.to(Lily, {
	y: "-="+(150*factor),
	duration:2,
	delay: 2
	});

// Remove Lily
gsap.to(Lily, {
	y: "+="+(200*factor),
	duration:2,
	delay: 6
	});

// Remove the feedback bar
gsap.to(Group1, {
 	x: "-="+(1500*factor),
 	duration:1,
 	delay: 8
 	});
	
	
	
}

window.Script53 = function()
{
  console.log("I AM HERE");

// This is to get the feedbackbar from Storyline
// NOTE -- can only use querySelector not querySelectorAll
var Group1 = document.querySelector("[data-acc-text='Group1']");

// Original value of Group1's X position based on laptop screen in Preview mode.
var original_Group1_x = -520; 

// Now get the new X position for the new screen -- whatever it is now playing on.
var new_Group1_x = gsap.getProperty(Group1, "x");
console.log("New X is:" + new_Group1_x);

// This will be the factor used to display the feedback correctly for all screen sizes.
var factor = new_Group1_x/original_Group1_x;
console.log("Factor is:" + factor);

// Get Lily from Storyline
var Lily = document.querySelector("[data-acc-text='Lily']");

// Original value of Lily's Y position based on laptop screen in Preview mode.
var original_Lily_y = 470; 

// Now get the new Y position for the new screen -- whatever it is now playing on.
var new_Lily_y = gsap.getProperty(Lily, "y");
console.log("New Y is:" + new_Lily_y);

// This will be the factor used to display Lily correctly for all screen sizes.
var factor = new_Lily_y/original_Lily_y;
console.log("Factor is:" + factor);

// Remove Lily
gsap.to(Lily, {
	y: "+="+(200*factor),
	duration:2,
//	delay: 6
	});

// Remove the feedback bar
gsap.to(Group1, {
 	x: "-="+(1500*factor),
 	duration:1,
// 	delay: 8
 	});
	
	
	
	
	
	
}

window.Script54 = function()
{
  
var bankAccount = 3205;

var player = GetPlayer();
var bankAccount = player.GetVar("bankAccount");

console.log(bankAccount);

var thousandValue = 0;

var quotient = 0;
var remainder = 0;
var quotient1 = 0;
var remainder1 = 0;
var quotient2 = 0;
var remainder2 = 0;
var quotient3 = 0;
var remainder3 = 0;

quotient = Math.floor(bankAccount/1000);
remainder = bankAccount % 1000;

quotient1 = Math.floor(remainder/100);
remainder1 = remainder % 100;

quotient2 = Math.floor(remainder1/10);
remainder2 = remainder1 % 10;

quotient3 = Math.floor(remainder2/10);
remainder3 = remainder2 % 1;

console.log(quotient, quotient1, quotient2, quotient3);

thousandValue = mapping(quotient);
hundredValue = mapping(quotient1);
tenValue = mapping(quotient2);
oneValue = mapping(quotient3);

console.log(thousandValue, hundredValue, tenValue, oneValue);


BA = new String(bankAccount)
var th = BA[0]
var h = BA[1]
var t = BA[2]
var o = BA[3]

console.log(th,h,t,o)
var th1 = mapping(Number(th))
var h1 = mapping(Number(h))
var t1 = mapping(Number(t))
var o1 = mapping(Number(o))

//o1 = 5

console.log(th1,h1,t1,o1)


var Ones = document.querySelectorAll("[data-acc-text='Ones']");

gsap.to(Ones, {
//	y: "-="+oneValue,
	y: "-="+o1,
	duration:5,
	ease: "bounce.out",
	});
	
var Tens = document.querySelectorAll("[data-acc-text='Tens']");
	
gsap.to(Tens, {
	y: "-="+tenValue,
	duration:6,
	delay: 3,
	ease: "bounce.out",
	});
	
var Hundreds = document.querySelectorAll("[data-acc-text='Hundreds']");
	
gsap.to(Hundreds, {
	y: "-="+hundredValue,
	duration:7,
	delay: 3,
	ease: "bounce.out",
	});
	
var Thousands = document.querySelectorAll("[data-acc-text='Thousands']");
	
gsap.to(Thousands, {
	y: "-="+thousandValue,
	duration:8,
	delay: 3,
	ease: "bounce.out",
	});
	
	
function mapping(p1) {
	var p2 = 0;
	if (p1 == 0) {p2 = 0}
	if (p1 == 1) {p2 = 72}
	if (p1 == 2) {p2 = 142}
	if (p1 == 3) {p2 = 214}
	if (p1 == 4) {p2 = 284}
	if (p1 == 5) {p2 = 356}
	if (p1 == 6) {p2 = 428}
	if (p1 == 7) {p2 = 500}
	if (p1 == 8) {p2 = 570}
	if (p1 == 9) {p2 = 642}
	return p2;
	}

}

window.Script55 = function()
{
  
// Tried using the CustomEase but seems like not so simple. Need to link to CDN and register the plugin.
// The following didn't work for me.

// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/CustomEase.min.js"></script>

// gsap.registerPlugin(CustomEase);

// 	gsap.to(Group1, {
// 		duration:3,
// 		ease: CustomEase.create("custom", "M0,0,C0.14,0,0.242,0.438,0.272,0.561,0.313,0.728,0.354,0.963,0.362,1,0.37,0.985,0.414,0.873,0.455,0.811,0.51,0.726,0.573,0.753,0.586,0.762,0.662,0.812,0.719,0.981,0.726,0.998,0.788,0.914,0.84,0.936,0.859,0.95,0.878,0.964,0.897,0.985,0.911,0.998,0.922,0.994,0.939,0.984,0.954,0.984,0.969,0.984,1,1,1,1"),
// 		x: 240
// 	});

// Available only for members
// gsap.to(Group1, {
// 	duration:3,
// 	ease: CustomBounce.create("myBounce", {
// 	strength:0.7,
// 	endAtStart:false,
// 	squash:1,
// 	squashID: "myBounce-squash"
// 	}),
// 	x: 240
// 	});

var Group1 = document.querySelectorAll("[data-acc-text='Group1']");

gsap.to(Group1, {
 	x: 150,
 	duration:3,
 	ease: "bounce.out",
 	});
	
var Lily = document.querySelectorAll("[data-acc-text='Lily']");
	
gsap.to(Lily, {
	y: "-=150",
	duration:2,
	delay: 2
	});

gsap.to(Lily, {
	y: "+=200",
	duration:2,
	delay: 6
	});
	
// gsap.to(Lily, {
// 	y: 650,
// 	duration:3,
// 	delay: 4
// 	});
	
// gsap.to(Lily, {
// 	y: 1050,
// 	duration:2,
// 	delay: 8
// 	});

gsap.to(Group1, {
 	x: -1140,
 	duration:1,
 	delay: 8
 	});
	

	
	
	
}

window.Script56 = function()
{
  
console.log("I AM HERE");

// This is to get the feedbackbar from Storyline
// NOTE -- can only use querySelector not querySelectorAll
var Group1 = document.querySelector("[data-acc-text='Group1']");

// Original value of Group1's X position based on laptop screen in Preview mode.
var original_Group1_x = -520; 

// Now get the new X position for the new screen -- whatever it is now playing on.
var new_Group1_x = gsap.getProperty(Group1, "x");
console.log("New X is:" + new_Group1_x);

// This will be the factor used to display the feedback correctly for all screen sizes.
var factor = new_Group1_x/original_Group1_x;
console.log("Factor is:" + factor);

// Display the feedback bar
gsap.to(Group1, {
 	x: "+="+(640*factor),
 	duration:3,
 	ease: "bounce.out",
 	});

// Get Lily from Storyline
var Lily = document.querySelector("[data-acc-text='Lily']");

// Original value of Lily's Y position based on laptop screen in Preview mode.
var original_Lily_y = 470; 

// Now get the new Y position for the new screen -- whatever it is now playing on.
var new_Lily_y = gsap.getProperty(Lily, "y");
console.log("New Y is:" + new_Lily_y);

// This will be the factor used to display Lily correctly for all screen sizes.
var factor = new_Lily_y/original_Lily_y;
console.log("Factor is:" + factor);

// Display Lily
gsap.to(Lily, {
	y: "-="+(150*factor),
	duration:2,
	delay: 2
	});

// Remove Lily
gsap.to(Lily, {
	y: "+="+(200*factor),
	duration:2,
	delay: 6
	});

// Remove the feedback bar
gsap.to(Group1, {
 	x: "-="+(1500*factor),
 	duration:1,
 	delay: 8
 	});
	
	
	
}

window.Script57 = function()
{
  console.log("I AM HERE");

// This is to get the feedbackbar from Storyline
// NOTE -- can only use querySelector not querySelectorAll
var Group1 = document.querySelector("[data-acc-text='Group1']");

// Original value of Group1's X position based on laptop screen in Preview mode.
var original_Group1_x = -520; 

// Now get the new X position for the new screen -- whatever it is now playing on.
var new_Group1_x = gsap.getProperty(Group1, "x");
console.log("New X is:" + new_Group1_x);

// This will be the factor used to display the feedback correctly for all screen sizes.
var factor = new_Group1_x/original_Group1_x;
console.log("Factor is:" + factor);

// Get Lily from Storyline
var Lily = document.querySelector("[data-acc-text='Lily']");

// Original value of Lily's Y position based on laptop screen in Preview mode.
var original_Lily_y = 470; 

// Now get the new Y position for the new screen -- whatever it is now playing on.
var new_Lily_y = gsap.getProperty(Lily, "y");
console.log("New Y is:" + new_Lily_y);

// This will be the factor used to display Lily correctly for all screen sizes.
var factor = new_Lily_y/original_Lily_y;
console.log("Factor is:" + factor);

// Remove Lily
gsap.to(Lily, {
	y: "+="+(200*factor),
	duration:2,
//	delay: 6
	});

// Remove the feedback bar
gsap.to(Group1, {
 	x: "-="+(1500*factor),
 	duration:1,
// 	delay: 8
 	});
	
	
	
	
	
	
	
	
}

window.Script58 = function()
{
  console.log("New Y is:");
console.log("HERE");

// Create a script element for confetti
// These lines don't work. Don't know why.
// To make this JS script run, need to manually add the following line
// <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>
// into the story.html after publishing.
//var confettiScript = document.createElement('script');
//confettiScript.setAttribute("src","https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js");
//document.head.appendChild(confettiScript);


// Just trying out these 3 lines. Don't work also.
//const MyPromise = require('some-promise-lib');
//const confetti = require('canvas-confetti');
//confetti.Promise = MyPromise;


// This one is for random confetti. It works.
/*
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

confetti({
  angle: randomInRange(55, 125),
  spread: randomInRange(50, 70),
  particleCount: randomInRange(50, 100),
  origin: { y: 0.6 }
});
*/

// This one is for the more realistic version
/*
var count = 200;
var defaults = {
  origin: { y: 0.7 }
};

function fire(particleRatio, opts) {
  confetti({
    ...defaults,
    ...opts,
    particleCount: Math.floor(count * particleRatio)
  });
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});
fire(0.2, {
  spread: 60,
});
fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8
});
fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2
});
fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
*/

// This is for fireworks.
// I change duration to 10 instead of 15
/* 
var duration = 10 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

var interval = setInterval(function() {
  var timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  var particleCount = 50 * (timeLeft / duration);
  // since particles fall down, start a bit higher than random
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
}, 250);
*/

// This one is for Snow, I am using this when there is a loss, not a profit
// I changed duration to 10 instead of 15
var duration = 10 * 1000;
var animationEnd = Date.now() + duration;
var skew = 1;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

(function frame() {
  var timeLeft = animationEnd - Date.now();
  var ticks = Math.max(200, 500 * (timeLeft / duration));
  skew = Math.max(0.8, skew - 0.001);

  confetti({
    particleCount: 1,
    startVelocity: 0,
    ticks: ticks,
    origin: {
      x: Math.random(),
      // since particles fall down, skew start toward the top
      y: (Math.random() * skew) - 0.2
    },
    colors: ['#ffffff'],
    shapes: ['circle'],
    gravity: randomInRange(0.4, 0.6),
    scalar: randomInRange(0.4, 1),
    drift: randomInRange(-0.4, 0.4)
  });

  if (timeLeft > 0) {
    requestAnimationFrame(frame);
  }
}());


console.log("HERE3");

}

window.Script59 = function()
{
  console.log("New Y is:");
console.log("HERE");

// Create a script element for confetti
// These lines don't work. Don't know why.
// To make this JS script run, need to manually add the following line
// <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>
// into the story.html after publishing.
//var confettiScript = document.createElement('script');
//confettiScript.setAttribute("src","https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js");
//document.head.appendChild(confettiScript);


// Just trying out these 3 lines. Don't work also.
//const MyPromise = require('some-promise-lib');
//const confetti = require('canvas-confetti');
//confetti.Promise = MyPromise;


// This one is for random confetti. It works.
/*
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

confetti({
  angle: randomInRange(55, 125),
  spread: randomInRange(50, 70),
  particleCount: randomInRange(50, 100),
  origin: { y: 0.6 }
});
*/

// This one is for the more realistic version
/*
var count = 200;
var defaults = {
  origin: { y: 0.7 }
};

function fire(particleRatio, opts) {
  confetti({
    ...defaults,
    ...opts,
    particleCount: Math.floor(count * particleRatio)
  });
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});
fire(0.2, {
  spread: 60,
});
fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8
});
fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2
});
fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
*/

// This is for fireworks.
// I change duration to 10 instead of 15
 
var duration = 10 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

var interval = setInterval(function() {
  var timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  var particleCount = 50 * (timeLeft / duration);
  // since particles fall down, start a bit higher than random
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
}, 250);


// This one is for Snow, I am using this when there is a loss, not a profit
// I changed duration to 10 instead of 15
/*
var duration = 15 * 1000;
var animationEnd = Date.now() + duration;
var skew = 1;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

(function frame() {
  var timeLeft = animationEnd - Date.now();
  var ticks = Math.max(200, 500 * (timeLeft / duration));
  skew = Math.max(0.8, skew - 0.001);

  confetti({
    particleCount: 1,
    startVelocity: 0,
    ticks: ticks,
    origin: {
      x: Math.random(),
      // since particles fall down, skew start toward the top
      y: (Math.random() * skew) - 0.2
    },
    colors: ['#ffffff'],
    shapes: ['circle'],
    gravity: randomInRange(0.4, 0.6),
    scalar: randomInRange(0.4, 1),
    drift: randomInRange(-0.4, 0.4)
  });

  if (timeLeft > 0) {
    requestAnimationFrame(frame);
  }
}());
*/

console.log("HERE3");

}

window.Script60 = function()
{
  console.log("New Y is:");
console.log("HERE");

// Create a script element for confetti
// These lines don't work. Don't know why.
// To make this JS script run, need to manually add the following line
// <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>
// into the story.html after publishing.
//var confettiScript = document.createElement('script');
//confettiScript.setAttribute("src","https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js");
//document.head.appendChild(confettiScript);


// Just trying out these 3 lines. Don't work also.
//const MyPromise = require('some-promise-lib');
//const confetti = require('canvas-confetti');
//confetti.Promise = MyPromise;


// This one is for random confetti. It works.
/*
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

confetti({
  angle: randomInRange(55, 125),
  spread: randomInRange(50, 70),
  particleCount: randomInRange(50, 100),
  origin: { y: 0.6 }
});
*/

// This one is for the more realistic version
/*
var count = 200;
var defaults = {
  origin: { y: 0.7 }
};

function fire(particleRatio, opts) {
  confetti({
    ...defaults,
    ...opts,
    particleCount: Math.floor(count * particleRatio)
  });
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});
fire(0.2, {
  spread: 60,
});
fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8
});
fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2
});
fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
*/

// This is for fireworks.
// I change duration to 10 instead of 15
/* 
var duration = 10 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

var interval = setInterval(function() {
  var timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  var particleCount = 50 * (timeLeft / duration);
  // since particles fall down, start a bit higher than random
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
}, 250);
*/

// This one is for Snow, I am using this when there is a loss, not a profit
// I changed duration to 10 instead of 15
var duration = 10 * 1000;
var animationEnd = Date.now() + duration;
var skew = 1;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

(function frame() {
  var timeLeft = animationEnd - Date.now();
  var ticks = Math.max(200, 500 * (timeLeft / duration));
  skew = Math.max(0.8, skew - 0.001);

  confetti({
    particleCount: 1,
    startVelocity: 0,
    ticks: ticks,
    origin: {
      x: Math.random(),
      // since particles fall down, skew start toward the top
      y: (Math.random() * skew) - 0.2
    },
    colors: ['#ffffff'],
    shapes: ['circle'],
    gravity: randomInRange(0.4, 0.6),
    scalar: randomInRange(0.4, 1),
    drift: randomInRange(-0.4, 0.4)
  });

  if (timeLeft > 0) {
    requestAnimationFrame(frame);
  }
}());


console.log("HERE3");

}

window.Script61 = function()
{
  console.log("New Y is:");
console.log("HERE");

// Create a script element for confetti
// These lines don't work. Don't know why.
// To make this JS script run, need to manually add the following line
// <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>
// into the story.html after publishing.
//var confettiScript = document.createElement('script');
//confettiScript.setAttribute("src","https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js");
//document.head.appendChild(confettiScript);


// Just trying out these 3 lines. Don't work also.
//const MyPromise = require('some-promise-lib');
//const confetti = require('canvas-confetti');
//confetti.Promise = MyPromise;


// This one is for random confetti. It works.
/*
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

confetti({
  angle: randomInRange(55, 125),
  spread: randomInRange(50, 70),
  particleCount: randomInRange(50, 100),
  origin: { y: 0.6 }
});
*/

// This one is for the more realistic version
/*
var count = 200;
var defaults = {
  origin: { y: 0.7 }
};

function fire(particleRatio, opts) {
  confetti({
    ...defaults,
    ...opts,
    particleCount: Math.floor(count * particleRatio)
  });
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});
fire(0.2, {
  spread: 60,
});
fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8
});
fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2
});
fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
*/

// This is for fireworks.
// I change duration to 10 instead of 15
 
var duration = 10 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

var interval = setInterval(function() {
  var timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  var particleCount = 50 * (timeLeft / duration);
  // since particles fall down, start a bit higher than random
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
}, 250);


// This one is for Snow, I am using this when there is a loss, not a profit
// I changed duration to 10 instead of 15
/*
var duration = 15 * 1000;
var animationEnd = Date.now() + duration;
var skew = 1;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

(function frame() {
  var timeLeft = animationEnd - Date.now();
  var ticks = Math.max(200, 500 * (timeLeft / duration));
  skew = Math.max(0.8, skew - 0.001);

  confetti({
    particleCount: 1,
    startVelocity: 0,
    ticks: ticks,
    origin: {
      x: Math.random(),
      // since particles fall down, skew start toward the top
      y: (Math.random() * skew) - 0.2
    },
    colors: ['#ffffff'],
    shapes: ['circle'],
    gravity: randomInRange(0.4, 0.6),
    scalar: randomInRange(0.4, 1),
    drift: randomInRange(-0.4, 0.4)
  });

  if (timeLeft > 0) {
    requestAnimationFrame(frame);
  }
}());
*/

console.log("HERE3");

}

window.Script62 = function()
{
  
console.log("I AM HERE");

// This is to get the feedbackbar from Storyline
// NOTE -- can only use querySelector not querySelectorAll
var Group1 = document.querySelector("[data-acc-text='Group1']");

// Original value of Group1's X position based on laptop screen in Preview mode.
var original_Group1_x = -520; 

// Now get the new X position for the new screen -- whatever it is now playing on.
var new_Group1_x = gsap.getProperty(Group1, "x");
console.log("New X is:" + new_Group1_x);

// This will be the factor used to display the feedback correctly for all screen sizes.
var factor = new_Group1_x/original_Group1_x;
console.log("Factor is:" + factor);

// Display the feedback bar
gsap.to(Group1, {
 	x: "+="+(640*factor),
 	duration:3,
 	ease: "bounce.out",
 	});

// Get Lily from Storyline
var Lily = document.querySelector("[data-acc-text='Lily']");

// Original value of Lily's Y position based on laptop screen in Preview mode.
var original_Lily_y = 470; 

// Now get the new Y position for the new screen -- whatever it is now playing on.
var new_Lily_y = gsap.getProperty(Lily, "y");
console.log("New Y is:" + new_Lily_y);

// This will be the factor used to display Lily correctly for all screen sizes.
var factor = new_Lily_y/original_Lily_y;
console.log("Factor is:" + factor);

// Display Lily
gsap.to(Lily, {
	y: "-="+(150*factor),
	duration:2,
	delay: 2
	});

// Remove Lily
gsap.to(Lily, {
	y: "+="+(200*factor),
	duration:2,
	delay: 6
	});

// Remove the feedback bar
gsap.to(Group1, {
 	x: "-="+(1500*factor),
 	duration:1,
 	delay: 8
 	});
	
	
	
}

window.Script63 = function()
{
  console.log("I AM HERE");

// This is to get the feedbackbar from Storyline
// NOTE -- can only use querySelector not querySelectorAll
var Group1 = document.querySelector("[data-acc-text='Group1']");

// Original value of Group1's X position based on laptop screen in Preview mode.
var original_Group1_x = -520; 

// Now get the new X position for the new screen -- whatever it is now playing on.
var new_Group1_x = gsap.getProperty(Group1, "x");
console.log("New X is:" + new_Group1_x);

// This will be the factor used to display the feedback correctly for all screen sizes.
var factor = new_Group1_x/original_Group1_x;
console.log("Factor is:" + factor);

// Get Lily from Storyline
var Lily = document.querySelector("[data-acc-text='Lily']");

// Original value of Lily's Y position based on laptop screen in Preview mode.
var original_Lily_y = 470; 

// Now get the new Y position for the new screen -- whatever it is now playing on.
var new_Lily_y = gsap.getProperty(Lily, "y");
console.log("New Y is:" + new_Lily_y);

// This will be the factor used to display Lily correctly for all screen sizes.
var factor = new_Lily_y/original_Lily_y;
console.log("Factor is:" + factor);

// Remove Lily
gsap.to(Lily, {
	y: "+="+(200*factor),
	duration:2,
//	delay: 6
	});

// Remove the feedback bar
gsap.to(Group1, {
 	x: "-="+(1500*factor),
 	duration:1,
// 	delay: 8
 	});
	
	
	
	
	
	
	
	
}

window.Script64 = function()
{
  var front = document.querySelector("[data-acc-text='front1A']");
var back = document.querySelector("[data-acc-text='back1A']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script65 = function()
{
  var front = document.querySelector("[data-acc-text='front1B']");
var back = document.querySelector("[data-acc-text='back1B']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script66 = function()
{
  var front = document.querySelector("[data-acc-text='front2A']");
var back = document.querySelector("[data-acc-text='back2A']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script67 = function()
{
  var front = document.querySelector("[data-acc-text='front2B']");
var back = document.querySelector("[data-acc-text='back2B']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script68 = function()
{
  var front = document.querySelector("[data-acc-text='front3A']");
var back = document.querySelector("[data-acc-text='back3A']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script69 = function()
{
  var front = document.querySelector("[data-acc-text='front3B']");
var back = document.querySelector("[data-acc-text='back3B']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script70 = function()
{
  var front = document.querySelector("[data-acc-text='front4A']");
var back = document.querySelector("[data-acc-text='back4A']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script71 = function()
{
  var front = document.querySelector("[data-acc-text='front4B']");
var back = document.querySelector("[data-acc-text='back4B']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script72 = function()
{
  var front = document.querySelector("[data-acc-text='front5A']");
var back = document.querySelector("[data-acc-text='back5A']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script73 = function()
{
  var front = document.querySelector("[data-acc-text='front5B']");
var back = document.querySelector("[data-acc-text='back5B']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script74 = function()
{
  var front = document.querySelector("[data-acc-text='front6A']");
var back = document.querySelector("[data-acc-text='back6A']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script75 = function()
{
  var front = document.querySelector("[data-acc-text='front6B']");
var back = document.querySelector("[data-acc-text='back6B']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script76 = function()
{
  var front = document.querySelector("[data-acc-text='front1A']");
var back = document.querySelector("[data-acc-text='back1A']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script77 = function()
{
  var front = document.querySelector("[data-acc-text='front1B']");
var back = document.querySelector("[data-acc-text='back1B']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script78 = function()
{
  var front = document.querySelector("[data-acc-text='front2A']");
var back = document.querySelector("[data-acc-text='back2A']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script79 = function()
{
  var front = document.querySelector("[data-acc-text='front2B']");
var back = document.querySelector("[data-acc-text='back2B']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script80 = function()
{
  var front = document.querySelector("[data-acc-text='front3A']");
var back = document.querySelector("[data-acc-text='back3A']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script81 = function()
{
  var front = document.querySelector("[data-acc-text='front3B']");
var back = document.querySelector("[data-acc-text='back3B']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script82 = function()
{
  var front = document.querySelector("[data-acc-text='front4A']");
var back = document.querySelector("[data-acc-text='back4A']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script83 = function()
{
  var front = document.querySelector("[data-acc-text='front4B']");
var back = document.querySelector("[data-acc-text='back4B']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script84 = function()
{
  var front = document.querySelector("[data-acc-text='front5A']");
var back = document.querySelector("[data-acc-text='back5A']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script85 = function()
{
  var front = document.querySelector("[data-acc-text='front5B']");
var back = document.querySelector("[data-acc-text='back5B']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script86 = function()
{
  var front = document.querySelector("[data-acc-text='front6A']");
var back = document.querySelector("[data-acc-text='back6A']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script87 = function()
{
  var front = document.querySelector("[data-acc-text='front6B']");
var back = document.querySelector("[data-acc-text='back6B']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script88 = function()
{
  var front = document.querySelector("[data-acc-text='front1A']");
var back = document.querySelector("[data-acc-text='back1A']");

let front_timeline = gsap.timeline();

front_timeline.set(back,{rotateY:-90});
front_timeline.to(front,{rotateY:-90, duration:0.5});
front_timeline.to(back,{rotateY:0, duration:0.5});

}

window.Script89 = function()
{
  var front = document.querySelector("[data-acc-text='front1B']");
var back = document.querySelector("[data-acc-text='back1B']");

let front_timeline = gsap.timeline();

front_timeline.set(back,{rotateY:-90});
front_timeline.to(front,{rotateY:-90, duration:0.5});
front_timeline.to(back,{rotateY:0, duration:0.5});

}

window.Script90 = function()
{
  var front = document.querySelector("[data-acc-text='front2A']");
var back = document.querySelector("[data-acc-text='back2A']");

let front_timeline = gsap.timeline();

front_timeline.set(back,{rotateY:-90});
front_timeline.to(front,{rotateY:-90, duration:0.5});
front_timeline.to(back,{rotateY:0, duration:0.5});

}

window.Script91 = function()
{
  var front = document.querySelector("[data-acc-text='front2B']");
var back = document.querySelector("[data-acc-text='back2B']");

let front_timeline = gsap.timeline();

front_timeline.set(back,{rotateY:-90});
front_timeline.to(front,{rotateY:-90, duration:0.5});
front_timeline.to(back,{rotateY:0, duration:0.5});

}

window.Script92 = function()
{
  var front = document.querySelector("[data-acc-text='front3A']");
var back = document.querySelector("[data-acc-text='back3A']");

let front_timeline = gsap.timeline();

front_timeline.set(back,{rotateY:-90});
front_timeline.to(front,{rotateY:-90, duration:0.5});
front_timeline.to(back,{rotateY:0, duration:0.5});
}

window.Script93 = function()
{
  var front = document.querySelector("[data-acc-text='front3B']");
var back = document.querySelector("[data-acc-text='back3B']");

let front_timeline = gsap.timeline();

front_timeline.set(back,{rotateY:-90});
front_timeline.to(front,{rotateY:-90, duration:0.5});
front_timeline.to(back,{rotateY:0, duration:0.5});
}

window.Script94 = function()
{
  var front = document.querySelector("[data-acc-text='front4B']");
var back = document.querySelector("[data-acc-text='back4B']");

let front_timeline = gsap.timeline();

front_timeline.set(back,{rotateY:-90});
front_timeline.to(front,{rotateY:-90, duration:0.5});
front_timeline.to(back,{rotateY:0, duration:0.5});
}

window.Script95 = function()
{
  var front = document.querySelector("[data-acc-text='front4A']");
var back = document.querySelector("[data-acc-text='back4A']");

let front_timeline = gsap.timeline();

front_timeline.set(back,{rotateY:-90});
front_timeline.to(front,{rotateY:-90, duration:0.5});
front_timeline.to(back,{rotateY:0, duration:0.5});
}

window.Script96 = function()
{
  var front = document.querySelector("[data-acc-text='front5A']");
var back = document.querySelector("[data-acc-text='back5A']");

let front_timeline = gsap.timeline();

front_timeline.set(back,{rotateY:-90});
front_timeline.to(front,{rotateY:-90, duration:0.5});
front_timeline.to(back,{rotateY:0, duration:0.5});
}

window.Script97 = function()
{
  var front = document.querySelector("[data-acc-text='front5B']");
var back = document.querySelector("[data-acc-text='back5B']");

let front_timeline = gsap.timeline();

front_timeline.set(back,{rotateY:-90});
front_timeline.to(front,{rotateY:-90, duration:0.5});
front_timeline.to(back,{rotateY:0, duration:0.5});
}

window.Script98 = function()
{
  var front = document.querySelector("[data-acc-text='front6B']");
var back = document.querySelector("[data-acc-text='back6B']");

let front_timeline = gsap.timeline();

front_timeline.set(back,{rotateY:-90});
front_timeline.to(front,{rotateY:-90, duration:0.5});
front_timeline.to(back,{rotateY:0, duration:0.5});
}

window.Script99 = function()
{
  var front = document.querySelector("[data-acc-text='front6A']");
var back = document.querySelector("[data-acc-text='back6A']");

let front_timeline = gsap.timeline();

front_timeline.set(back,{rotateY:-90});
front_timeline.to(front,{rotateY:-90, duration:0.5});
front_timeline.to(back,{rotateY:0, duration:0.5});
}

window.Script100 = function()
{
  
console.log("I AM HERE");

// This is to get the feedbackbar from Storyline
// NOTE -- can only use querySelector not querySelectorAll
var Group1 = document.querySelector("[data-acc-text='Group1']");

// Original value of Group1's X position based on laptop screen in Preview mode.
var original_Group1_x = -520; 

// Now get the new X position for the new screen -- whatever it is now playing on.
var new_Group1_x = gsap.getProperty(Group1, "x");
console.log("New X is:" + new_Group1_x);

// This will be the factor used to display the feedback correctly for all screen sizes.
var factor = new_Group1_x/original_Group1_x;
console.log("Factor is:" + factor);

// Display the feedback bar
gsap.to(Group1, {
 	x: "+="+(640*factor),
 	duration:3,
 	ease: "bounce.out",
 	});

// Get Lily from Storyline
var Lily = document.querySelector("[data-acc-text='Lily']");

// Original value of Lily's Y position based on laptop screen in Preview mode.
var original_Lily_y = 470; 

// Now get the new Y position for the new screen -- whatever it is now playing on.
var new_Lily_y = gsap.getProperty(Lily, "y");
console.log("New Y is:" + new_Lily_y);

// This will be the factor used to display Lily correctly for all screen sizes.
var factor = new_Lily_y/original_Lily_y;
console.log("Factor is:" + factor);

// Display Lily
gsap.to(Lily, {
	y: "-="+(150*factor),
	duration:2,
	delay: 2
	});

// Remove Lily
gsap.to(Lily, {
	y: "+="+(200*factor),
	duration:2,
	delay: 6
	});

// Remove the feedback bar
gsap.to(Group1, {
 	x: "-="+(1500*factor),
 	duration:1,
 	delay: 8
 	});
	
	
	
}

window.Script101 = function()
{
  console.log("I AM HERE");

// This is to get the feedbackbar from Storyline
// NOTE -- can only use querySelector not querySelectorAll
var Group1 = document.querySelector("[data-acc-text='Group1']");

// Original value of Group1's X position based on laptop screen in Preview mode.
var original_Group1_x = -520; 

// Now get the new X position for the new screen -- whatever it is now playing on.
var new_Group1_x = gsap.getProperty(Group1, "x");
console.log("New X is:" + new_Group1_x);

// This will be the factor used to display the feedback correctly for all screen sizes.
var factor = new_Group1_x/original_Group1_x;
console.log("Factor is:" + factor);

// Get Lily from Storyline
var Lily = document.querySelector("[data-acc-text='Lily']");

// Original value of Lily's Y position based on laptop screen in Preview mode.
var original_Lily_y = 470; 

// Now get the new Y position for the new screen -- whatever it is now playing on.
var new_Lily_y = gsap.getProperty(Lily, "y");
console.log("New Y is:" + new_Lily_y);

// This will be the factor used to display Lily correctly for all screen sizes.
var factor = new_Lily_y/original_Lily_y;
console.log("Factor is:" + factor);

// Remove Lily
gsap.to(Lily, {
	y: "+="+(200*factor),
	duration:2,
//	delay: 6
	});

// Remove the feedback bar
gsap.to(Group1, {
 	x: "-="+(1500*factor),
 	duration:1,
// 	delay: 8
 	});
	
	
	
	
	
	
	
}

};
