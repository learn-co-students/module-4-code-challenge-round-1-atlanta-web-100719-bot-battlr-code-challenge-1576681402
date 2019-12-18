import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render() {
    const { botsList, handleClick } = this.props
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {botsList.map(bot => {
              return <BotCard bot={bot} handleClick={handleClick} key={bot.id} />
            })}

          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
