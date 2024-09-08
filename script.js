let basic_price = document.getElementById('basic_price');
let professional_price = document.getElementById('professional_price');
let master_price = document.getElementById('master_price');
let checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        basic_price.textContent = "199.99";
        professional_price.textContent = "249.99";
        master_price.textContent = "399.99";
    } else {
        basic_price.textContent = "19.99";
        professional_price.textContent = "24.99";
        master_price.textContent = "39.99";
    }
});