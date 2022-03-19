import {
  Additionaly,
  Footer,
  Header,
  Hero,
  Services,
  Tabs,
  WhatWeDo,
} from "../Blocks";

export default function App() {
  return (
    <div className="font-body text-base">
      <Header />
      <Hero />
      <WhatWeDo />
      <Services />
      <Tabs />
      <Additionaly />
      <Footer />
    </div>
  );
}
