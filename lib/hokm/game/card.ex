defmodule Hokm.Game.Card do
  @enforce_keys [:value, :suit]
  defstruct [:value, :suit]
  alias Hokm.Game.Card

  def humanize(%Card{value: 11, suit: suit}), do: %Card{value: :J, suit: suit}
  def humanize(%Card{value: 12, suit: suit}), do: %Card{value: :Q, suit: suit}
  def humanize(%Card{value: 13, suit: suit}), do: %Card{value: :K, suit: suit}
  def humanize(%Card{value: 14, suit: suit}), do: %Card{value: :A, suit: suit}
  def humanize(card), do: card
end
