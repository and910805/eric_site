import { useState, type ChangeEvent, type FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) => /[^@\s]+@[^@\s]+\.[^@\s]+/.test(email);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !validateEmail(form.email) || !form.message) {
      setStatus("error");
      return;
    }
    try {
      setStatus("loading");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact</h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-slate-900/60 backdrop-blur-md p-6 rounded-xl shadow-lg"
        >
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 rounded text-black"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 rounded text-black"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-2 rounded text-black"
              rows={5}
              required
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "Send"}
          </button>
        </form>
        {status === "success" && (
          <p className="text-green-400 mt-4 text-center">
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-500 mt-4 text-center">
            Something went wrong. Please check your inputs and try again.
          </p>
        )}
      </div>
    </div>
  );
}

