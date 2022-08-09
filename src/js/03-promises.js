import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      };
    }, delay)
  });
}

function onFormSubmit(evt) {
  evt.preventDefault();

  const delay = evt.currentTarget.delay.value;
  const step = evt.currentTarget.step.value;
  const amount = evt.currentTarget.amount.value;
  let generalDelay = 0;
  let position = 0;

  for (let i = 0; i < amount; i += 1) {
    position += 1;
    generalDelay = Number(delay) + Number(step) * Number(i);

    promisesResult(position, generalDelay);
  };
}

function promisesResult(position, generalDelay) {
  createPromise(position, generalDelay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}