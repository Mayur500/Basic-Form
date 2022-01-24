const error = document.querySelector(".error");

const resetting = () => {
    const emplform = document.getElementById("employee_form");
    emplform.reset();
}

const submitform = () => {
 let inputs = document.querySelectorAll("input");
 inputs = Array.from(inputs);
 inputs.splice(3,2);
 const marr_status = document.getElementById("marriage-status");
 for(let inp of inputs){

    if(marr_status.value === "unmarried" && inp.dataset.name==="Spouse"){
        continue;
    }

        if(inp.value.trim().length === 0 ){
            error.innerHTML = `Please enter the ${inp.dataset.name}`;
            error.style.color= "rgb(204, 73, 73)";
            inp.focus();
            return false;
        }
     if(inp.value.trim().indexOf(' ') >= 0){
        error.innerHTML = `${inp.dataset.name} Should not contains White Spaces`;
        error.style.color= "rgb(204, 73, 73)";
        inp.focus();
        return false;
     }
     if(/^[A-Za-z]+$/.test(inp.value.trim())===false){
        error.innerHTML = `${inp.dataset.name} Should contains letters only`;
        error.style.color= "rgb(204, 73, 73)";
        inp.focus();
        return false;

     }
     
 }
 error.innerHTML= "Thank You";
 error.style.color= "green";
return false;
}

const marriage = ()=>{
const marr_status = document.getElementById("marriage-status");
const spouse = document.querySelector(".form-item3");
if (marr_status.value === "married") {

    spouse.children[1].readOnly=false;
    spouse.children[1].classList.add("spouse-toggle"); 
}
else{ 
    spouse.children[1].value= "";
    spouse.children[1].readOnly =true; 
    spouse.children[1].classList.remove("spouse-toggle"); 
}

}