import React, { Component } from 'react';

class Landing extends Component {
	render() {
		return (
			<main id="content_wrapper" className="bg-color_black">
				<header className="header">
					<div className="container">
						<div className="row">
							<div className="col-sm-6">
								<div className="header-left">
									<h1 className="header hero-title">we <br/>are <br/>united</h1>
									<p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident odit pariatur perferendis, doloremque, aut veritatis.</p>
								</div>
							</div>

							<div className="col-sm-4 col-sm-push-2">
								<div className="header-right">
									<div className="well header-right_auth-forms">
										<ul className="nav nav-tabs" role="tablist">
											<li role="presentation" className="active"><a href="#login" aria-controls="profile" role="tab" data-toggle="tab">Login</a></li>
									    <li role="presentation"><a href="#signup" aria-controls="home" role="tab" data-toggle="tab">Signup</a></li>
									  </ul>

									  <div className="tab-content">
									  	<div role="tabpanel" className="tab-pane active" id="login">
									    	<form action="login.html" className="form">
									        <div className="form-group">
									          <label>Email <small>(required)</small></label>
									          <input type="text" className="form-control" placeholder="Enter Email"/>
									        </div>

									        <div className="form-group">
									          <label>Password <small>(required)</small></label>
									          <input type="password" className="form-control" placeholder="Password"/>
									        </div>
													<br/>
									        <input type="submit" value="Login" className="btn btn-danger btn-block"/>
													<br/>
									        <a href="#">Forgot Password?</a>
									      </form>
									    </div>

									    <div role="tabpanel" className="tab-pane" id="signup">
									    	<form action="login.html" className="form">
									        <div className="form-group">
									          <label>Username <small>(required)</small></label>
									          <input type="text" className="form-control" placeholder="Enter Username"/>
									        </div>

									        <div className="form-group">
									          <label>Email <small>(required)</small></label>
									          <input type="email" className="form-control" placeholder="Enter Email"/>
									        </div>

									        <div className="form-group">
									          <label>Location <small>(required)</small></label>
									          <input type="text" className="form-control" placeholder="Enter Location"/>
									        </div>

									        <div className="form-group">
									          <label>Birthday <small>(required)</small></label>
									          <input type="date" className="form-control" placeholder="Enter D.o.B"/>
									        </div>

									        <div className="form-group">
									          <label>Password <small>(required)</small></label>
									          <input type="password" className="form-control" placeholder="Password"/>
									        </div>
													<br/>
									        <input type="submit" value="Signup" className="btn btn-danger btn-block"/>
													<br/>
									        <a href="#">Forgot Password?</a>
									      </form>
									    </div>
									  </div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
			</main>
		);
	}
}

export default Landing;