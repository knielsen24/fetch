class JobPostingsController < ApplicationController

   skip_before_action :authorize

   def index
      render json: JobPosting.all.limit(20)
   end

   def show
   render json: JobPosting.find_by!(user_id: params[:id])
   end

end
