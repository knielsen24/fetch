class AppliedTosController < ApplicationController
    skip_before_action :authorize



    def index
        application = AppliedTo.where(user_id: params[:id])
        render json: application
    end

    

end
