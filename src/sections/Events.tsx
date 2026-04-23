"use client";
import { motion } from "framer-motion";

export default function Events() {
  return (
    <section id="events" className="p-20 text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold"
      >
        Upcoming Events 🎉
      </motion.h2>
    </section>
  );
}