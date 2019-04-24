
function template(title){
 
  let page = '<!DOCTYPE html>'+
  '              <html lang="en">'+
  '              <head>'+
  '                <meta charset="utf-8">'+
  '                <title> Purple Drone | WMS </title>'+
  '                <link rel="shortcut icon" href="icon.png">'+
  '                <meta name="description" content="" />'+
  '                <meta name="keywords" content="" />'+
  '                <meta name="theme-color" content="#8000ff">'+
  '               <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">'+
  '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>'+
  '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>'+
                   '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">'+
  '              </head>'+
  '              <body>'+
  '              <div id="root" /><script src="bundle.js" type="text/javascript"></script>'+
  
  '              </body>'+
  '              </html>';

  return page;
}

module.exports = template;
