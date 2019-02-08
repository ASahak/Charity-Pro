function Show_Comments(){
    this.__functions.call(this);
}
Show_Comments.prototype = {
    __functions:function(){
        this.__addForum();
        this.__closeForumForm();
        this.__labelTopInputFocus();
    },
    __addForum:()=>{
        document.querySelector('#addForumClick').addEventListener('click', ()=>{
            document.body.classList.add("afterForm");
            document.querySelector('.addForumForm').setAttribute('style', 'visibility:visible; transform:scale(1); opacity:1');
        })
        document.onclick= (e)=>{
            if(
                !e.target.closest(".addForumForm") && !e.target.closest(".closeFormForum") && document.querySelector('.addForumForm') 
                && !e.target.closest("#addForumClick")
                || e.target.closest(".closeFormForum") || e.target.closest(".closeButton") 
            ){
                document.body.classList.remove("afterForm");
                document.querySelector('.addForumForm').setAttribute('style', 'visibility:hidden; transform:scale(0); opacity:0')
            }
        }
    },
    __closeForumForm:()=>{
        document.querySelector('.closeButton').addEventListener('click', (e)=>{
            e.preventDefault()
        })
    },
    __labelTopInputFocus:()=>{
        Array.prototype.forEach.call(document.querySelector('.addTheme').children, (elm)=>{
            if(elm.classList.contains('labelTop')){
                elm.onclick = (e)=>{
                    elm.children[1].focus();
                }
                elm.children[1].onfocus = (e)=>{
                    if(e.target.value == ""){
                        elm.children[0].setAttribute('style', 'top:-20px; left:10px; font-size:13px')
                    }
                }
                elm.children[1].onblur = (e)=>{
                    if(e.target.value == ""){
                        elm.children[0].setAttribute('style', 'top:6px; left:15px; font-size:14px')
                    }
                }
            }
        })
    }
    
}
let Show_CommentsClass = new Show_Comments();