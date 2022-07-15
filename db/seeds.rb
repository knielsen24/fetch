

10.times do
    User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password_digest: Faker::Internet.password, image_url: Faker::Avatar.image, resume: 'empty')
end

200.times do
    Company.create(name: Faker::Company.name, num_of_employees: rand(50..1000), phone: Faker::PhoneNumber.cell_phone, address: Faker::Address.full_address, image: Faker::LoremFlickr.image(search_terms: ['business']), password_digest: Faker::Internet.password, email: Faker::Internet.email)
end

1000.times do
    JobPosting.create(company_id: Company.ids.sample, position: Faker::Company.profession, location: "#{Faker::Address.city}, #{Faker::Address.state}", compensation: rand(45000..250000).to_s, job_type: "Full-Time", description: Faker::Lorem.paragraph, benefits: Faker::Lorem.paragraph)
end

1000.times do
    AppliedTo.create(user_id: User.ids.sample, job_posting_id: JobPosting.ids.sample)
end

1000.times do
    Review.create(company_id: Company.ids.sample, user_id: User.ids.sample, stars: rand(0.0..5.0), review_text: Faker::Lorem.paragraph)
end

puts "lining the ceos' pockets"
