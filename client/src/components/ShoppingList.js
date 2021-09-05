import React, { Component } from "react";
import {
	Container,
	Button,
	ListGroup,
	ListGroupItem,
	CardTitle,
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import ItemQuantity from "./ItemQuantity";
import PropTypes from "prop-types";

class ShoppingList extends Component {
	componentDidMount() {
		this.props.getItems();
	}

	onDeleteClick = (id) => {
		this.props.deleteItem(id);
	};

	render() {
		const { items } = this.props.item;
		return (
			<Container>
				<ListGroup>
					<TransitionGroup className="shopping-list">
						{items.map(({ _id, name, quantity }) => (
							<CSSTransition
								timeout={500}
								classname="fade"
								key={_id}
							>
								<ListGroupItem
									style={{
										borderColor: "white",
										margin: "1",
									}}
									key={_id}
								>
									<div style={{ display: "inline-flex" }}>
										<CardTitle
											style={{
												textTransform: "capitalize",
												alignSelf: "Left",
												display: "flex",
												paddingRight: 40,
												marginRight: 30,
												width: 100,
											}}
										>
											{name}
										</CardTitle>
										<ItemQuantity
											style={{
												display: "flex",
												marginRight: 30,
												width: 100,
											}}
											id={_id}
											quantity={quantity}
											name={name}
										/>
										<Button
											style={{
												display: "flex",
												marginLeft: 100,
												align: "right",
											}}
											className="remove-btn"
											color="danger"
											size="sm"
											onClick={this.onDeleteClick.bind(
												this,
												_id
											)}
										>
											&times;
										</Button>
									</div>
								</ListGroupItem>
							</CSSTransition>
						))}
					</TransitionGroup>
				</ListGroup>
			</Container>
		);
	}
}

ShoppingList.propTypes = {
	getItems: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	item: state.item,
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);
