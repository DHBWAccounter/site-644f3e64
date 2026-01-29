import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Corporate Members — Bitcoin Association Switzerland",
};

const corporateMembers = [
  {
    name: "BitBox",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1596551209231-6DTNGQPKB6CHPIPF3GRS/02b+db-BitBox+margin+bkg-transparent.png?format=300w",
    url: "https://shiftcrypto.ch/",
  },
  {
    name: "Bitcoin Suisse",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1539339845417-XB6KMLWHKWCXKYOIDQLL/full_logo_new.png?format=300w",
    url: "https://www.bitcoinsuisse.com/",
  },
  {
    name: "Blockchain Source",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1728027563887-9D9OLHIZYI2BQQB4XUNH/logo-354x59.png?format=300w",
    url: "https://blockchainsource.ch/",
  },
  {
    name: "Crypto Finance",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1556548120132-FDRR0QNN1G4YMFDGJHJO/Crypto-Finance-logo.jpg?format=300w",
    url: "https://www.cryptofinance.ch/",
  },
  {
    name: "21 Analytics",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1594364557839-RTANLGKYTOHNW3W7DWNB/Logo.png?format=300w",
    url: "https://www.21analytics.ch/",
  },
  {
    name: "Tatoshi Services",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1727654250834-4V6KRLIF5N1AROCN4JT1/Logo+Tatoshi+Services.png?format=300w",
    url: "https://tatoshi-services.com/",
  },
  {
    name: "Apps with love",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1624207019607-RBOKOAIK9P121899L034/Awl_Logo_17_black_rgb.png?format=100w",
    url: "https://appswithlove.com/",
  },
  {
    name: "Hodling",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1624369670385-FICD1IXHLKO0KISG37QF/hodling-logo.png?format=300w",
    url: "https://hodling.ch/",
  },
  {
    name: "Alephium",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1636130674575-E9EBWE86QJOH1R038Z47/image_2021-11-01_09-39-50.png?format=300w",
    url: "https://alephium.org/",
  },
  {
    name: "Aktionariat",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1636188901843-LKE49EDOBMHBW0NQLD2V/Aktionariat.jpg?format=300w",
    url: "https://aktionariat.com/",
  },
  {
    name: "21 Lectures",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1681299724574-ROJH85FPQ8DDD36W8MKJ/yellow_black.png?format=300w",
    url: "https://www.21lectures.com/",
  },
  {
    name: "InCore Bank",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1765804013568-ON3P0X10SFU43PP1GCK9/InC_Logotype_rgb-hex-1749C6_0724.jpg?format=300w",
    url: "https://incorebank.ch/",
  },
  {
    name: "Pocket",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1738872657909-DN85KSD3N76MHRTHKACR/pocket-light.png?format=300w",
    url: "#",
  },
  {
    name: "House of Satoshi",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1726920586590-25CR1IXKQRR83AL62VQG/HoS.jpg?format=300w",
    url: "https://www.house-of-satoshi.ch/",
  },
  {
    name: "Berglinde",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1726920800707-V2WQ0NY7MCAMG4F5W79I/Berglinde.jpg?format=300w",
    url: "https://www.berglinde.com/",
  },
  {
    name: "Infinity21",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1726921284073-GBCP6S64DOUMQOIC4OQL/Infintiy21_com.jpg?format=300w",
    url: "https://infinity21.com/",
  },
  {
    name: "Saynode",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1727568467135-P6HCSME3M25YDVSLY0BS/Logo+Saynode+B+transparent+%282%29.png?format=100w",
    url: "https://www.saynode.ch/",
  },
  {
    name: "Nym",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1728216316012-B4YYGCSVJ9I6K23GTI9R/nym_1200x630-2dfd28cf.png?format=300w",
    url: "https://nymtech.net/",
  },
  {
    name: "Zeus",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1727568701020-HLH119V9BFJEPE1P3GM3/Zeus+Logo+ohne+Claim%403x.png?format=300w",
    url: "https://zeusatm.ch/",
  },
  {
    name: "Bitcoin Schweiz",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1727571196505-TICAF3KK9275JC9NJGRW/Logo+bitcoin-schweiz.ch.jpg?format=300w",
    url: "https://bitcoin-schweiz.ch/",
  },
  {
    name: "Lamassu",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1730642437107-NM6E7FDWMOGHSA5DJ1H9/logo-atms-colored-b-320px.png?format=300w",
    url: "https://lamassu.is/",
  },
  {
    name: "Scholarium",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1734428968346-05XILAMCMAT5R1B5GQ4C/scholarium-logo.png?format=300w",
    url: "http://scholarium.at/",
  },
  {
    name: "House of Test Swiss",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1734444147758-EDKRGTOED8C3F698QV1L/hot-logotype-black-rebels.png?format=300w",
    url: "https://www.houseoftest.ch/",
  },
  {
    name: "Relai",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1736800666643-VZ8Z4HLZQD4QEZN5FGMM/Relai_Julian+Liniger_.png?format=300w",
    url: "https://relai.app/",
  },
  {
    name: "Nakamochi",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1741777487636-80VAQDB2JONCFEZ3M4XW/nakamochi-logo-black.png?format=300w",
    url: "https://nakamochi.io/",
  },
  {
    name: "Bittr",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1742559399401-2H32H2A9OV1BSDEZ0MF9/Bittr+Logo+%281%29.png?format=300w",
    url: "https://getbittr.com/",
  },
  {
    name: "Unita",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1742910303034-A4PS8AGV0RLXQ0RU5EC7/unita.jpg?format=300w",
    url: "https://unitafinance.ch/",
  },
  {
    name: "NiceHash",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1744446762941-RQH7Y2A8OZXB8Z1ESJH9/logo_big_light.png?format=300w",
    url: "https://www.nicehash.com/",
  },
  {
    name: "Pandora Prime",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1752831944031-GC9P7Z15VHE0EPSRTKU5/logo.png?format=300w",
    url: "https://pandoraprime.ch/",
  },
  {
    name: "BitVault",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1755722769067-OPN83O8PS2ETJIW4LY2G/BitVault-logo_transparent.png?format=300w",
    url: "https://www.bitvault.sv/",
  },
];

