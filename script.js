const parent=document.getElementById('image_uploader')
const upload_button=document.getElementById('u_button');
const upload_image=document.getElementById('upload_image')
const list=document.getElementById('list');
const allUsers=Array.from(list.getElementsByTagName('li'));
const icon=document.querySelector('.menu_bar').getElementsByTagName('i')[0]
console.log(icon)

icon.addEventListener('click',()=>{
    if(parent.style.display=='none'){
        parent.style.display='block'
    }
    else{
        parent.style.display='none'
    }
})




upload_button.addEventListener('click',()=>{
    if(!list.style.height){
        list.style.height='80px';
    }
    else if(list.style.height=='80px'){
        list.style.height='0px'
    }
    else{
        list.style.height='80px';
    }
})

allUsers.forEach(element => {
    element.addEventListener('click',(e)=>{
        // console.log(e.target.innerText)
        const u_name=e.target.innerText;
        upload_image.src=`./${u_name}.jpg`
    })
});


