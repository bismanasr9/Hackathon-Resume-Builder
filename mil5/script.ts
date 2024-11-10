const downloadPdf = document.getElementById('download-pdf') as HTMLButtonElement

document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the form from reloading the page

    // Fetch form values
    const name = document.getElementById('name') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const phone = document.getElementById('phone') as HTMLInputElement;
    const education = document.getElementById('education') as HTMLTextAreaElement;
    const experience = document.getElementById('experience') as HTMLTextAreaElement;
    const skills = document.getElementById('skills') as HTMLTextAreaElement;

    // Debug: Console log each value
    console.log("Name: ", name.value);
    console.log("Email: ", email.value);
    console.log("Phone: ", phone.value);
    console.log("Education: ", education.value);
    console.log("Experience: ", experience.value);
    console.log("Skills: ", skills.value);

    // Generate resume output
    const resumeOutput = `
        <h2>Resume</h2>
        <p><strong>Name:</strong> <span id="edit-name" contenteditable="true">${name.value}</span></p>
        <p><strong>Email:</strong> <span id="edit-email" contenteditable="true">${email.value}</span></p>
        <p><strong>Phone Number:</strong> <span id="edit-phone" contenteditable="true">${phone.value}</span></p>
        <h3>Education</h3> 
        <p id="edit-education"contenteditable="true">${education.value}</p>
        <h3>Experience</h3>
        <p id="edit-experience" contenteditable="true">${experience.value}</p>
        <h3>Skills</h3>
        <p id="edit-skills" contenteditable="true">${skills.value}</p>
    `;

    // Display resume in the output div
    const resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        
    } else {
        console.error('The resume output element is missing.');
    }
});

downloadPdf.addEventListener('click',()=>{      
    window.print() 
})