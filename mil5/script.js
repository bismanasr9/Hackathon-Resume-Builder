var _a;
var downloadPdf = document.getElementById('download-pdf');
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // Stop the form from reloading the page
    // Fetch form values
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var education = document.getElementById('education');
    var experience = document.getElementById('experience');
    var skills = document.getElementById('skills');
    // Debug: Console log each value
    console.log("Name: ", name.value);
    console.log("Email: ", email.value);
    console.log("Phone: ", phone.value);
    console.log("Education: ", education.value);
    console.log("Experience: ", experience.value);
    console.log("Skills: ", skills.value);
    // Generate resume output
    var resumeOutput = "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong> <span id=\"edit-name\" contenteditable=\"true\">".concat(name.value, "</span></p>\n        <p><strong>Email:</strong> <span id=\"edit-email\" contenteditable=\"true\">").concat(email.value, "</span></p>\n        <p><strong>Phone Number:</strong> <span id=\"edit-phone\" contenteditable=\"true\">").concat(phone.value, "</span></p>\n        <h3>Education</h3> \n        <p id=\"edit-education\"contenteditable=\"true\">").concat(education.value, "</p>\n        <h3>Experience</h3>\n        <p id=\"edit-experience\" contenteditable=\"true\">").concat(experience.value, "</p>\n        <h3>Skills</h3>\n        <p id=\"edit-skills\" contenteditable=\"true\">").concat(skills.value, "</p>\n    ");
    // Display resume in the output div
    var resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    }
    else {
        console.error('The resume output element is missing.');
    }
});
downloadPdf.addEventListener('click', function () {
    window.print();
});
