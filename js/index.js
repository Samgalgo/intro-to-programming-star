const today = new Date ();
const presentYear = today.getFullYear()
const thisYear = presentYear.toString();
thisYear;


const footer = document.querySelector("footer");

//Create a new paragraph (p) element and store it in a variable named copyright
const copyright = document.createElement("p");
copyright.className="copyrights"

//Set the inner HTML of your copyright element to display your name and the current year
copyright.innerHTML = `<p> &copy; Samantha Galindo   </p> ${thisYear}`;

//Using "DOM Manipulation", append the copyright element to the footer
footer.appendChild(copyright);

//Create List of Skills
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
      newMessage.innerHTML=  ` <a  class="msgComing" href=mailto:${emails} >     ${names} </a> wrote:  ${messagesInput}`; 
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

//  Chain a then method to your fetch call and pass it a function that returns the response JSON data
//  Chain another then method and pass it a function, inside of which you can paste the code from your previous "load" event listener function
//  Delete the XmlHttpRequest code from the previous lesson, including the event listener
//  Save and refresh your browser
// You should see the same list of repositories displayed on your webpage
   fetch("https://api.github.com/users/Samgalgo/repos")
   .then(res => res.json())
   .then(data => {
      let projectSection = document.getElementById("projects");
      let projectList = projectSection.querySelector("ul");
     
      for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        let project = document.createElement("li");
        project.className="projectos";
        project.innerHTML = `<a class="linkRepos" href="${data[i].html_url}" target="_blank"> ${data[i].name} </a>`;
        projectList.appendChild(project);
        
      }});
   



