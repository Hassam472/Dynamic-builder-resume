
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const resumeContent = document.getElementById('resumeContent') as HTMLElement;


resumeForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLInputElement).value;
  const school = (document.getElementById('school') as HTMLInputElement).value;
  const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
  const company = (document.getElementById('company') as HTMLInputElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value;

  
  const resumeHTML = `
    <h2>Full Name</h2>
    <h4>${name}</h4>
    <p><strong>Email:</strong> ${email}</p>

    <h2>Education</h2>
    <p><strong>Degree:</strong> ${education} at ${school}</p>

    <h2>Work Experience</h2>
    <p><strong>Job Title:</strong> ${jobTitle}</p>
    <p><strong>Company:</strong> ${company}</p>

    <h2>Skills</h2>
    <p>${skills.split(',').map(skill => skill.trim()).join(', ')}</p>
  `;


  resumeContent.innerHTML = resumeHTML;
});