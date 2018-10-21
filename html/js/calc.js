/* 成功失敗計算用コード */

function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

function judge(count, star) {
	var dist = { Moon:0.1, Mars:2, Jupiter:7, Saturn:10, Uranus:30, Neptune:50, Pluto:100, Centauri:1000000};

	var D = dist[star];
	var B = count;
	var P = (1-0.05*B) / Math.sqrt(Math.log(D)/Math.log(10)+2)  ;

	var result = false;
	if ( P > Math.random(1) ){
		result  = true;
	}
	return result;
}

print("P = " +  P);
print("Result = " +  result);

document.write("</p>");

