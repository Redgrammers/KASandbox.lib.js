// Main jQuery
var $ = (function(){
    return this.$;
})();
// but we want more. This is scopeOut.
// Specify object (p, string) and if it is hidden (c, boolean)
var scopeOut = function(p, c){
    if(c === true){
        return (function(){
            return this;
        })()[p];
    }
    return this[p];
};
// Document and window
var d = scopeOut("document", true);
var w = scopeOut("window", true);
// Put all the code for your program in here!
var program = function(html){
    // If you wanna work with PJS for 1 period and HTML the rest, this bit is for you.
    var pjshtml = false;
    // Whenever you want HTML to start, turn pjshtml to true.
    // Start PJS on that line ↴
    
    // End PJS on that line ↑
    if(pjshtml === true && typeof d === "object" && typeof w === "object"){
        $("html").html(html);
        // much html :P
    }
};
if(typeof d === "object" && typeof w === "object"){
    program(/* Put the HTML in a string here if you want it to run after the PJS is done. */);
}
