let services = [];
let services_added = [0, 0, 0];
let totalPrice = 0;

let washCarService = {
    name: "Wash Car",
    price: 10,
};

let mowLawnService = {
    name: "Mow Lawn",
    price: 20,
};

let pullWeedsService = {
    name: "Pull Weeds",
    price: 30,
};

services.push(washCarService, mowLawnService, pullWeedsService);

const washCarBtn = document.getElementById("wash-car-btn");
const mowLawnBtn = document.getElementById("maw-lown-btn");
const pullWeedsBtn = document.getElementById("pull-weeds-btn");
const tasks = document.querySelector(".tasks");
const valueForService = document.querySelector(".value-for-service");
const amountValue = document.querySelector("#amount-value");
const errMessage = document.querySelector("#err-message");
const sentInvoiceBtn = document.getElementById("sent-invoice-btn");
// const RemoveBtn = removeBtn();


function addHtmlElement(position_of_service) {
    if (services_added[position_of_service] === 0) {
        errMessage.innerHTML = "";

        tasks.innerHTML +=
            `<div class="task-element">
            <div class="task">
                <h2>${services[position_of_service].name}</h2>
                <button class="remove-btn">Remove</button>
            </div>
            <h3><span>$</span>${services[position_of_service].price}</h3>
        </div>`

        // valueForService.innerHTML += `<h3><span>$</span>${services[position_of_service].price}</h3>`

        calculateTotalPrice(position_of_service);
    }
    else {
        errMessage.innerHTML = "You already added this service!";
    }
}

function calculateTotalPrice(position_of_service) {
    totalPrice += services[position_of_service].price;
    amountValue.textContent = `$${totalPrice}`;
}

function serviceAdded(position_of_service) {
    services_added[position_of_service] = 1;
}

function removeBtn() {
    const removeBtn0 = document.getElementById("remove-btn-0");
    return removeBtn0;
}
washCarBtn.addEventListener("click", function () {
    console.log("");
    addHtmlElement(0);
    serviceAdded(0);
    // removeBtn();

});

mowLawnBtn.addEventListener("click", function () {
    addHtmlElement(1);
    serviceAdded(1);
});

pullWeedsBtn.addEventListener("click", function () {
    addHtmlElement(2);
    serviceAdded(2);

});

sentInvoiceBtn.addEventListener("click", function () {
    tasks.innerHTML = "";
    services_added = [0, 0, 0];
    errMessage.innerHTML = "";
    amountValue.textContent = "$0";
    totalPrice = 0;
});

// RemoveBtn.addEventListener("click", function () {
//     console.log("here")
//     tasksContainer.innerHTML = `<p id="task-text" class="no-margin">TASK</p>`
//     valueForService.innerHTML = `<p id="total-text" class="no-margin">TOTAL</p>`;

//     for (i = 0; i < services_added.length; i++) {
//         if (services_added[i] === 1) {
//             tasksContainer.innerHTML +=
//                 `<div class="task-element">
//         <h2>${services[i].name}</h2>
//         <button class="remove-btn" id = "remove-btn-${i}">Remove</button>
//     </div>`
//             valueForService.innerHTML += `<h3><span>$</span>${services[i].price}</h3>`
//         }
//     }

// });