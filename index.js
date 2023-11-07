function suma (a,b,callback){
    let c = a +b;
    callback()
}

function Callback() {
    console.log("La suma se ha calculado.");
  }
  
  suma(2, 3, Callback);