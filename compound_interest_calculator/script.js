      const currency = document.getElementById("currency");
      const initialAmount = document.getElementById("initial-amount");
      const initialAmountDisplay = document.getElementById('initial-amount-display');
      const rate = document.getElementById("rate");
      const years = document.getElementById("years");


    initialAmount.addEventListener("input", () => {
      initialAmountDisplay.textContent = initialAmount.value;
    });


    document.getElementById("calculate").addEventListener("click", () => {

      const rateValue = parseFloat(rate.value) / 100;
      const yearsValue = parseInt(years.value);



      if (isNaN(rateValue) || isNaN(yearsValue)) {
        alert("Write valid values!!");
        return;
      }

      let balance = initialAmount.value;
      let rows = "";
      for (let i = 1; i <= yearsValue; i++) {
        balance *= (1 + rateValue);
        rows += `<tr><td>${i}</td><td>${balance.toFixed(2)} ${currency.value}</td></tr>`;
      }
      if((balance < 1e6 && (currency.value === "EUR" || currency.value === "USD")) ||
        (balance < 1e7 && currency.value === "DKK")
      ){
        rows += `<tr><td>${yearsValue+1}</td><td>There are two kinds of people: The Have Nots and the Have Yachts</td></tr>`;
      }


      const total = balance.toFixed(2);
      document.getElementById("result").innerHTML = `
        <table>
          <tr><th>Year</th><th>Amount</th></tr>
          ${rows}
        </table>
      `;
    });