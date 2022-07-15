class AppliedTosController < ApplicationController
   skip_before_action :authorize, except: :index

   def index
      render json: @current_user.job_postings
   end

   def create
      application = AppliedTo.create!(application_params)
      render json: {error: "thems big"}
   end

 def destroy
     application = AppliedTo.find(params[:id])
     application.delete
     head :no_content
 end

   private

   def application_params
      params.permit(:user_id, :job_posting_id)
   end

end
