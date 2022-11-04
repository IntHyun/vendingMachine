// 콜라를 생산해내는 클래스입니다.
// 직접 생산하여 HTML로 쏴줌
class ColaGenerator {
    constructor() {
        this.itemList = document.querySelector('.list-item');
    }

    // setup함수가 실행되면 로드데이타 함수가 실행이됨
    // 쭊쭊 실행하다가 json파일을 가져오고 끝이나는데 끝이나면서 콜백함수를 실행시킨다.
    // 콜백함수는 인자로 제이슨을 로드데이타의 인자로 전달함
    // 콜백함수는 콜라팩토리를 실행시킴
    // 그 뒤 json이 콜라팩토리의 인자로 들어감.
    // setup함수를 따로만든 이유는 여러번 사용하였을 때의 메서드의 일관성을 위해서이다.
    async setup() {
        await this.loadData((json) => {
            this.colaFactory(json);
        });
    }

    async loadData(callback) {
        // // 엑쎄멜 리퀘스트 함수가 실행되면 서버와 통신하기위해 객체가 생성되고 변수에 저장됨.
        // const requestObj = new XMLHttpRequest();
        // requestObj.open('GET', 'js/item.json'); // 두번째 인자로 서버주소를 요청하여 서버를 오픈
        // // 요청이 시작되고 요청에 변화가 있을 때 콜백함수를 실행시킴
        // requestObj.onreadystatechange = () => {
        //     // readyState 가 변화되면 트리거
        //     // stauts는 클라이언트에서 요청을주면 요청을 처리하는 과정에서 아무런 문제가 없음을 의미한다.
        //     // status는 처리하는 과정이 잘 되었습니까? => 200이면 문제없이 잘 되었습니다~
        //     // readyState는 처리되는 상태를 의미
        //     // readtState는 서버로부터 당신이 서버로부터 요청한 과정이 어떠한 과정에 있습니다~ 라는 말이다.
        //     // https://developer.mozilla.org/ko/docs/Web/HTTP/Status
        //     // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
        //     if (requestObj.readyState === 4 && requestObj.status === 200) {
        //         // json 데이터가 responseText에 들어가는 것임.
        //         callback(JSON.parse(requestObj.responseText));
        //     }
        // };
        // // 잘받았다~ 따로 더 보낼 데이터는 없으니 null이나 받아라ㅋ
        // requestObj.send(null);
        // 데이터를 받아올때와 데이터를 사용할때 await을 사용합니다.
        const response = await fetch('js/item.json');
        // okay의 의미는 스테이터스 200이랑 똑같습니다.
        // 즉, http 상태코드가 200~299일경우를 의미하며 이때 true를 반환합니다.
        // 불값을 반환
        if (response.ok) {
            callback(await response.json()); //
        } else {
            alert('통신에러' + response.status);
        }
    }

    // 받아오는 값은 json데이터
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
            // this.itemList.appendChild(item);
            docFrag.appendChild(item);
        });
        this.itemList.appendChild(docFrag);
    }
}

// 엑스포트할 것이 하나라면 디폴트써주면 됨
export default ColaGenerator;
// export {한줄이 아니라면 이안에다 나열}

/*XML 파일을 서버와 비동기적으로 주고받기위해 등장한게 Ajax인거고 그렇다고 XML만 오갈수 있는게 아니라 JSON같은 다른 파일 포멧도 가능한거고

XMLHttpRequest 생성자가 Ajax 통신을 할 때 필요한 인스턴스를 제공해주고 그 인스턴스를 활용해서 통신하는게 Ajax

fetch는 그 후 등장 */
