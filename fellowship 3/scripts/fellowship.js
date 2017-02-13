console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;

var makeMiddleEarth = function () {
    // create a section tag with an id of `middle-earth`
    var middleEarth = document.createElement('section');
    for(var i = 0; i < lands.length; i++) {
      // add each land as an `article` tag
      var land = document.createElement('article');
      // inside each `article` tag include an `h1` with the name of the land
      land.innerHTML = '<h1>' + lands[i] + '</h1>';
      middleEarth.appendChild(land);
    }
    // append `middle-earth` to your document `body`
    body.appendChild(middleEarth);
}
makeMiddleEarth();

var theShire = body.getElementsByTagName('article')[0];
var Rivendell = body.getElementsByTagName('article')[1];
var Mordor = body.getElementsByTagName('article')[2];


var makeHobbits = function () {
  // display an `unordered` list of hobbits in the shire
  var hobbitList = document.createElement('ul');
  for(var i = 0; i < hobbits.length; i++) {
  // give each hobbit a class of `hobbit`
    var hobbit = document.createElement('li');
    hobbit.className = 'hobbit';
    hobbit.innerText = hobbits[i];
    hobbitList.appendChild(hobbit);
  }
  theShire.appendChild(hobbitList);
}
makeHobbits();

var frodo = body.getElementsByTagName('li')[0];
var keepItSecretKeepItSafe = function () {
  // create a div with an id of `'the-ring'`
  var theRing = document.createElement('div');
  theRing.setAttribute('id', 'the-ring');
  // give the div a class of `'magic-imbued-jewelry'`
  theRing.setAttribute('class', 'magic-imbued-jewelry');
  // add the ring as a child of `Frodo`
  frodo.appendChild(theRing);
}
keepItSecretKeepItSafe();

var makeBuddies = function () {
  // create an `aside` tag
  var aside = document.createElement('aside');
  var buddyList = document.createElement('ul');
  for(var i = 0; i < buddies.length; i++) {
    // attach an `unordered list` of the `'buddies'` in the aside
    var buddy = document.createElement('li');
    buddy.textContent = buddies[i];
    buddyList.appendChild(buddy);
  }
  // insert your aside as a child element of `rivendell`
  aside.appendChild(buddyList);
  Rivendell.appendChild(aside);
}
makeBuddies();

var strider = Rivendell.getElementsByTagName('li')[3];

var beautifulStranger = function () {
  // change the `'Strider'` text to `'Aragorn'`
  strider.textContent = 'Aragon';
}
beautifulStranger();

var hobbits = theShire.getElementsByTagName('ul');
function leaveTheShire() {
  // assemble the `hobbits` and move them to `rivendell`
  Rivendell.appendChild(hobbits[0]);
}
leaveTheShire();

var fellowshipMembers = Rivendell.querySelectorAll('li');
// var fellowshipMembers = Rivendell.getElementsByTagName('li');
// unsure why above only grabs every other name from buddy & hobbit.
//somehow stumbled upon the query selector while googling.

var forgeTheFellowShip = function () {
  // create a new div called `'the-fellowship'` within `rivendell`
  var theFellowship = document.createElement('div');
  theFellowship.setAttribute('id', 'the-fellowship');
  for(var i = 0; i < fellowshipMembers.length; i++) {
    theFellowship.appendChild(fellowshipMembers[i]);
   // after each character is added make an alert that they // have joined your party
    // alert(fellowshipMembers[i].textContent + ' has joined the fellowship!');
  }
  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  Rivendell.appendChild(theFellowship);
}
forgeTheFellowShip();

var gandalf = fellowshipMembers[0];

var theBalrog = function () {
  // change the `'Gandalf'` text to `'Gandalf the White'`
  gandalf.textContent = 'Gandalf the White';
  // apply the following style to the element, make the // background 
  //'white', add a grey border
  gandalf.style.border = '2px solid grey';
  gandalf.style.backgroundColor = 'white';
}
theBalrog();

var boromir = fellowshipMembers[4];
var hornOfGondor = function () {
	 // pop up an alert that the horn of gondor has been blown
  // alert('the horn of gondor has blown');
  boromir.style.textDecoration = 'line-through';
  boromir.parentNode.removeChild(boromir)
 // Boromir's been killed by the Uruk-hai!
 // Remove `Boromir` from the Fellowship
}
hornOfGondor();

var sam = fellowshipMembers[6];
var itsDangerousToGoAlone = function () {
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  Mordor.appendChild(frodo);
  Mordor.appendChild(sam);
    // add a div with an id of `'mount-doom'` to `Mordor`
  var mountDoom = document.createElement('div');
  mountDoom.setAttribute('id', 'mount-doom');
  Mordor.appendChild(mountDoom);
}
itsDangerousToGoAlone();

var gollum, theRing;
var weWantsIt = function () {
  // Create a div with an id of `'gollum'` and add it to Mordor
  gollum = document.createElement('div');
  gollum.setAttribute('id', 'gollum');
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  theRing = frodo.getElementsByTagName('div')[0];
  gollum.appendChild(theRing);
  // Move Gollum into Mount Doom
  var mountDoom = Mordor.getElementsByTagName('div')[0];
  mountDoom.appendChild(gollum);
}
weWantsIt();

var merry = fellowshipMembers[7];
var pippin = fellowshipMembers[8];
var thereAndBackAgain = function () {
	  // remove `Gollum` and `the Ring` from the document
  gollum.parentElement.removeChild(gollum);
    // Move all the `hobbits` back to `the shire`
theShire.appendChild(frodo);
theShire.appendChild(sam);
theShire.appendChild(merry);
theShire.appendChild(pippin);
 }
thereAndBackAgain();









