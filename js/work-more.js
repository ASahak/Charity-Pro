function Work_More(){
    this.__functions.call(this);
}
Work_More.prototype = {
    __functions:function(){
        this.__closeModal();    
        this.__modalViewMor();    
    },
    __modalViewMor:()=>{
        document.querySelectorAll('#jobMoreShow').forEach((elm)=>{
            elm
            .addEventListener("click", (e)=>{
                document.addEventListener('click', (el)=>{
                    if(!el.target.closest(".commonInfo") || el.target.closest(".closeModal")){
                        document.body.classList.remove("afterForm");
                        document.querySelector('.commonInfo').setAttribute('style', 'opacity:0; visibility:hidden; top:0px;');
                    }
                })
                setTimeout(()=>{
                    document.querySelector('.commonInfo').setAttribute('style', 'opacity:1; visibility:visible; top:60px;');
                    document.body.classList.add("afterForm");
                }, 0)
            })
        })
    },
    __closeModal:()=>{
        document.querySelector('.addWorkButton').addEventListener("click", (e)=>{
            document.querySelector('.addWorkWrap').style.display = (document.querySelector('.addWorkWrap').style.display) ==  "block"?"none":"block"
        })
    }
}
let Work_MoreClass = new Work_More();