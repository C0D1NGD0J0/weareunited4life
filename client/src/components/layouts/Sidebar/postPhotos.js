import React, { PropTypes } from 'react';

const PostPhotos = (props) => {
	const { post } = props;
	
  return (
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
  );
};


export default PostPhotos;