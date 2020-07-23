import React, { Component } from 'react'
import './App.css'
import GuessCount from './GuessCount'
import Card from './Card'

class App extends Component {

  handleCardClick(card) {
    console.log(card, 'clicked')
  }

  render() {
    return (
      <div className="memory">
        <GuessCount guesses={0}/>
        <Card card="A" feedback="hidden" onClickCard={this.handleCardClick}/>
        <Card card="B" feedback="justMatched" onClickCard={this.handleCardClick}/>
        <Card card="C" feedback="justMismatched" onClickCard={this.handleCardClick}/> 
        <Card card="D" feedback="visible" onClickCard={this.handleCardClick}/>
        <Card card="E" feedback="hidden" onClickCard={this.handleCardClick}/>
        <Card card="F" feedback="justMatched" onClickCard={this.handleCardClick}/>
        <Card card="G" feedback="hidden" onClickCard={this.handleCardClick}/>
      </div>
    )
  }
}

export default App