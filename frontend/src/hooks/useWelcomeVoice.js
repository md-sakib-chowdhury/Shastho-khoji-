
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

            const voices = window.speechSynthesis.getVoices();
            const preferred =
                voices.find((v) => v.lang.startsWith("bn")) ||
                voices.find((v) => v.lang.startsWith("hi")) ||
                voices[0];

            if (preferred) utter.voice = preferred;

            window.speechSynthesis.speak(utter);
        };

        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
            doSpeak();
        } else {
            window.speechSynthesis.onvoiceschanged = () => {
                window.speechSynthesis.onvoiceschanged = null;
                doSpeak();
            };
            const fallback = setTimeout(doSpeak, 300);
            return () => clearTimeout(fallback);
        }
    }, [shouldPlay]);
}