---
title: "Minute 3"
date: "2026-09-30"
authors:
  - Mario Santos
sidebar_position: 3
sidebar_custom_props:
  tag: "30 Sep 2026"
  desc: "Initial phase with ATNoG: 5G core deployment, personas, requirements and resources."
---

# Minute 3

| **Data** | **Horário** | **Método** |
|:---------|:------------|:-----------|
| 2026-09-30 | 15:10 – 16:00 | Presencial |

## Participantes

| **Nome** | **Função** |
|:---------|:-----------|
| Paulo Cunha | ATNoG |
| Tiago Barros | ATNoG |
| Francisco Santos | Membro da equipa |
| João Morais | Membro da equipa |
| Mario Santos | Membro da equipa |
| Samuel Ramos | Membro da equipa |

### Supervisor
- Daniel Corujo 

### ATNoG
- Paulo Cunha
- Tiago Barros

### Membros da equipa
- Filipe Nogueira
- Francisco Santos
- João Morais
- Mario Santos
- Samuel Ramos

## Assuntos discutidos
- Trabalho a realizar na fase inicial do projeto.
- Implementação e compreensão de redes 5G com **Open5GS** ou **free5GC**.
- Possíveis personas do sistema e forma de levantar os requisitos.
- Discussão sobre o trabalho do Paulo Cunha numa interface gráfica para a execução de experiências no testbed, com o qual o projeto irá interagir numa fase posterior.
- Arquitetura do sistema e recursos disponíveis para a equipa.

## Principais conclusões
- Nesta fase inicial, a equipa deverá focar-se em implementar e compreender redes 5G, utilizando o Open5GS ou o free5GC.
- Deverá ser utilizada a versão mais recente do core escolhido, mantendo-a fixa durante a construção da primeira base de conhecimento (RAG).
- Foram identificadas três possíveis personas:
  - **Utilizador inexperiente**, que apenas descreve o objetivo (ex.: "quero uma rede 5G de baixa latência").
  - **Utilizador experiente**, que pretende um deployment rápido e com parâmetros concretos (ex.: core Open5GS com 10 UEs e 5 slices).
- Por agora, o único requisito conhecido é a interação através de linguagem natural; os restantes requisitos terão de ser levantados.
- As redes serão instanciadas em máquinas virtuais, e será atribuído à equipa um modelo de linguagem de pequena dimensão, provavelmente com uma GPU dedicada.

## TODO
- Implementar redes 5G com Open5GS ou free5GC
- Definir as personas e levantar os requisitos
- Definir a arquitetura do sistema
