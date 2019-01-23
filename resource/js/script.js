// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var fetchButton = document.getElementById('fetch');

fetchButton.onclick = function() {
  const uri = 'http://127.0.0.1:8080/api/collection/read';

  var myHeaders = new Headers();
      myHeaders.append("userName", "Eurig");

  var myInit = { method: 'GET',
              headers: myHeaders,
              mode: 'cors',
              cache: 'default'};

fetch(uri,  myInit)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
}

