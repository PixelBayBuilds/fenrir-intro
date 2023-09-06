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
var repositories;
var githubRequest = new XMLHttpRequest();
githubRequest.open('GET','https://api.github.com/users/PixelBayBuilds/repos');
githubRequest.onload = function() {
    repositories = JSON.parse(githubRequest.responseText);
    console.log(repositories);
    renderProjects();
    
};
githubRequest.send();

var projectSection = document.getElementById('projects');
var projectList = projectSection.querySelector('ul');

function renderProjects() {
    for (var i = 0; i < repositories.length; i++) {
         var project = document.createElement("li");
         project.innerText = repositories[i].name;
         projectList.appendChild(project);
    }
}

