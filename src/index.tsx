import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Use renderer for HTML pages
app.use(renderer)

// ==========================================
// HOME PAGE
// ==========================================
app.get('/', (c) => {
  return c.render(
    <>
      {/* Hero Section */}
      <section class="hero py-20 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="text-center">
            <div class="mb-6">
              <span class="badge badge-blue text-sm">
                <i class="fas fa-chart-line mr-2"></i>
                Professional Futures Trading Education
              </span>
            </div>
            <h1 class="text-5xl md:text-7xl font-bold mb-6">
              Master <span class="gradient-text">Futures Trading</span><br />
              with Institutional Strategies
            </h1>
            <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Learn auction market theory, smart money concepts, and CME fair price strategies 
              from professional traders. Transform from retail to institutional thinking.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/waitlist" class="btn btn-primary">
                <i class="fas fa-rocket mr-2"></i>
                Join Waitlist
              </a>
              <a href="/curriculum" class="btn btn-secondary">
                <i class="fas fa-book-open mr-2"></i>
                Explore Curriculum
              </a>
            </div>
          </div>
          
          {/* Stats Bar */}
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div class="stat-card">
              <div class="stat-number">500+</div>
              <div class="text-gray-400">Students Enrolled</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">40+</div>
              <div class="text-gray-400">Hours of Content</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">98%</div>
              <div class="text-gray-400">Success Rate</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">24/7</div>
              <div class="text-gray-400">Community Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section class="py-20 bg-slate-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              Why Learn <span class="gradient-text">With Us?</span>
            </h2>
            <p class="text-xl text-gray-400 max-w-2xl mx-auto">
              Professional trading education designed to give you the edge in futures markets
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="card text-center">
              <div class="feature-icon mx-auto">
                <i class="fas fa-graduation-cap"></i>
              </div>
              <h3 class="text-2xl font-bold mb-3">Institutional Knowledge</h3>
              <p class="text-gray-400">
                Learn how market makers, banks, and professional traders actually think and operate. 
                Understand order flow, liquidity dynamics, and institutional positioning.
              </p>
            </div>

            <div class="card text-center">
              <div class="feature-icon mx-auto">
                <i class="fas fa-chart-bar"></i>
              </div>
              <h3 class="text-2xl font-bold mb-3">Proven Methodologies</h3>
              <p class="text-gray-400">
                Master auction market theory, volume profile analysis, and smart money concepts. 
                Time-tested strategies used by successful professional traders.
              </p>
            </div>

            <div class="card text-center">
              <div class="feature-icon mx-auto">
                <i class="fas fa-users"></i>
              </div>
              <h3 class="text-2xl font-bold mb-3">Live Trading & Support</h3>
              <p class="text-gray-400">
                Join live trading sessions, get real-time market analysis, and interact with 
                experienced mentors. Access our 24/7 trading community.
              </p>
            </div>

            <div class="card text-center">
              <div class="feature-icon mx-auto">
                <i class="fas fa-laptop-code"></i>
              </div>
              <h3 class="text-2xl font-bold mb-3">Comprehensive Platform</h3>
              <p class="text-gray-400">
                Access video lectures, interactive exercises, trading simulations, and real-time 
                market analysis tools. Learn at your own pace.
              </p>
            </div>

            <div class="card text-center">
              <div class="feature-icon mx-auto">
                <i class="fas fa-briefcase"></i>
              </div>
              <h3 class="text-2xl font-bold mb-3">Career Opportunities</h3>
              <p class="text-gray-400">
                Get connected with proprietary trading firms and institutional opportunities. 
                Our job board features exclusive positions for certified students.
              </p>
            </div>

            <div class="card text-center">
              <div class="feature-icon mx-auto">
                <i class="fas fa-trophy"></i>
              </div>
              <h3 class="text-2xl font-bold mb-3">Proven Results</h3>
              <p class="text-gray-400">
                Join hundreds of successful traders who have transformed their trading with our 
                methodology. Track record of student success and profitability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Overview Section */}
      <section class="py-20 bg-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              Complete <span class="gradient-text">Trading Curriculum</span>
            </h2>
            <p class="text-xl text-gray-400 max-w-2xl mx-auto">
              Four comprehensive campuses covering everything from fundamentals to advanced institutional strategies
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            {/* Campus 1 */}
            <div class="card">
              <div class="flex items-start mb-4">
                <div class="feature-icon">
                  <i class="fas fa-gavel"></i>
                </div>
                <div class="ml-4">
                  <span class="badge badge-blue mb-2">Campus 1</span>
                  <h3 class="text-2xl font-bold">Auction Market Theory</h3>
                </div>
              </div>
              <p class="text-gray-400 mb-4">
                Master the foundation of how markets actually work through auction dynamics, 
                market profile, and volume profile analysis.
              </p>
              <ul class="space-y-2 text-gray-300">
                <li><i class="fas fa-check text-green-500 mr-2"></i> Market structure fundamentals</li>
                <li><i class="fas fa-check text-green-500 mr-2"></i> TPO and value area analysis</li>
                <li><i class="fas fa-check text-green-500 mr-2"></i> Volume profile construction</li>
                <li><i class="fas fa-check text-green-500 mr-2"></i> Advanced volume strategies</li>
              </ul>
            </div>

            {/* Campus 2 */}
            <div class="card">
              <div class="flex items-start mb-4">
                <div class="feature-icon">
                  <i class="fas fa-brain"></i>
                </div>
                <div class="ml-4">
                  <span class="badge badge-gold mb-2">Campus 2</span>
                  <h3 class="text-2xl font-bold">Smart Money Concepts</h3>
                </div>
              </div>
              <p class="text-gray-400 mb-4">
                Learn to identify and trade with institutional money flow, order blocks, 
                and liquidity dynamics used by market makers.
              </p>
              <ul class="space-y-2 text-gray-300">
                <li><i class="fas fa-check text-green-500 mr-2"></i> Order flow & market structure</li>
                <li><i class="fas fa-check text-green-500 mr-2"></i> Liquidity sweeps and runs</li>
                <li><i class="fas fa-check text-green-500 mr-2"></i> Order blocks and fair value gaps</li>
                <li><i class="fas fa-check text-green-500 mr-2"></i> Break of structure strategies</li>
              </ul>
            </div>

            {/* Campus 3 */}
            <div class="card">
              <div class="flex items-start mb-4">
                <div class="feature-icon">
                  <i class="fas fa-balance-scale"></i>
                </div>
                <div class="ml-4">
                  <span class="badge badge-green mb-2">Campus 3</span>
                  <h3 class="text-2xl font-bold">CME Fair Price Redelivery</h3>
                </div>
              </div>
              <p class="text-gray-400 mb-4">
                Exploit inefficiencies in overnight and gap trading using professional fair value 
                calculations and opening range strategies.
              </p>
              <ul class="space-y-2 text-gray-300">
                <li><i class="fas fa-check text-green-500 mr-2"></i> CME market mechanics</li>
                <li><i class="fas fa-check text-green-500 mr-2"></i> Fair value calculations</li>
                <li><i class="fas fa-check text-green-500 mr-2"></i> Gap trading strategies</li>
                <li><i class="fas fa-check text-green-500 mr-2"></i> Opening range techniques</li>
              </ul>
            </div>

            {/* Campus 4 */}
            <div class="card">
              <div class="flex items-start mb-4">
                <div class="feature-icon">
                  <i class="fas fa-video"></i>
                </div>
                <div class="ml-4">
                  <span class="badge badge-blue mb-2">Campus 4</span>
                  <h3 class="text-2xl font-bold">Live Trading Campus</h3>
                </div>
              </div>
              <p class="text-gray-400 mb-4">
                Apply everything in real-time with live market analysis, trading sessions, 
                and professional trader commentary.
              </p>
              <ul class="space-y-2 text-gray-300">
                <li><i class="fas fa-check text-green-500 mr-2"></i> Daily live trading sessions</li>
                <li><i class="fas fa-check text-green-500 mr-2"></i> Real-time market analysis</li>
                <li><i class="fas fa-check text-green-500 mr-2"></i> Trade management coaching</li>
                <li><i class="fas fa-check text-green-500 mr-2"></i> Psychology & risk management</li>
              </ul>
            </div>
          </div>

          <div class="text-center mt-12">
            <a href="/curriculum" class="btn btn-primary">
              <i class="fas fa-arrow-right mr-2"></i>
              View Complete Curriculum
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section class="py-20 bg-slate-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              Choose Your <span class="gradient-text">Learning Path</span>
            </h2>
            <p class="text-xl text-gray-400 max-w-2xl mx-auto">
              From foundation to professional trading, select the tier that matches your goals
            </p>
          </div>

          <div class="grid md:grid-cols-4 gap-6">
            <div class="card text-center">
              <span class="badge badge-blue mb-4">Foundation</span>
              <div class="text-4xl font-bold gradient-text mb-2">$97</div>
              <div class="text-gray-400 mb-4">per month</div>
              <p class="text-gray-400 text-sm mb-4">Perfect for beginners starting their trading journey</p>
              <a href="/pricing" class="btn btn-secondary w-full">Learn More</a>
            </div>

            <div class="card text-center border-2 border-gold-500 relative">
              <div class="absolute top-0 right-0 bg-yellow-500 text-slate-900 px-3 py-1 text-xs font-bold rounded-bl-lg">POPULAR</div>
              <span class="badge badge-gold mb-4">Professional</span>
              <div class="text-4xl font-bold gradient-text mb-2">$197</div>
              <div class="text-gray-400 mb-4">per month</div>
              <p class="text-gray-400 text-sm mb-4">Full access with live sessions and premium signals</p>
              <a href="/pricing" class="btn btn-gold w-full">Learn More</a>
            </div>

            <div class="card text-center">
              <span class="badge badge-green mb-4">Elite</span>
              <div class="text-4xl font-bold gradient-text mb-2">$497</div>
              <div class="text-gray-400 mb-4">per month</div>
              <p class="text-gray-400 text-sm mb-4">Personal coaching and prop firm placement help</p>
              <a href="/pricing" class="btn btn-secondary w-full">Learn More</a>
            </div>

            <div class="card text-center">
              <span class="badge badge-gold mb-4">Business</span>
              <div class="text-4xl font-bold gradient-text mb-2">$997</div>
              <div class="text-gray-400 mb-4">per month</div>
              <p class="text-gray-400 text-sm mb-4">Revenue sharing and business partnerships</p>
              <a href="/pricing" class="btn btn-secondary w-full">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section class="py-20 bg-gradient-to-br from-blue-900 to-slate-900">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Trading?
          </h2>
          <p class="text-xl text-gray-300 mb-8">
            Join hundreds of successful traders who have mastered institutional strategies
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/waitlist" class="btn btn-gold text-lg">
              <i class="fas fa-rocket mr-2"></i>
              Join Waitlist Now
            </a>
            <a href="/about" class="btn btn-secondary text-lg">
              <i class="fas fa-info-circle mr-2"></i>
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
})

