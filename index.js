const today = new Date ();
const thisYear = new Date().getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = "Rebecca L " + thisYear;
footer.appendChild(copyright);

/*This is the skills section*/
const skills = ["UX/UI", "Digital Design", "Figma"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");
for (i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

/*This is the messages form*/
const messageForm = document.querySelector('form[name="leave_message"]');
messageForm.addEventListener("submit",function(event){
    event.preventDefault();
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const userMessage = event.target.usersMessage.value;

    console.log("User's Name:", usersName);
    console.log("User's Email:", usersEmail);
    console.log("User's Message:", userMessage);

    event.target.reset();

    // Display Messages in List
    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `
      <a href="mailto:${usersEmail}">${usersName}</a>
      <span>${userMessage}</span>
    `;

    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', function() {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
});

let repositories;

fetch('https://api.github.com/users/PixelBayBuilds/repos')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    repositories = data;
    console.log(repositories);
    renderProjects();
  })
  .catch(error => {
    console.error('Error:', error);
  });

let projectSection = document.getElementById('projects');
let projectList = projectSection.querySelector('ul');

function renderProjects() {
  for (let i = 0; i < repositories.length; i++) {
    var project = document.createElement("li");
    project.innerText = repositories[i].name;
    projectList.appendChild(project);
  }
}


