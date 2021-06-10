let screen_input = document.getElementById("input");
buttons = document.querySelectorAll(".keyboard");
let screen_output = document.getElementById("output");
screen_input = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonsText = e.target.innerText;
    console.log(buttonsText);

    if (buttonsText === "=") {
      screen_output.textContent = eval(screen_input);

      //console.log(typeof screen_input);
    } else if (buttonsText === "C") {
      screen_output.textContent = " ";
      screen_input = "";
    } else {
      /*else if (buttonsText == "!") {
      function factorial(buttonsText) {
        let answer = 1;
        if (buttonsText == 0 || buttonsText == 1) {
          return answer;
        } else {
          for (var i = buttonsText; i >= 1; i--) {
            answer = answer * i;
          }
          return answer;
        }
      }
    } */
      screen_input += buttonsText;
      screen_output.textContent = screen_input;
    }
  });
}