// ==========================================
// CURRICULUM PAGE  
// ==========================================
app.get('/curriculum', (c) => {
  return c.render(
    <>
      {/* Page content - see previous version for full curriculum page */}
      <section class="hero py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-5xl font-bold mb-6">
            Complete <span class="gradient-text">Trading Curriculum</span>
          </h1>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive, step-by-step journey from retail trader to institutional-level thinking
          </p>
        </div>
      </section>
      
      <section class="py-20 bg-slate-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p class="text-gray-400 mb-8">
            Detailed curriculum pages coming soon. In the meantime, view our overview on the home page.
          </p>
          <a href="/" class="btn btn-primary">Back to Home</a>
        </div>
      </section>
    </>
  )
})

// ==========================================
// ADDITIONAL ROUTE IMPORTS
// ==========================================

// Pricing page
app.get('/pricing', (c) => {
  return c.html(
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pricing - Futures Trading Academy</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <link href="/static/styles.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar py-4">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <a href="/" class="text-2xl font-bold gradient-text">Trading Academy</a>
            <div class="hidden md:flex space-x-6">
                <a href="/" class="text-gray-300 hover:text-white">Home</a>
                <a href="/curriculum" class="text-gray-300 hover:text-white">Curriculum</a>
                <a href="/pricing" class="text-white font-semibold">Pricing</a>
                <a href="/about" class="text-gray-300 hover:text-white">About</a>
            </div>
            <a href="/waitlist" class="btn btn-primary">Join Waitlist</a>
        </div>
    </nav>
    <section class="py-20 bg-slate-900 min-h-screen flex items-center justify-center">
        <div class="max-w-4xl mx-auto px-4 text-center">
            <h1 class="text-5xl font-bold mb-6">Pricing <span class="gradient-text">Coming Soon</span></h1>
            <p class="text-xl text-gray-400 mb-8">We're finalizing our pricing tiers. Join the waitlist to get notified when we launch!</p>
            <a href="/waitlist" class="btn btn-primary">Join Waitlist</a>
        </div>
    </section>
</body>
</html>`
  )
})

// Waitlist page
app.get('/waitlist', (c) => {
  return c.html(
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Join Waitlist - Futures Trading Academy</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <link href="/static/styles.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar py-4">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <a href="/" class="text-2xl font-bold gradient-text">Trading Academy</a>
            <a href="/" class="text-gray-300 hover:text-white">← Back to Home</a>
        </div>
    </nav>
    <section class="py-20 bg-slate-900">
        <div class="max-w-2xl mx-auto px-4">
            <div class="text-center mb-12">
                <h1 class="text-5xl font-bold mb-4">Join the <span class="gradient-text">Waitlist</span></h1>
                <p class="text-xl text-gray-400">Be the first to know when we launch</p>
            </div>
            <div class="card">
                <div id="success-message" class="hidden alert alert-success mb-6">
                    <i class="fas fa-check-circle mr-2"></i>
                    Thank you! You've been added to our waitlist.
                </div>
                <form id="waitlist-form" class="space-y-6">
                    <div>
                        <label class="block text-sm font-semibold mb-2">First Name *</label>
                        <input type="text" name="first_name" required placeholder="John" class="w-full" />
                    </div>
                    <div>
                        <label class="block text-sm font-semibold mb-2">Last Name *</label>
                        <input type="text" name="last_name" required placeholder="Doe" class="w-full" />
                    </div>
                    <div>
                        <label class="block text-sm font-semibold mb-2">Email Address *</label>
                        <input type="email" name="email" required placeholder="john@example.com" class="w-full" />
                    </div>
                    <div>
                        <label class="block text-sm font-semibold mb-2">Trading Experience</label>
                        <select name="experience" class="w-full">
                            <option value="">Select your level...</option>
                            <option value="beginner">Beginner (0-1 years)</option>
                            <option value="intermediate">Intermediate (1-3 years)</option>
                            <option value="advanced">Advanced (3-5 years)</option>
                            <option value="professional">Professional (5+ years)</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary w-full">
                        <i class="fas fa-paper-plane mr-2"></i>
                        Join Waitlist
                    </button>
                </form>
            </div>
        </div>
    </section>
    <script>
        document.getElementById('waitlist-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            try {
                const response = await fetch('/api/waitlist', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                if (response.ok) {
                    document.getElementById('success-message').classList.remove('hidden');
                    document.getElementById('waitlist-form').classList.add('hidden');
                }
            } catch (error) {
                alert('Error submitting form. Please try again.');
            }
        });
    </script>
</body>
</html>`
  )
})

