const today = new Date ();
const presentYear = today.getFullYear()
const thisYear = presentYear.toString();
thisYear;


const footer = document.querySelector("footer");

//Create a new paragraph (p) element and store it in a variable named copyright
//hint: createElement method
const copyright = document.createElement("p");

//Set the inner HTML of your copyright element to display your name and the current year
//hint: use thisYear variable from earlier

copyright.innerHTML = `<p> azul &copy;<p> ${thisYear}`;

//Using "DOM Manipulation", append the copyright element to the footer
//hint: appendChild method
footer.appendChild(copyright);

//Create List of Skills
//Open your index.js file
//List your technical skills by creating an Array of String values and store it in a variable named skills

const skills = ["Decent knowldege on common operating systems: Apple MacOS, Chrome OS, Windows", 
"Computer programs and Software: G Suite, Zoom, Slack, Trello, GitHub", "Project planning: Meeting Facilitating", "Technical Support"];
//Using "DOM Selection", select the #skills section by id and store it in a variable named skillsSection
//hint: querySelector or getElementById method
skillsSection = document.getElementById("skills");
 
//Using "DOM Selection", query the skillsSection (instead of the entire document) to find the <ul> element and store it in a variable named skillsList
skillsList = skillsSection.querySelector("ul");
//Create a for loop to iterate over your skills Array, starting at index 0
//Inside the loop, create a new list item (li) element and store it in a variable named skill
//hint: createElement method
 for (let i = 0; i < skills.length; i++) {
    skill = document.createElement("li");
    skill.innerText = skills[i]
    skillsList.appendChild(skill);
 };
