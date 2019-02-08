
'use strict'
document.querySelector('.yearChange').innerHTML = " "+new Date().getFullYear()+" ";



var loginForm = document.querySelector('.loginForm'),
    registerForm = document.querySelector('.registerForm'),
    navBar = document.querySelector('.headerFixed'),
    navCommon = document.querySelector('nav'),
    clickmobileMenu = document.querySelector('.clickMobileMenu'),
    buttonDonate = document.querySelector('.lastButton'),
    donateBlock = document.querySelector('.addDonateWrap'),
    mobileMenu = document.querySelector('.navBar'),
    loginIcon = document.querySelector('.loginIcon'),
    registerFunc = document.querySelector('.registerFunc'),
    span = document.createElement('span'),
    booleanNavBar = false,
    navBarObj = {
        width:navBar.getBoundingClientRect().width,
        height:navBar.getBoundingClientRect().height,
        top:navBar.getBoundingClientRect().top + window.scrollY
    };
    span.className = "afterbg"
    navBar.style.width = navBarObj.width + 'px'; 

    buttonDonate.onclick = (e)=>{
        if(buttonDonate.classList.contains('logined')){
            donateBlock.setAttribute("style", "transform: scale(1); opacity: 1");
            document.body.appendChild(span)
        }
        else{
            document.body.appendChild(span)
            loginForm.classList.add('show');
            loginForm.setAttribute('style', "transform: scale(1); opacity: 1");
            // donateBlock.setAttribute("style", "transform: scale(0); opacity: 0")
            
        }
    }
    loginIcon.onclick = (e)=>{
        document.body.appendChild(span)
        loginForm.classList.add('show');
        loginForm.setAttribute('style', "transform: scale(1); opacity: 1");
    }
    registerFunc.onclick = (e)=>{
        // document.body.appendChild(span)
        loginForm.classList.remove('show');
        loginForm.setAttribute('style', "transform: scale(0); opacity: 0");
        registerForm.setAttribute('style', "transform: scale(1); opacity: 1");
    }
    
    document.onclick = (e)=>{ 
        if(e.target.className == 'afterbg'){
            console.log(true)
            document.querySelector('.afterbg').remove();
            loginForm.classList.remove('show');
            loginForm.setAttribute('style', "transform: scale(0); opacity: 0");
            registerForm.setAttribute('style', "transform: scale(0); opacity: 0");

            donateBlock.setAttribute("style", "transform: scale(0); opacity: 0");

            document.querySelector('.clickMobileMenu').classList.add('lnr-menu')
            document.querySelector('.clickMobileMenu').classList.remove('lnr-cross')
            mobileMenu.style.left = -250 +'px'
        }
        
    }
    clickmobileMenu.onclick = (e)=>{
        document.body.appendChild(span)
        document.body.style.overflow ='hidden'
        if(e.target.classList.contains('lnr-menu')){
            e.target.classList.remove('lnr-menu')
            e.target.classList.add('lnr-cross') 
            mobileMenu.style.left = 0 +'px';
            booleanNavBar = false;
        }
        else{
            booleanNavBar = true;
            e.target.classList.add('lnr-menu')
            e.target.classList.remove('lnr-cross')
            mobileMenu.style.left = -250 +'px'
        }
    }



// document.onclick = (e)=>{
//     // if(booleanDonate && !e.target.closest('.addDonateWrap')){
//     //     booleanDonate = false;
//     //     donateBlock.setAttribute("style", "transform: scale(0); opacity: 0")
//     // }
  
//     if(e.target.closest(".loginForm") && !e.target.closest(".registerFunc") || e.target.closest(".loginIcon")  && e.target.getAttribute('data-icon') ){
//         console.log(1)
//         e.target.removeAttribute('data-icon');
//         loginForm.setAttribute('style', "transform: scale(1); opacity: 1");
//         registerForm.setAttribute('style', "transform: scale(0); opacity:0");
//     }
//     else if(e.target.closest(".registerFunc") || e.target.closest(".registerForm")){
//         console.log(2)
//         document.querySelector('.loginIcon').setAttribute('data-icon', true)
//         loginForm.setAttribute('style', "transform: scale(0); opacity: 0");
//         registerForm.setAttribute('style', "transform: scale(1); opacity:1");
//     }
//     else{
//         console.log(3)
//         document.querySelector('.loginIcon').setAttribute('data-icon', false)
//         loginForm.setAttribute('style', "transform: scale(0); opacity: 0");
//         registerForm.setAttribute('style', "transform: scale(0); opacity:0");
//     }

//     if(!e.target.closest(".navBar") && !e.target.closest(".lnr-cross") && !e.target.closest(".lnr-menu")){
//         mobileMenu.style.left = -250 +'px';
//         document.body.style.overflow ='auto'
//         if( document.querySelector(".homeTop .lnr-cross") != null){
//             document.querySelector(".homeTop .lnr-cross").classList.replace('lnr-cross', 'lnr-menu')
//         }
//     }
    
    
// }




