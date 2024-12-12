import { dbank } from "../../declarations/dbank";


window.addEventListener("load", async function () {
  console.log("helo");
  try {
    const currentAmount = await dbank.checkBalance();
    console.log("Current Amount: ", currentAmount);
    update();
  } catch (error) {
    console.error("Error checking balance:");
  }
});

document
  .querySelector("form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const button = event.target.querySelector("#submit-btn");
    console.log("submitted");
    const inputAmount = parseFloat(
      document.getElementById("input-amount").value
    );
    const outputAmount = document.getElementById("withdrawal-amount").value;
    button.setAttribute("disabled", true);
    if (document.getElementById("input-amount").value.length != 0) {
      await dbank.topUp(inputAmount);

      document.getElementById("input-amount").value = "";
      button.removeAttribute("disabled");
    }
    if (document.getElementById("withdrawal-amount").value.length != 0) {
      await dbank.withdraw(outputAmount);

      document.getElementById("input-amount").value = "";
      button.removeAttribute("disabled");
    }
    await dbank.compund();
    update();
  });
async function update() {
  const currentAmount = await dbank.checkBalance();
  document.getElementById("value").innerText =
    Math.round(currentAmount * 100) / 100;
}
