import React from "react";
import BotCard from "../components/BotCard";
import Filter from "../components/Filter";

class BotCollection extends React.Component {
	state = {

		filter: 'All'
	}

	handleChange = (e) => {
		this.setState({ filter: e.target.value })
	}

	render() {
		const { botsList, handleClick } = this.props
		return (
			<div className="ui four column grid">
				<Filter handleChange={this.handleChange} />
				<div className="row">
					{botsList.map(bot => {
						if (this.state.filter === 'All') {
							return <BotCard bot={bot} handleClick={handleClick} key={bot.id} />
						} else if (bot.bot_class === this.state.filter)
							return <BotCard bot={bot} handleClick={handleClick} key={bot.id} />
					})}

				</div>
			</div>
		);
	}

};

export default BotCollection;
