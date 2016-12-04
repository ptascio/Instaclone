<h1>Sample State</h1>

{<br/ >
    &emsp;currentUser: {<br />
      &emsp;id: 1,<br/ >
      &emsp;username: "ptascio",<br/ >
      &emsp;followers: 10,<br/ >
      &emsp;following: 3,<br/ >
      &emsp;email: ptascio@geemail.com<br/ >
  },</p>
  &emsp;forms: {<br />
    &emsp;signUp: { errors: [] },<br />
    &emsp;logIn:  { errors: [] },<br />
    &emsp;upLoadPhoto: {errors: ["file must be an image type","image upload can't be blank"]}
  },<br/ ><br/ >
  photos: {<br/ >
    &emsp;1: {<br/ >
      &emsp;caption: "This is a great photo",<br />
      &emsp;userId: 1,<br />
      &emsp;comments: {<br />
        &emsp;body: "I love this pic!"
      },<br />
      &emsp;likes: 14,<br />
      &emsp;image_url: 'http://ptascio/image1.com'<br />
    }<br />
  },<br />
  &emsp;comments: {<br />
    &emsp;1: {<br />
      &emsp;photoId: 2,<br />
      &emsp;username: photoId.username,<br />
      &emsp;body: "Looks delicious!"<br />
    }<br />
  },<br />
  &emsp;total_user_likes: 15,<br />
}
