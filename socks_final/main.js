const buttonBuy = document.querySelectorAll('.info a')
const priceHTML = document.querySelectorAll("#page1 > div > div > div.item > div > p")
const wrapper = document.querySelector('.wrapper')
const show = document.querySelector('#show')
const buyCounter = document.querySelector('.buy_counter p')
const price = 199
const userBuyBtn = document.querySelector('.user_buy')
const lastStep = document.querySelector('#pay_form')
const shadow = document.querySelector('#shadow')
const shadow2 = document.querySelector('#shadow2')
lastStep.style.display = ''

userBuyBtn.addEventListener('click', (ele) => {
    ele.preventDefault()
    console.log(lastStep.style.display)
    if (lastStep.style.display === '') {
        lastStep.style.display = 'flex'
        shadow2.style.display = 'block'
        cartItemPrice = document.querySelectorAll('.item_price')
        let cartItemSum = 0
        for (let m = 0; m < cartItemPrice.length; m++) {
            let help = cartItemPrice[m].textContent
            cartItemSum += +(help.trim().replace(/[^0-9]/g, ''))
        }
        lastFormBuyBtn = document.querySelector('.buy_btn')
        lastFormBuyBtn.textContent = `Оплатить ${cartItemSum} ₽`
        //lastFormBuyBtn.style.fontFamily = 'Montserrat-Italic'
    } else {
        lastStep.style.display = ''
        shadow2.style.display = 'none'
    }
})

