const submit_Btn = document.getElementById('open');
const modal_content = document.getElementById('modal');
const modal_display = document.getElementById('modal').style;
const okBtn = document.getElementById('ok');

submit_Btn.addEventListener('click', function(){
        if(modal_content.style.display == 'flex'){
             modal_content.style.display = 'none';
        }else {
             modal_content.style.display = 'flex';
        }
});


