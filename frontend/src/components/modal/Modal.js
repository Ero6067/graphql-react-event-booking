import React from "react";

import modal from "./modal";

const modal = props => {
	<div className="modal">
		<header>{props.title}</header>
		<section className="modal__content">{props.children}</section>
		<section className="modal__actions">
			{props.canCancel && <button className="btn">Cancel</button>}
			{props.canConfirm && <button className="btn">Config</button>}
		</section>
	</div>;
};

export default modal;
