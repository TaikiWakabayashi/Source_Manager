const button: HTMLInputElement = document.getElementById(
  "button"
) as HTMLInputElement;

const inputName: HTMLInputElement = document.getElementById(
  "name"
) as HTMLInputElement;

const inputAge: HTMLInputElement = document.getElementById(
  "age"
) as HTMLInputElement;

const inputGender: HTMLInputElement = document.getElementById(
  "gender"
) as HTMLInputElement;

const result: HTMLElement = document.getElementById("result") as HTMLElement;

button.addEventListener("click", (e) => {
  const nameValue = inputName.value;

  const ageValue = inputAge.value;

  const genderValue = inputGender.value;

  const p = document.createElement("p");

  const text = document.createTextNode(
    `${nameValue} : ${ageValue} : ${genderValue}`
  );

  p.appendChild(text);

  result.appendChild(p);
});
