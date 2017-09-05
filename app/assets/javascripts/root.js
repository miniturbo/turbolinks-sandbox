//= require utils

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM content loaded.')
  // Array.from(document.querySelectorAll('.invoker')).forEach(function(elem) {
  //   elem.addEventListener('click', function() {
  //     console.log('Invoked.');
  //     alert('Invoked.');
  //   });
  // });
  document.addEventListener('click', function(e) {
    var elem = closest(e.target, '.invoker');
    if (elem) {
      console.log('Closest invoker element:', elem);
      console.log('Invoked.');
      alert('Invoked.');
    } else {
      console.log('Closest invoker element not found.');
    }
  });
});

console.log('Evaluated.');
console.log('-- Turbolinks Supported:', isSupported());
