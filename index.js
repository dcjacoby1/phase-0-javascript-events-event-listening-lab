
//not sure why this code format doesn't work
// function addingEventListener() {
//     const input = document.getElementById('button');

// function clickAlert() {
//   alert('I was clicked!');
// }

// input.addEventListener('click', clickAlert);  
// }


//selects element with id #button, ads a click event, triggers function
document.querySelector('#button').addEventListener('click', clickAlert)

//function sends alert that says I was clicked
function clickAlert(){
  alert("I was clicked")
}