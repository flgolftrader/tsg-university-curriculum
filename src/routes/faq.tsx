import { Hono } from 'hono'

const faq = new Hono()

faq.get('/', (c) => {
  return c.html(
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FAQ - Futures Trading Academy</title>
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
                <a href="/about" class="text-gray-300 hover:text-white">About</a>
                <a href="/faq" class="text-white font-semibold">FAQ</a>
            </div>
            <a href="/waitlist" class="btn btn-primary">Join Waitlist</a>
        </div>
    </nav>

    <section class="hero py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h1 class="text-5xl md:text-6xl font-bold mb-6">
                    Frequently Asked <span class="gradient-text">Questions</span>
                </h1>
                <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                    Everything you need to know about Futures Trading Academy
                </p>
            </div>
        </div>
    </section>

    <section class="py-20 bg-slate-900">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <!-- General Questions -->
            <div class="mb-16">
                <h2 class="text-3xl font-bold mb-8 text-center">General Questions</h2>
                <div class="space-y-4">
                    
                    <div class="card">
                        <h3 class="text-xl font-bold mb-3">
                            <i class="fas fa-question-circle text-blue-400 mr-2"></i>
                            What is Futures Trading Academy?
                        </h3>
                        <p class="text-gray-400">
                            Futures Trading Academy is a comprehensive online education platform that teaches 
                            institutional-grade trading strategies for futures markets. We focus on three main 
                            methodologies: Auction Market Theory, Smart Money Concepts, and CME Fair Price Redelivery.
                        </p>
                    </div>

                    <div class="card">
                        <h3 class="text-xl font-bold mb-3">
                            <i class="fas fa-question-circle text-blue-400 mr-2"></i>
                            Who is this course for?
                        </h3>
                        <p class="text-gray-400 mb-2">This course is designed for:</p>
                        <ul class="text-gray-400 space-y-1 ml-6">
                            <li>• Beginner traders wanting a solid foundation</li>
                            <li>• Intermediate traders looking to advance their skills</li>
                            <li>• Experienced traders seeking institutional strategies</li>
                            <li>• Anyone interested in futures market mechanics</li>
                        </ul>
                    </div>

                    <div class="card">
                        <h3 class="text-xl font-bold mb-3">
                            <i class="fas fa-question-circle text-blue-400 mr-2"></i>
                            Do I need prior trading experience?
                        </h3>
                        <p class="text-gray-400">
                            No prior experience is required. Our Foundation Tier starts with the basics and builds 
                            progressively. However, having basic market knowledge will help you progress faster through 
                            the material.
                        </p>
                    </div>

                    <div class="card">
                        <h3 class="text-xl font-bold mb-3">
                            <i class="fas fa-question-circle text-blue-400 mr-2"></i>
                            What markets does this apply to?
                        </h3>
                        <p class="text-gray-400">
                            Our curriculum focuses on CME futures markets (ES, NQ, YM, RTY, CL, GC, etc.), but the 
                            concepts apply to any liquid futures market. The methodologies also translate well to 
                            forex and cryptocurrency markets.
                        </p>
                    </div>

                </div>
            </div>

            <!-- Course Content -->
            <div class="mb-16">
                <h2 class="text-3xl font-bold mb-8 text-center">Course Content</h2>
                <div class="space-y-4">
                    
                    <div class="card">
                        <h3 class="text-xl font-bold mb-3">
                            <i class="fas fa-graduation-cap text-green-400 mr-2"></i>
                            How long does it take to complete the curriculum?
                        </h3>
                        <p class="text-gray-400">
                            The complete curriculum contains 40+ hours of video content across 4 campuses. Most students 
                            complete the full program in 3-6 months when studying part-time. However, you have lifetime 
                            access and can learn at your own pace.
                        </p>
                    </div>

                    <div class="card">
                        <h3 class="text-xl font-bold mb-3">
                            <i class="fas fa-graduation-cap text-green-400 mr-2"></i>
                            Is the content pre-recorded or live?
                        </h3>
                        <p class="text-gray-400">
                            The core curriculum is pre-recorded high-quality video lectures that you can watch anytime. 
                            Professional and Elite tier members also get access to 3x weekly live trading sessions and 
                            real-time market analysis.
                        </p>
                    </div>

                    <div class="card">
                        <h3 class="text-xl font-bold mb-3">
                            <i class="fas fa-graduation-cap text-green-400 mr-2"></i>
                            What software or tools do I need?
                        </h3>
                        <p class="text-gray-400 mb-2">You'll need:</p>
                        <ul class="text-gray-400 space-y-1 ml-6">
                            <li>• A charting platform (TradingView, NinjaTrader, or Sierra Chart recommended)</li>
                            <li>• Volume profile and market profile indicators (provided)</li>
                            <li>• Paper trading account for practice (free with most platforms)</li>
                            <li>• Optional: Real futures trading account when ready</li>
                        </ul>
                    </div>

                    <div class="card">
                        <h3 class="text-xl font-bold mb-3">
                            <i class="fas fa-graduation-cap text-green-400 mr-2"></i>
                            Do I get a certificate?
                        </h3>
                        <p class="text-gray-400">
                            Yes! Upon completing each campus, you receive a certificate of completion. Completing all 
                            4 campuses earns you a Master Trader Certification, which can be valuable for job applications 
                            at prop firms.
                        </p>
                    </div>

                </div>
            </div>

            <!-- Pricing & Subscriptions -->
            <div class="mb-16">
                <h2 class="text-3xl font-bold mb-8 text-center">Pricing & Subscriptions</h2>
                <div class="space-y-4">
                    
                    <div class="card">
                        <h3 class="text-xl font-bold mb-3">
                            <i class="fas fa-credit-card text-yellow-400 mr-2"></i>
                            What payment methods do you accept?
                        </h3>
                        <p class="text-gray-400">
                            We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and cryptocurrency 
                            payments through our secure payment processor Stripe.
                        </p>
                    </div>

                    <div class="card">
                        <h3 class="text-xl font-bold mb-3">
                            <i class="fas fa-credit-card text-yellow-400 mr-2"></i>
                            Can I cancel my subscription anytime?
                        </h3>
                        <p class="text-gray-400">
                            Yes, you can cancel your subscription at any time. You'll continue to have access until 
                            the end of your current billing period. There are no cancellation fees or penalties.
                        </p>
                    </div>

                    <div class="card">
                        <h3 class="text-xl font-bold mb-3">
                            <i class="fas fa-credit-card text-yellow-400 mr-2"></i>
                            Is there a money-back guarantee?
                        </h3>
                        <p class="text-gray-400">
                            Yes, we offer a 14-day money-back guarantee for first-time subscribers. If you're not 
                            satisfied with the content quality within the first 14 days, we'll provide a full refund, 
                            no questions asked.
                        </p>
                    </div>

                    <div class="card">
                        <h3 class="text-xl font-bold mb-3">
                            <i class="fas fa-credit-card text-yellow-400 mr-2"></i>
                            Can I upgrade or downgrade my tier?
                        </h3>
                        <p class="text-gray-400">
                            Absolutely! You can upgrade your tier at any time and it takes effect immediately. 
                            Downgrades take effect at the next billing cycle so you don't lose any paid benefits.
                        </p>
                    </div>

                    <div class="card">
                        <h3 class="text-xl font-bold mb-3">
                            <i class="fas fa-credit-card text-yellow-400 mr-2"></i>
                            Are there any annual plans or discounts?
                        </h3>
                        <p class="text-gray-400">
                            Yes! We offer annual plans with significant discounts (typically 2 months free when paying 
                            annually). We also run periodic promotions for founding members and holidays. Join the 
                            waitlist to be notified of special offers.
                        </p>
                    </div>

                </div>
            </div>

            <!-- Support & Community -->
            <div class="mb-16">
                <h2 class="text-3xl font-bold mb-8 text-center">Support & Community</h2>
                <div class="space-y-4">
                    
                    <div class="card">
                        <h3 class="text-xl font-bold mb-3">
                            <i class="fas fa-users text-purple-400 mr-2"></i>
                            What kind of support do I get?
                        </h3>
                        <p class="text-gray-400 mb-2">Support varies by tier:</p>
                        <ul class="text-gray-400 space-y-1 ml-6">
                            <li>• <strong>Foundation:</strong> Community Discord support, monthly group Q&A</li>
                            <li>• <strong>Professional:</strong> + Mentor chat support, priority response</li>
                            <li>• <strong>Elite:</strong> + Weekly 1-on-1 coaching, 24/7 priority support</li>
                            <li>• <strong>Business:</strong> + Direct access to founders, strategic guidance</li>
                        </ul>
                    </div>

                    <div class="card">
                        <h3 class="text-xl font-bold mb-3">
                            <i class="fas fa-users text-purple-400 mr-2"></i>
                            Is there a community aspect?
                        </h3>
                        <p class="text-gray-400">
                            Yes! All members get access to our private Discord community where you can interact with 
                            other traders, share chart analysis, ask questions, and participate in trading competitions. 
                            The community is active 24/7 across all time zones.
                        </p>
                    </div>

                    <div class="card">
                        <h3 class="text-xl font-bold mb-3">
                            <i class="fas fa-users text-purple-400 mr-2"></i>
                            Can I get help with my personal trades?
                        </h3>
                        <p class="text-gray-400">
                            Elite and Business tier members receive weekly 1-on-1 coaching calls where you can review 
                            your trades, get personalized feedback, and work on specific challenges. Professional tier 
                            members can submit questions via mentor chat for personalized guidance.
                        </p>
                    </div>

                </div>
            </div>

            <!-- Job Placement -->
            <div class="mb-16">
                <h2 class="text-3xl font-bold mb-8 text-center">Career & Job Placement</h2>
                <div class="space-y-4">
                    
                    <div class="card">
                        <h3 class="text-xl font-bold mb-3">
                            <i class="fas fa-briefcase text-red-400 mr-2"></i>
                            Do you help with job placement?
                        </h3>
                        <p class="text-gray-400">
                            Yes! Elite and Business tier members get access to our exclusive job board featuring 
                            positions at proprietary trading firms, hedge funds, and financial institutions. We also 
                            provide prop firm interview preparation and placement assistance.
                        </p>
                    </div>

                    <div class="card">
                        <h3 class="text-xl font-bold mb-3">
                            <i class="fas fa-briefcase text-red-400 mr-2"></i>
                            What is the success rate for job placement?
                        </h3>
                        <p class="text-gray-400">
                            Over 70% of Elite tier members who actively pursue prop firm opportunities receive funded 
                            accounts within 6 months of certification. We've placed 150+ traders at various firms and 
                            maintain strong relationships with hiring managers.
                        </p>
                    </div>

                    <div class="card">
                        <h3 class="text-xl font-bold mb-3">
                            <i class="fas fa-briefcase text-red-400 mr-2"></i>
                            Can I trade for the academy?
                        </h3>
                        <p class="text-gray-400">
                            We have a selective proprietary trading program for exceptional students. After certification 
                            and demonstrating consistent profitability, you may be invited to trade firm capital with 
                            profit sharing arrangements. Contact us for more information.
                        </p>
                    </div>

                </div>
            </div>

            <!-- Technical Questions -->
            <div class="mb-16">
                <h2 class="text-3xl font-bold mb-8 text-center">Technical Questions</h2>
                <div class="space-y-4">
                    
                    <div class="card">
                        <h3 class="text-xl font-bold mb-3">
                            <i class="fas fa-laptop text-blue-400 mr-2"></i>
                            What devices can I use to access the platform?
                        </h3>
                        <p class="text-gray-400">
                            Our platform works on any device with a modern web browser: Windows, Mac, Linux, tablets, 
                            and smartphones. We also have mobile apps for iOS and Android for learning on the go.
                        </p>
                    </div>

                    <div class="card">
                        <h3 class="text-xl font-bold mb-3">
                            <i class="fas fa-laptop text-blue-400 mr-2"></i>
                            Can I download the videos?
                        </h3>
                        <p class="text-gray-400">
                            Video downloads are available for Professional tier and above. Foundation tier members can 
                            stream all content but downloading requires an upgrade. All supporting materials (PDFs, 
                            spreadsheets) are downloadable for all tiers.
                        </p>
                    </div>

                    <div class="card">
                        <h3 class="text-xl font-bold mb-3">
                            <i class="fas fa-laptop text-blue-400 mr-2"></i>
                            Is there a student limit or capacity?
                        </h3>
                        <p class="text-gray-400">
                            To maintain quality support and community interaction, we cap Elite tier membership at 
                            100 active members. Foundation and Professional tiers have no capacity limits. Business 
                            Partner tier is limited to 25 members.
                        </p>
                    </div>

                </div>
            </div>

            <!-- Still have questions? -->
            <div class="card text-center">
                <h2 class="text-3xl font-bold mb-4">Still Have Questions?</h2>
                <p class="text-gray-400 mb-6">
                    Can't find the answer you're looking for? Our support team is here to help.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/contact" class="btn btn-primary">
                        <i class="fas fa-envelope mr-2"></i>
                        Contact Support
                    </a>
                    <a href="/waitlist" class="btn btn-secondary">
                        <i class="fas fa-user-plus mr-2"></i>
                        Join Waitlist
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

export { faq }
