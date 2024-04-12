// Search
const jobs = [
  {
    jobId: 1,
    jobTitle: 'Senior Web Developer',
    location: 'Mombasa',
    country: 'Kenta',
    type: 'Full Time',
    salary: 250000,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    
  },
  {
    jobId: 2,
    jobTitle: 'Marketing Executive',
    location: 'Nairobi',
    country:'Kenya',
    type: 'Full Time',
    salary: 80000,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    jobId: 3,
    jobTitle: 'Cyber Security Expert',
    location: 'Nakuru',
    country: 'Kenya',
    type: 'Full Time',
    salary: 180000,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    jobId: 4,
    jobTitle: 'facilities manager',
    location: 'Mombasa',
    country: 'Kenya',
    type: 'Full Time',
    salary: 70000,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    jobId: 5,
    jobTitle: 'Lawyer',
    location: 'Eldoret',
    country: 'Kenya',
    type: 'Full Time',
    salary: 70000,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    jobId: 9,
    jobTitle: 'Head of Operations',
    location: 'Nairobi',
    country: 'Kenya',
    type: 'Full Time',
    salary: 100000,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    jobId: 10,
    jobTitle: 'Intern',
    location: 'Eldoret',
    country: 'Kenya',
    type: 'Part Time',
    salary: 40000,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
]
document.addEventListener('DOMContentLoaded', function(){
  //get form
document.getElementById("search-jobs").addEventListener("submit", function(event){
  event.preventDefault();
  //get values
  const resultContainer = document.getElementById('results-container');
    const searchInput = document.getElementById("title-search-input").value.toLowerCase();
    // console.log(searchInput);
    
    for (i = 0; i < jobs.length; i++){
      if(jobs[i].jobTitle.toLocaleLowerCase().includes(searchInput)){
        const result = jobs[i];
        console.log(result);
        const resultElement = document.createElement('div');
        resultElement.classList.add('search-result');
        resultElement.innerHTML = `
        <h1> ${jobs.jobTitle}</h1>
        <p> Location: ${jobs.location}, ${jobs.country}</p>
        `;
        resultContainer.appendChild(resultElement);
        
      }
    }
})
})

//contact form-js
function submitForm() {

 alert("Thank you for your contacting Hunt. We have received your message and we'll get back to you.");

}

//application submission form
function submitApplication(){
  
  alert("Your application was submitted successfuly!");

}
        


