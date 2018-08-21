// Code your solution in this file
// fingmatching take array of drivers
// and string as arguments
// return matching list of drivers
function findMatching(drivers,string){
const newArray = [];
for(const st of drivers){
  let st1 = st.toLowerCase();
  let st2 = string.toLowerCase();
  if(st1 === st2){
    newArray.push(st);
  }
}
return newArray;
}

function fuzzyMatch(drivers, string){
const newArray = [];
for(const st of drivers){
const  lengthof = string.length;
const start = st.slice(lengthof)
}
}

//function fuzzyMatch(drivers,string){
//    drivers.filter(function(st){
//    return string === st;
//  }
//}
