//Form give find pet
 // Set initial value to true
 const formFind = document.querySelector("form.find");

 const catChoice = document.getElementById("cat");
 const dogChoice = document.getElementById("dog");
 
 const breadChoice = document.getElementById("breed");
 const breedReg = /\d+/;
 const breedNone = document.getElementById("breed_not");
 
 const maleChoice = document.getElementById("male");
 const femaleChoice = document.getElementById("female");
 const noneChoice = document.getElementById("none");
 
 const otherDogs = document.getElementById("otherDogs");
 const otherCats = document.getElementById("otherCats");
 const children = document.getElementById("children");
 
 const quality1 = document.getElementById("quality1");
 const quality2 = document.getElementById("quality2");
 const quality3 = document.getElementById("quality3");


breedNone.addEventListener('click',function(){
    if(breedNone.checked){
        breadChoice.classList.add('disable_section');
    }else{
        breadChoice.classList.remove('disable_section');
    }
})

 // Import the checked property from the respective elements
 formFind.addEventListener("submit", function(event) {
     let validForm = true;
     event.preventDefault(); // Prevent form submission
 
     if (!dogChoice.checked && !catChoice.checked) {
         alert("You did not choose between Cat or Dog");
         validForm = false;
     }
 
     if(breadChoice.value == "" && !breedNone.checked){
         alert("Breed's field is empty or does not matter had not been choosen");
         validForm = false
     }
 
     if(breedReg.test(breadChoice.value)){
         alert("The breed's field cannot contain numbers");
         validForm = false;
     }

 
     if(!maleChoice.checked&&!femaleChoice.checked&&!noneChoice.checked){
         alert("You did not choose the gender of the pet");
         validForm = false;
     }
 
     if(!otherDogs.checked&&!otherCats.checked&&!children.checked){
         alert("You did not choose with who the pet would get along");
         validForm = false;
     }
 
     if(quality1.value =="" && quality2.value==""&& quality3.value==""){
        alert("You did not list any quality for your pet");
        validForm = false;
     }else{
        if(quality1.value ==""){
            alert("The first quality is missing");
            validForm=false;
        }
        if(quality2.value ==""){
            alert("The second quality is missing");
            validForm=false;
        }
        if(quality3.value ==""){
            alert("The third quality is missing");
            validForm=false;
        }
     }
 
 
     if(validForm){
         formFind.submit();
     }
 
    
 });
 
 // Add validation logic for other form fields here
 // For example, you can add event listeners to input fields and update the validForm variable accordingly
 