import {
  FiDollarSign,
  FiPieChart,
  FiShield,
} from "react-icons/fi";

const features = [
  {
    icon: <FiDollarSign size={32} />,
    title: "Track Income",
    description:
      "Record every source of income and stay updated with your earnings in one organized place.",
  },
  {
    icon: <FiPieChart size={32} />,
    title: "Manage Expenses",
    description:
      "Categorize your spending, monitor your budget, and understand where your money goes.",
  },
  {
    icon: <FiShield size={32} />,
    title: "Secure & Reliable",
    description:
      "Your financial information is protected with secure authentication and safe data storage.",
  },
];

const Features = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-gray-300 bg-white px-4 py-1 text-sm font-medium text-gray-600">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Everything you need to manage your money
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Keep your finances organized with powerful yet simple tools
            designed to help you save more and spend smarter.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 text-gray-900 transition group-hover:bg-gray-900 group-hover:text-white">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-7 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;