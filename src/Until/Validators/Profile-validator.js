export const required = (value) => {
		if(value) return undefined;
		return 'Please, fill in';
}

export const maxLengthCreator = (size) => {
	return (value) => {
		if(value.length > size) return 'Max length of this field - ' + size;
		return undefined
	}
}

export const minLengthCreator = (size) => {
	return (value) => {
		if(value.length < size) return 'Min length of this field - ' + size;
		return undefined
	}
}