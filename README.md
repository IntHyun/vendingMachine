# 🥤vendingMachine

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/68059880/210050107-d56dca13-4ced-4073-8964-6a9f466aac2f.gif)

<a href="#">▶️ 벤딩머신 사용해보러 가기</a>

<br><br>

## 📝 About Project

### 소지금을 입금하고 입금된 금액으로 자판기에서 음료를 구매하는 애플리케이션입니다.

- Vanilla Javascript로 웹 컴포넌트화
- figma를 이용하여 디자이너의 요구사항대로 구현
- 웹 접근성을 고려하여 기능을 구현 하였으며 LighHouse의 접근성 점수 100점을 받았습니다.

## 🐛 Details

- 음료에 대한 데이터를 따로 분리해주기 위해 json파일을 만들어 판매할 음료리스트들을 작성해준 뒤 fetch로 데이터를 받아와 화면에 렌더링 해주었습니다.

- 돈이 모자랄 경우 alert창을 활용하여 돈이 모자라다는 경고창을 띄워주었습니다

- 거스름돈 반환버튼을 누를경우 남은 소지금과 거스름돈이 합쳐저 총 소지금이 됩니다.

- 버튼을 누르면 상품이 장바구니에 하나씩 담기게 되고 모두 구매하게 되면 품절이라는 이미지로 대체되며 품절이 된 음료는 클릭할 수 없도록 하였습니다.

## 📕 Description

### 잔액 부족
![image](https://user-images.githubusercontent.com/68059880/210051354-864832e0-acf6-4cab-b6cc-ae49501625b2.png)
- 잔액이 부족할 시에 알람창을 띄워줍니다.

### 입금
![image](https://user-images.githubusercontent.com/68059880/210050865-bc1d31fb-de8f-472c-93a0-1e715969819a.png)<br>
- 소지금을 원하는만큼 입금 할 수 있으며 입금을 하면 소지금에서 입금한 금액만큼이 차감이 됩니다.

### 거스름돈 반환
![image](https://user-images.githubusercontent.com/68059880/210050904-30a7e282-445e-43e4-a528-5eee1d76338c.png)
- 거스름돈을 반환하면 남은 잔액이 모두 반환되며 남은 소지금 + 거스름 돈이 더해져 소지금이 됩니다.

### 구매
![image](https://user-images.githubusercontent.com/68059880/210051446-565c2969-68f7-4ea5-a826-78d914829543.png)

- 잔액이 입금된 상태에서 음료 구매가 가능하며 아래의 장바구니에 같은 음료라면 숫자가 누적되게 처리하였습니다. 또한 구매를 진행하면 잔액에서 구매한 금액만큼 차감이 됩니다.

### 획득
![image](https://user-images.githubusercontent.com/68059880/210051539-324098ae-da75-42cc-beaa-f70120ee0546.png)

- 획득 버튼을 클릭하면 장바구니에 담겨있던 음료에대한 정보들이 "획득한 음료"로 이동이 되며 음료의 총 금액을 하단의 총 금액에 표기해줍니다.

## 🍱 Responsive

![ezgif com-gif-maker](https://user-images.githubusercontent.com/68059880/210051750-13d4da92-90c6-47a8-a214-1b4add4182a3.gif)

- 미디어 쿼리를 활용하여 PC 모바일 모두 유연하게 동작되도록 반응형으로 구현 하였습니다
