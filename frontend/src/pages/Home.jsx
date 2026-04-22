

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

import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import SearchBar from "../components/SearchBar";

const specializations = [
    { name: "মেডিসিন", icon: "💊", bg: "linear-gradient(135deg, #e8f5e9, #c8e6c9)", accent: "#2e7d32", count: "১২০+" },
    { name: "শিশু রোগ", icon: "👶", bg: "linear-gradient(135deg, #e3f2fd, #bbdefb)", accent: "#1565c0", count: "৮৫+" },
    { name: "গাইনি", icon: "🌸", bg: "linear-gradient(135deg, #fce4ec, #f8bbd0)", accent: "#ad1457", count: "৭৪+" },
    { name: "অর্থোপেডিক", icon: "🦴", bg: "linear-gradient(135deg, #fff8e1, #ffe082)", accent: "#f57f17", count: "৫২+" },
    { name: "চর্মরোগ", icon: "🩹", bg: "linear-gradient(135deg, #f3e5f5, #e1bee7)", accent: "#6a1b9a", count: "৪৮+" },
    { name: "চক্ষু", icon: "👁️", bg: "linear-gradient(135deg, #e0f7fa, #b2ebf2)", accent: "#00695c", count: "৩৯+" },
    { name: "দন্ত রোগ", icon: "🦷", bg: "linear-gradient(135deg, #e8eaf6, #c5cae9)", accent: "#283593", count: "৬১+" },
    { name: "মানসিক রোগ", icon: "🧠", bg: "linear-gradient(135deg, #e8f5e9, #a5d6a7)", accent: "#1b5e20", count: "৩৩+" },
];

const stats = [
    { value: "৫০০+", label: "বিশেষজ্ঞ ডাক্তার" },
    { value: "৬৪", label: "জেলায় সেবা" },
    { value: "১০ লাখ+", label: "রোগী সেবা পেয়েছেন" },
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

// ── Feature Cards ──
function FeatureCards() {
    const cardsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0) scale(1)";
                    }
                });
            },
            { threshold: 0.15 }
        );
        cardsRef.current.forEach((card) => { if (card) observer.observe(card); });
        return () => observer.disconnect();
    }, []);

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 20, marginBottom: 72,
        }}>
            {features.map((f, i) => (
                <div
                    key={f.title}
                    ref={(el) => (cardsRef.current[i] = el)}
                    style={{
                        background: "#fff", borderRadius: 22, padding: "32px 24px",
                        border: `1.5px solid ${f.color}20`,
                        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                        opacity: 0, transform: "translateY(40px) scale(0.96)",
                        transition: `all 0.6s cubic-bezier(0.34,1.2,0.64,1) ${i * 80}ms`,
                        cursor: "default", position: "relative", overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
                        e.currentTarget.style.boxShadow = `0 20px 50px ${f.color}25`;
                        e.currentTarget.style.borderColor = f.color;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0) scale(1)";
                        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";
                        e.currentTarget.style.borderColor = `${f.color}20`;
                    }}
                >
                    <div style={{
                        position: "absolute", top: 0, left: 0, right: 0, height: 4,
                        background: `linear-gradient(90deg, ${f.color}, ${f.color}80)`,
                        borderRadius: "22px 22px 0 0",
                    }} />
                    <div style={{
                        width: 60, height: 60, borderRadius: 16, background: f.bg,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 28, marginBottom: 18, boxShadow: `0 6px 20px ${f.color}20`,
                    }}>{f.icon}</div>
                    <div style={{ fontWeight: 700, fontSize: 16, color: "#0d3b1e", marginBottom: 8 }}>{f.title}</div>
                    <div style={{ fontSize: 13, color: "#5a7a66", lineHeight: 1.7 }}>{f.desc}</div>
                    <div style={{
                        position: "absolute", bottom: 16, right: 16,
                        width: 8, height: 8, borderRadius: "50%", background: f.color, opacity: 0.4,
                    }} />
                </div>
            ))}
        </div>
    );
}

