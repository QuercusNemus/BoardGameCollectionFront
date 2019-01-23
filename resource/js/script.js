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

var fetchCollection = document.getElementById('fetchCollectionBtn');
var config = {
  headers: {'userName': 'Eurig'}
};

  new Vue({
    el: '#fetchCollection-1',
    data () {
      return {
        items: null
      }
    },
    mounted () {
      axios
        .get('http://127.0.0.1:8080/api/collection/read', config)        
        .then(response => {
          console.log(response.data[0].primaryGameName)          
          this.items = response.data       
          })
    }
  })