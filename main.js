window.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.querySelectorAll('#menu-list li');
  
    menuItems.forEach(function(item) {
      item.addEventListener('click', function() {
        menuItems.forEach(function(item) {
          item.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
  });
  