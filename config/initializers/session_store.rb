if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: '_planthub', domain: 'http://localhost:4000/'
  else
    Rails.application.config.session_store :cookie_store, key: '_planthub'
end