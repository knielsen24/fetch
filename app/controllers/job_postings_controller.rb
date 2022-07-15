class JobPostingsController < ApplicationController

   skip_before_action :authorize

   def index
      render json: JobPosting.all.limit(20)
      # render json: job_posting_batches
   end

   def show
   render json: JobPosting.find_by!(user_id: params[:id])
   end

   private

   def job_posting_batches
      JobPosting.find_each(batch_size: 20) do |posting|
         posting
      end
   end

end
