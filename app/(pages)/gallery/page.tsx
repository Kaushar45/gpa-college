"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const photos = [
  {
    src: "https://www.gpaurai.ac.in/_next/image?url=%2Fassets%2FcollageEvents%2F3.webp&w=1920&q=75",
    span: "row-span-2",
  },
  {
    src: "https://www.gpaurai.ac.in/_next/image?url=%2Fassets%2FcollageEvents%2F5.webp&w=1920&q=75",
    span: "row-span-2",
  },
  {
    src: "https://www.gpaurai.ac.in/_next/image?url=%2Fassets%2FcollageEvents%2F6.webp&w=1920&q=75",
    span: "row-span-3",
  },
  {
    src: "https://www.gpaurai.ac.in/_next/image?url=%2Fassets%2FcollageEvents%2F10.webp&w=1920&q=75",
    span: "row-span-2",
  },
  {
    src: "https://www.gpaurai.ac.in/_next/image?url=%2Fassets%2FcollageEvents%2F13.webp&w=1920&q=75",
    span: "row-span-3",
  },
  {
    src: "https://www.gpaurai.ac.in/_next/image?url=%2Fassets%2FcollageEvents%2F14.webp&w=1920&q=75",
    span: "row-span-2",
  },
  {
    src: "https://www.gpaurai.ac.in/_next/image?url=%2Fassets%2FcollageEvents%2F16.webp&w=1920&q=75",
    span: "row-span-2",
  },
  {
    src: "https://www.gpaurai.ac.in/_next/image?url=%2Fassets%2FcollageEvents%2F21.webp&w=1920&q=75",
    span: "row-span-3",
  },
  {
    src: "https://www.gpaurai.ac.in/_next/image?url=%2Fassets%2FcollageEvents%2F23.webp&w=1920&q=75",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    span: "row-span-3",
  },
  {
    src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    span: "row-span-2",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="bg-slate-50 py-20 px-6">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-slate-800"
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
        transition={{ duration: 0.6 }}
      >
        Campus Life & Learning 🎓
      </motion.h2>

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[180px] gap-6"
      >
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className={`relative overflow-hidden rounded-2xl shadow-lg cursor-pointer ${photo.span}`}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 60,
              scale: isInView ? 1 : 0.95,
            }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
          >
            <img
              src={photo.src}
              alt="College life"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
              <span className="text-white text-sm p-4 font-medium">
                View Photo
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={photos.map((p) => ({ src: p.src }))}
        plugins={[Zoom]}
      />
    </section>
  );
}
