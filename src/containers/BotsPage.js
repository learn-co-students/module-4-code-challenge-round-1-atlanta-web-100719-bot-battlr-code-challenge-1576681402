import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    botsList: [],
    yourBotArmy: [],
    selectedBot: null
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
    this.setState({ selectedBot: bot })
  }

  handleEnlistClick = (e, bot) => {
    if (!this.state.yourBotArmy.includes(bot)) {
      this.setState({
        yourBotArmy: [...this.state.yourBotArmy, bot],
        selectedBot: null
      })
    }
  }

  handleBackClick = () => {
    this.setState({ selectedBot: null })
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
        {this.state.selectedBot ? <BotSpecs bot={this.state.selectedBot} handleBackClick={this.handleBackClick} handleEnlistClick={this.handleEnlistClick} /> : <BotCollection botsList={this.state.botsList} handleClick={this.handleAddClick} />}
      </div>
    );
  }

}

export default BotsPage;