// Waitlist API endpoint
app.post('/api/waitlist', async (c) => {
  try {
    const data = await c.req.json()
    console.log('New waitlist signup:', data)
    
    // TODO: Store in database and send confirmation email
    // For demo purposes, just return success
    
    return c.json({ success: true, message: 'Successfully added to waitlist' })
  } catch (error) {
    return c.json({ success: false, message: 'Error processing request' }, 400)
  }
})

// About page
app.get('/about', (c) => {
  return c.render(
    <>
      <section class="hero py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-5xl font-bold mb-6">
            About <span class="gradient-text">Trading Academy</span>
          </h1>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Bridging the gap between retail traders and institutional knowledge
          </p>
        </div>
      </section>
      
      <section class="py-20 bg-slate-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl mx-auto">
            <div class="card mb-12">
              <h2 class="text-3xl font-bold mb-6 text-center">Our Mission</h2>
              <p class="text-lg text-gray-300 text-center">
                To democratize institutional-grade trading education and empower retail traders 
                with the same methodologies, strategies, and mindset used by professional traders 
                at banks, hedge funds, and proprietary trading firms.
              </p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8 mb-12">
              <div class="card text-center">
                <div class="text-5xl mb-4">🎓</div>
                <h3 class="text-xl font-bold mb-3">Education First</h3>
                <p class="text-gray-400">
                  Comprehensive education over quick profits. Understanding WHY markets move.
                </p>
              </div>
              <div class="card text-center">
                <div class="text-5xl mb-4">💎</div>
                <h3 class="text-xl font-bold mb-3">Transparency</h3>
                <p class="text-gray-400">
                  Real trades, real results, real mistakes. No fake screenshots or promises.
                </p>
              </div>
              <div class="card text-center">
                <div class="text-5xl mb-4">🤝</div>
                <h3 class="text-xl font-bold mb-3">Community</h3>
                <p class="text-gray-400">
                  Supportive community where members learn together and grow together.
                </p>
              </div>
            </div>
            
            <div class="text-center">
              <a href="/waitlist" class="btn btn-primary">Join Our Community</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
})

// FAQ page
app.get('/faq', (c) => {
  return c.render(
    <>
      <section class="hero py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-5xl font-bold mb-6">
            Frequently Asked <span class="gradient-text">Questions</span>
          </h1>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about Futures Trading Academy
          </p>
        </div>
      </section>
      
      <section class="py-20 bg-slate-900">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="space-y-6">
            <div class="card">
              <h3 class="text-xl font-bold mb-3">What is Futures Trading Academy?</h3>
              <p class="text-gray-400">
                A comprehensive online education platform teaching institutional-grade trading strategies 
                for futures markets, focusing on auction market theory, smart money concepts, and CME fair 
                price redelivery.
              </p>
            </div>
            
            <div class="card">
              <h3 class="text-xl font-bold mb-3">Do I need prior trading experience?</h3>
              <p class="text-gray-400">
                No prior experience required. Our Foundation Tier starts with basics and builds progressively.
              </p>
            </div>
            
            <div class="card">
              <h3 class="text-xl font-bold mb-3">How long does it take to complete?</h3>
              <p class="text-gray-400">
                The complete curriculum contains 40+ hours of video content. Most students complete the full 
                program in 3-6 months when studying part-time.
              </p>
            </div>
            
            <div class="card">
              <h3 class="text-xl font-bold mb-3">Is there a money-back guarantee?</h3>
              <p class="text-gray-400">
                Yes, we offer a 14-day money-back guarantee for first-time subscribers. If you're not satisfied 
                with the content quality, we'll provide a full refund.
              </p>
            </div>
          </div>
          
          <div class="text-center mt-12">
            <a href="/waitlist" class="btn btn-primary">Join Waitlist</a>
          </div>
        </div>
      </section>
    </>
  )
})

// Contact page placeholder
app.get('/contact', (c) => {
  return c.render(
    <>
      <section class="py-20 bg-slate-900 min-h-screen flex items-center justify-center">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <h1 class="text-5xl font-bold mb-6">Contact <span class="gradient-text">Us</span></h1>
          <p class="text-xl text-gray-400 mb-8">
            Have questions? Join our waitlist and we'll reach out to you personally.
          </p>
          <a href="/waitlist" class="btn btn-primary">Join Waitlist</a>
        </div>
      </section>
    </>
  )
})

// Legal pages placeholders
app.get('/terms', (c) => c.render(<><section class="py-20 bg-slate-900 min-h-screen flex items-center justify-center"><div class="max-w-4xl mx-auto px-4 text-center"><h1 class="text-5xl font-bold mb-6">Terms of <span class="gradient-text">Service</span></h1><p class="text-gray-400">Coming soon</p></div></section></>))
app.get('/privacy', (c) => c.render(<><section class="py-20 bg-slate-900 min-h-screen flex items-center justify-center"><div class="max-w-4xl mx-auto px-4 text-center"><h1 class="text-5xl font-bold mb-6">Privacy <span class="gradient-text">Policy</span></h1><p class="text-gray-400">Coming soon</p></div></section></>))
app.get('/disclaimer', (c) => c.render(<><section class="py-20 bg-slate-900 min-h-screen flex items-center justify-center"><div class="max-w-4xl mx-auto px-4 text-center"><h1 class="text-5xl font-bold mb-6">Risk <span class="gradient-text">Disclaimer</span></h1><p class="text-gray-400">Trading futures involves substantial risk of loss. Past performance is not indicative of future results.</p></div></section></>))

export default app
