import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="text-center p-6 bg-[#f5f5f5dd] text-sm text-black">
      © 2025 PT. Techno Orbit Particle Filtration |{' '}
      <span className="inline-flex items-center gap-1">
        Website by
        <a
          href="https://infimech.tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/imx_logo_blue.png"
            alt="Infimech Tech Logo"
            width={82}
            height={82}
          />
        </a>
      </span>
    </footer>
  );
}
