const tabs = (headerSelector,tabSelector,contentSelector,activeClass,display = 'block') => {
    const header = document.querySelector(headerSelector),
          content = document.querySelectorAll(contentSelector),
          tab = document.querySelectorAll(tabSelector);
    
    function hideContent(){
        content.forEach(item =>{
            item.style.display = 'none';
        });
        tab.forEach(item =>{
           item.classList.remove(activeClass)
        });
    }
    function showContent(i = 0){
        content[i].style.display = display;
        tab[i].classList.add(activeClass);
    };
    header.addEventListener('click',(e)=>{
            const target = e.target;
            if(target && (target.classList.contains(tabSelector.replace(/\./,'')) || target.parentNode.classList.contains(tabSelector.replace(/\./,'')))){
                tab.forEach((item,i)=>{
                    if(target == item || target.parentNode == item){
                        hideContent();
                        showContent(i);
                    }
                })
            }
       })
    hideContent();
    showContent();
}
export default tabs;