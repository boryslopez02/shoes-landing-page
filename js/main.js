const btnM = document.getElementById('btn-menu'),
menu = document.getElementById('menu'),
shoe = document.getElementById('shoe'),
shoe2 = document.getElementById('shoe2'),
shoe3 = document.getElementById('shoe3'),
shoes = document.querySelectorAll('.content .box .img'),
text = document.querySelectorAll('.text h1'),
shopbtn = document.getElementById('shop-btn'),
toolt = document.querySelectorAll('.content .box .tooltips span')
let count = 0

btnM.addEventListener('click', () => {
    menu.classList.toggle('active')
    if (count === 0) {
        document.body.style.overflow = 'hidden'
        count++
    } else {
        document.body.style.overflow = 'auto'
        count--
    }
});

window.addEventListener('mousemove', MoveItems)

function MoveItems(e) {
    x = e.clientX / 30
    y = e.clientY / 30
    
    shoe.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)'
    shoe2.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)'
    shoe3.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)'

    text.forEach(element => {
        element.style.transform = 'translateX(' + Math.random() * x + 'px) translateY(' + Math.random() * y + 'px)'
    });

    shopbtn.style.transform = 'translateX(' + Math.random() * x + 'px) translateY(' + Math.random() * y + 'px)'
}

toolt.forEach(element => {
    element.addEventListener('click', () => {
        toolt.forEach(element => element.classList.remove('active'))
        element.classList.add('active')
        if (element.getAttribute('id') === 'btnS1') {
            shoe.classList.add('active')
            shoe2.classList.remove('active')
            shoe3.classList.remove('active')
        } 
        else if (element.getAttribute('id') === 'btnS2') {
            shoe2.classList.add('active')
            shoe.classList.remove('active')
            shoe3.classList.remove('active')
        }
        else if (element.getAttribute('id') === 'btnS3') {
            shoe3.classList.add('active')
            shoe.classList.remove('active')
            shoe2.classList.remove('active')
        }
    });
});

/* GSAP */
gsap.from('.header .logo', {
    delay: 4,
    duration: 2,
    y: -100,
    ease: 'bounce',
})

gsap.to('.header .logo', {
    delay: 4,
    duration: 2,
    opacity: 1
})

gsap.from('.header .menu a', {
    delay: 4.3,
    duration: .3,
    x: -150,
    ease: 'ease-in',
    stagger: 0.2
})

gsap.to('.header .menu a', {
    delay: 4.3,
    duration: .3,
    opacity: 1,
    stagger: 0.2
})

gsap.from('#circle', {
    delay: 1,
    duration: 2,
    opacity: 0
})

gsap.from('.content .text .glass', {
    duration: .6,
    y: -100,
    ease: 'bounce',
})

gsap.to('.content .text .glass', {
    duration: .6,
    opacity: 1
})

gsap.from('.content .text .h1', {
    delay: 1,
    duration: .8,
    y: -100,
    ease: 'bounce',
})
gsap.to('.content .text .h1', {
    delay: 1,
    duration: .8,
    opacity: 1
})

gsap.from(shopbtn, {
    delay: 1.8,
    duration: .5,
    y: 50,
    ease: 'bounce',
    opacity: 0
})

gsap.from('.content .sale-text .text .btn', {
    delay: 1.8,
    duration: .5,
    y: 50,
    ease: 'bounce',
    opacity: 0
})
gsap.to('.content .sale-text .text .btn', {
    delay: 1.8,
    duration: .5,
    opacity: 1
})

gsap.to(shopbtn, {
    delay: 1.8,
    duration: .5,
    opacity: 1
})

gsap.from('.sale', {
    delay: 3,
    duration: .5,
    x: 100,
    ease: 'ease',
    opacity: 0,
})

gsap.from('.sale span', {
    delay: 3.5,
    duration: .5,
    x: 100,
    ease: 'linear',
    opacity: 0,
    stagger: .4
})

gsap.from('.footer .social a', {
    delay: 3,
    duration: 1,
    y: 30,
    ease: 'ease',
    stagger: .5
})

gsap.to('.footer .social a', {
    delay: 3,
    duration: 1,
    opacity: 1,
    stagger: .5
})





