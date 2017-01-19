var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

  // Add the band names into the correct <div>
  // currentBand = ???;


  // // Add the veggie names into the correct <div>
  // currentVeggie = ???;

}
// Loop through the two arrays provided (bands and vegetables) 
// and output each element in the arrays into their corresponding HTML <div> element. 
// Ensure that each item is in a block element (e.g. li, div, p. etc...)


// var bandVeggie= "bands[i]" + "vegetables[i]" + " " + "<br>";
// var BVanswer = document.getElementById("bands[i]" + " " + "vegetables[i]");


for (i=0; i < bands.length; i++) {
	
	var pBand = document.createElement("p");
	var pVeggie = document.createElement("p");
	pBand.innerHTML = bands[i];
	pVeggie.innerHTML = vegetables[i];
	bandElement.appendChild(pBand);
	veggieElement.appendChild(pVeggie);

}



