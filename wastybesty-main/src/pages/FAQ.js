import React, { useEffect } from "react";
import FAQAccordion from "../components/FAQAccordion";

const faqData = [
  { question: "How can I watch videos?", answer: "You can watch all tutorials on the Wasty Besty YouTube channel or through this website." },
  { question: "Can I request a tutorial topic?", answer: "Yes! Use the contact form to suggest topics and Mam will consider creating them." },
  { question: "Are the tutorials free?", answer: "All video tutorials on the channel are completely free to watch." },
  { question: "Can I get certificates?", answer: "Currently, the tutorials are free and do not provide certificates." },
];

export default function FAQ() {
  useEffect(() => { document.title = "Wasty Besty • FAQ"; }, []);
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1>Frequently Asked Questions</h1>
      <FAQAccordion faq={faqData} />
    </div>
  );
}
