// Write all JS here. Do not write any JS in index.html
// start with creating functions
function calculateTax(subtotal) {
    console.log(`Running calculateTax function`);
    const taxRate = 0.0875;
    let tax = subtotal * taxRate;
    console.log(tax);
    return tax;
}
function calculateTotal(subtotal, tax) {
    console.log(`Running calculateTotal function`);
    let total = subtotal + tax;
    console.log(total);
    return total;
}
// put tax, sabtotal, total into this function
function order(cost) {
    console.log(`Running order function`);
    let subtotal = document.querySelector("#subtotal").textContent;
    subtotal = parseInt(subtotal);
    subtotal = subtotal + cost;
    console.log(subtotal);
    document.querySelector("#subtotal").textContent = subtotal;

    let tax = calculateTax(subtotal);
    tax = tax.toFixed(2);
    document.querySelector("#tax").textContent = tax;

    let total = calculateTotal(subtotal, tax);
    document.querySelector("#total").textContent = total;

    taxTotal = taxTotal.toFixed(2);
    finalTotal = finalTotal.toFixed(2);
    document.querySelector("#subtotal").textContent = subtotal;
    document.querySelector("#tax").textContent = taxTotal;
    document.querySelector("#total").textContent = finalTotal;
}
// now, create onclick functions to active them 
document.querySelector("#dress1").onclick = function() {
order(85);
}
document.querySelector("#dress2").onclick = function() {
order(105);
}
document.querySelector("#dress3").onclick = function() {
order(100);
}