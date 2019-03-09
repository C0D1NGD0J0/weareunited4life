import React, { PropTypes } from 'react';

const SideBar = ({ user }) => {
	
  return (
    <div className="sidebar">
			<div className="sidebar_box">
				<div className="sidebar_user-avatar text-center">
					<img src={user.avatar} className="img-responsive img-circle"/>
					<span className="btn btn-sm btn-danger">Follow</span>
					<span className="btn btn-sm btn-info">Message</span>
				</div>

				<div className="sidebar_user-info">
					<ul className="list-group">
						<li className="list-group-item">{user.username}</li>
						<li className="list-group-item">{user.location}</li>
						<li className="list-group-item">{user.role}</li>
					</ul>
				</div>
			</div>

			<div className="sidebar_box">
				<h4 className="text-center">Post Images</h4><hr/>
				<div className="sidebar_post-imgs">
					<div className="row">
						<div className="col-sm-4">
							<div className="post-imgs__img">
								<img src="./dist/img/manutd_logo.png" className="img-responsive" alt=""/>
							</div>
						</div>

						<div className="col-sm-4">
							<div className="post-imgs__img">
								<img src="./dist/img/manutd_logo.png" className="img-responsive" alt=""/>
							</div>
						</div>

						<div className="col-sm-4">
							<div className="post-imgs__img">
								<img src="./dist/img/manutd_logo.png" className="img-responsive" alt=""/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
};


export default SideBar;