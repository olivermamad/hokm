defmodule HokmWeb.Router do
  use HokmWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", HokmWeb do
    pipe_through :browser # Use the default browser stack

    get "/", HomeController, :index
  end

  # Other scopes may use custom stacks.
  scope "/api", HokmWeb.Api do
    pipe_through :api

    resources "/deck", DeckController, only: [:create]
  end
end
