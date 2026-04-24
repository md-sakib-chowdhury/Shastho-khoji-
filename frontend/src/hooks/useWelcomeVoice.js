import { useEffect } from "react";

/**
 * useWelcomeVoice
 * – Home page mount হলে বা ফিরে আসলে Bengali welcome voice বাজবে।
 * – প্রতিটা visit-এ play হবে।
 */
export default function useWelcomeVoice() {
    useEffect(() => {
        // Browser support check
        if (!window.speechSynthesis) return;

        // পুরনো কোনো speech চলতে থাকলে বন্ধ করো
        window.speechSynthesis.cancel();

        const message =
            "স্বাস্থ্য খোঁজিতে আপনাকে স্বাগতম। " +
            "আপনার কাছের বিশেষজ্ঞ ডাক্তার খুঁজুন — সহজে, দ্রুত এবং বিশ্বস্তভাবে।";

        const speak = () => {
            const utter = new SpeechSynthesisUtterance(message);

            // Bengali voice খোঁজার চেষ্টা, না পেলে default
            const voices = window.speechSynthesis.getVoices();
            const bengaliVoice =
                voices.find((v) => v.lang === "bn-BD") ||
                voices.find((v) => v.lang === "bn-IN") ||
                voices.find((v) => v.lang.startsWith("bn")) ||
                null;

            if (bengaliVoice) utter.voice = bengaliVoice;
            utter.lang = bengaliVoice ? bengaliVoice.lang : "bn-BD";
            utter.rate = 0.88;   // একটু ধীরে — স্পষ্ট শোনাবে
            utter.pitch = 1.05;
            utter.volume = 1;

            window.speechSynthesis.speak(utter);
        };

        // Voices async load হয় — তাই দুভাবে handle করা হলো
        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
            speak();
        } else {
            window.speechSynthesis.addEventListener("voiceschanged", speak, { once: true });
        }

        // Page ছাড়লে voice বন্ধ
        return () => {
            window.speechSynthesis.cancel();
        };
    }, []); // [] মানে শুধু mount-এ চলবে; navigate করে ফিরলে re-mount হবে
}