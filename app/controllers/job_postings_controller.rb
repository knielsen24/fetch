class JobPostingsController < ApplicationController
    
    skip_before_action :authorize

    def index
        render json: JobPosting.all
    end

    def show 
        render json: JobPosting.find(params[:id])
    end

end
