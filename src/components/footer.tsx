import Link from "next/link";

async function Footer() {
  return (
    <footer className="mb-8 mt-12 flex flex-col items-center justify-center text-sm leading-snug text-muted-foreground">
      <span>
        <Link href="/impressum">Impressum - Legal notice</Link>
      </span>
    </footer>
  );
}

export default Footer;
