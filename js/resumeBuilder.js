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













