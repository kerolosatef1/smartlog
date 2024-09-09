const signUpName=document.querySelector('#signUpName');
const signUpEmail=document.querySelector('#signUpEmail');
const signUpPassword=document.querySelector('#signUpPassword');
const signbtn=document.querySelector('#signBtn');
const emailExit=document.querySelector('#exit')
let users=[];
if(localStorage.getItem('users')!=null){
    users=JSON.parse(localStorage.getItem('users'));
}

function signUP(){
    if(signUpName.value=='' && signUpEmail.value=='' && signUpPassword.value==''){
        emailExit.innerHTML=`<span class="alert alert-danger">All fields are required</span>`,Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "All fields are required",
         
          });
       
    }
   else if(signUpName.value=!null && signUpEmail.value=='' && signUpPassword.value==''){
        emailExit.innerHTML=`<span class="alert alert-danger">Please Enter Email and Password</span>`,Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Enter Email and Password",
         
          });
       
    }
    else if(signUpName.value!=null && signUpEmail.value!=null && signUpPassword.value==''){
        emailExit.innerHTML=`<span class="alert alert-danger">Please Enter  Password</span>`,Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Enter  Password",
         
          });
       
    }

    else if(signUpName.value!=null && signUpEmail.value=="" && signUpPassword.value!=null){
        emailExit.innerHTML=`<span class="alert alert-danger">Please Enter  Email</span>`,Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Enter  Email",
         
          });
       
    }
    else if(signUpName.value=="" && signUpEmail.value!=null&& signUpPassword.value!=null){
        emailExit.innerHTML=`<span class="alert alert-danger">Please Enter  Name</span>`,Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Enter  Name",
         
          });
       
    }
    else if(signUpName.value=="" && signUpEmail.value=="" && signUpPassword.value!=null){
        emailExit.innerHTML=`<span class="alert alert-danger">Please Enter  Name and Email</span>`,Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Enter  Name and Email",
         
          });
       
    }
    else if(signUpName.value=="" && signUpEmail.value!=null && signUpPassword.value==""){
        emailExit.innerHTML=`<span class="alert alert-danger">Please Enter  Name and Email</span>`,Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Enter  Name and Password",
         
          });
       
    }
  
    else{
        if(validateInputs(signUpEmail,'msgName')&&validateInputs(signUpPassword,'msgURL')){
        for(let i=0;i<users.length;i++){
            if(users[i].email.toLowerCase()==signUpEmail.value.toLowerCase()){
                emailExit.innerHTML=`<span class="alert alert-danger">Email already exists</span>`,Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Email already exist!",
                  });
                return false;
            }
        }
        addUser();
        emailExit.innerHTML=`<span class="alert alert-success">Success</span>`;
    }
    else{
        emailExit.innerHTML=`<span class="alert alert-danger">Invalid email or password</span>`;
        clearForm();
        return false;
    }
}
}

function addUser(){
    let user={
        name:signUpName.value,
        email:signUpEmail.value,
        password:signUpPassword.value
    }
    users.push(user); 
    localStorage.setItem('users',JSON.stringify(users));
    window.open('./Newfolder/Home.html','_self'  );
}
console.log(signbtn);

signbtn?.addEventListener('click',function(){
    signUP();
});





const signInpass=document.querySelector('#signinPassword');
const signInEmail=document.querySelector('#signinEmail');
const logINbtn=document.querySelector('#logBtn');
const boxCorrect=document.querySelector('#incorrect');
function signIn(){
    if(signInEmail.value=='' || signInpass.value==''){
        boxCorrect.innerHTML=`<span class="alert alert-danger">All fields are required</span>`;
    }
    else{
      
        for(let i=0;i<users.length;i++){
            if(users[i].email.toLowerCase()==signInEmail.value.toLowerCase() && users[i].password==signInpass.value){
                boxCorrect.innerHTML=`<span class="alert alert-success">Logged in successfully</span>`;
                localStorage.setItem('currentUser',JSON.stringify(users[i].name));
                window.open('./Index.html','_self');
                return false;
            }
        }
        boxCorrect.innerHTML=`<span class="alert alert-danger">Invalid email or password</span>`;
    }

}


logINbtn?.addEventListener('click',function(){
    signIn();
});



const showName=document.querySelector('#username')
let currentUser=localStorage.getItem('currentUser');

if(currentUser!=null){
    showName.innerHTML=`Welcome ${currentUser}`;
}










const logoutbtn=document.querySelector('#logOut');


function logout(){
    localStorage.removeItem('currentUser');
    window.open('./Home.html','_self');
}















function validateInputs(element,msgID){
    var msg=document.getElementById(msgID)
      var regexInputs={
        signUpEmail:/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        signUpPassword:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
      }
  
    if(regexInputs[element.id].test(element.value)==true){
      element.classList.add('is-valid');
     element.classList.remove('is-invalid');
     msg.classList.add('d-none')
     return true
    }
    else{
     element.classList.add('is-invalid');
     element.classList.remove('is-valid');
     msg.classList.remove('d-none')
  
     return false
    }
  }
  
  function clearForm() {
    signUpName.value='';
    signUpPassword.value='';
    signUpEmail.value='';
    signUpEmail.classList.remove('is-valid')
    signUpPassword.classList.remove('is-valid')
}