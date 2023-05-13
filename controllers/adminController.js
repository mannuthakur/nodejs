
 async function getAdminUser(req,res){
	console.log(req.query);
	// var ttt ='adfsdfds';
	// console.log(`admin user ${ttt}`);
	// res.json({status:200});
	res.end('save final');
}

async function saveAdminUser(req,res){

	console.log('save admin users');
	res.end('save final');
}

module.exports={getAdminUser,saveAdminUser};