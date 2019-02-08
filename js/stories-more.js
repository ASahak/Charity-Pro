function Stories_More(){
    this.__functions.call(this);
}
Stories_More.prototype = {
    __functions:function(){
        this.__initSwiper();
        this.__bottomCommentsWrap();
    },
    __initSwiper:()=>{
        var largeSlider = new Swiper('.charitySlider', {
            paginationClickable: true,
            nextButton: '.next_large',
            prevButton: '.prev_large',
            spaceBetween: 15,
            autoHeight: true,
            

        });
        var thumbSlider = new Swiper('.charitySliderThumb', {
            paginationClickable: true,
            spaceBetween: 10,
            slidesPerView: 4,
            autoHeight: true,
            breakpoints: {
                991: {
                    slidesPerView: 2
                },
                767: {
                    slidesPerView: 3
                }
            }
        });
        document.querySelectorAll('.swipe-slide-to').forEach(element => {
            element
            .addEventListener('click', (e)=> {
                var index = e.target.getAttribute('data-slide-to');
                largeSlider.slideTo(index, 500);
            });
        })
    },
    __bottomCommentsWrap:()=>{
        var heightComment = document.querySelector('.commentNone').getBoundingClientRect().height;
        document.querySelector('.commentNone').style.height = "0px"
        showComment = ()=>{
            if(document.querySelector('.commentNone').style.height == 0+"px"){
                document.querySelector('.commentNone').style.height = heightComment+"px"
                document.querySelector('.commentNone').style.visibility = "visible"
            }
            else{
                document.querySelector('.commentNone').style.height = 0+"px"
                document.querySelector('.commentNone').style.visibility = "hidden"

            }
        }
    }
    
    
}
let Stories_MoreClass = new Stories_More();