import { jsxRenderer } from 'hono/jsx-renderer'

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="The Speculators Guild University - Complete 320-lesson curriculum with detailed lesson plans, student objectives, teacher guides, and assessments across 8 comprehensive campuses."/>
        <title>{title || 'Complete Curriculum - The Speculators Guild University'}</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet"/>
        <link href="/static/styles.css" rel="stylesheet"/>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
})

// Complete Curriculum Details Page
export const CurriculumFullDetails = () => (
  <div>
    {/* Header */}
    <div class="bg-gradient-to-r from-blue-900 to-purple-900 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            Complete 320-Lesson Curriculum
          </h1>
          <p class="text-2xl text-gray-300 mb-4">
            Full Lesson Plans, Student Objectives, Teacher Guides & Assessments
          </p>
          <div class="flex flex-wrap justify-center gap-4 mt-8">
            <span class="badge badge-gold text-lg"><i class="fas fa-graduation-cap mr-2"></i>320 Lessons</span>
            <span class="badge badge-blue text-lg"><i class="fas fa-clock mr-2"></i>740+ Hours</span>
            <span class="badge badge-green text-lg"><i class="fas fa-certificate mr-2"></i>8 Certifications</span>
            <span class="badge badge-purple text-lg"><i class="fas fa-book mr-2"></i>500+ Exercises</span>
          </div>
        </div>
      </div>
    </div>

    {/* Curriculum Statistics */}
    <section class="py-16 bg-slate-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4">
            Most Comprehensive Trading & Life Mastery Curriculum
          </h2>
          <p class="text-xl text-gray-400">
            Every lesson includes student objectives, teacher guides, exercises, and assessments
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-6 mb-12">
          <div class="stat-card border-2 border-blue-500/30">
            <div class="stat-number text-blue-400">320</div>
            <div class="text-gray-400">Complete Lessons</div>
            <div class="text-sm text-gray-500 mt-2">45-60 min each</div>
          </div>
          <div class="stat-card border-2 border-green-500/30">
            <div class="stat-number text-green-400">240+</div>
            <div class="text-gray-400">Hours Video Content</div>
            <div class="text-sm text-gray-500 mt-2">4K quality</div>
          </div>
          <div class="stat-card border-2 border-yellow-500/30">
            <div class="stat-number text-yellow-400">500+</div>
            <div class="text-gray-400">Practice Exercises</div>
            <div class="text-sm text-gray-500 mt-2">With answer keys</div>
          </div>
          <div class="stat-card border-2 border-purple-500/30">
            <div class="stat-number text-purple-400">740+</div>
            <div class="text-gray-400">Total Learning Hours</div>
            <div class="text-sm text-gray-500 mt-2">Over 16 months</div>
          </div>
        </div>

        {/* Lesson Structure */}
        <div class="card bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-2 border-blue-500/30">
          <h3 class="text-2xl font-bold mb-6 text-center">
            <i class="fas fa-book-open text-blue-400 mr-2"></i>
            Every Lesson Includes
          </h3>
          <div class="grid md:grid-cols-3 gap-6">
            <div>
              <h4 class="font-bold text-lg text-blue-400 mb-3">
                <i class="fas fa-bullseye mr-2"></i>Student Components
              </h4>
              <ul class="space-y-2 text-gray-300">
                <li><i class="fas fa-check text-green-400 mr-2"></i>Learning objectives</li>
                <li><i class="fas fa-check text-green-400 mr-2"></i>Pre-lesson materials</li>
                <li><i class="fas fa-check text-green-400 mr-2"></i>Core content outline</li>
                <li><i class="fas fa-check text-green-400 mr-2"></i>Practical exercises</li>
                <li><i class="fas fa-check text-green-400 mr-2"></i>Assessments & quizzes</li>
                <li><i class="fas fa-check text-green-400 mr-2"></i>Resource materials</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-lg text-purple-400 mb-3">
                <i class="fas fa-chalkboard-teacher mr-2"></i>Teacher Components
              </h4>
              <ul class="space-y-2 text-gray-300">
                <li><i class="fas fa-check text-green-400 mr-2"></i>Delivery instructions</li>
                <li><i class="fas fa-check text-green-400 mr-2"></i>Key teaching points</li>
                <li><i class="fas fa-check text-green-400 mr-2"></i>Common mistakes to address</li>
                <li><i class="fas fa-check text-green-400 mr-2"></i>Live demonstrations</li>
                <li><i class="fas fa-check text-green-400 mr-2"></i>Student engagement tips</li>
                <li><i class="fas fa-check text-green-400 mr-2"></i>Grading rubrics</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-lg text-yellow-400 mb-3">
                <i class="fas fa-chart-line mr-2"></i>Assessment Components
              </h4>
              <ul class="space-y-2 text-gray-300">
                <li><i class="fas fa-check text-green-400 mr-2"></i>Comprehension quizzes</li>
                <li><i class="fas fa-check text-green-400 mr-2"></i>Chart analysis projects</li>
                <li><i class="fas fa-check text-green-400 mr-2"></i>Written assignments</li>
                <li><i class="fas fa-check text-green-400 mr-2"></i>Video submissions</li>
                <li><i class="fas fa-check text-green-400 mr-2"></i>Live demonstrations</li>
                <li><i class="fas fa-check text-green-400 mr-2"></i>Performance tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Sample Lesson Plan */}
    <section class="py-16 bg-slate-900">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4">
            <i class="fas fa-file-alt text-yellow-400 mr-2"></i>
            Sample Lesson Plan
          </h2>
          <p class="text-xl text-gray-400">
            See the level of detail in every single lesson
          </p>
        </div>

        <div class="card bg-slate-800 border-2 border-yellow-500/30">
          <div class="mb-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-2xl font-bold">Lesson 1.3: Understanding Liquidity</h3>
              <span class="badge badge-blue">Campus 1, Week 1</span>
            </div>
            <div class="flex gap-4 text-sm text-gray-400">
              <span><i class="fas fa-clock mr-1"></i>55 minutes</span>
              <span><i class="fas fa-signal mr-1"></i>Foundational</span>
              <span><i class="fas fa-users mr-1"></i>All Students</span>
            </div>
          </div>

          {/* Student Learning Objectives */}
          <div class="mb-6 p-4 bg-blue-900/20 rounded border border-blue-500/30">
            <h4 class="font-bold text-lg text-blue-400 mb-3">
              <i class="fas fa-bullseye mr-2"></i>Student Learning Objectives
            </h4>
            <ul class="space-y-2 text-gray-300">
              <li><i class="fas fa-check-circle text-green-400 mr-2"></i>Define liquidity in institutional trading terms</li>
              <li><i class="fas fa-check-circle text-green-400 mr-2"></i>Identify liquidity pools on charts</li>
              <li><i class="fas fa-check-circle text-green-400 mr-2"></i>Understand why institutions hunt liquidity</li>
              <li><i class="fas fa-check-circle text-green-400 mr-2"></i>Recognize liquidity grabs vs. real moves</li>
            </ul>
          </div>

          {/* Pre-Lesson Materials */}
          <div class="mb-6 p-4 bg-purple-900/20 rounded border border-purple-500/30">
            <h4 class="font-bold text-lg text-purple-400 mb-3">
              <i class="fas fa-book-reader mr-2"></i>Pre-Lesson Materials
            </h4>
            <ul class="space-y-2 text-gray-300">
              <li><i class="fas fa-file-pdf text-red-400 mr-2"></i>Read: "What Is Liquidity?" article (1,500 words)</li>
              <li><i class="fas fa-video text-blue-400 mr-2"></i>Watch: "Liquidity Engineering Basics" video (12 min)</li>
              <li><i class="fas fa-redo text-yellow-400 mr-2"></i>Review: Previous lesson's market structure concepts</li>
            </ul>
          </div>

          {/* Teacher Guide Excerpt */}
          <div class="mb-6 p-4 bg-green-900/20 rounded border border-green-500/30">
            <h4 class="font-bold text-lg text-green-400 mb-3">
              <i class="fas fa-chalkboard-teacher mr-2"></i>Teacher Guide (Excerpt)
            </h4>
            <div class="space-y-3 text-gray-300">
              <div>
                <div class="font-bold text-yellow-400">Opening (5 min):</div>
                <p class="text-sm">"Every stop loss you place is visible to market makers. Why would institutions want to know where retail stops are?"</p>
              </div>
              <div>
                <div class="font-bold text-yellow-400">Key Teaching Point 1 (10 min):</div>
                <p class="text-sm">Liquidity = Resting orders (stops + limit orders). Use whale analogy: "Like a whale needing deep water to swim."</p>
              </div>
              <div>
                <div class="font-bold text-yellow-400">Common Mistake:</div>
                <p class="text-sm">Students entering on the sweep itself. Solution: Wait for reaction and structure confirmation.</p>
              </div>
            </div>
          </div>

          {/* Practical Exercises */}
          <div class="mb-6 p-4 bg-orange-900/20 rounded border border-orange-500/30">
            <h4 class="font-bold text-lg text-orange-400 mb-3">
              <i class="fas fa-tasks mr-2"></i>Practical Exercises (3 Assignments)
            </h4>
            <div class="space-y-3 text-gray-300">
              <div>
                <div class="font-bold">Exercise 1: Liquidity Mapping (25 min)</div>
                <p class="text-sm">Provided: 8 charts. Task: Draw boxes around liquidity zones, label buy-side/sell-side, rank probability.</p>
              </div>
              <div>
                <div class="font-bold">Exercise 2: Historical Analysis (20 min)</div>
                <p class="text-sm">Find 3 examples where price swept liquidity and reversed. Screenshot and annotate.</p>
              </div>
              <div>
                <div class="font-bold">Exercise 3: Live Market Observation (15 min)</div>
                <p class="text-sm">Watch ES/NQ, mark nearest liquidity zones, predict which gets hit first.</p>
              </div>
            </div>
          </div>

          {/* Assessment */}
          <div class="p-4 bg-red-900/20 rounded border border-red-500/30">
            <h4 class="font-bold text-lg text-red-400 mb-3">
              <i class="fas fa-clipboard-check mr-2"></i>Assessment
            </h4>
            <div class="text-gray-300">
              <div class="font-bold mb-2">Video Submission Assignment:</div>
              <ul class="text-sm space-y-1 ml-4">
                <li>• Record 5-minute video analyzing a chart</li>
                <li>• Show liquidity zones and explain institutional behavior</li>
                <li>• Passing: 85% (graded on accuracy and explanation)</li>
                <li>• Due: 3 days after lesson</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="mt-8 text-center">
          <a href="/curriculum" class="btn btn-gold text-xl">
            <i class="fas fa-arrow-left mr-2"></i>
            Back to Full Curriculum Overview
          </a>
        </div>
      </div>
    </section>

    {/* Download Curriculum */}
    <section class="py-16 bg-slate-950">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-bold mb-6">
          <i class="fas fa-download text-green-400 mr-2"></i>
          Download Complete Curriculum
        </h2>
        <p class="text-xl text-gray-400 mb-8">
          Get the full 320-lesson curriculum with all lesson plans, teacher guides, and assessments
        </p>
        
        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <div class="card border-2 border-blue-500/30 hover:border-blue-500 transition">
            <div class="text-4xl mb-4"><i class="fas fa-file-pdf text-red-500"></i></div>
            <h3 class="text-xl font-bold mb-2">Curriculum Overview</h3>
            <p class="text-sm text-gray-400 mb-4">Complete structure, all 320 lessons mapped</p>
            <a href="/downloads" class="btn btn-secondary btn-sm">
              <i class="fas fa-download mr-2"></i>Download PDF
            </a>
          </div>
          <div class="card border-2 border-purple-500/30 hover:border-purple-500 transition">
            <div class="text-4xl mb-4"><i class="fas fa-file-alt text-purple-500"></i></div>
            <h3 class="text-xl font-bold mb-2">Campus 1 Complete</h3>
            <p class="text-sm text-gray-400 mb-4">40 lessons with full details</p>
            <a href="/downloads" class="btn btn-secondary btn-sm">
              <i class="fas fa-download mr-2"></i>Download PDF
            </a>
          </div>
          <div class="card border-2 border-green-500/30 hover:border-green-500 transition">
            <div class="text-4xl mb-4"><i class="fas fa-file-archive text-green-500"></i></div>
            <h3 class="text-xl font-bold mb-2">All Campuses</h3>
            <p class="text-sm text-gray-400 mb-4">Complete 8-campus package</p>
            <a href="/downloads" class="btn btn-secondary btn-sm">
              <i class="fas fa-download mr-2"></i>Download ZIP
            </a>
          </div>
        </div>

        <div class="card bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border-2 border-yellow-500/50">
          <h3 class="text-2xl font-bold mb-4">
            <i class="fas fa-rocket text-yellow-400 mr-2"></i>
            Ready to Start Your Transformation?
          </h3>
          <p class="text-lg text-gray-300 mb-6">
            Join The Speculators Guild University and get access to all 320 lessons, live instruction, and lifetime support
          </p>
          <a href="/waitlist" class="btn btn-gold text-xl">
            <i class="fas fa-user-plus mr-2"></i>
            Enroll Now - $197/mo
            <i class="fas fa-arrow-right ml-2"></i>
          </a>
          <p class="text-sm text-gray-400 mt-4">
            <i class="fas fa-shield-alt text-green-400 mr-2"></i>
            14-Day Money-Back Guarantee • Cancel Anytime
          </p>
        </div>
      </div>
    </section>

    {/* Curriculum Structure */}
    <section class="py-16 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4">Complete 8-Campus Structure</h2>
          <p class="text-xl text-gray-400">Click any campus to see detailed lesson breakdown</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          {/* Campus 1 */}
          <div class="card border-2 border-blue-500/30 hover:border-blue-500 transition cursor-pointer">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold">01</div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold">Foundations Campus</h3>
                <div class="flex gap-2 mt-1">
                  <span class="badge badge-blue text-xs">Weeks 1-8</span>
                  <span class="badge badge-blue text-xs">40 Lessons</span>
                </div>
              </div>
            </div>
            <p class="text-gray-400 mb-4">Market structure, auction theory, volume profile, order flow, smart money concepts</p>
            <div class="text-sm text-gray-500">
              <i class="fas fa-check text-green-400 mr-2"></i>78+ hours total learning time
            </div>
          </div>

          {/* Campus 2 */}
          <div class="card border-2 border-purple-500/30 hover:border-purple-500 transition cursor-pointer">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">02</div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold">Price Action Campus</h3>
                <div class="flex gap-2 mt-1">
                  <span class="badge badge-purple text-xs">Weeks 9-18</span>
                  <span class="badge badge-purple text-xs">40 Lessons</span>
                </div>
              </div>
            </div>
            <p class="text-gray-400 mb-4">Candlesticks, patterns, trends, reversals, consolidation, momentum analysis</p>
            <div class="text-sm text-gray-500">
              <i class="fas fa-check text-green-400 mr-2"></i>92+ hours total learning time
            </div>
          </div>

          {/* Campus 3 */}
          <div class="card border-2 border-green-500/30 hover:border-green-500 transition cursor-pointer">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white text-2xl font-bold">03</div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold">Risk Management Campus</h3>
                <div class="flex gap-2 mt-1">
                  <span class="badge badge-green text-xs">Weeks 19-26</span>
                  <span class="badge badge-green text-xs">40 Lessons</span>
                </div>
              </div>
            </div>
            <p class="text-gray-400 mb-4">Position sizing, stop loss, take profit, psychology, performance tracking</p>
            <div class="text-sm text-gray-500">
              <i class="fas fa-check text-green-400 mr-2"></i>85+ hours total learning time
            </div>
          </div>

          {/* Campus 4 */}
          <div class="card border-2 border-yellow-500/30 hover:border-yellow-500 transition cursor-pointer">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-white text-2xl font-bold">04</div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold">Professional Execution Campus</h3>
                <div class="flex gap-2 mt-1">
                  <span class="badge badge-gold text-xs">Weeks 27-32</span>
                  <span class="badge badge-gold text-xs">40 Lessons</span>
                </div>
              </div>
            </div>
            <p class="text-gray-400 mb-4">Execution planning, scalping, swing trading, options, portfolio management</p>
            <div class="text-sm text-gray-500">
              <i class="fas fa-check text-green-400 mr-2"></i>80+ hours total learning time
            </div>
          </div>

          {/* Campus 5 */}
          <div class="card border-2 border-indigo-500/30 hover:border-indigo-500 transition cursor-pointer">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold">05</div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold">Lifestyle Design Campus</h3>
                <div class="flex gap-2 mt-1">
                  <span class="badge badge-blue text-xs">Weeks 33-40</span>
                  <span class="badge badge-blue text-xs">40 Lessons</span>
                </div>
              </div>
            </div>
            <p class="text-gray-400 mb-4">Location independence, digital nomad, time freedom, productivity systems</p>
            <div class="text-sm text-gray-500">
              <i class="fas fa-check text-green-400 mr-2"></i>90+ hours total learning time
            </div>
          </div>

          {/* Campus 6 */}
          <div class="card border-2 border-emerald-500/30 hover:border-emerald-500 transition cursor-pointer">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center text-white text-2xl font-bold">06</div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold">Financial Health Campus</h3>
                <div class="flex gap-2 mt-1">
                  <span class="badge badge-green text-xs">Weeks 41-48</span>
                  <span class="badge badge-green text-xs">40 Lessons</span>
                </div>
              </div>
            </div>
            <p class="text-gray-400 mb-4">Cash flow, taxes, entities, asset protection, estate planning</p>
            <div class="text-sm text-gray-500">
              <i class="fas fa-check text-green-400 mr-2"></i>95+ hours total learning time
            </div>
          </div>

          {/* Campus 7 */}
          <div class="card border-2 border-orange-500/30 hover:border-orange-500 transition cursor-pointer">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white text-2xl font-bold">07</div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold">Fitness & Health Campus</h3>
                <div class="flex gap-2 mt-1">
                  <span class="badge badge-orange text-xs">Weeks 49-56</span>
                  <span class="badge badge-orange text-xs">40 Lessons</span>
                </div>
              </div>
            </div>
            <p class="text-gray-400 mb-4">Strength training, cardio, nutrition, sleep, stress management, biohacking</p>
            <div class="text-sm text-gray-500">
              <i class="fas fa-check text-green-400 mr-2"></i>88+ hours total learning time
            </div>
          </div>

          {/* Campus 8 */}
          <div class="card border-2 border-rose-500/30 hover:border-rose-500 transition cursor-pointer">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-16 h-16 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">08</div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold">Wealth Creation Campus</h3>
                <div class="flex gap-2 mt-1">
                  <span class="badge badge-rose text-xs">Weeks 57-64</span>
                  <span class="badge badge-rose text-xs">40 Lessons</span>
                </div>
              </div>
            </div>
            <p class="text-gray-400 mb-4">Real estate, dividends, business ownership, alternative investments, legacy</p>
            <div class="text-sm text-gray-500">
              <i class="fas fa-check text-green-400 mr-2"></i>92+ hours total learning time
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)
