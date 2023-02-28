import { TuneOutlined } from "@material-ui/icons";
import React from "react";
import "./searchpage.css";
import Channelrow from "./channelrow"
import Videorow from "./videorow";
import { Button } from "@material-ui/core";
function Searchpage(){
   return(
    <div className="searchpage">
        <div className="searchpage-filter">
            <TuneOutlined/>
            <h2>FILTER</h2>
        </div>
        <hr />
        <Channelrow
        image="https://yt3.ggpht.com/ytc/AL5GRJXPR4dSz0wwP-elkeiWUMnfZlCtNZP8Rd-tmFOZYg=s68-c-k-c0x00ffffff-no-rj"
        channel ="freeCodeCamp.org"
        subs="7.31M subscribers"
        desc="Learn to code for free."
        numofvideos={234}
        verified />
        <Button className="sub-button">subscribe</Button>
        <hr />
        <Videorow
                image="https://i.ytimg.com/vi/bMknfKXIFA8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDBVeerATqr0MyevfZHikBStPoWOQ"
                title="React Course - Beginner's Tutorial for React JavaScript Library [2022]"
                views="2.4M views"
                channel="freeCodeCamp.org"
                desc="React is one of the most popular front-end JavaScript libraries for building user interfaces. After completing this course, you will be able to build web apps in modern React, using patterns like functional components and hooks."
                timestamp="1 year ago"
                subs="7.31M"
                avatar="https://yt3.ggpht.com/ytc/AL5GRJXPR4dSz0wwP-elkeiWUMnfZlCtNZP8Rd-tmFOZYg=s68-c-k-c0x00ffffff-no-rj"
                />
                 <Videorow
                image="https://i.ytimg.com/vi/GDGejH3SDNQ/maxresdefault.jpg"
                title="HTML & Coding Introduction – Course for Beginners"
                views="50k views"
                channel="freeCodeCamp.org"
                desc="Learn the basics of HTML and how to begin coding in this course for beginners.

                Are you interested in coding but have never tried it before? Are you curious about how to create your own website or app? If so, then this video course is for you!"
                timestamp="6 Days ago"
                subs="7.31M"
                avatar="https://yt3.ggpht.com/ytc/AL5GRJXPR4dSz0wwP-elkeiWUMnfZlCtNZP8Rd-tmFOZYg=s68-c-k-c0x00ffffff-no-rj"
                />
                 <Videorow
                image="https://www.freecodecamp.org/news/content/images/2022/09/machinelearning.png"
                title="Machine Learning for Everybody – Full Course"
                views="969K views"
                channel="freeCodeCamp.org"
                desc="Learn Machine Learning in a way that is accessible to absolute beginners. You will learn the basics of Machine Learning and how to use TensorFlow to implement many different concepts."
                timestamp="5 Months ago"
                subs="7.31M"
                avatar="https://yt3.ggpht.com/ytc/AL5GRJXPR4dSz0wwP-elkeiWUMnfZlCtNZP8Rd-tmFOZYg=s68-c-k-c0x00ffffff-no-rj"
                />
                <Videorow
                image="https://i.ytimg.com/vi/8mAITcNt710/maxresdefault.jpg"
                title="Harvard CS50 – Full Computer Science University Course"
                views="3M views"
                channel="freeCodeCamp.org"
                desc="Learn the basics of computer science from Harvard University. This is CS50, an introduction to the intellectual enterprises of computer science and the art of programe" 
                timestamp="2 Years ago"
                subs="7.31M"
                avatar="https://yt3.ggpht.com/ytc/AL5GRJXPR4dSz0wwP-elkeiWUMnfZlCtNZP8Rd-tmFOZYg=s68-c-k-c0x00ffffff-no-rj"
                />
                <Videorow
                image="https://i.ytimg.com/vi/pTJJsmejUOQ/maxresdefault.jpg"
                title="Flutter Course - Full Tutorial for Beginners (Build iOS and Android Apps)"
                views="865K views"
                channel="freeCodeCamp.org"
                desc="Learn Flutter, Google’s groundbreaking multi-platform mobile development framework to create apps for Android and iOS. In this course." 
                timestamp="3 Years ago"
                subs="7.31M"
                avatar="https://yt3.ggpht.com/ytc/AL5GRJXPR4dSz0wwP-elkeiWUMnfZlCtNZP8Rd-tmFOZYg=s68-c-k-c0x00ffffff-no-rj"
        />
       
       
    </div>
   )
}
export default Searchpage;