const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click',function(event){
    // console.log("clicked");
    const loginarea = document.getElementById('login-area');
    loginarea.style.display = 'none';

    const transationArea = document.getElementById('transation-area');
    transationArea.style.display = 'block';
})

//second page
const depositeBtn = document.getElementById('depositeBtn');
depositeBtn.addEventListener('click',function(){

    //call by getInput function
    const depoNumber = getInputNumber('depositeField');

    //currentDeposite getting by function call
    updateSapnText('currentDeposite',depoNumber);
    document.getElementById('depositeField').value ='';//for input field empty

    //banlaceUpdate by function call
    updateSapnText('currentBalance',depoNumber);
})

//withdraw handler
const withdrawBtn=document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click',function(){
    const withdrawNumber = getInputNumber('withdrawField');
    //depositeUpdate by function call
    updateSapnText('currentWithdraw',withdrawNumber);
    updateSapnText('currentBalance',-1*withdrawNumber);
    console.log(withdrawNumber);
})
//function for same work
//work for deposite and withdraw
function getInputNumber(id){
    const withdrawField = document.getElementById(id).value;
    if(withdrawField==''){
        alert("Field cannot be empty");
        return false;
    }
    const withdrawNumber = parseFloat(withdrawField);
    return withdrawNumber;
}
function updateSapnText(id,depoNumber){
    const currentBalance = document.getElementById(id).innerText;
    var currentBalanceNumber = parseFloat(currentBalance);
    var updateBalance = currentBalanceNumber+depoNumber;
    if(updateBalance<0){
       alert("you cant withdraw");
       return false;
    }
    document.getElementById(id).innerText = updateBalance;
}

