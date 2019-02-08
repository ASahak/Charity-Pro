function Video(){
    this.__functions.call(this);
}
Video.prototype = {
    __functions:function(){
        this.__wordekFunc();
    },
    __wordekFunc:()=>{
        var clickAttrSrc = '',
        activeIframe = document.querySelector('.fancyIframe'),
        fancyVideo = document.querySelector('.fancyVideo'),
        iframeHeight = window.innerHeight,
        boolenFancy = false,
        videosCount =document.querySelector('.videoContent').children.length,
        videosObj = [],
        minCount  = document.querySelector('.activeCount').innerHTML;
        document.querySelector('.allCount').innerHTML = videosCount;
        
        document.querySelectorAll('.iframeShowLarge').forEach((element, ind)=>{
            videosObj.push({
                elem:element.children[0].getAttribute('src')
            })
            element.addEventListener("click", (th)=>{
                document.querySelector('.activeCount').innerHTML = ind+1;
                boolenFancy = true;
                fancyVideo.style.display = "block"
                clickAttrSrc = th.target.closest(".iframeShowLarge").children[0].getAttribute("src");
                activeIframe.children[0].setAttribute('src', clickAttrSrc)
                activeIframe.style.height = iframeHeight-(iframeHeight/2)+"px";
                document.onclick = (e)=>{
                      if(boolenFancy){
                        if(e.target.classList.contains('fancyVideo') || e.target.classList.contains('closeFancy')){
                            activeIframe.children[0].setAttribute('src', '')
                            fancyVideo.style.display = "none";
                            boolenFancy = false;
                        }
                    }
                }
            })
        
        })

        document.querySelectorAll('.Video').forEach(element=>{
            element.onclick = ()=>{
                if(element.getAttribute('data-video')=="prev"){
                    leftVideo((document.querySelector('.activeCount').innerHTML > 1) ? document.querySelector('.activeCount').innerHTML--: 0)
                }
                else if(element.getAttribute('data-video')=="next"){
                    rightVideo((document.querySelector('.activeCount').innerHTML < document.querySelector('.allCount').innerHTML)?
                    document.querySelector('.activeCount').innerHTML++: document.querySelector('.allCount').innerHTML)
                }
            }
    
        })
        function leftVideo (inner){
            if(inner > 1){
                // why 2 -- because object index begin to 0 and getting argument big of 1
                activeIframe.children[0].setAttribute('src', videosObj[inner -2].elem)
            }
        }
        function rightVideo(inner){
            if(inner < videosObj.length){
                activeIframe.children[0].setAttribute('src', videosObj[inner].elem)
            }
        }
    },

   
    
}
let VideoClass = new Video();