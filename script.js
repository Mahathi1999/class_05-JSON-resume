//for in loop in javascript
for (var key in resumeData) {
  if (resumeData.hasOwnProperty(key)) {
    var value = resumeData[key];
    console.log(key + ": " + value);
  }
}

//for of in javascript
for (var skill of resumeData.skills) {
  console.log(skill);
}

//For each loop in javascript
resumeData.skills.forEach(function (skill) {
  console.log(skill);
});

// For loop
for (var i = 0; i < resumeData.education.length; i++) {
  var education = resumeData.education[i];
  console.log("Degree: " + education.degree);
  console.log("University: " + education.university);
  console.log("Year: " + education.year);
  console.log("----------------------");
}
