function strvec_to_float_vect (str1) {
    var temp = str1.split(",");
    array_1 = [];
    //console.log("llega1");
    for (var i = 0; i < temp.length; ++i) {
        array_1.push(Number(temp[i]));
    }
    //console.log("llega1");
    return array_1;
}

function check_sizes (a1, a2, a3, a4, a5) {
    var l1 = a1.length;
    //console.log(l1, a2.length, a3.length, a4.length, a5.length);
    if (l1 != a2.length || l1 != a3.length || l1 != a4.length || l1 != a5.length) {
        return false;
    }
    print
    return true;
}

function calc_cos () {
    var array_1 = strvec_to_float_vect(document.getElementById('vec1').value);
    var array_2 = strvec_to_float_vect(document.getElementById('vec2').value);
    var array_3 = strvec_to_float_vect(document.getElementById('vec3').value);
    var array_4 = strvec_to_float_vect(document.getElementById('vec4').value);
    var array_5 = strvec_to_float_vect(document.getElementById('vec5').value);
    if (check_sizes(array_1, array_2, array_3, array_4, array_5)) {
        var answer;
        var cos12 = 0, cos13 = 0, cos14 = 0, cos15 = 0;
        var temp1 = [], temp2 = [], temp3 = [], temp4 = [], temp5 =[];
        var ts12 = 0, ts13 = 0, ts14 = 0, ts15 = 0;
        for (var i = 0; i < array_1.length; ++i) {
            temp1.push(Math.pow(array_1[i], 2));
            temp2.push(Math.pow(array_2[i], 2));
            temp3.push(Math.pow(array_3[i], 2));
            temp4.push(Math.pow(array_4[i], 2));
            temp5.push(Math.pow(array_5[i], 2));
            //another part
            ts12 += array_1[i]*array_2[i];
            ts13 += array_1[i]*array_3[i];
            ts14 += array_1[i]*array_4[i];
            ts15 += array_1[i]*array_5[i];
        }
        var sum1 = temp1.reduce((a, b) => a + b, 0);
        var sum2 = temp2.reduce((a, b) => a + b, 0);
        var sum3 = temp3.reduce((a, b) => a + b, 0);
        var sum4 = temp4.reduce((a, b) => a + b, 0);
        var sum5 = temp5.reduce((a, b) => a + b, 0);
        ///another another part
        cos12 = ts12 / (Math.sqrt(sum1) * Math.sqrt(sum2));
        cos13 = ts13 / (Math.sqrt(sum1) * Math.sqrt(sum3));
        cos14 = ts14 / (Math.sqrt(sum1) * Math.sqrt(sum4));
        cos15 = ts15 / (Math.sqrt(sum1) * Math.sqrt(sum5));
        answer = "v1 con v2: " + cos12.toString();
        answer += "v1 con v3: " + cos13.toString();
        answer += "v1 con v4: " + cos14.toString();
        answer += "v1 con v5: " + cos15.toString();
        ///write answer
        document.getElementById("answer1").innerHTML = answer;
    }
    else{
        document.getElementById("answer1").innerHTML = "valores errados";
    }
}