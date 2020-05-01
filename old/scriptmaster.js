
module.exports = {
	strvec_to_float_vect: function (str1) {
		var temp = str1.split(",");
		array_1 = [];
		console.log("llega1");
		for (var i = 0; i < temp.length; ++i) {
			array_1.push(Number(temp[i]));
		}

		console.log("llega1");
		return array_1;
	},

	check_sizes: function (a1, a2, a3, a4, a5) {
		var l1 = a1.length;
		if (l1 != a2.length || l1 != a3.length || l1 != a4.length || l1 != a5.length) {
			return false;
		}
		return true;
	},

	calc_cos: function  () {
	    var array_1 = strvec_to_float_vect(document.getElementById('vec1').value);
	    var array_2 = strvec_to_float_vect(document.getElementById('vec2').value);
	    var array_3 = strvec_to_float_vect(document.getElementById('vec3').value);
	    var array_4 = strvec_to_float_vect(document.getElementById('vec4').value);
	    var array_5 = strvec_to_float_vect(document.getElementById('vec5').value);
	    if (check_sizes(array_1, array_2, array_3, array_4, array_5)) {
	    	document.getElementById("answer1").innerHTML = "valores errados";

	    }
	    document.getElementById("answer1").innerHTML = "valores errados";
	}
};
