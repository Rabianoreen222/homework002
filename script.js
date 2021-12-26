const additionFucntion = (firstVar, secondVar) => {
  return firstVar + secondVar;
};

const addition = document.getElementById("addition");
let output = document.getElementById("output");

addition.onclick = () => {
  const firstVarInput = document.getElementById("firstVarInput").value;
  const secondVarInput = document.getElementById("secondVarInput").value;
  output.innerHTML = additionFucntion(
    parseInt(firstVarInput),
    parseInt(secondVarInput)
  );
};
