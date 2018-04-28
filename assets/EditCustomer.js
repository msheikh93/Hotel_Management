$(document).ready(function(){
    
    $id = null;

    $.get( "/getinfo", ( customers ) => {
        customers.forEach((customer, idx) => {
            $('.allCustomers').append(`<option class="eachCustomer">${customer.firstname} ${customer.lastname}</option>`);
        });
        $id = customers[0]._id;
        $(".firstName").val(customers[0].firstname);
        $(".lastName").val(customers[0].lastname);
        $(".creditCard").val(customers[0].creditcard);
      });

    $( ".allCustomers" ).change(function() {
        $.get( "/getinfo", ( customers ) => {
            $id = customers[this.selectedIndex]._id; 
            $(".firstName").val(customers[this.selectedIndex].firstname);
            $(".lastName").val(customers[this.selectedIndex].lastname);
            $(".creditCard").val(customers[this.selectedIndex].creditcard);
          });
    });

    $( ".editCustomer" ).click(function() {
        var data = {
            _id :  $id,
            firstname :  $(".firstName").val(),
            lastname :  $(".lastName").val(),
            creditcard : $(".creditCard").val(),
        }
        $.post( "/updateInfo", data);
    });


    $( ".deleteCustomer" ).click(function() {
        var data = {
            _id :  $id,
            firstname :  $(".firstName").val(),
            lastname :  $(".lastName").val(),
            creditcard : $(".creditCard").val(),
        }
        $.post( '/deletecustomer', data);
    });
});