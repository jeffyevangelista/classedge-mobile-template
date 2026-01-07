import { getASItem, setASItem } from "@/lib/storage/async-storage";
import Onboarding from "@blazejkustra/react-native-onboarding";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

export default function MyOnboarding() {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  const handleCompleteOnboarding = async () => {
    await setASItem("onboardingCompleted", "true");
    router.replace("/(auth)/login");
  };

  useEffect(() => {
    const checkOnboarding = async () => {
      const completed = await getASItem("onboardingCompleted");
      if (completed === "true") {
        handleCompleteOnboarding();
      } else {
        setIsChecking(false);
      }
    };
    checkOnboarding();
  }, []);

  if (isChecking) {
    return null;
  }

  return (
    <Onboarding
      skipButton={(onPress) => {
        return null;
      }}
      animationDuration={300}
      introPanel={{
        title: "Your private AI mind.",
        subtitle: "In your pocket.",
        button: "Get Started",
        image: require("@/assets/logo.png"),
      }}
      steps={[
        {
          label: "Offline AI access",
          title: "Chat with AI models offline",
          description:
            "Interact with AI models securely and offline on your mobile device.",
          buttonLabel: "Got it, next",
          image: require("@/assets/onboarding/step_chat.png"),
          position: "top",
        },
        {
          label: "Performance tests",
          title: "Benchmark your models",
          description:
            "Easily test out how AI models perform while being benchmarked.",
          buttonLabel: "Nice, next",
          image: require("@/assets/onboarding/step_benchmark.png"),
          position: "bottom",
        },
        {
          label: "AI RAG",
          title: "Add source documents",
          description:
            "Use extra files to extend models knowledge and responses.",
          buttonLabel: "Great, next",
          image: require("@/assets/onboarding/step_sources.png"),
          position: "top",
        },
        {
          label: "Speech to text",
          title: "Use voice instead of chat",
          description:
            "Use voice messages that automatically transcript into text.",
          buttonLabel: "Awesome, next",
          image: require("@/assets/onboarding/step_voice.png"),
          position: "top",
        },
        {
          label: "Custom models",
          title: "Upload extra models",
          description: "Add your own custom models compatible with ExecuTorch.",
          buttonLabel: "Start chatting",
          image: require("@/assets/onboarding/step_models.png"),
          position: "bottom",
        },
      ]}
      onComplete={async () => {
        await handleCompleteOnboarding();
      }}
      onStepChange={() => {}}
      showCloseButton
      showBackButton
    />
  );
}
