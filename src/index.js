module.exports = function towelSort(matrix) {
	if (matrix === undefined) {
		return [];
	} else {
		for (i = 1; i < matrix.length; i += 2) {
			matrix[i] = matrix[i].reverse();
		}

		matrix = matrix.flat(Infinity);
		return matrix;
	}
}
