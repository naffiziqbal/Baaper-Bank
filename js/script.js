const userInfo = {
    user : 'abc@gmail.com',
    password : '342137',
};

const userLog = {};
const userNameFiled = document.getElementById('email');
const password = document.getElementById('password');

const userNameMatch =  userNameFiled.addEventListener('keyup', (e)=>{

    userLog.user = e.target.value;
    if(e.target.value === userInfo.user){
        console.log('Hello')
    }
  
});
const passwordMatch = password.addEventListener('keyup', (e)=>{
    userLog.password = e.target.value;

    if(e.target.value === userInfo.password){
        console.log('Jannati')
    }else{
        console.log(`Jahannami Jahannami Jahannami`)
    }
})

document.getElementById('submit-btn').addEventListener('click', ()=>{
    const wrongInfo = document.getElementById('worng-info-section')
    if(userInfo.user === userLog.user && userInfo.password === userLog.password ){
        console.log("Free To Ride")
    }
    else{
        wrongInfo.classList.remove('d-none');
        wrongInfo.classList.add('d-block');

    }

    
})

console.log(userLog)
