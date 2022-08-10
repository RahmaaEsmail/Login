var emailSign=document.getElementById('emailSign');
var userName=document.getElementById('userName');
var passSign=document.getElementById('passSign');
var confirmBtn=document.getElementById('confirmBtn');
var inputs=document.querySelectorAll('input');
var requireInfo=document.getElementById('requireInfo');
var infoList=[];

if(JSON.parse(localStorage.getItem('PersonalInfo'))!=null)
{
    // infoList=[];
    infoList=JSON.parse(localStorage.getItem('PersonalInfo'))
}
// else 
// {
    
// }



// confirmBtn.onclick=function(){
//     if(emailSign.value=='' || userName.value=='' || passSign.value=='')
//     {
//         requireInfo.classList.remove('d-none');
       
        
//     }
//     else{
//             requireInfo.classList.add('d-none');
//             signUp();

// }
// }


function signUp()
{
    if(emailSign.value=='' || userName.value=='' || passSign.value=='')
    {
        requireInfo.classList.remove('d-none');
        return false;
        
    }
    else{
       
     userInputsValidation();
     isExist();
       if(userInputsValidation()==true && isExist()==false)
       {
        var personalInfo={
            email:emailSign.value,
            name:userName.value,
            password:passSign.value
        }
        console.log(personalInfo);
        if(emailSign.value=='' || userName.value=='' || passSign.value=='')
        {
            requireInfo.classList.remove('d-none');
            return false;
            
        }
                 requireInfo.classList.add('d-none');
                confirmBtn.removeAttribute('disabled')
                infoList.push(personalInfo)
                console.log(infoList);
                localStorage.setItem('PersonalInfo',JSON.stringify(infoList));
                confirmBtn.removeAttribute('disabled');
                resetForm();
                return true;
    }
       
    
       else{
        // var tryAgain = document.getElementById('tryAgain');
        // tryAgain.classList.replace('d-none','d-block');
        // confirmBtn.disabled='true'
       }
}}

function resetForm()
{
  for(var i=0;i<inputs.length;i++)
  {
    inputs[i].value=''
  }
}



function userNameValidation()
{
    var userNameAlert=document.getElementById('nameDanger');
    var regexName=/^[A-Za-z]{3,10}(\s?[a-zA-Z]{3,10})?$/  //rahmaahmed  or rahma ahmed
    if(regexName.test(userName.value)==true && userName.value!='')
    {
        userName.classList.add('is-valid');
        userName.classList.remove('is-invalid');
        userNameAlert.classList.replace('d-block','d-none');
        confirmBtn.removeAttribute('disabled');
        return true;
    }
    else 
    {
        userName.classList.add('is-invalid');
        userName.classList.remove('is-valid');
        userNameAlert.classList.replace('d-none','d-block');
        confirmBtn.disabled='true';
        return false;
    }
}

function userPassValidation()
{
    var regexPass=/^.{5,15}$/;
    var passwordAlert=document.getElementById('passDanger');

    if(regexPass.test(passSign.value)==true && passSign.value!='')
    {
        passSign.classList.add('is-valid');
        passSign.classList.remove('is-invalid');
        passwordAlert.classList.replace('d-block','d-none');
        confirmBtn.removeAttribute('disabled');
        return true;
    }
    else{
        passSign.classList.add('is-invalid');
        passSign.classList.remove('is-valid');
        passwordAlert.classList.replace('d-none','d-block');
        confirmBtn.disabled='true';
        return false;
    }
}


function userEmailValidation()
{
    var regexEmail=/^[a-zA-Z0-9]{5,}@(gmail|yahoo).com$/
    var userEmailAlert=document.getElementById('signEmailDanger');
    if(regexEmail.test(emailSign.value) ==true && emailSign.value !='')
    {
        emailSign.classList.add('is-valid');
        emailSign.classList.remove('is-invalid');
        userEmailAlert.classList.replace('d-block','d-none');
        // confirmBtn.removeAttribute('disabled');
        // confirmBtn.disabled='false';
        return true;
    }
    else
    {
        emailSign.classList.add('is-invalid');
        emailSign.classList.remove('is-valid');
        userEmailAlert.classList.replace('d-none','d-block');
        // confirmBtn.disabled='true';
        return false;
    }
}



function userInputsValidation()
{
    userNameValidation();
    userPassValidation();
    userEmailValidation();
    if(userNameValidation()==true && userPassValidation()==true && userEmailValidation()==true )
    {
        return true;
    }
    else
    {
        return false ;
    }
}



function isExist()
{
  var emailExist =document.getElementById('emailExist');
  for(var i=0;i<infoList.length;i++)
  {

    if(infoList[i].email == emailSign.value)
    {
        emailSign.classList.remove('is-valid')
        emailSign.classList.add('is-invalid')
        emailExist.classList.replace('d-none','d-block');
        confirmBtn.disabled='true'
        return true;
    }
    else
    {
        emailSign.classList.remove('is-invalid')
        emailSign.classList.add('is-valid')
        emailExist.classList.replace('d-block','d-none');
        return false;
    }
  }
}

var user=localStorage.getItem('userName')
function Login()
{
    var emailLogin=document.getElementById('emailLogin');
    var passLogin=document.getElementById('passLogin');
    var loginBtn=document.getElementById('loginBtn');
    var invalidInfo=document.getElementById('invalidInfo');
    if(emailLogin.value=='' || passLogin.value =='')
    {
        var loginRequire=document.getElementById('loginRequire');
        loginRequire.classList.replace('d-none','d-block')
        return false;
    }
   
  else{
    var loginRequire=document.getElementById('loginRequire');
    loginRequire.classList.replace('d-block','d-none')
    for (var i=0;i<infoList.length;i++)
    {
        if(infoList[i].email==emailLogin.value && infoList[i].password==passLogin.value)
        {
            localStorage.setItem('userName',infoList[i].name)
            loginBtn.setAttribute('href','welcome.html')
        }
        else{
            invalidInfo.classList.replace('d-none','d-block')
        }
    }
}
}

function displayWelcomeUser() {
     document.getElementById('Username').innerHTML='Welcome ' + user
}


function logout()
{
    localStorage.removeItem('userName');
}