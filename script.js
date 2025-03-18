var equacao = "";

function numero(num){
    equacao = equacao + num;
    document.getElementById("visor-anterior").value = equacao;
}

function operacao(op){
   //impede a entrada de operadores duplicados
   if(equacao.length>0 && !/[+\-*/]$/.test(equacao)){
      equacao = equacao + op;
      document.getElementById("visor-anterior").value = equacao;
   }
}

function calcula(){
   var soma = document.getElementById("visor-anterior").value;
   var resultado = eval(soma);
   document.getElementById("visor-baixo--calculo").value = resultado;
}

function limpar(){
    equacao = "";
    document.getElementById("visor-anterior").value = "";
    document.getElementById("visor-baixo--calculo").value = "";
}

function limparUltimo(){
   if (equacao.length > 0) {
       equacao = equacao.slice(0, -1);
       document.getElementById("visor-anterior").value = equacao;
   }
}

function calcular(){
   try {
      let resultado = new Function('return ' + equacao)();
      document.getElementById("visor-baixo--calculo").value = resultado;
   } catch (error) {
      document.getElementById("visor-baixo--calculo").value = "error";
   }
}

function adicionarPonto() {
   if (!equacao.includes('.')) {
       equacao += '.';
       document.getElementById("visor-anterior").value = equacao;
   }
}

// a unica parte que não ficou funcional foi a da % que não consegui implementar, mas estou satisfeta com o resultado final, poderia ter tido um resultado melhor se soubesse mais sobre o javascript