// Enhanced Pricing Page with Value Stacking and Urgency
export const enhancedPricingPage = () => (
  <>
    {/* Urgent Announcement Bar */}
    <div class="bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 px-4 text-center font-bold animate-pulse">
      <i class="fas fa-fire mr-2"></i>
      LIMITED TIME: Only 23 Spots Left in January Cohort - Prices Increase in 4 Days!
      <i class="fas fa-fire ml-2"></i>
    </div>

    {/* Hero Section */}
    <section class="hero py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <div class="inline-block mb-6 px-6 py-3 bg-yellow-500 text-slate-900 font-bold rounded-full text-lg">
            <i class="fas fa-tag mr-2"></i>
            SPECIAL LAUNCH PRICING - 40% OFF
          </div>
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            Choose Your <span class="gradient-text">Trading Path</span>
          </h1>
          <p class="text-2xl text-gray-300 mb-4 max-w-4xl mx-auto">
            Start with any tier and upgrade anytime as you grow
          </p>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            All plans include 14-day money-back guarantee, lifetime access to content, and the ability to cancel anytime
          </p>
        </div>

        {/* Trust Indicators */}
        <div class="flex flex-wrap justify-center items-center gap-8 mb-12">
          <div class="flex items-center gap-2 text-gray-400">
            <i class="fas fa-shield-alt text-green-500 text-2xl"></i>
            <span>14-Day Guarantee</span>
          </div>
          <div class="flex items-center gap-2 text-gray-400">
            <i class="fas fa-lock text-blue-500 text-2xl"></i>
            <span>Secure Checkout</span>
          </div>
          <div class="flex items-center gap-2 text-gray-400">
            <i class="fas fa-users text-purple-500 text-2xl"></i>
            <span>500+ Students</span>
          </div>
          <div class="flex items-center gap-2 text-gray-400">
            <i class="fas fa-star text-yellow-500 text-2xl"></i>
            <span>4.9/5 Rating</span>
          </div>
        </div>
      </div>
    </section>

    {/* Pricing Tiers */}
    <section class="py-20 bg-slate-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-8">
          
          {/* FOUNDATION TIER */}
          <div class="card pricing-card border-slate-600 hover:border-slate-500 transition">
            <div class="text-center mb-6">
              <div class="text-sm font-bold text-gray-400 uppercase tracking-wide mb-3">Foundation</div>
              <div class="flex items-baseline justify-center mb-2">
                <span class="text-2xl text-gray-500 line-through mr-2">$160</span>
                <span class="text-5xl font-bold">$97</span>
              </div>
              <div class="text-gray-400 text-sm">/month</div>
              <div class="mt-2 text-xs text-green-400 font-bold">
                SAVE 40% • Launch Pricing
              </div>
              <div class="mt-2 text-xs text-gray-500">
                or $970/year (save 17%)
              </div>
            </div>

            <div class="mb-6 p-3 bg-slate-800 rounded">
              <div class="text-xs text-gray-400 text-center">PERFECT FOR:</div>
              <div class="text-sm font-bold text-center">Complete Beginners</div>
            </div>

            <div class="space-y-3 mb-8">
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Foundations Campus (8 weeks)</span>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">32 Video Lessons</span>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Market Structure Mastery</span>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Community Discord Access</span>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Weekly Group Q&A</span>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Trading Resources Pack</span>
              </div>
              <div class="flex items-start gap-2 opacity-40">
                <i class="fas fa-times text-gray-600 mt-1"></i>
                <span class="text-sm text-gray-600">Advanced Campuses</span>
              </div>
              <div class="flex items-start gap-2 opacity-40">
                <i class="fas fa-times text-gray-600 mt-1"></i>
                <span class="text-sm text-gray-600">Live Trading Room</span>
              </div>
              <div class="flex items-start gap-2 opacity-40">
                <i class="fas fa-times text-gray-600 mt-1"></i>
                <span class="text-sm text-gray-600">1-on-1 Coaching</span>
              </div>
            </div>

            <div class="border-t border-slate-700 pt-4 mb-4">
              <div class="text-xs text-gray-500 text-center mb-1">Total Value:</div>
              <div class="text-center">
                <span class="text-xl line-through text-gray-600">$497</span>
                <span class="text-2xl font-bold text-green-400 ml-2">/mo</span>
              </div>
            </div>

            <a href="/waitlist" class="btn btn-secondary w-full">
              Start Foundation
            </a>
          </div>

          {/* INTERMEDIATE TIER */}
          <div class="card pricing-card border-blue-500 relative">
            <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span class="badge badge-blue text-xs px-3 py-1">MOST POPULAR</span>
            </div>
            
            <div class="text-center mb-6">
              <div class="text-sm font-bold text-blue-400 uppercase tracking-wide mb-3">Intermediate</div>
              <div class="flex items-baseline justify-center mb-2">
                <span class="text-2xl text-gray-500 line-through mr-2">$330</span>
                <span class="text-5xl font-bold">$197</span>
              </div>
              <div class="text-gray-400 text-sm">/month</div>
              <div class="mt-2 text-xs text-green-400 font-bold">
                SAVE 40% • Launch Pricing
              </div>
              <div class="mt-2 text-xs text-gray-500">
                or $1,970/year (save 17%)
              </div>
            </div>

            <div class="mb-6 p-3 bg-blue-900/30 rounded border border-blue-500/30">
              <div class="text-xs text-gray-400 text-center">PERFECT FOR:</div>
              <div class="text-sm font-bold text-center text-blue-400">Serious Students</div>
            </div>

            <div class="space-y-3 mb-8">
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm font-bold">Everything in Foundation +</span>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Price Action Campus (10 weeks)</span>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Order Flow Analysis Training</span>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">72 Total Video Lessons</span>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Weekly Trade Review Sessions</span>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Custom Trading Tools Pack</span>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Advanced Indicators Set</span>
              </div>
              <div class="flex items-start gap-2 opacity-40">
                <i class="fas fa-times text-gray-600 mt-1"></i>
                <span class="text-sm text-gray-600">Live Trading Room</span>
              </div>
              <div class="flex items-start gap-2 opacity-40">
                <i class="fas fa-times text-gray-600 mt-1"></i>
                <span class="text-sm text-gray-600">1-on-1 Coaching</span>
              </div>
            </div>

            <div class="border-t border-slate-700 pt-4 mb-4">
              <div class="text-xs text-gray-500 text-center mb-1">Total Value:</div>
              <div class="text-center">
                <span class="text-xl line-through text-gray-600">$1,497</span>
                <span class="text-2xl font-bold text-green-400 ml-2">/mo</span>
              </div>
            </div>

            <a href="/waitlist" class="btn btn-primary w-full">
              Start Intermediate
            </a>
          </div>

          {/* PROFESSIONAL TIER */}
          <div class="card pricing-card border-purple-500 relative transform md:scale-105">
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span class="badge badge-gold text-sm px-4 py-2 shadow-lg">⭐ BEST VALUE</span>
            </div>
            
            <div class="text-center mb-6">
              <div class="text-sm font-bold text-purple-400 uppercase tracking-wide mb-3">Professional</div>
              <div class="flex items-baseline justify-center mb-2">
                <span class="text-2xl text-gray-500 line-through mr-2">$660</span>
                <span class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">$397</span>
              </div>
              <div class="text-gray-400 text-sm">/month</div>
              <div class="mt-2 text-xs text-green-400 font-bold">
                SAVE 40% • Launch Pricing
              </div>
              <div class="mt-2 text-xs text-gray-500">
                or $3,970/year (save 17%)
              </div>
            </div>

            <div class="mb-6 p-3 bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded border border-purple-500/50">
              <div class="text-xs text-gray-400 text-center">PERFECT FOR:</div>
              <div class="text-sm font-bold text-center text-purple-400">Full-Time Traders</div>
            </div>

            <div class="space-y-3 mb-8">
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm font-bold">Everything in Intermediate +</span>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm font-bold text-yellow-400">ALL 4 Campuses (32 weeks)</span>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">160+ Total Video Lessons</span>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm font-bold text-yellow-400">Live Trading Room Access</span>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">2 Advanced Masterclasses</span>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm font-bold text-yellow-400">Monthly 1-on-1 Coaching</span>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Professional Trade Journal</span>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Priority Support</span>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Private Discord Channel</span>
              </div>
            </div>

            <div class="border-t border-purple-500 pt-4 mb-4">
              <div class="text-xs text-gray-500 text-center mb-1">Total Value:</div>
              <div class="text-center">
                <span class="text-xl line-through text-gray-600">$4,997</span>
                <span class="text-2xl font-bold text-green-400 ml-2">/mo</span>
              </div>
              <div class="mt-2 text-center">
                <div class="text-yellow-400 font-bold text-lg">Save $600/month!</div>
              </div>
            </div>

            <a href="/waitlist" class="btn btn-gold w-full text-lg py-4 shadow-xl">
              <i class="fas fa-crown mr-2"></i>
              Start Professional
            </a>
          </div>

          {/* ELITE TIER */}
          <div class="card pricing-card border-yellow-500">
            <div class="text-center mb-6">
              <div class="text-sm font-bold text-yellow-400 uppercase tracking-wide mb-3">Elite</div>
              <div class="flex items-baseline justify-center mb-2">
                <span class="text-2xl text-gray-500 line-through mr-2">$1,660</span>
                <span class="text-5xl font-bold">$997</span>
              </div>
              <div class="text-gray-400 text-sm">/month</div>
              <div class="mt-2 text-xs text-green-400 font-bold">
                SAVE 40% • Launch Pricing
              </div>
              <div class="mt-2 text-xs text-gray-500">
                or $9,970/year (save 17%)
              </div>
            </div>

            <div class="mb-6 p-3 bg-yellow-900/30 rounded border border-yellow-500/50">
              <div class="text-xs text-gray-400 text-center">PERFECT FOR:</div>
              <div class="text-sm font-bold text-center text-yellow-400">Elite Performers</div>
            </div>

            <div class="space-y-3 mb-8">
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm font-bold">Everything in Professional +</span>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm font-bold text-yellow-400">Weekly 1-on-1 Coaching</span>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Custom Strategy Development</span>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Direct Mentor Access (24/7)</span>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Proprietary Trading Tools</span>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Private Elite Mastermind</span>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Portfolio Review & Optimization</span>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Exclusive Trading Strategies</span>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">VIP Event Access</span>
              </div>
            </div>

            <div class="border-t border-yellow-500 pt-4 mb-4">
              <div class="text-xs text-gray-500 text-center mb-1">Total Value:</div>
              <div class="text-center">
                <span class="text-xl line-through text-gray-600">$9,997</span>
                <span class="text-2xl font-bold text-green-400 ml-2">/mo</span>
              </div>
            </div>

            <a href="/waitlist" class="btn btn-gold w-full">
              <i class="fas fa-star mr-2"></i>
              Apply for Elite
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Bonus Value Stack */}
    <section class="py-20 bg-slate-900">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="card bg-gradient-to-r from-green-900/30 to-blue-900/30 border-2 border-green-500">
          <div class="text-center mb-8">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">
              <i class="fas fa-gift mr-3 text-yellow-400"></i>
              LIMITED TIME BONUSES
            </h2>
            <p class="text-xl text-gray-400">
              Enroll in Professional or Elite tier today and get these FREE bonuses
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="card bg-slate-800 border-green-500/30">
              <div class="flex items-start gap-4">
                <div class="text-4xl">🎓</div>
                <div>
                  <h4 class="text-xl font-bold mb-2 text-green-400">Multi-Asset Masterclass</h4>
                  <p class="text-gray-400 mb-2">
                    Apply institutional strategies across ES, NQ, CL, GC, and more
                  </p>
                  <div class="text-yellow-400 font-bold">Value: $1,497</div>
                </div>
              </div>
            </div>

            <div class="card bg-slate-800 border-blue-500/30">
              <div class="flex items-start gap-4">
                <div class="text-4xl">🤖</div>
                <div>
                  <h4 class="text-xl font-bold mb-2 text-blue-400">Algorithmic Trading Course</h4>
                  <p class="text-gray-400 mb-2">
                    Automate your edge and deploy algorithms for consistent execution
                  </p>
                  <div class="text-yellow-400 font-bold">Value: $1,997</div>
                </div>
              </div>
            </div>

            <div class="card bg-slate-800 border-purple-500/30">
              <div class="flex items-start gap-4">
                <div class="text-4xl">📊</div>
                <div>
                  <h4 class="text-xl font-bold mb-2 text-purple-400">Professional Trade Journal</h4>
                  <p class="text-gray-400 mb-2">
                    Custom software for tracking and analyzing your performance
                  </p>
                  <div class="text-yellow-400 font-bold">Value: $497</div>
                </div>
              </div>
            </div>

            <div class="card bg-slate-800 border-yellow-500/30">
              <div class="flex items-start gap-4">
                <div class="text-4xl">💬</div>
                <div>
                  <h4 class="text-xl font-bold mb-2 text-yellow-400">Private Discord Access</h4>
                  <p class="text-gray-400 mb-2">
                    Direct access to instructors and elite trading community
                  </p>
                  <div class="text-yellow-400 font-bold">Value: Priceless</div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-6 bg-slate-800 rounded-lg border-2 border-yellow-500">
            <div class="text-center">
              <div class="text-4xl font-bold text-yellow-400 mb-2">
                Total Bonus Value: $3,991
              </div>
              <p class="text-xl text-gray-300">
                Yours <span class="font-bold text-green-400">FREE</span> when you join Professional or Elite today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Comparison Table */}
    <section class="py-20 bg-slate-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4">
            Side-by-Side <span class="gradient-text">Comparison</span>
          </h2>
          <p class="text-xl text-gray-400">See exactly what's included in each tier</p>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="border-b border-slate-700">
                <th class="p-4 text-gray-400">Features</th>
                <th class="p-4 text-center text-gray-400">Foundation</th>
                <th class="p-4 text-center text-blue-400 font-bold">Intermediate</th>
                <th class="p-4 text-center text-purple-400 font-bold">Professional</th>
                <th class="p-4 text-center text-yellow-400 font-bold">Elite</th>
              </tr>
            </thead>
            <tbody class="text-gray-300">
              <tr class="border-b border-slate-800">
                <td class="p-4">Foundations Campus</td>
                <td class="p-4 text-center"><i class="fas fa-check text-green-400"></i></td>
                <td class="p-4 text-center"><i class="fas fa-check text-green-400"></i></td>
                <td class="p-4 text-center"><i class="fas fa-check text-green-400"></i></td>
                <td class="p-4 text-center"><i class="fas fa-check text-green-400"></i></td>
              </tr>
              <tr class="border-b border-slate-800">
                <td class="p-4">Price Action Campus</td>
                <td class="p-4 text-center"><i class="fas fa-times text-gray-600"></i></td>
                <td class="p-4 text-center"><i class="fas fa-check text-green-400"></i></td>
                <td class="p-4 text-center"><i class="fas fa-check text-green-400"></i></td>
                <td class="p-4 text-center"><i class="fas fa-check text-green-400"></i></td>
              </tr>
              <tr class="border-b border-slate-800">
                <td class="p-4">Risk Management Campus</td>
                <td class="p-4 text-center"><i class="fas fa-times text-gray-600"></i></td>
                <td class="p-4 text-center"><i class="fas fa-times text-gray-600"></i></td>
                <td class="p-4 text-center"><i class="fas fa-check text-green-400"></i></td>
                <td class="p-4 text-center"><i class="fas fa-check text-green-400"></i></td>
              </tr>
              <tr class="border-b border-slate-800">
                <td class="p-4">Professional Execution Campus</td>
                <td class="p-4 text-center"><i class="fas fa-times text-gray-600"></i></td>
                <td class="p-4 text-center"><i class="fas fa-times text-gray-600"></i></td>
                <td class="p-4 text-center"><i class="fas fa-check text-green-400"></i></td>
                <td class="p-4 text-center"><i class="fas fa-check text-green-400"></i></td>
              </tr>
              <tr class="border-b border-slate-800">
                <td class="p-4">Live Trading Room</td>
                <td class="p-4 text-center"><i class="fas fa-times text-gray-600"></i></td>
                <td class="p-4 text-center"><i class="fas fa-times text-gray-600"></i></td>
                <td class="p-4 text-center"><i class="fas fa-check text-green-400"></i></td>
                <td class="p-4 text-center"><i class="fas fa-check text-green-400"></i></td>
              </tr>
              <tr class="border-b border-slate-800">
                <td class="p-4">1-on-1 Coaching</td>
                <td class="p-4 text-center"><i class="fas fa-times text-gray-600"></i></td>
                <td class="p-4 text-center"><i class="fas fa-times text-gray-600"></i></td>
                <td class="p-4 text-center text-sm">Monthly</td>
                <td class="p-4 text-center text-sm font-bold">Weekly</td>
              </tr>
              <tr class="border-b border-slate-800">
                <td class="p-4">Advanced Masterclasses</td>
                <td class="p-4 text-center"><i class="fas fa-times text-gray-600"></i></td>
                <td class="p-4 text-center"><i class="fas fa-times text-gray-600"></i></td>
                <td class="p-4 text-center"><i class="fas fa-check text-green-400"></i></td>
                <td class="p-4 text-center"><i class="fas fa-check text-green-400"></i></td>
              </tr>
              <tr class="border-b border-slate-800">
                <td class="p-4 font-bold">Total Video Lessons</td>
                <td class="p-4 text-center">32</td>
                <td class="p-4 text-center">72</td>
                <td class="p-4 text-center font-bold text-purple-400">160+</td>
                <td class="p-4 text-center font-bold text-yellow-400">160+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section class="py-20 bg-slate-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4">Pricing <span class="gradient-text">Questions?</span></h2>
        </div>

        <div class="space-y-6">
          <div class="card border-slate-700">
            <h3 class="text-xl font-bold mb-3 text-yellow-400">
              <i class="fas fa-question-circle mr-2"></i>
              Can I upgrade to a higher tier later?
            </h3>
            <p class="text-gray-300">
              <strong>Absolutely!</strong> Start with any tier and upgrade anytime. When you upgrade, you'll only pay the difference 
              (prorated for the current month). Your progress and content access carries over seamlessly.
            </p>
          </div>

          <div class="card border-slate-700">
            <h3 class="text-xl font-bold mb-3 text-yellow-400">
              <i class="fas fa-question-circle mr-2"></i>
              What's included in the 14-day guarantee?
            </h3>
            <p class="text-gray-300">
              If you're not satisfied for ANY reason within 14 days, email us for a full refund. No questions asked. 
              You even keep all downloaded bonuses and materials.
            </p>
          </div>

          <div class="card border-slate-700">
            <h3 class="text-xl font-bold mb-3 text-yellow-400">
              <i class="fas fa-question-circle mr-2"></i>
              What payment methods do you accept?
            </h3>
            <p class="text-gray-300">
              We accept all major credit cards (Visa, Mastercard, Amex, Discover) via secure Stripe checkout. 
              Choose monthly or annual billing (save 17% with annual).
            </p>
          </div>

          <div class="card border-slate-700">
            <h3 class="text-xl font-bold mb-3 text-yellow-400">
              <i class="fas fa-question-circle mr-2"></i>
              When does the launch pricing end?
            </h3>
            <p class="text-gray-300">
              <strong class="text-red-400">Launch pricing ends in 4 days or when we hit 500 students—whichever comes first.</strong> After that, 
              prices increase to regular rates ($160, $330, $660, $1,660/mo respectively). Lock in 40% savings today!
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section class="py-20 bg-slate-950">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="card bg-gradient-to-r from-purple-900/40 to-pink-900/40 border-2 border-yellow-500">
          <div class="text-center">
            <div class="inline-block px-6 py-3 bg-red-600 text-white font-bold rounded-full mb-6 animate-pulse">
              <i class="fas fa-fire mr-2"></i>
              ONLY 23 SPOTS LEFT • PRICES INCREASE IN 4 DAYS
            </div>

            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Trading Like <span class="gradient-text">Wall Street</span>?
            </h2>

            <p class="text-2xl text-gray-300 mb-8">
              Choose your tier and start learning in 5 minutes
            </p>

            <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a href="/waitlist" class="btn btn-gold text-2xl px-16 py-6">
                <i class="fas fa-rocket mr-3"></i>
                CLAIM YOUR SPOT NOW
              </a>
            </div>

            <div class="space-y-2">
              <p class="text-gray-400">
                <i class="fas fa-shield-alt text-green-400 mr-2"></i>
                14-day money-back guarantee • Secure checkout • Cancel anytime
              </p>
              <p class="text-sm text-gray-500">
                Join 523 traders who enrolled this month • Average rating: 4.9/5
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)
