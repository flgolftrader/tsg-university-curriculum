// Enhanced Curriculum Page with Week-by-Week Breakdown
export const enhancedCurriculumPage = () => (
  <>
    {/* Urgent Banner */}
    <div class="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 text-center font-bold">
      <i class="fas fa-graduation-cap mr-2"></i>
      32-Week Comprehensive Training • Start Anytime • Learn At Your Own Pace
    </div>

    {/* Hero Section */}
    <section class="hero py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            Complete <span class="gradient-text">Trading Curriculum</span>
          </h1>
          <p class="text-2xl text-gray-300 mb-4 max-w-4xl mx-auto">
            Your Complete Roadmap from Retail Trader to Institutional Professional
          </p>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            4 comprehensive campuses covering 32 weeks of intensive training, 
            plus 2 advanced masterclasses to take you from complete beginner to trading with institutional precision
          </p>
        </div>

        {/* Quick Stats */}
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div class="stat-card border-blue-500/30">
            <div class="stat-number text-blue-400">32</div>
            <div class="text-gray-400">Weeks Training</div>
          </div>
          <div class="stat-card border-green-500/30">
            <div class="stat-number text-green-400">160+</div>
            <div class="text-gray-400">Video Lessons</div>
          </div>
          <div class="stat-card border-purple-500/30">
            <div class="stat-number text-purple-400">40+</div>
            <div class="text-gray-400">Live Sessions</div>
          </div>
          <div class="stat-card border-yellow-500/30">
            <div class="stat-number text-yellow-400">24/7</div>
            <div class="text-gray-400">Community Access</div>
          </div>
        </div>
      </div>
    </section>

    {/* Learning Path Overview */}
    <section class="py-16 bg-slate-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4">Your <span class="text-yellow-400">Learning Journey</span></h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            A carefully designed progression that builds your skills from foundations to professional execution
          </p>
        </div>

        <div class="relative">
          {/* Learning Path Timeline */}
          <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-yellow-500"></div>
          
          <div class="space-y-16">
            {/* Phase 1 */}
            <div class="relative">
              <div class="md:flex items-center">
                <div class="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-right">
                  <div class="card border-2 border-blue-500/50">
                    <h3 class="text-3xl font-bold mb-3 text-blue-400">Phase 1: Foundations</h3>
                    <p class="text-lg text-gray-300 mb-4">Weeks 1-8</p>
                    <p class="text-gray-400">
                      Build unshakeable understanding of market structure, auction theory, and how institutions really think
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2 justify-end">
                      <span class="badge badge-blue text-xs">Market Structure</span>
                      <span class="badge badge-blue text-xs">Auction Theory</span>
                      <span class="badge badge-blue text-xs">Smart Money</span>
                    </div>
                  </div>
                </div>
                <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-blue-500 border-4 border-slate-900 flex items-center justify-center text-white font-bold z-10">
                  1
                </div>
                <div class="md:w-1/2 md:pl-12"></div>
              </div>
            </div>

            {/* Phase 2 */}
            <div class="relative">
              <div class="md:flex items-center">
                <div class="md:w-1/2 md:pr-12"></div>
                <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-purple-500 border-4 border-slate-900 flex items-center justify-center text-white font-bold z-10">
                  2
                </div>
                <div class="md:w-1/2 md:pl-12 mb-8 md:mb-0">
                  <div class="card border-2 border-purple-500/50">
                    <h3 class="text-3xl font-bold mb-3 text-purple-400">Phase 2: Price Action Mastery</h3>
                    <p class="text-lg text-gray-300 mb-4">Weeks 9-18</p>
                    <p class="text-gray-400">
                      Master advanced order flow, liquidity pools, and high-probability institutional setups
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                      <span class="badge badge-purple text-xs">Order Flow</span>
                      <span class="badge badge-purple text-xs">Liquidity</span>
                      <span class="badge badge-purple text-xs">Fair Value Gaps</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div class="relative">
              <div class="md:flex items-center">
                <div class="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-right">
                  <div class="card border-2 border-green-500/50">
                    <h3 class="text-3xl font-bold mb-3 text-green-400">Phase 3: Risk & Psychology</h3>
                    <p class="text-lg text-gray-300 mb-4">Weeks 19-24</p>
                    <p class="text-gray-400">
                      Professional risk management systems and psychological mastery for consistent execution
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2 justify-end">
                      <span class="badge badge-green text-xs">Risk Systems</span>
                      <span class="badge badge-green text-xs">Position Sizing</span>
                      <span class="badge badge-green text-xs">Psychology</span>
                    </div>
                  </div>
                </div>
                <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-green-500 border-4 border-slate-900 flex items-center justify-center text-white font-bold z-10">
                  3
                </div>
                <div class="md:w-1/2 md:pl-12"></div>
              </div>
            </div>

            {/* Phase 4 */}
            <div class="relative">
              <div class="md:flex items-center">
                <div class="md:w-1/2 md:pr-12"></div>
                <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-yellow-500 border-4 border-slate-900 flex items-center justify-center text-white font-bold z-10">
                  4
                </div>
                <div class="md:w-1/2 md:pl-12 mb-8 md:mb-0">
                  <div class="card border-2 border-yellow-500/50">
                    <h3 class="text-3xl font-bold mb-3 text-yellow-400">Phase 4: Professional Execution</h3>
                    <p class="text-lg text-gray-300 mb-4">Weeks 25-32</p>
                    <p class="text-gray-400">
                      Real-time decision making, multi-timeframe analysis, and systematic professional workflows
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                      <span class="badge badge-gold text-xs">Live Trading</span>
                      <span class="badge badge-gold text-xs">Session Bias</span>
                      <span class="badge badge-gold text-xs">Workflows</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CAMPUS 1: FOUNDATIONS - DETAILED BREAKDOWN */}
    <section class="py-20 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="card border-2 border-blue-500">
          <div class="flex items-start gap-6 mb-8">
            <div class="hidden md:block">
              <div class="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-4xl font-bold">
                01
              </div>
            </div>
            <div class="flex-1">
              <h2 class="text-4xl md:text-5xl font-bold mb-4">Foundations Campus</h2>
              <div class="flex flex-wrap gap-3 mb-4">
                <span class="badge badge-blue">8 Weeks</span>
                <span class="badge badge-blue">32 Video Lessons</span>
                <span class="badge badge-blue">8 Live Sessions</span>
              </div>
              <p class="text-xl text-gray-300 mb-6">
                Transform your understanding of how markets really work—no more guessing, no more retail myths
              </p>
            </div>
          </div>

          {/* Week by Week Breakdown */}
          <div class="space-y-6">
            {/* Week 1 */}
            <div class="card bg-slate-800 border-blue-500/30">
              <div class="flex items-start gap-4">
                <div class="text-3xl font-bold text-blue-400 min-w-[80px]">Week 1</div>
                <div class="flex-1">
                  <h4 class="text-2xl font-bold mb-3">Market Structure Fundamentals</h4>
                  <div class="grid md:grid-cols-2 gap-4">
                    <div>
                      <div class="font-semibold text-yellow-400 mb-2">
                        <i class="fas fa-video mr-2"></i>Lessons:
                      </div>
                      <ul class="space-y-1 text-gray-400 text-sm">
                        <li>• What is Market Structure? (Real Definition)</li>
                        <li>• Break of Structure vs Change of Character</li>
                        <li>• Higher Highs, Lower Lows - What They Really Mean</li>
                        <li>• Trend Identification Like Institutions</li>
                      </ul>
                    </div>
                    <div>
                      <div class="font-semibold text-green-400 mb-2">
                        <i class="fas fa-bullseye mr-2"></i>You'll Master:
                      </div>
                      <ul class="space-y-1 text-gray-400 text-sm">
                        <li>✓ Identifying true market direction</li>
                        <li>✓ Spotting reversals before they happen</li>
                        <li>✓ Reading institutional footprints</li>
                        <li>✓ Avoiding fake-out moves</li>
                      </ul>
                    </div>
                  </div>
                  <div class="mt-4 p-3 bg-blue-900/20 rounded border border-blue-500/30">
                    <div class="text-sm font-bold text-blue-400 mb-1">
                      <i class="fas fa-chart-line mr-2"></i>Transformation:
                    </div>
                    <p class="text-sm text-gray-400">
                      Stop seeing random price movements—start seeing the exact structure institutions follow
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Week 2 */}
            <div class="card bg-slate-800 border-blue-500/30">
              <div class="flex items-start gap-4">
                <div class="text-3xl font-bold text-blue-400 min-w-[80px]">Week 2</div>
                <div class="flex-1">
                  <h4 class="text-2xl font-bold mb-3">Auction Market Theory Deep Dive</h4>
                  <div class="grid md:grid-cols-2 gap-4">
                    <div>
                      <div class="font-semibold text-yellow-400 mb-2">
                        <i class="fas fa-video mr-2"></i>Lessons:
                      </div>
                      <ul class="space-y-1 text-gray-400 text-sm">
                        <li>• How Markets Auction Price (Not How You Think)</li>
                        <li>• Value Area High/Low - Where Smart Money Sits</li>
                        <li>• Point of Control - The Battle Zone</li>
                        <li>• Accepting vs Rejecting Price Levels</li>
                      </ul>
                    </div>
                    <div>
                      <div class="font-semibold text-green-400 mb-2">
                        <i class="fas fa-bullseye mr-2"></i>You'll Master:
                      </div>
                      <ul class="space-y-1 text-gray-400 text-sm">
                        <li>✓ Reading volume at key levels</li>
                        <li>✓ Identifying fair value zones</li>
                        <li>✓ Spotting imbalances institutions exploit</li>
                        <li>✓ Predicting where price MUST go</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Week 3 */}
            <div class="card bg-slate-800 border-blue-500/30">
              <div class="flex items-start gap-4">
                <div class="text-3xl font-bold text-blue-400 min-w-[80px]">Week 3</div>
                <div class="flex-1">
                  <h4 class="text-2xl font-bold mb-3">Smart Money Concepts (SMC)</h4>
                  <div class="grid md:grid-cols-2 gap-4">
                    <div>
                      <div class="font-semibold text-yellow-400 mb-2">
                        <i class="fas fa-video mr-2"></i>Lessons:
                      </div>
                      <ul class="space-y-1 text-gray-400 text-sm">
                        <li>• Order Blocks - Where Institutions Position</li>
                        <li>• Breaker Blocks - The Reversal Secret</li>
                        <li>• Mitigation Blocks - Where Price Returns</li>
                        <li>• How Banks Accumulate Positions</li>
                      </ul>
                    </div>
                    <div>
                      <div class="font-semibold text-green-400 mb-2">
                        <i class="fas fa-bullseye mr-2"></i>You'll Master:
                      </div>
                      <ul class="space-y-1 text-gray-400 text-sm">
                        <li>✓ Trading alongside institutions</li>
                        <li>✓ Identifying accumulation zones</li>
                        <li>✓ Spotting institutional entries</li>
                        <li>✓ Avoiding retail traps</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Weeks 4-8 Condensed */}
            <div class="grid md:grid-cols-2 gap-6">
              <div class="card bg-slate-800 border-blue-500/30">
                <div class="font-bold text-xl mb-3 text-blue-400">Week 4: Volume Profile Mastery</div>
                <p class="text-gray-400 text-sm mb-3">
                  Learn to read volume like professionals—identify where the money flows and why
                </p>
                <div class="text-xs text-gray-500">
                  4 lessons • 1 live session • Volume exercises
                </div>
              </div>

              <div class="card bg-slate-800 border-blue-500/30">
                <div class="font-bold text-xl mb-3 text-blue-400">Week 5: Market Phases & Cycles</div>
                <p class="text-gray-400 text-sm mb-3">
                  Understand accumulation, manipulation, distribution—the institutional playbook
                </p>
                <div class="text-xs text-gray-500">
                  4 lessons • 1 live session • Cycle analysis
                </div>
              </div>

              <div class="card bg-slate-800 border-blue-500/30">
                <div class="font-bold text-xl mb-3 text-blue-400">Week 6: Session Characteristics</div>
                <p class="text-gray-400 text-sm mb-3">
                  Master Asian, London, NY sessions—when and where the real moves happen
                </p>
                <div class="text-xs text-gray-500">
                  4 lessons • 1 live session • Session tracking
                </div>
              </div>

              <div class="card bg-slate-800 border-blue-500/30">
                <div class="font-bold text-xl mb-3 text-blue-400">Week 7: Timeframe Correlation</div>
                <p class="text-gray-400 text-sm mb-3">
                  Align your trades across multiple timeframes like professionals
                </p>
                <div class="text-xs text-gray-500">
                  4 lessons • 1 live session • MTF analysis
                </div>
              </div>

              <div class="card bg-slate-800 border-blue-500/30 md:col-span-2">
                <div class="font-bold text-xl mb-3 text-blue-400">Week 8: Foundations Assessment</div>
                <p class="text-gray-400 text-sm mb-3">
                  Comprehensive review, live Q&A, and practical assessment to cement your understanding
                </p>
                <div class="text-xs text-gray-500">
                  Review session • Live exam • Chart analysis • Certification
                </div>
              </div>
            </div>
          </div>

          <div class="mt-8 p-6 bg-gradient-to-r from-blue-900/40 to-cyan-900/40 rounded-lg border-2 border-blue-500">
            <h3 class="text-2xl font-bold mb-4 text-center">
              <i class="fas fa-trophy mr-2 text-yellow-400"></i>
              After Campus 1, You Will...
            </h3>
            <div class="grid md:grid-cols-3 gap-6">
              <div class="text-center">
                <div class="text-4xl mb-2">🎯</div>
                <div class="font-bold mb-1">See Markets Clearly</div>
                <p class="text-sm text-gray-400">No more confusion—just clarity on direction and structure</p>
              </div>
              <div class="text-center">
                <div class="text-4xl mb-2">🧠</div>
                <div class="font-bold mb-1">Think Institutionally</div>
                <p class="text-sm text-gray-400">Understand exactly what big money is doing and why</p>
              </div>
              <div class="text-center">
                <div class="text-4xl mb-2">✅</div>
                <div class="font-bold mb-1">Ready for Price Action</div>
                <p class="text-sm text-gray-400">Solid foundation to build advanced strategies on</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CAMPUS 2: PRICE ACTION - OVERVIEW */}
    <section class="py-20 bg-slate-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="card border-2 border-purple-500">
          <div class="flex items-start gap-6 mb-8">
            <div class="hidden md:block">
              <div class="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl font-bold">
                02
              </div>
            </div>
            <div class="flex-1">
              <h2 class="text-4xl md:text-5xl font-bold mb-4">Price Action Campus</h2>
              <div class="flex flex-wrap gap-3 mb-4">
                <span class="badge badge-purple">10 Weeks</span>
                <span class="badge badge-purple">40 Video Lessons</span>
                <span class="badge badge-purple">10 Live Sessions</span>
              </div>
              <p class="text-xl text-gray-300 mb-6">
                Master the art of reading order flow and positioning yourself for high-probability setups
              </p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            {/* Weeks 9-13 */}
            <div class="card bg-slate-800 border-purple-500/30">
              <h4 class="text-xl font-bold mb-3 text-purple-400">Weeks 9-13: Order Flow Mastery</h4>
              <ul class="space-y-2 text-gray-400 text-sm">
                <li><strong>Week 9:</strong> Reading the Tape - Who's Buying/Selling</li>
                <li><strong>Week 10:</strong> Delta Interpretation & Cumulative Volume</li>
                <li><strong>Week 11:</strong> Absorption & Exhaustion Patterns</li>
                <li><strong>Week 12:</strong> Footprint Charts & Volume Clusters</li>
                <li><strong>Week 13:</strong> Order Flow Setups & Entry Triggers</li>
              </ul>
            </div>

            {/* Weeks 14-18 */}
            <div class="card bg-slate-800 border-purple-500/30">
              <h4 class="text-xl font-bold mb-3 text-purple-400">Weeks 14-18: Liquidity Engineering</h4>
              <ul class="space-y-2 text-gray-400 text-sm">
                <li><strong>Week 14:</strong> Liquidity Pools & Stop Hunts</li>
                <li><strong>Week 15:</strong> Fair Value Gaps & Imbalances</li>
                <li><strong>Week 16:</strong> Market Maker Manipulation Tactics</li>
                <li><strong>Week 17:</strong> Inducement & Liquidity Sweeps</li>
                <li><strong>Week 18:</strong> High-Probability Setup Framework</li>
              </ul>
            </div>
          </div>

          <div class="mt-8 p-6 bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-lg border-2 border-purple-500">
            <h3 class="text-2xl font-bold mb-4 text-center text-purple-400">
              Campus 2 Transformation: From Guessing to KNOWING
            </h3>
            <p class="text-gray-300 text-center">
              You'll anticipate major moves BEFORE they happen, enter with confidence knowing institutions are with you, 
              and stop getting stopped out by market makers. Your win rate will jump to 70%+.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CAMPUS 3 & 4: CONDENSED */}
    <section class="py-20 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-8">
          {/* Campus 3 */}
          <div class="card border-2 border-green-500">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white text-2xl font-bold">
                03
              </div>
              <div>
                <h3 class="text-3xl font-bold">Risk Management Campus</h3>
                <div class="flex gap-2 mt-2">
                  <span class="badge badge-green text-xs">6 Weeks</span>
                  <span class="badge badge-green text-xs">24 Lessons</span>
                </div>
              </div>
            </div>

            <p class="text-gray-300 mb-6">
              Learn professional risk systems that protect your capital and compound gains systematically
            </p>

            <div class="space-y-4">
              <div class="border-l-4 border-green-500 pl-4">
                <div class="font-bold text-green-400">Weeks 19-21: Risk Systems</div>
                <p class="text-sm text-gray-400">
                  Hedge fund position sizing, portfolio heat, max drawdown protocols
                </p>
              </div>
              <div class="border-l-4 border-green-500 pl-4">
                <div class="font-bold text-green-400">Weeks 22-24: Psychology & Discipline</div>
                <p class="text-sm text-gray-400">
                  Eliminate fear, greed, FOMO—trade with ice-cold professional discipline
                </p>
              </div>
            </div>

            <div class="mt-6 p-4 bg-green-900/20 rounded border border-green-500/30">
              <div class="font-bold text-green-400 mb-2">After Campus 3:</div>
              <p class="text-sm text-gray-400">
                You'll protect your capital like a hedge fund, never overtrade, and compound gains consistently
              </p>
            </div>
          </div>

          {/* Campus 4 */}
          <div class="card border-2 border-yellow-500">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-white text-2xl font-bold">
                04
              </div>
              <div>
                <h3 class="text-3xl font-bold">Professional Execution Campus</h3>
                <div class="flex gap-2 mt-2">
                  <span class="badge badge-gold text-xs">8 Weeks</span>
                  <span class="badge badge-gold text-xs">32 Lessons</span>
                </div>
              </div>
            </div>

            <p class="text-gray-300 mb-6">
              Execute with professional precision—real-time decision making and systematic workflows
            </p>

            <div class="space-y-4">
              <div class="border-l-4 border-yellow-500 pl-4">
                <div class="font-bold text-yellow-400">Weeks 25-28: Live Trading</div>
                <p class="text-sm text-gray-400">
                  Session bias, real-time analysis, managing multiple positions professionally
                </p>
              </div>
              <div class="border-l-4 border-yellow-500 pl-4">
                <div class="font-bold text-yellow-400">Weeks 29-32: Professional Systems</div>
                <p class="text-sm text-gray-400">
                  Daily routines, trade journaling, continuous improvement frameworks
                </p>
              </div>
            </div>

            <div class="mt-6 p-4 bg-yellow-900/20 rounded border border-yellow-500/30">
              <div class="font-bold text-yellow-400 mb-2">After Campus 4:</div>
              <p class="text-sm text-gray-400">
                You'll trade like a professional—systematic, disciplined, and consistently profitable
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FINAL CTA */}
    <section class="py-20 bg-slate-950">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="card bg-gradient-to-r from-blue-900/40 to-purple-900/40 border-2 border-yellow-500">
          <h2 class="text-4xl font-bold mb-6">
            Ready to Master This <span class="gradient-text">Complete System</span>?
          </h2>
          <p class="text-xl text-gray-300 mb-8">
            32 weeks of comprehensive training, 160+ lessons, 40+ live sessions, lifetime access
          </p>
          
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/waitlist" class="btn btn-gold text-xl px-12 py-5">
              <i class="fas fa-rocket mr-2"></i>
              Start Your Journey Today
            </a>
            <a href="/pricing" class="btn btn-secondary text-lg px-8 py-4">
              <i class="fas fa-tags mr-2"></i>
              View Pricing Options
            </a>
          </div>

          <p class="text-gray-400 mt-6">
            <i class="fas fa-shield-alt text-green-400 mr-2"></i>
            14-day money-back guarantee • Start learning immediately
          </p>
        </div>
      </div>
    </section>
  </>
)
