const body = document.querySelector('body'),
      sideMenu = document.querySelector('.side-menu'),
      toggle = document.querySelector('.toggle');
      mdSize = window.matchMedia('(max-width: 767px)');
      
      
      toggle.addEventListener('click', () => {
        if (!mdSize.matches)
            sideMenu.classList.toggle('close');
      })

    document.onclick = function(e) {
        if(e.target.class !== 'sideMenu' && e.target.class !== 'toggle') {
            sideMenu.classList.toggle('side-menu-none');
        }
    }
    

console.log(toggle);