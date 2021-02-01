const posts = [
  {
    user: {
      displayName: 'Harry Potter',
      userName: 'harry',
      photoURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Harry_Potter_character_poster.jpg/220px-Harry_Potter_character_poster.jpg'
    },
    id: 0,
    time: '17 Jan 2012',
    title: "nesciunt quas odio",
    body: "Irure sit nostrud aliqua laboris eiusmod exercitation nostrud ex velit. Culpa proident culpa laboris sint labore commodo nulla duis ad non enim minim aute magna. Occaecat id dolor duis consequat proident non qui cillum reprehenderit est exercitation aliquip ex aliqua. Duis ad ullamco ullamco Lorem ea occaecat duis. Occaecat non excepteur id do aliqua laboris non adipisicing.",
    reactions: {
      like: 7,
      haha: 3,
      love: 2,
      wow: 2,
      care: 0,
      sad: 0,
      angry: 0
    },
    comments: [
      {
        user: {
          displayName: 'Hermione Granger',
          userName: 'hermione',
          photoURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Hermione_Granger_poster.jpg/220px-Hermione_Granger_poster.jpg'
        },
        id: 1,
        time: '17 Jan 2012',
        body: 'Quis elit labore id commodo sunt sunt sunt.'
      },
      {
        user: {
          displayName: 'Harry Potter',
          userName: 'harry',
          photoURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Harry_Potter_character_poster.jpg/220px-Harry_Potter_character_poster.jpg'
        },
        id: 2,
        time: '17 Jan 2012',
        body: 'Proident duis non labore duis Lorem minim veniam ad magna.'
      }
    ]
  },
  {
    user: {
      displayName: 'Hermione Granger',
      userName: 'hermione',
      photoURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Hermione_Granger_poster.jpg/220px-Hermione_Granger_poster.jpg'
    },
    id: 1,
    time: '19 Jan 2012',
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
    reactions: {
      like: 5,
      haha: 3,
      love: 9,
      wow: 2,
      care: 0,
      sad: 0,
      angry: 0
    },
    comments: [
      {
        user: {
          displayName: 'Harry Potter',
          userName: 'harry',
          photoURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Harry_Potter_character_poster.jpg/220px-Harry_Potter_character_poster.jpg'
        },
        id: 1,
        time: '19 Jan 2012',
        body: 'omnis possimus esse voluptatibus quis est'
      },
      {
        user: {
          displayName: 'Hermione Granger',
          userName: 'hermione',
          photoURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Hermione_Granger_poster.jpg/220px-Hermione_Granger_poster.jpg'
        },
        id: 2,
        time: '19 Jan 2012',
        body: 'omnis possimus esse voluptatibus quis est'
      }
    ]
  }
  ]

  export default posts;