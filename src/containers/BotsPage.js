import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {

  state = {
    botArmy: [],
    botData: []
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(data => {
        this.setState({ botData: data })
      })
  }

  handleAddClick = (id) => {
    const botId = id
    
    let selectedBot = this.state.botData
    let foundBot = selectedBot.find(element => element.id === botId)

    let armyArray = this.state.botArmy
    armyArray.push(foundBot)
    this.setState({botArmy: armyArray})
    
  }

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy}/>
        <BotCollection botData={this.state.botData} handleAddClick={this.handleAddClick} />
      </div>

    );
  }

}

export default BotsPage;
