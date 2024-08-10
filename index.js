let string = "";
let button = document.querySelectorAll('button');

Array.from(button).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === "=") {
            try {
                string = eval(string);
                document.querySelector('input').value = string;
            } catch (error) {
                document.querySelector('input').value = "Error";
                string = "";
            }
        } else if (e.target.innerHTML === "C") {
            string = "";
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML === 'x') {
            string = string.slice(0, -1); // Remove the last character
            document.querySelector('input').value = string;
        } else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});
