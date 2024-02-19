//get element by selector

function getElementBySelector(selector){

    const element = document.querySelector(selector)

    return element
}

// update price 

function updatePrice(selectTarget){

    const target = getElementBySelector(selectTarget)

    target.innerText = parseInt(target.innerText) + parseInt(getElementBySelector("#PricePerSet").innerText)

    
}

// apply discount 



