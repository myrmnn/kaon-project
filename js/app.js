window.addEventListener("DOMContentLoaded", () => {
  const explore = document.querySelector(".explore");
  const options = document.querySelector(".gov1-options");
  const buttons = document.querySelectorAll("[data-js-page]");
  const page = document.querySelectorAll(".page");

  explore.addEventListener("touchend", () => {
    options.classList.toggle("show");
  });

  page.forEach((pg) => {
    pg.addEventListener("click", (e) => {
      if (e.target.id == "button") {
        var goal_page = e.target.getAttribute("data-js-page");
        var start_page = pg.getAttribute("data-page");

        if (start_page == "entry" && goal_page == "health") {
          document
            .querySelector(".page[data-page='" + start_page + "']")
            .classList.remove("active", "left", "right");
          document
            .querySelector(".page[data-page='" + goal_page + "']")
            .classList.add("active");
          document
            .querySelector(".page[data-page='" + start_page + "']")
            .classList.add("left");
        }

        if (start_page == "health" && goal_page == "entry") {
          console.log(start_page, goal_page);

          document
            .querySelector(".page[data-page='" + start_page + "']")
            .classList.remove("active");
          document
            .querySelector(".page[data-page='" + goal_page + "']")
            .classList.add("active");
          document
            .querySelector(".page[data-page='" + start_page + "']")
            .classList.add("right");
        }

        if (start_page == "entry" && goal_page == "gov_1") {
          console.log(start_page, goal_page);

          document
            .querySelector(".page[data-page='" + start_page + "']")
            .classList.remove("active");
          document
            .querySelector(".page[data-page='" + goal_page + "']")
            .classList.add("active");
          document
            .querySelector(".page[data-page='" + start_page + "']")
            .classList.add("right");
        }

        if (start_page == "gov_1" && goal_page == "entry") {
          console.log(start_page, goal_page);

          document
            .querySelector(".page[data-page='" + start_page + "']")
            .classList.remove("active");
          document
            .querySelector(".page[data-page='" + goal_page + "']")
            .classList.add("active");
          document
            .querySelector(".page[data-page='" + start_page + "']")
            .classList.add("left");
        }
      }
    });
  });
});

// window.addEventListener("DOMContentLoaded", () => {
//   const explore = document.querySelector(".explore");
//   const options = document.querySelector(".gov1-options");
//   const buttons = document.querySelectorAll("[data-js-page]");
//   const page = document.querySelectorAll(".page");

//   explore.addEventListener("touchend", () => {
//     options.classList.toggle("show");
//   });

//   page.forEach((pg) => {
//     pg.addEventListener("click", (e) => {
//       console.log("clicked");
//       if (e.target.id == "button") {
//         var goal_page = e.target.getAttribute("data-js-page");
//         var start_page = pg.getAttribute("data-page");
//         if (goal_page == "health" && start_page == "entry") {
//           document.querySelector(
//             ".page[data-page='" + start_page + "']"
//           ).style.transform = "translate(-100%)";
//           document.querySelector(
//             ".page[data-page='" + goal_page + "']"
//           ).style.transform = "translate(0)";
//         }
//         if (goal_page == "entry" && start_page == "health") {
//           console.log(start_page, goal_page);
//           document.querySelector(
//             ".page[data-page='" + start_page + "']"
//           ).style.transform = "translate(100%)";
//           document.querySelector(
//             ".page[data-page='" + goal_page + "']"
//           ).style.transform = "translate(0)";
//         }
//         if (goal_page == "gov_1" && start_page == "entry") {
//           console.log(start_page, goal_page);
//           document.querySelector(
//             ".page[data-page='" + start_page + "']"
//           ).style.transform = "translate(100%)";
//           document.querySelector(
//             ".page[data-page='" + goal_page + "']"
//           ).style.transform = "translate(0)";
//         }
//         if (goal_page == "entry" && start_page == "gov_1") {
//           console.log(start_page, goal_page);
//           document.querySelector(
//             ".page[data-page='" + start_page + "']"
//           ).style.transform = "translate(-100%)";
//           document.querySelector(
//             ".page[data-page='" + goal_page + "']"
//           ).style.transform = "translate(0)";
//         }
//       }
//     });
//   });
// });
