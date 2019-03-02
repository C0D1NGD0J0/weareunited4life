import React, { PropTypes } from 'react';

const pStyle = {
	paddingTop: "1rem", 
	marginTop: "1rem",
	borderTop: ".1rem solid rgba(238, 238, 238, .3)"
};

const footer = (props) => {
  return (
  	<footer id="footer">
		  <div className="container">
		    <div className="row">
		      <div className="col-xs-3">
		      	<div className="footer-about">
		          <h5>About Us</h5><hr/>
		          <p className="footer-about__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita vero perspiciatis facere excepturi recusandae fuga est, quod iste.</p>
		        </div>
		      </div>

		      <div className="col-xs-3 col-xs-push-1">
		        <h5>Account</h5><hr/>
		        <ul className="footer-list-links">
		          <li><a href="login.html">Login</a></li>
		        </ul>
		      </div>

		      <div className="col-xs-2">
		        <h5>Company</h5><hr/>
		        <ul className="footer-list-links">
		          <li><a href="#">About Us</a></li>
		          <li><a href="#">FAQ</a></li>
		          <li><a href="#">Careers</a></li>
		          <li><a href="#">Contact</a></li>
		        </ul>
		      </div>

		      <div className="col-xs-2">
		        <h5>Follow Us</h5><hr/>
		        <ul className="footer-list-links">
		          <li><a href="#">Facebook</a></li>
		          <li><a href="#">Twitter</a></li>
		          <li><a href="#">Google-plus</a></li>
		          <li><a href="#">Instagram</a></li>
		        </ul>
		      </div>
		    </div>
		    <p className="text-center" style={pStyle}>Copyright &copy;</p>
		  </div>
		</footer>
  );
};

export default footer;
