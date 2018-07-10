var createGrid = (dimX, dimY) => {
	var returnArr = [];
	for (var i = 0; i < dimY; i++) {
		var pushArr = [];
		for (var j = 0; j < dimX; j++) {
			pushArr.push(0);
		}
		returnArr.push(pushArr);
	}
	return returnArr;
}