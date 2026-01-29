import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export const metadata = {
  title: "Archive — Bitcoin Association Switzerland",
};

const archiveItems = [
  {
    month: "December 2025",
    href: "/bitcoin-association-switzerland?month=12-2025",
    posts: [
      {
        title: "Bitcoin in 10vor10",
        date: "Dec 9, 2025",
        href: "/bitcoin-association-switzerland/2014/01/14/bitcoin-in-10vor10",
      },
      {
        title: "Marc Faber points readers to Bitcoin",
        date: "Dec 9, 2025",
        href: "/bitcoin-association-switzerland/2014/06/04/marc-faber-points-readers-to-bitcoin",
      },
    ],
  },
  {
    month: "May 2025",
    href: "/bitcoin-association-switzerland?month=05-2025",
    posts: [
      {
        title: "𝗦𝘁𝗮𝘁𝗲𝗺𝗲𝗻𝘁 𝗼𝗻 𝘁𝗵𝗲 𝟭𝟮-𝗣𝗼𝗶𝗻𝘁 𝗣𝗿𝗼𝗴𝗿𝗮𝗺 𝗳𝗼𝗿 𝗮 𝗙𝗼𝗿𝘄𝗮𝗿𝗱-𝗟𝗼𝗼𝗸𝗶𝗻𝗴 𝗗𝗶𝗴𝗶𝘁𝗮𝗹 𝗙𝗶𝗻𝗮𝗻𝗰𝗶𝗮𝗹 𝗖𝗲𝗻𝘁𝗲𝗿",
        date: "May 31, 2025",
        href: "/bitcoin-association-switzerland/2025/12/8/-",
      },
    ],
  },
  {
    month: "February 2025",
    href: "/bitcoin-association-switzerland?month=02-2025",
    posts: [
      {
        title: "Bitcoin Association Switzerland Welcomes the Federal Council's Endorsement of Enhanced Bitcoin Regulation",
        date: "Feb 28, 2025",
        href: "/bitcoin-association-switzerland/2025/2/28/bitcoin-association-switzerland-welcomes-the-federal-councils-endorsement-of-enhanced-bitcoin-regulation",
      },
    ],
  },
  {
    month: "November 2024",
    href: "/bitcoin-association-switzerland?month=11-2024",
    posts: [
      {
        title: "Bitcoin Association Switzerland appoints new board, sets bold vision for the future",
        date: "Nov 13, 2024",
        href: "/bitcoin-association-switzerland/2025/12/8/bitcoin-association-switzerland-appoints-new-board-sets-bold-vision-for-the-future",
      },
    ],
  },
  {
    month: "October 2024",
    href: "/bitcoin-association-switzerland?month=10-2024",
    posts: [
      {
        title: "Announcement from the Board of the Bitcoin Association Switzerland",
        date: "Oct 27, 2024",
        href: "/bitcoin-association-switzerland/2025/12/8/announcement-from-the-board-of-the-bitcoin-association-switzerland",
      },
    ],
  },
  {
    month: "August 2022",
    href: "/bitcoin-association-switzerland?month=08-2022",
    posts: [
      {
        title: "Prudential Treatment of Cryptoasset Exposures II",
        date: "Aug 10, 2022",
        href: "/bitcoin-association-switzerland/2022/8/10/prudential-treatment-of-cryptoasset-exposures-ii",
      },
    ],
  },
  {
    month: "June 2021",
    href: "/bitcoin-association-switzerland?month=06-2021",
    posts: [
      {
        title: "Prudential Treatment of Cryptoasset Exposures",
        date: "Jun 27, 2021",
        href: "/bitcoin-association-switzerland/2021/7/3/comments-of-bitcoin-association-switzerland-on-the-draft-revised-vasp-guidance",
      },
    ],
  },
  {
    month: "April 2021",
    href: "/bitcoin-association-switzerland?month=04-2021",
    posts: [
      {
        title: "Comments of Bitcoin Association Switzerland on the draft revised VASP Guidance",
        date: "Apr 20, 2021",
        href: "/bitcoin-association-switzerland/2021/6/23/01ts1e8cggntafbag86wvwbztvudvh",
      },
    ],
  },
  {
    month: "June 2020",
    href: "/bitcoin-association-switzerland?month=06-2020",
    posts: [
      {
        title: "Our Comment on the risk assessment for global Stablecoins of the G20's Financial Stability Board",
        date: "Jun 20, 2020",
        href: "/bitcoin-association-switzerland/on-the-risk-assessment-for-global-stablecoins-of-the-g20s-financial-stability-board",
      },
    ],
  },
  {
    month: "April 2020",
    href: "/bitcoin-association-switzerland?month=04-2020",
    posts: [
      {
        title: "Our Comment on GWV-FINMA adjustment for FinSA / FinIA",
        date: "Apr 9, 2020",
        href: "/bitcoin-association-switzerland/2020/4/9/our-comment-on-gwv-finma-adjustment-for-finsa-finia",
      },
    ],
  },
  {
    month: "March 2020",
    href: "/bitcoin-association-switzerland?month=03-2020",
    posts: [
      {
        title: "Our Comment on "Designing a prudential treatment for cryptoassets" of the Basel Committee on Banking Supervision",
        date: "Mar 13, 2020",
        href: "/bitcoin-association-switzerland/our-comment-on-designing-a-prudential-treatment-for-cryptoassets-of-the-basel-committee-on-banking-supervision",
      },
    ],
  },
  {
    month: "December 2019",
    href: "/bitcoin-association-switzerland?month=12-2019",
    posts: [
      {
        title: "Crypto Valley Association Issues Questionable Recommendations",
        date: "Dec 3, 2019",
        href: "/bitcoin-association-switzerland/2019/12/3/crypto-valley-association-issues-questionable-recommendations",
      },
    ],
  },
  {
    month: "June 2019",
    href: "/bitcoin-association-switzerland?month=06-2019",
    posts: [
      {
        title: "Our Comment on the Swiss Blockchain Law",
        date: "Jun 27, 2019",
        href: "/bitcoin-association-switzerland/2019/6/27/our-comment-on-the-swiss-blockchain-law",
      },
    ],
  },
  {
    month: "December 2018",
    href: "/bitcoin-association-switzerland?month=12-2018",
    posts: [
      {
        title: "On the Federal Council Report",
        date: "Dec 14, 2018",
        href: "/bitcoin-association-switzerland/2018/12/14/on-the-federal-council-report",
      },
    ],
  },
  {
    month: "September 2018",
    href: "/bitcoin-association-switzerland?month=09-2018",
    posts: [
      {
        title: "Is the Ethereum system a legal subject?",
        date: "Sep 26, 2018",
        href: "/bitcoin-association-switzerland/2018/9/24/is-the-ethereum-system-a-legal-subject",
      },
    ],
  },
  {
    month: "June 2018",
    href: "/bitcoin-association-switzerland?month=06-2018",
    posts: [
      {
        title: "Why storing Bitcoins for clients does not make you a bank",
        date: "Jun 1, 2018",
        href: "/bitcoin-association-switzerland/2018/5/31/why-storing-bitcoins-for-clients-does-not-make-you-a-bank",
      },
    ],
  },
  {
    month: "May 2018",
    href: "/bitcoin-association-switzerland?month=05-2018",
    posts: [
      {
        title: "Bitcoin Association Switzerland 2018: General Assembly",
        date: "May 17, 2018",
        href: "/bitcoin-association-switzerland/2018/5/17/bitcoin-association-switzerland-2018-general-assembly",
      },
    ],
  },
  {
    month: "April 2018",
    href: "/bitcoin-association-switzerland?month=04-2018",
    posts: [
      {
        title: "Better legal protection for clients of Bitcoin firms coming?",
        date: "Apr 19, 2018",
        href: "/bitcoin-association-switzerland/2018/4/19/better-legal-protection-for-clients-of-bitcoin-firms-coming",
      },
    ],
  },
  {
    month: "March 2018",
    href: "/bitcoin-association-switzerland?month=03-2018",
    posts: [
      {
        title: "The Latest Regulatory Threat",
        date: "Mar 3, 2018",
        href: "/bitcoin-association-switzerland/2018/3/2/the-latest-regulatory-threat",
      },
    ],
  },
  {
    month: "October 2017",
    href: "/bitcoin-association-switzerland?month=10-2017",
    posts: [
      {
        title: "Bitcoin Gold - Do we need it and if yes, how many?",
        date: "Oct 31, 2017",
        href: "/bitcoin-association-switzerland/2017/10/30/bitcoin-gold-do-we-need-it-and-if-yes-how-many-s7kaj",
      },
    ],
  },
];

export default function ArchivePage() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-light border-b border-gray-200">
          <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <span className="text-gray-400">News</span>
              <span className="text-gray-400">/</span>
              <Link href="/bitcoin-association-switzerland" className="hover:text-primary transition-colors">
                News
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-primary">Archive</span>
            </nav>
          </div>
        </div>

        {/* Archive List */}
        <section className="py-12 md:py-16">
          <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-12">
              Archive
            </h1>

            <div className="space-y-8">
              {archiveItems.map((item) => (
                <div key={item.month} className="border-b border-gray-100 pb-8">
                  <Link
                    href={item.href}
                    className="text-xl font-semibold text-primary hover:underline mb-4 inline-block"
                  >
                    {item.month}
                  </Link>
                  <div className="mt-4 space-y-4">
                    {item.posts.map((post) => (
                      <div
                        key={post.href}
                        className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2"
                      >
                        <Link
                          href={post.href}
                          className="text-dark hover:text-primary transition-colors font-medium"
                        >
                          {post.title}
                        </Link>
                        <span className="text-sm text-gray-500 whitespace-nowrap">
                          {post.date}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}