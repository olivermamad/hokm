defmodule Hokm.Game.Deck do
  alias Hokm.Game.Card

  def generate do
    values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
    suits = ["S", "C", "D", "H"]
    Enum.flat_map(values, fn value ->
      Enum.map(suits, &(%Card{value: value, suit: &1}))
    end)
    |> Enum.shuffle
  end
end
