import emailjs from "@emailjs/browser";
import { useState } from "react";



const Contact = () => {
  //submit handler

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if (!name || !email || !message) {
      alert("All fields are required!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email format!");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Message Sent Successfully ✅");
      form.reset();
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Failed to send the message. Please try again ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="min-h-screen px-6 relative  lg:h-screen flex flex-col justify-between">

      
      <div className="max-w-4xl mx-auto my-9 text-center ">
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-stone-300 to-stone-700 bg-clip-text text-transparent mb-6">
          Let's Connect
          </h1>
          <p className="text-lg text-gray-400 mb-12">
            Whether it's a question, a collaboration idea, or just a friendly hello — I'm all ears. Drop your message below and let's start a conversation!
          </p>
        </div>
        <div>
                  <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-5 py-3 rounded-lg bg-neutral-900 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-stone-500"
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            className="w-full px-5 py-3 rounded-lg bg-neutral-900 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-stone-500"
          />
          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            className="w-full px-5 py-3 rounded-lg bg-neutral-900 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-stone-500"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-stone-300 to-stone-700 text-black font-semibold py-3 px-8 rounded-md hover:from-stone-700 hover:to-stone-600 transition"
            
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        </div>
      </div>

      <footer className="bg-neutral-950 text-gray-400 px-6 mt-5 border-t border-neutral-800">
        <div className="flex justify-center items-center">
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} Ayush Sharma. Crafted with ❤️
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Contact
