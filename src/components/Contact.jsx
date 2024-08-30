import React, { useState, useEffect } from "react";
import { Send, CheckCircle } from "lucide-react";
import Hero from "./Contact Page/Hero";
import Information from "./Contact Page/Information";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formUrl = new URL(import.meta.env.VITE_FORM_RESPONSE);
    formUrl.searchParams.append("entry.1787592680", email);
    formUrl.searchParams.append("entry.1536698865", message);

    fetch(formUrl.toString(), {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then(() => {
        setIsSubmitted(true);
        setEmail("");
        setMessage("");

        setTimeout(() => setIsSubmitted(false), 3000);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <div>
      <Hero />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md border-gray-400 p-2 shadow-md focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Enter your email here"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md border-gray-400 p-2 shadow-md focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Enter your message here"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  {isSubmitted ? (
                    <div className="flex">
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Sent!
                    </div>
                  ) : (
                    <div className="flex">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </div>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Information />
    </div>
  );
};

export default Contact;
