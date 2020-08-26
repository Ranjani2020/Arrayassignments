var array = function(a, shallow,r){
    if(!r){ r = []}
     
  if (shallow) {
    return r.concat.apply(r,a);
    }
        
     for(var i=0; i<a.length; i++){
          if(a[i].constructor == Array){
              array(a[i],shallow,r);
          }else{
              r.push(a[i]);
          }
      }
      return r;
  }
  
  console.log(array([[1,2],[3,4],[5,6]]));
 //console.log(array([[1,2],[3,4],[5,6]],true));
  