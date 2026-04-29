import Image from 'next/image';
import { LOGO_URL } from '@/lib/constants';

const Footer = () => {
  return (
    <footer className="py-12 bg-[#2e4c8c] text-[#fff4e2] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
        <div className="flex items-center opacity-90">
          <Image
            src={LOGO_URL}
            alt="AsaFood Logo"
            width={120}
            height={30}
            className="h-8 w-auto object-contain filter brightness-0 invert"
          />
        </div>
        <p className="text-sm text-white/50">© {new Date().getFullYear()} AsaFood. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