const partnerOrganisations = [
  {
    name: "Uni Basel",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1520356559322-8UKNRYQO16Z2GTXPRAML/Uni-Basel.png?format=300w",
    url: "https://cif.unibas.ch/en/home/",
  },
  {
    name: "SICTIC",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1540280919184-RH9SE12KSTY2777PXEUT/sictic_logo.png?format=300w",
    url: "https://www.sictic.ch/",
  },
  {
    name: "SBF",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1569996178809-N8448S1PPEBRDGJHT0E9/sbf.png?format=300w",
    url: "#",
  },
];

export default function CorporateMembersPage() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-light border-b border-gray-200">
          <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <span className="text-gray-400">membership</span>
              <span className="text-gray-400">/</span>
              <Link href="/private" className="hover:text-primary transition-colors">
                Private
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/corporate" className="hover:text-primary transition-colors">
                Corporate
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-primary">Our Corporate Members</span>
            </nav>
          </div>
        </div>

        {/* Corporate Members Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Corporate Members
            </h1>
            <p className="text-gray-600 mb-8 max-w-3xl">
              The following organizations have chosen to support the work of the «Bitcoin Association Switzerland« (BAS) financially, through a corporate membership.
            </p>
            <p className="text-gray-600 mb-12 max-w-3xl">
              The listed organizations are not liable for any conduct or official messages of the BAS; nor is the BAS responsible for the conduct and/or business of the listed organizations.
            </p>

            {/* Members Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {corporateMembers.map((member) => (
                <Link
                  key={member.name}
                  href={member.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white border border-gray-100 rounded-lg hover:shadow-md transition-shadow"
                >
                  <Image
                    src={member.logo}
                    alt={member.name}
                    width={150}
                    height={75}
                    className="max-w-full h-auto max-h-16 object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Organisations Section */}
        <section className="py-12 md:py-16 bg-gray-light">
          <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">
              Partner Organisations
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              The following organizations have chosen to support the work of the «Bitcoin Association Switzerland« (BAS) through various means and services, other than a corporate membership.
            </p>
            <p className="text-gray-600 mb-12 max-w-3xl">
              The listed organizations are not liable for any conduct or official messages of the BAS; nor is the BAS responsible for the conduct and/or business of the listed organizations.
            </p>

            {/* Partners Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {partnerOrganisations.map((partner) => (
                <Link
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white border border-gray-100 rounded-lg hover:shadow-md transition-shadow"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={100}
                    className="max-w-full h-auto max-h-20 object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}