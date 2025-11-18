

// お問い合わせボタン
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

// 
document.addEventListener("DOMContentLoaded", () => {
    // 監視対象を sideMore と middleMore の両方に
    const targets = document.querySelectorAll('.category_sideMore, .category_middleMore');
  
    // Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 画像アニメーション発火
          entry.target.classList.add('active');
  
          // 同じcategory_content内またはcategory_middleWrap内のテキストもフェードイン
          let wrap = entry.target.closest('.category_content')?.querySelector('.category_sideWrap');
          if (!wrap) {
            wrap = entry.target.closest('.category_content')?.querySelector('.category_middleWrap');
          }
          if (wrap) wrap.style.opacity = 1;
        }
      });
    }, {
      threshold: 0.8 // 50%見えたら発火
    });
  
    // 監視開始
    targets.forEach(el => observer.observe(el));
  });
  

// category_SP
document.addEventListener("DOMContentLoaded", () => {
  const spContents = document.querySelectorAll('.category_spContent');

  const spObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const elements = entry.target.querySelectorAll(
          '.category_spBox, .category_spWrap, .category_sp-middleBox, .category_sp-middleWrap'
        );

        elements.forEach((el, index) => {
          setTimeout(() => {
            el.classList.add('active'); // 付与
          }, index * 300);
        });

        spObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  spContents.forEach(el => spObserver.observe(el));
});



// スクロール FAQ_PC
document.addEventListener('DOMContentLoaded', () => {
    const faqAs = document.querySelectorAll('.faq_a');
    const faqQs = document.querySelectorAll('.faq_q');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          faqAs.forEach((a, index) => {
            // それぞれ違うタイミングで回答を飛び出す
            setTimeout(() => {
              a.classList.add('show');
              faqQs[index].classList.add('show'); // 対応する質問も左にスライド
            }, index * 2000); // 0ms, 400ms, 800ms, 1200ms など
          });

          observer.unobserve(entry.target); // 一度だけ発火
        }
      });
    }, { threshold: 0.3 });

    // FAQ全体を監視
    const faqWraps = document.querySelectorAll('.faq_wrap');
    faqWraps.forEach(wrap => observer.observe(wrap));
  });


// スクロール FAQ_SP
document.addEventListener('DOMContentLoaded', () => {
    const faqspAs = document.querySelectorAll('.faq_sp-q');
    const faqspQs = document.querySelectorAll('.faq_sp-a');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          faqspAs.forEach((a, index) => {
            // それぞれ違うタイミングで回答を飛び出す
            setTimeout(() => {
              a.classList.add('show');
              faqspQs[index].classList.add('show'); // 対応する質問も左にスライド
            }, index * 2000); // 0ms, 400ms, 800ms, 1200ms など
          });

          observer.unobserve(entry.target); // 一度だけ発火
        }
      });
    }, { threshold: 0.3 });

    // FAQ全体を監視
    const faqspWraps = document.querySelectorAll('.faq_spWrap');
    faqspWraps.forEach(wrap => observer.observe(wrap));
  });




//   
document.querySelectorAll('.category_spContent').forEach(el => {
    el.addEventListener('click', () => {
      el.classList.toggle('active');
    });
  });
