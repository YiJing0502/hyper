const body = document.querySelector('body'),
      sideMenu = document.querySelector('.side-menu'),
      toggle = document.querySelector('.toggle');
      mdSize = window.matchMedia('(max-width: 767px)');
      xSize = window.matchMedia('(max-width: 1140px)');
      
      

      function closeSideMenu () {
          if (xSize.matches) {
              sideMenu.classList.add('close');
            }
        }
    
    // window.addEventListener('resize', () => {
    //     if (xSize.matches) {
    //         closeSideMenu ();
    //         console.log(1140);
    //     } else if (mdSize.matches) {
    //         sideMenu.classList.remove('close');
    //         console.log(767);

    //     }
    // })

    window.addEventListener('resize', () => {
        if (mdSize.matches) {
            sideMenu.classList.remove('close');
            console.log(767);
        } else if (xSize.matches) {
            closeSideMenu ();
            console.log(1140);
        } else if (!xSize.matches) {
            sideMenu.classList.remove('close');
            console.log(1141);
        }
    })
    console.log(document.childNodes);
    //  點擊空白處關掉side-menu
    document.onclick = function(e) {
        // console.log(e.target.classList.contains('bi-list'));
        // console.log(e.target.childNodes);
        
        // if(e.target.class !== 'sideMenu' && e.target.class !== 'toggle') {
        //     sideMenu.classList.toggle('side-menu-none');
        // }
    }

    document.addEventListener('click', (e) => {
        console.log(e.target);
        // console.log(e.target.classList.contains('func-item'));
        if (e.target.classList.contains('bi-list')) {
            console.log('contains');
            sideMenu.classList.remove('side-menu-none')

        } else {
            sideMenu.classList.add('side-menu-none')
            console.log('not contains');

        }
    })

    toggle.addEventListener('click', () => {
        if (!mdSize.matches)
            sideMenu.classList.toggle('close');
    })
    

console.log(toggle);