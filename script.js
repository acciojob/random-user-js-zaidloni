//your code here
//your code here
let getUserButton = document.getElementById("getUser");
let fullName = document.getElementById("name");
let image = document.getElementById("image");
let additionalInfo = document.getElementById("Info");

getUserButton.addEventListener("click", function () {
  fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {
      console.log(data.results);
      const user = data.results[0];
      console.log(user);
      fullName.innerText = user.name.first + " " + user.name.last;
      image.src = user.picture.large;
      fullName.dataset.age = user.dob.age;
      fullName.dataset.email = user.email;
      fullName.dataset.phone = user.phone;
      additionalInfo.innerText = "";
    });
});

const ageButton = document.querySelector('[data-attr="age"]');
const emailButton = document.querySelector('[data-attr="email"]');
const phoneButton = document.querySelector('[data-attr="phone"]');

ageButton.addEventListener("click", function () {
  additionalInfo.innerText = "Age: " + fullName.dataset.age;
});

emailButton.addEventListener("click", function () {
  additionalInfo.innerText = "Email: " + fullName.dataset.email;
});

phoneButton.addEventListener("click", function () {
  additionalInfo.innerText = "Phone: " + fullName.dataset.phone;
});

getUserButton.click();