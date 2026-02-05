const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "/images/small_2k_sd.png") {
    myImage.setAttribute("src", "/images/big_hd_4k.png");
  } else {
    myImage.setAttribute("src", "/images/small_2k_sd.png");
  }
});


// This creates references to the new button and the heading, storing each inside variables
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

/* Function to set the personalized greeting:
promt() Asks the user to enter data and stores it in a variable after they click OK
If myName has no value, run setUserName() again from the start
If it does have a value, then store the value in localStorage and set it as the heading's text
localStorage.setItem() uses the Web Storage API, which stores data for myName in the browser to retrieve later
Final line sets the textContent of the heading to a string that includes the user's stored name*/
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

/* logical NOT (!) to check whether the name data item is not already stored in localStorage
If not, the setUserName() function runs to create it
If it does exist, retrieve the stored name using localStorage.getItem() and set the textContent of the heading to a string, plus the user's name*/
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Sock is your friend, ${storedName}`;
}

/* Add a click event handler function to the button
When clicked, setUserName() runs */
myButton.addEventListener("click", () => {
  setUserName();
});


