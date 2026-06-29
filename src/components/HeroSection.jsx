const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 lg:py-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>

            <span className="inline-flex items-center rounded-full border border-gray-300 bg-gray-50 px-4 py-1 text-sm font-medium text-gray-600">
              💰 Smart Personal Finance
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
              Take Control
              <br />
              of Your Money.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600 md:text-xl">
              Track your income, manage expenses, and gain clear insights into
              your finances—all in one simple, secure, and completely free
              platform.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <button className="rounded-xl bg-gray-900 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-black">
                Get Started Free
              </button>

            </div>

            <p className="mt-6 text-sm text-gray-500">
              No credit card required • Free Forever • Secure & Private
            </p>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center">

            <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl">

              {/* Header */}
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-gray-500">
                    Total Balance
                  </p>

                  <h2 className="mt-1 text-3xl font-bold">
                    ₹22,550
                  </h2>
                </div>

                <div className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                  +12%
                </div>

              </div>

              {/* Cards */}

              <div className="mt-8 space-y-4">

                <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">

                  <div>
                    <p className="font-medium">Income</p>
                    <p className="text-sm text-gray-500">
                      This Month
                    </p>
                  </div>

                  <p className="font-semibold text-green-600">
                    + ₹35,000
                  </p>

                </div>

                <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">

                  <div>
                    <p className="font-medium">Expenses</p>
                    <p className="text-sm text-gray-500">
                      This Month
                    </p>
                  </div>

                  <p className="font-semibold text-red-500">
                    - ₹12,450
                  </p>

                </div>

              </div>

              {/* Fake Chart */}

              <div className="mt-8">

                <p className="mb-4 font-semibold">
                  Monthly Overview
                </p>

                <div className="flex h-36 items-end justify-between gap-3">

                  <div className="w-full rounded-t bg-gray-300 h-14"></div>
                  <div className="w-full rounded-t bg-gray-900 h-24"></div>
                  <div className="w-full rounded-t bg-gray-400 h-20"></div>
                  <div className="w-full rounded-t bg-gray-900 h-32"></div>
                  <div className="w-full rounded-t bg-gray-500 h-24"></div>
                  <div className="w-full rounded-t bg-gray-900 h-28"></div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;