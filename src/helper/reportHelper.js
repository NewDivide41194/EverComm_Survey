const Percentage = (countAns,totalAmount) => ((countAns * 100) / totalAmount).toFixed(2);
const NotAnswered = (totalAnsCount,totalAmount) => totalAmount - totalAnsCount;


export{Percentage,NotAnswered}