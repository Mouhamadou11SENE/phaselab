function foo1(){
var c1=document.getElementById('c1');
 c1.onclick=function foo(){
    document.getElementById('n1').value= this.innerHTML=document.getElementById('n3').value+' Mde/Mrs vous avez choisir "Sushi et sashimi et boir QUELLES CHOSE et de payer avec  ' + document.getElementById('modePay').value;
    document.getElementById('n2').value=this.innerHTML =' le montant s eleve a :2500'
      this.innerHTML='BRAVooooo!'
 };
};
function foo2(){
    var c1=document.getElementById('c2');
     c1.onclick=function foo(){
        document.getElementById('n1').value=document.getElementById('n3').value+' Mde/Mrs vous avez choisir : riz au poisson et de payer avec  ' + document.getElementById('modePay').value;
        document.getElementById('n2').value =' le montant s eleve a :2000';
        this.innerHTML='bingooooo!'
    
     };
    };
    function foo3(){
        var c3=document.getElementById('c3');
         c3.onclick=function foo(){
            document.getElementById('n1').value=document.getElementById('n3').value+' Mde/Mrs vous avez choisir :plat poulet et de payer avec ' + document.getElementById('modePay').value;
            document.getElementById('n2').value =' le montant s eleve a :1500';
      this.innerHTML='YOUPIIIIII!'
        
         };
        };
        function foo4(){
         var c4=document.getElementById('c4');
          c4.onclick=function foo(){
             document.getElementById('n1').value=document.getElementById('n3').value+' Mde/Mrs vous avez choisir :Tarte Tatin et pour boir coca cola  et de payer avec ' + document.getElementById('modePay').value;
             document.getElementById('n2').value =' le montant s eleve a :1700';
             this.innerHTML='WELLIIII!'
         
          };
         };
         function foo5(){
            var c5=document.getElementById('c5');
             c5.onclick=function foo(){
                document.getElementById('n1').value=document.getElementById('n3').value+' Mde/Mrs vous avez choisir :Filet de bœuf et de payer avec '+ document.getElementById('modePay').value;
                document.getElementById('n2').value =' le montant s eleve a :1400';
                this.innerHTML='GENIALLLL!'
            
     };
 };  
            function foo6(){
               var c6=document.getElementById('c6');
                c6.onclick=function foo(){
                   document.getElementById('n1').value=document.getElementById('n3').value+' Mde/Mrs vous avez choisir :riz au poisson + jus de fruit  et de payer avec '+ document.getElementById('modePay').value;
                   document.getElementById('n2').value =' le montant s eleve a :1600';
                   this.innerHTML='SUPERRRR!'
               
                };
               }; 
               function foo7(){
                  var c7=document.getElementById('c7');
                   c7.onclick=function foo(){
                      document.getElementById('n1').value=document.getElementById('n3').value+' Mde/Mrs vous avez choisir :hamburger et de payer avec '+ document.getElementById('modePay').value;
                      document.getElementById('n2').value =' le montant s eleve a :1200';
                      this.innerHTML='SUPERRRR!'
                  
                   };
                  };   
                  function foo8(){
                     var c8=document.getElementById('c8');
                      c8.onclick=function foo(){
                         document.getElementById('n1').value=document.getElementById('n3').value+' Mde/Mrs vous avez choisir :PIZZA et de payer avec '+ document.getElementById('modePay').value;
                         document.getElementById('n2').value =' le montant s eleve a :3700';
                         this.innerHTML='SUPERRRR!'
                     
                      };
                     };         
                     function foo9(){
                        var c9=document.getElementById('c9');
                         c9.onclick=function foo(){
                            document.getElementById('n1').value=document.getElementById('n3').value+' Mde/Mrs vous avez choisir :YASSA et de payer avec '+ document.getElementById('modePay').value;
                            document.getElementById('n2').value =' le montant s eleve a :3700';
                            this.innerHTML='SUPERRRR!'
                        
                         };
                        };   
                        function foo10(){
                           var c10=document.getElementById('c10');
                            c10.onclick=function foo(){
                               document.getElementById('n1').value=document.getElementById('n3').value+' Mde/Mrs vous avez choisir :TARTE TARTINER et de payer avec '+ document.getElementById('modePay').value;
                               document.getElementById('n2').value =' le montant s eleve a :2200';
                               this.innerHTML='SUPERRRR!'
                           
                            };
                           };                      


    function reset(){
var rstt=document.getElementById('rst')
rstt.onclick=function suppr() {
   document.getElementById('n1').value= " ";
   document.getElementById('n2').value= ' '
};
}