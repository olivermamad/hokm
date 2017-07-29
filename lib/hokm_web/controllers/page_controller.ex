defmodule HokmWeb.PageController do
  use HokmWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
