const sec = 1000;
const min = sec * 60;
const hour = min * 60;
const day = hour * 24;

const end = new Date("Feb 01, 2022 12:00:00").getTime();

const int = setInterval(() => {
  const current = new Date().getTime();
  const remaining = end - current;
  document.getElementById("days").innerText = Math.floor(remaining / day);
  document.getElementById("hours").innerText = Math.floor(
    (remaining % day) / hour
  );
  document.getElementById("minutes").innerText = Math.floor(
    (remaining % hour) / min
  );
  document.getElementById("seconds").innerText = Math.floor(
    (remaining % min) / sec
  );

  if (remaining < 0) {
    document.querySelector("h1").innerText = "We Have Arrived!";
    document.querySelector("p").innerHTML =
      "The big day is finally here - view our <a href=https://www.website.com>website<a/> for more information.";
    const digit = document.querySelectorAll("span");
    digit.forEach((digit) => {
      digit.innerText = "0";
    });
    clearInterval(int);
  }
}, 1000);

$(document).ready(() => {
  let subscribe = localStorage.getItem("subscribe");
  if (subscribe !== null) {
    $(".get-notified").text("You will be notified");
  } else {
    $(".get-notified").click((e) => {
      e.preventDefault();
      $(".modal").toggle(200);
    });
    $(".close").click((e) => {
      $(".modal").toggle(200);
    });

    $("form").on("submit", (e) => {
      e.preventDefault();
      let name = $("#username").val();
      let email = $("#useremail").val();
      const data = { name: name, email: email };
      console.log(data);
      $(".modal").toggle(200);
      let sub = {
        data: data,
        date: new Date(),
      };

      localStorage.setItem("subscribe", JSON.stringify(sub));
    });
  }
});
