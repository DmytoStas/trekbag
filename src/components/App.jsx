import { Toaster } from "react-hot-toast";

import {
  BackgroundHeading,
  Header,
  ItemList,
  Sidebar,
  Footer,
} from "@/components";

function App() {
  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemList />
        <Sidebar />
      </main>

      <Footer />
      <Toaster />
    </>
  );
}

export default App;
