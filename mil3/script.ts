document.getElementById('form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form elements
    const nameElement = document.getElementById('name')as HTMLInputElement;
    const emailElement = document.getElementById('email')as HTMLInputElement;
    const phoneElement = document.getElementById('phone')as HTMLInputElement;
    const educationElement = document.getElementById('education')as HTMLInputElement;
    const experienceElement = document.getElementById('experience')as HTMLInputElement;
    const skillsElement = document.getElementById('skills')as HTMLInputElement;

    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        // Get values
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Create resume output
        const resumeOutput = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        // Display the resume output
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error('The resume output element is missing.');
        }
    } else {
        console.error('One or more form elements are missing.');
    }
});