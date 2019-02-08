function Forum(){
    this.__functions.call(this);
}
Forum.prototype = {
    __functions:function(){
        this.__addForum();
        this.__closeForumForm();
    },
    __addForum:()=>{
        document.querySelector('#addForumClick').addEventListener('click', ()=>{
            document.body.classList.add("afterForm");
            document.querySelector('.addForumForm').setAttribute('style', 'visibility:visible; transform:scale(1); opacity:1');
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
        })
       
    },
    __closeForumForm:()=>{
        document.querySelector('.closeButton').addEventListener('click', (e)=>{
            e.preventDefault()
        })
    }
    
}
let ForumClass = new Forum();