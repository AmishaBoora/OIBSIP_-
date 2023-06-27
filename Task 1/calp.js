
let buttons=document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML=='='){
            
            document.querySelector('input').value=eval(value);
        }
        else if(e.target.innerHTML=='C'){
            
            document.querySelector('input').value="";
        }
        else if(e.target.innerHTML=='del'){
            
            document.querySelector('input').value= substr(0, value.length -1);
        }
        else{
       
        document.querySelector('input').value+=value;
    }
    })
})