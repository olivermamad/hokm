defmodule HokmWeb.Api.DeckController do
  use HokmWeb, :controller
  alias Hokm.Game

  def create(conn, _params) do
    json conn, %{deck: Game.generate_deck |> Enum.map(&Game.humanize_card/1)}
  end
end
