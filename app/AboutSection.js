"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";

export default function AboutSection() {
  // ✅ default index 0 -> "Tentang Saya" terbuka
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    { title: "Tentang Saya", content: "Saya seorang Lulusan SMKN 8 Jember Jurusan Rekayasa Perangkat Lunak(RPL). Dibekali dengan ilmu pemrograman dengan bahasa pemrograman utama php, dengan framework Laravel. Lulus pada Tahun 2025, dan bergelut di dunia IT selama 3 Tahun" },
    { 
        title: "Bahasa", 
        content: (
        <div className="space-y-4">
            {/* Pemrograman */}
            <div>
            <h4 className="font-semibold mb-2">Pemrograman</h4>
            <div className="space-y-2">
                <div>
                <p className="text-sm">JavaScript </p>
                <div className="w-full bg-gray-200 rounded h-2">
                    <div className="bg-gray-500 h-2 rounded" style={{ width: "90%" }}></div>
                </div>
                </div>
                <div>
                <p className="text-sm">PHP </p>
                <div className="w-full bg-gray-200 rounded h-2">
                    <div className="bg-gray-500 h-2 rounded" style={{ width: "70%" }}></div>
                </div>
                </div>
                <div>
                <p className="text-sm">Python </p>
                <div className="w-full bg-gray-200 rounded h-2">
                    <div className="bg-gray-500 h-2 rounded" style={{ width: "40%" }}></div>
                </div>
                </div>
            </div>
            </div>

            {/* Bahasa */}
            <div>
            <h4 className="font-semibold mb-2">Framework</h4>
            <div className="space-y-2">
                <div>
                <p className="text-sm">Laravel</p>
                <div className="w-full bg-gray-200 rounded h-2">
                    <div className="bg-gray-500 h-2 rounded" style={{ width: "95%" }}></div>
                </div>
                </div>
                <div>
                <p className="text-sm">React.JS</p>
                <div className="w-full bg-gray-200 rounded h-2">
                    <div className="bg-gray-500 h-2 rounded" style={{ width: "70%" }}></div>
                </div>
                </div>
                <div>
                <p className="text-sm">Django</p>
                <div className="w-full bg-gray-200 rounded h-2">
                    <div className="bg-gray-500 h-2 rounded" style={{ width: "50%" }}></div>
                </div>
                </div>
            </div>
            </div>
        </div>
        ) 
    },
    { title: "Pengalaman", content: (
        <div className="space-y-4">
            <div>
                <div className="font-semibold mb-2"><span className="">Magang Kerja di PT. UNIVERSAL BIG DATA</span> (Januari 2024 - Juli 2024)</div>
                <ul>
                    <li>1.Membuat program website manajemen siswa menggunakan (Django, odoo, dll) </li>
                    <li>2.Membuat chatbot untuk perusahaan-perusahaan</li>
                    <li>3.Masuk tim Admin</li>
                    <li>4.Masuk tim Promosi</li>
                </ul>
            </div>
        </div>
    ) },
    { title: "Hobi", content: 
        (
        <div className="space-y-4">
                <p className="text-sm">Saya sangat Kopi dan Musik, ini Top tier kopi dan musik saya</p>
            <div className="mt-[-10px]">
                <h4 className="font-semibold mb-2">Kopi</h4>
                <div className="space-y-2">
                    <div>
                        <p className="text-sm">Arabica </p>
                        <div className="w-full bg-gray-200 rounded h-2">
                            <div className="bg-gray-500 h-2 rounded" style={{ width: "90%" }}></div>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm">Robusta </p>
                        <div className="w-full bg-gray-200 rounded h-2">
                            <div className="bg-gray-500 h-2 rounded" style={{ width: "70%" }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bahasa */}
            <div>
            <h4 className="font-semibold mb-2">Musik</h4>
            <div className="space-y-2">
                <div>
                <p className="text-sm">Pop / Indie Pop</p>
                <div className="w-full bg-gray-200 rounded h-2">
                    <div className="bg-gray-500 h-2 rounded" style={{ width: "95%" }}></div>
                </div>
                </div>
                <div>
                <p className="text-sm">Rock / Alternative</p>
                <div className="w-full bg-gray-200 rounded h-2">
                    <div className="bg-gray-500 h-2 rounded" style={{ width: "70%" }}></div>
                </div>
                </div>
                <div>
                <p className="text-sm">Dream Pop / R&B / Singer-Songwriter</p>
                <div className="w-full bg-gray-200 rounded h-2">
                    <div className="bg-gray-500 h-2 rounded" style={{ width: "56%" }}></div>
                </div>
                </div>
            </div>
            </div>
        </div>
    ) },
  ];

  return (
    <div className="max-w-16xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Kiri: Foto */}
      <div className="flex justify-center md:justify-end">
        <div className="w-96 h-[32rem] md:w-96 md:h-[36rem] bg-gray-300/30 rounded-2xl shadow-md flex items-center justify-center">
            {/* <span className="text-gray-500">Foto / Ilustrasi</span>
             */}
            <Image src="/images/hehe.jpg" alt="Foto Profil" width={300} height={300} />
        </div>
      </div>

      {/* Kanan: Accordion */}
      <div className="space-y-4 md:pl-4 w-[374.69px]">
        {items.map((item, i) => (
          <div
            key={i}
            className="border border-gray-300/30 rounded-xl shadow-sm bg-gray-300/30 overflow-hidden transition-all duration-500 text-gray-200"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium hover:bg-gray-100"
            >
              {item.title}
              {openIndex === i ? (
                <FaChevronUp className="text-sm" />
              ) : (
                <FaChevronDown className="text-sm" />
              )}
            </button>

            <div
              className={`transition-all duration-500 ${
                openIndex === i ? "max-h-[28rem] p-4" : "max-h-0 p-0"
              } overflow-hidden`}
              style={{ minHeight: openIndex === i ? "20rem" : undefined }}
            >
                {typeof item.content === "string" ? (
                    <p className="text-white-700">{item.content}</p>
                ) : (
                    item.content
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
