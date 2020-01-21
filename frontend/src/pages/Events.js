import React, { Component } from "react";
import "./events.css";

class EventPage extends Component {
	render() {
		return (
			<div className="events-control">
				<p>Share your own Events</p>
				<button className="btn">Create Event</button>
			</div>
		);
	}
}

export default EventPage;
