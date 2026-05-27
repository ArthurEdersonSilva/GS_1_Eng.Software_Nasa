
<div align="center">

[![Engenharia de Software](https://img.shields.io/badge/Engenharia%20de%20Software-green?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ArthurEdersonSilva?tab=repositories&q=topic:engenharia-de-software)

**Tecnologias Utilizadas:**

![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361dafb)
![Expo](https://img.shields.io/badge/expo-%23000020.svg?style=for-the-badge&logo=expo&logoColor=white)
![H2 Database](https://img.shields.io/badge/H2%20Database-%234169E1.svg?style=for-the-badge&logo=databricks&logoColor=white)

# 🚀 Global Solution - Sistema de Telemetria e Operações NASA/FIAP
</div>


Este projeto consiste em um ecossistema completo e integrado para o gerenciamento de telemetria, logs de missões espaciais e monitoramento de sensores operacionais. A solução é composta por uma API robusta desenvolvida em **Spring Boot (Java)** e um aplicativo móvel dinâmico construído com **React Native (Expo)**.

---

## 🛠️ Arquitetura do Projeto

O ecossistema é dividido em três camadas principais:
1. **Mobile (React Native + Expo):** Dashboard operacional com consumo assíncrono e isolado de múltiplos endpoints, garantindo que falhas em serviços secundários não interrompam o monitoramento crítico.
2. **Backend (Spring Boot):** API REST responsável pela governança de dados, validações de segurança e exposição dos microsserviços.
3. **Banco de Dados (H2 Database):** Banco relacional local configurado em modo arquivo para persistência segura das telemetrias.

---
## 📷 Demonstração do Sistema (Screenshots)


<table align="center">
  <tr>
    <td align="center" valign="top">
      <img src="screenshots/Tela Login.jpeg" width="65%" alt="Tela Login" />
      <br/><sub><b>Tela Login</b></sub>
    </td>
    <td align="center" valign="top">
      <img src="screenshots/Envio de Relatorio.jpeg" width="65%" alt="Envio de Relatorio" />
      <br/><sub><b>Envio de Relatorio</b></sub>
    </td>
    <td align="center" valign="top">
      <img src="screenshots/Status - Ativo.jpeg" width="65%" alt="Status - Ativo" />
      <br/><sub><b>Status - Ativo</b></sub>
    </td>
    <td align="center" valign="top">
      <img src="screenshots/Status - Concluído.jpeg" width="65%" alt="Status - Concluído" />
      <br/><sub><b>Status - Concluído</b></sub>
    </td>
  </tr>
  <tr>
    <td align="center" valign="top">
      <img src="screenshots/Status - Pendente.jpeg" width="65%" alt="Status - Pendente" />
      <br/><sub><b>Status - Pendente</b></sub>
    </td>
  </tr>
</table>
---

## 🚀 Como Executar o Projeto

### 1. Pré-requisitos
* Java JDK 21 ou superior instalado.
* Node.js (versão LTS) instalado.
* Expo Go instalado no dispositivo móvel (para testes em aparelhos físicos).

### 2. Rodando o Backend (Java)
Navegue até a pasta raiz do backend pelo terminal do VS Code:
```
cd backend/control
```

Execute o comando correspondente para iniciar o servidor Spring Boot
```
./mvnw spring-boot:run
```

### 3. Rodando o Mobile (React Native)
Abra uma nova aba no terminal do VS Code e navegue até a pasta do aplicativo móvel
```
cd mobile
```
```
npx expo start -c
```
---

## 📊 Estrutura de Endpoints Consumidos
O Dashboard realiza chamadas dinâmicas e resilientes aos seguintes controllers do backend:

Eventos e Missões: /api/eventos ou /eventos

Módulos de Sensores: /api/sensores

Alertas Críticos: /api/alertas

## 👥 Desenvolvedores
👨‍💻 Arthur Ederson - Engenharia de Computação (FIAP)

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/arthur-ederson-3a817285)


👨‍💻 Lucas Cima - Engenharia de Computação (FIAP)

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lucas-cima-a5a97920b/)


👨‍💻 Pedro Schulz - Engenharia de Computação (FIAP)

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pedroschulz/)
