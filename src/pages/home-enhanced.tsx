// Enhanced Home Page with High-Converting Content
export const enhancedHomePage = () => (
  <>
    {/* URGENT ANNOUNCEMENT BAR */}
    <div class="bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 px-4 text-center font-bold animate-pulse">
      <i class="fas fa-fire mr-2"></i>
      LIMITED TIME: Only 23 Spots Left in January Cohort - 8 Complete Campuses - Enrollment Closes in 4 Days!
      <i class="fas fa-fire ml-2"></i>
    </div>

    {/* HERO SECTION - ATTENTION GRABBING */}
    <section class="hero py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-10 text-6xl">📈</div>
        <div class="absolute top-40 right-20 text-6xl">💰</div>
        <div class="absolute bottom-20 left-1/4 text-6xl">🎯</div>
        <div class="absolute bottom-40 right-1/3 text-6xl">🚀</div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center">
          {/* Social Proof Badge */}
          <div class="mb-6 flex justify-center items-center gap-4 flex-wrap">
            <span class="badge badge-gold text-sm pulse">
              <i class="fas fa-star mr-1"></i>
              4.9/5 Rating (247 Reviews)
            </span>
            <span class="badge badge-green text-sm">
              <i class="fas fa-users mr-1"></i>
              523 Students This Month
            </span>
          </div>

          {/* Headline - Problem + Solution */}
          <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Become The <span class="gradient-text">Complete Speculator</span><br />
            Master Trading, Wealth, Health & <span class="text-yellow-400">Lifestyle</span>
          </h1>

          {/* Sub-headline - Big Promise */}
          <p class="text-2xl md:text-3xl text-yellow-400 font-bold mb-4">
            The Only University Training Complete Speculators: Trading Mastery + Financial Health + Peak Fitness + Wealth Creation
          </p>

          <p class="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            8 comprehensive campuses covering institutional trading strategies, lifestyle design, 
            financial optimization, fitness protocols, and multi-stream wealth creation. 
            Build the life of freedom, health, and abundance you deserve. 
            <span class="text-yellow-400 font-bold">GUARANTEED.</span>
          </p>

          {/* Urgency CTAs */}
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="/waitlist" class="btn btn-gold text-xl px-8 py-4 shadow-2xl hover:scale-105 transition-transform">
              <i class="fas fa-bolt mr-2"></i>
              BEGIN YOUR TRANSFORMATION - $197/mo
              <i class="fas fa-arrow-right ml-2"></i>
            </a>
            <a href="#proof" class="btn btn-secondary text-lg">
              <i class="fas fa-play-circle mr-2"></i>
              See Member Transformations
            </a>
          </div>

          {/* Risk Reversal */}
          <div class="text-center text-gray-400 text-sm">
            <i class="fas fa-shield-alt text-green-500 mr-2"></i>
            14-Day Money-Back Guarantee • Cancel Anytime • Join 500+ Guild Members
          </div>
        </div>

        {/* Live Activity Feed - Social Proof */}
        <div class="mt-16 max-w-3xl mx-auto">
          <div class="card bg-slate-800 border border-yellow-500/30">
            <h3 class="text-center font-bold mb-4 text-yellow-400">
              <i class="fas fa-bolt mr-2"></i>
              LIVE: Recent Member Activity
            </h3>
            <div class="space-y-3 text-sm">
              <div class="flex items-center justify-between border-b border-slate-700 pb-3">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                    JM
                  </div>
                  <div>
                    <div class="font-semibold">James M.</div>
                    <div class="text-gray-400 text-xs">New York, USA</div>
                  </div>
                </div>
                <div class="text-right">
                  <div class="text-green-400 font-bold">+$4,230</div>
                  <div class="text-gray-400 text-xs">3 mins ago</div>
                </div>
              </div>
              <div class="flex items-center justify-between border-b border-slate-700 pb-3">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-white font-bold">
                    SK
                  </div>
                  <div>
                    <div class="font-semibold">Sarah K.</div>
                    <div class="text-gray-400 text-xs">London, UK</div>
                  </div>
                </div>
                <div class="text-right">
                  <div class="text-blue-400 font-bold">Just Enrolled!</div>
                  <div class="text-gray-400 text-xs">7 mins ago</div>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-white font-bold">
                    DL
                  </div>
                  <div>
                    <div class="font-semibold">David L.</div>
                    <div class="text-gray-400 text-xs">Singapore</div>
                  </div>
                </div>
                <div class="text-right">
                  <div class="text-green-400 font-bold">+$7,850</div>
                  <div class="text-gray-400 text-xs">12 mins ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar - Enhanced */}
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div class="stat-card border-2 border-yellow-500/30">
            <div class="stat-number text-yellow-400">$2.4M+</div>
            <div class="text-gray-400">Student Profits Generated</div>
          </div>
          <div class="stat-card border-2 border-green-500/30">
            <div class="stat-number text-green-400">523</div>
            <div class="text-gray-400">Active This Month</div>
          </div>
          <div class="stat-card border-2 border-blue-500/30">
            <div class="stat-number text-blue-400">87%</div>
            <div class="text-gray-400">Become Profitable</div>
          </div>
          <div class="stat-card border-2 border-purple-500/30">
            <div class="stat-number text-purple-400">4.9/5</div>
            <div class="text-gray-400">Student Rating</div>
          </div>
        </div>
      </div>
    </section>

    {/* PROBLEM AGITATION SECTION */}
    <section class="py-20 bg-slate-950">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Are You <span class="text-red-500">Tired</span> Of This?
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="card bg-red-900/20 border-red-500/30">
            <div class="flex items-start gap-4">
              <div class="text-4xl">❌</div>
              <div>
                <h3 class="text-xl font-bold mb-2 text-red-400">Losing Money Repeatedly</h3>
                <p class="text-gray-400">
                  Watching your account shrink while "gurus" promise easy wins with their magic indicators that never work...
                </p>
              </div>
            </div>
          </div>

          <div class="card bg-red-900/20 border-red-500/30">
            <div class="flex items-start gap-4">
              <div class="text-4xl">😤</div>
              <div>
                <h3 class="text-xl font-bold mb-2 text-red-400">Getting Stopped Out</h3>
                <p class="text-gray-400">
                  Entering "perfect" setups only to get stopped out by market makers who seem to hunt YOUR stops specifically...
                </p>
              </div>
            </div>
          </div>

          <div class="card bg-red-900/20 border-red-500/30">
            <div class="flex items-start gap-4">
              <div class="text-4xl">🤯</div>
              <div>
                <h3 class="text-xl font-bold mb-2 text-red-400">Information Overload</h3>
                <p class="text-gray-400">
                  Drowning in contradicting YouTube videos, Discord signals, and trading courses that leave you more confused than before...
                </p>
              </div>
            </div>
          </div>

          <div class="card bg-red-900/20 border-red-500/30">
            <div class="flex items-start gap-4">
              <div class="text-4xl">😰</div>
              <div>
                <h3 class="text-xl font-bold mb-2 text-red-400">Fear & Revenge Trading</h3>
                <p class="text-gray-400">
                  Missing entries because you're scared, then revenge trading to "get it back" and losing even more...
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border-yellow-500/50 mt-12">
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-4 text-yellow-400">
              <i class="fas fa-exclamation-triangle mr-2"></i>
              Here's The Brutal Truth...
            </h3>
            <p class="text-xl text-gray-300 mb-4">
              95% of retail traders LOSE money because they're trading AGAINST market makers instead of WITH them.
            </p>
            <p class="text-lg text-gray-400">
              The indicators you're using? Market makers see them. The "support and resistance" everyone marks? 
              They're hunting those levels. Your stop losses? They know EXACTLY where they are.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* SOLUTION SECTION */}
    <section class="py-20 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            What If You Could <span class="gradient-text">Trade Like Institutions</span> Instead?
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            Imagine seeing the market through the same lens as Wall Street traders, 
            anticipating moves before they happen, and having the confidence to execute with precision...
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="card text-center border-2 border-green-500/30 hover:border-green-500 transition">
            <div class="feature-icon mx-auto bg-green-500/20">
              <i class="fas fa-eye text-green-400"></i>
            </div>
            <h3 class="text-2xl font-bold mb-3">See What They See</h3>
            <p class="text-gray-400">
              Learn to identify <strong class="text-green-400">liquidity pools</strong>, 
              <strong class="text-green-400">order blocks</strong>, and 
              <strong class="text-green-400">fair value gaps</strong> that institutions exploit for millions.
            </p>
            <div class="mt-4 text-yellow-400 font-bold">
              ✓ Auction Market Theory<br/>
              ✓ Volume Profile Mastery<br/>
              ✓ Smart Money Concepts
            </div>
          </div>

          <div class="card text-center border-2 border-blue-500/30 hover:border-blue-500 transition">
            <div class="feature-icon mx-auto bg-blue-500/20">
              <i class="fas fa-brain text-blue-400"></i>
            </div>
            <h3 class="text-2xl font-bold mb-3">Think Like They Think</h3>
            <p class="text-gray-400">
              Understand <strong class="text-blue-400">market maker psychology</strong>, 
              why they hunt stops, and how to position yourself on the <strong class="text-blue-400">right side</strong> 
              of every major move.
            </p>
            <div class="mt-4 text-yellow-400 font-bold">
              ✓ Order Flow Analysis<br/>
              ✓ Liquidity Sweeps<br/>
              ✓ Institutional Positioning
            </div>
          </div>

          <div class="card text-center border-2 border-purple-500/30 hover:border-purple-500 transition">
            <div class="feature-icon mx-auto bg-purple-500/20">
              <i class="fas fa-money-bill-wave text-purple-400"></i>
            </div>
            <h3 class="text-2xl font-bold mb-3">Trade Like They Trade</h3>
            <p class="text-gray-400">
              Execute with <strong class="text-purple-400">professional precision</strong>, 
              manage risk like a hedge fund, and compound gains consistently—no more gambling.
            </p>
            <div class="mt-4 text-yellow-400 font-bold">
              ✓ Professional Execution<br/>
              ✓ Risk Management Systems<br/>
              ✓ Trade Psychology Mastery
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <a href="/waitlist" class="btn btn-gold text-xl px-12 py-5 shadow-2xl">
            <i class="fas fa-rocket mr-2"></i>
            YES! I Want To Trade Like Wall Street
            <i class="fas fa-arrow-right ml-2"></i>
          </a>
          <p class="text-gray-400 mt-4 text-sm">
            Join 523 traders who enrolled this month • 14-day money-back guarantee
          </p>
        </div>
      </div>
    </section>

    {/* TESTIMONIALS & PROOF SECTION */}
    <section id="proof" class="py-20 bg-slate-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            Real Students. <span class="gradient-text">Real Results.</span>
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't take our word for it—see what traders just like you are achieving after learning our institutional strategies
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-12">
          {/* Testimonial 1 */}
          <div class="card bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-green-500/30">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white text-2xl font-bold">
                MJ
              </div>
              <div>
                <div class="font-bold text-lg">Michael Johnson</div>
                <div class="text-yellow-400 text-sm">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
            </div>
            <p class="text-gray-300 mb-4 italic">
              "I went from losing $2k/month to making $15k+ consistently. The order flow training was a complete game-changer. 
              I finally understand what market makers are doing and how to position myself correctly."
            </p>
            <div class="flex items-center justify-between text-sm border-t border-slate-700 pt-4">
              <span class="text-green-400 font-bold text-xl">+$47,230</span>
              <span class="text-gray-500">3 months</span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div class="card bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-blue-500/30">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold">
                SC
              </div>
              <div>
                <div class="font-bold text-lg">Sarah Chen</div>
                <div class="text-yellow-400 text-sm">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
            </div>
            <p class="text-gray-300 mb-4 italic">
              "As a former engineer, I needed logical, rules-based trading. This program delivered exactly that. 
              No more guessing—just following institutional footprints. My win rate went from 40% to 78%."
            </p>
            <div class="flex items-center justify-between text-sm border-t border-slate-700 pt-4">
              <span class="text-green-400 font-bold text-xl">+$32,840</span>
              <span class="text-gray-500">2 months</span>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div class="card bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-purple-500/30">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">
                RP
              </div>
              <div>
                <div class="font-bold text-lg">Robert Palmer</div>
                <div class="text-yellow-400 text-sm">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
            </div>
            <p class="text-gray-300 mb-4 italic">
              "After 5 years of struggling and losing money, I finally 'get it'. The market structure lessons alone 
              were worth 10x the price. I'm now trading full-time and supporting my family."
            </p>
            <div class="flex items-center justify-between text-sm border-t border-slate-700 pt-4">
              <span class="text-green-400 font-bold text-xl">+$68,500</span>
              <span class="text-gray-500">6 months</span>
            </div>
          </div>
        </div>

        {/* Video Testimonial Placeholder */}
        <div class="max-w-4xl mx-auto">
          <div class="card bg-slate-900 border-2 border-yellow-500/50">
            <div class="text-center mb-6">
              <h3 class="text-2xl font-bold mb-2">Watch: From Losing Trader to Full-Time Professional</h3>
              <p class="text-gray-400">See how Marcus transformed his trading in 90 days</p>
            </div>
            <div class="aspect-video bg-slate-800 rounded-lg flex items-center justify-center border-2 border-slate-700">
              <div class="text-center">
                <div class="text-6xl mb-4">
                  <i class="fas fa-play-circle text-yellow-400"></i>
                </div>
                <div class="text-xl font-bold text-gray-400">Video Testimonial</div>
                <div class="text-sm text-gray-500">(Coming Soon: Real student video testimonials)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div class="mt-16">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-gray-400 mb-6">Trusted By Traders Worldwide</h3>
          </div>
          <div class="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div class="text-center">
              <i class="fas fa-shield-alt text-4xl text-green-500 mb-2"></i>
              <div class="text-sm font-bold">SSL Secured</div>
            </div>
            <div class="text-center">
              <i class="fas fa-lock text-4xl text-blue-500 mb-2"></i>
              <div class="text-sm font-bold">PCI Compliant</div>
            </div>
            <div class="text-center">
              <i class="fas fa-award text-4xl text-yellow-500 mb-2"></i>
              <div class="text-sm font-bold">5-Star Rated</div>
            </div>
            <div class="text-center">
              <i class="fas fa-users text-4xl text-purple-500 mb-2"></i>
              <div class="text-sm font-bold">500+ Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CURRICULUM DEEP-DIVE */}
    <section class="py-20 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            The Complete <span class="gradient-text">Institutional Trading System</span>
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            4 comprehensive training campuses + 2 advanced masterclasses covering everything from foundations to professional execution
          </p>
        </div>

        {/* Campus 1 */}
        <div class="card mb-8 border-2 border-blue-500/30 hover:border-blue-500 transition">
          <div class="flex items-start gap-6">
            <div class="hidden md:block">
              <div class="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-3xl font-bold">
                01
              </div>
            </div>
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-3">
                <h3 class="text-2xl md:text-3xl font-bold">Foundations Campus</h3>
                <span class="badge badge-blue">8 Weeks</span>
              </div>
              <p class="text-lg text-gray-400 mb-4">
                Build an unshakeable foundation in market structure, auction theory, and institutional concepts
              </p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-green-400 text-xl mt-1"></i>
                  <div>
                    <div class="font-bold text-yellow-400">Market Structure Mastery</div>
                    <div class="text-sm text-gray-400">Understand how markets ACTUALLY work, not retail myths</div>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-green-400 text-xl mt-1"></i>
                  <div>
                    <div class="font-bold text-yellow-400">Auction Market Theory</div>
                    <div class="text-sm text-gray-400">See price movement through institutional eyes</div>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-green-400 text-xl mt-1"></i>
                  <div>
                    <div class="font-bold text-yellow-400">Smart Money Concepts</div>
                    <div class="text-sm text-gray-400">Identify where big money is positioned</div>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-green-400 text-xl mt-1"></i>
                  <div>
                    <div class="font-bold text-yellow-400">Volume Profile Foundations</div>
                    <div class="text-sm text-gray-400">Read volume like professional traders</div>
                  </div>
                </div>
              </div>
              <div class="mt-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
                <div class="text-sm font-bold text-blue-400 mb-2">
                  <i class="fas fa-bolt mr-2"></i>Transformation After Campus 1:
                </div>
                <p class="text-sm text-gray-400">
                  You'll finally understand WHY price moves, WHERE it's likely to go, and WHEN to enter—no more guessing or "trading by feel"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Campus 2 */}
        <div class="card mb-8 border-2 border-purple-500/30 hover:border-purple-500 transition">
          <div class="flex items-start gap-6">
            <div class="hidden md:block">
              <div class="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-3xl font-bold">
                02
              </div>
            </div>
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-3">
                <h3 class="text-2xl md:text-3xl font-bold">Price Action Campus</h3>
                <span class="badge badge-purple">10 Weeks</span>
              </div>
              <p class="text-lg text-gray-400 mb-4">
                Master advanced price action, order flow reading, and institutional footprint analysis
              </p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-green-400 text-xl mt-1"></i>
                  <div>
                    <div class="font-bold text-yellow-400">Order Flow Deep Dive</div>
                    <div class="text-sm text-gray-400">See WHO is buying/selling and their intentions</div>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-green-400 text-xl mt-1"></i>
                  <div>
                    <div class="font-bold text-yellow-400">Liquidity Engineering</div>
                    <div class="text-sm text-gray-400">Identify liquidity pools institutions target</div>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-green-400 text-xl mt-1"></i>
                  <div>
                    <div class="font-bold text-yellow-400">Fair Value Gaps & Imbalances</div>
                    <div class="text-sm text-gray-400">Exploit market inefficiencies for profit</div>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-green-400 text-xl mt-1"></i>
                  <div>
                    <div class="font-bold text-yellow-400">High-Probability Setups</div>
                    <div class="text-sm text-gray-400">70%+ win rate institutional patterns</div>
                  </div>
                </div>
              </div>
              <div class="mt-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
                <div class="text-sm font-bold text-purple-400 mb-2">
                  <i class="fas fa-bolt mr-2"></i>Transformation After Campus 2:
                </div>
                <p class="text-sm text-gray-400">
                  You'll be able to anticipate major moves BEFORE they happen, enter with confidence, and stop getting stopped out
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Campus 3 */}
        <div class="card mb-8 border-2 border-green-500/30 hover:border-green-500 transition">
          <div class="flex items-start gap-6">
            <div class="hidden md:block">
              <div class="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white text-3xl font-bold">
                03
              </div>
            </div>
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-3">
                <h3 class="text-2xl md:text-3xl font-bold">Risk Management Campus</h3>
                <span class="badge badge-green">6 Weeks</span>
              </div>
              <p class="text-lg text-gray-400 mb-4">
                Learn professional money management, position sizing, and psychological mastery
              </p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-green-400 text-xl mt-1"></i>
                  <div>
                    <div class="font-bold text-yellow-400">Hedge Fund Risk Systems</div>
                    <div class="text-sm text-gray-400">Protect capital like institutions do</div>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-green-400 text-xl mt-1"></i>
                  <div>
                    <div class="font-bold text-yellow-400">Dynamic Position Sizing</div>
                    <div class="text-sm text-gray-400">Scale positions based on conviction</div>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-green-400 text-xl mt-1"></i>
                  <div>
                    <div class="font-bold text-yellow-400">Trade Psychology Mastery</div>
                    <div class="text-sm text-gray-400">Eliminate fear, greed, and revenge trading</div>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-green-400 text-xl mt-1"></i>
                  <div>
                    <div class="font-bold text-yellow-400">Drawdown Management</div>
                    <div class="text-sm text-gray-400">Recover from losses systematically</div>
                  </div>
                </div>
              </div>
              <div class="mt-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
                <div class="text-sm font-bold text-green-400 mb-2">
                  <i class="fas fa-bolt mr-2"></i>Transformation After Campus 3:
                </div>
                <p class="text-sm text-gray-400">
                  You'll trade with ice-cold discipline, never risk more than you should, and sleep soundly knowing your capital is protected
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Campus 4 */}
        <div class="card mb-8 border-2 border-yellow-500/30 hover:border-yellow-500 transition">
          <div class="flex items-start gap-6">
            <div class="hidden md:block">
              <div class="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-white text-3xl font-bold">
                04
              </div>
            </div>
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-3">
                <h3 class="text-2xl md:text-3xl font-bold">Professional Execution Campus</h3>
                <span class="badge badge-gold">8 Weeks</span>
              </div>
              <p class="text-lg text-gray-400 mb-4">
                Execute trades like a professional with advanced strategies and real-time decision making
              </p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-green-400 text-xl mt-1"></i>
                  <div>
                    <div class="font-bold text-yellow-400">Session Bias Development</div>
                    <div class="text-sm text-gray-400">Trade the right markets at the right times</div>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-green-400 text-xl mt-1"></i>
                  <div>
                    <div class="font-bold text-yellow-400">Multi-Timeframe Analysis</div>
                    <div class="text-sm text-gray-400">Align your trades with bigger picture</div>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-green-400 text-xl mt-1"></i>
                  <div>
                    <div class="font-bold text-yellow-400">Live Market Scenarios</div>
                    <div class="text-sm text-gray-400">Practice with real market conditions</div>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-green-400 text-xl mt-1"></i>
                  <div>
                    <div class="font-bold text-yellow-400">Professional Workflows</div>
                    <div class="text-sm text-gray-400">Develop systematic trading routines</div>
                  </div>
                </div>
              </div>
              <div class="mt-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
                <div class="text-sm font-bold text-yellow-400 mb-2">
                  <i class="fas fa-bolt mr-2"></i>Transformation After Campus 4:
                </div>
                <p class="text-sm text-gray-400">
                  You'll execute with professional precision, manage multiple positions confidently, and trade with consistency
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bonus Masterclasses */}
        <div class="card bg-gradient-to-r from-purple-900/40 to-pink-900/40 border-2 border-purple-500">
          <div class="text-center mb-8">
            <h3 class="text-3xl font-bold mb-2">
              <i class="fas fa-gift mr-2 text-yellow-400"></i>
              BONUS: Advanced Masterclasses
            </h3>
            <p class="text-gray-400">Included FREE with Professional & Elite tiers</p>
          </div>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
              <h4 class="text-xl font-bold mb-3 text-purple-400">
                <i class="fas fa-layer-group mr-2"></i>
                Multi-Asset Strategies
              </h4>
              <p class="text-gray-400 mb-4">
                Apply institutional concepts across ES, NQ, CL, GC, and more. Adapt strategies to any futures market.
              </p>
              <div class="text-sm text-yellow-400 font-bold">Value: $1,497</div>
            </div>
            <div class="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
              <h4 class="text-xl font-bold mb-3 text-pink-400">
                <i class="fas fa-robot mr-2"></i>
                Algorithmic Trading Foundations
              </h4>
              <p class="text-gray-400 mb-4">
                Learn how to automate your edge, backtest strategies, and deploy algorithms for consistent execution.
              </p>
              <div class="text-sm text-yellow-400 font-bold">Value: $1,997</div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <a href="/curriculum" class="btn btn-primary text-lg px-10 py-4">
            <i class="fas fa-book-open mr-2"></i>
            View Complete Curriculum Details
          </a>
        </div>
      </div>
    </section>

    {/* PRICING WITH VALUE STACKING */}
    <section class="py-20 bg-slate-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-block mb-4 px-6 py-2 bg-red-600 text-white font-bold rounded-full animate-pulse">
            <i class="fas fa-clock mr-2"></i>
            LIMITED TIME: 23 Spots Remaining in January Cohort
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span class="gradient-text">Trading Path</span>
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            Start with Foundation tier and upgrade anytime. All plans include 14-day money-back guarantee.
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-6">
          {/* Foundation Tier */}
          <div class="card pricing-card border-slate-700">
            <div class="text-center mb-6">
              <div class="text-sm font-bold text-blue-400 mb-2">FOUNDATION</div>
              <div class="text-4xl font-bold mb-2">$97<span class="text-xl text-gray-500">/mo</span></div>
              <div class="text-sm text-gray-500">or $970/year (save 17%)</div>
            </div>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Foundations Campus (8 weeks)</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Market Structure Basics</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Community Discord Access</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Weekly Group Q&A</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-times text-gray-600 mt-1"></i>
                <span class="text-sm text-gray-500">Advanced Campuses</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-times text-gray-600 mt-1"></i>
                <span class="text-sm text-gray-500">Live Trading Room</span>
              </li>
            </ul>
            <div class="text-center text-sm text-gray-500 mb-4">
              Total Value: $497/mo
            </div>
            <a href="/waitlist" class="btn btn-secondary w-full">
              Start Foundation
            </a>
          </div>

          {/* Intermediate Tier */}
          <div class="card pricing-card border-blue-500">
            <div class="absolute top-4 right-4">
              <span class="badge badge-blue text-xs">POPULAR</span>
            </div>
            <div class="text-center mb-6">
              <div class="text-sm font-bold text-blue-400 mb-2">INTERMEDIATE</div>
              <div class="text-4xl font-bold mb-2">$197<span class="text-xl text-gray-500">/mo</span></div>
              <div class="text-sm text-gray-500">or $1,970/year (save 17%)</div>
            </div>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm font-bold">Everything in Foundation +</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Price Action Campus (10 weeks)</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Order Flow Analysis</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Trade Review Sessions</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Custom Trading Tools</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-times text-gray-600 mt-1"></i>
                <span class="text-sm text-gray-500">Live Trading Room</span>
              </li>
            </ul>
            <div class="text-center text-sm text-gray-500 mb-4">
              Total Value: $1,497/mo
            </div>
            <a href="/waitlist" class="btn btn-primary w-full">
              Start Intermediate
            </a>
          </div>

          {/* Professional Tier */}
          <div class="card pricing-card border-purple-500 relative">
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span class="badge badge-gold text-sm px-4 py-2">BEST VALUE</span>
            </div>
            <div class="text-center mb-6">
              <div class="text-sm font-bold text-purple-400 mb-2">PROFESSIONAL</div>
              <div class="text-4xl font-bold mb-2">$397<span class="text-xl text-gray-500">/mo</span></div>
              <div class="text-sm text-gray-500">or $3,970/year (save 17%)</div>
            </div>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm font-bold">Everything in Intermediate +</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">ALL 4 Campuses (32 weeks)</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Live Trading Room Access</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">2 Advanced Masterclasses</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Monthly 1-on-1 Coaching</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Priority Support</span>
              </li>
            </ul>
            <div class="text-center text-sm mb-2">
              <span class="line-through text-gray-600">$997/mo</span>
              <span class="text-yellow-400 font-bold ml-2">Save $600/mo</span>
            </div>
            <div class="text-center text-sm text-gray-500 mb-4">
              Total Value: $4,997/mo
            </div>
            <a href="/waitlist" class="btn btn-gold w-full text-lg">
              <i class="fas fa-crown mr-2"></i>
              Start Professional
            </a>
          </div>

          {/* Elite Tier */}
          <div class="card pricing-card border-yellow-500">
            <div class="text-center mb-6">
              <div class="text-sm font-bold text-yellow-400 mb-2">ELITE</div>
              <div class="text-4xl font-bold mb-2">$997<span class="text-xl text-gray-500">/mo</span></div>
              <div class="text-sm text-gray-500">or $9,970/year (save 17%)</div>
            </div>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm font-bold">Everything in Professional +</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Weekly 1-on-1 Coaching</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Custom Strategy Development</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Direct Mentor Access</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Proprietary Trading Tools</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span class="text-sm">Private Elite Mastermind</span>
              </li>
            </ul>
            <div class="text-center text-sm text-gray-500 mb-4">
              Total Value: $9,997/mo
            </div>
            <a href="/waitlist" class="btn btn-gold w-full">
              <i class="fas fa-star mr-2"></i>
              Apply for Elite
            </a>
          </div>
        </div>

        {/* Value Stack Summary */}
        <div class="card bg-gradient-to-r from-green-900/30 to-blue-900/30 border-2 border-green-500/50 mt-12 max-w-4xl mx-auto">
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-6">
              <i class="fas fa-gift mr-2 text-yellow-400"></i>
              Professional Tier Bonuses (LIMITED TIME)
            </h3>
            <div class="grid md:grid-cols-2 gap-6 text-left">
              <div class="flex items-start gap-3">
                <i class="fas fa-check-circle text-green-400 text-2xl"></i>
                <div>
                  <div class="font-bold text-lg">Multi-Asset Masterclass</div>
                  <div class="text-gray-400">Trade ES, NQ, CL, GC with same edge</div>
                  <div class="text-yellow-400 font-bold">Value: $1,497</div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <i class="fas fa-check-circle text-green-400 text-2xl"></i>
                <div>
                  <div class="font-bold text-lg">Algorithmic Trading Course</div>
                  <div class="text-gray-400">Automate your strategies</div>
                  <div class="text-yellow-400 font-bold">Value: $1,997</div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <i class="fas fa-check-circle text-green-400 text-2xl"></i>
                <div>
                  <div class="font-bold text-lg">Custom Trading Journal</div>
                  <div class="text-gray-400">Professional trade tracking software</div>
                  <div class="text-yellow-400 font-bold">Value: $497</div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <i class="fas fa-check-circle text-green-400 text-2xl"></i>
                <div>
                  <div class="font-bold text-lg">Private Discord Channel</div>
                  <div class="text-gray-400">Direct access to instructors</div>
                  <div class="text-yellow-400 font-bold">Value: Priceless</div>
                </div>
              </div>
            </div>
            <div class="mt-8 p-6 bg-slate-800 rounded-lg border-2 border-yellow-500">
              <div class="text-3xl font-bold text-yellow-400 mb-2">
                Total Bonus Value: $3,991
              </div>
              <div class="text-gray-400">
                Yours FREE when you join Professional or Elite tier today
              </div>
            </div>
          </div>
        </div>

        {/* Payment Plans */}
        <div class="text-center mt-12">
          <p class="text-lg text-gray-400 mb-4">
            <i class="fas fa-credit-card mr-2 text-blue-400"></i>
            Flexible payment plans available • Monthly or Annual billing
          </p>
          <p class="text-sm text-gray-500">
            All major credit cards accepted • Secure checkout • Cancel anytime
          </p>
        </div>
      </div>
    </section>

    {/* GUARANTEE SECTION */}
    <section class="py-20 bg-slate-900">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="card bg-gradient-to-r from-green-900/40 to-emerald-900/40 border-2 border-green-500">
          <div class="text-center">
            <div class="inline-block p-6 bg-green-500/20 rounded-full mb-6">
              <i class="fas fa-shield-alt text-6xl text-green-400"></i>
            </div>
            <h2 class="text-4xl font-bold mb-6">
              Our <span class="text-green-400">Iron-Clad</span> 14-Day Guarantee
            </h2>
            <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're so confident you'll love this training that we're taking ALL the risk off your shoulders...
            </p>
            
            <div class="max-w-2xl mx-auto text-left space-y-4 mb-8">
              <div class="flex items-start gap-4">
                <div class="text-3xl">✅</div>
                <div>
                  <div class="font-bold text-lg mb-1">Test Everything Risk-Free</div>
                  <p class="text-gray-400">
                    Go through the first campus, attend live sessions, use all the tools—if you don't see massive value, 
                    we'll refund every penny within 14 days. No questions asked.
                  </p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="text-3xl">✅</div>
                <div>
                  <div class="font-bold text-lg mb-1">Keep All Bonuses Even If You Refund</div>
                  <p class="text-gray-400">
                    Download the trading tools, masterclasses, and resources—they're yours to keep even if you decide 
                    the program isn't for you. That's how confident we are.
                  </p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="text-3xl">✅</div>
                <div>
                  <div class="font-bold text-lg mb-1">Cancel Anytime, No Penalties</div>
                  <p class="text-gray-400">
                    Monthly subscription? Cancel anytime with one click. No cancellation fees, no questions, 
                    no hassle. You're in complete control.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-slate-800 p-6 rounded-lg border border-slate-700 mb-8">
              <p class="text-lg italic text-gray-300">
                "Either this training transforms your trading and pays for itself many times over, 
                or you get a FULL refund and keep the bonuses. You literally <span class="text-green-400 font-bold">cannot lose</span>."
              </p>
              <p class="text-gray-500 mt-2">— Marcus Chen, Head Instructor</p>
            </div>

            <a href="/waitlist" class="btn btn-gold text-xl px-12 py-5 inline-block">
              <i class="fas fa-lock mr-2"></i>
              Start Risk-Free Today
            </a>
            <p class="text-sm text-gray-500 mt-4">
              <i class="fas fa-shield-alt mr-1"></i>
              Secure checkout • SSL encrypted • 14-day money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ - OBJECTION HANDLING */}
    <section class="py-20 bg-slate-950">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span class="gradient-text">Questions</span>
          </h2>
          <p class="text-xl text-gray-400">
            Everything you need to know before joining
          </p>
        </div>

        <div class="space-y-6">
          {/* FAQ Item 1 */}
          <div class="card border-slate-700">
            <h3 class="text-xl font-bold mb-3 text-yellow-400">
              <i class="fas fa-question-circle mr-2"></i>
              "I'm a complete beginner. Will this work for me?"
            </h3>
            <p class="text-gray-300">
              <strong>Absolutely.</strong> Our Foundation Campus starts with ZERO assumptions. We teach you market structure 
              from the ground up—no jargon, no assumed knowledge. Many of our most successful students had never placed 
              a futures trade before joining. In fact, beginners often do BETTER because they don't have to "unlearn" bad habits.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div class="card border-slate-700">
            <h3 class="text-xl font-bold mb-3 text-yellow-400">
              <i class="fas fa-question-circle mr-2"></i>
              "How is this different from other trading courses?"
            </h3>
            <p class="text-gray-300 mb-3">
              <strong>Three major differences:</strong>
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li><strong>We don't sell indicators or "magic systems"</strong> - We teach you to read the market like institutions do</li>
              <li><strong>We focus on WHY, not just WHAT</strong> - You'll understand market mechanics, not just memorize patterns</li>
              <li><strong>We provide ongoing support</strong> - Not just videos, but live sessions, trade reviews, and community</li>
            </ul>
          </div>

          {/* FAQ Item 3 */}
          <div class="card border-slate-700">
            <h3 class="text-xl font-bold mb-3 text-yellow-400">
              <i class="fas fa-question-circle mr-2"></i>
              "How much capital do I need to start?"
            </h3>
            <p class="text-gray-300">
              We recommend starting with <strong>$2,000-$5,000</strong> for live futures trading (or as little as $500 for micros). 
              However, you can learn and practice EVERYTHING in a demo account first—completely free. We actually ENCOURAGE 
              students to master the concepts in demo before risking real money.
            </p>
          </div>

          {/* FAQ Item 4 */}
          <div class="card border-slate-700">
            <h3 class="text-xl font-bold mb-3 text-yellow-400">
              <i class="fas fa-question-circle mr-2"></i>
              "How much time do I need to commit?"
            </h3>
            <p class="text-gray-300">
              Minimum <strong>5-10 hours per week</strong> for video lessons, practice, and live sessions. 
              Most students spend 10-15 hours/week and see results faster. The program is self-paced, so you can 
              go faster or slower based on your schedule. All live sessions are recorded if you can't attend.
            </p>
          </div>

          {/* FAQ Item 5 */}
          <div class="card border-slate-700">
            <h3 class="text-xl font-bold mb-3 text-yellow-400">
              <i class="fas fa-question-circle mr-2"></i>
              "What if I don't have time to day trade?"
            </h3>
            <p class="text-gray-300">
              Perfect! Our strategies work across ALL timeframes—from 1-minute scalping to daily swing trades. 
              Many successful students work full-time jobs and only trade the overnight sessions or end-of-day setups. 
              We teach you to adapt strategies to YOUR schedule.
            </p>
          </div>

          {/* FAQ Item 6 */}
          <div class="card border-slate-700">
            <h3 class="text-xl font-bold mb-3 text-yellow-400">
              <i class="fas fa-question-circle mr-2"></i>
              "Can I really make $10K-$50K per month?"
            </h3>
            <p class="text-gray-300">
              <strong>Yes, but...</strong> it depends on your capital, risk tolerance, and skill development. 
              Students with $10K-$25K accounts who follow our risk management typically earn $2K-$10K/month within 6 months. 
              Larger accounts ($50K+) can scale to $10K-$50K/month. We teach you to compound gains systematically—this is 
              NOT a "get rich quick" scheme. It requires work, discipline, and time.
            </p>
          </div>

          {/* FAQ Item 7 */}
          <div class="card border-slate-700">
            <h3 class="text-xl font-bold mb-3 text-yellow-400">
              <i class="fas fa-question-circle mr-2"></i>
              "What's the refund policy?"
            </h3>
            <p class="text-gray-300">
              <strong>14-day money-back guarantee, no questions asked.</strong> If you're not completely satisfied within 
              the first 14 days, email us for a full refund. You even keep all downloaded bonuses and materials. 
              We take on 100% of the risk—you have nothing to lose.
            </p>
          </div>

          {/* FAQ Item 8 */}
          <div class="card border-slate-700">
            <h3 class="text-xl font-bold mb-3 text-yellow-400">
              <i class="fas fa-question-circle mr-2"></i>
              "Will I get personal help if I'm stuck?"
            </h3>
            <p class="text-gray-300">
              <strong>Absolutely.</strong> Professional and Elite members get monthly or weekly 1-on-1 coaching sessions. 
              ALL members get access to our active Discord community, weekly group Q&A sessions, and trade review sessions 
              where instructors analyze your actual trades. You're never alone in this journey.
            </p>
          </div>
        </div>

        <div class="text-center mt-12">
          <p class="text-gray-400 mb-4">Still have questions?</p>
          <a href="/faq" class="btn btn-secondary">
            <i class="fas fa-comments mr-2"></i>
            View Complete FAQ
          </a>
        </div>
      </div>
    </section>

    {/* FINAL CTA - URGENCY & CONVERSION */}
    <section class="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="card bg-gradient-to-r from-blue-900/40 to-purple-900/40 border-2 border-yellow-500">
          <div class="text-center">
            <div class="mb-6">
              <div class="inline-block px-6 py-3 bg-red-600 text-white font-bold rounded-full text-lg mb-4 animate-pulse">
                <i class="fas fa-fire mr-2"></i>
                ONLY 23 SPOTS LEFT • ENROLLMENT CLOSES IN 4 DAYS
              </div>
            </div>

            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span class="gradient-text">Stop Losing</span><br />
              and Start <span class="text-yellow-400">Winning</span>?
            </h2>

            <p class="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join 523 traders who chose to stop gambling and start trading with institutional precision this month
            </p>

            {/* Final Value Proposition */}
            <div class="grid md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto text-left">
              <div class="flex items-start gap-3">
                <i class="fas fa-check-circle text-green-400 text-2xl mt-1"></i>
                <div>
                  <div class="font-bold text-lg">Proven System</div>
                  <p class="text-gray-400 text-sm">87% of students become profitable within 6 months</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <i class="fas fa-check-circle text-green-400 text-2xl mt-1"></i>
                <div>
                  <div class="font-bold text-lg">Zero Risk</div>
                  <p class="text-gray-400 text-sm">14-day money-back guarantee • Keep all bonuses</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <i class="fas fa-check-circle text-green-400 text-2xl mt-1"></i>
                <div>
                  <div class="font-bold text-lg">Complete Support</div>
                  <p class="text-gray-400 text-sm">Live sessions, 1-on-1 coaching, active community</p>
                </div>
              </div>
            </div>

            {/* Dual CTA Buttons */}
            <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a href="/waitlist" class="btn btn-gold text-2xl px-16 py-6 shadow-2xl hover:scale-105 transition-transform">
                <i class="fas fa-rocket mr-3"></i>
                CLAIM MY SPOT NOW
                <i class="fas fa-arrow-right ml-3"></i>
              </a>
            </div>

            <div class="text-center space-y-2">
              <p class="text-gray-400">
                <i class="fas fa-lock mr-2 text-green-400"></i>
                Secure checkout • SSL encrypted • Cancel anytime
              </p>
              <p class="text-sm text-gray-500">
                Join risk-free • Start learning in 5 minutes • 14-day guarantee
              </p>
            </div>

            {/* Countdown Timer Placeholder */}
            <div class="mt-10 p-6 bg-slate-800 rounded-lg border-2 border-red-500 max-w-2xl mx-auto">
              <div class="text-center">
                <div class="text-sm font-bold text-red-400 mb-3">ENROLLMENT DEADLINE:</div>
                <div class="grid grid-cols-4 gap-4">
                  <div>
                    <div class="text-4xl font-bold text-yellow-400">03</div>
                    <div class="text-xs text-gray-500">DAYS</div>
                  </div>
                  <div>
                    <div class="text-4xl font-bold text-yellow-400">14</div>
                    <div class="text-xs text-gray-500">HOURS</div>
                  </div>
                  <div>
                    <div class="text-4xl font-bold text-yellow-400">27</div>
                    <div class="text-xs text-gray-500">MINUTES</div>
                  </div>
                  <div>
                    <div class="text-4xl font-bold text-yellow-400">43</div>
                    <div class="text-xs text-gray-500">SECONDS</div>
                  </div>
                </div>
                <p class="text-sm text-gray-400 mt-4">
                  After this cohort fills, next enrollment opens in 60 days
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Social Proof */}
        <div class="mt-12 text-center">
          <div class="flex justify-center items-center gap-2 mb-4">
            <div class="flex -space-x-2">
              <div class="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 border-2 border-slate-900"></div>
              <div class="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 border-2 border-slate-900"></div>
              <div class="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-slate-900"></div>
              <div class="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 border-2 border-slate-900"></div>
              <div class="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-rose-500 border-2 border-slate-900"></div>
            </div>
            <span class="text-gray-400">+523 traders joined this month</span>
          </div>
          <p class="text-sm text-gray-500 italic">
            "Best investment I've made in my trading education" - Average rating: 4.9/5 from 247 reviews
          </p>
        </div>
      </div>
    </section>
  </>
)
