const checkInputs =(inputSelector)=>{
    const input = document.querySelectorAll(inputSelector)
    input.forEach(item=>{
        
        item.addEventListener('input',()=>{
            item.value = item.value.replace(/\D/,'')
        })
    })
    
}
export default checkInputs;
