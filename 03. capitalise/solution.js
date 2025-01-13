function capitalise(word) {
  check =  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return check;
  
}
module.exports = { capitalise };

 
