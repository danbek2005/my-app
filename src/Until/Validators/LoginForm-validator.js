export const required = (value) => {
		if(value) return undefined;
		return 'Please, fill in';
}

export const maxLengthCreator = (size) => { // 10
	return (value) => {
		if(value.length > size) return 'Max length of this field - ' + size;
		return undefined
	}
}

export const checkEmail = (value) => {
	let pattern  = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	if(!value.match(pattern)) return 'Your mail is not valid!';
	return undefined;
}

export const checkSpace = (value) => {
	if(value.replace(/\s/, '') != value) return 'this field is must dont have a space!';
	return undefined;
}



