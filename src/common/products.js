const products = [
  {
    id: 1,
    title: '디지털 노마드를 꿈꾸는 당신이 알아야 하는 모든 것',
    date: '2020-12-07',
    author: '이도해',
    cover: '../../common/covers/001.jpg',
    file: ['ePub', 'PDF', '종이책 (POD)'],
    price: ['9800', '9800', '10900'],
    shop: [
      {
        mall: '교보문고',
        link: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000003544955',
      },
      {
        mall: '알라딘',
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=258363310',
      },
      {
        mall: '예스24',
        link: 'http://www.yes24.com/Product/Goods/96173921',
      },
    ],
    summary:
      "서른이 된 내가 바라는 행복은 치열함과 거리가 멀었다. 그래서 나는 디지털 노마드로 살기로 결심했다. | 100세 시대, 당신은 몇 살까지 일할 수 있습니까? 세상에 남들보다 더 적게 일하고, 더 쉽게 일해서 부자가 되는 방법은 없습니다. 이 책은 '쉽게 돈을 벌 수 있는 부업'에 대한 책이 아닙니다. 이 책은 당신의 삶을 바꿔줄 새로운 라이프 스타일에 대해 이야기 합니다.",
  },
  {
    id: 2,
    title: 'HTML5 독학백서',
    date: '2021-01-25',
    author: '이도해',
    cover: '../../common/covers/002.jpg',
    file: ['ePub', 'PDF', '종이책 (POD)'],
    price: ['7900', '7900', '15900'],
    shop: [
      {
        mall: '교보문고',
        link: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000003551408',
      },
      {
        mall: '알라딘',
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=262566322',
      },
      {
        mall: '예스24',
        link: 'http://www.yes24.com/Product/Goods/97163441',
      },
    ],
    lecture: [
      'https://www.youtube.com/playlist?list=PLI33CnBTx2MYe0rqJ2nMSbfUqLmWIJtaV',
    ],
    repository: [
      'https://github.com/dalmoori/basic-html5-2021',
      'https://github.com/dalmoori/final-html5-2021',
      'https://github.com/erumcoding/html-css-beginners',
    ],
    summary: `기초부터 탄탄하게, 두고두고 써먹는, 2021 최신 버전의 HTML5 바이블! 웹 디자인과 웹 개발 입문은 물론이고 블로그, 전자책, 쇼핑몰 만들기 등 HTML은 우리가 모바일과 PC로 보는 모든 곳에 존재합니다. HTML은 더 이상 웹 디자이너나 웹 개발자만 할 줄 아는 외계어가 아닌, 가장 모던한 글쓰기 방식이라고 할 수 있습니다. (심지어 이 책도 HTML로 작성되었습니다!) HTML 조금, CSS 조금...'대충...', '조금...' 배우는 건 그만! 제대로 공부한 프로그래밍 언어는 수영이나 자전거 타기와 같아서, 시간이 지나도 몸이 기억합니다. 딱 한 번, 1 ~ 2주만 투자하면 전 세계 공용으로 사용되는 새로운 언어를 배울 수 있습니다. 본 책은 프로그래밍을 한 번도 접해본 적 없는 사람도 HTML5를 다룰 수 있게끔 꼼꼼한 이론, 다양한 예제 코드와 따라 하는 웹 문서 작성까지 담았습니다.`,
  },
  {
    id: 3,
    title: 'CSS3 독학백서',
    date: '2021-03-23',
    author: '이도해',
    cover: '../../common/covers/003.jpg',
    file: ['ePub', 'PDF', '종이책 (POD)'],
    price: ['8900', '8900', '16900'],
    shop: [
      {
        mall: '교보문고',
        link: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000003558940',
      },
      {
        mall: '알라딘',
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=268128304',
      },
      {
        mall: '예스24',
        link: 'http://www.yes24.com/Product/Goods/98828987',
      },
    ],
    lecture: [
      'https://www.youtube.com/playlist?list=PLI33CnBTx2MYe0rqJ2nMSbfUqLmWIJtaV',
    ],
    repository: [
      'https://github.com/dalmoori/basic-css3-2021',
      'https://github.com/dalmoori/final-css3-2021',
      'https://github.com/erumcoding/html-css-beginners',
    ],
    summary: `기초부터 탄탄하게, 두고두고 써먹는, 2021 최신 버전의 CSS3 바이블! 한 번 배울 때 확실하게! 사용하는 기술만 쏙쏙 골라서 배우는 독학백서 시리즈를 소개합니다. 웹 디자인과 웹 개발의 시작 HTML과 CSS를 독학백서 시리즈로 끝낼 수 있습니다!\n제대로 공부한 프로그래밍 언어는 수영이나 자전거 타기와 같아서, 시간이 지나도 몸이 기억합니다. 딱 한 번, 1 ~ 2주만 투자하면 전 세계 공용으로 사용되는 새로운 언어를 배울 수 있습니다. 본 책은 프로그래밍을 한 번도 접해본 적 없는 사람도 CSS3를 다룰 수 있게끔 꼼꼼한 이론, 다양한 예제 코드와 따라 하는 실전 예제까지 담았습니다.`,
  },
  {
    id: 4,
    title: '자바스크립트 ES6+ 독학백서',
    date: '2021-10-07',
    author: '이도해',
    cover: '../../common/covers/004.jpg',
    file: ['ePub', 'PDF', '종이책 (POD)'],
    price: ['15900', '15900', '17900'],
    shop: [
      {
        mall: '교보문고',
        link: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000003588089',
      },
      {
        mall: '알라딘',
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=281266651',
      },
      {
        mall: '예스24',
        link: 'http://www.yes24.com/Product/Goods/104230540',
      },
    ],
    lecture: [
      'https://www.youtube.com/playlist?list=PLI33CnBTx2MZGD7zAQ810_B8dDU_E8gaq',
    ],
    repository: [
      'https://github.com/dalmoori/basic-js-ecma-2021',
      'https://github.com/erumcoding/js-beginners',
    ],
    summary: `이 책은 비전공자 · 프로그래밍에 대한 지식이 전무한 사람 누구나자바스크립트 프로그래밍을 쉽게 시작할 수 있는 것에 초점을 맞추어 작성되었습니다. 이론을 너무 오래 잡고 있지 마세요. 프로그래밍은 재밌어야 합니다. 필수적이고 핵심적인 문법과 사용법만 이 책을 통해 빠르게 학습하시고, 무엇이든지 작은 것부터 만들어보세요.`,
  },
  {
    id: 5,
    title: '모두를 위한 엔트리 교과서',
    date: '2022-10-28',
    author: '이도해',
    cover: '../../common/covers/005.jpg',
    file: ['PDF'],
    price: ['11900'],
    shop: [
      {
        mall: '교보문고',
        link: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000005013735',
      },
      {
        mall: '알라딘',
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=303931868',
      },
      {
        mall: '예스24',
        link: 'http://www.yes24.com/Product/Goods/115090453',
      },
    ],
    repository: ['https://github.com/dalmoori/learn-entry-2022'],
    summary: `초등학생부터 부모님과 선생님까지 ─ 엔트리 코딩을 배우고 싶은 모두를 위한 책! 기초부터 응용까지 알차게 담았습니다. 10가지 실습 예제를 따라 하며 즐겁게 엔트리 코딩을 배워보세요.`,
  },
];

export default products;
