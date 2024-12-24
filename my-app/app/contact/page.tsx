"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { supabase } from "../../supabaseClient";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // To hold success/error message
  const [statusType, setStatusType] = useState(""); // To hold the type (success/error)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { error } = await supabase
        .from("contact_messages")
        .insert([{ name, email, message }]); // Insert the form data into the table
    
      if (error) {
        console.error("Supabase error:", error);
        setStatus("Failed to send your message. Please try again later.");
        setStatusType("error"); // Error message
      } else {
        setStatus("Thank you for your message. I'll get back to you soon!");
        setStatusType("success"); // Success message
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error("Failed to submit contact form:", error);
      setStatus("An unexpected error occurred. Please try again later.");
      setStatusType("error"); // Error message
    }
    

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h1>
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <Button type="submit">Send Message</Button>
      </motion.form>

      {/* Status Message */}
      {status && (
        <div
          className={`mt-4 text-center text-lg font-medium ${
            statusType === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {status}
        </div>
      )}
    </div>
  );
};

export default ContactPage;
