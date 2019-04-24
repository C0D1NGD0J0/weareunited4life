import React, { useState } from 'react';
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';
import { isPostAuthor, validateAuth } from "../../../helpers/helpersFN";

const PostPhotos = (props) => {
	const { postimages, deletePhoto, auth, author }  = props;
	const isAuthenticated = validateAuth(auth);
	const [ isOpen, toggleOpen] = useState(false);
	const [ imgIndex, updateIndex] = useState(0);
	
	const photoCard = (postimages ? postimages : []).map((img) =>{
		return (
			<div className="col-sm-6" key={img._id}>
				<div className="post-imgs__img">
					<img src={img.location} className="img-responsive" alt={img.filename ? img.filename : "post"} onClick={() => toggleOpen(!isOpen)} />
					
					{ isAuthenticated && isPostAuthor(auth, author) ? 
						<span className="fa fa-trash" onClick={() => deletePhoto(img.filename)}></span> : null }
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
							mainSrc={postimages[imgIndex].location}
							nextSrc={postimages[(imgIndex + 1) % postimages.length].location}
							prevSrc={postimages[((imgIndex + 1) + postimages.length - 1) % postimages.length].location}
							onCloseRequest={() => toggleOpen(!isOpen)}
							onMovePrevRequest={ () => updateIndex((imgIndex + postimages.length - 1) % postimages.length) }
							onMoveNextRequest={ () => updateIndex((imgIndex + 1) % postimages.length) }
						/>)
					}
				</div>
			</div>
		</div> 
  );
};


export default PostPhotos;