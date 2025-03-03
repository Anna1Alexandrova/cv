import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container">
      <h1 className="title">Мое резюме</h1>
      <section className="section">
        <h2 className="section-title">Контакты</h2>
        <p className="section-text"><strong>Имя:</strong> Александрова Анна Алексеевна</p>
        <p className="section-text"><strong>Возраст:</strong> 21 год</p>
        <p className="section-text"><strong>Email:</strong> my@gmail.com</p>
        <p className="section-text">
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/Anna1Alexandrova" className="link">github.com/Anna1Alexandrova</a>
        </p>
      </section>
      <section className="section">
        <h2 className="section-title">Опыт работы</h2>
        <p className="section-text">
          <strong>Системный аналитик</strong> (1 год)
        </p>
        <ul className="list">
          <li>Анализ и формализация требований заказчиков.</li>
          <li>Разработка технической документации.</li>
          <li>Участие в проектировании архитектуры систем.</li>
          <li>Взаимодействие с командой разработки и тестирования.</li>
        </ul>
      </section>
      <section className="section">
        <h2 className="section-title">Образование</h2>
        <p className="section-text">Моя школа</p>
        <p className="section-text">
          Поволжский государственный технологический университет, 4 курс, высшее
          неоконченное
        </p>
      </section>
      <section className="section">
        <h2 className="section-title">Навыки</h2>
        <ul className="list">
          <li>Анализ и проектирование бизнес-процессов.</li>
          <li>Работа с требованиями (BPMN, Use Case, User Stories).</li>
          <li>Базовые знания SQL.</li>
          <li>Опыт работы с Jira, Confluence.</li>
          <li>Навыки работы в команде.</li>
        </ul>
      </section>
    </div>
  );
}


// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol>
//           <li>
//             Get started by editing <code>app/page.js</code>.
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className={styles.ctas}>
//           <a
//             className={styles.primary}
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className={styles.logo}
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.secondary}
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className={styles.footer}>
//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
