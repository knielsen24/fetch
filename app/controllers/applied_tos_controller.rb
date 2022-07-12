class AppliedTosController < ApplicationController
    skip_before_action :authorize

    def index
        applied_to = AppliedTo.all
        render json: applied_to
    end

    def show
        application = AppliedTo.where(user_id: params[:id])
        render json: application
    end

end
