const resumeForm = document.getElementById('resumeForm');
const resumeContent = document.getElementById('resumeContent');
resumeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const education = document.getElementById('education').value;
    const school = document.getElementById('school').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const company = document.getElementById('company').value;
    const skills = document.getElementById('skills').value;
    const resumeHTML = `
    <h1>Generated Resume</h1>
    <hr height="20px" color="black">
    <h2>Personal Information</h2>
    <p><strong>Full Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <br><hr height="20px" color="black"><br>

    <h2>Education</h2>
    <p><strong>Degree:</strong> ${education} at ${school}</p>
    <br><hr height="20px" color="black"><br>

    <h2>Work Experience</h2>
    <p><strong>Job Title:</strong> ${jobTitle}</p>
    <p><strong>Company:</strong> ${company}</p>
    <br><hr height="20px" color="black"><br>

    <h2>Skills</h2>
    <p>${skills.split(',').map(skill => skill.trim()).join(', ')}</p>
    <br><hr height="20px" color="black"><br>
  `;
    resumeContent.innerHTML = resumeHTML;
    if (resumeHTML) {
        resumeForm.style.display = "none";
    }
});

