class Api::PokemonController < ApplicationController

  def index
    @pokemon = Pokemon.all
    # render :json
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    # render :json
  end

end
