const navItems= document.getElementsByClassName('sidebar')[0].addEventListener("click",(navItems) => {

    navItems.forEach(navItems => {
        navItems.classList.remove('active');
    });

    navItems.classList.add("active");

});
const nav=Array.from(navItems);
nav.forEach(nav => {

   nav.onclick= () => {

        nav.forEach(nav => {
            nav.classList.remove('active');
        });

        nav.classList.add("active");

    }});
// var navItem = document.getElementsByClassName('calendar')[0].addEventListener("mousedown",(navItem) => {
//     document.getElementsByClassName('calendar')[0].classList.add('active');

// });


    // navItem.addEventListener('click', () => {
        

    //            navItem.forEach(navItem => {
    //                  navItem.classList.remove('active');
    //              });
        
    //             navItem.classList.add('active');
        
    //         });
    
