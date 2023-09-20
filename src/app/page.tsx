import Feedbacks from "@components/components/Feedbacks";
import Footer from "@components/components/Footer";
import HomeTop from "@components/components/HomeTop";
import Navbar from "@components/components/Navbar";
import Plans from "@components/components/Plans";
import Public from "@components/components/Public";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeTop />
      <Public />
      <Plans />
      <Feedbacks />
      <Footer />
    </main>
  )
}
