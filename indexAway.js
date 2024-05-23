//Form give away pet
 // Set initial value to true
const formAway = document.querySelector("form.away");

const catChoice2 = document.getElementById("cat2");
const dogChoice2 = document.getElementById("dog2");

const breadChoice2 = document.getElementById("breed2");
const breedReg = /\d+/;

const maleChoice2 = document.getElementById("male2");
const femaleChoice2 = document.getElementById("female2");
const noneChoice2 = document.getElementById("none2");

const otherDogs2 = document.getElementById("otherDogs2");
const otherCats2 = document.getElementById("otherCats2");
const children2 = document.getElementById("children2");

const first_name2 = document.getElementById("first_name2");
const family_name2 = document.getElementById("family_name2");
const email2 = document.getElementById("email2");
const emailRegEx =  /^[a-zA-Z0–9._+-]+@[a-zA-Z0–9.+-]+\.[a-zA-Z]{2,4}$/;



// Import the checked property from the respective elements
formAway.addEventListener("submit", function(event) {
    let validForm = true;
    event.preventDefault(); // Prevent form submission

    if (!dogChoice2.checked && !catChoice2.checked) {
        alert("You did not choose between Cat or Dog");
        validForm = false;
    }

    if(breadChoice2.value == ""){
        alert("Breed's field is empty");
        validForm = false
    }

    if(breedReg.test(breadChoice2.value)){
        alert("The breed's field cannot contain numbers");
        validForm = false;
    }

    if(!maleChoice2.checked&&!femaleChoice2.checked&&!noneChoice2.checked){
        alert("You did not choose the gender of the pet");
        validForm = false;
    }

    if(!otherDogs2.checked&&!otherCats2.checked&&!children2.checked){
        alert("You did not choose with who the pet would get along");
        validForm = false;
    }

    if(first_name2.value ==null || first_name2.value == ""){
        alert("You did not enter your first name");
        validForm = false;
    }
    
    if(family_name2.value ==null || family_name2.value == ""){
        alert("You did not enter your last name");
        validForm = false;
    }


    if(email2.value ==""){
        alert("You did not enter an email");
        validForm=false;
    }

    if(!email2.value ==""&&!emailRegEx.test(email2.value)){
        alert("The email entered is not valid");
        validForm=false;
    }







    if(validForm){
        formAway.submit();
    }

   
});

// Add validation logic for other form fields here
// For example, you can add event listeners to input fields and update the validForm variable accordingly
