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