$(document).ready(function(){
    $('.bt_remove').click(function(){
        let my_id = (this.id).toString();
        console.log(my_id)
        $.ajax({
            url: '/remove_from_cart',
            method: 'get',
            dataType: 'json',
            data: {
                id: my_id
            },
            success: function(response){
                console.log(response);
                location.reload();
            }
        });
    });
});
