/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var model={
 	"headerName":"Pavalavel Ramesh",
 	"headerRole":"Web Developer"
 };

 var displayHeader=function(){
 	var name=HTMLheaderName.replace("%data%",model.headerName);
 	var role=HTMLheaderRole.replace("%data%",model.headerRole);
 	var total=name+role;
 	$('#header').append(total);
 };
 displayHeader();