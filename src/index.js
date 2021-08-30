module.exports = function check(str, bracketsConfig) {
    stack = [],
    o = bracketsConfig.reduce(function(prev,curr){prev[curr[0]]=curr[1];return prev;},{})
    let open = Object.keys(o);
    let close = Object.values(o);
  
     console.log(o);
    console.log(open);
    console.log(close);
var chars = str.split('');
if (str.length % 2 == 1) {
    return false;
}
for (var i = 0, len = chars.length; i < len; i++) {
 if(chars[i] === chars[chars.length -1] && chars.length % 2 === 0){
   return true;
 }
  let openIndex = open.indexOf(chars[i]);
   if (openIndex !== -1) {
       
       stack.push(openIndex);
       continue;
       
   }

   let closeIndex = close.indexOf(chars[i]);
   if (closeIndex !== -1) {
       
       openIndex = stack.pop();
       if (closeIndex !== openIndex) {
           return false;
       }
   }

}

if (stack.length !== 0) {
    return false;
}

return true;
}
