# Feedwiget - Web + Server

This project was developed during the Next Level Week’Return powered by Rocketseat.
Along the event, it was possible to use React with Tailwind and the interesting part was be able to develop the backend too.
- [Web repo](https://github.com/miguelCassimiro99/nlw-return-web)
- [Server repo](https://github.com/miguelCassimiro99/nlw-return-server)

How does it works 🔍

- The process is very simple but with a lot of awesome features: you can create a feedback about something on the page or system.
- A button on bottom of the page open a popover that includes three types of feedbacks: bugs, ideas, others. After choose one, you can describe a message, attach a print of screen and send it.
- The print feature was developed on the front too, so its cool because you don’t need to open other programs or quit of the page.
- On backend side, the message will be received and treated and trigger an e-mail to the system’s providers alerting him about a new feedback.
- These e-mail includes the type, message and the print too.
- On the server, beyond the Node, Prisma and testing with jest, we used the DDD (Domain Driven Development) and concepts of Clean Architecture.
- To trigger the e-mail, it was used Mail trap.

**Web**

🌐 [React](https://pt-br.reactjs.org/)

🌐 [Tailwind](https://tailwindcss.com/)

🌐 [Headless UI](https://headlessui.com/)

🌐 [Vite](https://vitejs.dev/)

🌐 [Typescript](https://www.typescriptlang.org/)

**Server**

🌐 [Node](https://nodejs.org/en/)

🌐 [Prisma](https://www.prisma.io/)

🌐 [Jest](https://jestjs.io/pt-BR/)

---

## Setup 🏗️

```bash
npm install
```

```bash
npm run dev
```

## Features 📜

- [x]  Front Widget
- [x]  Printscreen
- [x]  Communication with API
- [x]  DDD
- [x]  Unit Tests
- [x]  Sending e-mail with MailTrap
- [x]  Prisma ORM
- [x]  Postgres DB
