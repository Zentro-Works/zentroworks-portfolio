import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "SERVICE_ID",
      "TEMPLATE_ID",
      form.current,
      "PUBLIC_KEY"
    ).then(
      () => alert("Message Sent Successfully!"),
      () => alert("Failed to send message")
    );
  };

  return (
    <section className="px-6 md:px-12 py-16 bg-white">

      <form ref={form} onSubmit={sendEmail} className="space-y-4">

        <input name="user_name" className="w-full border p-2 rounded" placeholder="Your Name" />
        <input name="user_email" className="w-full border p-2 rounded" placeholder="Email" />
        <textarea name="message" className="w-full border p-2 rounded" placeholder="Message"></textarea>

        <button className="bg-indigo-600 text-white px-6 py-2 rounded">
          Send Message
        </button>

      </form>

    </section>
  );
};

export default Contact;