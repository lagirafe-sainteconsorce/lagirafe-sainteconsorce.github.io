const Handlebars = require('handlebars');
Handlebars.registerHelper('bg', function(options) {
  return new Handlebars.SafeString(`<span class="bg">${options.fn(this)}</span>`);
});