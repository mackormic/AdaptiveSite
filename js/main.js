const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/header/Nav-close.svg";
    } else {
        navBtnImg.src = "./img/header/Nav-open.svg";
    }
}


  AOS.init(
//для отключения на мобильнике
// {
//     disable: 'mobile'
// }

// для анимации только 1 раз
//     {
//     once: true
//   }
  );
