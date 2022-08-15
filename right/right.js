import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TextField, Button, MenuItem } from '@material-ui/core'
import VerifiedUserSharpIcon from '@material-ui/icons/VerifiedUserSharp'
import './right.css'
import RightNavBar from '../rightNavBar/RightNavBar'

const Right = ({
  user = '0xf4eA652F5B7b55f1493631Ea4aFAA63Fe0acc27C',
  login,
  logout,
}) => {
  const profileTypeRef = React.createRef()
  const [profile, setProfile] = useState('')
  return (
    <div>
      <div className="right-top">
        {user ? (
          <div className="logged-btns" id="l">
            <Button
              variant="contained"
              className="connected-btn"
              endIcon={<VerifiedUserSharpIcon />}
            >
              {user.substring(0, 8)}...{user.substring(34)}
            </Button>
            <Button component={Link} to="/" onClick={logout}>
              Logout
            </Button>
          </div>
        ) : (
          <div className="logged-btns" id="l">
            <Button
              variant="contained"
              className="connected-btn"
              onClick={login}
            >
              Connect Wallet
            </Button>
          </div>
        )}
        <br />
        <br />
        <br />
        <br />
      </div>

      <div className="text-field">
        <TextField
          fullWidth
          name="profileType"
          select
          label="Select profile"
          variant="outlined"
          onChange={(e) => setProfile(e.target.value)}
          defaultValue=""
          ref={profileTypeRef}
        >
          <MenuItem value="Alistor">Alistor</MenuItem>
          <MenuItem value="Agnes">Agnes</MenuItem>
          <MenuItem value="Francesco">Francesco</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </TextField>
      </div>

      <h3>Top Memes</h3>
      <div id="image-post-box">
        <div id="box-left-post"></div>
        <div id="box-right">
          <div id="box-up"></div>
          <div id="box-down"></div>
        </div>
      </div>

      <div id="might-like-box">
        <h2 id="title-might">You might like</h2>
        <RightNavBar
          verified={false}
          name="Elon Musk"
          id="@emusk"
          src="https://avatars.githubusercontent.com/u/39365517?v=4"
        />
        <RightNavBar
          verified={true}
          name="JavaScript"
          id="@JavaScript"
          src="https://usefulangle.com/img/thumb/javascript.png"
        />
        <RightNavBar
          verified={true}
          name="GitHub"
          id="@github"
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        />
        <RightNavBar
          verified={true}
          name="React"
          id="@reactjs"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU4lrqANPnXmusNdulIrE2Vg1VPQHHpOmqo6lFMzRn0k7iH3JzFSIXaOG2h78uIUEB8uQ&usqp=CAU"
        />

        <div id="show-more-box">
          <button id="show-more-btn">Show more</button>
        </div>
      </div>
    </div>
  )
}

export default Right
