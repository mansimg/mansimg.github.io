document.addEventListener('DOMContentLoaded', init);
function init() {
  var input = document.querySelector('input');
  var reader = new FileReader();

  // When the FileReader "load" event fires, update the image.
  reader.onload = function (e) {
      document.getElementById("image").src = e.target.result;
  };

  // Listen for when the input changes.
  input.addEventListener('change', onInputChange)
  function onInputChange(e) {
    reader.readAsDataURL(this.files[0]);
  }
}

function name()
{
var input = document.getElementById("userInput");
alert(input);
}
function othername() {
    var input = document.getElementById("userInput").value;
    alert(input);
}
