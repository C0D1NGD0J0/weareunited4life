export function isPostAuthor(currentuser, post){
	if(!currentuser.isAuthenticated){
		return false;
	};
	
	if(post.author && currentuser){
		return currentuser.user.id === (post.author && post.author._id);
	};

	if(post && currentuser){
		return currentuser.user.id === (post && post._id);
	};

	return false;
}; 

export function validateAuth(resource){
	if(resource !== undefined){
		return resource.isAuthenticated;
	};

	return false;
};