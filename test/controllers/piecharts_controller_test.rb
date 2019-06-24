require 'test_helper'

class PiechartsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @piechart = piecharts(:one)
  end

  test "should get index" do
    get piecharts_url, as: :json
    assert_response :success
  end

  test "should create piechart" do
    assert_difference('Piechart.count') do
      post piecharts_url, params: { piechart: { angle: @piechart.angle, angle0: @piechart.angle0, opacity: @piechart.opacity, radius: @piechart.radius, radius0: @piechart.radius0 } }, as: :json
    end

    assert_response 201
  end

  test "should show piechart" do
    get piechart_url(@piechart), as: :json
    assert_response :success
  end

  test "should update piechart" do
    patch piechart_url(@piechart), params: { piechart: { angle: @piechart.angle, angle0: @piechart.angle0, opacity: @piechart.opacity, radius: @piechart.radius, radius0: @piechart.radius0 } }, as: :json
    assert_response 200
  end

  test "should destroy piechart" do
    assert_difference('Piechart.count', -1) do
      delete piechart_url(@piechart), as: :json
    end

    assert_response 204
  end
end
