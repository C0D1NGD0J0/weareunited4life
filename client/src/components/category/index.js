import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from "../layouts/pageHeader";
import CategoriesTable from "./categoriesTable";
import CategoryFormPanel from "./categoryFormPanel";
import Sidebar from "../layouts/Sidebar/";
import SidebarUser from "../layouts/Sidebar/userDetails";
import { getCategoriesAction, newCategoryAction } from "../../Actions/categoryAction";

class Category extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: ""
		};
	}

	componentDidMount(){
		this.props.getCategoriesAction();	
	}

	onFormInputChange = (e) =>{
		this.setState({[e.target.name]: e.target.value});
	}

	onFormSubmit = (e) =>{
		e.preventDefault();
		const newCategory = { name: this.state.name };
		this.props.newCategoryAction(newCategory);
	}

	render() {
		const { user } = this.props.auth;
		const { category } = this.props;
		
		return (
			<main id="content_wrapper" className="bg-img_posts">
				<Header title="Category" />

				<section id="category">
					<div className="container">
						<div className="row">
							<div className="col-sm-2">
								<Sidebar user={user} auth={this.props.auth}>
									<SidebarUser />
								</Sidebar>
							</div>

							<div className="col-sm-9">
								<div className="category-overview">
			            <CategoryFormPanel 
			            	value={this.state.name} 
			            	onChange={this.onFormInputChange} 
			            	onFormSubmit={this.onFormSubmit}
			            />
			            <CategoriesTable categories={category.all} />
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
	auth: state.auth,
	category: state.category
});

const mapDispatchToProps = {
	getCategoriesAction,
	newCategoryAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);