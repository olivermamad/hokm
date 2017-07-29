defmodule HokmWeb.HomeController do
  use HokmWeb, :controller

  def index(conn, _params) do
    render conn, :index
  end
end
