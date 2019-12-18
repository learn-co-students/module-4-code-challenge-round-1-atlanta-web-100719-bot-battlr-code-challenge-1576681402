import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	//your code here
	render() {
		const { botsList, handleClick } = this.props
		return (
			<div className="ui four column grid">
				<div className="row">
					{botsList.map(bot => {
						return <BotCard bot={bot} handleClick={handleClick} key={bot.id} />
					})}

				</div>
			</div>
		);
	}

};

export default BotCollection;
