

// import { Link } from "react-router-dom";
// import { useEffect, useRef } from "react";
// import SearchBar from "../components/SearchBar";

// const specializations = [
//     { name: "মেডিসিন", icon: "💊", bg: "linear-gradient(135deg, #e8f5e9, #c8e6c9)", accent: "#2e7d32", count: "১২০+" },
//     { name: "শিশু রোগ", icon: "👶", bg: "linear-gradient(135deg, #e3f2fd, #bbdefb)", accent: "#1565c0", count: "৮৫+" },
//     { name: "গাইনি", icon: "🌸", bg: "linear-gradient(135deg, #fce4ec, #f8bbd0)", accent: "#ad1457", count: "৭৪+" },
//     { name: "অর্থোপেডিক", icon: "🦴", bg: "linear-gradient(135deg, #fff8e1, #ffe082)", accent: "#f57f17", count: "৫২+" },
//     { name: "চর্মরোগ", icon: "🩹", bg: "linear-gradient(135deg, #f3e5f5, #e1bee7)", accent: "#6a1b9a", count: "৪৮+" },
//     { name: "চক্ষু", icon: "👁️", bg: "linear-gradient(135deg, #e0f7fa, #b2ebf2)", accent: "#00695c", count: "৩৯+" },
//     { name: "দন্ত রোগ", icon: "🦷", bg: "linear-gradient(135deg, #e8eaf6, #c5cae9)", accent: "#283593", count: "৬১+" },
//     { name: "মানসিক রোগ", icon: "🧠", bg: "linear-gradient(135deg, #e8f5e9, #a5d6a7)", accent: "#1b5e20", count: "৩৩+" },
// ];

// const stats = [
//     { value: "৫০০+", label: "বিশেষজ্ঞ ডাক্তার" },
//     { value: "৬৪", label: "জেলায় সেবা" },
//     { value: "১০ লাখ+", label: "রোগী সেবা পেয়েছেন" },
// ];

// const features = [
//     { icon: "⚡", title: "তাৎক্ষণিক বুকিং", desc: "মাত্র ৩০ সেকেন্ডে অ্যাপয়েন্টমেন্ট নিন, কোনো অপেক্ষা নেই", color: "#2e7d32", bg: "#eef9f2" },
//     { icon: "✅", title: "যাচাইকৃত ডাক্তার", desc: "সকল ডাক্তার BMDC রেজিস্ট্রেশন যাচাইকৃত", color: "#1565c0", bg: "#e3f2fd" },
//     { icon: "💬", title: "অনলাইন পরামর্শ", desc: "ঘরে বসেই ভিডিও কলে ডাক্তারের সাথে কথা বলুন", color: "#ad1457", bg: "#fce4ec" },
//     { icon: "🔒", title: "সম্পূর্ণ নিরাপদ", desc: "আপনার তথ্য সম্পূর্ণ সুরক্ষিত এবং গোপনীয়", color: "#f57f17", bg: "#fff8e1" },
//     { icon: "🌍", title: "সারাদেশে সেবা", desc: "বাংলাদেশের ৬৪ জেলায় আমাদের ডাক্তার নেটওয়ার্ক", color: "#6a1b9a", bg: "#f3e5f5" },
//     { icon: "⭐", title: "রেটিং ও রিভিউ", desc: "হাজারো রোগীর রিভিউ দেখে সেরা ডাক্তার বেছে নিন", color: "#00695c", bg: "#e0f7fa" },
// ];

// const testimonials = [
//     { name: "রাহেলা বেগম", city: "ঢাকা", avatar: "র", color: "#2e7d32", bg: "#eef9f2", rating: 5, text: "মাত্র কয়েক মিনিটে অ্যাপয়েন্টমেন্ট নিলাম। ডাক্তার অনেক মনোযোগ দিয়ে শুনলেন, সত্যিই দারুণ অভিজ্ঞতা।" },
//     { name: "মো. করিম উদ্দিন", city: "চট্টগ্রাম", avatar: "ক", color: "#1565c0", bg: "#e3f2fd", rating: 5, text: "অনলাইনে পরামর্শ নেওয়া এত সহজ হবে ভাবিনি। সিলেট থেকে ঢাকার বিশেষজ্ঞ ডাক্তারের সাথে কথা বললাম।" },
//     { name: "সুমাইয়া আক্তার", city: "সিলেট", avatar: "স", color: "#ad1457", bg: "#fce4ec", rating: 5, text: "BMDC যাচাইকৃত দেখে ভরসা পেলাম। বাচ্চার জন্য শিশু বিশেষজ্ঞ খুব দ্রুত পেলাম।" },
//     { name: "আব্দুর রহমান", city: "রাজশাহী", avatar: "আ", color: "#f57f17", bg: "#fff8e1", rating: 5, text: "গ্রামে থেকেও শহরের ভালো ডাক্তার পাচ্ছি — এটাই সবচেয়ে বড় সুবিধা এই প্ল্যাটফর্মের।" },
//     { name: "নাসরিন সুলতানা", city: "খুলনা", avatar: "ন", color: "#6a1b9a", bg: "#f3e5f5", rating: 5, text: "রিভিউ দেখে ডাক্তার বেছে নেওয়া খুব সহজ হয়েছে। পরিষেবাটি সত্যিই বিশ্বস্ত।" },
//     { name: "তানভীর হোসেন", city: "বরিশাল", avatar: "ত", color: "#00695c", bg: "#e0f7fa", rating: 5, text: "হেল্পলাইনে কল করলাম, সাথে সাথে সাহায্য পেলাম। রাত ১১টায়ও সেবা পেলাম।" },
// ];

// const featuredDoctors = [
//     { name: "ডা. আহমেদ হোসেন", spec: "মেডিসিন বিশেষজ্ঞ", exp: "১৫ বছর", rating: "৪.৯", patients: "২,৪০০+", avatar: "আ", color: "#2e7d32", bg: "#eef9f2", accent: "#eef9f2" },
//     { name: "ডা. সালমা খানম", spec: "শিশু রোগ বিশেষজ্ঞ", exp: "১২ বছর", rating: "৪.৮", patients: "১,৮০০+", avatar: "স", color: "#1565c0", bg: "#e3f2fd", accent: "#e3f2fd" },
//     { name: "ডা. ফারহান করিম", spec: "হৃদরোগ বিশেষজ্ঞ", exp: "২০ বছর", rating: "৪.৯", patients: "৩,১০০+", avatar: "ফ", color: "#ad1457", bg: "#fce4ec", accent: "#fce4ec" },
//     { name: "ডা. নুসরাত জাহান", spec: "গাইনি বিশেষজ্ঞ", exp: "১০ বছর", rating: "৪.৭", patients: "১,৫০০+", avatar: "ন", color: "#f57f17", bg: "#fff8e1", accent: "#fff8e1" },
// ];

// // ── Feature Cards ──
// function FeatureCards() {
//     const cardsRef = useRef([]);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         entry.target.style.opacity = "1";
//                         entry.target.style.transform = "translateY(0) scale(1)";
//                     }
//                 });
//             },
//             { threshold: 0.15 }
//         );
//         cardsRef.current.forEach((card) => { if (card) observer.observe(card); });
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
//             gap: 20, marginBottom: 72,
//         }}>
//             {features.map((f, i) => (
//                 <div
//                     key={f.title}
//                     ref={(el) => (cardsRef.current[i] = el)}
//                     style={{
//                         background: "#fff", borderRadius: 22, padding: "32px 24px",
//                         border: `1.5px solid ${f.color}20`,
//                         boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
//                         opacity: 0, transform: "translateY(40px) scale(0.96)",
//                         transition: `all 0.6s cubic-bezier(0.34,1.2,0.64,1) ${i * 80}ms`,
//                         cursor: "default", position: "relative", overflow: "hidden",
//                     }}
//                     onMouseEnter={(e) => {
//                         e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
//                         e.currentTarget.style.boxShadow = `0 20px 50px ${f.color}25`;
//                         e.currentTarget.style.borderColor = f.color;
//                     }}
//                     onMouseLeave={(e) => {
//                         e.currentTarget.style.transform = "translateY(0) scale(1)";
//                         e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";
//                         e.currentTarget.style.borderColor = `${f.color}20`;
//                     }}
//                 >
//                     <div style={{
//                         position: "absolute", top: 0, left: 0, right: 0, height: 4,
//                         background: `linear-gradient(90deg, ${f.color}, ${f.color}80)`,
//                         borderRadius: "22px 22px 0 0",
//                     }} />
//                     <div style={{
//                         width: 60, height: 60, borderRadius: 16, background: f.bg,
//                         display: "flex", alignItems: "center", justifyContent: "center",
//                         fontSize: 28, marginBottom: 18, boxShadow: `0 6px 20px ${f.color}20`,
//                     }}>{f.icon}</div>
//                     <div style={{ fontWeight: 700, fontSize: 16, color: "#0d3b1e", marginBottom: 8 }}>{f.title}</div>
//                     <div style={{ fontSize: 13, color: "#5a7a66", lineHeight: 1.7 }}>{f.desc}</div>
//                     <div style={{
//                         position: "absolute", bottom: 16, right: 16,
//                         width: 8, height: 8, borderRadius: "50%", background: f.color, opacity: 0.4,
//                     }} />
//                 </div>
//             ))}
//         </div>
//     );
// }

// // ── Specialization Grid ──
// function SpecializationGrid() {
//     const gridRef = useRef(null);

