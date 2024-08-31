import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div className="card hero">
        <p className="text-display-1 hero-title">
          Welcome to login-register <br />
        </p>
        <p className="text-body-1 hero-tagline">Template</p>

        <Link
          href="https://github.com/Tarzan2202"
          target="_blank"
          rel="noreferrer"
          className="btn btn-light btn-big"
        >
          GitHub
        </Link>
      </div>
    </div>
  );
}
