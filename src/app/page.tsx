import Image from "next/image";
import EarningTicker from "@/components/EarningTicker";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start py-12 px-6">
      <div className="w-full max-w-lg mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center text-gray-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <Image src="/verified.png" alt="Verified" width={16} height={16} className="mr-1.5" />
            Zweryfikowane
          </div>

          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg mb-6"><span className="text-white text-3xl font-bold">P</span></div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Program Przewijania i Zarabiania
          </h1>

          <a href="https://glctrk.org/aff_c?offer_id=3531&aff_id=22375&source=fcPL" target="_blank" rel="noopener noreferrer" className="w-full">
            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-full flex items-center justify-center text-lg hover:opacity-90 transition-opacity mb-3">
              Aktywuj Teraz
            </button>
          </a>

          <Image
            src="/tutorial.gif"
            alt="Animacja wypłat"
            width={350} 
            height={60}
            unoptimized={true} // Required for GIFs
            className="my-4"
          />
          <p className="text-gray-500 text-sm">
            Codzienne wypłaty na PayPal, CashApp i konto bankowe.
          </p>

          <div className="mt-10 text-center w-full">
            <h2 className="text-xl font-bold text-gray-800">Szybki Przewodnik Startowy</h2>
          </div>

          <div className="mt-6 space-y-6 text-left w-full">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div className="ml-4">
                <h3 className="text-md font-semibold text-gray-900">Rozpocznij i Pobierz Aplikację</h3>
                <p className="text-gray-500 text-sm mt-1">Kliknij przycisk powyżej, aby rozpocząć i natychmiast zainstalować aplikację.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div className="ml-4">
                <h3 className="text-md font-semibold text-gray-900">Utwórz Konto i Połącz</h3>
                <p className="text-gray-500 text-sm mt-1">Zarejestruj się w aplikacji i bezpiecznie połącz swój profil.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div className="ml-4">
                <h3 className="text-md font-semibold text-gray-900">Oglądaj Filmy i Zarabiaj Pieniądze</h3>
                <p className="text-gray-500 text-sm mt-1">Zacznij przewijać, aby generować natychmiastowe codzienne wypłaty!</p>
              </div>
            </div>
          </div>

          <a href="https://glctrk.org/aff_c?offer_id=3531&aff_id=22375&source=fcPL" target="_blank" rel="noopener noreferrer" className="w-full">
            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-full flex items-center justify-center text-lg hover:opacity-90 transition-opacity mt-10">
              Aktywuj Teraz
            </button>
          </a>

          <EarningTicker />
        </div>
      </div>
    </main>
  );
}
