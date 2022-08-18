// Container
let ratingContainer = document.querySelector(".container");
let thankYouContainer = document.querySelector(".thank-you-container");

// Buttons
let ratingBtn = document.querySelectorAll(".rating-btn");
let submitBtn = document.querySelector(".submit-btn");

// User Rating
let userRating = document.querySelector(".user-rating");

let ratingArr = [];

let submitBtnTextContent = submitBtn.innerHTML;

// adding the hover status to the ratingbtn
for (let i = 0; i < ratingBtn.length; i++) {
  ratingBtn[i].addEventListener("mouseover", function () {
    ratingBtn[i].classList.add("rating-btn-hover");

    setTimeout(function () {
      ratingBtn[i].classList.remove("rating-btn-hover");
    }, 1000);
  });
}

// adding a click evnt listener when a button is pressed
for (let i = 0; i < ratingBtn.length; i++) {
  ratingBtn[i].addEventListener("click", function (event) {
    ratingBtn[i].classList.toggle("rating-btn-pressed");

    ratingArr.push(event.target.id);
    console.log(ratingArr);

    submitBtn.addEventListener("click", function () {
      if (ratingArr.length === 0) {
        submitBtn.innerHTML = "Please rate!";

        setTimeout(function () {
          submitBtn.innerHTML = submitBtnTextContent;
        }, 2000);
      } else if (ratingArr.length >= 1) {
        ratingContainer.style.display = "none";
        thankYouContainer.style.display = "flex";
        userRating.innerHTML = `You selected ${event.target.id} out of 5`;
      }
    });
  });
}
