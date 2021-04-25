let price, topping_price, crust_price;
let total = 0;

function Havepizza(name, size, crust, topping, total) {
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = total;
}

$(document).ready(function () {
    $("button.proceed").click(function (event) {
        let psize = $("#size option:selected").value();
        let pcrust = $("#crust option:selected").value();
        let ptopping = [];

        $.each($("input[name='toppings']:checked"), function () {
            ptopping.push($(this).val());
        });

    })
})