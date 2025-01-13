function calculatePercentageChange(original, newAmount) {
  const difference = Math.abs(newAmount - original);
  const percentageDifference = (difference/original) * 100;
  if (difference === 0){
    const change = 0;
    return change;
  }
  if (newAmount < original) {
    return - Math.round(percentageDifference);
  }
  return percentageDifference;
  
}

module.exports = { calculatePercentageChange };
