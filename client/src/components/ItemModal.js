import React, { Component } from "react";
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Label,
	Input,
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";

class ItemModal extends Component {
	state = {
		modal: false,
		name: "",
	};

	toggle = () => {
		this.setState({
			modal: !this.state.modal,
		});
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();

		const newItem = {
			name: this.state.name,
		};

		//Add item via addItem action
		this.props.addItem(newItem);

		//close modal
		this.toggle();
	};

	render() {
		return (
			<div>
				<Modal
					centered
					returnFocusAfterClose
					isOpen={this.state.modal}
					toggle={this.toggle}
					autoFocus={false}
				>
					<Form name="addItemForm" onSubmit={this.onSubmit}>
						<ModalHeader>Add To Shopping List</ModalHeader>
						<ModalBody>
							{/* <FormGroup> */}
							{/* <Label for="item">Item</Label> */}
							<Input
								autoFocus={true}
								type="text"
								name="name"
								required="string"
								id="item"
								placeholder="Add shopping item"
								onChange={this.onChange}
							/>
							<Button
								color="dark"
								style={{ marginTop: "2rem" }}
								block
								type="submit"
							>
								Add Item
							</Button>
							{/* </FormGroup> */}
						</ModalBody>
					</Form>
				</Modal>

				<Button
					color="dark"
					stlye={{ marginBottom: "2rem" }}
					onClick={this.toggle}
				>
					Add Item
				</Button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	item: state.item,
});

export default connect(mapStateToProps, { addItem })(ItemModal);
