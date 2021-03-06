class DatapointsController < ApplicationController
  before_action :set_datapoint, only: [:show, :update, :destroy]

  # GET /datapoints
  def index
    @datapoints = Datapoint.all

    render json: @datapoints
  end

  # GET /datapoints/1
  def show
    render json: @datapoint
  end

  # POST /datapoints
  def create
    @datapoint = Datapoint.new(datapoint_params)

    if @datapoint.save
      render json: @datapoint, status: :created, location: @datapoint
    else
      render json: @datapoint.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /datapoints/1
  def update
    if @datapoint.update(datapoint_params)
      render json: @datapoint
    else
      render json: @datapoint.errors, status: :unprocessable_entity
    end
  end

  # DELETE /datapoints/1
  def destroy
    @datapoint.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_datapoint
      @datapoint = Datapoint.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def datapoint_params
      params.require(:datapoint).permit(:x, :y)
    end
end
