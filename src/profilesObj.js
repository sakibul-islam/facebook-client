const Hogwarts = 'Hogwarts School of Witchcraft and Wizardry'

const profiles = {
  harry: {
    displayName: 'Harry Potter',
    userName: 'harry',
    nickName: 'The Chosen One',
    photoURL: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Harry_Potter_character_poster.jpg/220px-Harry_Potter_character_poster.jpg",
    coverURL: "https://bgr.com/wp-content/uploads/2019/12/harry-potter.jpg?quality=70&strip=all&w=782",
    photos: [
      "https://bgr.com/wp-content/uploads/2019/12/harry-potter.jpg?quality=70&strip=all&w=782",

    ],
    bio: 'Gryffindor Quidditch Seeker and Leader of Dumbledore\'s Army.',
    birthday: '31 July 1980',
    studiesAt: Hogwarts
  },
  hermione: {
    displayName: 'Hermione Granger',
    userName: 'hermione',
    nickName: 'Hermione',
    photoURL: 'https://static.wikia.nocookie.net/9c6388c0-6df6-457e-8c3b-da4d7e70b892',
    coverURL: "https://img.cinemablend.com/filter:scale/quill/d/2/7/6/5/b/d2765bf76378dd23f435d6016b917e71b7920b24.jpg?mw=600",
    photos: [
      "https://static.wikia.nocookie.net/9c6388c0-6df6-457e-8c3b-da4d7e70b892",
      "https://images.fanpop.com/images/image_uploads/Hermione-Granger-hermione-granger-771263_306_400.jpg",
      "https://pm1.narvii.com/6348/8fd348d1893fe1beeeeca1a423a6bdb6919cd7cc_00.jpg",
      "https://i1.wp.com/media.tumblr.com/tumblr_l64ucuNPXu1qziwld.jpg",
      "https://i.pinimg.com/736x/5f/b8/e3/5fb8e3c837d5388b9e9182ddd96771d6.jpg",
      "https://www.thenews.com.pk//assets/uploads/updates/2020-07-02/680963_1095987_harrypotter3_updates.jpg",
      // "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Hermione_Granger_poster.jpg/220px-Hermione_Granger_poster.jpg",
    ],
    bio: 'Prefect and co-founder of Dumbledore\'s Army.',
    birthday: '19 September 1979',
    studiesAt: Hogwarts
  },
  luna: {
    displayName: 'Luna Lovegood',
    userName: 'luna',
    nickName: 'Loony',
    photoURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/LunaLovegood.jpeg/220px-LunaLovegood.jpeg',
    coverURL: 'https://media.harrypotterfanzone.com/luna-lovegood-patronus.gif',
    photos: [],
    bio: ' Member of Dumbledore\'s Army',
    studiesAt: Hogwarts,
    birthday: '13 February 1981'
  },
  ron: {
    displayName: 'Ronald Weasley',
    userName: 'ron',
    nickName: 'Ron',
    photoURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Ron_Weasley_poster.jpg/220px-Ron_Weasley_poster.jpg',
    coverURL: 'https://evywrites.files.wordpress.com/2015/10/harry-potter-philosopgers-stone-1.jpg',
    photos: [],
    bio: 'Gryffindor Quidditch Keeper, prefect, and co-founder of Dumbledore\'s Army',
    studiesAt: Hogwarts,
    birthday: '1 March 1980'
  },
  ginny: {
    displayName: 'Ginny Weasley',
    userName: 'ginny',
    nickName: 'Ginny',
    photoURL: 'https://pbs.twimg.com/profile_images/2504679219/image.jpg',
    photos: [],
    bio: 'Quidditch Seeker and Chaser, and member of Dumbledore\'s Army',
    studiesAt: Hogwarts,
    birthday: '11 August 1981'
  },
  fred: {
    displayName: 'Fred Weasley',
    userName: 'fred',
    nickName: 'Fred',
    photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxaBRDrxWQe8kk05sz_CSNozXXw9yNW8SqXQ&usqp=CAU',
    photos: [],
    bio: 'Member of Dumbledore\'s Army',
    studiesAt: Hogwarts,
    birthday: '21 August 1978'
  },
  sakib: {
    displayName: 'Sakibul Islam',
    userName: 'sakib',
    nickName: 'Sakib',
    photoURL: 'https://lh3.googleusercontent.com/ogw/ANLem4a9p2LEodWJ--Bup1hN_HB0ZMCuisaPQmR9uHvYxw=s500-c-mo',
    photos: [],
    bio: 'Developer Of This Application',
    birthday: ''
  },
  undefined: {
    displayName: 'Anonymous',
    userName: 'undefined',
    nickName: 'Visitor',
    photoURL: 'https://images.squarespace-cdn.com/content/v1/533cb201e4b034a40913594b/1505399195395-W70O8FBXHCBH2D2Y3P95/ke17ZwdGBToddI8pDm48kNia5CZS3auKPpBVQQ1rmJpZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwT1-K47BMGCoLwSVQc5wfJsjuQtaeevZ3k8CtBVEbewwre_9gJVeO4ZiDp85yJv0g/anonymous.png',
    photos: [],
    bio: '',
    birthday: ''
  },
}

export const userProfileForAddFriend = Object.keys(profiles).filter((key, i) => (i % 2)).map(key => profiles[key])

export const userWhoSentRequest = Object.keys(profiles).filter((key, i) => !(i % 2)).map(key => profiles[key])

export default profiles;