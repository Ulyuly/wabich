
        let order = document.getElementById("number");
        let name = document.getElementById("name");
        
        name.addEventListener("click", () => {

            let x = parseInt(prompt("Enter the first number"));
            let y = parseInt(prompt("Enter the second number"));

            if (x > y) {
              
                order.innerHTML = "Descending sequence: ";
                for (let i = x; i>= y; i--) {
                    order.innerHTML += decide(i);
                    if (i > y) {
                        order.innerHTML += ", ";
              
                    }
                }
            } else if (y > x) {
                order.innerHTML = "Ascending sequence: ";
                for (let i = x; i <= y; i++) {
         
                    order.innerHTML += decide(i);
                    if (i < y) {
                        order.innerHTML += ", ";
                    }
                }
            } else {
       
                 order.innerHTML = decide(a);
            }

            }
        );

        function decide(number) {
            if (number % 2 == 0) {
                return `<span class="evens">${number}</span>`;
            } else {
                return `<span class="odds">${number}</span>`;
            }
        }
