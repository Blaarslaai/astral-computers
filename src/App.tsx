import bg from "./assets/bg.jpg";

function App() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              🌟 Coming Soon to the Digital Cosmos! 🌟
            </h1>
            <p className="mb-5">
              Welcome to Astral Computers, where innovation meets imagination!
              <br />
              <br />
              We’re on a mission to elevate software development to new heights,
              crafting cutting-edge solutions that empower businesses and
              inspire creativity.
              <br />
              Our team of passionate developers is busy building a platform that
              will redefine the way you think about technology. Stay tuned for
              our launch, and prepare to embark on a journey into the future of
              software.
              <br />
              Your next breakthrough is just around the corner! 🚀
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
