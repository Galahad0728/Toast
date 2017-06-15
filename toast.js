var setPosition = function(a,b,c){
    if(a == 'bottom'){
        c.css({'top':'auto','bottom':b + 'px'});
    }
    else{
        if(a == 'top'){
            c.css({'top':b + 'px','bottom':'auto'});
        }
    }
}
toast = function(e){
    var msg = typeof(e.msg) == 'undefined' ? '我是toast默认msg':e.msg;
    var positionstr = typeof(e.position) == 'undefined' ? 'center':e.position;
    position = positionstr.split(' ')[0];
    var positionVal = typeof(positionstr.split(' ')[1]) == 'undefined' ? '50':positionstr.split(' ')[1];
    var duration = typeof(e.duration) == 'undefined' ? '1500':e.duration;
    var type = typeof(e.type) == 'undefined' ? 'fade':e.type;

    if($('.toast-wrapper').length == 1){
        toastDom.find('.msg').text(msg);
        setPosition(position , positionVal , toastDom);
        toastDom.show();
        var time2 = setTimeout('toastDom.fadeOut(1000)',duration);
    }
    else{
        var Domstr = '<div class="toast-wrapper"><div class="msg">' + msg + '</div></div>';
        $('body').append(Domstr);
        toastDom = $(".toast-wrapper");
        setPosition(position , positionVal , toastDom);
        toastDom.show();
        var time1 = setTimeout('toastDom.fadeOut(1000)',duration);
    }
}