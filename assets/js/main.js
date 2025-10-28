$(function() {
    var $btn = $('.heading_contact, .service_contact');
    var interval;

    $btn.hover(
        function() {
            // ホバー中、大きめでゆったり揺れる
            interval = setInterval(function() {
                var x = Math.random() * 10 - 5;      // -5px～+5px
                var y = Math.random() * 10 - 5;      // -5px～+5px
                var rotate = Math.random() * 4 - 2;  // -2°～+2°
                $btn.css('transform', 'translate(' + x + 'px,' + y + 'px) rotate(' + rotate + 'deg)');
            }, 150); // 150msごとに更新してゆったり
        },
        function() {
            // ホバー解除で元に戻す
            clearInterval(interval);
            $btn.css('transform', 'translate(0,0) rotate(0deg)');
        }
    );
});


