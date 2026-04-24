import { useEffect } from "react";

export function useWelcomeVoice(shouldPlay) {
    useEffect(() => {
        if (!shouldPlay) return;
        if (!window.speechSynthesis) return;

        const message =
            "স্বাস্থ্য খোঁজিতে আপনাকে স্বাগতম। আপনার পছন্দের ডাক্তার খুঁজুন সহজেই।";

        const doSpeak = () => {
            window.speechSynthesis.cancel();

            const utter = new SpeechSynthesisUtterance(message);
            utter.lang = "bn-BD";
            utter.rate = 0.85;
            utter.pitch = 1;
            utter.volume = 1;

            // Bengali voice খোঁজো, না পেলে Hindi, না পেলে যেটা আছে সেটা
            const voices = window.speechSynthesis.getVoices();
            const preferred =
                voices.find((v) => v.lang.startsWith("bn")) ||
                voices.find((v) => v.lang.startsWith("hi")) ||
                voices[0];

            if (preferred) utter.voice = preferred;

            window.speechSynthesis.speak(utter);
        };

        // voices list অনেক সময় empty থাকে প্রথমে — wait করতে হবে
        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
            doSpeak();
        } else {
            // onvoiceschanged event এর জন্য অপেক্ষা করো
            window.speechSynthesis.onvoiceschanged = () => {
                window.speechSynthesis.onvoiceschanged = null;
                doSpeak();
            };

            // fallback: ৩০০ms পরেও try করো
            const fallback = setTimeout(doSpeak, 300);
            return () => clearTimeout(fallback);
        }
    }, [shouldPlay]);
}