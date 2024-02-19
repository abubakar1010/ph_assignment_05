
// select seats and set click event 

    const getSeats = document.querySelectorAll(".seats")

    let countSets = 0;

    let countStock = getElementBySelector("#stock").innerText

    // let totalPrice = getElementBySelector("#totalPrice")

    getSeats.forEach( (seat) => {

        seat.addEventListener('click', function(e){


            const getClickedButton = document.getElementById(e.target.id)

            getClickedButton.setAttribute("disabled","")

            //set style by clicked

            getClickedButton.style.backgroundColor = "#1DD100"
            getClickedButton.style.color = "white"

            //count sets

            countSets++

            const seats = getElementBySelector("#numberOfSelection")

            seats.innerText = countSets

            // count stock 

            countStock--

            const stocks = getElementBySelector("#stock")

            stocks.innerText = countStock

            // added seat information 

            const parent = getElementBySelector("#parent")

            parent.classList.remove("hidden")

            div = document.createElement('div')

            div.innerHTML = `<h4 id="seatNumber" class=" text-xl text-[#03071299] ">${e.target.id}</h4>
            <h3 class=" text-xl text-[#03071299] ">Economy</h3>
            <h3 id= "PricePerSet" class=" text-xl text-[#03071299] ">550</h3>`

            div.classList.add("flex", "justify-between", "pb-4", "pt-6")

            parent.appendChild(div)

            //update price

            updatePrice("#totalPrice")
            updatePrice("#grandTotal")

            // check is set are greater then 4

            if( countSets === 4){

                const applyButton = getElementBySelector("#apply-btn")
                applyButton.removeAttribute("disabled")

            }

            // check is user select at least one seat and input phone number

            const number = getElementBySelector("#number")

                if( countSets > 0 && number.value.length > 0 ){

                    const nextButton = getElementBySelector("#next")

                    nextButton.removeAttribute("disabled")
    
                }

        })
    })

    // check is user select at least one seat and input phone number

    const number = getElementBySelector("#number")

    number.addEventListener("keyup", function(){
        if( countSets > 0 && number.value.length > 0 ){

            const nextButton = getElementBySelector("#next")

                    nextButton.removeAttribute("disabled")

        }
    })

    // apply discount 

    const applyButton = getElementBySelector("#apply-btn")

    applyButton.addEventListener('click', function(){

        const price = getElementBySelector("#totalPrice")

        const userInput = getElementBySelector("#coupon").value

        console.log(price, userInput);

        let discount = 0;

        

        const parent = getElementBySelector("#priceContainer")

        const p = document.createElement("p")


    if( userInput === "NEW15"){
        discount = ((parseInt(price.innerText) * 15 )) / 100
   getElementBySelector("#discountField").classList.add("hidden")
   parent.appendChild(p)


   }else if( userInput === "Couple20"){

       discount = ((parseInt(price.innerText) * 20 )) / 100
   getElementBySelector("#discountField").classList.add("hidden")
   parent.appendChild(p)


   }
   
   p.innerHTML = `<div class="flex justify-between pt-3">
   <h4 class=" text-xl font-medium text-[#030712] ">Discount</h4>
   <h3 id="discountAmount" class=" text-xl font-medium text-[#030712] ">BDT <span">${discount}</span></h3>
</div>`
        getElementBySelector("#grandTotal").innerText = parseInt(price.innerText) - discount




    })
