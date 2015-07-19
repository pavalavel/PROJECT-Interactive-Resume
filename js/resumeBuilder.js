/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var header={
 	"headerName":"Pavalavel Ramesh",
 	"headerRole":"Web Developer",
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









