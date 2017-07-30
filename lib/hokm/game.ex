defmodule Hokm.Game do
  def generate_deck do
    Hokm.Game.Deck.generate
  end

  def humanize_card(value) do
    Hokm.Game.Card.humanize(value)
  end
end
