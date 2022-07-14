class AppliedTosController < ApplicationController
   skip_before_action :authorize

   def index
      render json: applied_to_filter
   end

   def create
      application = AppliedTo.create!(application_params)
      render json: application
   end

#  def destroy
#      application = AppliedTo.find(params[:id])
#      application.delete
#      head :no_content
#  end

   private

   def application_params
      params.permit(:user_id, :job_posting_id)
   end

   def applied_to_filter
      user = User.find(params[:id])
      application = user.applied_to.map { |post| post.job_posting }
      application
   end

end
