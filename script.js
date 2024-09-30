document.addEventListener('DOMContentLoaded', function() {
//typiing
  const typingText = "Join SKYLER coding club today!";
  let typingIndex = 0;

  const typingTextElement = document.getElementById('typing-text');

  function typeTypingText() {
      if (typingIndex < typingText.length) {
          typingTextElement.textContent += typingText.charAt(typingIndex);
          typingIndex++;
          setTimeout(typeTypingText, 100);
      }
  }

  typeTypingText();

//汉堡菜单
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function(event) {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        event.stopPropagation(); // 阻止事件冒泡
    });
    document.addEventListener("click", function () {
      if(navLinks.style.display === 'flex'){
        navLinks.style.display =  'none';
      }
    });


//报名
    // const signupForm = document.getElementById('signupForm');
    // signupForm.addEventListener('submit', function(e) {
    //     e.preventDefault();
    //     const name = e.target[0].value;
    //     const age = e.target[1].value;
    //     const phone = e.target[2].value;
    //
    //     const emailBody = `Name: ${name}\nAge: ${age}\nPhone: ${phone}`;
    //     window.location.href = `mailto:jie164@icloud.com?subject=Student Registration&body=${encodeURIComponent(emailBody)}`;
    //     signupForm.reset();
    // });

//scroll 触发
    const courses = document.querySelectorAll('.course-item');
    const lineContainers = document.querySelectorAll('.line-container');

    function checkVisibility() {
        const triggerPoint = window.innerHeight * 0.75; // 设定触发的阈值

        // 检测课程卡片
        courses.forEach(course => {
            const boxTop = course.getBoundingClientRect().top; // 获取卡片顶部相对于视口的距离

            if (boxTop < triggerPoint) {
                course.classList.add('visible'); // 添加visible类
            }
            else {
              if (course.classList.contains('visible')) {
                course.classList.remove('visible')
              }
            }
            // 检测竖线容器
            lineContainers.forEach((lineContainer, index) => {
                const prevCourse = courses[index]; // 当前竖线前面的卡片
                const boxBottom = prevCourse.getBoundingClientRect().bottom; // 获取前面卡片底部相对于视口的距离
                if (boxBottom < triggerPoint) {
                    lineContainer.classList.add('visible'); // 添加visible类
                }
                else {
                  if (lineContainer.classList.contains('visible')) {
                    lineContainer.classList.remove('visible')
                  }
                }
            });
        });



    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // 初始检查





});

//scroll trigger
const triggers = document.querySelectorAll('.scroll-trigger');

triggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});



//详细

const modals = [document.getElementById("myMathModal"), document.getElementById("myScratchModal"), document.getElementById("myPythonModal")];
const btns = [document.getElementById("Math"), document.getElementById("Scratch"),document.getElementById("Python")];
const closeBtns = document.getElementsByClassName("close");
//const registerBtns = document.getElementsByClassName("btn");
btns.forEach((btn, index) => {
    btn.onclick = function() {
        modals[index].style.display = "flex";
    }
});

Array.from(closeBtns).forEach((span) => {
    span.onclick = function() {
        const modal = span.closest('.modal'); // 获取最近的模态框
        modal.style.display = "none";
    }
});


window.onclick = function(event) {
    modals.forEach((modal) => {
        if (event.target === modal) { // 判断是否点击了模态框外部
            modal.style.display = "none"; // 关闭模态框
        }
    });
}

function register(course){
  const expectedCourse = document.getElementById("expectedCourse");
  const modal = event.target.closest('.modal'); // 获取最近的模态框
  modal.style.display = "none";
  expectedCourse.value = course;
}

//stars
// const createStars = () => {
//     const numStars = 50; // 调整星星数量
//     for (let i = 0; i < numStars; i++) {
//       console.log("star");
//         const star = document.createElement('div');
//         star.className = 'star';
//         const size = Math.random() * 3 + 1; // 星星大小在1到4px之间
//         star.style.width = `${size}px`;
//         star.style.height = `${size}px`;
//         star.style.top = `${Math.random() * 100}vh`;
//         star.style.left = `${Math.random() * 100}vw`;
//         star.style.animationDelay = `${Math.random() * 1.5}s`; // 随机延迟
//         document.getElementById('starcontainer').appendChild(star);
//     }
// };
//
// createStars();

//lunbo
let currentIndex = 0;
let intervalId;

function showImage(index) {
    const images = document.querySelectorAll('.carousel-image');
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % document.querySelectorAll('.carousel-image').length;
    showImage(currentIndex);
}

function startCarousel() {
    intervalId = setInterval(nextImage, 2000); // 每2秒切换一次
}

function stopCarousel() {
    clearInterval(intervalId);
}

// 启动轮播
startCarousel();
