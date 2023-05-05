import "./styles.css";

//apps inner html
document.getElementById("dateFromToday").innerHTML = `
<nav>
  <a href="./index.html">
    Home
  </a>
</nav>

<fieldset id="dateFieldset">
  <legend>
    Days From Today Calculator
  </legend>
  <table>
    <tr>
      <td>
        <fieldset id="daysFromTodayFieldset">
          <legend>
            Date Calculator
          </legend>
          <label id="daysFromTodayLabel" for="daysFromTodayInput">Days from Today: </label>
          <input id="daysFromTodayInput" name="daysFromTodayInput" type:"number" /><br>
          <button id="dateCalculatorButton">Get Date</button>
        </fieldset>
      </td>
      <td>
        <fieldset id="dcConnection">
          Today's date + number of days
        </fieldset>
      </td>
      <td>
        <fieldset id="daysFromTodayResultsFieldset">
          <legend>
            Results
          </legend>
          <ul id="dateResultList"></ul>
        </fieldset>
  </table>
</fieldset>
`;

//functions
let dateResults = [];

const getDate = () => {
  const daysFromToday = document.getElementById("daysFromTodayInput").value;
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  let day = currentDate.getDate() + parseInt(daysFromToday);
  let month = currentMonth;
  let year = currentYear;

  while (day > new Date(year, month + 1, 0).getDate()) {
    day -= new Date(year, month + 1, 0).getDate();
    month++;
    if (month > 11) {
      month = 0;
      year++;
    }
  }

  const newDate = new Date(year, month, day);
  const formattedDate = newDate.toLocaleDateString();
  let list = document.getElementById("dateResultList");
  dateResults.push(`${formattedDate} is ${daysFromToday} days away.`);
  let i = dateResults.length - 1;
  let li = document.createElement("li");
  li.innerText = dateResults[i];
  let removeDateBtn = document.createElement("button");
  removeDateBtn.innerText = "Remove";
  removeDateBtn.addEventListener("click", () => {
    dateResults.slice(i, 1);
    li.remove();
  });
  li.appendChild(removeDateBtn);
  list.appendChild(li);
  document.getElementById("daysFromTodayInput").value = "";
};

document
  .getElementById("dateCalculatorButton")
  .addEventListener("click", getDate);

document
  .getElementById("daysFromTodayInput")
  .addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("dateCalculatorButton").click();
    }
  });
