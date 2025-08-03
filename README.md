# 🐶 PetShop - Desafio Técnico DTI Digital

Este projeto resolve um problema de otimização de custo em petshops da região de Belo Horizonte, determinando a melhor opção de banho para cães pequenos e grandes com base na data informada, levando em conta os preços e distâncias.

## 📌 Descrição

Dado um número de cães pequenos e grandes e uma data específica, o sistema calcula o custo total em três petshops da região:

- **Meu Canino Feliz** – 2 km de distância.
- **Vai Rex** – 1,7 km de distância.
- **ChowChawgas** – 800 m de distância.

Os preços variam de acordo com o dia da semana e o porte dos cães. Em caso de empate no valor total, o critério de desempate é a distância.

---


## ✅ Premissas adotadas

- A data inserida é válida e no formato `dd/MM/yyyy`.
- Não há valores negativos para o número de cães.
- Apenas os três petshops listados são considerados.
- Os preços são fixos conforme enunciado e não há promoções.

---

## 🧠 Decisões de projeto

- Priorização da lógica do cálculo e desempate.
- Separação clara das regras de negócio (preços por petshop e dia da semana).
- Estrutura simples para fácil leitura e manutenção.
- React foi considerado opcional, foco foi no backend.

---

## 📄 Exemplo de entrada e saída

**Entrada:**
```
03/08/2018 3 5
```

**Saída esperada:**
```
ChowChawgas R$285,00
```

---

## 📬 Contato

Desenvolvido por Velber Gonçalves  
[LinkedIn](https://www.linkedin.com/in/velbergoncalves/)
