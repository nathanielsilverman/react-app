// import React, { Component } from "react";
// import {
// 	Button,
// 	Modal,
// 	ModalHeader,
// 	ModalBody,
// 	Form,
// 	FormGroup,
// 	Label,
// 	Input,
// } from "reactstrap";
// import { connect } from "react-redux";
// import { updateItem, getItems } from "../actions/itemActions";
// import PropTypes from "prop-types";

// class UpdateModal extends Component {
// 	state = {
// 		modal: false,
// 		id: "",
// 		quantity: 1,
// 	};

// 	toggle = () => {
// 		this.setState({
// 			modal: !this.state.modal,
// 		});
// 	};

// 	onChange = (e) => {
// 		this.setState({ [e.target.quantity]: e.target.value });
// 	};

// 	onSubmit = (e) => {
// 		e.preventDefault();

// 		const updated_Item = {
// 			id: this.state.quantity,
// 			quantity: this.state.quantity,
// 		};

// 		//Update item quantity via updateItem action
// 		this.props.updateItem(updated_Item);

// 		//close modal
// 		this.toggle();
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<Modal centered isOpen={this.state.modal} toggle={this.toggle}>
// 					<ModalHeader>Enter Quantity</ModalHeader>
// 					<ModalBody>
// 						<Form onSubmit={this.onSubmitUpdate}>
// 							<FormGroup>
// 								<Label for="item">Item</Label>
// 								<Input
// 									type="text"
// 									name="name"
// 									required="number"
// 									placeholder="Enter Quantity"
// 									onChange={this.onChange}
// 								/>
// 								<Button
// 									className="update-btn"
// 									color="dark"
// 									// style={{ marginTop: "2rem" }}
// 									type="submit"
// 									// block
// 								>
// 									Update Item
// 								</Button>
// 							</FormGroup>
// 						</Form>
// 					</ModalBody>
// 				</Modal>
// 				<Button
// 					color="dark"
// 					// style={{ marginTop: "2rem" }}
// 					onClick={this.toggle}
// 					// block
// 				>
// 					Update Quantity
// 				</Button>
// 			</div>
// 		);
// 	}
// }

// UpdateModal.propTypes = {
// 	// updateItem: PropTypes.func.isRequired,
// 	id: PropTypes.string.isRequired,
// };

// const mapStateToProps = (state) => ({
// 	id: state.id,
// 	quantity: state.quantity,
// });

// export default connect(mapStateToProps, { getItems, updateItem })(UpdateModal);
