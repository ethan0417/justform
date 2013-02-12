var forms = require('forms')
  , util = require('util')
  , fields = forms.fields
  , validators = forms.validators;

exports.create = function(_opts, _fields){
  var html = '<form %s>%s</form>'
    , formParams = ''
    , context = forms.create(_fields);

  ['method', 'name', 'id', 'action'].forEach(function(v,i){
    if(_opts[v]) formParams += (' '+v+'="'+_opts[v]+'"');
  });

  return util.format(html, formParams, context.toHTML());  
}

exports.fields = fields;
exports.validators = validators;
