import React, { Component } from 'react';
import FormInputField from "../../helpers/FormElements/FormInputField";
import InputSubmitBtn from "../../helpers/FormElements/InputSubmit";

class SettingPanel extends Component {
  constructor(props){
    super(props);
    this.state = {
      isFormEnabled: false,
      user:{
        id: this.props.user._id,
        username: this.props.user.username,
        email: this.props.user.email,
        role: this.props.user.role,
        location: this.props.user.location,
        password: "",
        password2:  ""
      }
    };
  }

  toggleFormStatus = () =>{
    this.setState({isFormEnabled: !this.state.isFormEnabled});
  }

  onFormInputChange = (e) =>{
    this.setState({user:{...this.state.user, [e.target.name]: e.target.value}});
  }

  onFormSubmit = (e) =>{
    const userdata = {
      id: this.state.user.id,
      username: this.state.user.username,
      email: this.state.user.email,
      location: this.state.user.location,
      password: this.state.user.password,
      password2: this.state.user.password2
    };

    this.props.updateUser(e, userdata);
  };

  render() {
    const { isFormEnabled, user } = this.state;
    const errors = this.props.errors;
    const { handleAcctDelete } = this.props;
   
    return(
      <div className="panel panel-default profile-page_overview">
        <div className="panel-heading clearfix">
          <a href="#myCollapse" data-toggle="collapse" aria-expanded="true" style={{display: 'inline-block'}}>
            <h3 className="panel-title">Account Settings</h3>
          </a>
          <span onClick={this.toggleFormStatus} className="pull-right">
              <i className="fa fa-pencil"></i>
              {isFormEnabled ? ' Disable' : ' Edit'}
            </span>
        </div>
        
        <div id="myCollapse">
          <fieldset disabled={isFormEnabled ? false : "disabled"}>
            <div className="panel-body">
              <form className="form" onSubmit={this.onFormSubmit}>
                <div className="row">
                  <div className="col-sm-6 col-md-6">
                    <FormInputField
                      label="Username"
                      name="username"
                      labelinfo="(required)"
                      value={user.username}
                      onChange={this.onFormInputChange}
                      placeholder="Enter Username..."
                      error={errors.username}
                      isDisabled={false}
                    />
                  </div>

                  <div className="col-sm-6 col-md-6">
                    <FormInputField
                      label="Email"
                      name="email"
                      type="email"
                      labelinfo="(required)"
                      value={user.email}
                      onChange={this.onFormInputChange}
                      placeholder="Enter Email..."
                      error={errors.email}
                      isDisabled={false}
                    />
                  </div>

                  <div className="col-sm-6 col-md-6">
                    <FormInputField
                      label="Location"
                      name="location"
                      labelinfo="(required)"
                      value={user.location}
                      onChange={this.onFormInputChange}
                      placeholder="Enter Location..."
                      error={errors.location}
                      isDisabled={false}
                    />
                  </div>

                  <div className="col-sm-6 col-md-6">
                    <FormInputField
                      label="role"
                      name="role"
                      labelinfo="(required)"
                      value={user.role}
                      onChange={this.onFormInputChange}
                      placeholder="Enter role..."
                      error={errors.role}
                      isDisabled={true}
                    />
                  </div>
                </div><hr/>

                <div className="row form">
                  <div className="col-sm-6">
                    <FormInputField
                      label="Update Password"
                      name="password"
                      type="password"
                      value={user.password}
                      onChange={this.onFormInputChange}
                      placeholder="Leave blank if you wish to use current password"
                      error={errors.password}
                      isDisabled={false}
                    />
                  </div>

                  <div className="col-sm-6">
                    <FormInputField
                      label="Confirm Updated Password"
                      name="password2"
                      type="password"
                      value={user.password2}
                      onChange={this.onFormInputChange}
                      placeholder="Leave blank if you wish to use current password"
                      error={errors.password2}
                      isDisabled={false}
                    />
                  </div>
                </div>
                <input type="submit" value="Update" className="btn btn-info btn-block" />
              </form>
            </div>
            <div className="panel-footer">
              <h3>Delete Account?</h3>
              <span className="btn btn-danger btn-block" onClick={() => handleAcctDelete(user.id)}>Close Account</span>
            </div>
          </fieldset>
        </div>
      </div>
    );
  }
};


export default SettingPanel