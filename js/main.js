window.onload = function(){
    const menu_btn = document.querySelector('.hamburger');
    const mobile_nav = document.querySelector('.mobile-nav');
    const body = document.querySelector('body')
    

    menu_btn.addEventListener('click',function(){
        menu_btn.classList.toggle('is-active');
        mobile_nav.classList.toggle('is-active');

        if(menu_btn.classList.contains('is-active')){
            body.classList.add('no-scroll');

          
        }
        else{
            body.classList.remove('no-scroll');
        }

    })

    // $('.img-carousel').slick({
    //     speed: 400,
    //     infinite:true,
    //     slidesToShow: 3,
    //     slidesToScroll:1,
    //     // autoplay:true,
    //     // autoplaySpeed: 2000,
    //     prevArrow:false,
    //     nextArrow:'<i class="fas fa-arrow-circle-right fa-3x right-arrow">',

    //   });
    $('.img-carousel').slick({
        dots: false,
        
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:false,
         nextArrow:'<i class="fas fa-chevron-circle-right fa-3x right-arrow">',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
                      
    $('.breakfast-club').slick({
        speed: 400,
        infinite:true,
        vertical:true,
        slidesToShow: 1,
        slidesToScroll:1,
        // autoplay:true,
        // autoplaySpeed: 2000,
        prevArrow:false,
        nextArrow:false,
        dots:true,
        adaptiveHeight: true
        
      });


    // FILTER SEARCH
    const filter = document.querySelector('#filter');
    const list = document.querySelector('#list');
    const li = document.querySelector('li')
    filter.addEventListener('keyup',()=>{
        Array.from(list.children).map(li=>{
            const matchFound = new RegExp(filter.value,'gi').test(li.innerText);
            if(!matchFound){
                li.classList.add('hidden');
            }
            else{
                li.classList.remove('hidden')
            }
        })
    });


    // Image carousel
 
//    TABS 

 const btn_1 = document.getElementById('button_1');
 const btn_2 = document.getElementById('button_2');
 const cnt_1 = document.getElementById('content-1');
 const cnt_2 = document.getElementById('content-2');
 cnt_2.style.display = 'none'
btn_1.addEventListener('click',function(){
  cnt_2.style.display = 'none';
  cnt_1.style.display = 'block'
})
btn_2.addEventListener('click',function(){
  cnt_1.style.display = 'none';
  cnt_2.style.display = 'block'
})

     




 


        
 

     
    
}


