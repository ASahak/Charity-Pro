function Stories(){
    this.__functions.call(this);
}
Stories.prototype = {
    __functions:function(){
        this.__showComment(
            document.querySelectorAll('.storiesComment')
        )
    },
    __showComment:(elem)=>{
        Array.prototype.map.call(elem, element=>{
            element.onclick= (e)=>{
                document.getElementById(e.target.getAttribute('data-comment')).style.display = 
                (document.getElementById(e.target.getAttribute('data-comment')).style.display) == 'block'?"none":"block"
            }
        })
    }
}
let StoriesClass = new Stories();