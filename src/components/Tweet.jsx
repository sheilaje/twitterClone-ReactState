import React from 'react';

function Tweet (props){
  const tweetBoxStyles = {
    border: 'none',
    backgroundColor: 'white',
    margin: '10px 10px 0px 10px',
    padding: '5px',
    fontFamily: 'Arial'
  };

  const imgStyle = {
    height: '40px',
    width: '40px',
    border: '3px solid lightgrey',
    borderRadius: '25rem',
  }

  const profilePicStyle = {
    height: '30px',
    width: '30px',
    margin: '5px 0px 0px 5px'
  };

  const tweetContentStyle = {
    margin: '-45px 5px 0px 60px',
    paddingBottom: '3px'
  }

  return (
    <div>
      <div style={tweetBoxStyles}>
        <div style={profilePicStyle}>
          <img style={imgStyle} src={`${props.profilePic}`}></img>
        </div>
        <div style={tweetContentStyle}>
        <p><strong>{props.name}</strong> @{props.username}</p>
        <p>{props.body}</p>
        </div>
      </div>
    </div>
  );
}

export default Tweet;