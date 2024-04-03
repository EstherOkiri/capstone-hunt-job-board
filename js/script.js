// Search
var jobs = [
  {
    jobId: 1,
    jobTitle: 'Senior Web Developer',
    location: 'Mombasa',
    country: 'Kenta',
    type: 'Full Time',
    salary: 250000
  },
  {
    jobId: 2,
    jobTitle: 'Marketing Executive',
    location: 'Nairobi',
    country:'Kenya',
    type: 'Full Time',
    salary: 80000
  },
  {
    jobId: 3,
    jobTitle: 'Cyber Security Expert',
    location: 'Nakuru',
    country: 'Kenya',
    type: 'Full Time',
    salary: 180000
  },
  {
    jobId: 4,
    jobTitle: 'facilities manager',
    location: 'Mombasa',
    country: 'Kenya',
    type: 'Full Time',
    salary: 70000
  },
]
const params = new URLSearchParams(window.location.search);
        const keywords = params.get('keywords');

searchbtn = document.getElementById('search-button');
searchbtn.addEventListener('click', function() {
  var titleSearch = document.getElementById('search-input').value.trim().toString().toLowerCase();
  var resultsContainer = document.getElementById('results-container');
  resultsContainer.innerHTML = '';

   // Filter jobs based on keywords
   var filteredJobs = jobs.filter(function(job) {
    return 
        job.title.toLowerCase().includes(titleSearch) ||
        job.company.toLowerCase().includes(titleSearch) ||
        job.location.toLowerCase().includes(titleSearch) ||
        job.description.toLowerCase().includes(titleSearch);
});
// Display filtered jobs
filteredJobs.forEach(function(job) {
  var jobElement = document.createElement('div');
  jobElement.classList.add('job');
  jobElement.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p>${job.description}</p>
  `;
  resultsContainer.appendChild(jobElement);
});

if (filteredJobs.length === 0) {
  resultsContainer.innerHTML = '<p>No jobs found</p>';
}
});

//  titleSearchInput.addEventListener('input', e =>{
//   const searchValue = e.target.value.toLowerCase();
//   return searchValue;
//  } )
 


//Google Sign in
function handleCredentialResponse(response) {
  // decodeJwtResponse() is a custom function defined by you
  // to decode the credential response.
  const responsePayload = decodeJwtResponse(response.credential);

  console.log("ID: " + responsePayload.sub);
  console.log('Full Name: ' + responsePayload.name);
  console.log('Given Name: ' + responsePayload.given_name);
  console.log('Family Name: ' + responsePayload.family_name);
  console.log("Image URL: " + responsePayload.picture);
  console.log("Email: " + responsePayload.email);
}