import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from "../layouts/pageHeader";
import CategoriesTable from "./categoriesTable";
import Sidebar from "../layouts/Sidebar/";
import SidebarUser from "../layouts/Sidebar/userDetails";

class Category extends Component {
	render() {
		const { user } = this.props.auth;

		return (
			<main id="content_wrapper" className="bg-img_posts">
				<Header title="Category" />

				<section id="category">
					<div className="container">
						<div className="row">
							<div className="col-sm-2">
								<Sidebar user={user}>
									<SidebarUser />
								</Sidebar>
							</div>

							<div className="col-sm-9">
								<div className="category-overview">
			            <div className="panel panel-default">
			              <div className="panel-heading">
			                <h3 className="panel-title">Create Category</h3>
			              </div>
			              
			              <div className="panel-body">
			                <form className="form">
			                  <label htmlFor="name">Name (required)</label>
			                  <input type="text" className="form-control" placeholder="Category name" style={{width: "70%", display: "inline-block", margin: "0 2rem", height: "3.5rem"}}/>
			                  <input type="submit" value="Submit" className="btn btn-danger" />
			                </form>
			              </div>
			            </div>

			            <CategoriesTable />
			          </div>
							</div>
						</div>
					</div>
				</section>
			</main>
		);
	}
}

const mapStateToProps = (state) =>({
	auth: state.auth
});

export default connect(mapStateToProps, {})(Category);