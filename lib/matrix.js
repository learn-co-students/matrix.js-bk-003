'use strict';

function Matrix(word) {
	let array = word.split("\n");
	this.rows = [];
	this.columns = [];
    // find rows using and transforming array
		for(let i = 0; i < array.length; ++i){
			let innerArray = [];
			array[i].split(" ").forEach(function(m){
			 innerArray.push(+m);
			});
			this.rows.push(innerArray);
		}
     //find columns usings rows
	   for(let k = 0; k < this.rows.length; ++k){
	     let innerArray = [];
	     for(let j = 0; j < this.rows.length; ++j){
	     	innerArray.push(this.rows[j][k]);
	     }
	     this.columns.push(innerArray)
	   }
    

}
