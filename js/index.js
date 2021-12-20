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

copyright.innerHTML = `<p> Samantha Galindo &copy;<p> ${thisYear}`;

//Using "DOM Manipulation", append the copyright element to the footer
//hint: appendChild method
footer.appendChild(copyright);

//Create List of Skills
//Open your index.js file
//List your technical skills by creating an Array of String values and store it in a variable named skills

const skills = ["GitHub", "HTML", "JavaScript", "CSS"];
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
    skill.className="mySkills"
 };


 const messageForm = document.querySelector('[name="leave_message"]');
   messageForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const names = e.target.name.value;
      const emails = e.target.email.value;
      const messagesInput = e.target.message.value;
      console.log(names, emails, messagesInput);
     


      const messageSection = document.getElementById("messages");
      const messageList = messageSection.querySelector("ul");
      //console.log(messageList);
      const newMessage = document.createElement("li");
      messageList.appendChild(newMessage);
      newMessage.innerHTML=  ` <a href=mailto:${emails} >     ${names} </a> wrote:  ${messagesInput}`; 
      newMessage.className="messageArrived";
      //newMessage.textContent=messagesInput;
      console.log(newMessage);
      //newMessage.textContent= `<a href=mailto:${emails}> ${names} </a>` 
     
      
//NEEDS MORE WORK, CANNOT SET THE NEWMESSAGE TO THE CONST EMAIL/NAME ALL IN ONE LINK
      //const messageLink = document.createElement('a')
      //newMessage.appendChild(messageLink)
      //messageLink.href =  email
      //messageLink.innerText = names
      

      
      //newMessage.innerHTML=<p> newMessage </p>
      //`<a href=mailto:${emails}> ${names} </a>`  
      

//BUTTON REMOVES ITEMS
      const removeButton = document.createElement("button");
      removeButton.textContent= "Remove";
      console.log(removeButton);
      removeButton.type = "button";
      newMessage.appendChild(removeButton);
      removeButton.className="buttonRemove"

      removeButton.addEventListener("click", () => {

         const entry = removeButton.parentNode;
         entry.remove();
        
      });

      messageList.appendChild(newMessage);
      //console.log(newMessage.innerHTML="<a href='mailto: + email + " '>" + names + "</a> wrote<span>message</span>"
      
   document.querySelector('[name="leave_message"]').reset()   

   });

   
  
   /* Stretch Goals
These tasks are entirely optional, but if you'd like a challenge then do your best to complete each item.

 (Optional) Hide the #messages section when the list is empty
 (Optional) Create an "edit" button for each message entry that allows the user to input a new/modified message*/

  //function resetValues() {
   //document.querySelector('[name="leave_message"]').reset()
  // }
 //resetValues()


//  Create a new XMLHttpRequest object and store it in a variable named githubRequest, add Project section
const githubRequest = new XMLHttpRequest();
githubRequest.open("GET", "https://api.github.com/users/Samgalgo/repos");
githubRequest.send();

githubRequest.addEventListener('load', (event) => {
   console.log('page is fully loaded');
   const responses = JSON.parse(githubRequest.responseText);
   const projectSection = document.getElementById("projects");
   const projectList = projectSection.querySelector("ul");
  
   for (let i = 0; i < responses.length; i++) {
     console.log(responses[i]);
     project = document.createElement("li");
     project.className="projectos";
     project.innerText = responses[i].name;
     projectList.appendChild(project);
   }


 });


//How to link my GITHUB PROJECT NAMES TO THEIR RESPECTIVE URLs
// for (let i = 0; i < responses.length; i++) {
//    console.log(responses[i]);
//    projectLink = document.createElement("a");
//    projectLink.className="projectosLink";
//    projectLink.innerText = responses[i].html_url;
//  }