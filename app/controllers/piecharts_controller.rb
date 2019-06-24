class PiechartsController < ApplicationController
  before_action :set_piechart, only: [:show, :update, :destroy]

  # GET /piecharts
  def index
    @piecharts = Piechart.all

    render json: @piecharts
  end

  # GET /piecharts/1
  def show
    render json: @piechart
  end

  # POST /piecharts
  def create
    @piechart = Piechart.new(piechart_params)

    if @piechart.save
      render json: @piechart, status: :created, location: @piechart
    else
      render json: @piechart.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /piecharts/1
  def update
    if @piechart.update(piechart_params)
      render json: @piechart
    else
      render json: @piechart.errors, status: :unprocessable_entity
    end
  end

  # DELETE /piecharts/1
  def destroy
    @piechart.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_piechart
      @piechart = Piechart.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def piechart_params
      params.require(:piechart).permit(:angle0, :angle, :opacity, :radius, :radius0)
    end
end
