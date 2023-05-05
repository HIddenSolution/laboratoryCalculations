import "./styles.css";

document.getElementById("patientCorrelation").innerHTML = `
<nav>
  <a href="./index.html">
    Home
  </a>
</nav>

<fieldset id="patientCorrelations">
  <legend>
  Patient Correlation
  </legend>
  <table>
    <tr>
      <td>
        <fieldset id="pcFieldset">
          <legend>
            Calculator
          </legend>
          <label id="testNameLabel" for="testNameInput">Test Name: </label>
          <input id="testNameInput" name="testNameInput" type:"text" /><br>
          <label id="oldValueLabel" for="oldValueInput">Old Value: </label>
          <input id="oldValueInput" name="oldValueInput" type:"number" step="0.001" /><br>
          <label id="newValueLabel" for="newValueInput">New Value: </label>
          <input id="newValueInput" name="newValueInput" type:"number" step="0.001" /><br>
          <button id="patientCorrelationButton">Calculate</button>
        </fieldset>
      </td>
      <td>
        <fieldset id="pcConnection">
          <p id="pcFormula">(old-new)/old*100</p>
        </fieldset>
      </td>
      <td>
        <fieldset id="pcResultsFieldset">
        <legend>
        Results
        </legend>
        <ul id="pcResultsList"></ul>
        </fieldset>
        </table>
        </fieldset>
      </td>
    </tr>
  </table>
  `;

let patientCorrelationResults = [];

const corrCalc = () => {
  let oldValue = document.getElementById("oldValueInput").value;
  let newValue = document.getElementById("newValueInput").value;
  let testName = document.getElementById("testNameInput").value;
  let difference = oldValue - newValue;
  let result = (difference / oldValue) * 100;
  result = result.toFixed(2);
  let list = document.getElementById("pcResultsList");
  patientCorrelationResults.push(result);
  let i = patientCorrelationResults.length - 1;
  let li = document.createElement("li");
  li.innerText = `The correlation result for ${testName} with the values (old:${oldValue}, new:${newValue}) is ${patientCorrelationResults[i]}`;
  let removeBtn = document.createElement("button");
  removeBtn.innerText = "Remove";
  removeBtn.addEventListener("click", () => {
    patientCorrelationResults.splice(i, 1);
    li.remove();
  });
  li.appendChild(removeBtn);
  list.appendChild(li);
  document.getElementById("testNameInput").value = "";
  document.getElementById("oldValueInput").value = "";
  document.getElementById("newValueInput").value = "";
  document.getElementById("testNameInput").focus();
};

//event listeners
document
  .getElementById("patientCorrelationButton")
  .addEventListener("click", corrCalc);

document
  .getElementById("newValueInput")
  .addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("patientCorrelationButton").click();
    }
  });

document
  .getElementById("oldValueInput")
  .addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("patientCorrelationButton").click();
    }
  });

document
  .getElementById("testNameInput")
  .addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("patientCorrelationButton").click();
    }
  });
