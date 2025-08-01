import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

interface PressArticle {
  id: string;
  category: string;
  title: string;
  date: string;
  image: string;
  link: string;
}

const PressPage = () => {
  const pressArticles: PressArticle[] = [
    {
      id: "1",
      category: "Press Release",
      title: "Combining AI, fintech to solve African problems - Ericsson",
      date: "December 18, 2021",
      image: "/images/press/ericsson.jpg",
      link: "#",
    },
    {
      id: "2",
      category: "News",
      title: "Ghana to Host the 14th Africa Fintech Summit on October 8th",
      date: "May 24, 2022",
      image: "/images/press/africa-fintech-summit.jpg",
      link: "#",
    },
    {
      id: "3",
      category: "Techstars",
      title: "Midterm Report: Techstars Toronto's Second 2021 Class",
      date: "Dec 06, 2021",
      image: "/images/press/techstars-toronto.jpg",
      link: "#",
    },
    {
      id: "4",
      category: "News",
      title:
        "Wise granted approval to join Zengin, Japan's domestic payment system",
      date: "December 06, 2021",
      image: "/images/press/wise.jpg",
      link: "#",
    },
    {
      id: "5",
      category: "Techstars",
      title:
        "African startups to participate at Techstars Toronto October 2021 cohort",
      date: "October 23, 2021",
      image: "/images/press/techstars-africa.jpg",
      link: "#",
    },
    {
      id: "6",
      category: "TechCrunch",
      title: "More African startups get into Techstars Toronto",
      date: "October 18, 2021",
      image: "/images/press/techcrunch.jpg",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest news and media from the Bomba Clan
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Please write to us at{" "}
              <a
                href="mailto:media@bomba.co"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                media@bomba.co
              </a>{" "}
              if you have a media enquiry. We'll do our best to get back to you
              as soon as possible.
            </p>
            <a
              href="/press-kit"
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              Get press kit
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Press Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Article Image */}
                <div className="relative h-48 bg-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <div className="text-sm font-medium mb-2">
                        {article.category}
                      </div>
                      <div className="text-lg font-semibold">
                        {article.title}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {article.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Date */}
                  <p className="text-sm text-gray-500 mb-4">{article.date}</p>

                  {/* Read More Link */}
                  <a
                    href={article.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                  >
                    Read more
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Sign up for free
          </h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of users</p>
          <a
            href="/signup"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold text-lg"
          >
            Get started today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PressPage;
