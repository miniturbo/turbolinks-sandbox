require_relative 'boot'

require 'rails'
require 'active_model/railtie'
require 'active_job/railtie'
require 'active_record/railtie'
require 'action_controller/railtie'
# require 'action_mailer/railtie'
require 'action_view/railtie'
# require 'action_cable/engine'
require 'sprockets/railtie'
# require 'rails/test_unit/railtie'

Bundler.require(*Rails.groups)

module TurbolinksSandbox
  class Application < Rails::Application
    config.load_defaults 5.1

    config.i18n.default_locale = :ja
    config.i18n.load_path = Dir[Rails.root.join('config', 'locales', '**', '*.yml')]

    config.time_zone = 'Tokyo'

    config.generators do |g|
      g.assets false
      g.helper false
      g.javascripts false
      g.stylesheets false
      g.system_tests nil
      g.test_framework nil
    end
  end
end
