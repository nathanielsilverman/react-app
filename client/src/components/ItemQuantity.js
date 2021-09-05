import React, { Component } from "react";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	Button,
	ButtonGroup,
} from "reactstrap";
import { connect } from "react-redux";
import { updateItem, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";
import MyAlert from "./MyAlert";

class ItemQuantity extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dropdownOpen: false,
			id: this.props.id,
			name: this.props.name,
			quantity: this.props.quantity,
			alertVisible: false,
		};
	}

	toggle = () => {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen,
		});
	};

	incrementQuantity = () => {
		var newQuantity = this.state.quantity + 1;
		this.setState({ quantity: newQuantity });
		this.updateItem(newQuantity);
	};

	decrementQuantity = () => {
		if (this.state.quantity > 1) {
			var newQuantity = this.state.quantity - 1;
			this.setState({ quantity: newQuantity });
			this.updateItem(newQuantity);
		} else {
			if (this.state.quantity === 1) {
				// this.setState({ alertVisible: true });
				// this.props.deleteItem(this.state.id);
			}
		}
	};

	updateItem = (newQuantity) => {
		const newItem = {
			id: this.state.id,
			name: this.state.name,
			quantity: newQuantity,
		};

		this.props.updateItem(newItem);
	};

	closeAlert = () => {
		this.setState({ alertVisible: false });
	};

	render() {
		return (
			<div>
				<Dropdown
					isOpen={this.state.dropdownOpen}
					direction="right"
					size="sm"
					toggle={this.toggle}
					color="dark"
				>
					<DropdownToggle
						caret
						onClick={this.toggle}
						color="dark"
						paddingRight="10"
						borderColor="none"
						maxWidth="20"
					>
						Quantity: {this.state.quantity}
					</DropdownToggle>
					<DropdownMenu
						color="dark"
						style={{
							direction: "down",
							width: "50px",
							placeSelf: "left",
							marginLeft: 3,
							marginTop: 10,
							border: "none",
							borderRadius: "none",
						}}
					>
						<ButtonGroup size="sm" maxWidth="50px">
							<Button
								onClick={this.incrementQuantity}
								color="dark"
							>
								+
							</Button>
							<Button
								onClick={this.decrementQuantity}
								color="dark"
							>
								-
							</Button>
							{/* <MyAlert
								visible={false}
								name={this.state.name}
								id={this.state.id}
								closeAlert={this.closeAlert}
								deleteItem={this.props.deleteItem}
							/> */}
						</ButtonGroup>
					</DropdownMenu>
				</Dropdown>
			</div>
		);
	}
}

ItemQuantity.propTypes = {
	updateItem: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	item: {
		id: state.id,
		name: state.name,
		quantity: state.quantity,
	},
});

export default connect(mapStateToProps, { updateItem, deleteItem })(
	ItemQuantity
);
