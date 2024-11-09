document.addEventListener("DOMContentLoaded", function() {
  var dropdowns = document.querySelectorAll('.navbar-nav .dropdown');

  dropdowns.forEach(function(dropdown) {
    var link = dropdown.querySelector('a.nav-link');
    link.addEventListener('click', function(event) {
      if (!dropdown.classList.contains('show')) {
        event.preventDefault();
        dropdown.classList.add('show');
      } else {
        window.location.href = link.getAttribute('href');
      }
    });
  });

  document.addEventListener('click', function(event) {
    dropdowns.forEach(function(dropdown) {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('show');
      }
    });
  });
});
