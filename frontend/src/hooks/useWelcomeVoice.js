import { useEffect } from "react";

export default function useWelcomeVoice(shouldPlay) {
    useEffect(() => {
        if (!shouldPlay) return;
        if (!window.speechSynthesis) return;

        const message =
            "Welcome to Swasthya Khoji. Find your preferred doctor easily and quickly.";

        const doSpeak = () => {
            window.speechSynthesis.cancel();

            const utter = new SpeechSynthesisUtterance(message);
            utter.lang = "en-US";
            utter.rate = 0.9;
            utter.pitch = 1.05;
            utter.volume = 1;

            const voices = window.speechSynthesis.getVoices();

            const preferred =
                voices.find((v) => v.name.includes("Google US English")) ||
                voices.find((v) => v.name.includes("Samantha")) ||
                voices.find((v) => v.name.includes("Karen")) ||
                voices.find((v) => v.lang === "en-US" && v.localService) ||
                voices.find((v) => v.lang === "en-US") ||
                voices.find((v) => v.lang.startsWith("en")) ||
                null;

            if (preferred) {
                utter.voice = preferred;
            }

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
            const fallback = setTimeout(doSpeak, 500);
            return () => clearTimeout(fallback);
        }
    }, [shouldPlay]);
}