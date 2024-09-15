//listing element
document.getElementById('resumeform')?.addEventListener('submit' , function(event){
    event?.preventDefault();

    // type asserations for resume form submission
const nameElement = document.getElementById('name') as HTMLInputElement;
const emailElement = document.getElementById('email') as HTMLInputElement;
const phoneElement = document.getElementById('phone') as HTMLInputElement;
const educationElement = document.getElementById('education') as HTMLInputElement;
const experieneceElement = document.getElementById('experience') as HTMLInputElement;
const skillsElement = document.getElementById('skills') as HTMLInputElement;

if (nameElement && emailElement && phoneElement && educationElement && experieneceElement && skillsElement){

    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experieneceElement.value;
    const skills = skillsElement.value;

   //creat resume output
   const resumeOutput = `
   <h2>Resume</h2>
   <p><strong> Name:</strong><span id="edit_name"  class="editable"> ${email}<span></p>
   <p><strong>fname:</strong><span id="edit_fname" class="editable"> ${email}<span></p>
   <p><strong>Email:</strong> <span id="edit_email"  class="editable">${email}<span></p>
   <p><strong>Phone Number:</strong> <span id="edit_phone"  class="editable">${phone}<span></p>

   <h3>Education</h3>
   <p id="edit_education"  class="editable">${education}</p>

   <h3>Experience</h3>
   <p id="edit_experience"  class="editable">${experience}</p>

   <h3>Skills</h3>
   <p id="edit_phone"  class="editable">${skills}</p>`;

   const resumeOutputElement = document.getElementById('resumeOutput');
   if (resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput;
    makeEditable();
   }
   
}else{
    console.error("make or more form elements are missing");
}

});

function makeEditable(){}
const editableElement = document.querySelectorAll('editable');
editableElement.forEach(element => {
    element.addEventListener('click', function(){
       const currentElement= element as HTMLElement;
       const currentValue = currentElement.textContent || "";

    //    replace contant
    if (currentElement.tagName === "p" || currentElement.tagName === "span"){
        const input = document.createElement("input");
        input.type = "text";
        input.value = currentValue;
        input.classList.add("aditing input");



        input.addEventListener('blur', function(){
            currentElement.textContent = input.value;
            currentElement.style.display = 'inline';
            input.remove();

        });

        currentElement.style.display = "none";
        currentElement.parentNode?.insertBefore(input, currentElement);
        input.focus();
    }


})
});

