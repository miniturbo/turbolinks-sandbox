document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM content loaded.')
  Array.from(document.querySelectorAll('.invoker')).forEach(function(elem) {
    elem.addEventListener('click', function() {
      console.log('Invoked.');
      alert('Invoked.');
    });
  });
});

function isSupported() {
  if (window.Turbolinks) {
    return window.Turbolinks.supported;
  } else {
    return false;
  }
}

console.log('Evaluated.');
console.log('-- Turbolinks Supported:', isSupported());
