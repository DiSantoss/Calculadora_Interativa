


function calcular1() {
    var nbill = document.getElementById("nbill").value;
  
    var porcent1 = document.getElementById("num1").value;
    var porcent2 = document.getElementById("num2").value;
    var porcent3 = document.getElementById("num3").value;
    var porcent4 = document.getElementById("num4").value;
    var porcent5 = document.getElementById("num5").value;
    var people = document.getElementById("np").value;
    var tipamount1 = document.getElementById("n-amount1");
    var tipamount2 = document.getElementById("n-amount2");
    
    var tipamount3 = document.getElementById("n-amount3");
  
    var resultado2 = (parseFloat(nbill) + (parseFloat(nbill) * parseFloat(porcent1))) / parseFloat(people) ;
    var resultado1 =  parseFloat(porcent1) * parseFloat(nbill)
    var resultado3 = (parseFloat(nbill) + (parseFloat(nbill) * parseFloat(porcent1)))
  
    tipamount2.innerHTML = `$` + resultado2.toFixed(2);
    tipamount1.innerHTML = `$` + resultado1.toFixed(2);
    
    tipamount3.innerHTML = `$` + resultado3.toFixed(2);

} 

  function calcular2() {
    var nbill = document.getElementById("nbill").value;
  
    var porcent1 = document.getElementById("num1").value;
    var porcent2 = document.getElementById("num2").value;
    var porcent3 = document.getElementById("num3").value;
    var porcent4 = document.getElementById("num4").value;
    var porcent5 = document.getElementById("num5").value;
    var people = document.getElementById("np").value;
    var tipamount1 = document.getElementById("n-amount1");
    var tipamount2 = document.getElementById("n-amount2");
    
    var tipamount3 = document.getElementById("n-amount3");
  
    var resultado2 = (parseFloat(nbill) + (parseFloat(nbill) * parseFloat(porcent2))) / parseFloat(people) ;
    var resultado1 =  parseFloat(porcent2) * parseFloat(nbill)
    var resultado3 = (parseFloat(nbill) + (parseFloat(nbill) * parseFloat(porcent2)))
  
    tipamount2.innerHTML = `$` + resultado2.toFixed(2);
    tipamount1.innerHTML = `$` + resultado1.toFixed(2);
    
    tipamount3.innerHTML = `$` + resultado3.toFixed(2);
  }

  function calcular3() {
    var nbill = document.getElementById("nbill").value;
  
    var porcent1 = document.getElementById("num1").value;
    var porcent2 = document.getElementById("num2").value;
    var porcent3 = document.getElementById("num3").value;
    var porcent4 = document.getElementById("num4").value;
    var porcent5 = document.getElementById("num5").value;
    var people = document.getElementById("np").value;
    var tipamount1 = document.getElementById("n-amount1");
    var tipamount2 = document.getElementById("n-amount2");
    
    var tipamount3 = document.getElementById("n-amount3");
  
    var resultado2 = (parseFloat(nbill) + (parseFloat(nbill) * parseFloat(porcent3))) / parseFloat(people) ;
    var resultado1 =  parseFloat(porcent3) * parseFloat(nbill)
    var resultado3 = (parseFloat(nbill) + (parseFloat(nbill) * parseFloat(porcent3)))
  
    tipamount2.innerHTML = `$` + resultado2.toFixed(2);
    tipamount1.innerHTML = `$` + resultado1.toFixed(2);
    
    tipamount3.innerHTML = `$` + resultado3.toFixed(2);
  }

  function calcular4() {
    var nbill = document.getElementById("nbill").value;
  
    var porcent1 = document.getElementById("num1").value;
    var porcent2 = document.getElementById("num2").value;
    var porcent3 = document.getElementById("num3").value;
    var porcent4 = document.getElementById("num4").value;
    var porcent5 = document.getElementById("num5").value;
    var people = document.getElementById("np").value;
    var tipamount1 = document.getElementById("n-amount1");
    var tipamount2 = document.getElementById("n-amount2");
    
    var tipamount3 = document.getElementById("n-amount3");
  
    var resultado2 = (parseFloat(nbill) + (parseFloat(nbill) * parseFloat(porcent4))) / parseFloat(people) ;
    var resultado1 =  parseFloat(porcent4) * parseFloat(nbill)
    var resultado3 = (parseFloat(nbill) + (parseFloat(nbill) * parseFloat(porcent4)))
  
    tipamount2.innerHTML = `$` + resultado2.toFixed(2);
    tipamount1.innerHTML = `$` + resultado1.toFixed(2);
    
    tipamount3.innerHTML = `$` + resultado3.toFixed(2);

  }  //  / parseFloat(people)

  function calcular5() {
    var nbill = document.getElementById("nbill").value;
  
    var porcent1 = document.getElementById("num1").value;
    var porcent2 = document.getElementById("num2").value;
    var porcent3 = document.getElementById("num3").value;
    var porcent4 = document.getElementById("num4").value;
    var porcent5 = document.getElementById("num5").value;
    var people = document.getElementById("np").value;
    var tipamount1 = document.getElementById("n-amount1");
    var tipamount2 = document.getElementById("n-amount2");
    
    var tipamount3 = document.getElementById("n-amount3");
  
    var resultado2 = (parseFloat(nbill) + (parseFloat(nbill) * parseFloat(porcent5))) / parseFloat(people) ;
    var resultado1 =  parseFloat(porcent5) * parseFloat(nbill)
    var resultado3 = (parseFloat(nbill) + (parseFloat(nbill) * parseFloat(porcent5)))
  
    tipamount2.innerHTML = `$` + resultado2.toFixed(2);
    tipamount1.innerHTML = `$` + resultado1.toFixed(2);
    
    tipamount3.innerHTML = `$` + resultado3.toFixed(2);
    
    
  

  }


  function reset () {

    location.reload();

  }

  