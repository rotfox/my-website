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

// 添加触摸事件监听器
let touchStartX = 0;
let touchEndX = 0;
const swipeThreshold = 50; // 最小滑动距离

document.addEventListener('touchstart', function(event) {
    touchStartX = event.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', function(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;
    if (swipeDistance > swipeThreshold) {
        // 向右滑动 (上一张)
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    } else if (swipeDistance < -swipeThreshold) {
        // 向左滑动 (下一张)
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }
}
