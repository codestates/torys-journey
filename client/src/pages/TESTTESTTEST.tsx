const dummyData = [
  {
    id: 1,
    picture: "https://src.hidoc.co.kr/image/lib/2020/11/9/1604911318873_0.jpg",
    name: "피자집",
    address: "경기 고양시 일산동구 중앙로 1286 아람마슬3층",
    number: "010-1234-1234",
    detailInfo: "주차가능",
    officeHours: "09:00 ~ 23:00",
  },
  {
    id: 2,
    picture:
      "http://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg",
    name: "삼겹살집",
    address: "경기 고양시 일산동구 중앙로1261번길 79 1층 9라파부대찌개",
    number: "010-1234-1234",
    detailInfo: "주차가능",
    officeHours: "09:00 ~ 23:00",
  },
  {
    id: 3,
    picture: "https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg",
    name: "닭강정집",
    address: "서울 동대문구 회기로21길 8-6 1층 치맥파이브 경희대점",
    number: "010-1234-1234",
    officeHours: "09:00 ~ 23:00",
    detailInfo: "주차가능",
  },
  {
    id: 4,
    picture:
      "https://health.chosun.com/site/data/img_dir/2022/02/08/2022020800704_0.jpg",
    name: "라면집",
    address: "서울 강남구 도산대로90길 3 상민빌딩",
    number: "010-1234-1234",
    detailInfo: "주차가능",
    officeHours: "09:00 ~ 23:00",
  },
  {
    id: 6,
    picture: "http://img.segye.com/content/image/2021/01/07/20210107516500.jpg",
    name: "전주비빔밥집",
    address: "경기 화성시 동탄대로 636-14 비동 102호",
    number: "010-1234-1234",
    detailInfo: "주차가능",
    officeHours: "09:00 ~ 23:00",
  },
  {
    id: 6,
    picture:
      "https://cdn.mkhealth.co.kr/news/photo/201806/img_MKH180615003_0.jpg",
    name: "족발집",
    number: "010-1234-1234",
    address: "경기 화성시 동탄치동천로3길 22",
    officeHours: "09:00 ~ 23:00",
    detailInfo: "주차가능",
  },
  {
    id: 6,
    picture:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220305_170%2F1646454916671dsEPJ_JPEG%2Fupload_8b707007aaf7f49638c1aa85371bf52d.jpg",
    name: "파스타집",
    address: "경기 화성시 동탄공원로3길 14-5 1층 101호",
    officeHours: "09:00 ~ 23:00",
    number: "010-1234-1234",
    detailInfo: "주차가능",
  },
  {
    id: 8,
    picture:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220219_187%2F1645255615296zj6Vu_JPEG%2Fupload_dee812f108ea578738c094b24be4e727.jpg",
    name: "케이크집",
    address: "경기 파주시 심학산로 628 111호 카페희다 파주야당점",
    number: "010-1234-1234",
    detailInfo: "주차가능",
    officeHours: "09:00 ~ 23:00",
  },
  {
    id: 9,
    picture:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20211119_17%2F1637288941507dOegA_JPEG%2Fupload_d6cebc69ef6edb9a6402e9c92f5c08ac.jpeg",
    name: "브런치집",
    number: "010-1234-1234",
    officeHours: "09:00 ~ 23:00",
    address: "경기 파주시 탄현면 새오리로 106",
    detailInfo: "주차가능",
  },
  {
    id: 10,
    picture:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220304_205%2F1646369841492F7DQR_JPEG%2Fupload_87736f4ebc56941b1dc5cb932035294c.jpg",
    name: "도넛집",
    address: "인천 서구 청라커낼로288번길 10",
    number: "010-1234-1234",
    officeHours: "09:00 ~ 23:00",
    detailInfo: "주차가능",
  },
  {
    id: 11,
    picture:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20211224_21%2F16403443976651FYkG_JPEG%2Fupload_b3f735ca51e0fdbdd3724e79c754a1f6.jpg",
    name: "스테이크집",
    number: "010-1234-1234",
    address: "경기 부천시 상동로 87",
    officeHours: "09:00 ~ 23:00",
    detailInfo: "주차가능",
  },
  {
    id: 12,
    picture:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220226_295%2F1645848665302ikVDJ_JPEG%2Fupload_b1341928e3a10526c677fbb2e59029c6.jpg",
    name: "소시지집",
    address: "경기 김포시 양촌읍 석모로5번길 27",
    number: "010-1234-1234",
    detailInfo: "주차가능",
    officeHours: "09:00 ~ 23:00",
  },
  {
    id: 13,
    picture:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220220_6%2F1645356198084ysw8l_JPEG%2Fupload_348df043df726855fa77600f999ac0df.jpg",
    name: "고기집",
    address: "인천 연수구 송도과학로16번길 33-4 송도 트리플스트리트 D동 123b호",
    number: "010-1234-1234",
    detailInfo: "주차가능",
    officeHours: "09:00 ~ 23:00",
  },
  {
    id: 14,
    picture:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fnaverbooking-phinf.pstatic.net%2F20220222_29%2F1645497521299YeoSN_JPEG%2Fimage.jpg",
    name: "한식집",
    address: "경기 용인시 수지구 동천로 635",
    officeHours: "09:00 ~ 23:00",
    detailInfo: "주차가능",
    number: "010-1234-1234",
  },
  {
    id: 15,
    picture:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210831_45%2F16304195239363J0BM_JPEG%2Fupload_5d79df832dbeb7991be496b222695ad9.jpeg",
    name: "샤브샤브집",
    address: "경기 수원시 영통구 광교중앙로 145",
    officeHours: "09:00 ~ 23:00",
    number: "010-1234-1234",
    detailInfo: "주차가능",
  },
  {
    id: 16,
    picture:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMDJfMTcx%2FMDAxNjM4NDM5NzM5Nzg2.rUjzTc-01rCaszDiqvaF2ZshmitoRVGzUrd_MfneFMgg.vKPl9bJRTcp8LlY-djFCRfrtZIvOuMqFM6K3grlEahMg.JPEG.hyi0503%2FIMG_6016.jpg",
    name: "고스테이크집",
    address: "경기 수원시 영통구 센트럴파크로127번길 159",
    number: "010-1234-1234",
    officeHours: "09:00 ~ 23:00",
    detailInfo: "주차가능",
  },
  {
    id: 17,
    picture:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fnaverbooking-phinf.pstatic.net%2F20211231_25%2F1640914666310cp8qt_JPEG%2Fimage.jpg",
    name: "사찰음식집",
    address:
      "경기 수원시 영통구 광교호수공원로 80 앨리웨이광교 어라운드 라이프 3층",
    number: "010-1234-1234",
    detailInfo: "주차가능",
    officeHours: "09:00 ~ 23:00",
  },
  {
    id: 18,
    picture:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20211115_83%2F1636985077233pwxjh_JPEG%2Fupload_62094eb0ddb7fa1c9aec5a6ee4ccd8a0.jpg",
    name: "만두집",
    address: "경남 밀양시 산외면 밀양대로 2362 솔밭만두",
    number: "010-1234-1234",
    detailInfo: "주차가능",
    officeHours: "09:00 ~ 23:00",
  },
  {
    id: 19,
    picture:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20211101_57%2F1635738823402cFClK_JPEG%2Fupload_1992f9fa2ed13045e785f22620741ac3.jpg",
    name: "나물집",
    address: "경남 창원시 의창구 동읍 주남로184번길 33",
    detailInfo: "주차가능",
    number: "010-1234-1234",
    officeHours: "09:00 ~ 23:00",
  },
  {
    id: 20,
    picture:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA1MjFfNTEg%2FMDAxNTI2ODk4Mjk1MDIz.IwIkJnbQfQlkPX8LjO3-B3eOV4cfyAjuDamUa7WLRBAg.WxxHBvL4uefkxxZog0FLvHmPiqJO7ir1I6BXZN9lW4Ug.JPEG.boglebogle52%2F20180209_124056.jpg",
    name: "장어집",
    address: "경남 밀양시 영남루2길 5",
    detailInfo: "주차가능",
    officeHours: "09:00 ~ 23:00",
    number: "010-1234-1234",
  },
];

export default dummyData;
