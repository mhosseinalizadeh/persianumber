(function( $ ){
  $.fn.persiaNumber = function() {
	  var groupSelection = this;
	  for(i=0; i< groupSelection.length ; i++){
		  var htmlTxt = $(groupSelection[i]).html();
		  var trueTxt = convertDecimalPoint(htmlTxt);
		  trueTxt = convertToPersianNum(trueTxt);
		  $(groupSelection[i]).html(trueTxt);
	  }
function convertToPersianNum(htmlTxt){
		  var otIndex = htmlTxt.indexOf("<");
		  var ctIndex = htmlTxt.indexOf(">");
		  if(otIndex == -1 && ctIndex == -1 && htmlTxt.length > 0){
			var trueTxt = htmlTxt.replace(/1/gi, "۱").replace(/2/gi, "۲").replace(/3/gi, "۳").replace(/4/gi, "۴").replace(/5/gi, "۵").replace(/6/gi, "۶").replace(/7/gi, "۷").replace(/8/gi, "۸").replace(/9/gi, "۹").replace(/0/gi, "۰");
			return trueTxt;
		  }
			  var tag = htmlTxt.substring(otIndex,ctIndex + 1);
			  var str = htmlTxt.substring(0,otIndex);
			  str = convertDecimalPoint(str);
			  str = str.replace(/1/gi, "۱").replace(/2/gi, "۲").replace(/3/gi, "۳").replace(/4/gi, "۴").replace(/5/gi, "۵").replace(/6/gi, "۶").replace(/7/gi, "۷").replace(/8/gi, "۸").replace(/9/gi, "۹").replace(/0/gi, "۰");
			  var refinedHtmlTxt = str + tag;
			  var htmlTxt = htmlTxt.substring(ctIndex + 1, htmlTxt.length);
			  if(htmlTxt.length > 0 && otIndex != -1 || ctIndex != -1){
				  var trueTxt = refinedHtmlTxt;
				  var trueTxt =  trueTxt + convertToPersianNum(htmlTxt); 
			  }else{
					return refinedHtmlTxt+ htmlTxt;
			  }
			  return trueTxt; 		  

	}
function convertDecimalPoint(str){
	for(j=1;j<str.length - 1; j++){
		if(str.charCodeAt(j-1) > 47 &&  str.charCodeAt(j-1) < 58 && str.charCodeAt(j+1) > 47 &&  str.charCodeAt(j+1) < 58 && str.charCodeAt(j) == 46)
			str = str.substring(0,j) + '٫' + str.substring(j+1,str.length);
	}
	return str;
}
};
})( jQuery );
