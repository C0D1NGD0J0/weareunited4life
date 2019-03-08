import React, { PropTypes } from 'react';

const Header = (props) => {
  return (
  	<div className="post-header">
			<div className="container">
				<div className="row">
						<div className="col-sm-12">
							<div className="post-title">
								<h2>{props.title}</h2>
							</div>
						</div>
					</div>
			</div>	
		</div>   
  );
};


export default Header;