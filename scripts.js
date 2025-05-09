let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const offset = -index * 100 + '%';
    document.querySelector('.slider-container').style.transform = `translateX(${offset})`;
}

document.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        // 向下滑动
        currentIndex = (currentIndex + 1) % totalSlides;
    } else {
        // 向上滑动
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    }
    showSlide(currentIndex);
});

// 初始化显示第一张图片
showSlide(currentIndex);