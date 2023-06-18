import Heading from "../Sections/headingPage/Heading";
import Specials from "../Sections/headingPage/Specials";
import Testimonials from "../Sections/headingPage/Testimonials";
import About from "../Sections/headingPage/About";

export default function HomePage() {
  return (
    <>
      <Heading />
      <main>
        <Specials />
        <Testimonials />
        <About />
      </main>
    </>
  );
}
