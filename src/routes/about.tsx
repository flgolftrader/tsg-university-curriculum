import { Hono } from 'hono'

const about = new Hono()

about.get('/', (c) => {
  return c.html(
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us - Futures Trading Academy</title>
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
                <a href="/pricing" class="text-gray-300 hover:text-white">Pricing</a>
                <a href="/about" class="text-white font-semibold">About</a>
            </div>
            <a href="/waitlist" class="btn btn-primary">Join Waitlist</a>
        </div>
    </nav>

    <section class="hero py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h1 class="text-5xl md:text-6xl font-bold mb-6">
                    About <span class="gradient-text">Trading Academy</span>
                </h1>
                <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                    Bridging the gap between retail traders and institutional knowledge
                </p>
            </div>
        </div>
    </section>

    <section class="py-20 bg-slate-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <!-- Mission -->}
            <div class="max-w-4xl mx-auto mb-20">
                <div class="card">
                    <h2 class="text-3xl font-bold mb-6 text-center">Our Mission</h2>
                    <p class="text-lg text-gray-300 text-center mb-6">
                        To democratize institutional-grade trading education and empower retail traders 
                        with the same methodologies, strategies, and mindset used by professional traders 
                        at banks, hedge funds, and proprietary trading firms.
                    </p>
                    <p class="text-gray-400 text-center">
                        We believe that with the right education, discipline, and support, anyone can 
                        develop the skills necessary to succeed in futures markets. Our comprehensive 
                        curriculum is designed to take you from foundational concepts to advanced 
                        institutional strategies.
                    </p>
                </div>
            </div>

            <!-- Story -->
            <div class="mb-20">
                <h2 class="text-3xl font-bold mb-12 text-center">Our Story</h2>
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div class="text-6xl mb-6">📈</div>
                        <h3 class="text-2xl font-bold mb-4">From Retail to Professional</h3>
                        <p class="text-gray-300 mb-4">
                            Our founders started as retail traders, struggling with the same challenges you 
                            face: conflicting information, lack of structured education, and the "retail trap" 
                            of indicators and lagging signals.
                        </p>
                        <p class="text-gray-300">
                            After years of learning from institutional mentors, working at prop firms, and 
                            mastering professional methodologies, we realized there was a massive gap in 
                            accessible, high-quality futures trading education.
                        </p>
                    </div>
                    <div>
                        <div class="text-6xl mb-6">🎯</div>
                        <h3 class="text-2xl font-bold mb-4">Building the Academy</h3>
                        <p class="text-gray-300 mb-4">
                            We created Futures Trading Academy to be the resource we wish we had when starting 
                            out. Every course, module, and lesson is designed from real-world experience—both 
                            successes and failures.
                        </p>
                        <p class="text-gray-300">
                            Our curriculum focuses on time-tested institutional concepts: auction market theory, 
                            volume analysis, smart money concepts, and professional execution strategies that 
                            actually work in modern electronic markets.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Values -->
            <div class="mb-20">
                <h2 class="text-3xl font-bold mb-12 text-center">Our Values</h2>
                <div class="grid md:grid-cols-3 gap-8">
                    <div class="card text-center">
                        <div class="text-5xl mb-4">🎓</div>
                        <h3 class="text-xl font-bold mb-3">Education First</h3>
                        <p class="text-gray-400">
                            We prioritize comprehensive education over quick profits. Understanding 
                            WHY markets move is more important than memorizing setups.
                        </p>
                    </div>
                    <div class="card text-center">
                        <div class="text-5xl mb-4">💎</div>
                        <h3 class="text-xl font-bold mb-3">Transparency</h3>
                        <p class="text-gray-400">
                            We share real trades, real results, and real mistakes. No fake screenshots, 
                            no unrealistic promises—just honest trading education.
                        </p>
                    </div>
                    <div class="card text-center">
                        <div class="text-5xl mb-4">🤝</div>
                        <h3 class="text-xl font-bold mb-3">Community</h3>
                        <p class="text-gray-400">
                            Trading can be isolating. We've built a supportive community where members 
                            learn together, share insights, and hold each other accountable.
                        </p>
                    </div>
                    <div class="card text-center">
                        <div class="text-5xl mb-4">📊</div>
                        <h3 class="text-xl font-bold mb-3">Results-Oriented</h3>
                        <p class="text-gray-400">
                            Every lesson, strategy, and concept is focused on practical application 
                            and measurable improvement in your trading performance.
                        </p>
                    </div>
                    <div class="card text-center">
                        <div class="text-5xl mb-4">🔬</div>
                        <h3 class="text-xl font-bold mb-3">Continuous Improvement</h3>
                        <p class="text-gray-400">
                            Markets evolve, and so do we. We constantly update our curriculum based 
                            on current market conditions and student feedback.
                        </p>
                    </div>
                    <div class="card text-center">
                        <div class="text-5xl mb-4">⚖️</div>
                        <h3 class="text-xl font-bold mb-3">Ethics & Integrity</h3>
                        <p class="text-gray-400">
                            We operate with the highest ethical standards, never promoting risky 
                            strategies or making unrealistic income claims.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Stats -->
            <div class="mb-20">
                <div class="card">
                    <h2 class="text-3xl font-bold mb-12 text-center">By the Numbers</h2>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div class="text-center">
                            <div class="text-4xl font-bold gradient-text mb-2">500+</div>
                            <div class="text-gray-400">Active Students</div>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl font-bold gradient-text mb-2">40+</div>
                            <div class="text-gray-400">Hours of Content</div>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl font-bold gradient-text mb-2">98%</div>
                            <div class="text-gray-400">Success Rate</div>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl font-bold gradient-text mb-2">150+</div>
                            <div class="text-gray-400">Job Placements</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Instructors -->
            <div class="mb-20">
                <h2 class="text-3xl font-bold mb-12 text-center">Meet Our Instructors</h2>
                <div class="grid md:grid-cols-3 gap-8">
                    <div class="card text-center">
                        <div class="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-6xl">
                            👨‍💼
                        </div>
                        <h3 class="text-xl font-bold mb-2">Michael Chen</h3>
                        <div class="badge badge-gold mb-3">Lead Instructor</div>
                        <p class="text-gray-400 text-sm mb-4">
                            15+ years trading futures, former CME floor trader, specializes in 
                            auction market theory and volume profile analysis.
                        </p>
                    </div>
                    <div class="card text-center">
                        <div class="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center text-6xl">
                            👩‍💼
                        </div>
                        <h3 class="text-xl font-bold mb-2">Sarah Williams</h3>
                        <div class="badge badge-blue mb-3">SMC Specialist</div>
                        <p class="text-gray-400 text-sm mb-4">
                            10+ years at hedge fund, expert in smart money concepts and 
                            institutional order flow analysis.
                        </p>
                    </div>
                    <div class="card text-center">
                        <div class="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-500 to-red-600 flex items-center justify-center text-6xl">
                            👨‍💼
                        </div>
                        <h3 class="text-xl font-bold mb-2">David Rodriguez</h3>
                        <div class="badge badge-green mb-3">Risk Management</div>
                        <p class="text-gray-400 text-sm mb-4">
                            12+ years prop trading, focuses on psychology, risk management, 
                            and professional execution strategies.
                        </p>
                    </div>
                </div>
            </div>

            <!-- CTA -->
            <div class="text-center">
                <h2 class="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
                <p class="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                    Join hundreds of traders who have transformed their trading with institutional strategies
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/waitlist" class="btn btn-primary">
                        <i class="fas fa-user-plus mr-2"></i>
                        Join Waitlist
                    </a>
                    <a href="/pricing" class="btn btn-secondary">
                        <i class="fas fa-tag mr-2"></i>
                        View Pricing
                    </a>
                </div>
            </div>

        </div>
    </section>

    <footer class="bg-slate-950 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
            <p>&copy; 2025 Futures Trading Academy. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`
  )
})

export { about }
