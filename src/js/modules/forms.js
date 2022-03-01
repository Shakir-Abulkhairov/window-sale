import checkInputs from './checkInput';
const forms = (state) => {
    const form = document.querySelectorAll('form'),
    input = document.querySelectorAll('input');
   

    checkInputs('input[name="user_phone"]');

    const message = {
        loading: 'идет отправка',
        send:'отправлено',
        error: 'ошибка'
    };

    const postData = async(url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url,{
            method: 'POST',
            body: data
        });
        return  await res.text();     //because return text data  
    };

    const inputReset = () =>{
        input.forEach(item =>{
            item.value = '';
        })
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            let formData = new FormData(item);

            if(item.getAttribute('data-calc') === 'end'){
                for (const key in state) {
                    formData.append(key, state[key]);
                }
            }
            
            postData('assets/server.php',formData)
            .then((res) => {
                console.log(res);
                statusMessage.innerHTML = message.send
            })
            .catch(() => {
                statusMessage.innerHTML = message.error
            })
            .finally(() => {
                inputReset();
                setTimeout(() => {
                    statusMessage.remove();
                },5000);
            })
        })
    })

}
export default forms;