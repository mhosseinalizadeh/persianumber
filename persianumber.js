var defaultSettings = 'fa';
(function( $ ){
	
  $.fn.persiaNumber = function(settings) {
	  if(typeof(settings) == 'string' && settings.length > 0)
		  defaultSettings = settings;
	  var range = 1728;
	  if(settings == 'ar'){
		  range = 1584;
	  }
	  window.persiaNumberedDOM = this;
	  convert(this, range);
	  $(document).ajaxComplete(function(){
		  var thisObj = window.persiaNumberedDOM;
		  convert(thisObj, range);
	  });
	function convert(obj, range){
		  obj.find("*").addBack().contents().each(function() {
			    if (this.nodeType === 3 && this.parentNode.localName != "style" && this.parentNode.localName != "script") {
				    this.nodeValue = this.nodeValue.replace(this.nodeValue.match(/[0-9]*\.[0-9]+/), function(txt){
					    return txt.replace(/\./,',');
					});		    	
			        this.nodeValue = this.nodeValue.replace(/\d/g, function(v) {
			            return String.fromCharCode(v.charCodeAt(0) + range);
			        });
			    }
			});		
	}  
};
})( jQuery );
origParseInt = parseInt;
parseInt = function(str) {
		str = str && str.toString().replace(/[\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9]/g, function(v){return String.fromCharCode(v.charCodeAt(0) - 1728)}).replace(/[\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669]/g, function(v){return String.fromCharCode(v.charCodeAt(0) - 1584)}).replace(/[\u066B]/g, '.');
	return origParseInt(str);	
	};
origParseFloat = parseFloat;
parseFloat = function(str) {
		str = str && str.toString().replace(/[\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9]/g, function(v){return String.fromCharCode(v.charCodeAt(0) - 1728)}).replace(/[\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669]/g, function(v){return String.fromCharCode(v.charCodeAt(0) - 1584)}).replace(/[\u066B]/g, '.');
	return origParseFloat(str);	
	};	