//     useEffect(() => {
//         const cards = gridRef.current?.querySelectorAll(".spec-card");
//         if (!cards) return;
//         cards.forEach((card, i) => {
//             const fromLeft = i < 4;
//             card.style.opacity = "0";
//             card.style.transform = `translateX(${fromLeft ? "-120px" : "120px"}) scale(0.92)`;
//             card.style.transition = `transform 0.6s cubic-bezier(0.34,1.2,0.64,1), opacity 0.5s ease`;
//         });
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         cards.forEach((card, i) => {
//                             const fromLeft = i < 4;
//                             const staggerIndex = fromLeft ? i : 7 - i;
//                             setTimeout(() => {
//                                 card.style.opacity = "1";
//                                 card.style.transform = "translateX(0) scale(1)";
//                             }, staggerIndex * 90);
//                         });
//                         observer.unobserve(entry.target);
//                     }
//                 });
//             },
//             { threshold: 0.1 }
//         );
//         if (gridRef.current) observer.observe(gridRef.current);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div ref={gridRef} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
//             {specializations.map((s) => (
//                 <Link key={s.name} to={`/search?specialization=${s.name}`} style={{ textDecoration: "none" }}>
//                     <div
//                         className="spec-card"
//                         style={{
//                             background: "#fff", borderRadius: 22, padding: "32px 16px 24px",
//                             textAlign: "center", border: "1.5px solid #e0f0e8", cursor: "pointer",
//                             boxShadow: "0 4px 16px rgba(0,0,0,0.05)", position: "relative", overflow: "hidden",
//                             transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease, border-color 0.2s",
//                         }}
//                         onMouseEnter={(e) => {
//                             e.currentTarget.style.transform = "translateY(-8px) scale(1.04)";
//                             e.currentTarget.style.boxShadow = `0 20px 50px rgba(26,107,56,0.18)`;
//                             e.currentTarget.style.borderColor = s.accent;
//                         }}
//                         onMouseLeave={(e) => {
//                             e.currentTarget.style.transform = "translateY(0) scale(1)";
//                             e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)";
//                             e.currentTarget.style.borderColor = "#e0f0e8";
//                         }}
//                     >
//                         <div style={{
//                             position: "absolute", top: 0, left: 0, right: 0, height: 4,
//                             background: s.accent, borderRadius: "22px 22px 0 0", opacity: 0.7,
//                         }} />
//                         <div style={{
//                             width: 68, height: 68, borderRadius: 20, background: s.bg,
//                             display: "flex", alignItems: "center", justifyContent: "center",
//                             fontSize: 32, margin: "0 auto 16px", boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
//                         }}>{s.icon}</div>
//                         <p style={{ fontSize: 14, fontWeight: 700, color: "#0d3b1e", margin: "0 0 6px" }}>{s.name}</p>
//                         <div style={{
//                             display: "inline-flex", alignItems: "center", gap: 4,
//                             background: `${s.accent}15`, border: `1px solid ${s.accent}30`,
//                             borderRadius: 50, padding: "3px 10px",
//                             fontSize: 11, fontWeight: 600, color: s.accent,
//                         }}>{s.count} ডাক্তার</div>
//                     </div>
//                 </Link>
//             ))}
//         </div>
//     );
// }

// // ── How It Works ──
// function HowItWorks() {
//     const steps = [
//         { icon: "🔍", step: "০১", title: "ডাক্তার খুঁজুন", desc: "বিভাগ, নাম বা এলাকা দিয়ে আপনার পছন্দের বিশেষজ্ঞ খুঁজুন", color: "#2e7d32", bg: "#eef9f2" },
//         { icon: "📅", step: "০২", title: "অ্যাপয়েন্টমেন্ট নিন", desc: "আপনার সুবিধামতো সময় ও তারিখ বেছে নিয়ে বুকিং করুন", color: "#1565c0", bg: "#e3f2fd" },
//         { icon: "💊", step: "০৩", title: "পরামর্শ ও চিকিৎসা", desc: "সরাসরি বা অনলাইনে ডাক্তারের পরামর্শ নিন এবং সুস্থ থাকুন", color: "#ad1457", bg: "#fce4ec" },
//     ];

//     const sectionRef = useRef(null);
//     const stepsRef = useRef([]);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         stepsRef.current.forEach((el, i) => {
//                             if (el) setTimeout(() => {
//                                 el.style.opacity = "1";
//                                 el.style.transform = "translateY(0)";
//                             }, i * 150);
//                         });
//                         observer.unobserve(entry.target);
//                     }
//                 });
//             },
//             { threshold: 0.2 }
//         );
//         if (sectionRef.current) observer.observe(sectionRef.current);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div ref={sectionRef} style={{ marginBottom: 72 }}>
//             {/* Section Header */}
//             <div style={{ textAlign: "center", marginBottom: 40 }}>
//                 <span style={{
//                     display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56",
//                     border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px",
//                     fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12,
//                 }}>কিভাবে কাজ করে</span>
//                 <h2 style={{
//                     fontFamily: "'Noto Serif Bengali', serif",
//                     fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8,
//                 }}>মাত্র ৩টি সহজ ধাপে</h2>
//                 <p style={{ color: "#5a7a66", fontSize: 14 }}>শুরু থেকে চিকিৎসা পর্যন্ত — সবকিছু এক জায়গায়</p>
//                 <div style={{
//                     width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)",
//                     borderRadius: 4, margin: "12px auto 0",
//                 }} />
//             </div>

//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, position: "relative" }}>
//                 {/* Connector line */}
//                 <div style={{
//                     position: "absolute", top: 52, left: "16.5%", right: "16.5%", height: 2,
//                     background: "linear-gradient(90deg, #2e7d32, #1565c0, #ad1457)",
//                     opacity: 0.2, zIndex: 0,
//                 }} />

//                 {steps.map((s, i) => (
//                     <div
//                         key={s.step}
//                         ref={(el) => (stepsRef.current[i] = el)}
//                         style={{
//                             background: "#fff", borderRadius: 24, padding: "36px 24px 28px",
//                             border: `1.5px solid ${s.color}18`,
//                             boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
//                             textAlign: "center", position: "relative", zIndex: 1,
//                             opacity: 0, transform: "translateY(30px)",
//                             transition: `all 0.6s cubic-bezier(0.34,1.2,0.64,1) ${i * 150}ms`,
//                         }}
//                         onMouseEnter={(e) => {
//                             e.currentTarget.style.transform = "translateY(-8px)";
//                             e.currentTarget.style.boxShadow = `0 20px 50px ${s.color}20`;
//                             e.currentTarget.style.borderColor = s.color;
//                         }}
//                         onMouseLeave={(e) => {
//                             e.currentTarget.style.transform = "translateY(0)";
//                             e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";
//                             e.currentTarget.style.borderColor = `${s.color}18`;
//                         }}
//                     >
//                         {/* Step number badge */}
//                         <div style={{
//                             position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
//                             background: s.color, color: "#fff", borderRadius: 50,
//                             width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center",
//                             fontSize: 12, fontWeight: 700, boxShadow: `0 4px 12px ${s.color}40`,
//                         }}>{i + 1}</div>

//                         <div style={{
//                             width: 80, height: 80, borderRadius: 24, background: s.bg,
//                             display: "flex", alignItems: "center", justifyContent: "center",
//                             fontSize: 36, margin: "0 auto 20px",
//                             boxShadow: `0 8px 24px ${s.color}20`,
//                         }}>{s.icon}</div>

//                         <p style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 17, fontWeight: 800, color: "#0d3b1e", marginBottom: 10 }}>
//                             {s.title}
//                         </p>
//                         <p style={{ fontSize: 13, color: "#5a7a66", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>

//                         <div style={{
//                             marginTop: 20, display: "inline-flex", alignItems: "center", gap: 4,
//                             background: `${s.color}12`, border: `1px solid ${s.color}25`,
//                             borderRadius: 50, padding: "4px 14px",
//                             fontSize: 11, fontWeight: 600, color: s.color,
//                         }}>ধাপ {s.step}</div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// // ── Testimonials ──
// function Testimonials() {
//     const sectionRef = useRef(null);
//     const cardsRef = useRef([]);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         cardsRef.current.forEach((el, i) => {
//                             if (el) setTimeout(() => {
//                                 el.style.opacity = "1";
//                                 el.style.transform = "translateY(0) scale(1)";
//                             }, i * 100);
//                         });
//                         observer.unobserve(entry.target);
//                     }
//                 });
//             },
//             { threshold: 0.1 }
//         );
//         if (sectionRef.current) observer.observe(sectionRef.current);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div ref={sectionRef} style={{ marginBottom: 72 }}>
//             {/* Section Header */}
//             <div style={{ textAlign: "center", marginBottom: 40 }}>
//                 <span style={{
//                     display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56",
//                     border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px",
//                     fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12,
//                 }}>রোগীর কথা</span>
//                 <h2 style={{
//                     fontFamily: "'Noto Serif Bengali', serif",
//                     fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8,
//                 }}>তারা কী বলছেন</h2>
//                 <p style={{ color: "#5a7a66", fontSize: 14 }}>হাজারো সন্তুষ্ট রোগীর মধ্যে কিছু অভিজ্ঞতা</p>
//                 <div style={{
//                     width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)",
//                     borderRadius: 4, margin: "12px auto 0",
//                 }} />
//             </div>

//             <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
//                 {testimonials.map((t, i) => (
//                     <div
//                         key={t.name}
//                         ref={(el) => (cardsRef.current[i] = el)}
//                         style={{
//                             background: "#fff", borderRadius: 22, padding: "28px 24px",
//                             border: `1.5px solid ${t.color}18`,
//                             boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
//                             opacity: 0, transform: "translateY(30px) scale(0.97)",
//                             transition: `all 0.55s cubic-bezier(0.34,1.2,0.64,1) ${i * 100}ms`,
//                             position: "relative",
//                         }}
//                         onMouseEnter={(e) => {
//                             e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
//                             e.currentTarget.style.boxShadow = `0 16px 40px ${t.color}20`;
//                             e.currentTarget.style.borderColor = t.color;
//                         }}
//                         onMouseLeave={(e) => {
//                             e.currentTarget.style.transform = "translateY(0) scale(1)";
//                             e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)";
//                             e.currentTarget.style.borderColor = `${t.color}18`;
//                         }}
//                     >
//                         {/* Quote mark */}
//                         <div style={{
//                             position: "absolute", top: 16, right: 20,
//                             fontSize: 48, color: `${t.color}15`, lineHeight: 1,
//                             fontFamily: "Georgia, serif", fontWeight: 900,
//                         }}>"</div>

//                         {/* Stars */}
//                         <div style={{ fontSize: 14, marginBottom: 14, color: "#f0c040" }}>
//                             {"★".repeat(t.rating)}
//                         </div>

//                         {/* Review text */}
//                         <p style={{ fontSize: 14, color: "#3a5a46", lineHeight: 1.8, marginBottom: 20, fontStyle: "italic" }}>
//                             "{t.text}"
//                         </p>

//                         {/* Reviewer */}
//                         <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//                             <div style={{
//                                 width: 42, height: 42, borderRadius: "50%", background: t.bg,
//                                 display: "flex", alignItems: "center", justifyContent: "center",
//                                 fontSize: 16, fontWeight: 700, color: t.color,
//                                 border: `2px solid ${t.color}30`,
//                             }}>{t.avatar}</div>
//                             <div>
//                                 <p style={{ fontSize: 14, fontWeight: 700, color: "#0d3b1e", margin: 0 }}>{t.name}</p>
//                                 <p style={{ fontSize: 12, color: "#5a7a66", margin: 0 }}>📍 {t.city}</p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// // ── Featured Doctors ──
// function FeaturedDoctors() {
//     const sectionRef = useRef(null);
//     const cardsRef = useRef([]);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         cardsRef.current.forEach((el, i) => {
//                             if (el) setTimeout(() => {
//                                 el.style.opacity = "1";
//                                 el.style.transform = "translateY(0)";
//                             }, i * 120);
//                         });
//                         observer.unobserve(entry.target);
//                     }
//                 });
//             },
//             { threshold: 0.1 }
//         );
//         if (sectionRef.current) observer.observe(sectionRef.current);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div ref={sectionRef} style={{ marginBottom: 72 }}>
//             {/* Section Header */}
//             <div style={{ textAlign: "center", marginBottom: 40 }}>
//                 <span style={{
//                     display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56",
//                     border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px",
//                     fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12,
//                 }}>বিশেষজ্ঞ দল</span>
//                 <h2 style={{
//                     fontFamily: "'Noto Serif Bengali', serif",
//                     fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8,
//                 }}>জনপ্রিয় ডাক্তারগণ</h2>
//                 <p style={{ color: "#5a7a66", fontSize: 14 }}>আমাদের সর্বোচ্চ রেটিংপ্রাপ্ত বিশেষজ্ঞ ডাক্তারদের সাথে পরিচিত হন</p>
//                 <div style={{
//                     width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)",
//                     borderRadius: 4, margin: "12px auto 0",
//                 }} />
//             </div>

//             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
//                 {featuredDoctors.map((d, i) => (
//                     <div
//                         key={d.name}
//                         ref={(el) => (cardsRef.current[i] = el)}
//                         style={{
//                             background: "#fff", borderRadius: 22, padding: "28px 20px 24px",
//                             border: `1.5px solid ${d.color}18`,
//                             boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
//                             textAlign: "center", opacity: 0, transform: "translateY(30px)",
//                             transition: `all 0.6s cubic-bezier(0.34,1.2,0.64,1) ${i * 120}ms`,
//                             cursor: "pointer", position: "relative", overflow: "hidden",
//                         }}
//                         onMouseEnter={(e) => {
//                             e.currentTarget.style.transform = "translateY(-8px)";
//                             e.currentTarget.style.boxShadow = `0 20px 50px ${d.color}25`;
//                             e.currentTarget.style.borderColor = d.color;
//                         }}
//                         onMouseLeave={(e) => {
//                             e.currentTarget.style.transform = "translateY(0)";
//                             e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)";
//                             e.currentTarget.style.borderColor = `${d.color}18`;
//                         }}
//                     >
//                         {/* Top accent */}
//                         <div style={{
//                             position: "absolute", top: 0, left: 0, right: 0, height: 4,
//                             background: d.color, borderRadius: "22px 22px 0 0", opacity: 0.7,
//                         }} />

//                         {/* Avatar */}
//                         <div style={{
//                             width: 72, height: 72, borderRadius: "50%", background: d.bg,
//                             display: "flex", alignItems: "center", justifyContent: "center",
//                             fontSize: 26, fontWeight: 700, color: d.color,
//                             margin: "0 auto 16px",
//                             border: `3px solid ${d.color}30`,
//                             boxShadow: `0 8px 24px ${d.color}25`,
//                         }}>{d.avatar}</div>

//                         <p style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 15, fontWeight: 800, color: "#0d3b1e", margin: "0 0 4px" }}>
//                             {d.name}
//                         </p>
//                         <p style={{ fontSize: 12, color: "#5a7a66", margin: "0 0 16px" }}>{d.spec}</p>

//                         {/* Stats row */}
//                         <div style={{
//                             display: "flex", justifyContent: "center", gap: 12,
//                             marginBottom: 16, flexWrap: "wrap",
//                         }}>
//                             <div style={{
//                                 background: `${d.color}10`, borderRadius: 50,
//                                 padding: "4px 10px", fontSize: 11, color: d.color, fontWeight: 600,
//                             }}>⭐ {d.rating}</div>
//                             <div style={{
//                                 background: "#f0f4f0", borderRadius: 50,
//                                 padding: "4px 10px", fontSize: 11, color: "#5a7a66", fontWeight: 600,
//                             }}>👥 {d.patients}</div>
//                         </div>

//                         <div style={{
//                             fontSize: 11, color: "#5a7a66", marginBottom: 16,
//                         }}>অভিজ্ঞতা: {d.exp}</div>

//                         {/* Book button */}
//                         <Link to={`/search?specialization=${d.spec}`} style={{ textDecoration: "none" }}>
//                             <div style={{
//                                 background: d.color, color: "#fff",
//                                 borderRadius: 50, padding: "10px 20px",
//                                 fontSize: 13, fontWeight: 700,
//                                 transition: "all 0.2s ease",
//                                 boxShadow: `0 4px 14px ${d.color}40`,
//                             }}
//                                 onMouseEnter={(e) => {
//                                     e.currentTarget.style.opacity = "0.85";
//                                     e.currentTarget.style.transform = "scale(1.05)";
//                                 }}
//                                 onMouseLeave={(e) => {
//                                     e.currentTarget.style.opacity = "1";
//                                     e.currentTarget.style.transform = "scale(1)";
//                                 }}
//                             >
//                                 অ্যাপয়েন্টমেন্ট নিন
//                             </div>
//                         </Link>
//                     </div>
//                 ))}
//             </div>

//             {/* View all link */}
//             <div style={{ textAlign: "center", marginTop: 32 }}>
//                 <Link to="/search" style={{ textDecoration: "none" }}>
//                     <div style={{
//                         display: "inline-flex", alignItems: "center", gap: 8,
//                         background: "transparent", color: "#2e9e56",
//                         border: "2px solid #2e9e56", borderRadius: 50,
//                         padding: "12px 28px", fontSize: 14, fontWeight: 700,
//                         transition: "all 0.2s ease",
//                     }}
//                         onMouseEnter={(e) => {
//                             e.currentTarget.style.background = "#2e9e56";
//                             e.currentTarget.style.color = "#fff";
//                         }}
//                         onMouseLeave={(e) => {
//                             e.currentTarget.style.background = "transparent";
//                             e.currentTarget.style.color = "#2e9e56";
//                         }}
//                     >
//                         সকল ডাক্তার দেখুন →
//                     </div>
//                 </Link>
//             </div>
//         </div>
//     );
// }

// // ── Home ──
// function Home() {
//     return (
//         <div style={{ fontFamily: "'Hind Siliguri', sans-serif", background: "#f7fbf9", minHeight: "100vh" }}>
//             <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Noto+Serif+Bengali:wght@700;800;900&display=swap" rel="stylesheet" />

//             {/* HERO */}
//             <section style={{
//                 position: "relative",
//                 background: "linear-gradient(160deg, #062210 0%, #0d3b1e 40%, #1a6b38 80%, #2e9e56 100%)",
//                 padding: "80px 24px 100px", textAlign: "center", overflow: "hidden",
//             }}>
//                 <div style={{
//                     position: "absolute", inset: 0,
//                     backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
//                     backgroundSize: "60px 60px", pointerEvents: "none",
//                 }} />
//                 <div style={{
//                     position: "absolute", width: 500, height: 500, borderRadius: "50%",
//                     background: "radial-gradient(circle, rgba(94,203,135,0.12) 0%, transparent 70%)",
//                     top: -150, right: -150, pointerEvents: "none",
//                 }} />

//                 <div style={{ position: "relative", zIndex: 2, maxWidth: 720, margin: "0 auto" }}>
//                     <div style={{
//                         display: "inline-flex", alignItems: "center", gap: 8,
//                         background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)",
//                         borderRadius: 50, padding: "7px 18px", fontSize: 13, color: "#a8e6c0",
//                         marginBottom: 28, backdropFilter: "blur(8px)",
//                     }}>
//                         <span style={{
//                             width: 7, height: 7, borderRadius: "50%",
//                             background: "#5ecb87", boxShadow: "0 0 8px #5ecb87", display: "inline-block",
//                         }} />
//                         বাংলাদেশের নির্ভরযোগ্য স্বাস্থ্যসেবা প্ল্যাটফর্ম
//                     </div>

//                     <h1 style={{
//                         fontFamily: "'Noto Serif Bengali', serif",
//                         fontSize: "clamp(2.6rem, 6vw, 4.6rem)",
//                         fontWeight: 900, color: "#fff", lineHeight: 1.15,
//                         letterSpacing: "-1px", marginBottom: 16,
//                         textShadow: "0 2px 12px rgba(0,0,0,0.2)",
//                     }}>
//                         সঠিক ডাক্তার,{" "}
//                         <span style={{
//                             background: "linear-gradient(135deg, #5ecb87, #f0c040)",
//                             WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                         }}>সঠিক সময়ে</span>
//                     </h1>

//                     <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, marginBottom: 40, lineHeight: 1.7 }}>
//                         বাংলাদেশের যেকোনো প্রান্তে বিশেষজ্ঞ ডাক্তার খুঁজুন —<br />
//                         সহজে, দ্রুত এবং বিশ্বস্তভাবে
//                     </p>

//                     <div style={{ display: "flex", justifyContent: "center", marginBottom: 52 }}>
//                         <SearchBar />
//                     </div>

//                     <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
//                         {stats.map((s, i) => (
//                             <div key={s.label} style={{
//                                 padding: "0 32px", textAlign: "center",
//                                 borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none",
//                             }}>
//                                 <div style={{
//                                     fontFamily: "'Noto Serif Bengali', serif",
//                                     fontSize: 26, fontWeight: 900, color: "#fff", marginBottom: 4,
//                                 }}>{s.value}</div>
//                                 <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{s.label}</div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Wave */}
//             <div style={{ marginTop: -2, lineHeight: 0, background: "#0d3b1e" }}>
//                 <svg viewBox="0 0 1200 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 70 }}>
//                     <path d="M0,35 C200,70 400,0 600,35 C800,70 1000,10 1200,35 L1200,70 L0,70 Z" fill="#f7fbf9" />
//                 </svg>
//             </div>

//             {/* CONTENT */}
//             <div style={{ maxWidth: 1060, margin: "0 auto", padding: "64px 24px 80px" }}>

//                 {/* Features Section Header */}
//                 <div style={{ textAlign: "center", marginBottom: 40 }}>
//                     <span style={{
//                         display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56",
//                         border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px",
//                         fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12,
//                     }}>কেন আমরা</span>
//                     <h2 style={{
//                         fontFamily: "'Noto Serif Bengali', serif",
//                         fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8,
//                     }}>আমাদের বিশেষত্ব</h2>
//                     <p style={{ color: "#5a7a66", fontSize: 14 }}>স্বাস্থ্য খোঁজি কেন বাংলাদেশের সেরা স্বাস্থ্যসেবা প্ল্যাটফর্ম</p>
//                     <div style={{
//                         width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)",
//                         borderRadius: 4, margin: "12px auto 0",
//                     }} />
//                 </div>

//                 {/* Feature Cards */}
//                 <FeatureCards />

//                 {/* How It Works */}
//                 <HowItWorks />

//                 {/* Specializations Section Header */}
//                 <div style={{ textAlign: "center", marginBottom: 40 }}>
//                     <span style={{
//                         display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56",
//                         border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px",
//                         fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12,
//                     }}>বিভাগসমূহ</span>
//                     <h2 style={{
//                         fontFamily: "'Noto Serif Bengali', serif",
//                         fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8,
//                     }}>বিশেষজ্ঞতা অনুযায়ী খুঁজুন</h2>
//                     <p style={{ color: "#5a7a66", fontSize: 14 }}>আপনার প্রয়োজন অনুযায়ী বিভাগ বেছে নিন</p>
//                     <div style={{
//                         width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)",
//                         borderRadius: 4, margin: "12px auto 0",
//                     }} />
//                 </div>

//                 {/* Specialization Grid */}
//                 <div style={{ marginBottom: 72 }}>
//                     <SpecializationGrid />
//                 </div>

//                 {/* Featured Doctors */}
//                 <FeaturedDoctors />

//                 {/* Testimonials */}
//                 <Testimonials />

//                 {/* CTA Banner */}
//                 <div style={{
//                     background: "linear-gradient(135deg, #0d3b1e 0%, #1a6b38 100%)",
//                     borderRadius: 24, padding: "44px 40px",
//                     display: "flex", alignItems: "center",
//                     justifyContent: "space-between", flexWrap: "wrap", gap: 20,
//                     boxShadow: "0 20px 60px rgba(13,59,30,0.3)",
//                     position: "relative", overflow: "hidden",
//                 }}>
//                     <div style={{
//                         position: "absolute", right: 160, top: "50%", transform: "translateY(-50%)",
//                         fontSize: 110, opacity: 0.06, pointerEvents: "none",
//                     }}>🏥</div>
//                     <div style={{ position: "relative" }}>
//                         <h3 style={{
//                             fontFamily: "'Noto Serif Bengali', serif",
//                             color: "#fff", fontSize: 22, fontWeight: 800, marginBottom: 6,
//                         }}>জরুরি সাহায্য দরকার?</h3>
//                         <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>
//                             আমাদের হেল্পলাইনে যোগাযোগ করুন — ২৪ ঘণ্টা, ৭ দিন
//                         </p>
//                     </div>
//                     <a href="tel:16000" style={{
//                         background: "#fff", color: "#0d3b1e",
//                         padding: "14px 32px", borderRadius: 50,
//                         fontWeight: 700, fontSize: 16, textDecoration: "none",
//                         flexShrink: 0, boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
//                         display: "inline-flex", alignItems: "center", gap: 8,
//                         transition: "all 0.2s ease",
//                     }}
//                         onMouseEnter={(e) => {
//                             e.currentTarget.style.transform = "translateY(-2px)";
//                             e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.3)";
//                         }}
//                         onMouseLeave={(e) => {
//                             e.currentTarget.style.transform = "translateY(0)";
//                             e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
//                         }}
//                     >
//                         📞 ১৬০০০ তে কল করুন
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// }

// import { Link } from "react-router-dom";
// import { useEffect, useRef } from "react";
// import SearchBar from "../components/SearchBar";

// const specializations = [
//     { name: "মেডিসিন", icon: "💊", bg: "linear-gradient(135deg, #e8f5e9, #c8e6c9)", accent: "#2e7d32", count: "১২০+" },
//     { name: "শিশু রোগ", icon: "👶", bg: "linear-gradient(135deg, #e3f2fd, #bbdefb)", accent: "#1565c0", count: "৮৫+" },
//     { name: "গাইনি", icon: "🌸", bg: "linear-gradient(135deg, #fce4ec, #f8bbd0)", accent: "#ad1457", count: "৭৪+" },
//     { name: "অর্থোপেডিক", icon: "🦴", bg: "linear-gradient(135deg, #fff8e1, #ffe082)", accent: "#f57f17", count: "৫২+" },
//     { name: "চর্মরোগ", icon: "🩹", bg: "linear-gradient(135deg, #f3e5f5, #e1bee7)", accent: "#6a1b9a", count: "৪৮+" },
//     { name: "চক্ষু", icon: "👁️", bg: "linear-gradient(135deg, #e0f7fa, #b2ebf2)", accent: "#00695c", count: "৩৯+" },
//     { name: "দন্ত রোগ", icon: "🦷", bg: "linear-gradient(135deg, #e8eaf6, #c5cae9)", accent: "#283593", count: "৬১+" },
//     { name: "মানসিক রোগ", icon: "🧠", bg: "linear-gradient(135deg, #e8f5e9, #a5d6a7)", accent: "#1b5e20", count: "৩৩+" },
// ];

// const stats = [
//     { value: "৫০০+", label: "বিশেষজ্ঞ ডাক্তার" },
//     { value: "৬৪", label: "জেলায় সেবা" },
//     { value: "১০ লাখ+", label: "রোগী সেবা পেয়েছেন" },
// ];

// const features = [
//     { icon: "⚡", title: "তাৎক্ষণিক বুকিং", desc: "মাত্র ৩০ সেকেন্ডে অ্যাপয়েন্টমেন্ট নিন, কোনো অপেক্ষা নেই", color: "#2e7d32", bg: "#eef9f2" },
//     { icon: "✅", title: "যাচাইকৃত ডাক্তার", desc: "সকল ডাক্তার BMDC রেজিস্ট্রেশন যাচাইকৃত", color: "#1565c0", bg: "#e3f2fd" },
//     { icon: "💬", title: "অনলাইন পরামর্শ", desc: "ঘরে বসেই ভিডিও কলে ডাক্তারের সাথে কথা বলুন", color: "#ad1457", bg: "#fce4ec" },
//     { icon: "🔒", title: "সম্পূর্ণ নিরাপদ", desc: "আপনার তথ্য সম্পূর্ণ সুরক্ষিত এবং গোপনীয়", color: "#f57f17", bg: "#fff8e1" },
//     { icon: "🌍", title: "সারাদেশে সেবা", desc: "বাংলাদেশের ৬৪ জেলায় আমাদের ডাক্তার নেটওয়ার্ক", color: "#6a1b9a", bg: "#f3e5f5" },
//     { icon: "⭐", title: "রেটিং ও রিভিউ", desc: "হাজারো রোগীর রিভিউ দেখে সেরা ডাক্তার বেছে নিন", color: "#00695c", bg: "#e0f7fa" },
// ];

// const testimonials = [
//     { name: "রাহেলা বেগম", city: "ঢাকা", avatar: "র", color: "#2e7d32", bg: "#eef9f2", rating: 5, text: "মাত্র কয়েক মিনিটে অ্যাপয়েন্টমেন্ট নিলাম। ডাক্তার অনেক মনোযোগ দিয়ে শুনলেন, সত্যিই দারুণ অভিজ্ঞতা।" },
//     { name: "মো. করিম উদ্দিন", city: "চট্টগ্রাম", avatar: "ক", color: "#1565c0", bg: "#e3f2fd", rating: 5, text: "অনলাইনে পরামর্শ নেওয়া এত সহজ হবে ভাবিনি। সিলেট থেকে ঢাকার বিশেষজ্ঞ ডাক্তারের সাথে কথা বললাম।" },
//     { name: "সুমাইয়া আক্তার", city: "সিলেট", avatar: "স", color: "#ad1457", bg: "#fce4ec", rating: 5, text: "BMDC যাচাইকৃত দেখে ভরসা পেলাম। বাচ্চার জন্য শিশু বিশেষজ্ঞ খুব দ্রুত পেলাম।" },
//     { name: "আব্দুর রহমান", city: "রাজশাহী", avatar: "আ", color: "#f57f17", bg: "#fff8e1", rating: 5, text: "গ্রামে থেকেও শহরের ভালো ডাক্তার পাচ্ছি — এটাই সবচেয়ে বড় সুবিধা এই প্ল্যাটফর্মের।" },
//     { name: "নাসরিন সুলতানা", city: "খুলনা", avatar: "ন", color: "#6a1b9a", bg: "#f3e5f5", rating: 5, text: "রিভিউ দেখে ডাক্তার বেছে নেওয়া খুব সহজ হয়েছে। পরিষেবাটি সত্যিই বিশ্বস্ত।" },
//     { name: "তানভীর হোসেন", city: "বরিশাল", avatar: "ত", color: "#00695c", bg: "#e0f7fa", rating: 5, text: "হেল্পলাইনে কল করলাম, সাথে সাথে সাহায্য পেলাম। রাত ১১টায়ও সেবা পেলাম।" },
// ];

// const featuredDoctors = [
//     { name: "ডা. আহমেদ হোসেন", spec: "মেডিসিন বিশেষজ্ঞ", exp: "১৫ বছর", rating: "৪.৯", patients: "২,৪০০+", avatar: "আ", color: "#2e7d32", bg: "#eef9f2" },
//     { name: "ডা. সালমা খানম", spec: "শিশু রোগ বিশেষজ্ঞ", exp: "১২ বছর", rating: "৪.৮", patients: "১,৮০০+", avatar: "স", color: "#1565c0", bg: "#e3f2fd" },
//     { name: "ডা. ফারহান করিম", spec: "হৃদরোগ বিশেষজ্ঞ", exp: "২০ বছর", rating: "৪.৯", patients: "৩,১০০+", avatar: "ফ", color: "#ad1457", bg: "#fce4ec" },
//     { name: "ডা. নুসরাত জাহান", spec: "গাইনি বিশেষজ্ঞ", exp: "১০ বছর", rating: "৪.৭", patients: "১,৫০০+", avatar: "ন", color: "#f57f17", bg: "#fff8e1" },
// ];

// // ── Feature Cards ──
// function FeatureCards() {
//     const cardsRef = useRef([]);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         entry.target.style.opacity = "1";
//                         entry.target.style.transform = "translateY(0) scale(1)";
//                     }
//                 });
//             },
//             { threshold: 0.15 }
//         );
//         cardsRef.current.forEach((card) => { if (card) observer.observe(card); });
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
//             gap: 20, marginBottom: 72,
//         }}>
//             {features.map((f, i) => (
//                 <div
//                     key={f.title}
//                     ref={(el) => (cardsRef.current[i] = el)}
//                     style={{
//                         background: "#fff", borderRadius: 22, padding: "32px 24px",
//                         border: `1.5px solid ${f.color}20`,
//                         boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
//                         opacity: 0, transform: "translateY(40px) scale(0.96)",
//                         transition: `all 0.6s cubic-bezier(0.34,1.2,0.64,1) ${i * 80}ms`,
//                         cursor: "default", position: "relative", overflow: "hidden",
//                     }}
//                     onMouseEnter={(e) => {
//                         e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
//                         e.currentTarget.style.boxShadow = `0 20px 50px ${f.color}25`;
//                         e.currentTarget.style.borderColor = f.color;
//                     }}
//                     onMouseLeave={(e) => {
//                         e.currentTarget.style.transform = "translateY(0) scale(1)";
//                         e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";
//                         e.currentTarget.style.borderColor = `${f.color}20`;
//                     }}
//                 >
//                     <div style={{
//                         position: "absolute", top: 0, left: 0, right: 0, height: 4,
//                         background: `linear-gradient(90deg, ${f.color}, ${f.color}80)`,
//                         borderRadius: "22px 22px 0 0",
//                     }} />
//                     <div style={{
//                         width: 60, height: 60, borderRadius: 16, background: f.bg,
//                         display: "flex", alignItems: "center", justifyContent: "center",
//                         fontSize: 28, marginBottom: 18, boxShadow: `0 6px 20px ${f.color}20`,
//                     }}>{f.icon}</div>
//                     <div style={{ fontWeight: 700, fontSize: 16, color: "#0d3b1e", marginBottom: 8 }}>{f.title}</div>
//                     <div style={{ fontSize: 13, color: "#5a7a66", lineHeight: 1.7 }}>{f.desc}</div>
//                     <div style={{
//                         position: "absolute", bottom: 16, right: 16,
//                         width: 8, height: 8, borderRadius: "50%", background: f.color, opacity: 0.4,
//                     }} />
//                 </div>
//             ))}
//         </div>
//     );
// }

// // ── Specialization Grid ──
// function SpecializationGrid() {
//     const gridRef = useRef(null);

//     useEffect(() => {
//         const cards = gridRef.current?.querySelectorAll(".spec-card");
//         if (!cards) return;
//         cards.forEach((card, i) => {
//             const fromLeft = i < 4;
//             card.style.opacity = "0";
//             card.style.transform = `translateX(${fromLeft ? "-120px" : "120px"}) scale(0.92)`;
//             card.style.transition = `transform 0.6s cubic-bezier(0.34,1.2,0.64,1), opacity 0.5s ease`;
//         });
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         cards.forEach((card, i) => {
//                             const fromLeft = i < 4;
//                             const staggerIndex = fromLeft ? i : 7 - i;
//                             setTimeout(() => {
//                                 card.style.opacity = "1";
//                                 card.style.transform = "translateX(0) scale(1)";
//                             }, staggerIndex * 90);
//                         });
//                         observer.unobserve(entry.target);
//                     }
//                 });
//             },
//             { threshold: 0.1 }
//         );
//         if (gridRef.current) observer.observe(gridRef.current);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div ref={gridRef} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
//             {specializations.map((s) => (
//                 <Link key={s.name} to={`/search?specialization=${s.name}`} style={{ textDecoration: "none" }}>
//                     <div
//                         className="spec-card"
//                         style={{
//                             background: "#fff", borderRadius: 22, padding: "32px 16px 24px",
//                             textAlign: "center", border: "1.5px solid #e0f0e8", cursor: "pointer",
//                             boxShadow: "0 4px 16px rgba(0,0,0,0.05)", position: "relative", overflow: "hidden",
//                             transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease, border-color 0.2s",
//                         }}
//                         onMouseEnter={(e) => {
//                             e.currentTarget.style.transform = "translateY(-8px) scale(1.04)";
//                             e.currentTarget.style.boxShadow = `0 20px 50px rgba(26,107,56,0.18)`;
//                             e.currentTarget.style.borderColor = s.accent;
//                         }}
//                         onMouseLeave={(e) => {
//                             e.currentTarget.style.transform = "translateY(0) scale(1)";
//                             e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)";
//                             e.currentTarget.style.borderColor = "#e0f0e8";
//                         }}
//                     >
//                         <div style={{
//                             position: "absolute", top: 0, left: 0, right: 0, height: 4,
//                             background: s.accent, borderRadius: "22px 22px 0 0", opacity: 0.7,
//                         }} />
//                         <div style={{
//                             width: 68, height: 68, borderRadius: 20, background: s.bg,
//                             display: "flex", alignItems: "center", justifyContent: "center",
//                             fontSize: 32, margin: "0 auto 16px", boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
//                         }}>{s.icon}</div>
//                         <p style={{ fontSize: 14, fontWeight: 700, color: "#0d3b1e", margin: "0 0 6px" }}>{s.name}</p>
//                         <div style={{
//                             display: "inline-flex", alignItems: "center", gap: 4,
//                             background: `${s.accent}15`, border: `1px solid ${s.accent}30`,
//                             borderRadius: 50, padding: "3px 10px",
//                             fontSize: 11, fontWeight: 600, color: s.accent,
//                         }}>{s.count} ডাক্তার</div>
//                     </div>
//                 </Link>
//             ))}
//         </div>
//     );
// }

// // ── How It Works ──
// function HowItWorks() {
//     const steps = [
//         {
//             icon: "🔍",
//             step: "০১",
//             title: "ডাক্তার খুঁজুন",
//             desc: "বিভাগ, নাম বা এলাকা দিয়ে আপনার পছন্দের বিশেষজ্ঞ খুঁজুন",
//             color: "#2e7d32",
//             bg: "#eef9f2",
//             to: "/search",
//             btnLabel: "এখনই খুঁজুন →",
//         },
//         {
//             icon: "📅",
//             step: "০২",
//             title: "অ্যাপয়েন্টমেন্ট নিন",
//             desc: "আপনার সুবিধামতো সময় ও তারিখ বেছে নিয়ে বুকিং করুন",
//             color: "#1565c0",
//             bg: "#e3f2fd",
//             to: "/search",
//             btnLabel: "বুকিং করুন →",
//         },
//         {
//             icon: "💊",
//             step: "০৩",
//             title: "পরামর্শ ও চিকিৎসা",
//             desc: "সরাসরি বা অনলাইনে ডাক্তারের পরামর্শ নিন এবং সুস্থ থাকুন",
//             color: "#ad1457",
//             bg: "#fce4ec",
//             to: "/search?mode=online",
//             btnLabel: "পরামর্শ নিন →",
//         },
//     ];

//     const sectionRef = useRef(null);
//     const stepsRef = useRef([]);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         stepsRef.current.forEach((el, i) => {
//                             if (el) setTimeout(() => {
//                                 el.style.opacity = "1";
//                                 el.style.transform = "translateY(0)";
//                             }, i * 150);
//                         });
//                         observer.unobserve(entry.target);
//                     }
//                 });
//             },
//             { threshold: 0.2 }
//         );
//         if (sectionRef.current) observer.observe(sectionRef.current);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div ref={sectionRef} style={{ marginBottom: 72 }}>
//             <div style={{ textAlign: "center", marginBottom: 40 }}>
//                 <span style={{
//                     display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56",
//                     border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px",
//                     fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12,
//                 }}>কিভাবে কাজ করে</span>
//                 <h2 style={{
//                     fontFamily: "'Noto Serif Bengali', serif",
//                     fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8,
//                 }}>মাত্র ৩টি সহজ ধাপে</h2>
//                 <p style={{ color: "#5a7a66", fontSize: 14 }}>শুরু থেকে চিকিৎসা পর্যন্ত — সবকিছু এক জায়গায়</p>
//                 <div style={{
//                     width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)",
//                     borderRadius: 4, margin: "12px auto 0",
//                 }} />
//             </div>

//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, position: "relative" }}>
//                 <div style={{
//                     position: "absolute", top: 52, left: "16.5%", right: "16.5%", height: 2,
//                     background: "linear-gradient(90deg, #2e7d32, #1565c0, #ad1457)",
//                     opacity: 0.2, zIndex: 0,
//                 }} />

//                 {steps.map((s, i) => (
//                     <div
//                         key={s.step}
//                         ref={(el) => (stepsRef.current[i] = el)}
//                         style={{
//                             background: "#fff", borderRadius: 24, padding: "36px 24px 28px",
//                             border: `1.5px solid ${s.color}18`,
//                             boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
//                             textAlign: "center", position: "relative", zIndex: 1,
//                             opacity: 0, transform: "translateY(30px)",
//                             transition: `all 0.6s cubic-bezier(0.34,1.2,0.64,1) ${i * 150}ms`,
//                         }}
//                         onMouseEnter={(e) => {
//                             e.currentTarget.style.transform = "translateY(-8px)";
//                             e.currentTarget.style.boxShadow = `0 20px 50px ${s.color}20`;
//                             e.currentTarget.style.borderColor = s.color;
//                         }}
//                         onMouseLeave={(e) => {
//                             e.currentTarget.style.transform = "translateY(0)";
//                             e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";
//                             e.currentTarget.style.borderColor = `${s.color}18`;
//                         }}
//                     >
//                         <div style={{
//                             position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
//                             background: s.color, color: "#fff", borderRadius: 50,
//                             width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center",
//                             fontSize: 12, fontWeight: 700, boxShadow: `0 4px 12px ${s.color}40`,
//                         }}>{i + 1}</div>

//                         <div style={{
//                             width: 80, height: 80, borderRadius: 24, background: s.bg,
//                             display: "flex", alignItems: "center", justifyContent: "center",
//                             fontSize: 36, margin: "0 auto 20px",
//                             boxShadow: `0 8px 24px ${s.color}20`,
//                         }}>{s.icon}</div>

//                         <p style={{
//                             fontFamily: "'Noto Serif Bengali', serif",
//                             fontSize: 17, fontWeight: 800, color: "#0d3b1e", marginBottom: 10,
//                         }}>{s.title}</p>

//                         <p style={{ fontSize: 13, color: "#5a7a66", lineHeight: 1.7, margin: "0 0 20px" }}>
//                             {s.desc}
//                         </p>

//                         <Link to={s.to} style={{ textDecoration: "none" }}>
//                             <div
//                                 style={{
//                                     display: "inline-flex",
//                                     alignItems: "center",
//                                     justifyContent: "center",
//                                     background: s.color,
//                                     color: "#fff",
//                                     borderRadius: 50,
//                                     padding: "11px 22px",
//                                     fontSize: 13,
//                                     fontWeight: 700,
//                                     cursor: "pointer",
//                                     boxShadow: `0 4px 14px ${s.color}40`,
//                                     transition: "all 0.2s ease",
//                                     fontFamily: "'Hind Siliguri', sans-serif",
//                                 }}
//                                 onMouseEnter={(e) => {
//                                     e.currentTarget.style.transform = "scale(1.07)";
//                                     e.currentTarget.style.boxShadow = `0 8px 24px ${s.color}55`;
//                                 }}
//                                 onMouseLeave={(e) => {
//                                     e.currentTarget.style.transform = "scale(1)";
//                                     e.currentTarget.style.boxShadow = `0 4px 14px ${s.color}40`;
//                                 }}
//                             >
//                                 {s.btnLabel}
//                             </div>
//                         </Link>

//                         <div style={{
//                             marginTop: 16,
//                             display: "inline-flex", alignItems: "center", gap: 4,
//                             background: `${s.color}12`, border: `1px solid ${s.color}25`,
//                             borderRadius: 50, padding: "4px 14px",
//                             fontSize: 11, fontWeight: 600, color: s.color,
//                         }}>ধাপ {s.step}</div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// // ── Testimonials ──
// function Testimonials() {
//     const sectionRef = useRef(null);
//     const cardsRef = useRef([]);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         cardsRef.current.forEach((el, i) => {
//                             if (el) setTimeout(() => {
//                                 el.style.opacity = "1";
//                                 el.style.transform = "translateY(0) scale(1)";
//                             }, i * 100);
//                         });
//                         observer.unobserve(entry.target);
//                     }
//                 });
//             },
//             { threshold: 0.1 }
//         );
//         if (sectionRef.current) observer.observe(sectionRef.current);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div ref={sectionRef} style={{ marginBottom: 72 }}>
//             <div style={{ textAlign: "center", marginBottom: 40 }}>
//                 <span style={{
//                     display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56",
//                     border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px",
//                     fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12,
//                 }}>রোগীর কথা</span>
//                 <h2 style={{
//                     fontFamily: "'Noto Serif Bengali', serif",
//                     fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8,
//                 }}>তারা কী বলছেন</h2>
//                 <p style={{ color: "#5a7a66", fontSize: 14 }}>হাজারো সন্তুষ্ট রোগীর মধ্যে কিছু অভিজ্ঞতা</p>
//                 <div style={{
//                     width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)",
//                     borderRadius: 4, margin: "12px auto 0",
//                 }} />
//             </div>

//             <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
//                 {testimonials.map((t, i) => (
//                     <div
//                         key={t.name}
//                         ref={(el) => (cardsRef.current[i] = el)}
//                         style={{
//                             background: "#fff", borderRadius: 22, padding: "28px 24px",
//                             border: `1.5px solid ${t.color}18`,
//                             boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
//                             opacity: 0, transform: "translateY(30px) scale(0.97)",
//                             transition: `all 0.55s cubic-bezier(0.34,1.2,0.64,1) ${i * 100}ms`,
//                             position: "relative",
//                         }}
//                         onMouseEnter={(e) => {
//                             e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
//                             e.currentTarget.style.boxShadow = `0 16px 40px ${t.color}20`;
//                             e.currentTarget.style.borderColor = t.color;
//                         }}
//                         onMouseLeave={(e) => {
//                             e.currentTarget.style.transform = "translateY(0) scale(1)";
//                             e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)";
//                             e.currentTarget.style.borderColor = `${t.color}18`;
//                         }}
//                     >
//                         <div style={{
//                             position: "absolute", top: 16, right: 20,
//                             fontSize: 48, color: `${t.color}15`, lineHeight: 1,
//                             fontFamily: "Georgia, serif", fontWeight: 900,
//                         }}>"</div>

//                         <div style={{ fontSize: 14, marginBottom: 14, color: "#f0c040" }}>
//                             {"★".repeat(t.rating)}
//                         </div>

//                         <p style={{ fontSize: 14, color: "#3a5a46", lineHeight: 1.8, marginBottom: 20, fontStyle: "italic" }}>
//                             "{t.text}"
//                         </p>

//                         <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//                             <div style={{
//                                 width: 42, height: 42, borderRadius: "50%", background: t.bg,
//                                 display: "flex", alignItems: "center", justifyContent: "center",
//                                 fontSize: 16, fontWeight: 700, color: t.color,
//                                 border: `2px solid ${t.color}30`,
//                             }}>{t.avatar}</div>
//                             <div>
//                                 <p style={{ fontSize: 14, fontWeight: 700, color: "#0d3b1e", margin: 0 }}>{t.name}</p>
//                                 <p style={{ fontSize: 12, color: "#5a7a66", margin: 0 }}>📍 {t.city}</p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// // ── Featured Doctors ──
// function FeaturedDoctors() {
//     const sectionRef = useRef(null);
//     const cardsRef = useRef([]);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         cardsRef.current.forEach((el, i) => {
//                             if (el) setTimeout(() => {
//                                 el.style.opacity = "1";
//                                 el.style.transform = "translateY(0)";
//                             }, i * 120);
//                         });
//                         observer.unobserve(entry.target);
//                     }
//                 });
//             },
//             { threshold: 0.1 }
//         );
//         if (sectionRef.current) observer.observe(sectionRef.current);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div ref={sectionRef} style={{ marginBottom: 72 }}>
//             <div style={{ textAlign: "center", marginBottom: 40 }}>
//                 <span style={{
//                     display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56",
//                     border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px",
//                     fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12,
//                 }}>বিশেষজ্ঞ দল</span>
//                 <h2 style={{
//                     fontFamily: "'Noto Serif Bengali', serif",
//                     fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8,
//                 }}>জনপ্রিয় ডাক্তারগণ</h2>
//                 <p style={{ color: "#5a7a66", fontSize: 14 }}>আমাদের সর্বোচ্চ রেটিংপ্রাপ্ত বিশেষজ্ঞ ডাক্তারদের সাথে পরিচিত হন</p>
//                 <div style={{
//                     width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)",
//                     borderRadius: 4, margin: "12px auto 0",
//                 }} />
//             </div>

//             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
//                 {featuredDoctors.map((d, i) => (
//                     <div
//                         key={d.name}
//                         ref={(el) => (cardsRef.current[i] = el)}
//                         style={{
//                             background: "#fff", borderRadius: 22, padding: "28px 20px 24px",
//                             border: `1.5px solid ${d.color}18`,
//                             boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
//                             textAlign: "center", opacity: 0, transform: "translateY(30px)",
//                             transition: `all 0.6s cubic-bezier(0.34,1.2,0.64,1) ${i * 120}ms`,
//                             cursor: "pointer", position: "relative", overflow: "hidden",
//                         }}
//                         onMouseEnter={(e) => {
//                             e.currentTarget.style.transform = "translateY(-8px)";
//                             e.currentTarget.style.boxShadow = `0 20px 50px ${d.color}25`;
//                             e.currentTarget.style.borderColor = d.color;
//                         }}
//                         onMouseLeave={(e) => {
//                             e.currentTarget.style.transform = "translateY(0)";
//                             e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)";
//                             e.currentTarget.style.borderColor = `${d.color}18`;
//                         }}
//                     >
//                         <div style={{
//                             position: "absolute", top: 0, left: 0, right: 0, height: 4,
//                             background: d.color, borderRadius: "22px 22px 0 0", opacity: 0.7,
//                         }} />

//                         <div style={{
//                             width: 72, height: 72, borderRadius: "50%", background: d.bg,
//                             display: "flex", alignItems: "center", justifyContent: "center",
//                             fontSize: 26, fontWeight: 700, color: d.color,
//                             margin: "0 auto 16px",
//                             border: `3px solid ${d.color}30`,
//                             boxShadow: `0 8px 24px ${d.color}25`,
//                         }}>{d.avatar}</div>

//                         <p style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 15, fontWeight: 800, color: "#0d3b1e", margin: "0 0 4px" }}>
//                             {d.name}
//                         </p>
//                         <p style={{ fontSize: 12, color: "#5a7a66", margin: "0 0 16px" }}>{d.spec}</p>

//                         <div style={{
//                             display: "flex", justifyContent: "center", gap: 12,
//                             marginBottom: 16, flexWrap: "wrap",
//                         }}>
//                             <div style={{
//                                 background: `${d.color}10`, borderRadius: 50,
//                                 padding: "4px 10px", fontSize: 11, color: d.color, fontWeight: 600,
//                             }}>⭐ {d.rating}</div>
//                             <div style={{
//                                 background: "#f0f4f0", borderRadius: 50,
//                                 padding: "4px 10px", fontSize: 11, color: "#5a7a66", fontWeight: 600,
//                             }}>👥 {d.patients}</div>
//                         </div>

//                         <div style={{ fontSize: 11, color: "#5a7a66", marginBottom: 16 }}>
//                             অভিজ্ঞতা: {d.exp}
//                         </div>

//                         <Link to={`/search?specialization=${d.spec}`} style={{ textDecoration: "none" }}>
//                             <div
//                                 style={{
//                                     background: d.color, color: "#fff",
//                                     borderRadius: 50, padding: "10px 20px",
//                                     fontSize: 13, fontWeight: 700,
//                                     transition: "all 0.2s ease",
//                                     boxShadow: `0 4px 14px ${d.color}40`,
//                                 }}
//                                 onMouseEnter={(e) => {
//                                     e.currentTarget.style.opacity = "0.85";
//                                     e.currentTarget.style.transform = "scale(1.05)";
//                                 }}
//                                 onMouseLeave={(e) => {
//                                     e.currentTarget.style.opacity = "1";
//                                     e.currentTarget.style.transform = "scale(1)";
//                                 }}
//                             >
//                                 অ্যাপয়েন্টমেন্ট নিন
//                             </div>
//                         </Link>
//                     </div>
//                 ))}
//             </div>

//             <div style={{ textAlign: "center", marginTop: 32 }}>
//                 <Link to="/search" style={{ textDecoration: "none" }}>
//                     <div
//                         style={{
//                             display: "inline-flex", alignItems: "center", gap: 8,
//                             background: "transparent", color: "#2e9e56",
//                             border: "2px solid #2e9e56", borderRadius: 50,
//                             padding: "12px 28px", fontSize: 14, fontWeight: 700,
//                             transition: "all 0.2s ease",
//                         }}
//                         onMouseEnter={(e) => {
//                             e.currentTarget.style.background = "#2e9e56";
//                             e.currentTarget.style.color = "#fff";
//                         }}
//                         onMouseLeave={(e) => {
//                             e.currentTarget.style.background = "transparent";
//                             e.currentTarget.style.color = "#2e9e56";
//                         }}
//                     >
//                         সকল ডাক্তার দেখুন →
//                     </div>
//                 </Link>
//             </div>
//         </div>
//     );
// }

// // ── Home ──
// function Home() {
//     return (
//         <div style={{ fontFamily: "'Hind Siliguri', sans-serif", background: "#f7fbf9", minHeight: "100vh" }}>
//             <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Noto+Serif+Bengali:wght@700;800;900&display=swap" rel="stylesheet" />

//             {/* HERO */}
//             <section style={{
//                 position: "relative",
//                 background: "linear-gradient(160deg, #062210 0%, #0d3b1e 40%, #1a6b38 80%, #2e9e56 100%)",
//                 padding: "80px 24px 100px", textAlign: "center", overflow: "hidden",
//             }}>
//                 <div style={{
//                     position: "absolute", inset: 0,
//                     backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
//                     backgroundSize: "60px 60px", pointerEvents: "none",
//                 }} />
//                 <div style={{
//                     position: "absolute", width: 500, height: 500, borderRadius: "50%",
//                     background: "radial-gradient(circle, rgba(94,203,135,0.12) 0%, transparent 70%)",
//                     top: -150, right: -150, pointerEvents: "none",
//                 }} />

//                 <div style={{ position: "relative", zIndex: 2, maxWidth: 720, margin: "0 auto" }}>
//                     <div style={{
//                         display: "inline-flex", alignItems: "center", gap: 8,
//                         background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)",
//                         borderRadius: 50, padding: "7px 18px", fontSize: 13, color: "#a8e6c0",
//                         marginBottom: 28, backdropFilter: "blur(8px)",
//                     }}>
//                         <span style={{
//                             width: 7, height: 7, borderRadius: "50%",
//                             background: "#5ecb87", boxShadow: "0 0 8px #5ecb87", display: "inline-block",
//                         }} />
//                         বাংলাদেশের নির্ভরযোগ্য স্বাস্থ্যসেবা প্ল্যাটফর্ম
//                     </div>

//                     <h1 style={{
//                         fontFamily: "'Noto Serif Bengali', serif",
//                         fontSize: "clamp(2.6rem, 6vw, 4.6rem)",
//                         fontWeight: 900, color: "#fff", lineHeight: 1.15,
//                         letterSpacing: "-1px", marginBottom: 16,
//                         textShadow: "0 2px 12px rgba(0,0,0,0.2)",
//                     }}>
//                         সঠিক ডাক্তার,{" "}
//                         <span style={{
//                             background: "linear-gradient(135deg, #5ecb87, #f0c040)",
//                             WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                         }}>সঠিক সময়ে</span>
//                     </h1>

//                     <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, marginBottom: 40, lineHeight: 1.7 }}>
//                         বাংলাদেশের যেকোনো প্রান্তে বিশেষজ্ঞ ডাক্তার খুঁজুন —<br />
//                         সহজে, দ্রুত এবং বিশ্বস্তভাবে
//                     </p>

//                     <div style={{ display: "flex", justifyContent: "center", marginBottom: 52 }}>
//                         <SearchBar />
//                     </div>

//                     <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
//                         {stats.map((s, i) => (
//                             <div key={s.label} style={{
//                                 padding: "0 32px", textAlign: "center",
//                                 borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none",
//                             }}>
//                                 <div style={{
//                                     fontFamily: "'Noto Serif Bengali', serif",
//                                     fontSize: 26, fontWeight: 900, color: "#fff", marginBottom: 4,
//                                 }}>{s.value}</div>
//                                 <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{s.label}</div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Wave */}
//             <div style={{ marginTop: -2, lineHeight: 0, background: "#0d3b1e" }}>
//                 <svg viewBox="0 0 1200 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 70 }}>
//                     <path d="M0,35 C200,70 400,0 600,35 C800,70 1000,10 1200,35 L1200,70 L0,70 Z" fill="#f7fbf9" />
//                 </svg>
//             </div>

//             {/* CONTENT */}
//             <div style={{ maxWidth: 1060, margin: "0 auto", padding: "64px 24px 80px" }}>

//                 {/* Features Section Header */}
//                 <div style={{ textAlign: "center", marginBottom: 40 }}>
//                     <span style={{
//                         display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56",
//                         border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px",
//                         fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12,
//                     }}>কেন আমরা</span>
//                     <h2 style={{
//                         fontFamily: "'Noto Serif Bengali', serif",
//                         fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8,
//                     }}>আমাদের বিশেষত্ব</h2>
//                     <p style={{ color: "#5a7a66", fontSize: 14 }}>স্বাস্থ্য খোঁজি কেন বাংলাদেশের সেরা স্বাস্থ্যসেবা প্ল্যাটফর্ম</p>
//                     <div style={{
//                         width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)",
//                         borderRadius: 4, margin: "12px auto 0",
//                     }} />
//                 </div>

//                 <FeatureCards />
//                 <HowItWorks />

//                 {/* Specializations Section Header */}
//                 <div style={{ textAlign: "center", marginBottom: 40 }}>
//                     <span style={{
//                         display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56",
//                         border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px",
//                         fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12,
//                     }}>বিভাগসমূহ</span>
//                     <h2 style={{
//                         fontFamily: "'Noto Serif Bengali', serif",
//                         fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8,
//                     }}>বিশেষজ্ঞতা অনুযায়ী খুঁজুন</h2>
//                     <p style={{ color: "#5a7a66", fontSize: 14 }}>আপনার প্রয়োজন অনুযায়ী বিভাগ বেছে নিন</p>
//                     <div style={{
//                         width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)",
//                         borderRadius: 4, margin: "12px auto 0",
//                     }} />
//                 </div>

//                 <div style={{ marginBottom: 72 }}>
//                     <SpecializationGrid />
//                 </div>

//                 <FeaturedDoctors />
//                 <Testimonials />

//                 {/* CTA Banner */}
//                 <div style={{
//                     background: "linear-gradient(135deg, #0d3b1e 0%, #1a6b38 100%)",
//                     borderRadius: 24, padding: "44px 40px",
//                     display: "flex", alignItems: "center",
//                     justifyContent: "space-between", flexWrap: "wrap", gap: 20,
//                     boxShadow: "0 20px 60px rgba(13,59,30,0.3)",
//                     position: "relative", overflow: "hidden",
//                 }}>
//                     <div style={{
//                         position: "absolute", right: 160, top: "50%", transform: "translateY(-50%)",
//                         fontSize: 110, opacity: 0.06, pointerEvents: "none",
//                     }}>🏥</div>
//                     <div style={{ position: "relative" }}>
//                         <h3 style={{
//                             fontFamily: "'Noto Serif Bengali', serif",
//                             color: "#fff", fontSize: 22, fontWeight: 800, marginBottom: 6,
//                         }}>জরুরি সাহায্য দরকার?</h3>
//                         <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>
//                             আমাদের হেল্পলাইনে যোগাযোগ করুন — ২৪ ঘণ্টা, ৭ দিন
//                         </p>
//                     </div>
//                     <a href="tel:16000" style={{
//                         background: "#fff", color: "#0d3b1e",
//                         padding: "14px 32px", borderRadius: 50,
//                         fontWeight: 700, fontSize: 16, textDecoration: "none",
//                         flexShrink: 0, boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
//                         display: "inline-flex", alignItems: "center", gap: 8,
//                         transition: "all 0.2s ease",
//                     }}
//                         onMouseEnter={(e) => {
//                             e.currentTarget.style.transform = "translateY(-2px)";
//                             e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.3)";
//                         }}
//                         onMouseLeave={(e) => {
//                             e.currentTarget.style.transform = "translateY(0)";
//                             e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
//                         }}
//                     >
//                         📞 ১৬০০০ তে কল করুন
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// }
// import { Link } from "react-router-dom";
// import { useEffect, useRef, useState, useContext } from "react";
// import SearchBar from "../components/SearchBar";
// import { AuthContext } from "../context/AuthContext";

// const specializations = [
//     { name: "মেডিসিন", icon: "💊", bg: "linear-gradient(135deg, #e8f5e9, #c8e6c9)", accent: "#2e7d32", count: "১২০+" },
//     { name: "শিশু রোগ", icon: "👶", bg: "linear-gradient(135deg, #e3f2fd, #bbdefb)", accent: "#1565c0", count: "৮৫+" },
//     { name: "গাইনি", icon: "🌸", bg: "linear-gradient(135deg, #fce4ec, #f8bbd0)", accent: "#ad1457", count: "৭৪+" },
//     { name: "অর্থোপেডিক", icon: "🦴", bg: "linear-gradient(135deg, #fff8e1, #ffe082)", accent: "#f57f17", count: "৫২+" },
//     { name: "চর্মরোগ", icon: "🩹", bg: "linear-gradient(135deg, #f3e5f5, #e1bee7)", accent: "#6a1b9a", count: "৪৮+" },
//     { name: "চক্ষু", icon: "👁️", bg: "linear-gradient(135deg, #e0f7fa, #b2ebf2)", accent: "#00695c", count: "৩৯+" },
//     { name: "দন্ত রোগ", icon: "🦷", bg: "linear-gradient(135deg, #e8eaf6, #c5cae9)", accent: "#283593", count: "৬১+" },
//     { name: "মানসিক রোগ", icon: "🧠", bg: "linear-gradient(135deg, #e8f5e9, #a5d6a7)", accent: "#1b5e20", count: "৩৩+" },
// ];

// const features = [
//     { icon: "⚡", title: "তাৎক্ষণিক বুকিং", desc: "মাত্র ৩০ সেকেন্ডে অ্যাপয়েন্টমেন্ট নিন, কোনো অপেক্ষা নেই", color: "#2e7d32", bg: "#eef9f2" },
//     { icon: "✅", title: "যাচাইকৃত ডাক্তার", desc: "সকল ডাক্তার BMDC রেজিস্ট্রেশন যাচাইকৃত", color: "#1565c0", bg: "#e3f2fd" },
//     { icon: "💬", title: "অনলাইন পরামর্শ", desc: "ঘরে বসেই ভিডিও কলে ডাক্তারের সাথে কথা বলুন", color: "#ad1457", bg: "#fce4ec" },
//     { icon: "🔒", title: "সম্পূর্ণ নিরাপদ", desc: "আপনার তথ্য সম্পূর্ণ সুরক্ষিত এবং গোপনীয়", color: "#f57f17", bg: "#fff8e1" },
//     { icon: "🌍", title: "সারাদেশে সেবা", desc: "বাংলাদেশের ৬৪ জেলায় আমাদের ডাক্তার নেটওয়ার্ক", color: "#6a1b9a", bg: "#f3e5f5" },
//     { icon: "⭐", title: "রেটিং ও রিভিউ", desc: "হাজারো রোগীর রিভিউ দেখে সেরা ডাক্তার বেছে নিন", color: "#00695c", bg: "#e0f7fa" },
// ];

// const testimonials = [
//     { name: "রাহেলা বেগম", city: "ঢাকা", avatar: "র", color: "#2e7d32", bg: "#eef9f2", rating: 5, text: "মাত্র কয়েক মিনিটে অ্যাপয়েন্টমেন্ট নিলাম। ডাক্তার অনেক মনোযোগ দিয়ে শুনলেন, সত্যিই দারুণ অভিজ্ঞতা।" },
//     { name: "মো. করিম উদ্দিন", city: "চট্টগ্রাম", avatar: "ক", color: "#1565c0", bg: "#e3f2fd", rating: 5, text: "অনলাইনে পরামর্শ নেওয়া এত সহজ হবে ভাবিনি। সিলেট থেকে ঢাকার বিশেষজ্ঞ ডাক্তারের সাথে কথা বললাম।" },
//     { name: "সুমাইয়া আক্তার", city: "সিলেট", avatar: "স", color: "#ad1457", bg: "#fce4ec", rating: 5, text: "BMDC যাচাইকৃত দেখে ভরসা পেলাম। বাচ্চার জন্য শিশু বিশেষজ্ঞ খুব দ্রুত পেলাম।" },
//     { name: "আব্দুর রহমান", city: "রাজশাহী", avatar: "আ", color: "#f57f17", bg: "#fff8e1", rating: 5, text: "গ্রামে থেকেও শহরের ভালো ডাক্তার পাচ্ছি — এটাই সবচেয়ে বড় সুবিধা এই প্ল্যাটফর্মের।" },
//     { name: "নাসরিন সুলতানা", city: "খুলনা", avatar: "ন", color: "#6a1b9a", bg: "#f3e5f5", rating: 5, text: "রিভিউ দেখে ডাক্তার বেছে নেওয়া খুব সহজ হয়েছে। পরিষেবাটি সত্যিই বিশ্বস্ত।" },
//     { name: "তানভীর হোসেন", city: "বরিশাল", avatar: "ত", color: "#00695c", bg: "#e0f7fa", rating: 5, text: "হেল্পলাইনে কল করলাম, সাথে সাথে সাহায্য পেলাম। রাত ১১টায়ও সেবা পেলাম।" },
// ];

// const featuredDoctors = [
//     { name: "ডা. আহমেদ হোসেন", spec: "মেডিসিন বিশেষজ্ঞ", exp: "১৫ বছর", rating: "৪.৯", patients: "২,৪০০+", avatar: "আ", color: "#2e7d32", bg: "#eef9f2" },
//     { name: "ডা. সালমা খানম", spec: "শিশু রোগ বিশেষজ্ঞ", exp: "১২ বছর", rating: "৪.৮", patients: "১,৮০০+", avatar: "স", color: "#1565c0", bg: "#e3f2fd" },
//     { name: "ডা. ফারহান করিম", spec: "হৃদরোগ বিশেষজ্ঞ", exp: "২০ বছর", rating: "৪.৯", patients: "৩,১০০+", avatar: "ফ", color: "#ad1457", bg: "#fce4ec" },
//     { name: "ডা. নুসরাত জাহান", spec: "গাইনি বিশেষজ্ঞ", exp: "১০ বছর", rating: "৪.৭", patients: "১,৫০০+", avatar: "ন", color: "#f57f17", bg: "#fff8e1" },
// ];

// const symptomMap = {
//     "জ্বর": { spec: "মেডিসিন", icon: "💊", color: "#2e7d32", bg: "#eef9f2" },
//     "মাথাব্যথা": { spec: "মেডিসিন", icon: "💊", color: "#2e7d32", bg: "#eef9f2" },
//     "বুকে ব্যথা": { spec: "হৃদরোগ", icon: "❤️", color: "#ad1457", bg: "#fce4ec" },
//     "শ্বাসকষ্ট": { spec: "মেডিসিন", icon: "💊", color: "#2e7d32", bg: "#eef9f2" },
//     "পেটে ব্যথা": { spec: "মেডিসিন", icon: "💊", color: "#2e7d32", bg: "#eef9f2" },
//     "চোখে সমস্যা": { spec: "চক্ষু", icon: "👁️", color: "#00695c", bg: "#e0f7fa" },
//     "দাঁতে ব্যথা": { spec: "দন্ত রোগ", icon: "🦷", color: "#283593", bg: "#e8eaf6" },
//     "ত্বকে র‍্যাশ": { spec: "চর্মরোগ", icon: "🩹", color: "#6a1b9a", bg: "#f3e5f5" },
//     "হাড়ে ব্যথা": { spec: "অর্থোপেডিক", icon: "🦴", color: "#f57f17", bg: "#fff8e1" },
//     "শিশুর সমস্যা": { spec: "শিশু রোগ", icon: "👶", color: "#1565c0", bg: "#e3f2fd" },
//     "মহিলা সমস্যা": { spec: "গাইনি", icon: "🌸", color: "#ad1457", bg: "#fce4ec" },
//     "মানসিক চাপ": { spec: "মানসিক রোগ", icon: "🧠", color: "#1b5e20", bg: "#e8f5e9" },
// };

// const allSymptoms = Object.keys(symptomMap);

// // ── Voice helper ──────────────────────────────────────────────────────────────
// function playVoice(text) {
//     if (!window.speechSynthesis) return;
//     window.speechSynthesis.cancel();

//     const utter = new SpeechSynthesisUtterance(text);
//     utter.lang = "bn-BD";
//     utter.rate = 0.88;
//     utter.pitch = 1.05;
//     utter.volume = 1;

//     const trySpeak = () => {
//         const voices = window.speechSynthesis.getVoices();
//         const voice =
//             voices.find((v) => v.lang === "bn-BD") ||
//             voices.find((v) => v.lang === "bn-IN") ||
//             voices.find((v) => v.lang.startsWith("bn")) ||
//             voices.find((v) => v.lang.startsWith("hi")) ||
//             null;
//         if (voice) utter.voice = voice;
//         window.speechSynthesis.speak(utter);
//     };

//     if (window.speechSynthesis.getVoices().length > 0) {
//         trySpeak();
//     } else {
//         window.speechSynthesis.onvoiceschanged = () => {
//             window.speechSynthesis.onvoiceschanged = null;
//             trySpeak();
//         };
//         setTimeout(trySpeak, 300);
//     }
// }

// // ── Welcome Voice Popup ───────────────────────────────────────────────────────
// function WelcomeVoicePopup({ onClose }) {
//     const handleStart = () => {
//         playVoice("স্বাস্থ্য খোঁজিতে আপনাকে স্বাগতম। আপনার পছন্দের ডাক্তার খুঁজুন সহজেই।");
//         onClose();
//     };

//     return (
//         <div style={{
//             position: "fixed", inset: 0,
//             background: "rgba(0,0,0,0.5)",
//             zIndex: 9999,
//             display: "flex", alignItems: "center", justifyContent: "center",
//             padding: 16,
//         }}>
//             <div style={{
//                 background: "#fff", borderRadius: 24,
//                 padding: "40px 32px", maxWidth: 380, width: "100%",
//                 textAlign: "center",
//                 boxShadow: "0 24px 80px rgba(0,0,0,0.18)",
//                 animation: "popIn 0.35s cubic-bezier(0.34,1.56,0.64,1)",
//             }}>
//                 <div style={{ fontSize: 52, marginBottom: 14 }}>🏥</div>
//                 <h2 style={{
//                     fontFamily: "'Noto Serif Bengali', serif",
//                     fontSize: 22, color: "#0d3b1e", margin: "0 0 10px",
//                 }}>স্বাস্থ্য খোঁজিতে স্বাগতম!</h2>
//                 <p style={{
//                     fontFamily: "'Hind Siliguri', sans-serif",
//                     color: "#5a7a66", fontSize: 14,
//                     marginBottom: 28, lineHeight: 1.7,
//                 }}>
//                     আপনার স্বাস্থ্যসেবার বিশ্বস্ত সঙ্গী।<br />
//                     শুরু করতে নিচের বাটনে চাপুন।
//                 </p>
//                 <button onClick={handleStart} style={{
//                     width: "100%", padding: "14px",
//                     borderRadius: 50, border: "none",
//                     background: "linear-gradient(135deg, #2e9e56, #1a6b38)",
//                     color: "#fff",
//                     fontFamily: "'Hind Siliguri', sans-serif",
//                     fontSize: 16, fontWeight: 700,
//                     cursor: "pointer", marginBottom: 12,
//                     boxShadow: "0 6px 20px rgba(46,158,86,0.35)",
//                 }}>
//                     🔊 শুরু করুন
//                 </button>
//                 <button onClick={onClose} style={{
//                     background: "none", border: "none",
//                     color: "#9ca3af",
//                     fontFamily: "'Hind Siliguri', sans-serif",
//                     fontSize: 13, cursor: "pointer", textDecoration: "underline",
//                 }}>
//                     এড়িয়ে যান
//                 </button>
//             </div>
//             <style>{`
//                 @keyframes popIn {
//                     from { transform: scale(0.8); opacity: 0; }
//                     to   { transform: scale(1);   opacity: 1; }
//                 }
//             `}</style>
//         </div>
//     );
// }

// // ── 1. Live Stats Counter ─────────────────────────────────────────────────────
// function LiveStatsCounter() {
//     const statsData = [
//         { value: 500, suffix: "+", label: "বিশেষজ্ঞ ডাক্তার" },
//         { value: 64, suffix: "", label: "জেলায় সেবা" },
//         { value: 10, suffix: " লাখ+", label: "রোগী সেবা পেয়েছেন" },
//     ];
//     const countersRef = useRef([]);
//     const sectionRef = useRef(null);
//     const hasAnimated = useRef(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 if (entries[0].isIntersecting && !hasAnimated.current) {
//                     hasAnimated.current = true;
//                     countersRef.current.forEach((el, i) => {
//                         if (!el) return;
//                         const target = statsData[i].value;
//                         const suffix = statsData[i].suffix;
//                         const duration = 2000;
//                         const steps = 60;
//                         const increment = target / steps;
//                         let current = 0;
//                         const timer = setInterval(() => {
//                             current += increment;
//                             if (current >= target) { current = target; clearInterval(timer); }
//                             const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
//                             const num = Math.floor(current).toString().replace(/\d/g, d => banglaDigits[d]);
//                             el.textContent = num + suffix;
//                         }, duration / steps);
//                     });
//                 }
//             },
//             { threshold: 0.5 }
//         );
//         if (sectionRef.current) observer.observe(sectionRef.current);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div ref={sectionRef} style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
//             {statsData.map((s, i) => (
//                 <div key={s.label} style={{
//                     padding: "0 32px", textAlign: "center",
//                     borderRight: i < statsData.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none",
//                 }}>
//                     <div ref={(el) => (countersRef.current[i] = el)} style={{
//                         fontFamily: "'Noto Serif Bengali', serif",
//                         fontSize: 26, fontWeight: 900, color: "#fff", marginBottom: 4,
//                     }}>০</div>
//                     <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{s.label}</div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// // ── 2. AI Symptom Checker ─────────────────────────────────────────────────────
// function AISymptomChecker() {
//     const [selected, setSelected] = useState([]);
//     const [result, setResult] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const sectionRef = useRef(null);

//     const toggleSymptom = (sym) => {
//         setSelected(prev => prev.includes(sym) ? prev.filter(s => s !== sym) : [...prev, sym]);
//         setResult(null);
//     };

//     const analyze = () => {
//         if (selected.length === 0) return;
//         setLoading(true);
//         setResult(null);
//         setTimeout(() => {
//             const specCount = {};
//             selected.forEach(sym => {
//                 const s = symptomMap[sym]?.spec;
//                 if (s) specCount[s] = (specCount[s] || 0) + 1;
//             });
//             const topSpec = Object.entries(specCount).sort((a, b) => b[1] - a[1])[0]?.[0];
//             const matched = Object.values(symptomMap).find(v => v.spec === topSpec);
//             const res = { spec: topSpec, ...matched };
//             setResult(res);
//             setLoading(false);
//             playVoice(`আপনার লক্ষণ অনুযায়ী ${topSpec} বিশেষজ্ঞ ডাক্তারের পরামর্শ নেওয়া উচিত।`);
//         }, 1200);
//     };

//     const reset = () => {
//         setSelected([]);
//         setResult(null);
//         window.speechSynthesis?.cancel();
//     };

//     useEffect(() => {
//         const el = sectionRef.current;
//         if (!el) return;
//         el.style.opacity = "0";
//         el.style.transform = "translateY(40px)";
//         const observer = new IntersectionObserver(([entry]) => {
//             if (entry.isIntersecting) {
//                 el.style.transition = "all 0.7s cubic-bezier(0.34,1.2,0.64,1)";
//                 el.style.opacity = "1";
//                 el.style.transform = "translateY(0)";
//                 observer.unobserve(el);
//             }
//         }, { threshold: 0.15 });
//         observer.observe(el);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div ref={sectionRef} style={{ marginBottom: 72 }}>
//             <div style={{ textAlign: "center", marginBottom: 40 }}>
//                 <span style={{ display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56", border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px", fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12 }}>AI সহায়তা</span>
//                 <h2 style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8 }}>লক্ষণ দিয়ে ডাক্তার খুঁজুন</h2>
//                 <p style={{ color: "#5a7a66", fontSize: 14 }}>আপনার সমস্যা বেছে নিন — AI আপনাকে সঠিক বিশেষজ্ঞ সাজেস্ট করবে</p>
//                 <div style={{ width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)", borderRadius: 4, margin: "12px auto 0" }} />
//             </div>

//             <div style={{ background: "#fff", borderRadius: 28, boxShadow: "0 8px 40px rgba(13,59,30,0.10)", border: "1.5px solid #e0f0e8", overflow: "hidden" }}>
//                 <div style={{ height: 5, background: "linear-gradient(90deg, #2e9e56, #5ecb87, #f0c040)" }} />
//                 <div style={{ padding: "36px 36px 32px" }}>
//                     <p style={{ fontSize: 13, fontWeight: 600, color: "#5a7a66", marginBottom: 16 }}>
//                         🩺 আপনার লক্ষণ বেছে নিন (একাধিক সিলেক্ট করতে পারবেন):
//                     </p>
//                     <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
//                         {allSymptoms.map(sym => {
//                             const isSelected = selected.includes(sym);
//                             const info = symptomMap[sym];
//                             return (
//                                 <button key={sym} onClick={() => toggleSymptom(sym)} style={{
//                                     padding: "9px 18px", borderRadius: 50,
//                                     border: `2px solid ${isSelected ? info.color : "#d4e8da"}`,
//                                     background: isSelected ? info.color : "#fff",
//                                     color: isSelected ? "#fff" : "#3a5a46",
//                                     fontSize: 13, fontWeight: 600, cursor: "pointer",
//                                     transition: "all 0.2s cubic-bezier(0.34,1.56,0.64,1)",
//                                     transform: isSelected ? "scale(1.06)" : "scale(1)",
//                                     boxShadow: isSelected ? `0 4px 16px ${info.color}40` : "none",
//                                     fontFamily: "'Hind Siliguri', sans-serif",
//                                 }}>{sym}</button>
//                             );
//                         })}
//                     </div>

//                     {selected.length > 0 && (
//                         <p style={{ fontSize: 12, color: "#2e9e56", marginBottom: 16, fontWeight: 600 }}>
//                             ✅ {selected.length}টি লক্ষণ বেছেছেন: {selected.join(", ")}
//                         </p>
//                     )}

//                     <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
//                         <button onClick={analyze} disabled={selected.length === 0 || loading} style={{
//                             background: selected.length === 0 ? "#ccc" : "linear-gradient(135deg, #2e9e56, #1a6b38)",
//                             color: "#fff", border: "none", borderRadius: 50,
//                             padding: "13px 32px", fontSize: 14, fontWeight: 700,
//                             cursor: selected.length === 0 ? "not-allowed" : "pointer",
//                             boxShadow: selected.length > 0 ? "0 6px 20px rgba(46,158,86,0.35)" : "none",
//                             transition: "all 0.2s ease", fontFamily: "'Hind Siliguri', sans-serif",
//                         }}>
//                             {loading ? "⏳ বিশ্লেষণ হচ্ছে..." : "🔍 ডাক্তার খুঁজুন"}
//                         </button>
//                         {selected.length > 0 && (
//                             <button onClick={reset} style={{
//                                 background: "transparent", color: "#5a7a66",
//                                 border: "1.5px solid #d4e8da", borderRadius: 50,
//                                 padding: "12px 22px", fontSize: 13, fontWeight: 600,
//                                 cursor: "pointer", fontFamily: "'Hind Siliguri', sans-serif",
//                             }}>রিসেট করুন</button>
//                         )}
//                     </div>

//                     {loading && (
//                         <div style={{ marginTop: 28, padding: "24px", background: "#f7fbf9", borderRadius: 18, textAlign: "center" }}>
//                             <div style={{ display: "inline-block", width: 36, height: 36, border: "3px solid #e0f0e8", borderTop: "3px solid #2e9e56", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
//                             <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
//                             <p style={{ marginTop: 12, color: "#5a7a66", fontSize: 13 }}>আপনার লক্ষণ বিশ্লেষণ করা হচ্ছে...</p>
//                         </div>
//                     )}

//                     {result && !loading && (
//                         <div style={{ marginTop: 28, background: `linear-gradient(135deg, ${result.bg}, #fff)`, border: `2px solid ${result.color}30`, borderRadius: 20, padding: "28px", animation: "fadeInUp 0.5s ease" }}>
//                             <style>{`@keyframes fadeInUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }`}</style>
//                             <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
//                                 <div style={{ width: 56, height: 56, borderRadius: 16, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, boxShadow: `0 6px 20px ${result.color}25`, border: `2px solid ${result.color}20` }}>{result.icon}</div>
//                                 <div>
//                                     <p style={{ fontSize: 11, color: result.color, fontWeight: 700, margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.5px" }}>AI সাজেশন</p>
//                                     <p style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 20, fontWeight: 800, color: "#0d3b1e", margin: 0 }}>{result.spec} বিশেষজ্ঞ</p>
//                                 </div>
//                             </div>
//                             <p style={{ fontSize: 13, color: "#5a7a66", marginBottom: 20, lineHeight: 1.7 }}>
//                                 আপনার লক্ষণ অনুযায়ী <strong style={{ color: result.color }}>{result.spec} বিশেষজ্ঞ</strong> ডাক্তারের পরামর্শ নেওয়া উচিত।
//                             </p>
//                             <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
//                                 <Link to={`/search?specialization=${result.spec}`} style={{ textDecoration: "none" }}>
//                                     <div style={{ background: result.color, color: "#fff", borderRadius: 50, padding: "11px 24px", fontSize: 13, fontWeight: 700, boxShadow: `0 4px 16px ${result.color}40`, cursor: "pointer" }}>এখনই ডাক্তার দেখুন →</div>
//                                 </Link>
//                                 <div style={{ background: "rgba(255,255,255,0.8)", border: `1.5px solid ${result.color}30`, color: result.color, borderRadius: 50, padding: "10px 20px", fontSize: 12, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>⚠️ এটি AI সাজেশন, চিকিৎসকের পরামর্শই চূড়ান্ত</div>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// // ── Feature Cards ─────────────────────────────────────────────────────────────
// function FeatureCards() {
//     const cardsRef = useRef([]);
//     useEffect(() => {
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     entry.target.style.opacity = "1";
//                     entry.target.style.transform = "translateY(0) scale(1)";
//                 }
//             });
//         }, { threshold: 0.15 });
//         cardsRef.current.forEach((card) => { if (card) observer.observe(card); });
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20, marginBottom: 72 }}>
//             {features.map((f, i) => (
//                 <div key={f.title} ref={(el) => (cardsRef.current[i] = el)} style={{
//                     background: "#fff", borderRadius: 22, padding: "32px 24px",
//                     border: `1.5px solid ${f.color}20`, boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
//                     opacity: 0, transform: "translateY(40px) scale(0.96)",
//                     transition: `all 0.6s cubic-bezier(0.34,1.2,0.64,1) ${i * 80}ms`,
//                     cursor: "default", position: "relative", overflow: "hidden",
//                 }}
//                     onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-8px) scale(1.03)"; e.currentTarget.style.boxShadow = `0 20px 50px ${f.color}25`; e.currentTarget.style.borderColor = f.color; }}
//                     onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)"; e.currentTarget.style.borderColor = `${f.color}20`; }}
//                 >
//                     <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${f.color}, ${f.color}80)`, borderRadius: "22px 22px 0 0" }} />
//                     <div style={{ width: 60, height: 60, borderRadius: 16, background: f.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, marginBottom: 18, boxShadow: `0 6px 20px ${f.color}20` }}>{f.icon}</div>
//                     <div style={{ fontWeight: 700, fontSize: 16, color: "#0d3b1e", marginBottom: 8 }}>{f.title}</div>
//                     <div style={{ fontSize: 13, color: "#5a7a66", lineHeight: 1.7 }}>{f.desc}</div>
//                     <div style={{ position: "absolute", bottom: 16, right: 16, width: 8, height: 8, borderRadius: "50%", background: f.color, opacity: 0.4 }} />
//                 </div>
//             ))}
//         </div>
//     );
// }

// // ── Specialization Grid ───────────────────────────────────────────────────────
// function SpecializationGrid() {
//     const gridRef = useRef(null);
//     useEffect(() => {
//         const cards = gridRef.current?.querySelectorAll(".spec-card");
//         if (!cards) return;
//         cards.forEach((card, i) => {
//             const fromLeft = i < 4;
//             card.style.opacity = "0";
//             card.style.transform = `translateX(${fromLeft ? "-120px" : "120px"}) scale(0.92)`;
//             card.style.transition = `transform 0.6s cubic-bezier(0.34,1.2,0.64,1), opacity 0.5s ease`;
//         });
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     cards.forEach((card, i) => {
//                         const fromLeft = i < 4;
//                         const staggerIndex = fromLeft ? i : 7 - i;
//                         setTimeout(() => { card.style.opacity = "1"; card.style.transform = "translateX(0) scale(1)"; }, staggerIndex * 90);
//                     });
//                     observer.unobserve(entry.target);
//                 }
//             });
//         }, { threshold: 0.1 });
//         if (gridRef.current) observer.observe(gridRef.current);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div ref={gridRef} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
//             {specializations.map((s) => (
//                 <Link key={s.name} to={`/search?specialization=${s.name}`} style={{ textDecoration: "none" }}>
//                     <div className="spec-card" style={{
//                         background: "#fff", borderRadius: 22, padding: "32px 16px 24px",
//                         textAlign: "center", border: "1.5px solid #e0f0e8", cursor: "pointer",
//                         boxShadow: "0 4px 16px rgba(0,0,0,0.05)", position: "relative", overflow: "hidden",
//                         transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease, border-color 0.2s",
//                     }}
//                         onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-8px) scale(1.04)"; e.currentTarget.style.boxShadow = `0 20px 50px rgba(26,107,56,0.18)`; e.currentTarget.style.borderColor = s.accent; }}
//                         onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)"; e.currentTarget.style.borderColor = "#e0f0e8"; }}
//                     >
//                         <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: s.accent, borderRadius: "22px 22px 0 0", opacity: 0.7 }} />
//                         <div style={{ width: 68, height: 68, borderRadius: 20, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, margin: "0 auto 16px", boxShadow: "0 6px 20px rgba(0,0,0,0.08)" }}>{s.icon}</div>
//                         <p style={{ fontSize: 14, fontWeight: 700, color: "#0d3b1e", margin: "0 0 6px" }}>{s.name}</p>
//                         <div style={{ display: "inline-flex", alignItems: "center", gap: 4, background: `${s.accent}15`, border: `1px solid ${s.accent}30`, borderRadius: 50, padding: "3px 10px", fontSize: 11, fontWeight: 600, color: s.accent }}>{s.count} ডাক্তার</div>
//                     </div>
//                 </Link>
//             ))}
//         </div>
//     );
// }

// // ── How It Works ──────────────────────────────────────────────────────────────
// function HowItWorks() {
//     const steps = [
//         { icon: "🔍", step: "০১", title: "ডাক্তার খুঁজুন", desc: "বিভাগ, নাম বা এলাকা দিয়ে আপনার পছন্দের বিশেষজ্ঞ খুঁজুন", color: "#2e7d32", bg: "#eef9f2", to: "/search", btnLabel: "এখনই খুঁজুন →" },
//         { icon: "📅", step: "০২", title: "অ্যাপয়েন্টমেন্ট নিন", desc: "আপনার সুবিধামতো সময় ও তারিখ বেছে নিয়ে বুকিং করুন", color: "#1565c0", bg: "#e3f2fd", to: "/search", btnLabel: "বুকিং করুন →" },
//         { icon: "💊", step: "০৩", title: "পরামর্শ ও চিকিৎসা", desc: "সরাসরি বা অনলাইনে ডাক্তারের পরামর্শ নিন এবং সুস্থ থাকুন", color: "#ad1457", bg: "#fce4ec", to: "/search?mode=online", btnLabel: "পরামর্শ নিন →" },
//     ];
//     const sectionRef = useRef(null);
//     const stepsRef = useRef([]);
//     useEffect(() => {
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     stepsRef.current.forEach((el, i) => { if (el) setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, i * 150); });
//                     observer.unobserve(entry.target);
//                 }
//             });
//         }, { threshold: 0.2 });
//         if (sectionRef.current) observer.observe(sectionRef.current);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div ref={sectionRef} style={{ marginBottom: 72 }}>
//             <div style={{ textAlign: "center", marginBottom: 40 }}>
//                 <span style={{ display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56", border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px", fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12 }}>কিভাবে কাজ করে</span>
//                 <h2 style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8 }}>মাত্র ৩টি সহজ ধাপে</h2>
//                 <p style={{ color: "#5a7a66", fontSize: 14 }}>শুরু থেকে চিকিৎসা পর্যন্ত — সবকিছু এক জায়গায়</p>
//                 <div style={{ width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)", borderRadius: 4, margin: "12px auto 0" }} />
//             </div>
//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, position: "relative" }}>
//                 <div style={{ position: "absolute", top: 52, left: "16.5%", right: "16.5%", height: 2, background: "linear-gradient(90deg, #2e7d32, #1565c0, #ad1457)", opacity: 0.2, zIndex: 0 }} />
//                 {steps.map((s, i) => (
//                     <div key={s.step} ref={(el) => (stepsRef.current[i] = el)} style={{
//                         background: "#fff", borderRadius: 24, padding: "36px 24px 28px",
//                         border: `1.5px solid ${s.color}18`, boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
//                         textAlign: "center", position: "relative", zIndex: 1,
//                         opacity: 0, transform: "translateY(30px)",
//                         transition: `all 0.6s cubic-bezier(0.34,1.2,0.64,1) ${i * 150}ms`,
//                     }}
//                         onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = `0 20px 50px ${s.color}20`; e.currentTarget.style.borderColor = s.color; }}
//                         onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)"; e.currentTarget.style.borderColor = `${s.color}18`; }}
//                     >
//                         <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: s.color, color: "#fff", borderRadius: 50, width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, boxShadow: `0 4px 12px ${s.color}40` }}>{i + 1}</div>
//                         <div style={{ width: 80, height: 80, borderRadius: 24, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, margin: "0 auto 20px", boxShadow: `0 8px 24px ${s.color}20` }}>{s.icon}</div>
//                         <p style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 17, fontWeight: 800, color: "#0d3b1e", marginBottom: 10 }}>{s.title}</p>
//                         <p style={{ fontSize: 13, color: "#5a7a66", lineHeight: 1.7, margin: "0 0 20px" }}>{s.desc}</p>
//                         <Link to={s.to} style={{ textDecoration: "none" }}>
//                             <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: s.color, color: "#fff", borderRadius: 50, padding: "11px 22px", fontSize: 13, fontWeight: 700, cursor: "pointer", boxShadow: `0 4px 14px ${s.color}40`, transition: "all 0.2s ease", fontFamily: "'Hind Siliguri', sans-serif" }}
//                                 onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.07)"; }}
//                                 onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
//                             >{s.btnLabel}</div>
//                         </Link>
//                         <div style={{ marginTop: 16, display: "inline-flex", alignItems: "center", gap: 4, background: `${s.color}12`, border: `1px solid ${s.color}25`, borderRadius: 50, padding: "4px 14px", fontSize: 11, fontWeight: 600, color: s.color }}>ধাপ {s.step}</div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// // ── Testimonials ──────────────────────────────────────────────────────────────
// function Testimonials() {
//     const sectionRef = useRef(null);
//     const cardsRef = useRef([]);
//     useEffect(() => {
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     cardsRef.current.forEach((el, i) => { if (el) setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0) scale(1)"; }, i * 100); });
//                     observer.unobserve(entry.target);
//                 }
//             });
//         }, { threshold: 0.1 });
//         if (sectionRef.current) observer.observe(sectionRef.current);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div ref={sectionRef} style={{ marginBottom: 72 }}>
//             <div style={{ textAlign: "center", marginBottom: 40 }}>
//                 <span style={{ display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56", border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px", fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12 }}>রোগীর কথা</span>
//                 <h2 style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8 }}>তারা কী বলছেন</h2>
//                 <p style={{ color: "#5a7a66", fontSize: 14 }}>হাজারো সন্তুষ্ট রোগীর মধ্যে কিছু অভিজ্ঞতা</p>
//                 <div style={{ width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)", borderRadius: 4, margin: "12px auto 0" }} />
//             </div>
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
//                 {testimonials.map((t, i) => (
//                     <div key={t.name} ref={(el) => (cardsRef.current[i] = el)} style={{
//                         background: "#fff", borderRadius: 22, padding: "28px 24px",
//                         border: `1.5px solid ${t.color}18`, boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
//                         opacity: 0, transform: "translateY(30px) scale(0.97)",
//                         transition: `all 0.55s cubic-bezier(0.34,1.2,0.64,1) ${i * 100}ms`, position: "relative",
//                     }}
//                         onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px) scale(1.02)"; e.currentTarget.style.boxShadow = `0 16px 40px ${t.color}20`; e.currentTarget.style.borderColor = t.color; }}
//                         onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)"; e.currentTarget.style.borderColor = `${t.color}18`; }}
//                     >
//                         <div style={{ position: "absolute", top: 16, right: 20, fontSize: 48, color: `${t.color}15`, lineHeight: 1, fontFamily: "Georgia, serif", fontWeight: 900 }}>"</div>
//                         <div style={{ fontSize: 14, marginBottom: 14, color: "#f0c040" }}>{"★".repeat(t.rating)}</div>
//                         <p style={{ fontSize: 14, color: "#3a5a46", lineHeight: 1.8, marginBottom: 20, fontStyle: "italic" }}>"{t.text}"</p>
//                         <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//                             <div style={{ width: 42, height: 42, borderRadius: "50%", background: t.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700, color: t.color, border: `2px solid ${t.color}30` }}>{t.avatar}</div>
//                             <div>
//                                 <p style={{ fontSize: 14, fontWeight: 700, color: "#0d3b1e", margin: 0 }}>{t.name}</p>
//                                 <p style={{ fontSize: 12, color: "#5a7a66", margin: 0 }}>📍 {t.city}</p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// // ── Featured Doctors ──────────────────────────────────────────────────────────
// function FeaturedDoctors() {
//     const sectionRef = useRef(null);
//     const cardsRef = useRef([]);
//     useEffect(() => {
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     cardsRef.current.forEach((el, i) => { if (el) setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, i * 120); });
//                     observer.unobserve(entry.target);
//                 }
//             });
//         }, { threshold: 0.1 });
//         if (sectionRef.current) observer.observe(sectionRef.current);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div ref={sectionRef} style={{ marginBottom: 72 }}>
//             <div style={{ textAlign: "center", marginBottom: 40 }}>
//                 <span style={{ display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56", border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px", fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12 }}>বিশেষজ্ঞ দল</span>
//                 <h2 style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8 }}>জনপ্রিয় ডাক্তারগণ</h2>
//                 <p style={{ color: "#5a7a66", fontSize: 14 }}>আমাদের সর্বোচ্চ রেটিংপ্রাপ্ত বিশেষজ্ঞ ডাক্তারদের সাথে পরিচিত হন</p>
//                 <div style={{ width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)", borderRadius: 4, margin: "12px auto 0" }} />
//             </div>
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
//                 {featuredDoctors.map((d, i) => (
//                     <div key={d.name} ref={(el) => (cardsRef.current[i] = el)} style={{
//                         background: "#fff", borderRadius: 22, padding: "28px 20px 24px",
//                         border: `1.5px solid ${d.color}18`, boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
//                         textAlign: "center", opacity: 0, transform: "translateY(30px)",
//                         transition: `all 0.6s cubic-bezier(0.34,1.2,0.64,1) ${i * 120}ms`,
//                         cursor: "pointer", position: "relative", overflow: "hidden",
//                     }}
//                         onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = `0 20px 50px ${d.color}25`; e.currentTarget.style.borderColor = d.color; }}
//                         onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)"; e.currentTarget.style.borderColor = `${d.color}18`; }}
//                     >
//                         <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: d.color, borderRadius: "22px 22px 0 0", opacity: 0.7 }} />
//                         <div style={{ width: 72, height: 72, borderRadius: "50%", background: d.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, fontWeight: 700, color: d.color, margin: "0 auto 16px", border: `3px solid ${d.color}30`, boxShadow: `0 8px 24px ${d.color}25` }}>{d.avatar}</div>
//                         <p style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 15, fontWeight: 800, color: "#0d3b1e", margin: "0 0 4px" }}>{d.name}</p>
//                         <p style={{ fontSize: 12, color: "#5a7a66", margin: "0 0 16px" }}>{d.spec}</p>
//                         <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
//                             <div style={{ background: `${d.color}10`, borderRadius: 50, padding: "4px 10px", fontSize: 11, color: d.color, fontWeight: 600 }}>⭐ {d.rating}</div>
//                             <div style={{ background: "#f0f4f0", borderRadius: 50, padding: "4px 10px", fontSize: 11, color: "#5a7a66", fontWeight: 600 }}>👥 {d.patients}</div>
//                         </div>
//                         <div style={{ fontSize: 11, color: "#5a7a66", marginBottom: 16 }}>অভিজ্ঞতা: {d.exp}</div>
//                         <Link to={`/search?specialization=${d.spec}`} style={{ textDecoration: "none" }}>
//                             <div style={{ background: d.color, color: "#fff", borderRadius: 50, padding: "10px 20px", fontSize: 13, fontWeight: 700, transition: "all 0.2s ease", boxShadow: `0 4px 14px ${d.color}40` }}
//                                 onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "scale(1.05)"; }}
//                                 onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1)"; }}
//                             >অ্যাপয়েন্টমেন্ট নিন</div>
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//             <div style={{ textAlign: "center", marginTop: 32 }}>
//                 <Link to="/search" style={{ textDecoration: "none" }}>
//                     <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "#2e9e56", border: "2px solid #2e9e56", borderRadius: 50, padding: "12px 28px", fontSize: 14, fontWeight: 700, transition: "all 0.2s ease" }}
//                         onMouseEnter={(e) => { e.currentTarget.style.background = "#2e9e56"; e.currentTarget.style.color = "#fff"; }}
//                         onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#2e9e56"; }}
//                     >সকল ডাক্তার দেখুন →</div>
//                 </Link>
//             </div>
//         </div>
//     );
// }

// // ── Home ──────────────────────────────────────────────────────────────────────
// function Home() {
//     const { user } = useContext(AuthContext);
//     const [showPopup, setShowPopup] = useState(false);

//     useEffect(() => {
//         // admin হলে popup দেখাবে না
//         if (user?.role === "admin") return;
//         const timer = setTimeout(() => setShowPopup(true), 600);
//         return () => clearTimeout(timer);
//     }, [user]);

//     return (
//         <div style={{ fontFamily: "'Hind Siliguri', sans-serif", background: "#f7fbf9", minHeight: "100vh" }}>
//             <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Noto+Serif+Bengali:wght@700;800;900&display=swap" rel="stylesheet" />

//             {/* Welcome Voice Popup — admin হলে আসবে না */}
//             {showPopup && <WelcomeVoicePopup onClose={() => setShowPopup(false)} />}

//             {/* HERO */}
//             <section style={{
//                 position: "relative",
//                 background: "linear-gradient(160deg, #062210 0%, #0d3b1e 40%, #1a6b38 80%, #2e9e56 100%)",
//                 padding: "80px 24px 100px", textAlign: "center", overflow: "hidden",
//             }}>
//                 <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
//                 <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(94,203,135,0.12) 0%, transparent 70%)", top: -150, right: -150, pointerEvents: "none" }} />

//                 <div style={{ position: "relative", zIndex: 2, maxWidth: 720, margin: "0 auto" }}>
//                     <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 50, padding: "7px 18px", fontSize: 13, color: "#a8e6c0", marginBottom: 28, backdropFilter: "blur(8px)" }}>
//                         <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#5ecb87", boxShadow: "0 0 8px #5ecb87", display: "inline-block" }} />
//                         বাংলাদেশের নির্ভরযোগ্য স্বাস্থ্যসেবা প্ল্যাটফর্ম
//                     </div>

//                     <h1 style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: "clamp(2.6rem, 6vw, 4.6rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15, letterSpacing: "-1px", marginBottom: 16, textShadow: "0 2px 12px rgba(0,0,0,0.2)" }}>
//                         সঠিক ডাক্তার,{" "}
//                         <span style={{ background: "linear-gradient(135deg, #5ecb87, #f0c040)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>সঠিক সময়ে</span>
//                     </h1>

//                     <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, marginBottom: 40, lineHeight: 1.7 }}>
//                         বাংলাদেশের যেকোনো প্রান্তে বিশেষজ্ঞ ডাক্তার খুঁজুন —<br />
//                         সহজে, দ্রুত এবং বিশ্বস্তভাবে
//                     </p>

//                     <div style={{ display: "flex", justifyContent: "center", marginBottom: 52 }}>
//                         <SearchBar />
//                     </div>

//                     <LiveStatsCounter />
//                 </div>
//             </section>

//             {/* Wave */}
//             <div style={{ marginTop: -2, lineHeight: 0, background: "#0d3b1e" }}>
//                 <svg viewBox="0 0 1200 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 70 }}>
//                     <path d="M0,35 C200,70 400,0 600,35 C800,70 1000,10 1200,35 L1200,70 L0,70 Z" fill="#f7fbf9" />
//                 </svg>
//             </div>

//             {/* CONTENT */}
//             <div style={{ maxWidth: 1060, margin: "0 auto", padding: "64px 24px 80px" }}>
//                 <div style={{ textAlign: "center", marginBottom: 40 }}>
//                     <span style={{ display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56", border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px", fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12 }}>কেন আমরা</span>
//                     <h2 style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8 }}>আমাদের বিশেষত্ব</h2>
//                     <p style={{ color: "#5a7a66", fontSize: 14 }}>স্বাস্থ্য খোঁজি কেন বাংলাদেশের সেরা স্বাস্থ্যসেবা প্ল্যাটফর্ম</p>
//                     <div style={{ width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)", borderRadius: 4, margin: "12px auto 0" }} />
//                 </div>

//                 <FeatureCards />
//                 <HowItWorks />
//                 <AISymptomChecker />

//                 <div style={{ textAlign: "center", marginBottom: 40 }}>
//                     <span style={{ display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56", border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px", fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12 }}>বিভাগসমূহ</span>
//                     <h2 style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8 }}>বিশেষজ্ঞতা অনুযায়ী খুঁজুন</h2>
//                     <p style={{ color: "#5a7a66", fontSize: 14 }}>আপনার প্রয়োজন অনুযায়ী বিভাগ বেছে নিন</p>
//                     <div style={{ width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)", borderRadius: 4, margin: "12px auto 0" }} />
//                 </div>
//                 <div style={{ marginBottom: 72 }}><SpecializationGrid /></div>

//                 <FeaturedDoctors />
//                 <Testimonials />

//                 {/* CTA */}
//                 <div style={{
//                     background: "linear-gradient(135deg, #0d3b1e 0%, #1a6b38 100%)",
//                     borderRadius: 24, padding: "44px 40px",
//                     display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20,
//                     boxShadow: "0 20px 60px rgba(13,59,30,0.3)", position: "relative", overflow: "hidden",
//                 }}>
//                     <div style={{ position: "absolute", right: 160, top: "50%", transform: "translateY(-50%)", fontSize: 110, opacity: 0.06, pointerEvents: "none" }}>🏥</div>
//                     <div style={{ position: "relative" }}>
//                         <h3 style={{ fontFamily: "'Noto Serif Bengali', serif", color: "#fff", fontSize: 22, fontWeight: 800, marginBottom: 6 }}>জরুরি সাহায্য দরকার?</h3>
//                         <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>আমাদের হেল্পলাইনে যোগাযোগ করুন — ২৪ ঘণ্টা, ৭ দিন</p>
//                     </div>
//                     <a href="tel:16000" style={{
//                         background: "#fff", color: "#0d3b1e", padding: "14px 32px", borderRadius: 50,
//                         fontWeight: 700, fontSize: 16, textDecoration: "none", flexShrink: 0,
//                         boxShadow: "0 8px 24px rgba(0,0,0,0.2)", display: "inline-flex", alignItems: "center", gap: 8, transition: "all 0.2s ease",
//                     }}
//                         onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.3)"; }}
//                         onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)"; }}
//                     >📞 ১৬০০০ তে কল করুন</a>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Home;

// import { Link } from "react-router-dom";
// import { useEffect, useRef, useState, useContext } from "react";
// import SearchBar from "../components/SearchBar";
// import { AuthContext } from "../context/AuthContext";
// import useWelcomeVoice from "../hooks/useWelcomeVoice";// ✅ named import

// const specializations = [
//     { name: "মেডিসিন", icon: "💊", bg: "linear-gradient(135deg, #e8f5e9, #c8e6c9)", accent: "#2e7d32", count: "১২০+" },
//     { name: "শিশু রোগ", icon: "👶", bg: "linear-gradient(135deg, #e3f2fd, #bbdefb)", accent: "#1565c0", count: "৮৫+" },
//     { name: "গাইনি", icon: "🌸", bg: "linear-gradient(135deg, #fce4ec, #f8bbd0)", accent: "#ad1457", count: "৭৪+" },
//     { name: "অর্থোপেডিক", icon: "🦴", bg: "linear-gradient(135deg, #fff8e1, #ffe082)", accent: "#f57f17", count: "৫২+" },
//     { name: "চর্মরোগ", icon: "🩹", bg: "linear-gradient(135deg, #f3e5f5, #e1bee7)", accent: "#6a1b9a", count: "৪৮+" },
//     { name: "চক্ষু", icon: "👁️", bg: "linear-gradient(135deg, #e0f7fa, #b2ebf2)", accent: "#00695c", count: "৩৯+" },
//     { name: "দন্ত রোগ", icon: "🦷", bg: "linear-gradient(135deg, #e8eaf6, #c5cae9)", accent: "#283593", count: "৬১+" },
//     { name: "মানসিক রোগ", icon: "🧠", bg: "linear-gradient(135deg, #e8f5e9, #a5d6a7)", accent: "#1b5e20", count: "৩৩+" },
// ];

// const features = [
//     { icon: "⚡", title: "তাৎক্ষণিক বুকিং", desc: "মাত্র ৩০ সেকেন্ডে অ্যাপয়েন্টমেন্ট নিন, কোনো অপেক্ষা নেই", color: "#2e7d32", bg: "#eef9f2" },
//     { icon: "✅", title: "যাচাইকৃত ডাক্তার", desc: "সকল ডাক্তার BMDC রেজিস্ট্রেশন যাচাইকৃত", color: "#1565c0", bg: "#e3f2fd" },
//     { icon: "💬", title: "অনলাইন পরামর্শ", desc: "ঘরে বসেই ভিডিও কলে ডাক্তারের সাথে কথা বলুন", color: "#ad1457", bg: "#fce4ec" },
//     { icon: "🔒", title: "সম্পূর্ণ নিরাপদ", desc: "আপনার তথ্য সম্পূর্ণ সুরক্ষিত এবং গোপনীয়", color: "#f57f17", bg: "#fff8e1" },
//     { icon: "🌍", title: "সারাদেশে সেবা", desc: "বাংলাদেশের ৬৪ জেলায় আমাদের ডাক্তার নেটওয়ার্ক", color: "#6a1b9a", bg: "#f3e5f5" },
//     { icon: "⭐", title: "রেটিং ও রিভিউ", desc: "হাজারো রোগীর রিভিউ দেখে সেরা ডাক্তার বেছে নিন", color: "#00695c", bg: "#e0f7fa" },
// ];

// const testimonials = [
//     { name: "রাহেলা বেগম", city: "ঢাকা", avatar: "র", color: "#2e7d32", bg: "#eef9f2", rating: 5, text: "মাত্র কয়েক মিনিটে অ্যাপয়েন্টমেন্ট নিলাম। ডাক্তার অনেক মনোযোগ দিয়ে শুনলেন, সত্যিই দারুণ অভিজ্ঞতা।" },
//     { name: "মো. করিম উদ্দিন", city: "চট্টগ্রাম", avatar: "ক", color: "#1565c0", bg: "#e3f2fd", rating: 5, text: "অনলাইনে পরামর্শ নেওয়া এত সহজ হবে ভাবিনি। সিলেট থেকে ঢাকার বিশেষজ্ঞ ডাক্তারের সাথে কথা বললাম।" },
//     { name: "সুমাইয়া আক্তার", city: "সিলেট", avatar: "স", color: "#ad1457", bg: "#fce4ec", rating: 5, text: "BMDC যাচাইকৃত দেখে ভরসা পেলাম। বাচ্চার জন্য শিশু বিশেষজ্ঞ খুব দ্রুত পেলাম।" },
//     { name: "আব্দুর রহমান", city: "রাজশাহী", avatar: "আ", color: "#f57f17", bg: "#fff8e1", rating: 5, text: "গ্রামে থেকেও শহরের ভালো ডাক্তার পাচ্ছি — এটাই সবচেয়ে বড় সুবিধা এই প্ল্যাটফর্মের।" },
//     { name: "নাসরিন সুলতানা", city: "খুলনা", avatar: "ন", color: "#6a1b9a", bg: "#f3e5f5", rating: 5, text: "রিভিউ দেখে ডাক্তার বেছে নেওয়া খুব সহজ হয়েছে। পরিষেবাটি সত্যিই বিশ্বস্ত।" },
//     { name: "তানভীর হোসেন", city: "বরিশাল", avatar: "ত", color: "#00695c", bg: "#e0f7fa", rating: 5, text: "হেল্পলাইনে কল করলাম, সাথে সাথে সাহায্য পেলাম। রাত ১১টায়ও সেবা পেলাম।" },
// ];

// const featuredDoctors = [
//     { name: "ডা. আহমেদ হোসেন", spec: "মেডিসিন বিশেষজ্ঞ", exp: "১৫ বছর", rating: "৪.৯", patients: "২,৪০০+", avatar: "আ", color: "#2e7d32", bg: "#eef9f2" },
//     { name: "ডা. সালমা খানম", spec: "শিশু রোগ বিশেষজ্ঞ", exp: "১২ বছর", rating: "৪.৮", patients: "১,৮০০+", avatar: "স", color: "#1565c0", bg: "#e3f2fd" },
//     { name: "ডা. ফারহান করিম", spec: "হৃদরোগ বিশেষজ্ঞ", exp: "২০ বছর", rating: "৪.৯", patients: "৩,১০০+", avatar: "ফ", color: "#ad1457", bg: "#fce4ec" },
//     { name: "ডা. নুসরাত জাহান", spec: "গাইনি বিশেষজ্ঞ", exp: "১০ বছর", rating: "৪.৭", patients: "১,৫০০+", avatar: "ন", color: "#f57f17", bg: "#fff8e1" },
// ];

// const symptomMap = {
//     "জ্বর": { spec: "মেডিসিন", icon: "💊", color: "#2e7d32", bg: "#eef9f2" },
//     "মাথাব্যথা": { spec: "মেডিসিন", icon: "💊", color: "#2e7d32", bg: "#eef9f2" },
//     "বুকে ব্যথা": { spec: "হৃদরোগ", icon: "❤️", color: "#ad1457", bg: "#fce4ec" },
//     "শ্বাসকষ্ট": { spec: "মেডিসিন", icon: "💊", color: "#2e7d32", bg: "#eef9f2" },
//     "পেটে ব্যথা": { spec: "মেডিসিন", icon: "💊", color: "#2e7d32", bg: "#eef9f2" },
//     "চোখে সমস্যা": { spec: "চক্ষু", icon: "👁️", color: "#00695c", bg: "#e0f7fa" },
//     "দাঁতে ব্যথা": { spec: "দন্ত রোগ", icon: "🦷", color: "#283593", bg: "#e8eaf6" },
//     "ত্বকে র‍্যাশ": { spec: "চর্মরোগ", icon: "🩹", color: "#6a1b9a", bg: "#f3e5f5" },
//     "হাড়ে ব্যথা": { spec: "অর্থোপেডিক", icon: "🦴", color: "#f57f17", bg: "#fff8e1" },
//     "শিশুর সমস্যা": { spec: "শিশু রোগ", icon: "👶", color: "#1565c0", bg: "#e3f2fd" },
//     "মহিলা সমস্যা": { spec: "গাইনি", icon: "🌸", color: "#ad1457", bg: "#fce4ec" },
//     "মানসিক চাপ": { spec: "মানসিক রোগ", icon: "🧠", color: "#1b5e20", bg: "#e8f5e9" },
// };

// const allSymptoms = Object.keys(symptomMap);

// // ── Welcome Voice Popup ───────────────────────────────────────────────────────
// // shouldPlay টা true হলেই hook voice বাজাবে
// function WelcomeVoicePopup({ onClose }) {
//     const [shouldPlay, setShouldPlay] = useState(false);
//     useWelcomeVoice(shouldPlay); // ✅ hook এখানে ব্যবহার হচ্ছে

//     const handleStart = () => {
//         setShouldPlay(true); // এটা true হলেই hook voice চালু করবে
//         onClose();
//     };

//     return (
//         <div style={{
//             position: "fixed", inset: 0,
//             background: "rgba(0,0,0,0.5)",
//             zIndex: 9999,
//             display: "flex", alignItems: "center", justifyContent: "center",
//             padding: 16,
//         }}>
//             <div style={{
//                 background: "#fff", borderRadius: 24,
//                 padding: "40px 32px", maxWidth: 380, width: "100%",
//                 textAlign: "center",
//                 boxShadow: "0 24px 80px rgba(0,0,0,0.18)",
//                 animation: "popIn 0.35s cubic-bezier(0.34,1.56,0.64,1)",
//             }}>
//                 <div style={{ fontSize: 52, marginBottom: 14 }}>🏥</div>
//                 <h2 style={{
//                     fontFamily: "'Noto Serif Bengali', serif",
//                     fontSize: 22, color: "#0d3b1e", margin: "0 0 10px",
//                 }}>স্বাস্থ্য খোঁজিতে স্বাগতম!</h2>
//                 <p style={{
//                     fontFamily: "'Hind Siliguri', sans-serif",
//                     color: "#5a7a66", fontSize: 14,
//                     marginBottom: 28, lineHeight: 1.7,
//                 }}>
//                     আপনার স্বাস্থ্যসেবার বিশ্বস্ত সঙ্গী।<br />
//                     শুরু করতে নিচের বাটনে চাপুন।
//                 </p>
//                 <button onClick={handleStart} style={{
//                     width: "100%", padding: "14px",
//                     borderRadius: 50, border: "none",
//                     background: "linear-gradient(135deg, #2e9e56, #1a6b38)",
//                     color: "#fff",
//                     fontFamily: "'Hind Siliguri', sans-serif",
//                     fontSize: 16, fontWeight: 700,
//                     cursor: "pointer", marginBottom: 12,
//                     boxShadow: "0 6px 20px rgba(46,158,86,0.35)",
//                 }}>
//                     🔊 শুরু করুন
//                 </button>
//                 <button onClick={onClose} style={{
//                     background: "none", border: "none",
//                     color: "#9ca3af",
//                     fontFamily: "'Hind Siliguri', sans-serif",
//                     fontSize: 13, cursor: "pointer", textDecoration: "underline",
//                 }}>
//                     এড়িয়ে যান
//                 </button>
//             </div>
//             <style>{`
//                 @keyframes popIn {
//                     from { transform: scale(0.8); opacity: 0; }
//                     to   { transform: scale(1);   opacity: 1; }
//                 }
//             `}</style>
//         </div>
//     );
// }

// // ── 1. Live Stats Counter ─────────────────────────────────────────────────────
// function LiveStatsCounter() {
//     const statsData = [
//         { value: 500, suffix: "+", label: "বিশেষজ্ঞ ডাক্তার" },
//         { value: 64, suffix: "", label: "জেলায় সেবা" },
//         { value: 10, suffix: " লাখ+", label: "রোগী সেবা পেয়েছেন" },
//     ];
//     const countersRef = useRef([]);
//     const sectionRef = useRef(null);
//     const hasAnimated = useRef(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 if (entries[0].isIntersecting && !hasAnimated.current) {
//                     hasAnimated.current = true;
//                     countersRef.current.forEach((el, i) => {
//                         if (!el) return;
//                         const target = statsData[i].value;
//                         const suffix = statsData[i].suffix;
//                         const duration = 2000;
//                         const steps = 60;
//                         const increment = target / steps;
//                         let current = 0;
//                         const timer = setInterval(() => {
//                             current += increment;
//                             if (current >= target) { current = target; clearInterval(timer); }
//                             const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
//                             const num = Math.floor(current).toString().replace(/\d/g, d => banglaDigits[d]);
//                             el.textContent = num + suffix;
//                         }, duration / steps);
//                     });
//                 }
//             },
//             { threshold: 0.5 }
//         );
//         if (sectionRef.current) observer.observe(sectionRef.current);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div ref={sectionRef} style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
//             {statsData.map((s, i) => (
//                 <div key={s.label} style={{
//                     padding: "0 32px", textAlign: "center",
//                     borderRight: i < statsData.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none",
//                 }}>
//                     <div ref={(el) => (countersRef.current[i] = el)} style={{
//                         fontFamily: "'Noto Serif Bengali', serif",
//                         fontSize: 26, fontWeight: 900, color: "#fff", marginBottom: 4,
//                     }}>০</div>
//                     <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{s.label}</div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// // ── 2. AI Symptom Checker ─────────────────────────────────────────────────────
// function AISymptomChecker() {
//     const [selected, setSelected] = useState([]);
//     const [result, setResult] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const sectionRef = useRef(null);

//     const toggleSymptom = (sym) => {
//         setSelected(prev => prev.includes(sym) ? prev.filter(s => s !== sym) : [...prev, sym]);
//         setResult(null);
//     };

//     const analyze = () => {
//         if (selected.length === 0) return;
//         setLoading(true);
//         setResult(null);
//         setTimeout(() => {
//             const specCount = {};
//             selected.forEach(sym => {
//                 const s = symptomMap[sym]?.spec;
//                 if (s) specCount[s] = (specCount[s] || 0) + 1;
//             });
//             const topSpec = Object.entries(specCount).sort((a, b) => b[1] - a[1])[0]?.[0];
//             const matched = Object.values(symptomMap).find(v => v.spec === topSpec);
//             const res = { spec: topSpec, ...matched };
//             setResult(res);
//             setLoading(false);
//             // result voice — directly call speechSynthesis (user already interacted)
//             if (window.speechSynthesis) {
//                 window.speechSynthesis.cancel();
//                 const utter = new SpeechSynthesisUtterance(
//                     `আপনার লক্ষণ অনুযায়ী ${topSpec} বিশেষজ্ঞ ডাক্তারের পরামর্শ নেওয়া উচিত।`
//                 );
//                 utter.lang = "bn-BD";
//                 utter.rate = 0.88;
//                 window.speechSynthesis.speak(utter);
//             }
//         }, 1200);
//     };

//     const reset = () => {
//         setSelected([]);
//         setResult(null);
//         window.speechSynthesis?.cancel();
//     };

//     useEffect(() => {
//         const el = sectionRef.current;
//         if (!el) return;
//         el.style.opacity = "0";
//         el.style.transform = "translateY(40px)";
//         const observer = new IntersectionObserver(([entry]) => {
//             if (entry.isIntersecting) {
//                 el.style.transition = "all 0.7s cubic-bezier(0.34,1.2,0.64,1)";
//                 el.style.opacity = "1";
//                 el.style.transform = "translateY(0)";
//                 observer.unobserve(el);
//             }
//         }, { threshold: 0.15 });
//         observer.observe(el);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div ref={sectionRef} style={{ marginBottom: 72 }}>
//             <div style={{ textAlign: "center", marginBottom: 40 }}>
//                 <span style={{ display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56", border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px", fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12 }}>AI সহায়তা</span>
//                 <h2 style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8 }}>লক্ষণ দিয়ে ডাক্তার খুঁজুন</h2>
//                 <p style={{ color: "#5a7a66", fontSize: 14 }}>আপনার সমস্যা বেছে নিন — AI আপনাকে সঠিক বিশেষজ্ঞ সাজেস্ট করবে</p>
//                 <div style={{ width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)", borderRadius: 4, margin: "12px auto 0" }} />
//             </div>

//             <div style={{ background: "#fff", borderRadius: 28, boxShadow: "0 8px 40px rgba(13,59,30,0.10)", border: "1.5px solid #e0f0e8", overflow: "hidden" }}>
//                 <div style={{ height: 5, background: "linear-gradient(90deg, #2e9e56, #5ecb87, #f0c040)" }} />
//                 <div style={{ padding: "36px 36px 32px" }}>
//                     <p style={{ fontSize: 13, fontWeight: 600, color: "#5a7a66", marginBottom: 16 }}>
//                         🩺 আপনার লক্ষণ বেছে নিন (একাধিক সিলেক্ট করতে পারবেন):
//                     </p>
//                     <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
//                         {allSymptoms.map(sym => {
//                             const isSelected = selected.includes(sym);
//                             const info = symptomMap[sym];
//                             return (
//                                 <button key={sym} onClick={() => toggleSymptom(sym)} style={{
//                                     padding: "9px 18px", borderRadius: 50,
//                                     border: `2px solid ${isSelected ? info.color : "#d4e8da"}`,
//                                     background: isSelected ? info.color : "#fff",
//                                     color: isSelected ? "#fff" : "#3a5a46",
//                                     fontSize: 13, fontWeight: 600, cursor: "pointer",
//                                     transition: "all 0.2s cubic-bezier(0.34,1.56,0.64,1)",
//                                     transform: isSelected ? "scale(1.06)" : "scale(1)",
//                                     boxShadow: isSelected ? `0 4px 16px ${info.color}40` : "none",
//                                     fontFamily: "'Hind Siliguri', sans-serif",
//                                 }}>{sym}</button>
//                             );
//                         })}
//                     </div>

//                     {selected.length > 0 && (
//                         <p style={{ fontSize: 12, color: "#2e9e56", marginBottom: 16, fontWeight: 600 }}>
//                             ✅ {selected.length}টি লক্ষণ বেছেছেন: {selected.join(", ")}
//                         </p>
//                     )}

//                     <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
//                         <button onClick={analyze} disabled={selected.length === 0 || loading} style={{
//                             background: selected.length === 0 ? "#ccc" : "linear-gradient(135deg, #2e9e56, #1a6b38)",
//                             color: "#fff", border: "none", borderRadius: 50,
//                             padding: "13px 32px", fontSize: 14, fontWeight: 700,
//                             cursor: selected.length === 0 ? "not-allowed" : "pointer",
//                             boxShadow: selected.length > 0 ? "0 6px 20px rgba(46,158,86,0.35)" : "none",
//                             transition: "all 0.2s ease", fontFamily: "'Hind Siliguri', sans-serif",
//                         }}>
//                             {loading ? "⏳ বিশ্লেষণ হচ্ছে..." : "🔍 ডাক্তার খুঁজুন"}
//                         </button>
//                         {selected.length > 0 && (
//                             <button onClick={reset} style={{
//                                 background: "transparent", color: "#5a7a66",
//                                 border: "1.5px solid #d4e8da", borderRadius: 50,
//                                 padding: "12px 22px", fontSize: 13, fontWeight: 600,
//                                 cursor: "pointer", fontFamily: "'Hind Siliguri', sans-serif",
//                             }}>রিসেট করুন</button>
//                         )}
//                     </div>

//                     {loading && (
//                         <div style={{ marginTop: 28, padding: "24px", background: "#f7fbf9", borderRadius: 18, textAlign: "center" }}>
//                             <div style={{ display: "inline-block", width: 36, height: 36, border: "3px solid #e0f0e8", borderTop: "3px solid #2e9e56", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
//                             <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
//                             <p style={{ marginTop: 12, color: "#5a7a66", fontSize: 13 }}>আপনার লক্ষণ বিশ্লেষণ করা হচ্ছে...</p>
//                         </div>
//                     )}

//                     {result && !loading && (
//                         <div style={{ marginTop: 28, background: `linear-gradient(135deg, ${result.bg}, #fff)`, border: `2px solid ${result.color}30`, borderRadius: 20, padding: "28px", animation: "fadeInUp 0.5s ease" }}>
//                             <style>{`@keyframes fadeInUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }`}</style>
//                             <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
//                                 <div style={{ width: 56, height: 56, borderRadius: 16, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, boxShadow: `0 6px 20px ${result.color}25`, border: `2px solid ${result.color}20` }}>{result.icon}</div>
//                                 <div>
//                                     <p style={{ fontSize: 11, color: result.color, fontWeight: 700, margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.5px" }}>AI সাজেশন</p>
//                                     <p style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 20, fontWeight: 800, color: "#0d3b1e", margin: 0 }}>{result.spec} বিশেষজ্ঞ</p>
//                                 </div>
//                             </div>
//                             <p style={{ fontSize: 13, color: "#5a7a66", marginBottom: 20, lineHeight: 1.7 }}>
//                                 আপনার লক্ষণ অনুযায়ী <strong style={{ color: result.color }}>{result.spec} বিশেষজ্ঞ</strong> ডাক্তারের পরামর্শ নেওয়া উচিত।
//                             </p>
//                             <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
//                                 <Link to={`/search?specialization=${result.spec}`} style={{ textDecoration: "none" }}>
//                                     <div style={{ background: result.color, color: "#fff", borderRadius: 50, padding: "11px 24px", fontSize: 13, fontWeight: 700, boxShadow: `0 4px 16px ${result.color}40`, cursor: "pointer" }}>এখনই ডাক্তার দেখুন →</div>
//                                 </Link>
//                                 <div style={{ background: "rgba(255,255,255,0.8)", border: `1.5px solid ${result.color}30`, color: result.color, borderRadius: 50, padding: "10px 20px", fontSize: 12, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>⚠️ এটি AI সাজেশন, চিকিৎসকের পরামর্শই চূড়ান্ত</div>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// // ── Feature Cards ─────────────────────────────────────────────────────────────
// function FeatureCards() {
//     const cardsRef = useRef([]);
//     useEffect(() => {
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     entry.target.style.opacity = "1";
//                     entry.target.style.transform = "translateY(0) scale(1)";
//                 }
//             });
//         }, { threshold: 0.15 });
//         cardsRef.current.forEach((card) => { if (card) observer.observe(card); });
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20, marginBottom: 72 }}>
//             {features.map((f, i) => (
//                 <div key={f.title} ref={(el) => (cardsRef.current[i] = el)} style={{
//                     background: "#fff", borderRadius: 22, padding: "32px 24px",
//                     border: `1.5px solid ${f.color}20`, boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
//                     opacity: 0, transform: "translateY(40px) scale(0.96)",
//                     transition: `all 0.6s cubic-bezier(0.34,1.2,0.64,1) ${i * 80}ms`,
//                     cursor: "default", position: "relative", overflow: "hidden",
//                 }}
//                     onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-8px) scale(1.03)"; e.currentTarget.style.boxShadow = `0 20px 50px ${f.color}25`; e.currentTarget.style.borderColor = f.color; }}
//                     onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)"; e.currentTarget.style.borderColor = `${f.color}20`; }}
//                 >
//                     <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${f.color}, ${f.color}80)`, borderRadius: "22px 22px 0 0" }} />
//                     <div style={{ width: 60, height: 60, borderRadius: 16, background: f.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, marginBottom: 18, boxShadow: `0 6px 20px ${f.color}20` }}>{f.icon}</div>
//                     <div style={{ fontWeight: 700, fontSize: 16, color: "#0d3b1e", marginBottom: 8 }}>{f.title}</div>
//                     <div style={{ fontSize: 13, color: "#5a7a66", lineHeight: 1.7 }}>{f.desc}</div>
//                     <div style={{ position: "absolute", bottom: 16, right: 16, width: 8, height: 8, borderRadius: "50%", background: f.color, opacity: 0.4 }} />
//                 </div>
//             ))}
//         </div>
//     );
// }

// // ── Specialization Grid ───────────────────────────────────────────────────────
// function SpecializationGrid() {
//     const gridRef = useRef(null);
//     useEffect(() => {
//         const cards = gridRef.current?.querySelectorAll(".spec-card");
//         if (!cards) return;
//         cards.forEach((card, i) => {
//             const fromLeft = i < 4;
//             card.style.opacity = "0";
//             card.style.transform = `translateX(${fromLeft ? "-120px" : "120px"}) scale(0.92)`;
//             card.style.transition = `transform 0.6s cubic-bezier(0.34,1.2,0.64,1), opacity 0.5s ease`;
//         });
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     cards.forEach((card, i) => {
//                         const fromLeft = i < 4;
//                         const staggerIndex = fromLeft ? i : 7 - i;
//                         setTimeout(() => { card.style.opacity = "1"; card.style.transform = "translateX(0) scale(1)"; }, staggerIndex * 90);
//                     });
//                     observer.unobserve(entry.target);
//                 }
//             });
//         }, { threshold: 0.1 });
//         if (gridRef.current) observer.observe(gridRef.current);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div ref={gridRef} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
//             {specializations.map((s) => (
//                 <Link key={s.name} to={`/search?specialization=${s.name}`} style={{ textDecoration: "none" }}>
//                     <div className="spec-card" style={{
//                         background: "#fff", borderRadius: 22, padding: "32px 16px 24px",
//                         textAlign: "center", border: "1.5px solid #e0f0e8", cursor: "pointer",
//                         boxShadow: "0 4px 16px rgba(0,0,0,0.05)", position: "relative", overflow: "hidden",
//                         transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease, border-color 0.2s",
//                     }}
//                         onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-8px) scale(1.04)"; e.currentTarget.style.boxShadow = `0 20px 50px rgba(26,107,56,0.18)`; e.currentTarget.style.borderColor = s.accent; }}
//                         onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)"; e.currentTarget.style.borderColor = "#e0f0e8"; }}
//                     >
//                         <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: s.accent, borderRadius: "22px 22px 0 0", opacity: 0.7 }} />
//                         <div style={{ width: 68, height: 68, borderRadius: 20, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, margin: "0 auto 16px", boxShadow: "0 6px 20px rgba(0,0,0,0.08)" }}>{s.icon}</div>
//                         <p style={{ fontSize: 14, fontWeight: 700, color: "#0d3b1e", margin: "0 0 6px" }}>{s.name}</p>
//                         <div style={{ display: "inline-flex", alignItems: "center", gap: 4, background: `${s.accent}15`, border: `1px solid ${s.accent}30`, borderRadius: 50, padding: "3px 10px", fontSize: 11, fontWeight: 600, color: s.accent }}>{s.count} ডাক্তার</div>
//                     </div>
//                 </Link>
//             ))}
//         </div>
//     );
// }

// // ── How It Works ──────────────────────────────────────────────────────────────
// function HowItWorks() {
//     const steps = [
//         { icon: "🔍", step: "০১", title: "ডাক্তার খুঁজুন", desc: "বিভাগ, নাম বা এলাকা দিয়ে আপনার পছন্দের বিশেষজ্ঞ খুঁজুন", color: "#2e7d32", bg: "#eef9f2", to: "/search", btnLabel: "এখনই খুঁজুন →" },
//         { icon: "📅", step: "০২", title: "অ্যাপয়েন্টমেন্ট নিন", desc: "আপনার সুবিধামতো সময় ও তারিখ বেছে নিয়ে বুকিং করুন", color: "#1565c0", bg: "#e3f2fd", to: "/search", btnLabel: "বুকিং করুন →" },
//         { icon: "💊", step: "০৩", title: "পরামর্শ ও চিকিৎসা", desc: "সরাসরি বা অনলাইনে ডাক্তারের পরামর্শ নিন এবং সুস্থ থাকুন", color: "#ad1457", bg: "#fce4ec", to: "/search?mode=online", btnLabel: "পরামর্শ নিন →" },
//     ];
//     const sectionRef = useRef(null);
//     const stepsRef = useRef([]);
//     useEffect(() => {
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     stepsRef.current.forEach((el, i) => { if (el) setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, i * 150); });
//                     observer.unobserve(entry.target);
//                 }
//             });
//         }, { threshold: 0.2 });
//         if (sectionRef.current) observer.observe(sectionRef.current);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div ref={sectionRef} style={{ marginBottom: 72 }}>
//             <div style={{ textAlign: "center", marginBottom: 40 }}>
//                 <span style={{ display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56", border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px", fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12 }}>কিভাবে কাজ করে</span>
//                 <h2 style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8 }}>মাত্র ৩টি সহজ ধাপে</h2>
//                 <p style={{ color: "#5a7a66", fontSize: 14 }}>শুরু থেকে চিকিৎসা পর্যন্ত — সবকিছু এক জায়গায়</p>
//                 <div style={{ width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)", borderRadius: 4, margin: "12px auto 0" }} />
//             </div>
//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, position: "relative" }}>
//                 <div style={{ position: "absolute", top: 52, left: "16.5%", right: "16.5%", height: 2, background: "linear-gradient(90deg, #2e7d32, #1565c0, #ad1457)", opacity: 0.2, zIndex: 0 }} />
//                 {steps.map((s, i) => (
//                     <div key={s.step} ref={(el) => (stepsRef.current[i] = el)} style={{
//                         background: "#fff", borderRadius: 24, padding: "36px 24px 28px",
//                         border: `1.5px solid ${s.color}18`, boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
//                         textAlign: "center", position: "relative", zIndex: 1,
//                         opacity: 0, transform: "translateY(30px)",
//                         transition: `all 0.6s cubic-bezier(0.34,1.2,0.64,1) ${i * 150}ms`,
//                     }}
//                         onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = `0 20px 50px ${s.color}20`; e.currentTarget.style.borderColor = s.color; }}
//                         onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)"; e.currentTarget.style.borderColor = `${s.color}18`; }}
//                     >
//                         <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: s.color, color: "#fff", borderRadius: 50, width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, boxShadow: `0 4px 12px ${s.color}40` }}>{i + 1}</div>
//                         <div style={{ width: 80, height: 80, borderRadius: 24, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, margin: "0 auto 20px", boxShadow: `0 8px 24px ${s.color}20` }}>{s.icon}</div>
//                         <p style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 17, fontWeight: 800, color: "#0d3b1e", marginBottom: 10 }}>{s.title}</p>
//                         <p style={{ fontSize: 13, color: "#5a7a66", lineHeight: 1.7, margin: "0 0 20px" }}>{s.desc}</p>
//                         <Link to={s.to} style={{ textDecoration: "none" }}>
//                             <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: s.color, color: "#fff", borderRadius: 50, padding: "11px 22px", fontSize: 13, fontWeight: 700, cursor: "pointer", boxShadow: `0 4px 14px ${s.color}40`, transition: "all 0.2s ease", fontFamily: "'Hind Siliguri', sans-serif" }}
//                                 onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.07)"; }}
//                                 onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
//                             >{s.btnLabel}</div>
//                         </Link>
//                         <div style={{ marginTop: 16, display: "inline-flex", alignItems: "center", gap: 4, background: `${s.color}12`, border: `1px solid ${s.color}25`, borderRadius: 50, padding: "4px 14px", fontSize: 11, fontWeight: 600, color: s.color }}>ধাপ {s.step}</div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// // ── Testimonials ──────────────────────────────────────────────────────────────
// function Testimonials() {
//     const sectionRef = useRef(null);
//     const cardsRef = useRef([]);
//     useEffect(() => {
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     cardsRef.current.forEach((el, i) => { if (el) setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0) scale(1)"; }, i * 100); });
//                     observer.unobserve(entry.target);
//                 }
//             });
//         }, { threshold: 0.1 });
//         if (sectionRef.current) observer.observe(sectionRef.current);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div ref={sectionRef} style={{ marginBottom: 72 }}>
//             <div style={{ textAlign: "center", marginBottom: 40 }}>
//                 <span style={{ display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56", border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px", fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12 }}>রোগীর কথা</span>
//                 <h2 style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8 }}>তারা কী বলছেন</h2>
//                 <p style={{ color: "#5a7a66", fontSize: 14 }}>হাজারো সন্তুষ্ট রোগীর মধ্যে কিছু অভিজ্ঞতা</p>
//                 <div style={{ width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)", borderRadius: 4, margin: "12px auto 0" }} />
//             </div>
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
//                 {testimonials.map((t, i) => (
//                     <div key={t.name} ref={(el) => (cardsRef.current[i] = el)} style={{
//                         background: "#fff", borderRadius: 22, padding: "28px 24px",
//                         border: `1.5px solid ${t.color}18`, boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
//                         opacity: 0, transform: "translateY(30px) scale(0.97)",
//                         transition: `all 0.55s cubic-bezier(0.34,1.2,0.64,1) ${i * 100}ms`, position: "relative",
//                     }}
//                         onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px) scale(1.02)"; e.currentTarget.style.boxShadow = `0 16px 40px ${t.color}20`; e.currentTarget.style.borderColor = t.color; }}
//                         onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)"; e.currentTarget.style.borderColor = `${t.color}18`; }}
//                     >
//                         <div style={{ position: "absolute", top: 16, right: 20, fontSize: 48, color: `${t.color}15`, lineHeight: 1, fontFamily: "Georgia, serif", fontWeight: 900 }}>"</div>
//                         <div style={{ fontSize: 14, marginBottom: 14, color: "#f0c040" }}>{"★".repeat(t.rating)}</div>
//                         <p style={{ fontSize: 14, color: "#3a5a46", lineHeight: 1.8, marginBottom: 20, fontStyle: "italic" }}>"{t.text}"</p>
//                         <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//                             <div style={{ width: 42, height: 42, borderRadius: "50%", background: t.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700, color: t.color, border: `2px solid ${t.color}30` }}>{t.avatar}</div>
//                             <div>
//                                 <p style={{ fontSize: 14, fontWeight: 700, color: "#0d3b1e", margin: 0 }}>{t.name}</p>
//                                 <p style={{ fontSize: 12, color: "#5a7a66", margin: 0 }}>📍 {t.city}</p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// // ── Featured Doctors ──────────────────────────────────────────────────────────
// function FeaturedDoctors() {
//     const sectionRef = useRef(null);
//     const cardsRef = useRef([]);
//     useEffect(() => {
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     cardsRef.current.forEach((el, i) => { if (el) setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, i * 120); });
//                     observer.unobserve(entry.target);
//                 }
//             });
//         }, { threshold: 0.1 });
//         if (sectionRef.current) observer.observe(sectionRef.current);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div ref={sectionRef} style={{ marginBottom: 72 }}>
//             <div style={{ textAlign: "center", marginBottom: 40 }}>
//                 <span style={{ display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56", border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px", fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12 }}>বিশেষজ্ঞ দল</span>
//                 <h2 style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8 }}>জনপ্রিয় ডাক্তারগণ</h2>
//                 <p style={{ color: "#5a7a66", fontSize: 14 }}>আমাদের সর্বোচ্চ রেটিংপ্রাপ্ত বিশেষজ্ঞ ডাক্তারদের সাথে পরিচিত হন</p>
//                 <div style={{ width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)", borderRadius: 4, margin: "12px auto 0" }} />
//             </div>
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
//                 {featuredDoctors.map((d, i) => (
//                     <div key={d.name} ref={(el) => (cardsRef.current[i] = el)} style={{
//                         background: "#fff", borderRadius: 22, padding: "28px 20px 24px",
//                         border: `1.5px solid ${d.color}18`, boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
//                         textAlign: "center", opacity: 0, transform: "translateY(30px)",
//                         transition: `all 0.6s cubic-bezier(0.34,1.2,0.64,1) ${i * 120}ms`,
//                         cursor: "pointer", position: "relative", overflow: "hidden",
//                     }}
//                         onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = `0 20px 50px ${d.color}25`; e.currentTarget.style.borderColor = d.color; }}
//                         onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)"; e.currentTarget.style.borderColor = `${d.color}18`; }}
//                     >
//                         <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: d.color, borderRadius: "22px 22px 0 0", opacity: 0.7 }} />
//                         <div style={{ width: 72, height: 72, borderRadius: "50%", background: d.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, fontWeight: 700, color: d.color, margin: "0 auto 16px", border: `3px solid ${d.color}30`, boxShadow: `0 8px 24px ${d.color}25` }}>{d.avatar}</div>
//                         <p style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 15, fontWeight: 800, color: "#0d3b1e", margin: "0 0 4px" }}>{d.name}</p>
//                         <p style={{ fontSize: 12, color: "#5a7a66", margin: "0 0 16px" }}>{d.spec}</p>
//                         <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
//                             <div style={{ background: `${d.color}10`, borderRadius: 50, padding: "4px 10px", fontSize: 11, color: d.color, fontWeight: 600 }}>⭐ {d.rating}</div>
//                             <div style={{ background: "#f0f4f0", borderRadius: 50, padding: "4px 10px", fontSize: 11, color: "#5a7a66", fontWeight: 600 }}>👥 {d.patients}</div>
//                         </div>
//                         <div style={{ fontSize: 11, color: "#5a7a66", marginBottom: 16 }}>অভিজ্ঞতা: {d.exp}</div>
//                         <Link to={`/search?specialization=${d.spec}`} style={{ textDecoration: "none" }}>
//                             <div style={{ background: d.color, color: "#fff", borderRadius: 50, padding: "10px 20px", fontSize: 13, fontWeight: 700, transition: "all 0.2s ease", boxShadow: `0 4px 14px ${d.color}40` }}
//                                 onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "scale(1.05)"; }}
//                                 onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1)"; }}
//                             >অ্যাপয়েন্টমেন্ট নিন</div>
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//             <div style={{ textAlign: "center", marginTop: 32 }}>
//                 <Link to="/search" style={{ textDecoration: "none" }}>
//                     <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "#2e9e56", border: "2px solid #2e9e56", borderRadius: 50, padding: "12px 28px", fontSize: 14, fontWeight: 700, transition: "all 0.2s ease" }}
//                         onMouseEnter={(e) => { e.currentTarget.style.background = "#2e9e56"; e.currentTarget.style.color = "#fff"; }}
//                         onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#2e9e56"; }}
//                     >সকল ডাক্তার দেখুন →</div>
//                 </Link>
//             </div>
//         </div>
//     );
// }

// // ── Home ──────────────────────────────────────────────────────────────────────
// function Home() {
//     const { user } = useContext(AuthContext);
//     const [showPopup, setShowPopup] = useState(false);

//     useEffect(() => {
//         if (user?.role === "admin") return; // admin হলে popup আসবে না
//         const timer = setTimeout(() => setShowPopup(true), 600);
//         return () => clearTimeout(timer);
//     }, [user]);

//     return (
//         <div style={{ fontFamily: "'Hind Siliguri', sans-serif", background: "#f7fbf9", minHeight: "100vh" }}>
//             <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Noto+Serif+Bengali:wght@700;800;900&display=swap" rel="stylesheet" />

//             {showPopup && <WelcomeVoicePopup onClose={() => setShowPopup(false)} />}

//             <section style={{
//                 position: "relative",
//                 background: "linear-gradient(160deg, #062210 0%, #0d3b1e 40%, #1a6b38 80%, #2e9e56 100%)",
//                 padding: "80px 24px 100px", textAlign: "center", overflow: "hidden",
//             }}>
//                 <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
//                 <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(94,203,135,0.12) 0%, transparent 70%)", top: -150, right: -150, pointerEvents: "none" }} />

//                 <div style={{ position: "relative", zIndex: 2, maxWidth: 720, margin: "0 auto" }}>
//                     <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 50, padding: "7px 18px", fontSize: 13, color: "#a8e6c0", marginBottom: 28, backdropFilter: "blur(8px)" }}>
//                         <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#5ecb87", boxShadow: "0 0 8px #5ecb87", display: "inline-block" }} />
//                         বাংলাদেশের নির্ভরযোগ্য স্বাস্থ্যসেবা প্ল্যাটফর্ম
//                     </div>

//                     <h1 style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: "clamp(2.6rem, 6vw, 4.6rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15, letterSpacing: "-1px", marginBottom: 16, textShadow: "0 2px 12px rgba(0,0,0,0.2)" }}>
//                         সঠিক ডাক্তার,{" "}
//                         <span style={{ background: "linear-gradient(135deg, #5ecb87, #f0c040)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>সঠিক সময়ে</span>
//                     </h1>

//                     <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, marginBottom: 40, lineHeight: 1.7 }}>
//                         বাংলাদেশের যেকোনো প্রান্তে বিশেষজ্ঞ ডাক্তার খুঁজুন —<br />
//                         সহজে, দ্রুত এবং বিশ্বস্তভাবে
//                     </p>

//                     <div style={{ display: "flex", justifyContent: "center", marginBottom: 52 }}>
//                         <SearchBar />
//                     </div>

//                     <LiveStatsCounter />
//                 </div>
//             </section>

//             <div style={{ marginTop: -2, lineHeight: 0, background: "#0d3b1e" }}>
//                 <svg viewBox="0 0 1200 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 70 }}>
//                     <path d="M0,35 C200,70 400,0 600,35 C800,70 1000,10 1200,35 L1200,70 L0,70 Z" fill="#f7fbf9" />
//                 </svg>
//             </div>

//             <div style={{ maxWidth: 1060, margin: "0 auto", padding: "64px 24px 80px" }}>
//                 <div style={{ textAlign: "center", marginBottom: 40 }}>
//                     <span style={{ display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56", border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px", fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12 }}>কেন আমরা</span>
//                     <h2 style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8 }}>আমাদের বিশেষত্ব</h2>
//                     <p style={{ color: "#5a7a66", fontSize: 14 }}>স্বাস্থ্য খোঁজি কেন বাংলাদেশের সেরা স্বাস্থ্যসেবা প্ল্যাটফর্ম</p>
//                     <div style={{ width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)", borderRadius: 4, margin: "12px auto 0" }} />
//                 </div>

//                 <FeatureCards />
//                 <HowItWorks />
//                 <AISymptomChecker />

//                 <div style={{ textAlign: "center", marginBottom: 40 }}>
//                     <span style={{ display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56", border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px", fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12 }}>বিভাগসমূহ</span>
//                     <h2 style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8 }}>বিশেষজ্ঞতা অনুযায়ী খুঁজুন</h2>
//                     <p style={{ color: "#5a7a66", fontSize: 14 }}>আপনার প্রয়োজন অনুযায়ী বিভাগ বেছে নিন</p>
//                     <div style={{ width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)", borderRadius: 4, margin: "12px auto 0" }} />
//                 </div>
//                 <div style={{ marginBottom: 72 }}><SpecializationGrid /></div>

//                 <FeaturedDoctors />
//                 <Testimonials />

//                 <div style={{
//                     background: "linear-gradient(135deg, #0d3b1e 0%, #1a6b38 100%)",
//                     borderRadius: 24, padding: "44px 40px",
//                     display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20,
//                     boxShadow: "0 20px 60px rgba(13,59,30,0.3)", position: "relative", overflow: "hidden",
//                 }}>
//                     <div style={{ position: "absolute", right: 160, top: "50%", transform: "translateY(-50%)", fontSize: 110, opacity: 0.06, pointerEvents: "none" }}>🏥</div>
//                     <div style={{ position: "relative" }}>
//                         <h3 style={{ fontFamily: "'Noto Serif Bengali', serif", color: "#fff", fontSize: 22, fontWeight: 800, marginBottom: 6 }}>জরুরি সাহায্য দরকার?</h3>
//                         <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>আমাদের হেল্পলাইনে যোগাযোগ করুন — ২৪ ঘণ্টা, ৭ দিন</p>
//                     </div>
//                     <a href="tel:16000" style={{
//                         background: "#fff", color: "#0d3b1e", padding: "14px 32px", borderRadius: 50,
//                         fontWeight: 700, fontSize: 16, textDecoration: "none", flexShrink: 0,
//                         boxShadow: "0 8px 24px rgba(0,0,0,0.2)", display: "inline-flex", alignItems: "center", gap: 8, transition: "all 0.2s ease",
//                     }}
//                         onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.3)"; }}
//                         onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)"; }}
//                     >📞 ১৬০০০ তে কল করুন</a>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Home;

// import { Link } from "react-router-dom";
// import { useEffect, useRef, useState, useContext } from "react";
// import SearchBar from "../components/SearchBar";
// import { AuthContext } from "../context/AuthContext";

// const specializations = [
//     { name: "মেডিসিন", icon: "💊", bg: "linear-gradient(135deg, #e8f5e9, #c8e6c9)", accent: "#2e7d32", count: "১২০+" },
//     { name: "শিশু রোগ", icon: "👶", bg: "linear-gradient(135deg, #e3f2fd, #bbdefb)", accent: "#1565c0", count: "৮৫+" },
//     { name: "গাইনি", icon: "🌸", bg: "linear-gradient(135deg, #fce4ec, #f8bbd0)", accent: "#ad1457", count: "৭৪+" },
//     { name: "অর্থোপেডিক", icon: "🦴", bg: "linear-gradient(135deg, #fff8e1, #ffe082)", accent: "#f57f17", count: "৫২+" },
//     { name: "চর্মরোগ", icon: "🩹", bg: "linear-gradient(135deg, #f3e5f5, #e1bee7)", accent: "#6a1b9a", count: "৪৮+" },
//     { name: "চক্ষু", icon: "👁️", bg: "linear-gradient(135deg, #e0f7fa, #b2ebf2)", accent: "#00695c", count: "৩৯+" },
//     { name: "দন্ত রোগ", icon: "🦷", bg: "linear-gradient(135deg, #e8eaf6, #c5cae9)", accent: "#283593", count: "৬১+" },
//     { name: "মানসিক রোগ", icon: "🧠", bg: "linear-gradient(135deg, #e8f5e9, #a5d6a7)", accent: "#1b5e20", count: "৩৩+" },
// ];

// const features = [
//     { icon: "⚡", title: "তাৎক্ষণিক বুকিং", desc: "মাত্র ৩০ সেকেন্ডে অ্যাপয়েন্টমেন্ট নিন, কোনো অপেক্ষা নেই", color: "#2e7d32", bg: "#eef9f2" },
//     { icon: "✅", title: "যাচাইকৃত ডাক্তার", desc: "সকল ডাক্তার BMDC রেজিস্ট্রেশন যাচাইকৃত", color: "#1565c0", bg: "#e3f2fd" },
//     { icon: "💬", title: "অনলাইন পরামর্শ", desc: "ঘরে বসেই ভিডিও কলে ডাক্তারের সাথে কথা বলুন", color: "#ad1457", bg: "#fce4ec" },
//     { icon: "🔒", title: "সম্পূর্ণ নিরাপদ", desc: "আপনার তথ্য সম্পূর্ণ সুরক্ষিত এবং গোপনীয়", color: "#f57f17", bg: "#fff8e1" },
//     { icon: "🌍", title: "সারাদেশে সেবা", desc: "বাংলাদেশের ৬৪ জেলায় আমাদের ডাক্তার নেটওয়ার্ক", color: "#6a1b9a", bg: "#f3e5f5" },
//     { icon: "⭐", title: "রেটিং ও রিভিউ", desc: "হাজারো রোগীর রিভিউ দেখে সেরা ডাক্তার বেছে নিন", color: "#00695c", bg: "#e0f7fa" },
// ];

// const testimonials = [
//     { name: "রাহেলা বেগম", city: "ঢাকা", avatar: "র", color: "#2e7d32", bg: "#eef9f2", rating: 5, text: "মাত্র কয়েক মিনিটে অ্যাপয়েন্টমেন্ট নিলাম। ডাক্তার অনেক মনোযোগ দিয়ে শুনলেন, সত্যিই দারুণ অভিজ্ঞতা।" },
//     { name: "মো. করিম উদ্দিন", city: "চট্টগ্রাম", avatar: "ক", color: "#1565c0", bg: "#e3f2fd", rating: 5, text: "অনলাইনে পরামর্শ নেওয়া এত সহজ হবে ভাবিনি। সিলেট থেকে ঢাকার বিশেষজ্ঞ ডাক্তারের সাথে কথা বললাম।" },
//     { name: "সুমাইয়া আক্তার", city: "সিলেট", avatar: "স", color: "#ad1457", bg: "#fce4ec", rating: 5, text: "BMDC যাচাইকৃত দেখে ভরসা পেলাম। বাচ্চার জন্য শিশু বিশেষজ্ঞ খুব দ্রুত পেলাম।" },
//     { name: "আব্দুর রহমান", city: "রাজশাহী", avatar: "আ", color: "#f57f17", bg: "#fff8e1", rating: 5, text: "গ্রামে থেকেও শহরের ভালো ডাক্তার পাচ্ছি — এটাই সবচেয়ে বড় সুবিধা এই প্ল্যাটফর্মের।" },
//     { name: "নাসরিন সুলতানা", city: "খুলনা", avatar: "ন", color: "#6a1b9a", bg: "#f3e5f5", rating: 5, text: "রিভিউ দেখে ডাক্তার বেছে নেওয়া খুব সহজ হয়েছে। পরিষেবাটি সত্যিই বিশ্বস্ত।" },
//     { name: "তানভীর হোসেন", city: "বরিশাল", avatar: "ত", color: "#00695c", bg: "#e0f7fa", rating: 5, text: "হেল্পলাইনে কল করলাম, সাথে সাথে সাহায্য পেলাম। রাত ১১টায়ও সেবা পেলাম।" },
// ];

// const featuredDoctors = [
//     { name: "ডা. আহমেদ হোসেন", spec: "মেডিসিন বিশেষজ্ঞ", exp: "১৫ বছর", rating: "৪.৯", patients: "২,৪০০+", avatar: "আ", color: "#2e7d32", bg: "#eef9f2" },
//     { name: "ডা. সালমা খানম", spec: "শিশু রোগ বিশেষজ্ঞ", exp: "১২ বছর", rating: "৪.৮", patients: "১,৮০০+", avatar: "স", color: "#1565c0", bg: "#e3f2fd" },
//     { name: "ডা. ফারহান করিম", spec: "হৃদরোগ বিশেষজ্ঞ", exp: "২০ বছর", rating: "৪.৯", patients: "৩,১০০+", avatar: "ফ", color: "#ad1457", bg: "#fce4ec" },
//     { name: "ডা. নুসরাত জাহান", spec: "গাইনি বিশেষজ্ঞ", exp: "১০ বছর", rating: "৪.৭", patients: "১,৫০০+", avatar: "ন", color: "#f57f17", bg: "#fff8e1" },
// ];

// const symptomMap = {
//     "জ্বর": { spec: "মেডিসিন", icon: "💊", color: "#2e7d32", bg: "#eef9f2" },
//     "মাথাব্যথা": { spec: "মেডিসিন", icon: "💊", color: "#2e7d32", bg: "#eef9f2" },
//     "বুকে ব্যথা": { spec: "হৃদরোগ", icon: "❤️", color: "#ad1457", bg: "#fce4ec" },
//     "শ্বাসকষ্ট": { spec: "মেডিসিন", icon: "💊", color: "#2e7d32", bg: "#eef9f2" },
//     "পেটে ব্যথা": { spec: "মেডিসিন", icon: "💊", color: "#2e7d32", bg: "#eef9f2" },
//     "চোখে সমস্যা": { spec: "চক্ষু", icon: "👁️", color: "#00695c", bg: "#e0f7fa" },
//     "দাঁতে ব্যথা": { spec: "দন্ত রোগ", icon: "🦷", color: "#283593", bg: "#e8eaf6" },
//     "ত্বকে র‍্যাশ": { spec: "চর্মরোগ", icon: "🩹", color: "#6a1b9a", bg: "#f3e5f5" },
//     "হাড়ে ব্যথা": { spec: "অর্থোপেডিক", icon: "🦴", color: "#f57f17", bg: "#fff8e1" },
//     "শিশুর সমস্যা": { spec: "শিশু রোগ", icon: "👶", color: "#1565c0", bg: "#e3f2fd" },
//     "মহিলা সমস্যা": { spec: "গাইনি", icon: "🌸", color: "#ad1457", bg: "#fce4ec" },
//     "মানসিক চাপ": { spec: "মানসিক রোগ", icon: "🧠", color: "#1b5e20", bg: "#e8f5e9" },
// };

// const allSymptoms = Object.keys(symptomMap);

// // ── Welcome Voice Popup ───────────────────────────────────────────────────────
// function WelcomeVoicePopup({ onClose }) {

//     const handleStart = () => {
//         if (window.speechSynthesis) {
//             window.speechSynthesis.cancel();
//             const utter = new SpeechSynthesisUtterance(
//                 "Welcome to Swasthya Khoji. Find your preferred doctor easily and quickly. " +
//                 "Tomar doctor khojo taratari."
//             );

//             utter.lang = "en-US";
//             utter.rate = 0.9;
//             utter.pitch = 1.05;

//             const voices = window.speechSynthesis.getVoices();
//             const preferred =
//                 voices.find((v) => v.name.includes("Google US English")) ||
//                 voices.find((v) => v.name.includes("Samantha")) ||
//                 voices.find((v) => v.name.includes("Karen")) ||
//                 voices.find((v) => v.lang === "en-US" && v.localService) ||
//                 voices.find((v) => v.lang === "en-US") ||
//                 null;
//             if (preferred) utter.voice = preferred;

//             window.speechSynthesis.speak(utter);
//         }
//         onClose();
//     };

//     return (
//         <div style={{
//             position: "fixed", inset: 0,
//             background: "rgba(0,0,0,0.5)",
//             zIndex: 9999,
//             display: "flex", alignItems: "center", justifyContent: "center",
//             padding: 16,
//         }}>
//             <div style={{
//                 background: "#fff", borderRadius: 24,
//                 padding: "40px 32px", maxWidth: 380, width: "100%",
//                 textAlign: "center",
//                 boxShadow: "0 24px 80px rgba(0,0,0,0.18)",
//                 animation: "popIn 0.35s cubic-bezier(0.34,1.56,0.64,1)",
//             }}>
//                 <div style={{ fontSize: 52, marginBottom: 14 }}>🏥</div>
//                 <h2 style={{
//                     fontFamily: "'Noto Serif Bengali', serif",
//                     fontSize: 22, color: "#0d3b1e", margin: "0 0 10px",
//                 }}>স্বাস্থ্য খোঁজিতে স্বাগতম!</h2>
//                 <p style={{
//                     fontFamily: "'Hind Siliguri', sans-serif",
//                     color: "#5a7a66", fontSize: 14,
//                     marginBottom: 28, lineHeight: 1.7,
//                 }}>
//                     আপনার স্বাস্থ্যসেবার বিশ্বস্ত সঙ্গী।<br />
//                     শুরু করতে নিচের বাটনে চাপুন।
//                 </p>
//                 <button onClick={handleStart} style={{
//                     width: "100%", padding: "14px",
//                     borderRadius: 50, border: "none",
//                     background: "linear-gradient(135deg, #2e9e56, #1a6b38)",
//                     color: "#fff",
//                     fontFamily: "'Hind Siliguri', sans-serif",
//                     fontSize: 16, fontWeight: 700,
//                     cursor: "pointer", marginBottom: 12,
//                     boxShadow: "0 6px 20px rgba(46,158,86,0.35)",
//                 }}>
//                     🔊 শুরু করুন
//                 </button>
//                 <button onClick={onClose} style={{
//                     background: "none", border: "none",
//                     color: "#9ca3af",
//                     fontFamily: "'Hind Siliguri', sans-serif",
//                     fontSize: 13, cursor: "pointer", textDecoration: "underline",
//                 }}>
//                     এড়িয়ে যান
//                 </button>
//             </div>
//             <style>{`
//                 @keyframes popIn {
//                     from { transform: scale(0.8); opacity: 0; }
//                     to   { transform: scale(1);   opacity: 1; }
//                 }
//             `}</style>
//         </div>
//     );
// }

// // ── 1. Live Stats Counter ─────────────────────────────────────────────────────
// function LiveStatsCounter() {
//     const statsData = [
//         { value: 500, suffix: "+", label: "বিশেষজ্ঞ ডাক্তার" },
//         { value: 64, suffix: "", label: "জেলায় সেবা" },
//         { value: 10, suffix: " লাখ+", label: "রোগী সেবা পেয়েছেন" },
//     ];
//     const countersRef = useRef([]);
//     const sectionRef = useRef(null);
//     const hasAnimated = useRef(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 if (entries[0].isIntersecting && !hasAnimated.current) {
//                     hasAnimated.current = true;
//                     countersRef.current.forEach((el, i) => {
//                         if (!el) return;
//                         const target = statsData[i].value;
//                         const suffix = statsData[i].suffix;
//                         const duration = 2000;
//                         const steps = 60;
//                         const increment = target / steps;
//                         let current = 0;
//                         const timer = setInterval(() => {
//                             current += increment;
//                             if (current >= target) { current = target; clearInterval(timer); }
//                             const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
//                             const num = Math.floor(current).toString().replace(/\d/g, d => banglaDigits[d]);
//                             el.textContent = num + suffix;
//                         }, duration / steps);
//                     });
//                 }
//             },
//             { threshold: 0.5 }
//         );
//         if (sectionRef.current) observer.observe(sectionRef.current);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div ref={sectionRef} style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
//             {statsData.map((s, i) => (
//                 <div key={s.label} style={{
//                     padding: "0 32px", textAlign: "center",
//                     borderRight: i < statsData.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none",
//                 }}>
//                     <div ref={(el) => (countersRef.current[i] = el)} style={{
//                         fontFamily: "'Noto Serif Bengali', serif",
//                         fontSize: 26, fontWeight: 900, color: "#fff", marginBottom: 4,
//                     }}>০</div>
//                     <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{s.label}</div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// // ── 2. AI Symptom Checker ─────────────────────────────────────────────────────
// function AISymptomChecker() {
//     const [selected, setSelected] = useState([]);
//     const [result, setResult] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const sectionRef = useRef(null);

//     const toggleSymptom = (sym) => {
//         setSelected(prev => prev.includes(sym) ? prev.filter(s => s !== sym) : [...prev, sym]);
//         setResult(null);
//     };

//     const analyze = () => {
//         if (selected.length === 0) return;
//         setLoading(true);
//         setResult(null);
//         setTimeout(() => {
//             const specCount = {};
//             selected.forEach(sym => {
//                 const s = symptomMap[sym]?.spec;
//                 if (s) specCount[s] = (specCount[s] || 0) + 1;
//             });
//             const topSpec = Object.entries(specCount).sort((a, b) => b[1] - a[1])[0]?.[0];
//             const matched = Object.values(symptomMap).find(v => v.spec === topSpec);
//             const res = { spec: topSpec, ...matched };
//             setResult(res);
//             setLoading(false);
//             if (window.speechSynthesis) {
//                 window.speechSynthesis.cancel();
//                 const utter = new SpeechSynthesisUtterance(
//                     `আপনার লক্ষণ অনুযায়ী ${topSpec} বিশেষজ্ঞ ডাক্তারের পরামর্শ নেওয়া উচিত।`
//                 );
//                 utter.lang = "bn-BD";
//                 utter.rate = 0.88;
//                 window.speechSynthesis.speak(utter);
//             }
//         }, 1200);
//     };

//     const reset = () => {
//         setSelected([]);
//         setResult(null);
//         window.speechSynthesis?.cancel();
//     };

//     useEffect(() => {
//         const el = sectionRef.current;
//         if (!el) return;
//         el.style.opacity = "0";
//         el.style.transform = "translateY(40px)";
//         const observer = new IntersectionObserver(([entry]) => {
//             if (entry.isIntersecting) {
//                 el.style.transition = "all 0.7s cubic-bezier(0.34,1.2,0.64,1)";
//                 el.style.opacity = "1";
//                 el.style.transform = "translateY(0)";
//                 observer.unobserve(el);
//             }
//         }, { threshold: 0.15 });
//         observer.observe(el);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div ref={sectionRef} style={{ marginBottom: 72 }}>
//             <div style={{ textAlign: "center", marginBottom: 40 }}>
//                 <span style={{ display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56", border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px", fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12 }}>AI সহায়তা</span>
//                 <h2 style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8 }}>লক্ষণ দিয়ে ডাক্তার খুঁজুন</h2>
//                 <p style={{ color: "#5a7a66", fontSize: 14 }}>আপনার সমস্যা বেছে নিন — AI আপনাকে সঠিক বিশেষজ্ঞ সাজেস্ট করবে</p>
//                 <div style={{ width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)", borderRadius: 4, margin: "12px auto 0" }} />
//             </div>

//             <div style={{ background: "#fff", borderRadius: 28, boxShadow: "0 8px 40px rgba(13,59,30,0.10)", border: "1.5px solid #e0f0e8", overflow: "hidden" }}>
//                 <div style={{ height: 5, background: "linear-gradient(90deg, #2e9e56, #5ecb87, #f0c040)" }} />
//                 <div style={{ padding: "36px 36px 32px" }}>
//                     <p style={{ fontSize: 13, fontWeight: 600, color: "#5a7a66", marginBottom: 16 }}>
//                         🩺 আপনার লক্ষণ বেছে নিন (একাধিক সিলেক্ট করতে পারবেন):
//                     </p>
//                     <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
//                         {allSymptoms.map(sym => {
//                             const isSelected = selected.includes(sym);
//                             const info = symptomMap[sym];
//                             return (
//                                 <button key={sym} onClick={() => toggleSymptom(sym)} style={{
//                                     padding: "9px 18px", borderRadius: 50,
//                                     border: `2px solid ${isSelected ? info.color : "#d4e8da"}`,
//                                     background: isSelected ? info.color : "#fff",
//                                     color: isSelected ? "#fff" : "#3a5a46",
//                                     fontSize: 13, fontWeight: 600, cursor: "pointer",
//                                     transition: "all 0.2s cubic-bezier(0.34,1.56,0.64,1)",
//                                     transform: isSelected ? "scale(1.06)" : "scale(1)",
//                                     boxShadow: isSelected ? `0 4px 16px ${info.color}40` : "none",
//                                     fontFamily: "'Hind Siliguri', sans-serif",
//                                 }}>{sym}</button>
//                             );
//                         })}
//                     </div>

//                     {selected.length > 0 && (
//                         <p style={{ fontSize: 12, color: "#2e9e56", marginBottom: 16, fontWeight: 600 }}>
//                             ✅ {selected.length}টি লক্ষণ বেছেছেন: {selected.join(", ")}
//                         </p>
//                     )}

//                     <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
//                         <button onClick={analyze} disabled={selected.length === 0 || loading} style={{
//                             background: selected.length === 0 ? "#ccc" : "linear-gradient(135deg, #2e9e56, #1a6b38)",
//                             color: "#fff", border: "none", borderRadius: 50,
//                             padding: "13px 32px", fontSize: 14, fontWeight: 700,
//                             cursor: selected.length === 0 ? "not-allowed" : "pointer",
//                             boxShadow: selected.length > 0 ? "0 6px 20px rgba(46,158,86,0.35)" : "none",
//                             transition: "all 0.2s ease", fontFamily: "'Hind Siliguri', sans-serif",
//                         }}>
//                             {loading ? "⏳ বিশ্লেষণ হচ্ছে..." : "🔍 ডাক্তার খুঁজুন"}
//                         </button>
//                         {selected.length > 0 && (
//                             <button onClick={reset} style={{
//                                 background: "transparent", color: "#5a7a66",
//                                 border: "1.5px solid #d4e8da", borderRadius: 50,
//                                 padding: "12px 22px", fontSize: 13, fontWeight: 600,
//                                 cursor: "pointer", fontFamily: "'Hind Siliguri', sans-serif",
//                             }}>রিসেট করুন</button>
//                         )}
//                     </div>

//                     {loading && (
//                         <div style={{ marginTop: 28, padding: "24px", background: "#f7fbf9", borderRadius: 18, textAlign: "center" }}>
//                             <div style={{ display: "inline-block", width: 36, height: 36, border: "3px solid #e0f0e8", borderTop: "3px solid #2e9e56", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
//                             <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
//                             <p style={{ marginTop: 12, color: "#5a7a66", fontSize: 13 }}>আপনার লক্ষণ বিশ্লেষণ করা হচ্ছে...</p>
//                         </div>
//                     )}

//                     {result && !loading && (
//                         <div style={{ marginTop: 28, background: `linear-gradient(135deg, ${result.bg}, #fff)`, border: `2px solid ${result.color}30`, borderRadius: 20, padding: "28px", animation: "fadeInUp 0.5s ease" }}>
//                             <style>{`@keyframes fadeInUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }`}</style>
//                             <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
//                                 <div style={{ width: 56, height: 56, borderRadius: 16, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, boxShadow: `0 6px 20px ${result.color}25`, border: `2px solid ${result.color}20` }}>{result.icon}</div>
//                                 <div>
//                                     <p style={{ fontSize: 11, color: result.color, fontWeight: 700, margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.5px" }}>AI সাজেশন</p>
//                                     <p style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 20, fontWeight: 800, color: "#0d3b1e", margin: 0 }}>{result.spec} বিশেষজ্ঞ</p>
//                                 </div>
//                             </div>
//                             <p style={{ fontSize: 13, color: "#5a7a66", marginBottom: 20, lineHeight: 1.7 }}>
//                                 আপনার লক্ষণ অনুযায়ী <strong style={{ color: result.color }}>{result.spec} বিশেষজ্ঞ</strong> ডাক্তারের পরামর্শ নেওয়া উচিত।
//                             </p>
//                             <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
//                                 <Link to={`/search?specialization=${result.spec}`} style={{ textDecoration: "none" }}>
//                                     <div style={{ background: result.color, color: "#fff", borderRadius: 50, padding: "11px 24px", fontSize: 13, fontWeight: 700, boxShadow: `0 4px 16px ${result.color}40`, cursor: "pointer" }}>এখনই ডাক্তার দেখুন →</div>
//                                 </Link>
//                                 <div style={{ background: "rgba(255,255,255,0.8)", border: `1.5px solid ${result.color}30`, color: result.color, borderRadius: 50, padding: "10px 20px", fontSize: 12, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>⚠️ এটি AI সাজেশন, চিকিৎসকের পরামর্শই চূড়ান্ত</div>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// // ── Feature Cards ─────────────────────────────────────────────────────────────
// function FeatureCards() {
//     const cardsRef = useRef([]);
//     useEffect(() => {
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     entry.target.style.opacity = "1";
//                     entry.target.style.transform = "translateY(0) scale(1)";
//                 }
//             });
//         }, { threshold: 0.15 });
//         cardsRef.current.forEach((card) => { if (card) observer.observe(card); });
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20, marginBottom: 72 }}>
//             {features.map((f, i) => (
//                 <div key={f.title} ref={(el) => (cardsRef.current[i] = el)} style={{
//                     background: "#fff", borderRadius: 22, padding: "32px 24px",
//                     border: `1.5px solid ${f.color}20`, boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
//                     opacity: 0, transform: "translateY(40px) scale(0.96)",
//                     transition: `all 0.6s cubic-bezier(0.34,1.2,0.64,1) ${i * 80}ms`,
//                     cursor: "default", position: "relative", overflow: "hidden",
//                 }}
//                     onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-8px) scale(1.03)"; e.currentTarget.style.boxShadow = `0 20px 50px ${f.color}25`; e.currentTarget.style.borderColor = f.color; }}
//                     onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)"; e.currentTarget.style.borderColor = `${f.color}20`; }}
//                 >
//                     <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${f.color}, ${f.color}80)`, borderRadius: "22px 22px 0 0" }} />
//                     <div style={{ width: 60, height: 60, borderRadius: 16, background: f.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, marginBottom: 18, boxShadow: `0 6px 20px ${f.color}20` }}>{f.icon}</div>
//                     <div style={{ fontWeight: 700, fontSize: 16, color: "#0d3b1e", marginBottom: 8 }}>{f.title}</div>
//                     <div style={{ fontSize: 13, color: "#5a7a66", lineHeight: 1.7 }}>{f.desc}</div>
//                     <div style={{ position: "absolute", bottom: 16, right: 16, width: 8, height: 8, borderRadius: "50%", background: f.color, opacity: 0.4 }} />
//                 </div>
//             ))}
//         </div>
//     );
// }

