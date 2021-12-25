$(document).ready(function(){
    let idx = 0;
    let images_path;
    let d_id = $('div.content').attr('id');
    //let d_id = localStorage.getItem('m_id');
    console.log(d_id);
    $.ajax({
            url: '/get_imgs',
            method: 'get',
            dataType: 'json',
            data: {design_id: d_id},
            success: function(response){
                images_path = response.split('|');
                images_path[0] = images_path[0].substr(1);
                images_path[images_path.length - 1] = images_path[images_path.length - 1].substr(0, images_path[images_path.length - 1].length - 1);
            }
    });
    $('#idBtchr_rght').click(function(){
        idx++;
        if (idx >= images_path.length) idx = 0;
        set_image(images_path[idx]);
    });

    $('#idBtchr_lft').click(function(){
        idx--;
        if (idx < 0) idx = images_path.length - 1;
        set_image(images_path[idx]);
    });

    function set_image(path){
        console.log('<img id="idImg_violin" class="Img_violin" src="static/image/">' + path + '">');
        $('#idImg_violin').prop('src', 'static/image/'+path);
    }

    $('#idBt_put_to_cart').click(function(){
        $.ajax({
            url: '/add_to_cart_design',
            method: 'get',
            dataType: 'json',
            data: {design_id: d_id},
            success: function(response){
                console.log(response);
            }
    });
    });
});
