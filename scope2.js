function ajax(cb){
setTimeout(function() {
 cb('approved');
 }, 1000);
}

function showUserApproval(){
var user = { name: 'Boris Jurosevic'}

// ajax(function(status)){

	// console.log(user.name + 'is' + status);
	
// });

return function(){
console.log(user.name);

}
}

var newFunc = showUserApproval();

newFunc();

//user in no longer defined , it is out of scope