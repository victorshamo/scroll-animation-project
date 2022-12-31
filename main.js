const boxes = document.querySelectorAll('.box')


window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    //at the console log it prompted that the window height is '943'
    //console.log(window.innerHeight)

    //setting the trigger point = 754
    //console.log(window.innerHeight / 5 * 4)

    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        //getBoundingClientRect() basically a rectangle with info about size and position
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    });

}
