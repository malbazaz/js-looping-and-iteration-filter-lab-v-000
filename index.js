// Code your solution in this file
// fingmatching take array of drivers
// and string as arguments
// return matching list of drivers
function findMatching(array,string){
const newArray;
for(const st of array){
  let st1 = st.toLowerCase();
  let st2 = string.toLowerCase();
  if(st1 === st2){
    newArray.push(st);
  }
}
return newArray;
}
