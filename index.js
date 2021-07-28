
  let buttons = document.querySelectorAll(".arrow_icon");

  for (var i = 0; i < buttons.length; i ++) {
      buttons[i].addEventListener("click", function() {
      document.querySelector(".share_sheet").classList.toggle("hidden");
  });
  };
