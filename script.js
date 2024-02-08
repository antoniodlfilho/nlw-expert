const perguntas = [
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const"
      ],
      correta: 1 // A resposta correta é a opção 2, "let"
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "pop()",
        "concat()"
      ],
      correta: 0 // A resposta correta é a opção 1, "push()"
    },
    {
      pergunta: "O que o método 'parseInt()' faz em JavaScript?",
      respostas: [
        "Converte uma string em um número inteiro",
        "Converte um número em uma string",
        "Arredonda um número para o inteiro mais próximo"
      ],
      correta: 0 // A resposta correta é a opção 1, "Converte uma string em um número inteiro"
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "!="
      ],
      correta: 1 // A resposta correta é a opção 2, "==="
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
      respostas: [
        "alert()",
        "log()",
        "print()"
      ],
      correta: 1 // A resposta correta é a opção 2, "log()"
    },
    {
      pergunta: "O que o operador '&&' faz em JavaScript?",
      respostas: [
        "Operador de adição",
        "Operador de subtração",
        "Operador lógico 'E'"
      ],
      correta: 2 // A resposta correta é a opção 3, "Operador lógico 'E'"
    },
    {
      pergunta: "O que o método 'charAt()' faz em JavaScript?",
      respostas: [
        "Retorna o caractere em uma posição específica de uma string",
        "Converte uma string em maiúsculas",
        "Concatena duas strings"
      ],
      correta: 0 // A resposta correta é a opção 1, "Retorna o caractere em uma posição específica de uma string"
    },
    {
      pergunta: "Qual é o resultado da expressão '3 + 2 + '5' em JavaScript?",
      respostas: [
        "10",
        "7",
        "325"
      ],
      correta: 2 // A resposta correta é a opção 3, "325"
    },
    {
      pergunta: "Qual é a função do método 'toFixed()' em JavaScript?",
      respostas: [
        "Arredonda um número para um número especificado de casas decimais",
        "Converte um número em uma string",
        "Retorna o menor número em uma lista"
      ],
      correta: 0 // A resposta correta é a opção 1, "Arredonda um número para um número especificado de casas decimais"
    },
    {
      pergunta: "Qual é o resultado da expressão '5 == '5' em JavaScript?",
      respostas: [
        "true",
        "false",
        "undefined"
      ],
      correta: 0 // A resposta correta é a opção 1, "true"
    }
  ];
  const quiz = document.querySelector('#quiz')  
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  // loop ou loço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt =  quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta // true
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    } 
  
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  
  