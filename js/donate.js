function Donate(){
    this.__functions.call(this);
}
Donate.prototype = {
    __functions:function(){
        this.__addDonate();    
        this.__swiperInit();    
        this.__showModal(document.querySelectorAll('.moreDonate'))
    },
    __swiperInit:()=>{
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
            slidesPerView: 3,
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
    __addDonate:()=>{
        document.querySelector('.addWorkButton').addEventListener("click", (e)=>{
            document.querySelector('.addWorkWrap').style.display = (document.querySelector('.addWorkWrap').style.display) ==  "block"?"none":"block"
        })
    },
    __showModal:(arrElem)=>{
        arrElem.forEach(element=>{
            element.
            addEventListener("click", (e)=>{
                document.addEventListener('click', (el)=>{
                    if(!el.target.closest(".commonInfoDonate") || el.target.closest(".closeModalDonate")){
                        document.body.classList.remove("afterForm");
                        document.querySelector('.commonInfoDonate').setAttribute('style', 'opacity:0; visibility:hidden; top:0px;');
                    }
                })
                setTimeout(()=>{
                    document.querySelector('.commonInfoDonate').setAttribute('style', 'opacity:1; visibility:visible; top:60px;');
                    document.body.classList.add("afterForm");
                }, 0)
            })
        })
    }
    
}
let DonateClass = new Donate();