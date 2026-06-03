import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        © {year} The College Chronicles.  All rights reserved.
      </p>
    </footer>
  );
}
