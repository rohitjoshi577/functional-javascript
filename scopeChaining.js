 let a =1;

 function x(){
    

    function y(){
       setTimeout(()=>{ console.log(a)} , 2000 )
       let a=0;
    }

    
    
    y();

    

 
 }



 x();

 a=4;