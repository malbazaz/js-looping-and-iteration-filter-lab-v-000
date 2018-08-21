// Code your solution in this file
// fingmatching take array of drivers
// and string as arguments
// return matching list of drivers
function findMatching(drivers,string){
const newArray;
for(const st of drivers){
  if(st==string){
    newArray.push(st);
  }
}
return newArray;
}