// // ── Specialization Grid ───────────────────────────────────────────────────────
// function SpecializationGrid() {
//     const gridRef = useRef(null);
//     useEffect(() => {
//         const cards = gridRef.current?.querySelectorAll(".spec-card");
//         if (!cards) return;
//         cards.forEach((card, i) => {
//             const fromLeft = i < 4;
//             card.style.opacity = "0";
//             card.style.transform = `translateX(${fromLeft ? "-120px" : "120px"}) scale(0.92)`;
//             card.style.transition = `transform 0.6s cubic-bezier(0.34,1.2,0.64,1), opacity 0.5s ease`;
//         });
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     cards.forEach((card, i) => {
//                         const fromLeft = i < 4;
//                         const staggerIndex = fromLeft ? i : 7 - i;
//                         setTimeout(() => { card.style.opacity = "1"; card.style.transform = "translateX(0) scale(1)"; }, staggerIndex * 90);
//                     });
//                     observer.unobserve(entry.target);
//                 }
//             });
//         }, { threshold: 0.1 });
//         if (gridRef.current) observer.observe(gridRef.current);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div ref={gridRef} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
//             {specializations.map((s) => (
//                 <Link key={s.name} to={`/search?specialization=${s.name}`} style={{ textDecoration: "none" }}>
//                     <div className="spec-card" style={{
//                         background: "#fff", borderRadius: 22, padding: "32px 16px 24px",
//                         textAlign: "center", border: "1.5px solid #e0f0e8", cursor: "pointer",
//                         boxShadow: "0 4px 16px rgba(0,0,0,0.05)", position: "relative", overflow: "hidden",
//                         transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease, border-color 0.2s",
//                     }}
//                         onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-8px) scale(1.04)"; e.currentTarget.style.boxShadow = `0 20px 50px rgba(26,107,56,0.18)`; e.currentTarget.style.borderColor = s.accent; }}
//                         onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)"; e.currentTarget.style.borderColor = "#e0f0e8"; }}
//                     >
//                         <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: s.accent, borderRadius: "22px 22px 0 0", opacity: 0.7 }} />
//                         <div style={{ width: 68, height: 68, borderRadius: 20, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, margin: "0 auto 16px", boxShadow: "0 6px 20px rgba(0,0,0,0.08)" }}>{s.icon}</div>
//                         <p style={{ fontSize: 14, fontWeight: 700, color: "#0d3b1e", margin: "0 0 6px" }}>{s.name}</p>
//                         <div style={{ display: "inline-flex", alignItems: "center", gap: 4, background: `${s.accent}15`, border: `1px solid ${s.accent}30`, borderRadius: 50, padding: "3px 10px", fontSize: 11, fontWeight: 600, color: s.accent }}>{s.count} ডাক্তার</div>
//                     </div>
//                 </Link>
//             ))}
//         </div>
//     );
// }

// // ── How It Works ──────────────────────────────────────────────────────────────
// function HowItWorks() {
//     const steps = [
//         { icon: "🔍", step: "০১", title: "ডাক্তার খুঁজুন", desc: "বিভাগ, নাম বা এলাকা দিয়ে আপনার পছন্দের বিশেষজ্ঞ খুঁজুন", color: "#2e7d32", bg: "#eef9f2", to: "/search", btnLabel: "এখনই খুঁজুন →" },
//         { icon: "📅", step: "০২", title: "অ্যাপয়েন্টমেন্ট নিন", desc: "আপনার সুবিধামতো সময় ও তারিখ বেছে নিয়ে বুকিং করুন", color: "#1565c0", bg: "#e3f2fd", to: "/search", btnLabel: "বুকিং করুন →" },
//         { icon: "💊", step: "০৩", title: "পরামর্শ ও চিকিৎসা", desc: "সরাসরি বা অনলাইনে ডাক্তারের পরামর্শ নিন এবং সুস্থ থাকুন", color: "#ad1457", bg: "#fce4ec", to: "/search?mode=online", btnLabel: "পরামর্শ নিন →" },
//     ];
//     const sectionRef = useRef(null);
//     const stepsRef = useRef([]);
//     useEffect(() => {
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     stepsRef.current.forEach((el, i) => { if (el) setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, i * 150); });
//                     observer.unobserve(entry.target);
//                 }
//             });
//         }, { threshold: 0.2 });
//         if (sectionRef.current) observer.observe(sectionRef.current);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div ref={sectionRef} style={{ marginBottom: 72 }}>
//             <div style={{ textAlign: "center", marginBottom: 40 }}>
//                 <span style={{ display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56", border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px", fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12 }}>কিভাবে কাজ করে</span>
//                 <h2 style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8 }}>মাত্র ৩টি সহজ ধাপে</h2>
//                 <p style={{ color: "#5a7a66", fontSize: 14 }}>শুরু থেকে চিকিৎসা পর্যন্ত — সবকিছু এক জায়গায়</p>
//                 <div style={{ width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)", borderRadius: 4, margin: "12px auto 0" }} />
//             </div>
//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, position: "relative" }}>
//                 <div style={{ position: "absolute", top: 52, left: "16.5%", right: "16.5%", height: 2, background: "linear-gradient(90deg, #2e7d32, #1565c0, #ad1457)", opacity: 0.2, zIndex: 0 }} />
//                 {steps.map((s, i) => (
//                     <div key={s.step} ref={(el) => (stepsRef.current[i] = el)} style={{
//                         background: "#fff", borderRadius: 24, padding: "36px 24px 28px",
//                         border: `1.5px solid ${s.color}18`, boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
//                         textAlign: "center", position: "relative", zIndex: 1,
//                         opacity: 0, transform: "translateY(30px)",
//                         transition: `all 0.6s cubic-bezier(0.34,1.2,0.64,1) ${i * 150}ms`,
//                     }}
//                         onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = `0 20px 50px ${s.color}20`; e.currentTarget.style.borderColor = s.color; }}
//                         onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)"; e.currentTarget.style.borderColor = `${s.color}18`; }}
//                     >
//                         <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: s.color, color: "#fff", borderRadius: 50, width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, boxShadow: `0 4px 12px ${s.color}40` }}>{i + 1}</div>
//                         <div style={{ width: 80, height: 80, borderRadius: 24, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, margin: "0 auto 20px", boxShadow: `0 8px 24px ${s.color}20` }}>{s.icon}</div>
//                         <p style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 17, fontWeight: 800, color: "#0d3b1e", marginBottom: 10 }}>{s.title}</p>
//                         <p style={{ fontSize: 13, color: "#5a7a66", lineHeight: 1.7, margin: "0 0 20px" }}>{s.desc}</p>
//                         <Link to={s.to} style={{ textDecoration: "none" }}>
//                             <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: s.color, color: "#fff", borderRadius: 50, padding: "11px 22px", fontSize: 13, fontWeight: 700, cursor: "pointer", boxShadow: `0 4px 14px ${s.color}40`, transition: "all 0.2s ease", fontFamily: "'Hind Siliguri', sans-serif" }}
//                                 onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.07)"; }}
//                                 onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
//                             >{s.btnLabel}</div>
//                         </Link>
//                         <div style={{ marginTop: 16, display: "inline-flex", alignItems: "center", gap: 4, background: `${s.color}12`, border: `1px solid ${s.color}25`, borderRadius: 50, padding: "4px 14px", fontSize: 11, fontWeight: 600, color: s.color }}>ধাপ {s.step}</div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// // ── Testimonials ──────────────────────────────────────────────────────────────
// function Testimonials() {
//     const sectionRef = useRef(null);
//     const cardsRef = useRef([]);
//     useEffect(() => {
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     cardsRef.current.forEach((el, i) => { if (el) setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0) scale(1)"; }, i * 100); });
//                     observer.unobserve(entry.target);
//                 }
//             });
//         }, { threshold: 0.1 });
//         if (sectionRef.current) observer.observe(sectionRef.current);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div ref={sectionRef} style={{ marginBottom: 72 }}>
//             <div style={{ textAlign: "center", marginBottom: 40 }}>
//                 <span style={{ display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56", border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px", fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12 }}>রোগীর কথা</span>
//                 <h2 style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8 }}>তারা কী বলছেন</h2>
//                 <p style={{ color: "#5a7a66", fontSize: 14 }}>হাজারো সন্তুষ্ট রোগীর মধ্যে কিছু অভিজ্ঞতা</p>
//                 <div style={{ width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)", borderRadius: 4, margin: "12px auto 0" }} />
//             </div>
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
//                 {testimonials.map((t, i) => (
//                     <div key={t.name} ref={(el) => (cardsRef.current[i] = el)} style={{
//                         background: "#fff", borderRadius: 22, padding: "28px 24px",
//                         border: `1.5px solid ${t.color}18`, boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
//                         opacity: 0, transform: "translateY(30px) scale(0.97)",
//                         transition: `all 0.55s cubic-bezier(0.34,1.2,0.64,1) ${i * 100}ms`, position: "relative",
//                     }}
//                         onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px) scale(1.02)"; e.currentTarget.style.boxShadow = `0 16px 40px ${t.color}20`; e.currentTarget.style.borderColor = t.color; }}
//                         onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)"; e.currentTarget.style.borderColor = `${t.color}18`; }}
//                     >
//                         <div style={{ position: "absolute", top: 16, right: 20, fontSize: 48, color: `${t.color}15`, lineHeight: 1, fontFamily: "Georgia, serif", fontWeight: 900 }}>"</div>
//                         <div style={{ fontSize: 14, marginBottom: 14, color: "#f0c040" }}>{"★".repeat(t.rating)}</div>
//                         <p style={{ fontSize: 14, color: "#3a5a46", lineHeight: 1.8, marginBottom: 20, fontStyle: "italic" }}>"{t.text}"</p>
//                         <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//                             <div style={{ width: 42, height: 42, borderRadius: "50%", background: t.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700, color: t.color, border: `2px solid ${t.color}30` }}>{t.avatar}</div>
//                             <div>
//                                 <p style={{ fontSize: 14, fontWeight: 700, color: "#0d3b1e", margin: 0 }}>{t.name}</p>
//                                 <p style={{ fontSize: 12, color: "#5a7a66", margin: 0 }}>📍 {t.city}</p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// // ── Featured Doctors ──────────────────────────────────────────────────────────
// function FeaturedDoctors() {
//     const sectionRef = useRef(null);
//     const cardsRef = useRef([]);
//     useEffect(() => {
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     cardsRef.current.forEach((el, i) => { if (el) setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, i * 120); });
//                     observer.unobserve(entry.target);
//                 }
//             });
//         }, { threshold: 0.1 });
//         if (sectionRef.current) observer.observe(sectionRef.current);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div ref={sectionRef} style={{ marginBottom: 72 }}>
//             <div style={{ textAlign: "center", marginBottom: 40 }}>
//                 <span style={{ display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56", border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px", fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12 }}>বিশেষজ্ঞ দল</span>
//                 <h2 style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8 }}>জনপ্রিয় ডাক্তারগণ</h2>
//                 <p style={{ color: "#5a7a66", fontSize: 14 }}>আমাদের সর্বোচ্চ রেটিংপ্রাপ্ত বিশেষজ্ঞ ডাক্তারদের সাথে পরিচিত হন</p>
//                 <div style={{ width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)", borderRadius: 4, margin: "12px auto 0" }} />
//             </div>
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
//                 {featuredDoctors.map((d, i) => (
//                     <div key={d.name} ref={(el) => (cardsRef.current[i] = el)} style={{
//                         background: "#fff", borderRadius: 22, padding: "28px 20px 24px",
//                         border: `1.5px solid ${d.color}18`, boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
//                         textAlign: "center", opacity: 0, transform: "translateY(30px)",
//                         transition: `all 0.6s cubic-bezier(0.34,1.2,0.64,1) ${i * 120}ms`,
//                         cursor: "pointer", position: "relative", overflow: "hidden",
//                     }}
//                         onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = `0 20px 50px ${d.color}25`; e.currentTarget.style.borderColor = d.color; }}
//                         onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)"; e.currentTarget.style.borderColor = `${d.color}18`; }}
//                     >
//                         <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: d.color, borderRadius: "22px 22px 0 0", opacity: 0.7 }} />
//                         <div style={{ width: 72, height: 72, borderRadius: "50%", background: d.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, fontWeight: 700, color: d.color, margin: "0 auto 16px", border: `3px solid ${d.color}30`, boxShadow: `0 8px 24px ${d.color}25` }}>{d.avatar}</div>
//                         <p style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 15, fontWeight: 800, color: "#0d3b1e", margin: "0 0 4px" }}>{d.name}</p>
//                         <p style={{ fontSize: 12, color: "#5a7a66", margin: "0 0 16px" }}>{d.spec}</p>
//                         <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
//                             <div style={{ background: `${d.color}10`, borderRadius: 50, padding: "4px 10px", fontSize: 11, color: d.color, fontWeight: 600 }}>⭐ {d.rating}</div>
//                             <div style={{ background: "#f0f4f0", borderRadius: 50, padding: "4px 10px", fontSize: 11, color: "#5a7a66", fontWeight: 600 }}>👥 {d.patients}</div>
//                         </div>
//                         <div style={{ fontSize: 11, color: "#5a7a66", marginBottom: 16 }}>অভিজ্ঞতা: {d.exp}</div>
//                         <Link to={`/search?specialization=${d.spec}`} style={{ textDecoration: "none" }}>
//                             <div style={{ background: d.color, color: "#fff", borderRadius: 50, padding: "10px 20px", fontSize: 13, fontWeight: 700, transition: "all 0.2s ease", boxShadow: `0 4px 14px ${d.color}40` }}
//                                 onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "scale(1.05)"; }}
//                                 onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1)"; }}
//                             >অ্যাপয়েন্টমেন্ট নিন</div>
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//             <div style={{ textAlign: "center", marginTop: 32 }}>
//                 <Link to="/search" style={{ textDecoration: "none" }}>
//                     <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "#2e9e56", border: "2px solid #2e9e56", borderRadius: 50, padding: "12px 28px", fontSize: 14, fontWeight: 700, transition: "all 0.2s ease" }}
//                         onMouseEnter={(e) => { e.currentTarget.style.background = "#2e9e56"; e.currentTarget.style.color = "#fff"; }}
//                         onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#2e9e56"; }}
//                     >সকল ডাক্তার দেখুন →</div>
//                 </Link>
//             </div>
//         </div>
//     );
// }

// // ── Home ──────────────────────────────────────────────────────────────────────
// function Home() {
//     const { user } = useContext(AuthContext);
//     const [showPopup, setShowPopup] = useState(false);

//     useEffect(() => {
//         if (user?.role === "admin") return;
//         const timer = setTimeout(() => setShowPopup(true), 600);
//         return () => clearTimeout(timer);
//     }, [user]);

//     return (
//         <div style={{ fontFamily: "'Hind Siliguri', sans-serif", background: "#f7fbf9", minHeight: "100vh" }}>
//             <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Noto+Serif+Bengali:wght@700;800;900&display=swap" rel="stylesheet" />

//             {showPopup && <WelcomeVoicePopup onClose={() => setShowPopup(false)} />}

//             <section style={{
//                 position: "relative",
//                 background: "linear-gradient(160deg, #062210 0%, #0d3b1e 40%, #1a6b38 80%, #2e9e56 100%)",
//                 padding: "80px 24px 100px", textAlign: "center", overflow: "hidden",
//             }}>
//                 <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
//                 <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(94,203,135,0.12) 0%, transparent 70%)", top: -150, right: -150, pointerEvents: "none" }} />

//                 <div style={{ position: "relative", zIndex: 2, maxWidth: 720, margin: "0 auto" }}>
//                     <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 50, padding: "7px 18px", fontSize: 13, color: "#a8e6c0", marginBottom: 28, backdropFilter: "blur(8px)" }}>
//                         <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#5ecb87", boxShadow: "0 0 8px #5ecb87", display: "inline-block" }} />
//                         বাংলাদেশের নির্ভরযোগ্য স্বাস্থ্যসেবা প্ল্যাটফর্ম
//                     </div>

//                     <h1 style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: "clamp(2.6rem, 6vw, 4.6rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15, letterSpacing: "-1px", marginBottom: 16, textShadow: "0 2px 12px rgba(0,0,0,0.2)" }}>
//                         সঠিক ডাক্তার,{" "}
//                         <span style={{ background: "linear-gradient(135deg, #5ecb87, #f0c040)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>সঠিক সময়ে</span>
//                     </h1>

//                     <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, marginBottom: 40, lineHeight: 1.7 }}>
//                         বাংলাদেশের যেকোনো প্রান্তে বিশেষজ্ঞ ডাক্তার খুঁজুন —<br />
//                         সহজে, দ্রুত এবং বিশ্বস্তভাবে
//                     </p>

//                     <div style={{ display: "flex", justifyContent: "center", marginBottom: 52 }}>
//                         <SearchBar />
//                     </div>

//                     <LiveStatsCounter />
//                 </div>
//             </section>

//             <div style={{ marginTop: -2, lineHeight: 0, background: "#0d3b1e" }}>
//                 <svg viewBox="0 0 1200 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 70 }}>
//                     <path d="M0,35 C200,70 400,0 600,35 C800,70 1000,10 1200,35 L1200,70 L0,70 Z" fill="#f7fbf9" />
//                 </svg>
//             </div>

//             <div style={{ maxWidth: 1060, margin: "0 auto", padding: "64px 24px 80px" }}>
//                 <div style={{ textAlign: "center", marginBottom: 40 }}>
//                     <span style={{ display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56", border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px", fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12 }}>কেন আমরা</span>
//                     <h2 style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8 }}>আমাদের বিশেষত্ব</h2>
//                     <p style={{ color: "#5a7a66", fontSize: 14 }}>স্বাস্থ্য খোঁজি কেন বাংলাদেশের সেরা স্বাস্থ্যসেবা প্ল্যাটফর্ম</p>
//                     <div style={{ width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)", borderRadius: 4, margin: "12px auto 0" }} />
//                 </div>

//                 <FeatureCards />
//                 <HowItWorks />
//                 <AISymptomChecker />

//                 <div style={{ textAlign: "center", marginBottom: 40 }}>
//                     <span style={{ display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56", border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px", fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12 }}>বিভাগসমূহ</span>
//                     <h2 style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8 }}>বিশেষজ্ঞতা অনুযায়ী খুঁজুন</h2>
//                     <p style={{ color: "#5a7a66", fontSize: 14 }}>আপনার প্রয়োজন অনুযায়ী বিভাগ বেছে নিন</p>
//                     <div style={{ width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)", borderRadius: 4, margin: "12px auto 0" }} />
//                 </div>
//                 <div style={{ marginBottom: 72 }}><SpecializationGrid /></div>

//                 <FeaturedDoctors />
//                 <Testimonials />

//                 <div style={{
//                     background: "linear-gradient(135deg, #0d3b1e 0%, #1a6b38 100%)",
//                     borderRadius: 24, padding: "44px 40px",
//                     display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20,
//                     boxShadow: "0 20px 60px rgba(13,59,30,0.3)", position: "relative", overflow: "hidden",
//                 }}>
//                     <div style={{ position: "absolute", right: 160, top: "50%", transform: "translateY(-50%)", fontSize: 110, opacity: 0.06, pointerEvents: "none" }}>🏥</div>
//                     <div style={{ position: "relative" }}>
//                         <h3 style={{ fontFamily: "'Noto Serif Bengali', serif", color: "#fff", fontSize: 22, fontWeight: 800, marginBottom: 6 }}>জরুরি সাহায্য দরকার?</h3>
//                         <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>আমাদের হেল্পলাইনে যোগাযোগ করুন — ২৪ ঘণ্টা, ৭ দিন</p>
//                     </div>
//                     <a href="tel:16000" style={{
//                         background: "#fff", color: "#0d3b1e", padding: "14px 32px", borderRadius: 50,
//                         fontWeight: 700, fontSize: 16, textDecoration: "none", flexShrink: 0,
//                         boxShadow: "0 8px 24px rgba(0,0,0,0.2)", display: "inline-flex", alignItems: "center", gap: 8, transition: "all 0.2s ease",
//                     }}
//                         onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.3)"; }}
//                         onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)"; }}
//                     >📞 ১৬০০০ তে কল করুন</a>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Home;



import { Link } from "react-router-dom";
import { useEffect, useRef, useState, useContext } from "react";
import SearchBar from "../components/SearchBar";
import { AuthContext } from "../context/AuthContext";

/* ═══════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════ */
const specializations = [
    { name: "মেডিসিন", icon: "💊", bg: "linear-gradient(135deg,#e8f5e9,#c8e6c9)", accent: "#2e7d32", count: "১২০+" },
    { name: "শিশু রোগ", icon: "👶", bg: "linear-gradient(135deg,#e3f2fd,#bbdefb)", accent: "#1565c0", count: "৮৫+" },
    { name: "গাইনি", icon: "🌸", bg: "linear-gradient(135deg,#fce4ec,#f8bbd0)", accent: "#ad1457", count: "৭৪+" },
    { name: "অর্থোপেডিক", icon: "🦴", bg: "linear-gradient(135deg,#fff8e1,#ffe082)", accent: "#f57f17", count: "৫২+" },
    { name: "চর্মরোগ", icon: "🩹", bg: "linear-gradient(135deg,#f3e5f5,#e1bee7)", accent: "#6a1b9a", count: "৪৮+" },
    { name: "চক্ষু", icon: "👁️", bg: "linear-gradient(135deg,#e0f7fa,#b2ebf2)", accent: "#00695c", count: "৩৯+" },
    { name: "দন্ত রোগ", icon: "🦷", bg: "linear-gradient(135deg,#e8eaf6,#c5cae9)", accent: "#283593", count: "৬১+" },
    { name: "মানসিক রোগ", icon: "🧠", bg: "linear-gradient(135deg,#e8f5e9,#a5d6a7)", accent: "#1b5e20", count: "৩৩+" },
];

const features = [
    { icon: "⚡", title: "তাৎক্ষণিক বুকিং", desc: "মাত্র ৩০ সেকেন্ডে অ্যাপয়েন্টমেন্ট নিন, কোনো অপেক্ষা নেই", color: "#2e7d32", bg: "#eef9f2" },
    { icon: "✅", title: "যাচাইকৃত ডাক্তার", desc: "সকল ডাক্তার BMDC রেজিস্ট্রেশন যাচাইকৃত", color: "#1565c0", bg: "#e3f2fd" },
    { icon: "💬", title: "অনলাইন পরামর্শ", desc: "ঘরে বসেই ভিডিও কলে ডাক্তারের সাথে কথা বলুন", color: "#ad1457", bg: "#fce4ec" },
    { icon: "🔒", title: "সম্পূর্ণ নিরাপদ", desc: "আপনার তথ্য সম্পূর্ণ সুরক্ষিত এবং গোপনীয়", color: "#f57f17", bg: "#fff8e1" },
    { icon: "🌍", title: "সারাদেশে সেবা", desc: "বাংলাদেশের ৬৪ জেলায় আমাদের ডাক্তার নেটওয়ার্ক", color: "#6a1b9a", bg: "#f3e5f5" },
    { icon: "⭐", title: "রেটিং ও রিভিউ", desc: "হাজারো রোগীর রিভিউ দেখে সেরা ডাক্তার বেছে নিন", color: "#00695c", bg: "#e0f7fa" },
];

const testimonials = [
    { name: "রাহেলা বেগম", city: "ঢাকা", avatar: "র", color: "#2e7d32", bg: "#eef9f2", rating: 5, text: "মাত্র কয়েক মিনিটে অ্যাপয়েন্টমেন্ট নিলাম। ডাক্তার অনেক মনোযোগ দিয়ে শুনলেন, সত্যিই দারুণ অভিজ্ঞতা।" },
    { name: "মো. করিম উদ্দিন", city: "চট্টগ্রাম", avatar: "ক", color: "#1565c0", bg: "#e3f2fd", rating: 5, text: "অনলাইনে পরামর্শ নেওয়া এত সহজ হবে ভাবিনি। সিলেট থেকে ঢাকার বিশেষজ্ঞ ডাক্তারের সাথে কথা বললাম।" },
    { name: "সুমাইয়া আক্তার", city: "সিলেট", avatar: "স", color: "#ad1457", bg: "#fce4ec", rating: 5, text: "BMDC যাচাইকৃত দেখে ভরসা পেলাম। বাচ্চার জন্য শিশু বিশেষজ্ঞ খুব দ্রুত পেলাম।" },
    { name: "আব্দুর রহমান", city: "রাজশাহী", avatar: "আ", color: "#f57f17", bg: "#fff8e1", rating: 5, text: "গ্রামে থেকেও শহরের ভালো ডাক্তার পাচ্ছি — এটাই সবচেয়ে বড় সুবিধা এই প্ল্যাটফর্মের।" },
    { name: "নাসরিন সুলতানা", city: "খুলনা", avatar: "ন", color: "#6a1b9a", bg: "#f3e5f5", rating: 5, text: "রিভিউ দেখে ডাক্তার বেছে নেওয়া খুব সহজ হয়েছে। পরিষেবাটি সত্যিই বিশ্বস্ত।" },
    { name: "তানভীর হোসেন", city: "বরিশাল", avatar: "ত", color: "#00695c", bg: "#e0f7fa", rating: 5, text: "হেল্পলাইনে কল করলাম, সাথে সাথে সাহায্য পেলাম। রাত ১১টায়ও সেবা পেলাম।" },
];

const featuredDoctors = [
    { name: "ডা. আহমেদ হোসেন", spec: "মেডিসিন বিশেষজ্ঞ", exp: "১৫ বছর", rating: "৪.৯", patients: "২,৪০০+", avatar: "আ", color: "#2e7d32", bg: "#eef9f2" },
    { name: "ডা. সালমা খানম", spec: "শিশু রোগ বিশেষজ্ঞ", exp: "১২ বছর", rating: "৪.৮", patients: "১,৮০০+", avatar: "স", color: "#1565c0", bg: "#e3f2fd" },
    { name: "ডা. ফারহান করিম", spec: "হৃদরোগ বিশেষজ্ঞ", exp: "২০ বছর", rating: "৪.৯", patients: "৩,১০০+", avatar: "ফ", color: "#ad1457", bg: "#fce4ec" },
    { name: "ডা. নুসরাত জাহান", spec: "গাইনি বিশেষজ্ঞ", exp: "১০ বছর", rating: "৪.৭", patients: "১,৫০০+", avatar: "ন", color: "#f57f17", bg: "#fff8e1" },
];

const symptomMap = {
    "জ্বর": { spec: "মেডিসিন", icon: "💊", color: "#2e7d32", bg: "#eef9f2" },
    "মাথাব্যথা": { spec: "মেডিসিন", icon: "💊", color: "#2e7d32", bg: "#eef9f2" },
    "বুকে ব্যথা": { spec: "হৃদরোগ", icon: "❤️", color: "#ad1457", bg: "#fce4ec" },
    "শ্বাসকষ্ট": { spec: "মেডিসিন", icon: "💊", color: "#2e7d32", bg: "#eef9f2" },
    "পেটে ব্যথা": { spec: "মেডিসিন", icon: "💊", color: "#2e7d32", bg: "#eef9f2" },
    "চোখে সমস্যা": { spec: "চক্ষু", icon: "👁️", color: "#00695c", bg: "#e0f7fa" },
    "দাঁতে ব্যথা": { spec: "দন্ত রোগ", icon: "🦷", color: "#283593", bg: "#e8eaf6" },
    "ত্বকে র‍্যাশ": { spec: "চর্মরোগ", icon: "🩹", color: "#6a1b9a", bg: "#f3e5f5" },
    "হাড়ে ব্যথা": { spec: "অর্থোপেডিক", icon: "🦴", color: "#f57f17", bg: "#fff8e1" },
    "শিশুর সমস্যা": { spec: "শিশু রোগ", icon: "👶", color: "#1565c0", bg: "#e3f2fd" },
    "মহিলা সমস্যা": { spec: "গাইনি", icon: "🌸", color: "#ad1457", bg: "#fce4ec" },
    "মানসিক চাপ": { spec: "মানসিক রোগ", icon: "🧠", color: "#1b5e20", bg: "#e8f5e9" },
};
const allSymptoms = Object.keys(symptomMap);

/* ═══════════════════════════════════════════════
   RESPONSIVE CSS
   Mobile      ── max-width: 767px
   Tablet      ── 768px  – 1023px
   Laptop 14"  ── 1024px – 1279px
   Laptop 15"  ── 1280px – 1439px
   Desktop     ── 1440px+
═══════════════════════════════════════════════ */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Noto+Serif+Bengali:wght@700;800;900&display=swap');
*,*::before,*::after{box-sizing:border-box;}

@keyframes popIn    { from{transform:scale(.82);opacity:0} to{transform:scale(1);opacity:1} }
@keyframes fadeInUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
@keyframes spin     { to{transform:rotate(360deg)} }

/* ── Section Header ── */
.sh-wrap  { text-align:center; margin-bottom:40px; }
.sh-badge {
    display:inline-block; background:rgba(46,158,86,.1); color:#2e9e56;
    border:1px solid rgba(46,158,86,.25); border-radius:50px;
    padding:5px 16px; font-size:12px; font-weight:600;
    letter-spacing:.5px; text-transform:uppercase; margin-bottom:12px;
}
.sh-title {
    font-family:'Noto Serif Bengali',serif; font-weight:800;
    color:#0d3b1e; margin-bottom:8px;
    font-size:clamp(20px,2.6vw,28px);
}
.sh-sub  { color:#5a7a66; font-size:14px; }
.sh-bar  { width:48px;height:4px;background:linear-gradient(90deg,#2e9e56,#5ecb87);border-radius:4px;margin:12px auto 0; }

/* ── Content Wrapper ── */
.h-content { margin:0 auto; }
@media(min-width:1440px)                      { .h-content{max-width:1200px;padding:80px 40px 96px;} }
@media(min-width:1280px)and(max-width:1439px) { .h-content{max-width:1060px;padding:72px 36px 88px;} }
@media(min-width:1024px)and(max-width:1279px) { .h-content{max-width:960px; padding:64px 28px 80px;} }
@media(min-width:768px) and(max-width:1023px) { .h-content{max-width:100%;  padding:48px 20px 64px;} }
@media(max-width:767px)                       { .h-content{padding:36px 14px 52px;} }

/* ── Hero ── */
.h-hero {
    position:relative; text-align:center; overflow:hidden;
    background:linear-gradient(160deg,#062210 0%,#0d3b1e 40%,#1a6b38 80%,#2e9e56 100%);
}
@media(min-width:1440px)                      { .h-hero{padding:100px 40px 116px;} }
@media(min-width:1280px)and(max-width:1439px) { .h-hero{padding:88px 36px 104px;} }
@media(min-width:1024px)and(max-width:1279px) { .h-hero{padding:76px 28px 92px;} }
@media(min-width:768px) and(max-width:1023px) { .h-hero{padding:60px 20px 76px;} }
@media(max-width:767px)                       { .h-hero{padding:44px 14px 58px;} }

.h-hero-inner { position:relative;z-index:2;max-width:740px;margin:0 auto; }

.h-hero-badge {
    display:inline-flex;align-items:center;gap:8px;
    background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18);
    border-radius:50px;color:#a8e6c0;margin-bottom:24px;
    backdrop-filter:blur(8px);flex-wrap:wrap;justify-content:center;
}
@media(min-width:768px) { .h-hero-badge{font-size:13px;padding:7px 18px;} }
@media(max-width:767px) { .h-hero-badge{font-size:12px;padding:6px 14px;margin-bottom:18px;} }

.h-hero-h1 {
    font-family:'Noto Serif Bengali',serif;font-weight:900;color:#fff;
    line-height:1.2;margin-bottom:16px;
    text-shadow:0 2px 12px rgba(0,0,0,.2);
    font-size:clamp(1.85rem,5.5vw,4.2rem);
}
.h-hero-p {
    color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:36px;
    font-size:clamp(14px,2.2vw,17px);
}

/* Stats */
.h-stats { display:flex;justify-content:center;flex-wrap:wrap; }
.h-stat  { text-align:center; }
@media(min-width:1280px)                      { .h-stat{padding:0 32px;} }
@media(min-width:1024px)and(max-width:1279px) { .h-stat{padding:0 24px;} }
@media(min-width:768px) and(max-width:1023px) { .h-stat{padding:0 18px;} }
@media(max-width:767px)                       { .h-stat{padding:6px 14px;border-right:none!important;} }
.h-stat-v {
    font-family:'Noto Serif Bengali',serif;font-weight:900;color:#fff;margin-bottom:4px;
    font-size:clamp(18px,2.8vw,26px);
}
.h-stat-l { font-size:12px;color:rgba(255,255,255,.5); }

/* ── Feature Grid ── */
.h-feat-grid { display:grid;margin-bottom:72px; }
@media(min-width:1440px)                      { .h-feat-grid{grid-template-columns:repeat(3,1fr);gap:20px;} }
@media(min-width:1280px)and(max-width:1439px) { .h-feat-grid{grid-template-columns:repeat(3,1fr);gap:18px;} }
@media(min-width:1024px)and(max-width:1279px) { .h-feat-grid{grid-template-columns:repeat(3,1fr);gap:16px;} }
@media(min-width:768px) and(max-width:1023px) { .h-feat-grid{grid-template-columns:repeat(2,1fr);gap:14px;} }
@media(max-width:767px)                       { .h-feat-grid{grid-template-columns:1fr;gap:12px;margin-bottom:48px;} }

.h-feat-card {
    background:#fff;border-radius:22px;padding:28px 22px;
    box-shadow:0 4px 20px rgba(0,0,0,.05);
    opacity:0;transform:translateY(40px) scale(.96);
    position:relative;overflow:hidden;
    transition:transform .25s ease,box-shadow .25s ease,border-color .2s ease;
}
@media(max-width:767px) { .h-feat-card{padding:22px 18px;border-radius:18px;} }

/* ── How It Works ── */
.h-how-grid { display:grid;gap:24px;position:relative; }
@media(min-width:768px)                       { .h-how-grid{grid-template-columns:repeat(3,1fr);} }
@media(min-width:768px) and(max-width:1023px) { .h-how-grid{gap:14px;} }
@media(max-width:767px)                       { .h-how-grid{grid-template-columns:1fr;gap:28px;} }

.h-how-line {
    position:absolute;top:52px;left:16.5%;right:16.5%;
    height:2px;background:linear-gradient(90deg,#2e7d32,#1565c0,#ad1457);
    opacity:.2;z-index:0;
}
@media(max-width:1023px) { .h-how-line{display:none;} }

/* ── Spec Grid ── */
.h-spec-grid { display:grid; }
@media(min-width:1440px)                      { .h-spec-grid{grid-template-columns:repeat(4,1fr);gap:18px;} }
@media(min-width:1280px)and(max-width:1439px) { .h-spec-grid{grid-template-columns:repeat(4,1fr);gap:16px;} }
@media(min-width:1024px)and(max-width:1279px) { .h-spec-grid{grid-template-columns:repeat(4,1fr);gap:14px;} }
@media(min-width:768px) and(max-width:1023px) { .h-spec-grid{grid-template-columns:repeat(4,1fr);gap:12px;} }
@media(max-width:767px)                       { .h-spec-grid{grid-template-columns:repeat(2,1fr);gap:10px;} }

.h-spec-card {
    background:#fff;border-radius:20px;border:1.5px solid #e0f0e8;
    cursor:pointer;box-shadow:0 4px 16px rgba(0,0,0,.05);
    position:relative;overflow:hidden;text-align:center;
    transition:transform .25s cubic-bezier(.34,1.56,.64,1),box-shadow .25s,border-color .2s;
}
@media(min-width:1280px)                      { .h-spec-card{padding:32px 16px 24px;} }
@media(min-width:1024px)and(max-width:1279px) { .h-spec-card{padding:28px 12px 20px;} }
@media(min-width:768px) and(max-width:1023px) { .h-spec-card{padding:22px 10px 16px;} }
@media(max-width:767px)                       { .h-spec-card{padding:20px 10px 16px;border-radius:16px;} }

/* ── Doctors Grid ── */
.h-doc-grid { display:grid;gap:20px; }
@media(min-width:1440px)                      { .h-doc-grid{grid-template-columns:repeat(4,1fr);} }
@media(min-width:1280px)and(max-width:1439px) { .h-doc-grid{grid-template-columns:repeat(4,1fr);gap:18px;} }
@media(min-width:1024px)and(max-width:1279px) { .h-doc-grid{grid-template-columns:repeat(4,1fr);gap:14px;} }
@media(min-width:768px) and(max-width:1023px) { .h-doc-grid{grid-template-columns:repeat(2,1fr);gap:14px;} }
@media(max-width:767px)                       { .h-doc-grid{grid-template-columns:repeat(2,1fr);gap:10px;} }

/* ── Testimonials Grid ── */
.h-test-grid { display:grid;gap:20px; }
@media(min-width:1440px)                      { .h-test-grid{grid-template-columns:repeat(3,1fr);} }
@media(min-width:1280px)and(max-width:1439px) { .h-test-grid{grid-template-columns:repeat(3,1fr);gap:18px;} }
@media(min-width:1024px)and(max-width:1279px) { .h-test-grid{grid-template-columns:repeat(3,1fr);gap:14px;} }
@media(min-width:768px) and(max-width:1023px) { .h-test-grid{grid-template-columns:repeat(2,1fr);gap:14px;} }
@media(max-width:767px)                       { .h-test-grid{grid-template-columns:1fr;gap:12px;} }

/* ── Symptom Pad ── */
.h-sym-pad { padding:36px 36px 32px; }
@media(min-width:768px)and(max-width:1023px) { .h-sym-pad{padding:28px 24px 24px;} }
@media(max-width:767px)                      { .h-sym-pad{padding:20px 16px 18px;} }

/* ── CTA Banner ── */
.h-cta {
    background:linear-gradient(135deg,#0d3b1e 0%,#1a6b38 100%);
    border-radius:24px;box-shadow:0 20px 60px rgba(13,59,30,.3);
    position:relative;overflow:hidden;
    display:flex;align-items:center;justify-content:space-between;
    flex-wrap:wrap;gap:20px;
}
@media(min-width:1440px)                      { .h-cta{padding:48px 44px;} }
@media(min-width:1280px)and(max-width:1439px) { .h-cta{padding:44px 40px;} }
@media(min-width:1024px)and(max-width:1279px) { .h-cta{padding:36px 32px;} }
@media(min-width:768px) and(max-width:1023px) { .h-cta{padding:28px 24px;} }
@media(max-width:767px)                       { .h-cta{padding:24px 18px;flex-direction:column;text-align:center;} }

/* ── Welcome Popup ── */
.h-popup-ov {
    position:fixed;inset:0;background:rgba(0,0,0,.55);
    z-index:9999;display:flex;align-items:center;
    justify-content:center;padding:16px;
}
.h-popup-box {
    background:#fff;border-radius:24px;max-width:360px;width:100%;
    text-align:center;box-shadow:0 24px 80px rgba(0,0,0,.18);
    animation:popIn .35s cubic-bezier(.34,1.56,.64,1);
}
@media(min-width:768px) { .h-popup-box{padding:40px 32px;} }
@media(max-width:767px) { .h-popup-box{padding:28px 20px;} }
`;

/* ── Section Header Component ── */
function SectionHeader({ badge, title, subtitle }) {
    return (
        <div className="sh-wrap">
            <span className="sh-badge">{badge}</span>
            <h2 className="sh-title">{title}</h2>
            <p className="sh-sub">{subtitle}</p>
            <div className="sh-bar" />
        </div>
    );
}

/* ── Welcome Voice Popup ── */
function WelcomeVoicePopup({ onClose }) {
    const speak = () => {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance("Welcome to Swasthya Khoji. Find your preferred doctor easily.");
        u.lang = "en-US"; u.rate = 0.9; u.pitch = 1.05;
        const v = window.speechSynthesis.getVoices().find(x => x.lang === "en-US") || null;
        if (v) u.voice = v;
        window.speechSynthesis.speak(u);
    };
    return (
        <div className="h-popup-ov">
            <div className="h-popup-box">
                <div style={{ fontSize: 48, marginBottom: 12 }}>🏥</div>
                <h2 style={{ fontFamily: "'Noto Serif Bengali',serif", fontSize: 20, color: "#0d3b1e", margin: "0 0 10px" }}>স্বাস্থ্য খোঁজিতে স্বাগতম!</h2>
                <p style={{ color: "#5a7a66", fontSize: 14, marginBottom: 24, lineHeight: 1.7 }}>
                    আপনার স্বাস্থ্যসেবার বিশ্বস্ত সঙ্গী।<br />শুরু করতে নিচের বাটনে চাপুন।
                </p>
                <button onClick={() => { speak(); onClose(); }} style={{
                    width: "100%", padding: "13px", borderRadius: 50, border: "none",
                    background: "linear-gradient(135deg,#2e9e56,#1a6b38)", color: "#fff",
                    fontFamily: "'Hind Siliguri',sans-serif", fontSize: 15, fontWeight: 700,
                    cursor: "pointer", marginBottom: 10, boxShadow: "0 6px 20px rgba(46,158,86,.35)",
                }}>🔊 শুরু করুন</button>
                <button onClick={onClose} style={{
                    background: "none", border: "none", color: "#9ca3af",
                    fontFamily: "'Hind Siliguri',sans-serif", fontSize: 13,
                    cursor: "pointer", textDecoration: "underline",
                }}>এড়িয়ে যান</button>
            </div>
        </div>
    );
}

/* ── Live Stats Counter ── */
function LiveStatsCounter() {
    const data = [
        { value: 500, suffix: "+", label: "বিশেষজ্ঞ ডাক্তার" },
        { value: 64, suffix: "", label: "জেলায় সেবা" },
        { value: 10, suffix: " লাখ+", label: "রোগী সেবা পেয়েছেন" },
    ];
    const refs = useRef([]);
    const secRef = useRef(null);
    const done = useRef(false);
    const bd = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (!e.isIntersecting || done.current) return;
            done.current = true;
            refs.current.forEach((el, i) => {
                if (!el) return;
                const { value, suffix } = data[i];
                let cur = 0; const step = value / 60;
                const t = setInterval(() => {
                    cur += step;
                    if (cur >= value) { cur = value; clearInterval(t); }
                    el.textContent = Math.floor(cur).toString().replace(/\d/g, d => bd[d]) + suffix;
                }, 2000 / 60);
            });
        }, { threshold: 0.5 });
        if (secRef.current) obs.observe(secRef.current);
        return () => obs.disconnect();
    }, []);

    return (
        <div ref={secRef} className="h-stats">
            {data.map((s, i) => (
                <div key={s.label} className="h-stat"
                    style={{ borderRight: i < data.length - 1 ? "1px solid rgba(255,255,255,.15)" : "none" }}>
                    <div ref={el => refs.current[i] = el} className="h-stat-v">০</div>
                    <div className="h-stat-l">{s.label}</div>
                </div>
            ))}
        </div>
    );
}

/* ── AI Symptom Checker ── */
function AISymptomChecker() {
    const [selected, setSelected] = useState([]);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const secRef = useRef(null);

    useEffect(() => {
        const el = secRef.current; if (!el) return;
        el.style.opacity = "0"; el.style.transform = "translateY(40px)";
        const obs = new IntersectionObserver(([e]) => {
            if (!e.isIntersecting) return;
            el.style.transition = "all .7s cubic-bezier(.34,1.2,.64,1)";
            el.style.opacity = "1"; el.style.transform = "translateY(0)";
            obs.unobserve(el);
        }, { threshold: 0.15 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    const toggle = sym => { setSelected(p => p.includes(sym) ? p.filter(s => s !== sym) : [...p, sym]); setResult(null); };

    const analyze = () => {
        if (!selected.length) return;
        setLoading(true); setResult(null);
        setTimeout(() => {
            const cnt = {};
            selected.forEach(sym => { const s = symptomMap[sym]?.spec; if (s) cnt[s] = (cnt[s] || 0) + 1; });
            const top = Object.entries(cnt).sort((a, b) => b[1] - a[1])[0]?.[0];
            const m = Object.values(symptomMap).find(v => v.spec === top);
            setResult({ spec: top, ...m }); setLoading(false);
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
                const u = new SpeechSynthesisUtterance(`আপনার লক্ষণ অনুযায়ী ${top} বিশেষজ্ঞ ডাক্তারের পরামর্শ নেওয়া উচিত।`);
                u.lang = "bn-BD"; u.rate = 0.88; window.speechSynthesis.speak(u);
            }
        }, 1200);
    };

    return (
        <div ref={secRef} style={{ marginBottom: 72 }}>
            <SectionHeader badge="AI সহায়তা" title="লক্ষণ দিয়ে ডাক্তার খুঁজুন"
                subtitle="আপনার সমস্যা বেছে নিন — AI আপনাকে সঠিক বিশেষজ্ঞ সাজেস্ট করবে" />
            <div style={{ background: "#fff", borderRadius: 28, boxShadow: "0 8px 40px rgba(13,59,30,.10)", border: "1.5px solid #e0f0e8", overflow: "hidden" }}>
                <div style={{ height: 5, background: "linear-gradient(90deg,#2e9e56,#5ecb87,#f0c040)" }} />
                <div className="h-sym-pad">
                    <p style={{ fontSize: 13, fontWeight: 600, color: "#5a7a66", marginBottom: 16 }}>🩺 আপনার লক্ষণ বেছে নিন (একাধিক সিলেক্ট করতে পারবেন):</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
                        {allSymptoms.map(sym => {
                            const isSel = selected.includes(sym); const info = symptomMap[sym];
                            return (
                                <button key={sym} onClick={() => toggle(sym)} style={{
                                    padding: "8px 16px", borderRadius: 50,
                                    border: `2px solid ${isSel ? info.color : "#d4e8da"}`,
                                    background: isSel ? info.color : "#fff",
                                    color: isSel ? "#fff" : "#3a5a46",
                                    fontSize: 13, fontWeight: 600, cursor: "pointer",
                                    transition: "all .2s", fontFamily: "'Hind Siliguri',sans-serif",
                                }}>{sym}</button>
                            );
                        })}
                    </div>
                    {selected.length > 0 && (
                        <p style={{ fontSize: 12, color: "#2e9e56", marginBottom: 16, fontWeight: 600 }}>
                            ✅ {selected.length}টি লক্ষণ বেছেছেন: {selected.join(", ")}
                        </p>
                    )}
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                        <button onClick={analyze} disabled={!selected.length || loading} style={{
                            background: !selected.length ? "#ccc" : "linear-gradient(135deg,#2e9e56,#1a6b38)",
                            color: "#fff", border: "none", borderRadius: 50,
                            padding: "12px 28px", fontSize: 14, fontWeight: 700,
                            cursor: !selected.length ? "not-allowed" : "pointer",
                            fontFamily: "'Hind Siliguri',sans-serif",
                        }}>{loading ? "⏳ বিশ্লেষণ হচ্ছে..." : "🔍 ডাক্তার খুঁজুন"}</button>
                        {selected.length > 0 && (
                            <button onClick={() => { setSelected([]); setResult(null); window.speechSynthesis?.cancel(); }} style={{
                                background: "transparent", color: "#5a7a66", border: "1.5px solid #d4e8da",
                                borderRadius: 50, padding: "11px 20px", fontSize: 13, fontWeight: 600,
                                cursor: "pointer", fontFamily: "'Hind Siliguri',sans-serif",
                            }}>রিসেট করুন</button>
                        )}
                    </div>
                    {loading && (
                        <div style={{ marginTop: 24, textAlign: "center" }}>
                            <div style={{ display: "inline-block", width: 36, height: 36, border: "3px solid #e0f0e8", borderTop: "3px solid #2e9e56", borderRadius: "50%", animation: "spin .8s linear infinite" }} />
                            <p style={{ marginTop: 10, color: "#5a7a66", fontSize: 13 }}>বিশ্লেষণ হচ্ছে...</p>
                        </div>
                    )}
                    {result && !loading && (
                        <div style={{ marginTop: 24, background: `linear-gradient(135deg,${result.bg},#fff)`, border: `2px solid ${result.color}30`, borderRadius: 20, padding: "24px", animation: "fadeInUp .5s ease" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14, flexWrap: "wrap" }}>
                                <div style={{ width: 52, height: 52, borderRadius: 14, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, boxShadow: `0 6px 20px ${result.color}25`, border: `2px solid ${result.color}20`, flexShrink: 0 }}>{result.icon}</div>
                                <div>
                                    <p style={{ fontSize: 11, color: result.color, fontWeight: 700, margin: "0 0 4px", textTransform: "uppercase" }}>AI সাজেশন</p>
                                    <p style={{ fontFamily: "'Noto Serif Bengali',serif", fontSize: 18, fontWeight: 800, color: "#0d3b1e", margin: 0 }}>{result.spec} বিশেষজ্ঞ</p>
                                </div>
                            </div>
                            <p style={{ fontSize: 13, color: "#5a7a66", marginBottom: 18, lineHeight: 1.7 }}>
                                আপনার লক্ষণ অনুযায়ী <strong style={{ color: result.color }}>{result.spec} বিশেষজ্ঞ</strong> ডাক্তারের পরামর্শ নেওয়া উচিত।
                            </p>
                            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                                <Link to={`/search?specialization=${result.spec}`} style={{ textDecoration: "none" }}>
                                    <div style={{ background: result.color, color: "#fff", borderRadius: 50, padding: "10px 20px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>এখনই ডাক্তার দেখুন →</div>
                                </Link>
                                <div style={{ background: "rgba(255,255,255,.8)", border: `1.5px solid ${result.color}30`, color: result.color, borderRadius: 50, padding: "9px 16px", fontSize: 12, fontWeight: 600 }}>⚠️ এটি AI সাজেশন, চিকিৎসকের পরামর্শই চূড়ান্ত</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

/* ── Feature Cards ── */
function FeatureCards() {
    const refs = useRef([]);
    useEffect(() => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = "1"; e.target.style.transform = "translateY(0) scale(1)"; } });
        }, { threshold: 0.15 });
        refs.current.forEach(c => c && obs.observe(c));
        return () => obs.disconnect();
    }, []);

    return (
        <div className="h-feat-grid">
            {features.map((f, i) => (
                <div key={f.title} ref={el => refs.current[i] = el} className="h-feat-card"
                    style={{ border: `1.5px solid ${f.color}20`, transition: `all .6s cubic-bezier(.34,1.2,.64,1) ${i * 80}ms` }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px) scale(1.02)"; e.currentTarget.style.boxShadow = `0 16px 40px ${f.color}25`; e.currentTarget.style.borderColor = f.color; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,.05)"; e.currentTarget.style.borderColor = `${f.color}20`; }}
                >
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg,${f.color},${f.color}80)`, borderRadius: "22px 22px 0 0" }} />
                    <div style={{ width: 56, height: 56, borderRadius: 14, background: f.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 16, boxShadow: `0 6px 20px ${f.color}20` }}>{f.icon}</div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: "#0d3b1e", marginBottom: 8 }}>{f.title}</div>
                    <div style={{ fontSize: 13, color: "#5a7a66", lineHeight: 1.7 }}>{f.desc}</div>
                    <div style={{ position: "absolute", bottom: 14, right: 14, width: 8, height: 8, borderRadius: "50%", background: f.color, opacity: .4 }} />
                </div>
            ))}
        </div>
    );
}

/* ── Specialization Grid ── */
function SpecializationGrid() {
    const gridRef = useRef(null);
    useEffect(() => {
        const cards = gridRef.current?.querySelectorAll(".h-spec-card");
        if (!cards) return;
        cards.forEach((c, i) => {
            c.style.opacity = "0";
            c.style.transform = `translateX(${i < 4 ? "-80px" : "80px"}) scale(.92)`;
            c.style.transition = "transform .6s cubic-bezier(.34,1.2,.64,1), opacity .5s ease";
        });
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (!e.isIntersecting) return;
                cards.forEach((c, i) => {
                    const si = i < 4 ? i : 7 - i;
                    setTimeout(() => { c.style.opacity = "1"; c.style.transform = "translateX(0) scale(1)"; }, si * 90);
                });
                obs.unobserve(e.target);
            });
        }, { threshold: 0.1 });
        if (gridRef.current) obs.observe(gridRef.current);
        return () => obs.disconnect();
    }, []);

    return (
        <div ref={gridRef} className="h-spec-grid">
            {specializations.map(s => (
                <Link key={s.name} to={`/search?specialization=${s.name}`} style={{ textDecoration: "none" }}>
                    <div className="h-spec-card"
                        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px) scale(1.03)"; e.currentTarget.style.boxShadow = `0 16px 40px rgba(26,107,56,.15)`; e.currentTarget.style.borderColor = s.accent; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,.05)"; e.currentTarget.style.borderColor = "#e0f0e8"; }}
                    >
                        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: s.accent, borderRadius: "20px 20px 0 0", opacity: .7 }} />
                        <div style={{ width: 60, height: 60, borderRadius: 18, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, margin: "0 auto 12px", boxShadow: "0 6px 20px rgba(0,0,0,.08)" }}>{s.icon}</div>
                        <p style={{ fontSize: 13, fontWeight: 700, color: "#0d3b1e", margin: "0 0 6px" }}>{s.name}</p>
                        <div style={{ display: "inline-flex", alignItems: "center", background: `${s.accent}15`, border: `1px solid ${s.accent}30`, borderRadius: 50, padding: "3px 8px", fontSize: 11, fontWeight: 600, color: s.accent }}>{s.count}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

/* ── How It Works ── */
function HowItWorks() {
    const steps = [
        { icon: "🔍", step: "০১", title: "ডাক্তার খুঁজুন", desc: "বিভাগ, নাম বা এলাকা দিয়ে আপনার পছন্দের বিশেষজ্ঞ খুঁজুন", color: "#2e7d32", bg: "#eef9f2", to: "/search", btn: "এখনই খুঁজুন →" },
        { icon: "📅", step: "০২", title: "অ্যাপয়েন্টমেন্ট নিন", desc: "আপনার সুবিধামতো সময় ও তারিখ বেছে নিয়ে বুকিং করুন", color: "#1565c0", bg: "#e3f2fd", to: "/search", btn: "বুকিং করুন →" },
        { icon: "💊", step: "০৩", title: "পরামর্শ ও চিকিৎসা", desc: "সরাসরি বা অনলাইনে ডাক্তারের পরামর্শ নিন এবং সুস্থ থাকুন", color: "#ad1457", bg: "#fce4ec", to: "/search?mode=online", btn: "পরামর্শ নিন →" },
    ];
    const secRef = useRef(null);
    const stepsRef = useRef([]);
    useEffect(() => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (!e.isIntersecting) return;
                stepsRef.current.forEach((el, i) => { if (el) setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, i * 150); });
                obs.unobserve(e.target);
            });
        }, { threshold: 0.2 });
        if (secRef.current) obs.observe(secRef.current);
        return () => obs.disconnect();
    }, []);

    return (
        <div ref={secRef} style={{ marginBottom: 72 }}>
            <SectionHeader badge="কিভাবে কাজ করে" title="মাত্র ৩টি সহজ ধাপে" subtitle="শুরু থেকে চিকিৎসা পর্যন্ত — সবকিছু এক জায়গায়" />
            <div className="h-how-grid">
                <div className="h-how-line" />
                {steps.map((s, i) => (
                    <div key={s.step} ref={el => stepsRef.current[i] = el}
                        style={{
                            background: "#fff", borderRadius: 24, padding: "36px 20px 28px",
                            border: `1.5px solid ${s.color}18`, boxShadow: "0 4px 20px rgba(0,0,0,.05)",
                            textAlign: "center", position: "relative", zIndex: 1,
                            opacity: 0, transform: "translateY(30px)",
                            transition: `all .6s cubic-bezier(.34,1.2,.64,1) ${i * 150}ms`,
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = `0 16px 40px ${s.color}20`; e.currentTarget.style.borderColor = s.color; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,.05)"; e.currentTarget.style.borderColor = `${s.color}18`; }}
                    >
                        <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: s.color, color: "#fff", borderRadius: 50, width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700 }}>{i + 1}</div>
                        <div style={{ width: 72, height: 72, borderRadius: 22, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, margin: "0 auto 18px", boxShadow: `0 8px 24px ${s.color}20` }}>{s.icon}</div>
                        <p style={{ fontFamily: "'Noto Serif Bengali',serif", fontSize: 16, fontWeight: 800, color: "#0d3b1e", marginBottom: 10 }}>{s.title}</p>
                        <p style={{ fontSize: 13, color: "#5a7a66", lineHeight: 1.7, margin: "0 0 18px" }}>{s.desc}</p>
                        <Link to={s.to} style={{ textDecoration: "none" }}>
                            <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: s.color, color: "#fff", borderRadius: 50, padding: "10px 20px", fontSize: 13, fontWeight: 700, cursor: "pointer", boxShadow: `0 4px 14px ${s.color}40`, fontFamily: "'Hind Siliguri',sans-serif" }}>{s.btn}</div>
                        </Link>
                        <div style={{ marginTop: 14, display: "inline-flex", alignItems: "center", background: `${s.color}12`, border: `1px solid ${s.color}25`, borderRadius: 50, padding: "4px 12px", fontSize: 11, fontWeight: 600, color: s.color }}>ধাপ {s.step}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ── Testimonials ── */
function Testimonials() {
    const secRef = useRef(null);
    const cardRefs = useRef([]);
    useEffect(() => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (!e.isIntersecting) return;
                cardRefs.current.forEach((el, i) => { if (el) setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0) scale(1)"; }, i * 100); });
                obs.unobserve(e.target);
            });
        }, { threshold: 0.1 });
        if (secRef.current) obs.observe(secRef.current);
        return () => obs.disconnect();
    }, []);

    return (
        <div ref={secRef} style={{ marginBottom: 72 }}>
            <SectionHeader badge="রোগীর কথা" title="তারা কী বলছেন" subtitle="হাজারো সন্তুষ্ট রোগীর মধ্যে কিছু অভিজ্ঞতা" />
            <div className="h-test-grid">
                {testimonials.map((t, i) => (
                    <div key={t.name} ref={el => cardRefs.current[i] = el}
                        style={{
                            background: "#fff", borderRadius: 22, padding: "24px 20px",
                            border: `1.5px solid ${t.color}18`, boxShadow: "0 4px 16px rgba(0,0,0,.05)",
                            opacity: 0, transform: "translateY(30px) scale(.97)",
                            transition: `all .55s cubic-bezier(.34,1.2,.64,1) ${i * 100}ms`, position: "relative",
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px) scale(1.01)"; e.currentTarget.style.boxShadow = `0 12px 32px ${t.color}20`; e.currentTarget.style.borderColor = t.color; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,.05)"; e.currentTarget.style.borderColor = `${t.color}18`; }}
                    >
                        <div style={{ position: "absolute", top: 14, right: 18, fontSize: 40, color: `${t.color}15`, lineHeight: 1, fontFamily: "Georgia,serif", fontWeight: 900 }}>"</div>
                        <div style={{ fontSize: 13, marginBottom: 12, color: "#f0c040" }}>{"★".repeat(t.rating)}</div>
                        <p style={{ fontSize: 13, color: "#3a5a46", lineHeight: 1.8, marginBottom: 18, fontStyle: "italic" }}>"{t.text}"</p>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <div style={{ width: 38, height: 38, borderRadius: "50%", background: t.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: t.color, border: `2px solid ${t.color}30`, flexShrink: 0 }}>{t.avatar}</div>
                            <div>
                                <p style={{ fontSize: 13, fontWeight: 700, color: "#0d3b1e", margin: 0 }}>{t.name}</p>
                                <p style={{ fontSize: 11, color: "#5a7a66", margin: 0 }}>📍 {t.city}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ── Featured Doctors ── */
function FeaturedDoctors() {
    const secRef = useRef(null);
    const cardRefs = useRef([]);
    useEffect(() => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (!e.isIntersecting) return;
                cardRefs.current.forEach((el, i) => { if (el) setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, i * 120); });
                obs.unobserve(e.target);
            });
        }, { threshold: 0.1 });
        if (secRef.current) obs.observe(secRef.current);
        return () => obs.disconnect();
    }, []);

    return (
        <div ref={secRef} style={{ marginBottom: 72 }}>
            <SectionHeader badge="বিশেষজ্ঞ দল" title="জনপ্রিয় ডাক্তারগণ"
                subtitle="আমাদের সর্বোচ্চ রেটিংপ্রাপ্ত বিশেষজ্ঞ ডাক্তারদের সাথে পরিচিত হন" />
            <div className="h-doc-grid">
                {featuredDoctors.map((d, i) => (
                    <div key={d.name} ref={el => cardRefs.current[i] = el}
                        style={{
                            background: "#fff", borderRadius: 22, padding: "24px 16px 20px",
                            border: `1.5px solid ${d.color}18`, boxShadow: "0 4px 16px rgba(0,0,0,.05)",
                            textAlign: "center", opacity: 0, transform: "translateY(30px)",
                            transition: `all .6s cubic-bezier(.34,1.2,.64,1) ${i * 120}ms`,
                            position: "relative", overflow: "hidden",
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = `0 16px 40px ${d.color}25`; e.currentTarget.style.borderColor = d.color; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,.05)"; e.currentTarget.style.borderColor = `${d.color}18`; }}
                    >
                        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: d.color, borderRadius: "22px 22px 0 0", opacity: .7 }} />
                        <div style={{ width: 64, height: 64, borderRadius: "50%", background: d.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 700, color: d.color, margin: "0 auto 14px", border: `3px solid ${d.color}30`, boxShadow: `0 8px 24px ${d.color}25` }}>{d.avatar}</div>
                        <p style={{ fontFamily: "'Noto Serif Bengali',serif", fontSize: 14, fontWeight: 800, color: "#0d3b1e", margin: "0 0 4px" }}>{d.name}</p>
                        <p style={{ fontSize: 11, color: "#5a7a66", margin: "0 0 14px" }}>{d.spec}</p>
                        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
                            <div style={{ background: `${d.color}10`, borderRadius: 50, padding: "3px 8px", fontSize: 11, color: d.color, fontWeight: 600 }}>⭐ {d.rating}</div>
                            <div style={{ background: "#f0f4f0", borderRadius: 50, padding: "3px 8px", fontSize: 11, color: "#5a7a66", fontWeight: 600 }}>👥 {d.patients}</div>
                        </div>
                        <div style={{ fontSize: 11, color: "#5a7a66", marginBottom: 14 }}>অভিজ্ঞতা: {d.exp}</div>
                        <Link to={`/search?specialization=${d.spec}`} style={{ textDecoration: "none" }}>
                            <div style={{ background: d.color, color: "#fff", borderRadius: 50, padding: "9px 16px", fontSize: 12, fontWeight: 700, boxShadow: `0 4px 14px ${d.color}40` }}>অ্যাপয়েন্টমেন্ট নিন</div>
                        </Link>
                    </div>
                ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 28 }}>
                <Link to="/search" style={{ textDecoration: "none" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "#2e9e56", border: "2px solid #2e9e56", borderRadius: 50, padding: "11px 24px", fontSize: 14, fontWeight: 700, transition: "all .2s" }}
                        onMouseEnter={e => { e.currentTarget.style.background = "#2e9e56"; e.currentTarget.style.color = "#fff"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#2e9e56"; }}
                    >সকল ডাক্তার দেখুন →</div>
                </Link>
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════════
   HOME — Main Export
═══════════════════════════════════════════════ */
function Home() {
    const { user } = useContext(AuthContext);
    const [popup, setPopup] = useState(false);

    useEffect(() => {
        if (user?.role === "admin") return;
        const t = setTimeout(() => setPopup(true), 600);
        return () => clearTimeout(t);
    }, [user]);

    return (
        <div style={{ fontFamily: "'Hind Siliguri',sans-serif", background: "#f7fbf9", minHeight: "100vh" }}>
            <style>{CSS}</style>

            {popup && <WelcomeVoicePopup onClose={() => setPopup(false)} />}

            {/* ══ HERO ══ */}
            <section className="h-hero">
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
                <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(94,203,135,.12) 0%,transparent 70%)", top: -100, right: -100, pointerEvents: "none" }} />

                <div className="h-hero-inner">
                    <div className="h-hero-badge">
                        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#5ecb87", boxShadow: "0 0 8px #5ecb87", display: "inline-block", flexShrink: 0 }} />
                        বাংলাদেশের নির্ভরযোগ্য স্বাস্থ্যসেবা প্ল্যাটফর্ম
                    </div>
                    <h1 className="h-hero-h1">
                        সঠিক ডাক্তার,{" "}
                        <span style={{ background: "linear-gradient(135deg,#5ecb87,#f0c040)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>সঠিক সময়ে</span>
                    </h1>
                    <p className="h-hero-p">
                        বাংলাদেশের যেকোনো প্রান্তে বিশেষজ্ঞ ডাক্তার খুঁজুন —<br />
                        সহজে, দ্রুত এবং বিশ্বস্তভাবে
                    </p>
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: 44 }}>
                        <SearchBar />
                    </div>
                    <LiveStatsCounter />
                </div>
            </section>

            {/* ══ Wave ══ */}
            <div style={{ marginTop: -2, lineHeight: 0, background: "#0d3b1e" }}>
                <svg viewBox="0 0 1200 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 70 }}>
                    <path d="M0,35 C200,70 400,0 600,35 C800,70 1000,10 1200,35 L1200,70 L0,70 Z" fill="#f7fbf9" />
                </svg>
            </div>

            {/* ══ CONTENT ══ */}
            <div className="h-content">

                <SectionHeader badge="কেন আমরা" title="আমাদের বিশেষত্ব"
                    subtitle="স্বাস্থ্য খোঁজি কেন বাংলাদেশের সেরা স্বাস্থ্যসেবা প্ল্যাটফর্ম" />
                <FeatureCards />

                <HowItWorks />
                <AISymptomChecker />

                <SectionHeader badge="বিভাগসমূহ" title="বিশেষজ্ঞতা অনুযায়ী খুঁজুন"
                    subtitle="আপনার প্রয়োজন অনুযায়ী বিভাগ বেছে নিন" />
                <div style={{ marginBottom: 72 }}>
                    <SpecializationGrid />
                </div>

                <FeaturedDoctors />
                <Testimonials />

                {/* ══ CTA ══ */}
                <div className="h-cta">
                    <div style={{ position: "absolute", right: 140, top: "50%", transform: "translateY(-50%)", fontSize: 100, opacity: .06, pointerEvents: "none" }}>🏥</div>
                    <div style={{ position: "relative" }}>
                        <h3 style={{ fontFamily: "'Noto Serif Bengali',serif", color: "#fff", fontSize: "clamp(17px,2.5vw,22px)", fontWeight: 800, marginBottom: 6 }}>জরুরি সাহায্য দরকার?</h3>
                        <p style={{ color: "rgba(255,255,255,.5)", fontSize: 14, margin: 0 }}>আমাদের হেল্পলাইনে যোগাযোগ করুন — ২৪ ঘণ্টা, ৭ দিন</p>
                    </div>
                    <a href="tel:16000" style={{
                        background: "#fff", color: "#0d3b1e", borderRadius: 50, fontWeight: 700,
                        fontSize: 15, textDecoration: "none", flexShrink: 0,
                        boxShadow: "0 8px 24px rgba(0,0,0,.2)",
                        display: "inline-flex", alignItems: "center", gap: 8,
                        padding: "13px 28px", transition: "all .2s",
                    }}
                        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,.3)"; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,.2)"; }}
                    >📞 ১৬০০০ তে কল করুন</a>
                </div>

            </div>
        </div>
    );
}

export default Home;