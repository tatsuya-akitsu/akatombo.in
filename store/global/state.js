export default {
  isLoading: false,
  isLoggedin: false,
  common: {
    route: '',
    errors: [],
    items: [
      {
        img: '/img/illustrator/logo__img__2016.svg',
        title: 'Illustration Design',
        val: 'Illustratorを使用し、\nポストカードやロゴ、DMなどを制作',
        href: '/illustrator'
      },
      {
        img: '/img/photoshop/graphic__img__01.jpg',
        title: 'Graphic Design',
        val: 'Photoshopを使用し、DMや\n合成画像を作成',
        href: '/photoshop'
      },
      {
        img: '/img/lightroom/photo__01.jpg',
        title: 'Photograph',
        val: '趣味で撮影した写真をLightroomで編集',
        href: '/lightroom'
      }
    ]
  },
  userInfo: {
    uid: '',
    name: '',
    email: '',
    photoUrl: ''
  },
  top: {
    defaultData: [
      {
        photo: '/img/works__img__08.svg',
        title: 'Client works',
        doc: '会社および、個人受託制作の実績一覧です',
        route: '/client/login'
      },
      {
        photo: '/img/works__img__09.svg',
        title: 'More Github',
        doc:
          'WORKSで公開しているプロジェクトの一部や、進行中のプロジェクトをオープンソースで公開しています',
        url: 'https://github.com/tatsuya-akitsu'
      }
    ],
    data: {}
  },
  work: {
    title: '',
    url: '',
    workTags: [],
    workTag: '',
    photoUrl: '',
    times: {
      design: '',
      coding: ''
    },
    toolTags: [],
    toolTag: '',
    category: '',
    isRegistration: false
  },
  works: [],
  detail: {
    work: {},
    other: []
  }
}
