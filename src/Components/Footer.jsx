export default function Footer() {
  const runText = () => {
    return <i>copyright 2024</i>;
  };
  return (
    <>
      <section className="footer">
        <footer className="bg-dark text-center text-white py-3">
          Created by Awann
          <p>
            {runText()}
          </p>
        </footer>
      </section>
    </>
  );
}
