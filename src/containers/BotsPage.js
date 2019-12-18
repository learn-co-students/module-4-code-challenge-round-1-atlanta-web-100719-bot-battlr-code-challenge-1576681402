import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    botsList: [],
    yourBotArmy: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => (res.json()))
      .then(botsList => {
        this.setState({
          botsList
        })
      })
  }

  handleAddClick = (e, bot) => {
    if (!this.state.yourBotArmy.includes(bot))
      this.setState({ yourBotArmy: [...this.state.yourBotArmy, bot] })
  }

  handleRemoveClick = (e, bot) => {
    console.log(this.state.yourBotArmy);

    this.setState({
      yourBotArmy: [...this.state.yourBotArmy].filter(yourBot => {
        return bot.id !== yourBot.id
      })
    })

  }

  render() {
    return (
      <div>
        <YourBotArmy botsList={this.state.yourBotArmy} handleClick={this.handleRemoveClick} />
        <BotCollection botsList={this.state.botsList} handleClick={this.handleAddClick} />
      </div>
    );
  }

}

export default BotsPage;
