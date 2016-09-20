/**
 * Created by SiddhantShah on 6/27/16.
 */
$(document).ready(function(){
    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
        if($('.overlay').height()==0){
            $('.overlay').css('height','100%');
        }
        else{
            $('.overlay').css('height','0');

        }

    });

});
