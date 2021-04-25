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
        console.log(ptopping.join(", "));

        switch (psize) {
            case "0":
                price = 0;
                break;
            case "small":
                price = 1000;
                console.log(price);
                break;
            case "medium":
                price = 800;
                console.log("The price is " + price);
                break;
            case "large":
                price = 400;
                console.log(price);

            default:
                console.log("error");
        }

        switch (pcrust) {
            case "0":
                crust_price = 0;
                break;
            case "Gluten":
                price = 200;
                console.log(price);
                break;
            case "Stuffed":
                price = 150;
                console.log("The price is " + price);
                break;
            case "Cripsy":
                price = 350;
                console.log(price);

            default:
                console.log("No price");
        }
        let topping_value = ptopping.length * 50;
        console.log("toppins value" + topping_value);

        if ((psize == "0") && (pcrust == "0")) {
            console.log("nothing selected");
            $("button.proceed").show();
            $("#information").show();
            $("div.choise").hide();
            alert("Please select pizza size and crust");
        } else {
            $("button.proceed").hide();
            $("#information").hide();
            $("div.choise").slideDown(1000);
        }

        

    })
})