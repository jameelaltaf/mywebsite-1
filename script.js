window.onload = () => {
  var content = document.getElementById("content");
  var elements = document.querySelectorAll(".menu-option");
  elements.forEach((element) =>
    element.addEventListener("click", (e) => {
      const { section } = e.target.dataset;
      const element = document.getElementById(section);
      $(content).animate({ scrollTop: element.offsetTop });
    })
  );
};
