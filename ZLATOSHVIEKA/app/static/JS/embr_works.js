$(document).ready(function(){
    $('.flex_element').click(function(e){
        e.preventDefault();
        let my_id = (this.id).toString();
        //localStorage.setItem('m_id', my_id);
        $.ajax({
            url: '/get_des_id',
            method: 'get',
            dataType: 'json',
            data: {
                id: my_id
            },
            success: function(response){window.location.href='profile_ware.html'}
        });
    });
});
