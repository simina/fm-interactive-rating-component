const ratingElements = document.querySelectorAll('.circle-rating')
rateArea = document.querySelector('.rate-start')
thankYouArea = document.querySelector('.thank-you')
btnSubmit = document.querySelector('button')
ratingResult = document.querySelector('#rating-result');

ratingElements.forEach(ratingElement => {
    ratingElement.addEventListener('click', (ev) => {
        ratingElements.forEach(re => {
            if (ev.target !== re.target && re.classList.contains("circle-selected")) {
                re.classList.toggle("circle-selected");
            }
        })

        ev.target.classList.toggle("circle-selected");
    })
})

btnSubmit.addEventListener('click', () => {
    let isSelected = false;

    ratingElements.forEach(re => {
        if (re.classList.contains("circle-selected")) {
            isSelected = true;
            ratingResult.textContent = re.textContent;
            rateArea.classList.toggle("no-visibility");
            thankYouArea.classList.toggle("no-visibility");
        }
    })
    if (!isSelected) {
        alert('Please select a rating first!');
    }
})