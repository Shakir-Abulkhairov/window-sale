import checkInputs from './checkInput';

const changeModalState = (state) =>{
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    checkInputs('#width');
    checkInputs('#height');
    const btn = document.querySelector('.popup_calc_button'),
    inputs = document.querySelectorAll('.popup_calc input');
    
    function checkInputsValue(elem = 0) {
        if (!inputs[0].value || !inputs[1].value || typeof elem['form'] === "undefined") {

            btn.disabled = true;
        } else {
            btn.disabled = false;
        }

    }

     checkInputsValue();
 
    
    
    function saveStateModal(event,elem,prop) {

      

        elem.forEach((item,i)=>{
            item.addEventListener(event,()=>{
               
               switch (item.nodeName) {
                   case 'SPAN':
                       state[prop] = i 
                       checkInputsValue(state)
                       break;
                   case 'INPUT':
                   checkInputsValue(state)
                       if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = 'Холодный' : state[prop] = 'Теплый';
                            windowProfile.forEach((box,j)=>{
                                box.checked = false;
                                if(i == j){
                                    box.checked = true;
                                }
                            })
                       } else {
                       checkInputsValue(state)
                           state[prop] = item.value
                       }
                       break;
                   case 'SELECT':
                      state[prop] = item.value
                       break;
               };
               console.log(state)
            })
        })
    }
    
  
    saveStateModal('click',windowForm,'form');
    saveStateModal('input',windowWidth,'width');
    saveStateModal('input',windowHeight,'height');
    saveStateModal('change',windowType,'type');
    saveStateModal('change',windowProfile,'profile');
}

export default changeModalState;
