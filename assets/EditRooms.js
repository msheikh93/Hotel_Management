$(document).ready(function(){
    
    $id = null;

    $.get( "/getallrooms", ( rooms ) => {
        rooms.forEach((room, idx) => {
            $('.allRooms').append(`<option class="eachRoom">${room.roomnumber}</option>`);
        });
        $id = rooms[0]._id;
        $(".roomNumber").val(rooms[0].roomnumber);
      });

    $( ".allRooms" ).change(function() {
        $.get( "/getallrooms", ( rooms ) => {
            $id = rooms[this.selectedIndex]._id; 
            $(".roomNumber").val(rooms[this.selectedIndex].roomnumber);
          });
    });

    $( ".addRoom" ).click(function() {
        var data = {
            _id :  $id,
            roomnumber :  $(".roomNumber").val(),
        }
        $.post( "/createroom", data);
    });

    $( ".editRoom" ).click(function() {
        var data = {
            _id :  $id,
            roomnumber :  $(".roomNumber").val(),
        }
        $.post( "/updateroom", data);
    });


    $( ".deleteRoom" ).click(function() {
        var data = {
            _id :  $id,
            roomnumber :  $(".roomNumber").val(),
        }
        $.post( '/deleteroom', data, () => {
            window.location.reload();
        });
    });
});