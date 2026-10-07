const variants = {
    100: {
        article: '01306',
        oldPrice: '349,20 ₽',
        currentPrice: '326,40 ₽',
    },
    500: {
        article: '01307',
        oldPrice: '1 646 ₽',
        currentPrice: '1 432 ₽',
    },
    1000: {
        article: '01308',
        oldPrice: '2 592 ₽',
        currentPrice: '2 064 ₽',
    },
    5000: {
        article: '01309',
        oldPrice: '8 710 ₽',
        currentPrice: '6 320 ₽',
    },
};

const packageButtons = document.querySelectorAll('.package-option');
const articleElement = document.querySelector('#product-article');
const oldPriceElement = document.querySelector('#old-price');
const currentPriceElement = document.querySelector('#current-price');

packageButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const size = button.dataset.size;
        const selectedVariant = variants[size];

        articleElement.textContent = selectedVariant.article;
        oldPriceElement.textContent = selectedVariant.oldPrice;
        currentPriceElement.textContent = selectedVariant.currentPrice;

        packageButtons.forEach((item) => {
            item.setAttribute('aria-pressed', 'false');
        });

        button.setAttribute('aria-pressed', 'true');
    });
});
