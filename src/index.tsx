import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'
import { enhancedHomePage } from './pages/home-enhanced'
import { enhancedCurriculumPage } from './pages/curriculum-enhanced'
import { enhancedPricingPage } from './pages/pricing-enhanced'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))
app.use('/docs/*', serveStatic({ root: './' }))

// Use renderer for HTML pages
app.use(renderer)

// ==========================================
// HOME PAGE - HIGH-CONVERTING VERSION
// ==========================================
app.get('/', (c) => {
  return c.render(
    enhancedHomePage()
  )
})

// ==========================================
// CURRICULUM PAGE - ENHANCED VERSION
// ==========================================
app.get('/curriculum', (c) => {
  return c.render(
    enhancedCurriculumPage()
  )
})

// ==========================================
// ADDITIONAL ROUTE IMPORTS
// ==========================================

// ==========================================
// PRICING PAGE - ENHANCED VERSION
// ==========================================
app.get('/pricing', (c) => {
  return c.render(
    enhancedPricingPage()
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

// Downloads page
app.get('/downloads', (c) => {
  return c.render(
    <>
      <section class="hero py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-5xl font-bold mb-6">
            Documentation <span class="gradient-text">Downloads</span>
          </h1>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Download comprehensive guides for setup, deployment, and launch strategy
          </p>
        </div>
      </section>
      
      <section class="py-20 bg-slate-900">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-3 gap-8">
            
            {/* README Download */}
            <div class="card text-center">
              <div class="text-6xl mb-4">📘</div>
              <h3 class="text-2xl font-bold mb-3">README</h3>
              <p class="text-gray-400 mb-4 text-sm">
                Complete technical documentation including setup, features, architecture, and deployment instructions.
              </p>
              <div class="text-gray-500 text-sm mb-4">
                <i class="fas fa-file-alt mr-2"></i> 8.8 KB
              </div>
              <a href="https://github.com/YOUR-USERNAME/futures-trading-academy/blob/main/README.md" target="_blank" class="btn btn-primary w-full">
                <i class="fas fa-external-link-alt mr-2"></i>
                View README
              </a>
              <p class="text-gray-500 text-xs mt-2">Available in project root directory</p>
            </div>

            {/* Deployment Guide Download */}
            <div class="card text-center">
              <div class="text-6xl mb-4">🚀</div>
              <h3 class="text-2xl font-bold mb-3">Deployment Guide</h3>
              <p class="text-gray-400 mb-4 text-sm">
                Step-by-step integration guide for external services, setup checklists, and launch day procedures.
              </p>
              <div class="text-gray-500 text-sm mb-4">
                <i class="fas fa-file-alt mr-2"></i> 11.4 KB
              </div>
              <a href="https://github.com/YOUR-USERNAME/futures-trading-academy/blob/main/DEPLOYMENT_GUIDE.md" target="_blank" class="btn btn-gold w-full">
                <i class="fas fa-external-link-alt mr-2"></i>
                View Guide
              </a>
              <p class="text-gray-500 text-xs mt-2">Available in project root directory</p>
            </div>

            {/* Project Summary Download */}
            <div class="card text-center">
              <div class="text-6xl mb-4">📊</div>
              <h3 class="text-2xl font-bold mb-3">Project Summary</h3>
              <p class="text-gray-400 mb-4 text-sm">
                Executive overview with launch strategy, success metrics, cost breakdown, and quick wins checklist.
              </p>
              <div class="text-gray-500 text-sm mb-4">
                <i class="fas fa-file-alt mr-2"></i> 10.4 KB
              </div>
              <a href="https://github.com/YOUR-USERNAME/futures-trading-academy/blob/main/PROJECT_SUMMARY.md" target="_blank" class="btn btn-secondary w-full">
                <i class="fas fa-external-link-alt mr-2"></i>
                View Summary
              </a>
              <p class="text-gray-500 text-xs mt-2">Available in project root directory</p>
            </div>

          </div>

          {/* GitHub Repository Info */}
          <div class="text-center mt-12">
            <div class="card bg-blue-900/20 border-blue-500/30">
              <div class="mb-4">
                <i class="fas fa-info-circle text-4xl text-blue-400"></i>
              </div>
              <h3 class="text-xl font-bold mb-3">How to Access Documentation</h3>
              <p class="text-gray-300 mb-4">
                All documentation files are included in the project root directory when you clone or deploy this project.
              </p>
              <div class="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                <div class="bg-slate-800 p-4 rounded-lg">
                  <h4 class="font-bold mb-2 text-blue-400">
                    <i class="fas fa-folder mr-2"></i>Local Access
                  </h4>
                  <p class="text-sm text-gray-400">
                    Files are in your project root:
                  </p>
                  <code class="text-xs bg-slate-900 p-2 block mt-2 rounded">
                    webapp/README.md<br/>
                    webapp/DEPLOYMENT_GUIDE.md<br/>
                    webapp/PROJECT_SUMMARY.md
                  </code>
                </div>
                <div class="bg-slate-800 p-4 rounded-lg">
                  <h4 class="font-bold mb-2 text-green-400">
                    <i class="fab fa-github mr-2"></i>GitHub Access
                  </h4>
                  <p class="text-sm text-gray-400">
                    View online after pushing to GitHub:
                  </p>
                  <a href="https://github.com" target="_blank" class="text-xs text-blue-400 hover:underline block mt-2">
                    github.com/your-repo →
                  </a>
                </div>
              </div>
              <p class="text-gray-500 text-sm mt-4">
                All files are in Markdown format (.md) - open with any text editor, VS Code, or online Markdown viewer
              </p>
            </div>
          </div>

          {/* Documentation Overview */}
          <div class="card mt-12">
            <h3 class="text-2xl font-bold mb-6 text-center">What's Included</h3>
            <div class="grid md:grid-cols-3 gap-6">
              <div>
                <h4 class="font-bold mb-2 text-blue-400">README.md</h4>
                <ul class="text-sm text-gray-400 space-y-1">
                  <li>• Project overview</li>
                  <li>• Tech stack details</li>
                  <li>• Setup instructions</li>
                  <li>• Available scripts</li>
                  <li>• Architecture info</li>
                  <li>• Performance notes</li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold mb-2 text-yellow-400">DEPLOYMENT_GUIDE.md</h4>
                <ul class="text-sm text-gray-400 space-y-1">
                  <li>• Service integration</li>
                  <li>• Setup checklists</li>
                  <li>• API configurations</li>
                  <li>• Launch day plan</li>
                  <li>• Marketing strategy</li>
                  <li>• Troubleshooting</li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold mb-2 text-green-400">PROJECT_SUMMARY.md</h4>
                <ul class="text-sm text-gray-400 space-y-1">
                  <li>• Executive overview</li>
                  <li>• Cost breakdown</li>
                  <li>• Success metrics</li>
                  <li>• Quick wins list</li>
                  <li>• Iteration plan</li>
                  <li>• Launch strategy</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div class="card mt-8 bg-blue-900/20 border-blue-500/30">
            <div class="flex items-start">
              <div class="text-3xl mr-4">💡</div>
              <div>
                <h4 class="font-bold mb-2">Need Help?</h4>
                <p class="text-gray-400 text-sm">
                  Start with the <strong>README.md</strong> for technical setup, then follow the 
                  <strong>DEPLOYMENT_GUIDE.md</strong> for integration. Use <strong>PROJECT_SUMMARY.md</strong> 
                  for business strategy and launch planning.
                </p>
              </div>
            </div>
          </div>

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
