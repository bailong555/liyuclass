ajax({ 
  type:"POST", 
  url:"ajax.php", 
  dataType:"json", 
  data:{"val1":"abc","val2":123,"val3":"456"}, 
  beforeSend:function(){ 
    //some js code 
  }, 
  success:function(msg){ 
    console.log(msg) 
  }, 
  error:function(){ 
    console.log("error") 
  } 
})