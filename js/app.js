const parallax_el = document.querySelectorAll('.parallax');
const main = document.querySelector('main');

let xValue = 0,
  yValue = 0;
  
let rotateDegree = 0;

const update = (cursorPosition) => {
  parallax_el.forEach((el) => {
    let speedX = el.dataset.speedx;
    let speedY = el.dataset.speedy;
    let speedZ = el.dataset.speedz;
    let rotateSpeed = el.dataset.rotation;

    // let forTest = document.querySelectorAll('.mountain-2');

    let isInLeft =
      parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;

    let zValue =
      (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

    // console.log(zValue);

    el.style.transform = `translateX(calc(-50% + ${
      -xValue * speedX
    }px)) rotateY(${rotateDegree * rotateSpeed}deg) translateY(calc(-50% + ${
      yValue * speedY
    }px)) perspective(2300px) translateZ(${zValue * speedZ}px)`;
  });
}

update(0);

window.addEventListener('mousemove', (e) => {
  if (timeline.isActive()) return;


  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

  rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

  // console.log(rotateDegree);

  // console.log(xValue, yValue);

  update(e.clientX);

});

if (window.innerWidth >= 725) {
  main.style.maxHeight = `${window.innerHeight}px`;
} else {
  main.style.maxHeight = `${window.innerHeight * 1.6}px`;

}

// GSAP ANIMATION

let timeline = gsap.timeline();

// Array.from(parallax_el).filter(el => !el.classList.contains('text')).forEach(el => {
//   timeline.from(
//     el,
//     {
//       top: `${el.offsetHeight / 2 + el.dataset.distance}px`,
//       duration: 1,
//       ease: 'power3.out',
//     },
//     '1'
//   );
// });

// timeline.from('.text h1',
//   {
//     y: window.innerHeight - document.querySelector('.text h1').getBoundingClientRect().top,
//     duration: 2,
//   },
//   '2.5'
// ).from('text h2',
//   {
//     y: -150,
//     opacity: 0,
//     duration: 1.5,
//   },
//   '3'
// ).from('hide', {
//   opacity: 0,
//   duration: 1.5,
//   },
//   '3'
// );