// ── Specialization Grid ──
function SpecializationGrid() {
    const gridRef = useRef(null);

    useEffect(() => {
        const cards = gridRef.current?.querySelectorAll(".spec-card");
        if (!cards) return;
        cards.forEach((card, i) => {
            const fromLeft = i < 4;
            card.style.opacity = "0";
            card.style.transform = `translateX(${fromLeft ? "-120px" : "120px"}) scale(0.92)`;
            card.style.transition = `transform 0.6s cubic-bezier(0.34,1.2,0.64,1), opacity 0.5s ease`;
        });
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        cards.forEach((card, i) => {
                            const fromLeft = i < 4;
                            const staggerIndex = fromLeft ? i : 7 - i;
                            setTimeout(() => {
                                card.style.opacity = "1";
                                card.style.transform = "translateX(0) scale(1)";
                            }, staggerIndex * 90);
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (gridRef.current) observer.observe(gridRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={gridRef} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
            {specializations.map((s) => (
                <Link key={s.name} to={`/search?specialization=${s.name}`} style={{ textDecoration: "none" }}>
                    <div
                        className="spec-card"
                        style={{
                            background: "#fff", borderRadius: 22, padding: "32px 16px 24px",
                            textAlign: "center", border: "1.5px solid #e0f0e8", cursor: "pointer",
                            boxShadow: "0 4px 16px rgba(0,0,0,0.05)", position: "relative", overflow: "hidden",
                            transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease, border-color 0.2s",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-8px) scale(1.04)";
                            e.currentTarget.style.boxShadow = `0 20px 50px rgba(26,107,56,0.18)`;
                            e.currentTarget.style.borderColor = s.accent;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0) scale(1)";
                            e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)";
                            e.currentTarget.style.borderColor = "#e0f0e8";
                        }}
                    >
                        <div style={{
                            position: "absolute", top: 0, left: 0, right: 0, height: 4,
                            background: s.accent, borderRadius: "22px 22px 0 0", opacity: 0.7,
                        }} />
                        <div style={{
                            width: 68, height: 68, borderRadius: 20, background: s.bg,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: 32, margin: "0 auto 16px", boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                        }}>{s.icon}</div>
                        <p style={{ fontSize: 14, fontWeight: 700, color: "#0d3b1e", margin: "0 0 6px" }}>{s.name}</p>
                        <div style={{
                            display: "inline-flex", alignItems: "center", gap: 4,
                            background: `${s.accent}15`, border: `1px solid ${s.accent}30`,
                            borderRadius: 50, padding: "3px 10px",
                            fontSize: 11, fontWeight: 600, color: s.accent,
                        }}>{s.count} ডাক্তার</div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

// ── How It Works ──
function HowItWorks() {
    const steps = [
        {
            icon: "🔍",
            step: "০১",
            title: "ডাক্তার খুঁজুন",
            desc: "বিভাগ, নাম বা এলাকা দিয়ে আপনার পছন্দের বিশেষজ্ঞ খুঁজুন",
            color: "#2e7d32",
            bg: "#eef9f2",
            to: "/search",
            btnLabel: "এখনই খুঁজুন →",
        },
        {
            icon: "📅",
            step: "০২",
            title: "অ্যাপয়েন্টমেন্ট নিন",
            desc: "আপনার সুবিধামতো সময় ও তারিখ বেছে নিয়ে বুকিং করুন",
            color: "#1565c0",
            bg: "#e3f2fd",
            to: "/search",
            btnLabel: "বুকিং করুন →",
        },
        {
            icon: "💊",
            step: "০৩",
            title: "পরামর্শ ও চিকিৎসা",
            desc: "সরাসরি বা অনলাইনে ডাক্তারের পরামর্শ নিন এবং সুস্থ থাকুন",
            color: "#ad1457",
            bg: "#fce4ec",
            to: "/search?mode=online",
            btnLabel: "পরামর্শ নিন →",
        },
    ];

    const sectionRef = useRef(null);
    const stepsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        stepsRef.current.forEach((el, i) => {
                            if (el) setTimeout(() => {
                                el.style.opacity = "1";
                                el.style.transform = "translateY(0)";
                            }, i * 150);
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef} style={{ marginBottom: 72 }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
                <span style={{
                    display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56",
                    border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px",
                    fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12,
                }}>কিভাবে কাজ করে</span>
                <h2 style={{
                    fontFamily: "'Noto Serif Bengali', serif",
                    fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8,
                }}>মাত্র ৩টি সহজ ধাপে</h2>
                <p style={{ color: "#5a7a66", fontSize: 14 }}>শুরু থেকে চিকিৎসা পর্যন্ত — সবকিছু এক জায়গায়</p>
                <div style={{
                    width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)",
                    borderRadius: 4, margin: "12px auto 0",
                }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, position: "relative" }}>
                <div style={{
                    position: "absolute", top: 52, left: "16.5%", right: "16.5%", height: 2,
                    background: "linear-gradient(90deg, #2e7d32, #1565c0, #ad1457)",
                    opacity: 0.2, zIndex: 0,
                }} />

                {steps.map((s, i) => (
                    <div
                        key={s.step}
                        ref={(el) => (stepsRef.current[i] = el)}
                        style={{
                            background: "#fff", borderRadius: 24, padding: "36px 24px 28px",
                            border: `1.5px solid ${s.color}18`,
                            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                            textAlign: "center", position: "relative", zIndex: 1,
                            opacity: 0, transform: "translateY(30px)",
                            transition: `all 0.6s cubic-bezier(0.34,1.2,0.64,1) ${i * 150}ms`,
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-8px)";
                            e.currentTarget.style.boxShadow = `0 20px 50px ${s.color}20`;
                            e.currentTarget.style.borderColor = s.color;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";
                            e.currentTarget.style.borderColor = `${s.color}18`;
                        }}
                    >
                        <div style={{
                            position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                            background: s.color, color: "#fff", borderRadius: 50,
                            width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: 12, fontWeight: 700, boxShadow: `0 4px 12px ${s.color}40`,
                        }}>{i + 1}</div>

                        <div style={{
                            width: 80, height: 80, borderRadius: 24, background: s.bg,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: 36, margin: "0 auto 20px",
                            boxShadow: `0 8px 24px ${s.color}20`,
                        }}>{s.icon}</div>

                        <p style={{
                            fontFamily: "'Noto Serif Bengali', serif",
                            fontSize: 17, fontWeight: 800, color: "#0d3b1e", marginBottom: 10,
                        }}>{s.title}</p>

                        <p style={{ fontSize: 13, color: "#5a7a66", lineHeight: 1.7, margin: "0 0 20px" }}>
                            {s.desc}
                        </p>

                        <Link to={s.to} style={{ textDecoration: "none" }}>
                            <div
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background: s.color,
                                    color: "#fff",
                                    borderRadius: 50,
                                    padding: "11px 22px",
                                    fontSize: 13,
                                    fontWeight: 700,
                                    cursor: "pointer",
                                    boxShadow: `0 4px 14px ${s.color}40`,
                                    transition: "all 0.2s ease",
                                    fontFamily: "'Hind Siliguri', sans-serif",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "scale(1.07)";
                                    e.currentTarget.style.boxShadow = `0 8px 24px ${s.color}55`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "scale(1)";
                                    e.currentTarget.style.boxShadow = `0 4px 14px ${s.color}40`;
                                }}
                            >
                                {s.btnLabel}
                            </div>
                        </Link>

                        <div style={{
                            marginTop: 16,
                            display: "inline-flex", alignItems: "center", gap: 4,
                            background: `${s.color}12`, border: `1px solid ${s.color}25`,
                            borderRadius: 50, padding: "4px 14px",
                            fontSize: 11, fontWeight: 600, color: s.color,
                        }}>ধাপ {s.step}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ── Testimonials ──
function Testimonials() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        cardsRef.current.forEach((el, i) => {
                            if (el) setTimeout(() => {
                                el.style.opacity = "1";
                                el.style.transform = "translateY(0) scale(1)";
                            }, i * 100);
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef} style={{ marginBottom: 72 }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
                <span style={{
                    display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56",
                    border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px",
                    fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12,
                }}>রোগীর কথা</span>
                <h2 style={{
                    fontFamily: "'Noto Serif Bengali', serif",
                    fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8,
                }}>তারা কী বলছেন</h2>
                <p style={{ color: "#5a7a66", fontSize: 14 }}>হাজারো সন্তুষ্ট রোগীর মধ্যে কিছু অভিজ্ঞতা</p>
                <div style={{
                    width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)",
                    borderRadius: 4, margin: "12px auto 0",
                }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
                {testimonials.map((t, i) => (
                    <div
                        key={t.name}
                        ref={(el) => (cardsRef.current[i] = el)}
                        style={{
                            background: "#fff", borderRadius: 22, padding: "28px 24px",
                            border: `1.5px solid ${t.color}18`,
                            boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                            opacity: 0, transform: "translateY(30px) scale(0.97)",
                            transition: `all 0.55s cubic-bezier(0.34,1.2,0.64,1) ${i * 100}ms`,
                            position: "relative",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
                            e.currentTarget.style.boxShadow = `0 16px 40px ${t.color}20`;
                            e.currentTarget.style.borderColor = t.color;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0) scale(1)";
                            e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)";
                            e.currentTarget.style.borderColor = `${t.color}18`;
                        }}
                    >
                        <div style={{
                            position: "absolute", top: 16, right: 20,
                            fontSize: 48, color: `${t.color}15`, lineHeight: 1,
                            fontFamily: "Georgia, serif", fontWeight: 900,
                        }}>"</div>

                        <div style={{ fontSize: 14, marginBottom: 14, color: "#f0c040" }}>
                            {"★".repeat(t.rating)}
                        </div>

                        <p style={{ fontSize: 14, color: "#3a5a46", lineHeight: 1.8, marginBottom: 20, fontStyle: "italic" }}>
                            "{t.text}"
                        </p>

                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                            <div style={{
                                width: 42, height: 42, borderRadius: "50%", background: t.bg,
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontSize: 16, fontWeight: 700, color: t.color,
                                border: `2px solid ${t.color}30`,
                            }}>{t.avatar}</div>
                            <div>
                                <p style={{ fontSize: 14, fontWeight: 700, color: "#0d3b1e", margin: 0 }}>{t.name}</p>
                                <p style={{ fontSize: 12, color: "#5a7a66", margin: 0 }}>📍 {t.city}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ── Featured Doctors ──
function FeaturedDoctors() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        cardsRef.current.forEach((el, i) => {
                            if (el) setTimeout(() => {
                                el.style.opacity = "1";
                                el.style.transform = "translateY(0)";
                            }, i * 120);
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef} style={{ marginBottom: 72 }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
                <span style={{
                    display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56",
                    border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px",
                    fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12,
                }}>বিশেষজ্ঞ দল</span>
                <h2 style={{
                    fontFamily: "'Noto Serif Bengali', serif",
                    fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8,
                }}>জনপ্রিয় ডাক্তারগণ</h2>
                <p style={{ color: "#5a7a66", fontSize: 14 }}>আমাদের সর্বোচ্চ রেটিংপ্রাপ্ত বিশেষজ্ঞ ডাক্তারদের সাথে পরিচিত হন</p>
                <div style={{
                    width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)",
                    borderRadius: 4, margin: "12px auto 0",
                }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
                {featuredDoctors.map((d, i) => (
                    <div
                        key={d.name}
                        ref={(el) => (cardsRef.current[i] = el)}
                        style={{
                            background: "#fff", borderRadius: 22, padding: "28px 20px 24px",
                            border: `1.5px solid ${d.color}18`,
                            boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                            textAlign: "center", opacity: 0, transform: "translateY(30px)",
                            transition: `all 0.6s cubic-bezier(0.34,1.2,0.64,1) ${i * 120}ms`,
                            cursor: "pointer", position: "relative", overflow: "hidden",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-8px)";
                            e.currentTarget.style.boxShadow = `0 20px 50px ${d.color}25`;
                            e.currentTarget.style.borderColor = d.color;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)";
                            e.currentTarget.style.borderColor = `${d.color}18`;
                        }}
                    >
                        <div style={{
                            position: "absolute", top: 0, left: 0, right: 0, height: 4,
                            background: d.color, borderRadius: "22px 22px 0 0", opacity: 0.7,
                        }} />

                        <div style={{
                            width: 72, height: 72, borderRadius: "50%", background: d.bg,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: 26, fontWeight: 700, color: d.color,
                            margin: "0 auto 16px",
                            border: `3px solid ${d.color}30`,
                            boxShadow: `0 8px 24px ${d.color}25`,
                        }}>{d.avatar}</div>

                        <p style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: 15, fontWeight: 800, color: "#0d3b1e", margin: "0 0 4px" }}>
                            {d.name}
                        </p>
                        <p style={{ fontSize: 12, color: "#5a7a66", margin: "0 0 16px" }}>{d.spec}</p>

                        <div style={{
                            display: "flex", justifyContent: "center", gap: 12,
                            marginBottom: 16, flexWrap: "wrap",
                        }}>
                            <div style={{
                                background: `${d.color}10`, borderRadius: 50,
                                padding: "4px 10px", fontSize: 11, color: d.color, fontWeight: 600,
                            }}>⭐ {d.rating}</div>
                            <div style={{
                                background: "#f0f4f0", borderRadius: 50,
                                padding: "4px 10px", fontSize: 11, color: "#5a7a66", fontWeight: 600,
                            }}>👥 {d.patients}</div>
                        </div>

                        <div style={{ fontSize: 11, color: "#5a7a66", marginBottom: 16 }}>
                            অভিজ্ঞতা: {d.exp}
                        </div>

                        <Link to={`/search?specialization=${d.spec}`} style={{ textDecoration: "none" }}>
                            <div
                                style={{
                                    background: d.color, color: "#fff",
                                    borderRadius: 50, padding: "10px 20px",
                                    fontSize: 13, fontWeight: 700,
                                    transition: "all 0.2s ease",
                                    boxShadow: `0 4px 14px ${d.color}40`,
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.opacity = "0.85";
                                    e.currentTarget.style.transform = "scale(1.05)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.opacity = "1";
                                    e.currentTarget.style.transform = "scale(1)";
                                }}
                            >
                                অ্যাপয়েন্টমেন্ট নিন
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 32 }}>
                <Link to="/search" style={{ textDecoration: "none" }}>
                    <div
                        style={{
                            display: "inline-flex", alignItems: "center", gap: 8,
                            background: "transparent", color: "#2e9e56",
                            border: "2px solid #2e9e56", borderRadius: 50,
                            padding: "12px 28px", fontSize: 14, fontWeight: 700,
                            transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#2e9e56";
                            e.currentTarget.style.color = "#fff";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "#2e9e56";
                        }}
                    >
                        সকল ডাক্তার দেখুন →
                    </div>
                </Link>
            </div>
        </div>
    );
}

// ── Home ──
function Home() {
    return (
        <div style={{ fontFamily: "'Hind Siliguri', sans-serif", background: "#f7fbf9", minHeight: "100vh" }}>
            <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Noto+Serif+Bengali:wght@700;800;900&display=swap" rel="stylesheet" />

            {/* HERO */}
            <section style={{
                position: "relative",
                background: "linear-gradient(160deg, #062210 0%, #0d3b1e 40%, #1a6b38 80%, #2e9e56 100%)",
                padding: "80px 24px 100px", textAlign: "center", overflow: "hidden",
            }}>
                <div style={{
                    position: "absolute", inset: 0,
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
                    backgroundSize: "60px 60px", pointerEvents: "none",
                }} />
                <div style={{
                    position: "absolute", width: 500, height: 500, borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(94,203,135,0.12) 0%, transparent 70%)",
                    top: -150, right: -150, pointerEvents: "none",
                }} />

                <div style={{ position: "relative", zIndex: 2, maxWidth: 720, margin: "0 auto" }}>
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)",
                        borderRadius: 50, padding: "7px 18px", fontSize: 13, color: "#a8e6c0",
                        marginBottom: 28, backdropFilter: "blur(8px)",
                    }}>
                        <span style={{
                            width: 7, height: 7, borderRadius: "50%",
                            background: "#5ecb87", boxShadow: "0 0 8px #5ecb87", display: "inline-block",
                        }} />
                        বাংলাদেশের নির্ভরযোগ্য স্বাস্থ্যসেবা প্ল্যাটফর্ম
                    </div>

                    <h1 style={{
                        fontFamily: "'Noto Serif Bengali', serif",
                        fontSize: "clamp(2.6rem, 6vw, 4.6rem)",
                        fontWeight: 900, color: "#fff", lineHeight: 1.15,
                        letterSpacing: "-1px", marginBottom: 16,
                        textShadow: "0 2px 12px rgba(0,0,0,0.2)",
                    }}>
                        সঠিক ডাক্তার,{" "}
                        <span style={{
                            background: "linear-gradient(135deg, #5ecb87, #f0c040)",
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                        }}>সঠিক সময়ে</span>
                    </h1>

                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, marginBottom: 40, lineHeight: 1.7 }}>
                        বাংলাদেশের যেকোনো প্রান্তে বিশেষজ্ঞ ডাক্তার খুঁজুন —<br />
                        সহজে, দ্রুত এবং বিশ্বস্তভাবে
                    </p>

                    <div style={{ display: "flex", justifyContent: "center", marginBottom: 52 }}>
                        <SearchBar />
                    </div>

                    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                        {stats.map((s, i) => (
                            <div key={s.label} style={{
                                padding: "0 32px", textAlign: "center",
                                borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none",
                            }}>
                                <div style={{
                                    fontFamily: "'Noto Serif Bengali', serif",
                                    fontSize: 26, fontWeight: 900, color: "#fff", marginBottom: 4,
                                }}>{s.value}</div>
                                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Wave */}
            <div style={{ marginTop: -2, lineHeight: 0, background: "#0d3b1e" }}>
                <svg viewBox="0 0 1200 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 70 }}>
                    <path d="M0,35 C200,70 400,0 600,35 C800,70 1000,10 1200,35 L1200,70 L0,70 Z" fill="#f7fbf9" />
                </svg>
            </div>

            {/* CONTENT */}
            <div style={{ maxWidth: 1060, margin: "0 auto", padding: "64px 24px 80px" }}>

                {/* Features Section Header */}
                <div style={{ textAlign: "center", marginBottom: 40 }}>
                    <span style={{
                        display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56",
                        border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px",
                        fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12,
                    }}>কেন আমরা</span>
                    <h2 style={{
                        fontFamily: "'Noto Serif Bengali', serif",
                        fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8,
                    }}>আমাদের বিশেষত্ব</h2>
                    <p style={{ color: "#5a7a66", fontSize: 14 }}>স্বাস্থ্য খোঁজি কেন বাংলাদেশের সেরা স্বাস্থ্যসেবা প্ল্যাটফর্ম</p>
                    <div style={{
                        width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)",
                        borderRadius: 4, margin: "12px auto 0",
                    }} />
                </div>

                <FeatureCards />
                <HowItWorks />

                {/* Specializations Section Header */}
                <div style={{ textAlign: "center", marginBottom: 40 }}>
                    <span style={{
                        display: "inline-block", background: "rgba(46,158,86,0.1)", color: "#2e9e56",
                        border: "1px solid rgba(46,158,86,0.25)", borderRadius: 50, padding: "5px 16px",
                        fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 12,
                    }}>বিভাগসমূহ</span>
                    <h2 style={{
                        fontFamily: "'Noto Serif Bengali', serif",
                        fontSize: 28, fontWeight: 800, color: "#0d3b1e", marginBottom: 8,
                    }}>বিশেষজ্ঞতা অনুযায়ী খুঁজুন</h2>
                    <p style={{ color: "#5a7a66", fontSize: 14 }}>আপনার প্রয়োজন অনুযায়ী বিভাগ বেছে নিন</p>
                    <div style={{
                        width: 48, height: 4, background: "linear-gradient(90deg, #2e9e56, #5ecb87)",
                        borderRadius: 4, margin: "12px auto 0",
                    }} />
                </div>

                <div style={{ marginBottom: 72 }}>
                    <SpecializationGrid />
                </div>

                <FeaturedDoctors />
                <Testimonials />

                {/* CTA Banner */}
                <div style={{
                    background: "linear-gradient(135deg, #0d3b1e 0%, #1a6b38 100%)",
                    borderRadius: 24, padding: "44px 40px",
                    display: "flex", alignItems: "center",
                    justifyContent: "space-between", flexWrap: "wrap", gap: 20,
                    boxShadow: "0 20px 60px rgba(13,59,30,0.3)",
                    position: "relative", overflow: "hidden",
                }}>
                    <div style={{
                        position: "absolute", right: 160, top: "50%", transform: "translateY(-50%)",
                        fontSize: 110, opacity: 0.06, pointerEvents: "none",
                    }}>🏥</div>
                    <div style={{ position: "relative" }}>
                        <h3 style={{
                            fontFamily: "'Noto Serif Bengali', serif",
                            color: "#fff", fontSize: 22, fontWeight: 800, marginBottom: 6,
                        }}>জরুরি সাহায্য দরকার?</h3>
                        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>
                            আমাদের হেল্পলাইনে যোগাযোগ করুন — ২৪ ঘণ্টা, ৭ দিন
                        </p>
                    </div>
                    <a href="tel:16000" style={{
                        background: "#fff", color: "#0d3b1e",
                        padding: "14px 32px", borderRadius: 50,
                        fontWeight: 700, fontSize: 16, textDecoration: "none",
                        flexShrink: 0, boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                        display: "inline-flex", alignItems: "center", gap: 8,
                        transition: "all 0.2s ease",
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-2px)";
                            e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.3)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
                        }}
                    >
                        📞 ১৬০০০ তে কল করুন
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;