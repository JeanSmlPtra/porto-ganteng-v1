"use client";

import Image from "next/image";
import Navigation from "@/components/Navigation";
import HeroTitleWrapper from "@/components/HeroTitleWrapper";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import AboutSection from "./AboutSection";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isContactVisible, setIsContactVisible] = useState(false);


  const projects = [
    {
      imageSrc: "/images/porto-1.jpg",
      title: "Aplikasi E-Commerce",
      desc: (
        <p>
          <span className="font-semibold">BioSigma Sales</span>, Saya
          membangun sistem untuk pembelian produk dan export faktur pembelian ke pdf
        </p>
      ),
    },
    {
      imageSrc: "/images/porto-2.jpg",
      title: "Aplikasi Presensi",
      desc: (
        <p>
          <span className="font-semibold">Absensi SMK</span>. Ini adalah bagian
          project dari UKK ketika saya sekolah. Saya mengerjakan FrontEnd dari
          tampilan role siswa
        </p>
      ),
    },
    {
      imageSrc: "/images/porto-3.jpg",
      title: "Aplikasi Perpustakaan Pintar",
      desc: (
        <p>
          <span className="font-semibold">Sneat Lib</span>, Saya mengerjakan
          landing page dari aplikasi ini, dan juga fitur manajemen buku
        </p>
      ),
    },
  ];

  return (
    <>
      <Navigation className="fixed top-0 left-0 w-full" />
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory bg-[#010001] text-white">
        {/* Hero Section */}
        <section
          id="hero-section"
          className="h-screen snap-start flex flex-col items-center justify-start text-center px-6 pt-28"
        >
          {/* Ikon Sosial Media */}
          <div className="fixed top-9 left-9 flex gap-4 text-2xl z-50">
            <a
              href="https://instagram.com/jeannstern"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition flex flex-row text-sm gap-2"
            >
              <FaInstagram style={{ marginTop: "5px" }} /> @jeannstern
            </a>
            <a
              href="https://tiktok.com/@lettj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition flex flex-row text-sm gap-2"
            >
              <FaTiktok style={{ marginTop: "5px" }} /> <span>@lettj</span>
            </a>
          </div>

          {/* Paragraf (hidden di mobile) */}
          <div className="relative max-w-xl mb-5 text-left self-end mt-12 ml-12 hidden md:block">
            <p
              style={{
                transform: "perspective(1000px) rotateX(6deg) rotateY(-8deg)",
              }}
              className="relative z-10 text-lg border border-blue-500/50 rounded-lg bg-white/10 backdrop-blur-md p-4 shadow-[0_0_15px_rgba(236,72,153,0.7),0_0_30px_rgba(236,72,153,0.4)]"
            >
              Saya seorang fresh graduate yang sangat suka lemper, dan
              mengabdikan dirinya untuk makan lemper yang banyak. Ayo cari tahu
              lebih banyak tentang aku di website ini
            </p>

            <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[80%] h-[40px] bg-pink-500/40 blur-2xl rounded-full"></div>
          </div>

          {/* HeroTitle + Button (selalu center) */}
          <div className="flex flex-col items-center gap-6 mt-12">
            <span className="text-xl">I&apos;m</span>
            <HeroTitleWrapper />

            {/* Tombol */}
            <a
              href="#projects"
              className="px-6 py-3 my-20 bg-gray-600/30 text-white rounded-lg shadow transition"
            >
              Check Me Up
            </a>
          </div>
        </section>


        {/* About Section */}
        <section
          id="about"
          className="min-h-screen snap-start flex items-center justify-center px-6 bg-[#010001] text-black"
        >
          <AboutSection />
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen snap-start flex flex-col justify-center px-6 bg-[#010001]"
        >
          <div className="max-w-6xl mx-auto ">
            <h2 className="text-3xl font-bold text-center mb-12">
              Project Saya
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="bg-gray-300/70 p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="h-40 bg-gray-300/30 rounded mb-4 flex justify-center items-center overflow-hidden">
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="rounded object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-black">
                    {project.title}
                  </h3>
                  <div className="text-gray-600">{project.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white p-6 rounded-2xl shadow-lg max-w-2xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Tombol Close */}
              <button
                className="absolute top-3 right-3 text-black hover:text-red-500"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>

              <Image
                src={selectedProject.imageSrc}
                alt={selectedProject.title}
                width={600}
                height={400}
                className="rounded mb-4 object-cover w-full"
              />
              <h3 className="text-2xl font-bold mb-2 text-black">
                {selectedProject.title}
              </h3>
              <div className="text-gray-700">{selectedProject.desc}</div>
            </div>
          </div>
        )}

{/* Contact Section */}
<section
  id="contact"
  className="relative h-screen snap-start flex flex-col justify-center px-6 text-gray-200"
>
  {/* Background Image */}
  <Image
    src="/images/bg-contact.jpg"
    alt="Contact Background"
    fill
    className="object-cover"
    priority
  />

  {/* Overlay Gradient */}
  <div className="absolute inset-0">
    {/* gradasi kiri ke tengah */}
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
    {/* gradasi atas ke tengah */}
    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent"></div>
  </div>

  {/* Konten */}
  <div className="relative z-10 max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-8">Ayo Terhubung</h2>
    <p className="mb-12 text-lg">
      Jangan ragu untuk menghubungi saya melalui platform berikut.
    </p>

    {/* Kontak Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
      {/* WhatsApp */}
      <a
        href="https://wa.me/6285806572405"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow hover:shadow-lg hover:scale-105 transition"
      >
        <FaWhatsapp className="text-green-400 text-4xl mb-3" />
        <span className="font-semibold">WhatsApp</span>
        <p className="text-sm text-gray-300">+62 858 0657 2405</p>
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/jeannstern"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow hover:shadow-lg hover:scale-105 transition"
      >
        <FaInstagram className="text-pink-500 text-4xl mb-3" />
        <span className="font-semibold">Instagram</span>
        <p className="text-sm text-gray-300">@jeannstern</p>
      </a>

      {/* TikTok */}
      <a
        href="https://tiktok.com/@lettj"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow hover:shadow-lg hover:scale-105 transition"
      >
        <FaTiktok className="text-white text-4xl mb-3" />
        <span className="font-semibold">TikTok</span>
        <p className="text-sm text-gray-300">@lettj</p>
      </a>

      {/* Email */}
      <a
        href="mailto:jeanputra61@gmail.com"
        className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow hover:shadow-lg hover:scale-105 transition"
      >
        <span className="text-4xl mb-3">📧</span>
        <span className="font-semibold">Email</span>
        <p className="text-sm text-gray-300">jeanputra61@gmail.com</p>
      </a>
    </div>
  </div>
</section>




        {/* Footer */}
        <footer className="py-6 text-center bg-gray-900 text-white snap-start">
          <p>© {new Date().getFullYear()} Jean Samuel. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
