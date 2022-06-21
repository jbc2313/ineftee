# Ineftee

![Screen Shot 2022-06-21 at 3 00 12 PM](https://user-images.githubusercontent.com/101614021/174887682-7dbe87aa-e9a1-4e05-befe-175b599a2a76.png)

# Technologies Used

>  Node.js, Express, ejs, Mongoose, Heroku

# Instructions

> 1. Navigate your browser to https://ineftee.herokuapp.com/
> 2. Click the login button at the top of the screen in the navbar.
> 3. If this is your first time logging in you will have to create an account.
> 4. If needed click signup on the login in screen. Then enter your email and password. 
> 5. You will be prompted by Auth0 to allow ineftee to access your profile info. Click Yes.
> 6. After logging in you will be redirected to the main feed.
> 7. Go ahead and look around if you want, before you post go ahead and click Profile in the Navbar.
> 8. Make sure you update your profile to the info you want to be displayed. ie.. your username.
> 9. After creating a username you are happy with go ahead and click New Post in the Navbar.
> 10. Enter the name of the NFT you are uploading, then select the NFT from your filesytem.
> 11. Make sure and enter a post title and add some info in the body of the post. 
> 12. Click Submit and you will be directed back to the main Feed. 
> 13. Now you know how to use Ineftee. Enjoy!

# User Stories

> 1. As a user I want to be able to create an account.
> 2. As a user I want to be able to follow other users.
> 3. As a user I want to be able to see my own profile.
> 4. As a user I want to be able to upload my NFTs to my account.
> 5. As a user I want to be able to make posts about my NFTs.
> 6. As a user I want to be able to leave comments on other users posts.

# Wireframes

![INdexWireframe](https://user-images.githubusercontent.com/101614021/171978544-f643b679-9a42-4239-81b8-69d1d64e8634.svg)

![CreateWire](https://user-images.githubusercontent.com/101614021/171979081-c070429f-db7a-4a0c-9c53-fa8165ff5ff5.svg)

![ProfileWIRE](https://user-images.githubusercontent.com/101614021/171978606-c2e4d059-02c5-4ffb-9d63-3dc9d3b7c914.svg)


# CRUD Routes

| Route   | URL             | HTTP   | Description                                        |
|---------|-----------------|--------|----------------------------------------------------|
| Index   | /posts          | GET    | Display a list of all posts                        |
| New     | /post/new       | GET    | Show form to make a new post                       |
| Create  | /posts          | POST   | Add new post to database and redirect to index     |
| Show    | /posts/:id      | GET    | Show info about one post                           |
| Edit    | /posts/:id/edit | GET    | Show edit form of one post                         |
| Update  | /posts/:id      | PUT    | Update a particular post and redirect to that post |
| Destroy | /posts/:id      | DELETE | Delete a specific post                             |

# ERD Template / Models

![ERD Project 21](https://user-images.githubusercontent.com/101614021/171979504-e27ba3ab-de3f-4c46-a570-edb2a37b6a5f.svg)

# MVP and Stretch Goals

>  A working app that allows users to create an account and upload NFT's to a database and then create posts about their NFT's.
>  Stretch Goals are to allow users to follow other users and post comments on other users posts. 

# Link to Project

> https://ineftee.herokuapp.com/
