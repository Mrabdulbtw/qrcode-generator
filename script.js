const gen = document.querySelector(`#generat`)
const text = document.querySelector(`.text`)
const imgbox = document.querySelector(`.img-box`)



gen.addEventListener(`click`, () => {



    if (text.value.trim().length > 0) {
        let qrcode = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.value}`
        qrimg.src = qrcode

        imgbox.classList.add(`show-box`)




    } else {
        text.classList.add(`error`)
        setTimeout(() => {
            text.classList.remove(`error`)
        }, 1000);

    }
})
