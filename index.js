const API_LINK = "https://api.adviceslip.com/advice";
const adviceId = document.querySelector(".hero__title");
const adiceContent = document.querySelector(".hero__advice");
const adviceCta = document.querySelector(".cta");

const fetchNewAdvice = async () => {
  const response = await fetch(API_LINK);
  const adivce = await response.json();
  return adivce;
};

const renderAdvice = (adviceObj) => {
  const { id, advice } = adviceObj;
  adviceId.textContent = `advice #${id}`;
  adiceContent.textContent = advice;
};

const generateNewAdvice = async () => {
  const data = await fetchNewAdvice();
  const advice = data.slip;

  renderAdvice(advice);
};

window.addEventListener("DOMContentLoaded", () => {
  adviceCta.addEventListener("click", generateNewAdvice);
});
