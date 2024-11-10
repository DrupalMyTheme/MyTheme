document.addEventListener("DOMContentLoaded", function() {
  var dropdowns = document.querySelectorAll('.navbar-nav .dropdown');

  dropdowns.forEach(function(dropdown) {
    var link = dropdown.querySelector('a.nav-link');
    link.addEventListener('click', function(event) {
      event.preventDefault(); // デフォルトのリンク動作を防ぐ
      if (!dropdown.classList.contains('show')) {
        dropdown.classList.add('show');
        link.classList.add('active');  // 親項目にアクティブクラスを追加
      } else {
        window.location.href = link.getAttribute('href');
      }
    });
  });

  document.addEventListener('click', function(event) {
    dropdowns.forEach(function(dropdown) {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('show');
        var link = dropdown.querySelector('a.nav-link');
        link.classList.remove('active');  // 親項目からアクティブクラスを削除
      }
    });
  });
});

