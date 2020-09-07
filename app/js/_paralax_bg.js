document.addEventListener("scroll", function (event) {
  let s = scrollY;
  let h = document.querySelector("body").offsetHeight;
  let p = (s / h) * 100;
  console.log("scroll", s + window.innerHeight);
  //   console.log("scroll", screenTop);
  console.log(
    "object",
    document.querySelector(".section_project").offsetHeight
  );
  console.log("bbbbb", document.querySelector("body").offsetHeight);
  let ppp = 0 + p;
  console.log("p", -ppp);
  document.querySelector(
    ".section_project"
  ).style.backgroundPositionY = `${ppp}%`;
});
