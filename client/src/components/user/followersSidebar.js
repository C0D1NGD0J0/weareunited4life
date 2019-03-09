import React from 'react';

const Followers = ({ className }) => {
  return (
  	<div className="sidebar">
			<div className="sidebar_box">
				<div className="post_followers">
					<h4 className="text-center">Followers:</h4><hr/>
					<ul className="post_followers-list">
						<li>
							<div>
								<a href="#!">
									<img src="./dist/img/user.png" className="img-responsive img-circle img-thumbnail follower-img" alt="profile pic"/>
									<span className="follower-name">John Wick</span>
								</a>
								<span><a href="#!"><i className="fa fa-chain-broken"></i></a></span>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
  );
};


export default Followers;