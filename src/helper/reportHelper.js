const Percentage = (countAns,TotalBuilding) => ((countAns * 100) / TotalBuilding).toFixed(2);
const NotAnswered = (totalAnsCount,TotalBuilding) => TotalBuilding - totalAnsCount;

export{Percentage,NotAnswered}