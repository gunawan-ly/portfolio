import Navbar from "../Components/Navbar";
import Jumbotron from "../Components/Jumbotron";
import Footer from "../Components/Footer";

export default function Home() {

  const titleJumbotroon = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, dolores"

  const homeSect =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, rerum temporibus aperiam corporis voluptate adipisci pariatur nam corrupti praesentium amet.";

  return (
    <>
      <Navbar />
      <Jumbotron title={titleJumbotroon} homeSect={homeSect} />
      <Footer />
    </>
  );
}
