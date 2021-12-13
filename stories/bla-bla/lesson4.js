function bigFunction() {
    return small1(small2());  
    
    function small1(){
      //this можно 
    }
    
    function small2(){
      //this можно 
    }  
    // const small1 = ()=>{
    //  this нельзя
    // };
    // const small2 = ()=>{
    //  this нельзя
    // };
    //return small1(small2());  
  }