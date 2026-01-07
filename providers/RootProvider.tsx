import HeroUIProvider from "./HeroUIProvider";
import KeyboardProvider from "./KeyboardProvider";
import QueryProvider from "./QueryProvider";

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <HeroUIProvider>
        <KeyboardProvider>{children}</KeyboardProvider>
      </HeroUIProvider>
    </QueryProvider>
  );
};

export default RootProvider;
