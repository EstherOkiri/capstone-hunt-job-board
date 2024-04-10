// Search
var jobs = [
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
  }
]
const params = new URLSearchParams(window.location.search);
const titleSearch = params.get('title');
const filterSearchInput = params.get('filter-search-input')

   // Filter jobs based on title
const filteredJobs = jobs.filter(job =>

    job.jobTitle.toLowerCase().includes(titleSearch.toLowerCase()) ||
    job.type.toLowerCase().includes(titleSearch.toLowerCase()) ||
    job.location.toLowerCase().includes(titleSearch.toLowerCase())

)
// Display filtered jobs
const resultsContainer = document.getElementById('results-container');
        filteredJobs.forEach(job => {
            const jobElement = document.createElement('div');
            jobElement.innerHTML = `
                <h1>${job.jobTitle}</h1>
                <h2><strong>Location:</strong> ${job.location}</h2>
                <h3>${job.type}</h3>
                <p>${job.description}</p>
            `;
            resultsContainer.appendChild(jobElement);
        });

        if (filteredJobs.length === 0) {
            resultsContainer.innerHTML = '<p>No jobs found</p>';
        }
 



