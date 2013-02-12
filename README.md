justform
========

Extend the forms module to build a really form html. I add the form tag to include the result from forms. 
So, the all context inside the form will follow the rule from "<a href="https://github.com/caolan/forms">forms</form>". Thanks caolan!

Sample
========
The form.create has 2 parameters include: 
* form options: include id, name, action, method, class, style that mapping to the form html.
* content options: all follow the forms project.

```javascript
var form = require('justform')
  , fields = form.fields
  , validators = form.validators;

var html = form.create({
    id:"id", name:"myform", method:"GET", action:"/test"
  },{
    username: fields.string({required: true}),
    password: fields.password({required: true}),
    confirm:  fields.password({
        required: true,
        validators: [validators.matchField('password')]
    }),
    email: fields.email()
  }
);

console.log(html);
```

Output:
========
```html
<form  method="GET" name="myform" id="id" action="/test">
<div class="field required">
<label for="id_username">Username</label>
<input type="text" name="username" id="id_username" />
</div>
<div class="field required">
<label for="id_password">Password</label>
<input type="password" name="password" id="id_password" />
</div>
<div class="field required">
<label for="id_confirm">Confirm</label>
<input type="password" name="confirm" id="id_confirm" />
</div>
<div class="field">
<label for="id_email">Email</label>
<input type="text" name="email" id="id_email" />
</div>
</form>
```
