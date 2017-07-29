import React from 'react'

export default class Game extends React.Component {
  deck = [];
  state = {
    hands: {
      player1: [],
      player2: [],
      player3: [],
      player4: []
    },
    hokm: ''
  };

  async componentDidMount() {
    let response = await fetch('/api/deck', { method: 'POST' });
    this.deck = (await response.json()).deck
    this.setState({ hands: {...this.state.hands, player1: this.deck.splice(0, 5)}  })
  }

  hokmSelected() {
    return this.state.hokm
  }

  dealRestOfCards() {
    this.setState({ hands: {
      player1: [...this.state.hands.player1, ...this.deck.splice(0, 8)],
      player2: this.deck.splice(0, 13),
      player3: this.deck.splice(0, 13),
      player4: this.deck.splice(0, 13)
    }})
  }

  onCardClick = (card) => {
    if (!this.hokmSelected()) {
      this.setState({hokm: card.suit})
      this.dealRestOfCards()
      return
    }
  }

  renderCard = (card) => {
    return (
      <div onClick={() => this.onCardClick(card)}>
        <span>
          {card.value}
        </span>
        <span>
          {card.suit}
        </span>
      </div>
    )
  }

  renderHand(player, hand) {
    return (
      <div key={player}>
        {`${player}'s Hand`}
        {hand.map(this.renderCard)}
        <br></br>
      </div>
    )
  }

  renderHands(hands) {
    return Object.keys(hands).map((player) => {
      return this.renderHand(player, this.state.hands[player])
    })
  }

  render() {
    return [
      <div>
        <div>
          Hokm {this.state.hokm}
        </div>
        {this.renderHands(this.state.hands)}
      </div>
    ]
  }
}
