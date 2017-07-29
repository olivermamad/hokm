defmodule HokmWeb.Api.DeckController do
  use HokmWeb, :controller

  def create(conn, _params) do
    json conn, %{deck: Hokm.Game.generate_deck}
  end
end
