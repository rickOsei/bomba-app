"use client";

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      date: "June 20, 2022",
      title: "Bomba now has a dollar wallet, activate your account",
      link: "#",
    },
    {
      id: 2,
      date: "June 01, 2022",
      title: "Top 10 Summer Vacation Places In 2022",
      link: "#",
    },
  ];

  return (
    <section className="py-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* News Label */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-sm font-medium text-gray-500">
              News & Release update
            </h3>
          </div>

          {/* News Items */}
          <div className="flex flex-col space-y-2">
            {newsItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                {item.date} — {item.title}
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="hidden md:flex items-center text-gray-500 mt-4 md:mt-0">
            <span className="text-sm mr-2">Scroll Down</span>
            <svg
              className="w-4 h-4 animate-bounce"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
