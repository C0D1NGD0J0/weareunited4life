import React from 'react';

const PostPhotos = (props) => {
	const { post }  = props;
	
	const photoCard = (post ? post : []).map((img) =>{
		return (
			<div className="col-sm-4">
				<div className="post-imgs__img">
					<img src={img.location} className="img-responsive" alt={img.filename}/>
				</div>
			</div>
		);
	})
  return (
  	<div className="sidebar_box">
			<h4 className="text-center">Post Images</h4><hr/>
			<div className="sidebar_post-imgs">
				<div className="row">
					{photoCard}
				</div>
			</div>
		</div> 
  );
};


export default PostPhotos;