'use strict';

function Matrix(num) {
	this.rows = getRows(num);
	this.columns = getColumns(num);
}

function getRows(num) {
	var str_arr = num.split("\n");
	var num_arr = [];
	for (var i = 0; i < str_arr.length; i++) {
		str_arr[i] = str_arr[i].split(" ");
		var inner_num = [];
		for (var j = 0; j < str_arr[i].length; j++) {
			inner_num.push(parseInt(str_arr[i][j]));
		};
		num_arr.push(inner_num);
	};
	return num_arr;
};

function getColumns (num) {
	var str_arr = num.split("\n");
	var num_arr = [];

	for (var i = 0; i < str_arr.length; i++) {
		str_arr[i] = str_arr[i].split(" ");
	};

	for (var i = 0; i < str_arr.length; i++) {
		// str_arr[i] = str_arr[i].split(" ");
		var inner_num = [];
		for (var j = 0; j < str_arr.length; j++) {
			console.log(str_arr[j][i]);
			inner_num.push(parseInt(str_arr[j][i]));
		};
		num_arr.push(inner_num);
	};
	return num_arr;
};