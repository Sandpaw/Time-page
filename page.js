const express = require('express');
const app = express();
const port = 7000;

//app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.send('<script>var r=new Date().valueOf() + ( ' + (new Date().getTimezoneOffset()) +
    ' - (new Date().getTimezoneOffset()) ) * -60000;' +
    'setInterval(()=>{document.body.innerHTML = ("Hello World! It is currently: " + (new Date(r+=1000)).toLocaleString("en",{weekday:"long", month:"long", day:"numeric", year:"numeric", hour:"numeric", minute:"numeric", second:"numeric", hour12:true}))},1000);' +
    '</script>');
});
const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });
