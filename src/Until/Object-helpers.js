export const updateObjectInArr = (items, a, b, el) => {
	return items.map((item) => {
		if(item[a] == b){
			return {...item, ...el};
		}
		return item;
	});
} 