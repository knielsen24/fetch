class AppliedTosController < ApplicationController
   skip_before_action :authorize, except: :index

   def index
      render json: @current_user.job_postings
      # , serializer: AppliedToWithIdSerializer
   end

   def create
      application = AppliedTo.create!(application_params)
      render json: application
   end

 def destroy
   #   application = AppliedTo.where(job_posting_id: params[:id], user_id: )
     application = @current_user.job_posting.find_by(job_posting_id: params[:id])
     application.delete
     head :no_content


 end

   private

   def application_params
      params.permit(:user_id, :job_posting_id)
   end

end