window.onload = () => {
    priceHTML.forEach((priceElement) => {
        priceElement.textContent = `${price} ₽`
        const card1 = document.querySelector('#card_1')
        const card2 = document.querySelector('#card_2')
        const card3 = document.querySelector('#card_3')
        card1.textContent = `199 ₽`
        card2.textContent = `499 ₽`
        card3.textContent = `899 ₽`
    })
    buttonBuy.forEach((element) => {
        element.addEventListener ('click', (event) => {
            event.preventDefault()
            let checkItem = element.closest('.item')
            let checkItemId = checkItem.dataset.id
            const card = element.closest('.item')
            const cardCheck = card.getAttribute('class')
            if (cardCheck === 'item card') {
                const productInfo = {
                    id: card.dataset.id,
                    imgSrc: card.querySelector('img').getAttribute('src'),
                    price: card.querySelector('.price').innerText
                }
                const cartItemHTML = `<tr class="new" id="${productInfo.id}">
                    <td>
                        <a href="" class="delete unselectable">Удалить</a>
                    </td>
                    <td>
                        <img src="${productInfo.imgSrc}">
                    </td>
                    <td class="unselectable">
                        ---
                    </td>
                    <td>
                        <input type="number" value="1" class="item_count unselectable">
                    </td>
                    <td class="item_price unselectable">
                        ${productInfo.price}
                    </td>
                </tr>`
                wrapper.insertAdjacentHTML('beforeend', cartItemHTML)
            } else {
                const productInfo = {
                    id: card.dataset.id,
                    imgSrc: card.querySelector('img').getAttribute('src'),
                    price: card.querySelector('.price').innerText
                }
                const cartItemHTML = `<tr class="new" id="${productInfo.id}">
                    <td>
                        <a href="" class="delete unselectable">Удалить</a>
                    </td>
                    <td>
                        <img src="${productInfo.imgSrc}">
                    </td>
                    <td>
                        <select class="unselectable size">
                            <option>36-40</option>
                            <option>41-46</option>
                        </select>
                    </td>
                    <td>
                        <input type="text" value="1" class="item_count unselectable">
                    </td>
                    <td class="item_price unselectable">
                        ${productInfo.price}
                    </td>
                </tr>`
                wrapper.insertAdjacentHTML('beforeend', cartItemHTML)
            }
            if (element.firstChild.innerText === 'В корзину') {
                element.firstChild.innerText = 'Удалить из корзины'
                let cartCounter = document.querySelectorAll('.new')
                //i++
                buyCounter.textContent = `${cartCounter.length}`
            } else {
                element.firstChild.innerText = 'В корзину'
                let tbodyCount = document.querySelectorAll("table > tbody")
                for (let k = 0; k < tbodyCount.length; k++) {
                    let tbodyId = tbodyCount[k].firstChild.getAttribute('id')
                    if (checkItemId === tbodyId) {
                        tbodyCount[k].remove()
                    }
                }
                cartItemEmpty = document.querySelectorAll('.new')
                if (cartItemEmpty.length === 0) {
                    wrapper.style.display = 'none'
                }
                let cartCounter = document.querySelectorAll('.new')
                //i--
                buyCounter.textContent = `${cartCounter.length}`
            }
        })
    })
    wrapper.style.display = 'none'
    show.addEventListener ('click', (event2) => {
        event2.preventDefault()
        if (wrapper.style.display === 'none') {
            wrapper.style.display = 'block'
            shadow.style.display = 'block'
            let tbodyCount = document.querySelectorAll("table > tbody")
            let buyBtnBlock = document.querySelector('.items_price').textContent
            if (tbodyCount.length === 1) {
                userBuyBtn.style.color = '#ee171f'
                userBuyBtn.style.pointerEvents = 'none'
            } else {
                userBuyBtn.style.color = '#fff'
                userBuyBtn.style.pointerEvents = 'auto'
            }
            if (tbodyCount.length > 1) {
                const umnozhenie = document.querySelectorAll('.item_count')
                umnozhenie.forEach((znach) => {
                    if (+znach.value <= 0 || Number.isInteger(+znach.value) !== true || znach.value > 100) {
                        userBuyBtn.style.color = '#ee171f'
                        userBuyBtn.style.pointerEvents = 'none'
                    }
                    znach.addEventListener('input', (znachenie) => {
                        priceChange = znach.closest('tr')
                        priceChangeTd = priceChange.querySelector('.item_price')
                        priceItemId = priceChange.getAttribute('id')
                        priceItemFind = document.querySelector('[data-id="' + priceItemId + '"]')
                        priceItem = priceItemFind.querySelector('.price')
                        if (znach.value <= 0 || Number.isInteger(+znach.value) !== true || znach.value > 100) {
                            priceChangeTd.textContent = 'Ошибка'
                            cartItemPrices = document.querySelector('.items_price')
                            cartItemPrices.textContent = `Итого: 0 ₽`
                            userBuyBtn.style.color = '#ee171f'
                            userBuyBtn.style.pointerEvents = 'none'
                        } else {
                            priceChangeTd.textContent = `${+(priceItem.textContent.trim().replace(/[^0-9]/g, '')) * +(znach.value)} ₽`
                            cartItemPrice = document.querySelectorAll('.item_price')
                            let cartItemSum = 0
                            for (let m = 0; m < cartItemPrice.length; m++) {
                                let help = cartItemPrice[m].textContent
                                cartItemSum += +(help.trim().replace(/[^0-9]/g, ''))
                            }
                            cartItemPrices = document.querySelector('.items_price')
                            cartItemPrices.textContent = `Итого: ${cartItemSum} ₽`
                            userBuyBtn.style.color = '#fff'
                            userBuyBtn.style.pointerEvents = 'auto'
                            umnozhenie.forEach((znak) => {
                                if (+znak.value <= 0 || Number.isInteger(+znak.value) !== true || znak.value > 100) {
                                    userBuyBtn.style.color = '#ee171f'
                                    userBuyBtn.style.pointerEvents = 'none'
                                }
                            })
                        }
                    })
                })
                let deleteBtns = document.querySelectorAll('.delete')
                deleteBtns.forEach((deleteBtn) => {
                    deleteBtn.addEventListener('click', (event3) => {
                        event3.preventDefault()
                        deleteBtn.closest('tbody').remove()
                        deleteBtnCheck = document.querySelectorAll('.item_price')
                        deleteBtnCheck.forEach((delBtn) => {
                            if (delBtn.textContent.trim().replace(/[^0-9]/g, '') === '') {
                                userBuyBtn.style.color = '#ee171f'
                                userBuyBtn.style.pointerEvents = 'none'
                            } else {
                                userBuyBtn.style.color = '#fff'
                                userBuyBtn.style.pointerEvents = 'auto'
                            }
                        })

                        cartItemEmpty = document.querySelectorAll('.new')
                        buyCounter.textContent = `${cartItemEmpty.length}`
                        cartCounter = document.querySelector('.cart_counter')
                        cartCounter.textContent = `Количество товаров: ${cartItemEmpty.length} шт.`
                        cartItemPrice = document.querySelectorAll('.item_price')
                        let cartItemSum = 0
                        for (let m = 0; m < cartItemPrice.length; m++) {
                            let help = cartItemPrice[m].textContent
                            cartItemSum += +(help.trim().replace(/[^0-9]/g, ''))
                        }
                        cartItemPrices = document.querySelector('.items_price')
                        cartItemPrices.textContent = `Итого: ${cartItemSum} ₽`
                        if (cartItemEmpty.length === 0) {
                            wrapper.style.display = 'none'
                            shadow.style.display = 'none'
                        }
                        deleteBtnId = deleteBtn.closest('.new').getAttribute('id')
                        buttonBuy.forEach((elements) => {
                            if (elements.closest('.item').dataset.id === deleteBtnId) {
                                elements.firstChild.innerText = 'В корзину'
                            }
                        })
                    })
                })
            }
            cartItemCounter = document.querySelectorAll('.new')
            cartCounter = document.querySelector('.cart_counter')
            cartCounter.textContent = `Количество товаров: ${cartItemCounter.length} шт.`
            cartItemPrice = document.querySelectorAll('.item_price')
            let cartItemSum = 0
            for (let m = 0; m < cartItemPrice.length; m++) {
                let help = cartItemPrice[m].textContent
                cartItemSum += +(help.trim().replace(/[^0-9]/g, ''))
            }
            cartItemPrices = document.querySelector('.items_price')
            cartItemPrices.textContent = `Итого: ${cartItemSum} ₽`

        } else {
            lastStep.style.display = ''
            shadow2.style.display = 'none'
            wrapper.style.display = 'none'
            shadow.style.display = 'none'
        }
    })
}
const link1 = document.querySelector('#link1')
const link2 = document.querySelector('#link2')
const page1 = document.querySelector('#page1')
const page2 = document.querySelector('#page2')
const links = document.querySelectorAll('.links')

links.forEach((elementLink) => {
    elementLink.addEventListener('click', (linkClick) => {
        linkClick.preventDefault()
    })
})

link1.addEventListener('click', () => {
    page1.style.display = 'block'
    page2.style.display = 'none'
    lastStep.style.display = ''
    shadow2.style.display = 'none'
    if (wrapper.style.display === 'block') {
        wrapper.style.display = 'none'
        shadow.style.display = 'none'
    }
})

link2.addEventListener('click', () => {
    page1.style.display = 'none'
    page2.style.display = 'block'
    lastStep.style.display = ''
    shadow2.style.display = 'none'
    if (wrapper.style.display === 'block') {
        wrapper.style.display = 'none'
        shadow.style.display = 'none'
    }
})

lastBtns = document.querySelectorAll('.money a')
lastBtns.forEach( (lastBtn) => {
    lastBtn.addEventListener('click', (aabb) => {
        aabb.preventDefault()
    })
})

lastClose = document.querySelector('.close')
lastClose.addEventListener('click', (bbaa) => {
    lastStep.style.display = ''
    shadow2.style.display = 'none'
})

lastBuy = document.querySelector('.buy_btn')
lastBuy.addEventListener('click', (ababab) => {
    console.log(123)
})