let token = '5868018815:AAH0waNag4IY3tfEqQXNzb7tOumZ3fcOkJc';
let chatid = '-992540178';
let tgForm = document.getElementById('tg');
const sendUrl = `https://api.telegram.org/bot${token}/sendMessage`;

const leftArrow = document.getElementById('sliderArrowLeft');
const rightArrow = document.getElementById('sliderArrowRight');
const carousel = document.querySelector('.sliderItems');
const firstImg = carousel.querySelectorAll('.sliderImg')[0];
let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 100;

console.log(firstImg)
tgForm.addEventListener('submit', function(e) {
    e.preventDefault()
    let message = `
        <b>Заявка</b>\n🦬 ФИО: ${this.username.value}\n📞 Номер Телефона: ${this.phoneforex[main].value}\n✉️ Email: ${this.email.value}\n🌎 Страна: страна\n📌 Pixel: #pixel`;
    console.log(message)
    axios.post(sendUrl, {
        chat_id: chatid,
        parse_mode: 'html',
        text: message
    }).then(() => {
        this.name.value = ''
        this.phone.value = ''
        this.email.value = ''
    })
});

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    carousel.scrollLeft = e.pageX;
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}
const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragStop = () => {
    isDragStart = false;
}
carousel.addEventListener('mousedown', dragStart)
carousel.addEventListener('mousemove', dragging)
carousel.addEventListener('mouseup', dragStop)

rightArrow.addEventListener('click', () => {
    carousel.scrollLeft += firstImgWidth;
    console.log('right')
})
leftArrow.addEventListener('click', () => {
    carousel.scrollLeft -= firstImgWidth;
})