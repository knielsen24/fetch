class SearchController < ApplicationController
   skip_before_action :authorize

   def index
      filtered_jobs = JobPosting.where(position: job_posting_params)
      render json: filtered_jobs, serializer: JobPostingSerializer
   end

   private

   def job_posting_params
      params.permit(:search)
   end

end
