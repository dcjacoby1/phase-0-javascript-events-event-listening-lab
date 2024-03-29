
//function selects id 'button'
function addingEventListener() {
    const input = document.getElementById('button');

//function creates alert
function clickAlert() {
  alert('I was clicked!');
}
//takes the input from add event listener, initializes click event, that trickers clickAlert message
//only works bc it is in scope of adding event listener
input.addEventListener('click', clickAlert);  
}
//triggers function that allows event to occur
addingEventListener()


// //this code works
// //selects element with id #button, ads a click event, triggers function
// document.querySelector('#button').addEventListener('click', clickAlert)

// //function sends alert that says I was clicked
// function clickAlert(){
//   alert("I was clicked")
// }