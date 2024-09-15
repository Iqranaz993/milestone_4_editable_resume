var _a;
//listing element
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    // type asserations for resume form submission
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experieneceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experieneceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experieneceElement.value;
        var skills = skillsElement.value;
        //creat resume output
        var resumeOutput = "\n   <h2>Resume</h2>\n   <p><strong> Name:</strong><span id=\"edit_name\"  class=\"editable\"> ".concat(email, "<span></p>\n   <p><strong>fname:</strong><span id=\"edit_fname\" class=\"editable\"> ").concat(email, "<span></p>\n   <p><strong>Email:</strong> <span id=\"edit_email\"  class=\"editable\">").concat(email, "<span></p>\n   <p><strong>Phone Number:</strong> <span id=\"edit_phone\"  class=\"editable\">").concat(phone, "<span></p>\n\n   <h3>Education</h3>\n   <p id=\"edit_education\"  class=\"editable\">").concat(education, "</p>\n\n   <h3>Experience</h3>\n   <p id=\"edit_experience\"  class=\"editable\">").concat(experience, "</p>\n\n   <h3>Skills</h3>\n   <p id=\"edit_phone\"  class=\"editable\">").concat(skills, "</p>");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error("make or more form elements are missing");
    }
});
function makeEditable() { }
var editableElement = document.querySelectorAll('editable');
editableElement.forEach(function (element) {
    element.addEventListener('click', function () {
        var _a;
        var currentElement = element;
        var currentValue = currentElement.textContent || "";
        //    replace contant
        if (currentElement.tagName === "p" || currentElement.tagName === "span") {
            var input_1 = document.createElement("input");
            input_1.type = "text";
            input_1.value = currentValue;
            input_1.classList.add("aditing input");
            input_1.addEventListener('blur', function () {
                currentElement.textContent = input_1.value;
                currentElement.style.display = 'inline';
                input_1.remove();
            });
            currentElement.style.display = "none";
            (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
            input_1.focus();
        }
    });
});
