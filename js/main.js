jQuery(document).ready(function(){

    "use strict";
    $('#slider-carousel').carouFredSel({
        responsive:true,
        width: '100%',
        circular:true,
        scroll:{
            items:1,
            duration:600,
            pauseOnHover:true,
        },
        auto:true,
        items:
        {
            visible:{
                min:1, 
                max:1,
            },
             height:"variable"
        },
        pagination:{
            container:".sliderpager",
            pageAnchorBuilder:false,

        }
    });

});



// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("header").style.fontSize = "30px";
//   } else {
//     document.getElementById("header").style.fontSize = "90px";
//   }
// }