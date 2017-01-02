```js

{
    currentUser: {
      id: 1,
      username: "ptascio",
      followers: 10,
      following: 3,
      email: ptascio@email.com
  },</p>
  forms: {
    signUp: { errors: [] },
    logIn:  { errors: [] },
    upLoadPhoto: {errors: ["file must be an image type","image upload can't be blank"]}
  },
  photos: {
    1: {
      caption: "This is a great photo",
      userId: 1,
      comments: {
        body: "I love this pic!"
      },
      likes: 14,
      image_url: 'http://ptascio/image1.com'
    }
  },
  comments: {
    1: {
      photoId: 2,
      username: photoId.username,
      body: "Looks delicious!"
    }
  },
  total_user_likes: 15,
}
```
