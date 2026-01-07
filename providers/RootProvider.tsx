import HeroUIProvider from "./HeroUIProvider";

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return <HeroUIProvider>{children}</HeroUIProvider>;
};

export default RootProvider;
