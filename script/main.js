
// select seats and set click event 

    const seats = document.querySelectorAll(".seats")

    seats.forEach( (seat) => {

        seat.addEventListener('click', function(e){

            const getClickedButton = document.getElementById(e.target.id)

            console.log(getClickedButton);

            getClickedButton.style.backgroundColor = "#1DD100"
            getClickedButton.style.color = "white"

            
        })
    })