
const plans = [
  {
    title: "Free Plan",
    price: "$0",
    desc: "Get started with awesome features of Modulify at no cost.",
    features: [
      { text: "1 Project", active: true },
      { text: "2 Pages per project", active: true },
      { text: "25 Components per page", active: true },
      { text: "Apply all design systems", active: true },
      { text: "Export Wireframe to Webflow", active: false },
      { text: "Export Design to Webflow", active: false },
      { text: "Custom Design System", active: false },
      { text: "Dedicated Support", active: false },
    ],
  },
  {
    title: "Starter Plan",
    price: "$19",
    period: "/month paid yearly",
    desc: "Build projects that convert and help your growth.",
    features: [
      { text: "2 Projects", active: true },
      { text: "20 Pages per project", active: true },
      { text: "40 Components per page", active: true },
      { text: "Light & Dark Wireframes", active: true },
      { text: "Apply all design systems", active: true },
      { text: "Export Wireframe to Webflow", active: true },
      { text: "Export Design to Webflow", active: true },
      { text: "Custom Design System", active: false },
      { text: "Dedicated Support", active: false },
    ],
  },
  {
    title: "Pro Plan",
    price: "$38",
    period: "/month paid yearly",
    desc: "Experience the full power of Modulify.",
    best: true,
    features: [
      { text: "Unlimited Projects", active: true },
      { text: "Unlimited Pages per project", active: true },
      { text: "Unlimited Components per page", active: true },
      { text: "Light & Dark Wireframes", active: true },
      { text: "Apply all design systems", active: true },
      { text: "Export Wireframe to Webflow", active: true },
      { text: "Export Design to Webflow", active: true },
      { text: "Custom Design System", active: true },
      { text: "Dedicated Support", active: true },
    ],
  },
]

function Pricing() {
  return (
    <section className="w-full py-20 bg-black text-white font-['a']">
      <div className="text-center mb-12 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">Build a website with AI</h1>
        <p className="text-lg md:text-xl">Free for 7 days</p>
        <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
          Choose the best plan for your business. Change plans as you grow.
        </p>
      </div>

      <div className="flex justify-center mb-10 gap-3 flex-wrap">
        <button className="px-5 py-2 border border-white rounded-full text-sm bg-black text-white hover:bg-white hover:text-black transition-all">
          Monthly
        </button>
        <button className="px-5 py-2 border border-white bg-white text-black rounded-full text-sm hover:bg-transparent hover:text-white transition-all">
          Yearly (save 20%)
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto px-4">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`w-full sm:w-[320px] md:w-[340px] rounded-2xl p-[2px] transition-all ${
              plan.best
                ? "bg-gradient-to-r from-white to-gray-700 scale-[1.02]"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            <div className="bg-black rounded-2xl p-8 h-full flex flex-col justify-between">
              <div>
                {plan.best && (
                  <p className="text-xs text-white/80 font-semibold mb-2">Best Value</p>
                )}
                <h2 className="text-2xl font-semibold mb-2">{plan.title}</h2>
                <div className="flex items-end gap-1 mb-4">
                  <h3 className="text-4xl font-bold">{plan.price}</h3>
                  {plan.period && <span className="text-sm text-gray-400">{plan.period}</span>}
                </div>
                <p className="text-gray-400 text-sm mb-6">{plan.desc}</p>

                <ul className="space-y-2">
                  {plan.features.map((f, index) => (
                    <li
                      key={index}
                      className={`text-sm flex items-center gap-2 ${
                        f.active ? "text-white" : "text-gray-500 line-through"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          f.active ? "bg-white" : "bg-gray-600"
                        }`}
                      />
                      {f.text}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`mt-8 w-full py-3 rounded-full font-medium border transition-all ${
                  plan.best
                    ? "bg-white text-black border-white hover:bg-transparent hover:text-white"
                    : "bg-black text-white border-white hover:bg-white hover:text-black"
                }`}
              >
                Try it now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing
