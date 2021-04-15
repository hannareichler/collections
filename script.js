// load the airtable library, call it "Airtable"
var Airtable = require("airtable");

// use the airtable library to get a variable that represents one of our bases
// We needed to put in the right apiKey and
// base ID here!
var base = new Airtable({ apiKey: "keyibrh0lTCkjWYpl" }).base(
  "appPDbaBNvjqq0FbG"
);

// Get your table from the base, select ALL the records, and specify the callback functions that will receive each page of data
base("Artists").select({}).eachPage(gotPageOfPeople, gotAllPeople);

// an empty array to hold our people data
const people = [];

// callback function that receives each page of data (considered here as records) and adds them to our list of people
function gotPageOfPeople(records, fetchNextPage) {
  console.log("gotPageOfPeople()");
  console.log("There are "+records.length+" items in records");
  // This takes the list of records and add them to the people array
  people.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when ALL pages are loaded
// You don't need to edit this function.
function gotAllPeople(err) {
  console.log("gotAllPeople()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading people");
    console.error(err);
    return;
  }

  showData();

}

function showData(){
   const peopleContainer0 = document.querySelector(".pic0");
   var item0 = people[Math.floor(Math.random() * people.length)];
   peopleContainer0.style.backgroundImage= "url("+item0.fields.Attachments[0].url+")"
}

function showData(){
   const peopleContainer1 = document.querySelector(".pic1");
   var item1 = people[Math.floor(Math.random() * people.length)];
   peopleContainer1.style.backgroundImage= "url("+item1.fields.Attachments[0].url+")"
}

function showData(){
   const peopleContainer2 = document.querySelector(".pic2");
   var item2 = people[Math.floor(Math.random() * people.length)];
   peopleContainer2.style.backgroundImage= "url("+item2.fields.Attachments[0].url+")"
}

function showData(){
   const peopleContainer3 = document.querySelector(".pic3");
   var item3 = people[Math.floor(Math.random() * people.length)];
   peopleContainer3.style.backgroundImage= "url("+item3.fields.Attachments[0].url+")"
}

function showData(){
   const peopleContainer4 = document.querySelector(".pic4");
   var item4 = people[Math.floor(Math.random() * people.length)];
   peopleContainer4.style.backgroundImage= "url("+item4.fields.Attachments[0].url+")"
}

function showData(){
   const peopleContainer5 = document.querySelector(".pic5");
   var item5 = people[Math.floor(Math.random() * people.length)];
   peopleContainer5.style.backgroundImage= "url("+item5.fields.Attachments[0].url+")"
}

function showData(){
   const peopleContainer6 = document.querySelector(".pic6");
   var item6 = people[Math.floor(Math.random() * people.length)];
   peopleContainer6.style.backgroundImage= "url("+item6.fields.Attachments[0].url+")"
}
function showData(){
   const peopleContainer7 = document.querySelector(".pic7");
   var item7 = people[Math.floor(Math.random() * people.length)];
   peopleContainer7.style.backgroundImage= "url("+item7.fields.Attachments[0].url+")"
}

function showData(){
   const peopleContainer8 = document.querySelector(".pic8");
   var item8 = people[Math.floor(Math.random() * people.length)];
   peopleContainer8.style.backgroundImage= "url("+item8.fields.Attachments[0].url+")"
}

function showData(){
   const peopleContainer9 = document.querySelector(".pic9");
   var item9 = people[Math.floor(Math.random() * people.length)];
   peopleContainer9.style.backgroundImage= "url("+item9.fields.Attachments[0].url+")"
}

function showData(){
   const peopleContainer10 = document.querySelector(".pic10");
   var item10 = people[Math.floor(Math.random() * people.length)];
   peopleContainer10.style.backgroundImage= "url("+item10.fields.Attachments[0].url+")"
}

function showData(){
   const peopleContainer11 = document.querySelector(".pic11");
   var item11 = people[Math.floor(Math.random() * people.length)];
   peopleContainer11.style.backgroundImage= "url("+item11.fields.Attachments[0].url+")"
}

function showData(){
   const peopleContainer12 = document.querySelector(".pic12");
   var item12 = people[Math.floor(Math.random() * people.length)];
   peopleContainer12.style.backgroundImage= "url("+item12.fields.Attachments[0].url+")"
}

function showData(){
   const peopleContainer13 = document.querySelector(".pic13");
   var item13 = people[Math.floor(Math.random() * people.length)];
   peopleContainer13.style.backgroundImage= "url("+item13.fields.Attachments[0].url+")"
}

// function showData(){
//    const peopleContainer14 = document.querySelector(".pic14");
//    var item14 = people[Math.floor(Math.random() * people.length)];
//    peopleContainer14.style.backgroundImage= "url("+item14.fields.Attachments[0].url+")"
// }


// // Show people based off the data that is retrieved
// function showPeople() {
//   console.log("showPeople()");
//
//
//   // find the container
//   const peopleContainer = document.querySelector("#container");
//
//   // loop through all the people listed in the Airtable data. Inside is the code we are applying for EACH person in the list of people.
//   people.forEach((person) => {
//     // Print out what a single person's data looks like by printing out its fields
//     console.log("SHOWING THE PERSON")
//     console.log(person.fields);
//
//
//     /**TO DO: Write JavaScript code to add each character's information onto the webpage**/
//     const personImg = document.createElement("img");
//        personImg.src = person.fields.Attachments[0].url;
//        peopleContainer.appendChild(personImg);
//
//        // const personName = document.createElement("h2");
//        // personName.innerText = person.fields.name;
//        // peopleContainer.appendChild(personName);
//        //
//        // const personBio = document.createElement("p");
//        // personBio.innerText = person.fields.bio;
//        // peopleContainer.appendChild(personBio);
//
//        //div
//
//        //let div = document.createElement('div');
//        //div.id = 'content';
//       // div.className = 'note';
//
//       // document.body.appendChild(div);
//   });
// }
