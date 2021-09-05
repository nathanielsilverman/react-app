import React, { Component } from "react";
import { Alert, Button } from "reactstrap";

export default class MyAlert extends Component {
	render() {
		return (
			<div>
				<Alert
					color="warning"
					isOpen={this.props.visible}
					toggle={this.props.closeAlert()}
				>
					Are you sure you want to remove {this.props.name}
					from the shopping list?
					<Button
						color="danger"
						onClick={this.props.deleteItem(this.props.id)}
					>
						{" "}
						Remove
					</Button>
				</Alert>
			</div>
		);
	}
}
