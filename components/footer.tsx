import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="text-center p-6 bg-[#c1c1c18c] text-sm text-gray-600">
      © 2025 PT. Rekayasa Energi Bersama —{' '}
      <span className="inline-flex items-center gap-1">
        Website by
        <a
          href="https://infimech-tech.vercel.app"
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
