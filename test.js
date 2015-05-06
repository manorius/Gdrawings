exports.s = 10;
exports.m = function(l){

var st = "something";
console.log(st.strip());
}

if (typeof(String.prototype.strip) === "undefined") {
    String.prototype.strip = function() {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}