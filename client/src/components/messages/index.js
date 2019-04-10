import React, { Component } from 'react';
import Header from "../layouts/pageHeader";

class Messages extends Component {
	render() {
		return (
			<main id="content_wrapper" className="bg-img_post">
				<Header title="Private Messages" />
				<section id="messages" className="messages">
					
				</section>
			</main>
		);
	}
}


export default Messages;