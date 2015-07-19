/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var header={
 	"headerName":"Pavalavel Ramesh",
 	"headerRole":"Front-End Web Developer",
 }

 var contacts={
 	"type":"Skype",
 	"id":"Pavalavel Ramesh",
 	"mobile":9840684579,
 	"email":"pavalavel.r1@gmail.com",
 	"twitter":"@pavalavel_r",
 	"gitHub":"https://github.com/pavalavel",
 	"location":"Chennai"
 }

 var bio={
 	"pic":"images/Pavalavel.jpg",
 	"message":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
 }

 var skills=["HTML 5", "CSS 3", "JavaScript", "jQuery", "KnockoutJs", "Bootstrap", "Git", "GitHub"]
 
 var work={
 	"employer":"Deutsche Bank",
 	"title":"Sales Manager",
	"dates":'2013-2014',
	"location":"Chennai",
	"description":"Acquiring new clients to the bank"
 }

 var projects={
 	"project":[
 	{
 		"title":"project1",
 		"dates":"june 2015",
 		"description":"Lorem ipsum",
 		"image":"images/pavalavel"
 	},
 	{
 		"title":"project2",
 		"dates":"june 2015",
 		"description":"Lorem ipsum",
 		"image":"images/pavalavel"
 	},
 	{
 		"title":"project3",
 		"dates":"june 2015",
 		"description":"Lorem ipsum",
 		"image":"images/pavalavel"
 	},
 	{
 		"title":"project4",
 		"dates":"june 2015",
 		"description":"Lorem ipsum",
 		"image":"images/pavalavel"
 	},
 	{
 		"title":"project5",
 		"dates":"june 2015",
 		"description":"Lorem ipsum",
 		"image":"images/pavalavel"
 	}
 	]}

 var schools={
 	"school":[
		{
			"name":"Velammal Engineering college",
			"degree":"MBA",
			"dates":"2011-2013",
			"location":"Chennai",
			"major":"Marketing"
		},
		{
			"name":"Alpha Arts and Science",
			"degree":"B.sc",
			"dates":"2008-2011",
			"location":"Chennai",
			"major":"Computer Science"
		}
 	]
 }

var onlineClasses={
	"title":"Front-End Web Developer Nanodegree",
	"school":"Udacity",
	"dates":"2014-2015",
	"url":"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
}

 var displayHeader=function(){

 	var name=HTMLheaderName.replace("%data%",header.headerName);
 	var role=HTMLheaderRole.replace("%data%",header.headerRole);
 	var total=name+role;
 	
 	$('#header').append(total);
 };
 displayHeader();

 var displayContact=function(){

 	var generic=HTMLcontactGeneric.replace("%contact%",contacts.type).replace("%data%",contacts.id);
 	var mobile=HTMLmobile.replace("%data%", contacts.mobile);
 	var email=HTMLemail.replace("%data%", contacts.email);
 	var github=HTMLgithub.replace("%data%", contacts.gitHub);

 	var totalTop=generic+mobile+email+github;
	$('#topContacts').append(totalTop);

	var twitter=HTMLtwitter.replace("%data%",contacts.twitter);
	var location=HTMLlocation.replace("%data%",contacts.location);
	var totalFooter=twitter+location;
	$('#footerContacts').append(totalFooter);
 };
displayContact();

var displayBio=function(){
	var pic=HTMLbioPic.replace("%data%", bio.pic);
	var message=HTMLwelcomeMsg.replace("%data%",bio.message);
	var totalBioTop=pic+message;
	$('#header').append(totalBioTop);
};
displayBio();

var displaySkills=function(){
	$('#header').append(HTMLskillsStart);
	for (var i = 0; i < skills.length; i++) {
		var skill=HTMLskills.replace("%data%",skills[i]);
	$('#skills').append(skill);
	};
}
displaySkills();

var displayWorkExp=function(){

	$('#workExperience').append(HTMLworkStart);
		var employer=HTMLworkEmployer.replace("%data%",work.employer);
		var title=HTMLworkTitle.replace("%data%",work.title);
		var dates=HTMLworkDates.replace("%data%",work.dates);
		var location=HTMLworkLocation.replace("%data%",work.location);
		var description=HTMLworkDescription.replace("%data%",work.description);

		var totalWork=employer+title+dates+location+description;
	$('.work-entry').append(totalWork);
	
}
displayWorkExp();

var displayProjects=function(){
		$('#projects').append(HTMLprojectStart);
		for (var i = 0; i < projects.project.length; i++) {
			var title=HTMLprojectTitle.replace("%data%",projects.project[i].title);
			var dates=HTMLprojectDates.replace("%data%",projects.project[i].dates);
			var description=HTMLprojectDescription.replace("%data%",projects.project[i].description);
			var image=HTMLprojectImage.replace("%data%",projects.project[i].image);

			var totalProject=title+dates+description+image;
		$('.project-entry').append(totalProject);
	};
}
displayProjects();

var displaySchool=function(){
	$('#education').append(HTMLschoolStart);
	for (var i = 0; i < schools.school.length; i++) {
		var name=HTMLschoolName.replace("%data%", schools.school[i].name);
		var degree=HTMLschoolDegree.replace("%data%",schools.school[i].degree);
		var dates=HTMLschoolDates.replace("%data%", schools.school[i].dates);
		var location=HTMLschoolLocation.replace("%data%", schools.school[i].location);
		var major=HTMLschoolMajor.replace("%data%", schools.school[i].major);
		
		var totalSchool=name+degree+dates+location+major;
		$('.education-entry').append(totalSchool);
	};
}
displaySchool();

displayOnlineClasses=function(){
	var title=HTMLonlineTitle.replace("%data%",onlineClasses.title);
	var school=HTMLonlineSchool.replace("%data%",onlineClasses.school);
	var dates=HTMLonlineDates.replace("%data%",onlineClasses.dates);
	var url=HTMLonlineURL.replace("%data%",onlineClasses.url);

	var totalOnlineClasses=HTMLonlineClasses+title+school+dates+url;
	$('.education-entry').append(totalOnlineClasses);
}
displayOnlineClasses();

