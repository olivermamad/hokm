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
    trick: [],
    hokm: ''
  };

  async componentDidMount() {
    let response = await fetch('/api/deck', { method: 'POST' });
    this.deck = (await response.json()).deck
    this.setState({ hands: {...this.state.hands, player1: this.deck.splice(0, 5)} })
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

  onCardClick(player, card) {
    if (!this.hokmSelected()) {
      this.setState({hokm: card.suit})
      this.dealRestOfCards()
      return
    }

    let index = Object.keys(this.state.hands).indexOf(player)
    let newTrick = [...this.state.trick];
    newTrick[index] = card
    this.setState({trick: newTrick})
  }

  renderCard = (player, card, clickable) => {
    let {suit} = card
    if (suit == 'Diamonds') suit = 'diams'

    return (
      <li>
        <a
          onClick={() => {if (clickable) this.onCardClick(player, card)}}
          className={`card rank-${card.value} ${suit.toLowerCase()}`}
          href="#"
        >
          <span className="rank">
            {card.value}
          </span>
          <span
            className="suit"
            dangerouslySetInnerHTML={{__html: `&${suit.toLowerCase()};`}}
          >
          </span>
        </a>
      </li>
    )
  }

  renderHand(player, hand) {
    return (
      <ul className="hand" key={player}>
        {`${player}'s Hand`}
        {hand.map(card => this.renderCard(player, card, true))}
        <br></br>
      </ul>
    )
  }

  renderHands() {
    return Object.keys(this.state.hands).map((player) => {
      return this.renderHand(player, this.state.hands[player])
    })
  }

  renderTrick() {
    return this.state.trick.map(card => this.renderCard(null, card))
  }

  render() {
    return [
      <div className="playingCards faceImages">
        <div>
          Hokm {this.state.hokm}
        </div>
        {this.renderHands()}
        {this.renderTrick()}
      </div>
    ]
  }
}
