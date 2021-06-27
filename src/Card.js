import React from "react";
import "./Card.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const Card = () => {
  return (
    <div className="body">
      <div className="container">
        <div className="card">
          <div className="icons">
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
          </div>
          <div className="imgBx">
            <img
              src="https://images.unsplash.com/photo-1502417335600-75469f904929?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8cm5TS0RId3dZVWt8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="content">
            <img
              src="https://images.unsplash.com/photo-1614880353165-e56fac2ea9a8?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="profile-pic"
            />

            <div className="name">
              <h3>Avneesh</h3>
              <h4>Manager</h4>
            </div>
            <div className="icon">
              <MoreHorizIcon />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="icons">
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
          </div>
          <div className="imgBx">
            <img
              src="https://images.unsplash.com/photo-1533460004989-cef01064af7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt=""
            />
          </div>
          <div className="content">
            <img
              src="https://images.unsplash.com/photo-1623890763301-794b87788e9d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYwfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="profile-pic"
            />

            <div className="name">
              <h3>Paras</h3>
              <h4>UI Developer</h4>
            </div>
            <div className="icon">
              <MoreHorizIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
