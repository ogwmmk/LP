$(function() {
    var $btn = $('.heading_contact, .service_contact');
    var interval;

    $btn.hover(
        function() {
            interval = setInterval(function() {
                var x = Math.random() * 10 - 5;      // -5px～+5px
                var y = Math.random() * 10 - 5;      // -5px～+5px
                var rotate = Math.random() * 4 - 2;  // -2°～+2°
                $btn.css('transform', 'translate(' + x + 'px,' + y + 'px) rotate(' + rotate + 'deg)');
            }, 150);
        },
        function() {
            clearInterval(interval);
            $btn.css('transform', 'translate(0,0) rotate(0deg)');
        }
    );
});



document.querySelectorAll('.faq_wrap').forEach(faqWrap => {
    const faqLeft = faqWrap.querySelector('.faq_left');
    const faqRight = faqWrap.querySelector('.faq_right');

    const leftQ = faqLeft.querySelector('.faq_q');
    const leftA = faqLeft.querySelector('.faq_a');

    const rightQ = faqRight.querySelector('.faq_q');
    const rightA = faqRight.querySelector('.faq_a');

    // 左FAQ
    const showLeft = () => {
        leftQ.classList.add('active');
        faqLeft.style.transform = 'translateX(-120px)';
        faqRight.style.transform = 'translateX(200px)';
    };
    const hideLeft = () => {
        leftQ.classList.remove('active');
        faqLeft.style.transform = 'translateX(0)';
        faqRight.style.transform = 'translateX(0)';
    };

    leftQ.addEventListener('mouseenter', showLeft);
    leftA.addEventListener('mouseenter', showLeft);

    leftQ.addEventListener('mouseleave', hideLeft);
    leftA.addEventListener('mouseleave', hideLeft);

    // 右FAQ
    const showRight = () => {
        rightQ.classList.add('active');
        faqRight.style.transform = 'translateX(-100px)';
        faqLeft.style.transform = 'translateX(-100px)';
    };
    const hideRight = () => {
        rightQ.classList.remove('active');
        faqRight.style.transform = 'translateX(0)';
        faqLeft.style.transform = 'translateX(0)';
    };

    rightQ.addEventListener('mouseenter', showRight);
    rightA.addEventListener('mouseenter', showRight);

    rightQ.addEventListener('mouseleave', hideRight);
    rightA.addEventListener('mouseleave', hideRight);
});


