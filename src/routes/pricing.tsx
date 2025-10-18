import { Hono } from 'hono'

const pricing = new Hono()

pricing.get('/', (c) => {
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

    <section class="hero py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h1 class="text-5xl md:text-6xl font-bold mb-6">
                    Choose Your <span class="gradient-text">Learning Path</span>
                </h1>
                <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                    From foundation to professional trading, select the tier that matches your goals
                </p>
            </div>
        </div>
    </section>

    <section id="pricing" class="py-20 bg-slate-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                <!-- Foundation Tier -->
                <div class="pricing-card card">
                    <span class="badge badge-blue mb-4">Foundation</span>
                    <h3 class="text-2xl font-bold mb-2">Foundation Tier</h3>
                    <div class="mb-6">
                        <div class="text-4xl font-bold gradient-text">$97</div>
                        <div class="text-gray-400">per month</div>
                    </div>
                    <ul class="space-y-3 mb-8 text-gray-300">
                        <li><i class="fas fa-check text-green-500 mr-2"></i> Access to Campus 1 & 2</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i> Video lectures & materials</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i> Community Discord access</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i> Basic trading tools</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i> Monthly group Q&A</li>
                        <li class="text-gray-500"><i class="fas fa-times mr-2"></i> Live trading sessions</li>
                        <li class="text-gray-500"><i class="fas fa-times mr-2"></i> 1-on-1 coaching</li>
                    </ul>
                    <a href="https://buy.stripe.com/test_FOUNDATION" target="_blank" class="btn btn-secondary w-full text-center">
                        Get Started
                    </a>
                </div>

                <!-- Professional Tier -->
                <div class="pricing-card card featured">
                    <div class="featured-badge">POPULAR</div>
                    <span class="badge badge-gold mb-4">Professional</span>
                    <h3 class="text-2xl font-bold mb-2">Professional Tier</h3>
                    <div class="mb-6">
                        <div class="text-4xl font-bold gradient-text">$197</div>
                        <div class="text-gray-400">per month</div>
                    </div>
                    <ul class="space-y-3 mb-8 text-gray-300">
                        <li><i class="fas fa-check text-green-500 mr-2"></i> Everything in Foundation</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i> All 4 campuses access</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i> 3x weekly live sessions</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i> Premium trading signals</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i> Mentor chat support</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i> Advanced analytics tools</li>
                        <li class="text-gray-500"><i class="fas fa-times mr-2"></i> 1-on-1 coaching</li>
                    </ul>
                    <a href="https://buy.stripe.com/test_PROFESSIONAL" target="_blank" class="btn btn-gold w-full text-center">
                        Start Professional
                    </a>
                </div>

                <!-- Elite Tier -->
                <div class="pricing-card card">
                    <span class="badge badge-green mb-4">Elite</span>
                    <h3 class="text-2xl font-bold mb-2">Elite Tier</h3>
                    <div class="mb-6">
                        <div class="text-4xl font-bold gradient-text">$497</div>
                        <div class="text-gray-400">per month</div>
                    </div>
                    <ul class="space-y-3 mb-8 text-gray-300">
                        <li><i class="fas fa-check text-green-500 mr-2"></i> Everything in Professional</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i> Weekly 1-on-1 coaching</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i> Monthly mastermind calls</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i> Prop firm placement help</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i> Priority support 24/7</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i> Advanced signal access</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i> Job board access</li>
                    </ul>
                    <a href="https://buy.stripe.com/test_ELITE" target="_blank" class="btn btn-primary w-full text-center">
                        Go Elite
                    </a>
                </div>

                <!-- Business Partner Tier -->
                <div class="pricing-card card">
                    <span class="badge badge-gold mb-4">Business</span>
                    <h3 class="text-2xl font-bold mb-2">Business Partner</h3>
                    <div class="mb-6">
                        <div class="text-4xl font-bold gradient-text">$997</div>
                        <div class="text-gray-400">per month</div>
                    </div>
                    <ul class="space-y-3 mb-8 text-gray-300">
                        <li><i class="fas fa-check text-green-500 mr-2"></i> Everything in Elite</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i> Revenue sharing program</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i> White-label licensing</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i> Business mentorship</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i> Equity participation</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i> Strategic partnerships</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i> Executive network access</li>
                    </ul>
                    <a href="/contact" class="btn btn-secondary w-full text-center">
                        Contact Us
                    </a>
                </div>
            </div>

            <!-- Comparison Table -->
            <div class="mt-20">
                <h2 class="text-3xl font-bold text-center mb-12">Feature Comparison</h2>
                <div class="card overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr class="border-b border-gray-700">
                                <th class="text-left py-4 px-4">Feature</th>
                                <th class="text-center py-4 px-4">Foundation</th>
                                <th class="text-center py-4 px-4">Professional</th>
                                <th class="text-center py-4 px-4">Elite</th>
                                <th class="text-center py-4 px-4">Business</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-300">
                            <tr class="border-b border-gray-800">
                                <td class="py-4 px-4">Campus 1 & 2 Access</td>
                                <td class="text-center"><i class="fas fa-check text-green-500"></i></td>
                                <td class="text-center"><i class="fas fa-check text-green-500"></i></td>
                                <td class="text-center"><i class="fas fa-check text-green-500"></i></td>
                                <td class="text-center"><i class="fas fa-check text-green-500"></i></td>
                            </tr>
                            <tr class="border-b border-gray-800">
                                <td class="py-4 px-4">All 4 Campuses</td>
                                <td class="text-center"><i class="fas fa-times text-gray-600"></i></td>
                                <td class="text-center"><i class="fas fa-check text-green-500"></i></td>
                                <td class="text-center"><i class="fas fa-check text-green-500"></i></td>
                                <td class="text-center"><i class="fas fa-check text-green-500"></i></td>
                            </tr>
                            <tr class="border-b border-gray-800">
                                <td class="py-4 px-4">Live Trading Sessions</td>
                                <td class="text-center">-</td>
                                <td class="text-center">3x weekly</td>
                                <td class="text-center">3x weekly</td>
                                <td class="text-center">3x weekly</td>
                            </tr>
                            <tr class="border-b border-gray-800">
                                <td class="py-4 px-4">1-on-1 Coaching</td>
                                <td class="text-center">-</td>
                                <td class="text-center">-</td>
                                <td class="text-center">Weekly</td>
                                <td class="text-center">Weekly</td>
                            </tr>
                            <tr class="border-b border-gray-800">
                                <td class="py-4 px-4">Trading Signals</td>
                                <td class="text-center">-</td>
                                <td class="text-center">Premium</td>
                                <td class="text-center">Advanced</td>
                                <td class="text-center">Advanced</td>
                            </tr>
                            <tr class="border-b border-gray-800">
                                <td class="py-4 px-4">Prop Firm Placement</td>
                                <td class="text-center">-</td>
                                <td class="text-center">-</td>
                                <td class="text-center"><i class="fas fa-check text-green-500"></i></td>
                                <td class="text-center"><i class="fas fa-check text-green-500"></i></td>
                            </tr>
                            <tr class="border-b border-gray-800">
                                <td class="py-4 px-4">Revenue Sharing</td>
                                <td class="text-center">-</td>
                                <td class="text-center">-</td>
                                <td class="text-center">-</td>
                                <td class="text-center"><i class="fas fa-check text-green-500"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- FAQ Section -->
            <div class="mt-20">
                <h2 class="text-3xl font-bold text-center mb-12">Pricing FAQs</h2>
                <div class="max-w-3xl mx-auto space-y-4">
                    <div class="card">
                        <h3 class="text-xl font-bold mb-2">Can I upgrade or downgrade my tier?</h3>
                        <p class="text-gray-400">Yes, you can change your subscription tier at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle.</p>
                    </div>
                    <div class="card">
                        <h3 class="text-xl font-bold mb-2">Is there a money-back guarantee?</h3>
                        <p class="text-gray-400">We offer a 14-day money-back guarantee for first-time subscribers. If you're not satisfied with the content, we'll provide a full refund.</p>
                    </div>
                    <div class="card">
                        <h3 class="text-xl font-bold mb-2">What payment methods do you accept?</h3>
                        <p class="text-gray-400">We accept all major credit cards, PayPal, and cryptocurrency payments through our secure payment processor.</p>
                    </div>
                    <div class="card">
                        <h3 class="text-xl font-bold mb-2">How long do I have access to the content?</h3>
                        <p class="text-gray-400">You have access to all content for as long as your subscription is active. Downloaded materials and certifications remain yours forever.</p>
                    </div>
                </div>
            </div>

            <!-- CTA -->
            <div class="text-center mt-16">
                <h3 class="text-2xl font-bold mb-4">Still have questions?</h3>
                <a href="/contact" class="btn btn-primary">Contact Our Team</a>
            </div>
        </div>
    </section>

    <footer class="bg-slate-950 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center text-gray-400">
                <p>&copy; 2025 Futures Trading Academy. All rights reserved.</p>
                <div class="mt-4 space-x-6">
                    <a href="/terms" class="hover:text-white">Terms</a>
                    <a href="/privacy" class="hover:text-white">Privacy</a>
                    <a href="/contact" class="hover:text-white">Contact</a>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>`
  )
})

export { pricing }
