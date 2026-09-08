import { ScanSearch, PenTool, MessagesSquare, Send } from "lucide-react";
import styles from "./Services.module.css";

const steps = [
  { title: "Discover", text: "We listen, ask questions, and get to know your goals. Together, we shape a clear creative brief.", icon: ScanSearch },
  { title: "Create", text: "We explore a direction and turn the strongest ideas into designs and content with purpose.", icon: PenTool },
  { title: "Refine", text: "You share your feedback. We collaborate on the details until everything feels right.", icon: MessagesSquare },
  { title: "Deliver", text: "Your final assets arrive organised and ready for the platforms and places they belong.", icon: Send },
];
export function ProjectProcess() {
  return (
    <section className={styles.process}><div className="container">
      <div className={styles.sectionHeading}><div><span className={styles.label}>HOW WE WORK</span><h2>Good work starts with<br /><span>a clear process.</span></h2></div><p>No guesswork. Just open conversations, thoughtful decisions, and a shared direction from day one.</p></div>
      <ol className={styles.steps}>{steps.map(({ title, text, icon: Icon }, index) => <li key={title}><div className={styles.stepTop}><Icon size={24} aria-hidden="true" /><span>0{index + 1}</span></div><h3>{title}</h3><p>{text}</p></li>)}</ol>
    </div></section>
  );
}
