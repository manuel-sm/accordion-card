document.querySelectorAll(".accordion__question").forEach((item) => {
  item.addEventListener("click", (event) => {
    let accCollapse = item.nextElementSibling;

    if (!item.classList.contains("collapsing")) {
      //Open accordion item
      if (!item.classList.contains("open")) {
        accCollapse.style.display = "block";
        let accHeight = accCollapse.clientHeight;

        setTimeout(() => {
          accCollapse.style.height = accHeight + "px";
          accCollapse.style.display = "";
        }, 1);

        accCollapse.classList = "accordion__collapse collapsing";

        setTimeout(() => {
          accCollapse.classList = "accordion__collapse collapse open";
        }, 300);
      }
      //Close accordion item
      else {
        accCollapse.classList = "accordion__collapse collapsing";

        setTimeout(() => {
          accCollapse.style.height = "0px";
        }, 1);

        setTimeout(() => {
          accCollapse.classList = "accordion__collapse collapse";
          accCollapse.style.height = "";
        }, 300);
      }
      //If has class open

      //Add "collapse", add "collapsing" class to .accordion__collapse (sibling)

      //Remove "collapsing" class and add "open" class

      item.classList.toggle("open");
    }
  });
});
