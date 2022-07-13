class CompaniesController < ApplicationController
   skip_before_action :authorize

   def show
      company = Company.find_by!(id: params[:id])
      render json: company
   end

end
