// Define the resume data object
var resumeData = {
  name: "John Doe",
  email: "johndoe@example.com",
  phone: "123-456-7890",
  address: "123 Main Street, New York, NY",
  summary:
    "Experienced web developer with a passion for creating user-friendly and visually appealing websites.",
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      university: "ABC University",
      year: 2015,
    },
    {
      degree: "High School Diploma",
      school: "XYZ High School",
      year: 2011,
    },
  ],
  experience: [
    {
      position: "Senior Web Developer",
      company: "XYZ Company",
      startDate: "2016-01-01",
      endDate: "2021-12-31",
      responsibilities: [
        "Developed and maintained company website using HTML, CSS, and JavaScript.",
        "Implemented responsive design to ensure optimal user experience across devices.",
        "Collaborated with cross-functional teams to gather requirements and deliver projects on time.",
      ],
    },
    {
      position: "Web Developer",
      company: "ABC Inc.",
      startDate: "2014-01-01",
      endDate: "2015-12-31",
      responsibilities: [
        "Assisted in the development of e-commerce websites using PHP and MySQL.",
        "Performed website testing and bug fixes to ensure functionality and performance.",
        "Worked closely with designers to implement website mockups.",
      ],
    },
  ],
  skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Responsive Design"],
};

// Convert the resume data object to JSON
var jsonData = JSON.stringify(resumeData, null, 2);

// Output the JSON data
console.log(jsonData);
