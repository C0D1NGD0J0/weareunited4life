import React, { useState } from 'react';
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';

const PostPhotos = (props) => {
	const { post }  = props;
	const [ isOpen, toggleOpen] = useState(false);
	const [ imgIndex, updateIndex] = useState(0);

	const photoCard = (post ? post : []).map((img) =>{
		return (
			<div className="col-sm-6" key={img._id}>
				<div className="post-imgs__img">
					<img src={img.location} className="img-responsive" alt={img.filename ? img.filename : "post"} onClick={() => toggleOpen(!isOpen)} />
				</div>
			</div>
		);
	})

  return (
  	<div className="sidebar_box">
			<h4 className="text-center">Images</h4><hr/>
			<div className="sidebar_post-imgs">
				<div className="row">
					{photoCard}
					{isOpen && (
						<Lightbox 
							mainSrc={post[imgIndex].location}
							nextSrc={post[(imgIndex + 1) % post.length].location}
							prevSrc={post[((imgIndex + 1) + post.length - 1) % post.length].location}
							onCloseRequest={() => toggleOpen(!isOpen)}
							onMovePrevRequest={ () => updateIndex((imgIndex + post.length - 1) % post.length) }
							onMoveNextRequest={ () => updateIndex((imgIndex + 1) % post.length) }
						/>)
					}
				</div>
			</div>
		</div> 
  );
};


export default PostPhotos;