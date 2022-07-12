class AppliedTosController < ApplicationController
    skip_before_action :authorize

    def index
        application = AppliedTo.where(user_id: params[:id])
        render json: application
    end

    def create
        application = AppliedTo.create(application_params)
        render json: application
    end

    private

    def application_params
        params.permit(user_id: params[:user_id], job_posting_id: params[:job_posting_id])
    end

end
