class Vendingmachine {
    constructor() {
        const vMachine = document.querySelector('.vending-machine');
        this.balance = vMachine.querySelector('.txt-balance');
        this.itemList = vMachine.querySelector('.list-item');
        this.inputCostEl = vMachine.querySelector('.inp-put');
        this.btnPut = vMachine.querySelector('.btn-put');
        this.btnReturn = vMachine.querySelector('.btn-return');
        this.btnGet = vMachine.querySelector('.btn-get');
        this.stagedList = vMachine.querySelector('.list-item-staged');

        const myinfo = document.querySelector('.my-info');
        this.myMoney = myinfo.querySelector('.txt-mymoney');
        this.gotList = myinfo.querySelector('.list-item-staged');
        this.txtTotal = myinfo.querySelector('.txt-total');
    }
    setup() {
        this.bindEvents();
    }

    // 선택한 음료수 목록 생성
    stagedItemGenerator(target) {
        const stagedItem = document.createElement('li');
        // li에도 data프로퍼티를 넣는데 그 이유는 오른쪽에 동일한 정보를 그려주기 위해서이다.
        stagedItem.dataset.item = target.dataset.item;
    }

    bindEvents() {
        /*
         * 1. 입금 버튼 기능
         * 입금액을 입력하고 입금 버튼을 누르면 소지금 == 소지금 - 입금액, 잔액 == 기존 잔액 + 입금액이 됩니다.
         * 입금액이 소지금 보다 많다면 실행을 중단하고 "소지금이 부족합니다." 라고 쓰인 경고창을 띄웁니다.
         * 입금액 인풋창은 초기화됩니다.
         * */

        // 화살표함수를 쓰지않고 function을 쓰게되면 이벤트를 부른 그녀석 자체를 가리키므로 안에서
        // this라는 키워드를 썼을떄 인식하지 못함.
        // 그러나 콜백함수를 쓰면 this가 상위객체를 가리키므로 this가 인식을함
        this.btnPut.addEventListener('click', (event) => {
            const inputCost = parseInt(this.inputCostEl.value);
            const myMoneyVal = parseInt(
                this.myMoney.textContent.replaceAll(',', '')
            );
            const balanceVal = parseInt(
                this.balance.textContent.replaceAll(',', '')
            );

            if (inputCost) {
                // 입금액이 소지금보다 적다면
                if (inputCost <= myMoneyVal && inputCost > 0) {
                    this.myMoney.textContent =
                        // Intl.NumberFormat은 문자열을 반환
                        new Intl.NumberFormat().format(myMoneyVal - inputCost) +
                        ' 원';
                    this.balance.textContent =
                        // myMoney 가 소지금 balance가 잔액 입금이 input
                        new Intl.NumberFormat().format(
                            (balanceVal ? balanceVal : 0) + inputCost
                        ) + ' 원';
                } else {
                    alert('소지금이 부족합니다.');
                }
                this.inputCostEl.value = null;
            }
        });

        /*
         * 2. 거스름돈 반환 버튼 기능
         * 반환 버튼을 누르면 소지금 == 소지금 + 잔액이 됩니다.
         * 반환 버튼을 누르면 잔액 창은 초기화됩니다.
         */

        this.btnReturn.addEventListener('click', () => {
            const balanceVal = parseInt(
                this.balance.textContent.replaceAll(',', '')
            );
            const myMoneyVal = parseInt(
                this.myMoney.textContent.replaceAll(',', '')
            );

            if (balanceVal) {
                // myMoney 가 소지금 balance가 잔액 입금이 input
                this.myMoney.textContent =
                    new Intl.NumberFormat().format(balanceVal + myMoneyVal) +
                    '원';
                this.balance.textContent = ' 원';
            }
        });

        /*
         * 3. 자판기 메뉴 기능
         * 아이템을 누르면 잔액 == 잔액 - 아이템 가격이 됩니다.
         * 아이템 가격보다 잔액이 적다면 "잔액이 부족합니다. 돈을 입금해주세요" 경고창이 나타납니다.
         * 아이템이 획득가능 창에 등록됩니다.
         * 아이템 버튼의 data-count 값이 -1 됩니다.
         * 만약 data-count 값이 0 이라면 부모 li에 sold-out 클래스를 붙여줍니다.
         * 이벤트 위임을 사용하게 되면 자식요소들에게 이벤트가 전파가 되는데 이렇게되면 접근성측면에서 안좋다
         * 그 이유는 스크린 리더가 이벤트를 읽을때 해당요소에 이벤트가 달려있어야 읽는데 이벤트위임을 하게되면
         * 실제로 그 요소에는 이벤트가 달려있지 않은것이므로 읽지를 않음.
         */

        const btnsCola = this.itemList.querySelectorAll('button');

        btnsCola.forEach((item) => {
            // myMoney 가 소지금 balance가 잔액 입금이 input
            item.addEventListener('click', (event) => {
                const targetEl = event.currentTarget;
                const balanceVal = parseInt(
                    this.balance.textContent.replaceAll(',', '')
                );
                let isStaged = false; // 이미 선택되었는가 ?
                const targetElPrice = parseInt(targetEl.dataset.price);
                const stagedListItem = this.stagedList.querySelectorAll('li');

                //
                if (balanceVal >= targetElPrice) {
                    this.balance.textContent =
                        new Intl.NumberFormat().format(
                            balanceVal - targetElPrice
                        ) + ' 원';

                    if (!isStaged) {
                        this.stagedItemGenerator(targetEl);
                    }
                } else {
                    alert('잔액이 부족합니다. 돈을 입금해주세요');
                }
            });
        });
    }
}

export default Vendingmachine;