function ellipsizeTextBox(el) {
    if (el.scrollHeight <= el.offsetHeight) {
      return;
    }

    let wordArray = el.innerHTML.split(' ');
    const wordsLength = wordArray.length;
    let activeWord;
    let activePhrase;
    let isEllipsed = false;

    for (let i = 0; i < wordsLength; i++) {
      if (el.scrollHeight > el.offsetHeight) {
        activeWord = wordArray.pop();
        el.innerHTML = activePhrase = wordArray.join(' ');
      } else {
        break;
      }
    }

    let charsArray = activeWord.split('');
    const charsLength = charsArray.length;

    for (let i = 0; i < charsLength; i++) {
      if (el.scrollHeight > el.offsetHeight) {
        charsArray.pop();
        el.innerHTML = activePhrase + ' ' + charsArray.join('')  + '...';
        isEllipsed = true;
      } else {
        break;
      }
    }

    if (!isEllipsed) {
      activePhrase = el.innerHTML;

      let phraseArr = activePhrase.split('');
      phraseArr = phraseArr.slice(0, phraseArr.length - 3)
      el.innerHTML = phraseArr.join('') + '...';
    }
  }

let el = document.querySelectorAll('.dottedText');
Array.prototype.map.call(el, (elm, mls)=>{
    ellipsizeTextBox(elm);
})

var dataAnimate = [],
    emptyChild = [];
const objElementAnimated = {
    firstSection:()=>{
        dataAnimate = [];
        Array.prototype.map.call(document.querySelectorAll('.data-animate'), (elm, ind)=>{
            Array.prototype.map.call(elm.children, element => {
                emptyChild.push({
                    elemChild:element,
                    addClass:element.classList.add('childrenAnimate'),
                    posChild:[element.getBoundingClientRect().top]
                })
           })    
            dataAnimate.push({
                parentNode:elm,
                parentPosition:elm.getBoundingClientRect().top + window.scrollY,
                parentHeight:elm.getBoundingClientRect().height,
                childrens:emptyChild                
            })
            emptyChild = [];
        })
        return dataAnimate;
    }
}

console.log(objElementAnimated.firstSection())

var transitionFunc = (scroll)=>{
    Array.prototype.map.call(objElementAnimated.firstSection(), (em, index)=>{
        if(
            scroll + window.innerHeight > 
            objElementAnimated.firstSection()[index].parentPosition + 
            objElementAnimated.firstSection()[index].parentHeight/2
            &&  scroll + objElementAnimated.firstSection()[index].parentHeight < 
            objElementAnimated.firstSection()[index].parentPosition + 
            objElementAnimated.firstSection()[index].parentHeight
            ){
            objElementAnimated.firstSection()[index].parentNode.setAttribute('style', 'opacity:1;');
            Array.prototype.map.call(objElementAnimated.firstSection()[index].childrens, (e,i)=>{
                setTimeout(()=>{
                    e.elemChild.setAttribute('style', 'opacity:1; transition: .4s; position:relative; top:0px');
                }, i*150)
            })
        }   
    })
    
}
document.addEventListener('DOMContentLoaded', ()=>{
    if(objElementAnimated.firstSection().length > 0){
        transitionFunc(window.scrollY)
    }
})

window.onscroll = (e)=>{
    if(objElementAnimated.firstSection().length > 0){
        transitionFunc(window.scrollY)
    }
    document.querySelector('.jumpTo').style.opacity = (window.scrollY > 450)?1:0;

    if(window.matchMedia("(min-width: 767px)").matches){
        if(window.scrollY >= navBarObj.top ){
            navBar.classList.add('fixedNav');
            navCommon.classList.add('navBackground');
            document.querySelector('.fixedNav').style.width = navBarObj.width + 'px';
            document.body.style.marginTop =navBarObj.height+'px'
        }
        else{
            navCommon.classList.remove('navBackground');
            navBar.classList.remove('fixedNav')
            document.body.style.marginTop =0+'px'
            
        }
    }
}
document.querySelector('.jumpTo').onclick = ()=>{
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
}


// Ripple
if(document.querySelector('[data-ripple]')){
    document.querySelector('[data-ripple]').addEventListener("click",  (e)=>{
        var left = e.pageX - e.target.getBoundingClientRect().left - 50,
        top = e.pageY - e.target.getBoundingClientRect().top -50;
        e.target.innerHTML += '<span class="ripple"></span>';
        document.querySelector('.ripple').setAttribute('style', 'top:'+top+'px; left:'+left +'px');
        setTimeout(()=>{
            document.querySelector('.ripple').remove()
        }, 1000)
    })
// Ripple
}



  
