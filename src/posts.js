import profiles from "./profilesObj";

const postArr = [
  {
    user: profiles.harry,
    id: 0,
    time: "17 Jan 2005",
    title: "",
    body: {
      caption: "It's easier to battle a dragon than asking a girl for date.",
    },
    reactions: {
      like: 1,
      haha: 5,
      love: 2,
      wow: 2,
      care: 0,
      sad: 0,
      angry: 0,
    },
    comments: [
      {
        user: profiles.hermione,
        id: 1,
        time: "17 Jan 2005",
        body: "Go get a dragon to date",
      },
      {
        user: profiles.ron,
        id: 2,
        time: "17 Jan 2005",
        body: "Hermione, you are a girl. Can't you come with one of us for the dance?",
      },
      {
        user: profiles.fred,
        id: 3,
        time: "17 Jan 2005",
        body: "Ron, get a move on or all the good ones will have gone.",
      },
    ],
  },
  {
    user: profiles.fred,
    id: 4.1,
    time: "17 Jan 2005",
    title: "",
    body: {
      photoURL: "https://i.ibb.co/j5h94b2/future.jpg",
    },
    reactions: {
      like: 0,
      haha: 15,
      love: 2,
      wow: 0,
      care: 0,
      sad: 0,
      angry: 0,
    },
    comments: [],
    shares: 3,
  },
  {
    user: profiles.luna,
    id: 1,
    time: "17 Jan 2005",
    title: "",
    body: {
      photoURL: "https://i.ibb.co/BVQz3rQ/love-from-heart.jpg",
    },
    reactions: {
      like: 1,
      haha: 0,
      love: 8,
      wow: 0,
      care: 0,
      sad: 0,
      angry: 0,
    },
    comments: [],
    shares: 2,
  },
  {
    user: profiles.hermione,
    id: 2,
    time: "17 Jan 2005",
    title: "",
    body: {
      photoURL: "https://i.ibb.co/2h7FTqN/chosen-one.jpg",
    },
    reactions: {
      like: 1,
      haha: 10,
      love: 6,
      wow: 2,
      care: 0,
      sad: 0,
      angry: 0,
    },
    comments: [],
  },
  {
    user: profiles.ron,
    id: 3,
    time: "17 Jan 2005",
    title: "",
    body: {
      photoURL: "https://i.ibb.co/9wKFP2H/Did-I-blame-you.jpg",
    },
    reactions: {
      like: 1,
      haha: 10,
      love: 2,
      wow: 0,
      care: 0,
      sad: 0,
      angry: 0,
    },
    comments: [],
    shares: 6,
  },
  {
    user: profiles.fred,
    id: 4,
    time: "17 Jan 2005",
    title: "",
    body: {
      photoURL: "https://i.ibb.co/j5h94b2/future.jpg",
    },
    reactions: {
      like: 0,
      haha: 15,
      love: 2,
      wow: 0,
      care: 0,
      sad: 0,
      angry: 0,
    },
    comments: [],
    shares: 3,
  },
];

export default postArr;
