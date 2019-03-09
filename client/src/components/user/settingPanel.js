import React from 'react';

const Settings = ({ user }) => {
  return (
  	<div className="panel panel-default profile-page_overview">
			<div className="panel-heading">
				<a href="#myCollapse" data-toggle="collapse" aria-expanded="true">
					<h3 className="panel-title">Account Settings</h3>
				</a>
			</div>
			
			<div id="myCollapse">
  			<div className="panel-body">
  				<form className="form">
            <fieldset disabled="disabled">
    					<div className="row">
        				<div className="col-sm-4 col-md-4">
        					<div className="form-group">
        						<label>Username</label>
        						<input type="text" className="form-control" value={user.username}/>
        					</div>
        				</div>

        				<div className="col-sm-4 col-md-4">
        					<div className="form-group">
        						<label>Email</label>
        						<input type="text" className="form-control" value={user.email}/>
        					</div>
        				</div>

        				<div className="col-sm-4 col-md-4">
        					<div className="form-group">
        						<label>location</label>
        						<input type="text" className="form-control" value={user.location}/>
        					</div>
        				</div>

        				<div className="col-sm-4 col-md-4">
        					<div className="form-group">
        						<label>D.o.B</label>
        						<input type="text" className="form-control"/>
        					</div>
        				</div>

        				<div className="col-sm-4 col-md-4">
        					<div className="form-group">
        						<label>Role</label>
        						<input type="text" className="form-control" value={user.role}/>
        					</div>
        				</div>
        			</div><hr/>

        			<div className="row form">
        				<div className="col-sm-6">
        					<div className="form-group">
        						<label>Update Password</label>
        						<input type="password" name="password" className="form-control"/>
        					</div>
        				</div>

        				<div className="col-sm-6">
        					<div className="form-group">
        						<label>Confirm New Password</label>
        						<input type="password" name="password2" className="form-control"/>
        					</div>
        				</div>
        			</div>
            </fieldset>
    			</form>
  			</div>

  			<div className="panel-footer clearfix">
  				<a href="#!" className="btn btn-info pull-right">Update</a>
  				<a href="#!" className="btn btn-danger pull-right">Close</a>
  			</div>
  		</div>
		</div>
  );
};


export default Settings;