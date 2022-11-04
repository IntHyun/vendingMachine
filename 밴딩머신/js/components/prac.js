class ColaGenerator2 {
    constructor() {
        this.itemList = document.querySelector('.list-item');
    }

    setup() {
        this.loadData((json) => {
            this.colaFactory(json);
        });
    }

    loadData(callback) {
        const requestObj = new XMLHttpRequest();
        requestObj.open('GET', 'js/item.json');
        console.log(requestObj);
        requestObj.onreadystatechange = () => {
            if (requestObj.readyState === 4 && requestObj.status === 200) {
                callback(JSON.parse(requestObj.responseText));
            }
        };
        requestObj.send(null);
        // const response = await fetch('js/item.json');
        // if (response.ok) {
        //     callback(await response.json());
        // } else {
        //     alert('통신에러' + response.status);
        // }
    }
    colaFactory(data) {
        const docFrag = document.createDocumentFragment();
        data.forEach((el) => {
            const item = document.createElement('li');
            const itemTemplate = `
            <button type="button" class="btn-item" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
                <img src="src/images/${el.img}" alt="" class="img-item">
                <strong class="tit-item">${el.name}</strong>
                <span class="txt-price">${el.cost}원</span>
            </button>
            `;
            item.innerHTML = itemTemplate;

            docFrag.appendChild(item);
        });
        this.itemList.appendChild(docFrag);
    }
}

export default ColaGenerator2;
