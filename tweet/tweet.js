import React, { useState } from 'react'
import { FiShare } from 'react-icons/fi'
import { AiOutlineRetweet, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import {
  CardContent,
  Grid,
  Card,
  Container,
  CardHeader,
  Avatar,
  Typography,
} from '@material-ui/core'
import CircularStatic from '../commons/CircularProgressWithLabel'
import './tweet.css'

const Tweet = ({ posts }) => {
  console.log('🚀 ~ file: tweet.js ~ line 18 ~ Tweet ~ posts', posts)
  const [like, setLike] = useState(false)
  const [loading, setLoading] = useState(false)
  const likeHandler = () => {
    if (like === false) {
      setLike(true)
    } else if (like === true) {
      setLike(false)
    }
  }

  return (
    <Container>
      <div className="root">
        {loading ? (
          <CircularStatic />
        ) : (
          <div>
            <Grid container style={{ display: 'table' }}>
              {posts && posts?.length ? (
                posts.map((post, index) => (
                  <div className="each-card" key={index}>
                    <Card className="card">
                      <CardHeader
                        avatar={
                          <Avatar
                            alt="profile"
                            src={
                              post.avatar
                                ? post.avatar
                                : 'https://avatars.githubusercontent.com/u/10853211?v=4'
                            }
                            className="small"
                          />
                        }
                        title={post.author ? post.author : 'MemeDao'}
                        subheader={
                          post.timeCreated ? post.timeCreated : 'March 25, 2022'
                        }
                      />

                      <CardContent className="card-content">
                        <Typography variant="body2">
                          {post.description}
                        </Typography>
                        <br />
                        {post.image ? (
                          <img
                            src={post.image}
                            alt="tweets"
                            style={{ width: '95%' }}
                          />
                        ) : (
                          ' '
                        )}
                      </CardContent>

                      {/* BOTTTOM */}
                      <div id="nav-bottom-post">
                        <div id="box-comment-number">
                          <span className="comment" id="nav-icon-box">
                            <FaRegComment />
                          </span>
                          <p id="comment-tweet"> {0} </p>
                        </div>
                        <span className="retweet" id="nav-icon-box">
                          <AiOutlineRetweet />
                        </span>
                        <div id="box-like-number">
                          <span
                            // onClick={likeHandler}
                            className="like"
                            id="nav-icon-box"
                          >
                            {like === true ? (
                              <AiFillHeart id="red-heart" />
                            ) : (
                              <AiOutlineHeart />
                            )}
                          </span>
                          <span id="like-number">
                            {like === true ? parseInt(post.likeNumber) + 1 : 0}
                          </span>
                        </div>
                        <span className="share" id="nav-icon-box">
                          <FiShare />
                        </span>
                        {/* <span className="analytic" id="nav-icon-box">
                          <SiGoogleanalytics />
                        </span> */}
                      </div>
                    </Card>
                  </div>
                ))
              ) : (
                <h2>No Memes Yet...</h2>
              )}
            </Grid>
          </div>
        )}
      </div>

      {/* <div id="tweet-box">
        <div id="profile-tweet">
          <img
            src="https://avatars.githubusercontent.com/u/79016171?s=400&u=9376daf7bc67c804b89790ffc455fb5981c6d369&v=4"
            alt="profile"
            id="image-profile"
          />
        </div>

        <div id="box-tweet">
          <div id="name-id">
            <span id="flex-tweet">
              <p id="tweet-name">ali turkaman</p>
              <p id="tweet-id">@ATurkaman . </p>
              <p id="tweet-date">Aug 10</p>
            </span>

            <span id="span-more">
              <CgMoreAlt />
            </span>
          </div>

          <div id="post-box">
            <p id="text-tweet"> {props.tweet} </p>
          </div>

          <div id="nav-bottom-post">
            <div id="box-comment-number">
              <span className="comment" id="nav-icon-box">
                <FaRegComment />
              </span>
              <p id="comment-tweet"> {props.comment} </p>
            </div>
            <span className="retweet" id="nav-icon-box">
              <AiOutlineRetweet />
            </span>
            <div id="box-like-number">
              <span onClick={likeHandler} className="like" id="nav-icon-box">
                {like === true ? (
                  <AiFillHeart id="red-heart" />
                ) : (
                  <AiOutlineHeart />
                )}
              </span>
              <span id="like-number">
                {like === true
                  ? parseInt(props.likeNumber) + 1
                  : props.likeNumber}
              </span>
            </div>
            <span className="share" id="nav-icon-box">
              <FiShare />
            </span>
            <span className="analytic" id="nav-icon-box">
              <SiGoogleanalytics />
            </span>
          </div>
        </div>
      </div> */}
    </Container>
  )
}

export default Tweet
