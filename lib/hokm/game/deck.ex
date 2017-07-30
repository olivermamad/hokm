defmodule Hokm.Game.Deck do
  alias Hokm.Game.Card

  def generate do
    values = for i <- 2..14, do: i
    suits = [:Spades, :Clubs, :Diamonds, :Hearts]
    Enum.flat_map(values, fn value ->
      Enum.map(suits, &(%Card{value: value, suit: &1}))
    end)
    |> Enum.shuffle
  end
end
