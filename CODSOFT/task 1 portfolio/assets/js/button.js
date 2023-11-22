function message(){ 
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(name.value == '' || email.value == '' || msg.value == '') 
    {
    danger.style.display = 'block';
    }
    else{
        setTimeout(()=>{

            name.value ='';
            email.value='';
            msg.value='';
        },2000);

        success.style.display='block';

    }

    setTimeout(()=>{
        danger.style.display='none';
        success.style.display='none';


    },4000)

}