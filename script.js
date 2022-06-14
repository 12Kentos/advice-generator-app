"use strict";

const adviceText = document.querySelector(".advice-generator__text");
const dice = document.querySelector(".dice-container");
const adviceNumber = document.querySelector(".advice-number");
let advice = "";
let text = "";

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url, { cache: "no-cache" }).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

async function myFunction() {
  try {
    const advice = await getJSON(`https://api.adviceslip.com/advice`);
    adviceNumber.textContent = advice.slip.id;
    adviceText.textContent = `"${advice.slip.advice}"`;
  } catch (err) {
    console.log(err);
  }
}

myFunction();

dice.addEventListener("click", () => {
  myFunction();
});
