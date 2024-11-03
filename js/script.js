window.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      header.classList.add("fixed-header");
      
    } else {
      header.classList.remove("fixed-header");
    }
  });

  
  const open_close_article = () => {
    const toggleButton = document.getElementById('toggleButton');
    const text = document.querySelector('.article');
    
    toggleButton.addEventListener('click', function() {
        if (text.classList.contains('text-article_height')) {
            text.classList.remove('text-article_height');
            toggleButton.innerHTML = `
                 <span class="text-[blue] text-[12px] font-bold">نمایش کمتر</span>
                <img src="./media/down-arrow.png" class="w-[7%] h-[2%]" alt="">
            `;
            text.style.filter = 'blur(0px)';
        } else {
            text.classList.add('text-article_height');
            toggleButton.innerHTML = `
                <span class="text-[red] text-[12px] font-bold">نمایش بیشتر</span>
                <img src="./media/up-arrow (1).png" class="w-[7%] h-[2%]" alt="">
            `;
            text.style.filter = 'blur(1px)';
        }
    });
};


open_close_article();

  