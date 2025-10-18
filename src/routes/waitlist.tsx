import { Hono } from 'hono'

const waitlist = new Hono()

// Waitlist page (GET)
waitlist.get('/', (c) => {
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
            <div class="hidden md:flex space-x-6">
                <a href="/" class="text-gray-300 hover:text-white">Home</a>
                <a href="/curriculum" class="text-gray-300 hover:text-white">Curriculum</a>
                <a href="/pricing" class="text-gray-300 hover:text-white">Pricing</a>
                <a href="/about" class="text-gray-300 hover:text-white">About</a>
            </div>
            <a href="/waitlist" class="btn btn-primary">Join Waitlist</a>
        </div>
    </nav>

    <section class="py-20 bg-slate-900">
        <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">
                    Join the <span class="gradient-text">Waitlist</span>
                </h1>
                <p class="text-xl text-gray-400">
                    Be the first to know when we launch new features and exclusive content
                </p>
            </div>

            <div class="card">
                <div id="success-message" class="hidden alert alert-success mb-6">
                    <i class="fas fa-check-circle mr-2"></i>
                    Thank you! You've been added to our waitlist. Check your email for confirmation.
                </div>

                <form id="waitlist-form" class="space-y-6">
                    <div>
                        <label class="block text-sm font-semibold mb-2">First Name *</label>
                        <input 
                            type="text" 
                            name="first_name" 
                            required 
                            placeholder="John"
                            class="w-full"
                        />
                    </div>

                    <div>
                        <label class="block text-sm font-semibold mb-2">Last Name *</label>
                        <input 
                            type="text" 
                            name="last_name" 
                            required 
                            placeholder="Doe"
                            class="w-full"
                        />
                    </div>

                    <div>
                        <label class="block text-sm font-semibold mb-2">Email Address *</label>
                        <input 
                            type="email" 
                            name="email" 
                            required 
                            placeholder="john@example.com"
                            class="w-full"
                        />
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

                    <div>
                        <label class="block text-sm font-semibold mb-2">Which tier interests you?</label>
                        <select name="tier" class="w-full">
                            <option value="">Select a tier...</option>
                            <option value="foundation">Foundation ($97/mo)</option>
                            <option value="professional">Professional ($197/mo)</option>
                            <option value="elite">Elite ($497/mo)</option>
                            <option value="business">Business Partner ($997/mo)</option>
                        </select>
                    </div>

                    <div>
                        <label class="block text-sm font-semibold mb-2">What are your trading goals?</label>
                        <textarea 
                            name="goals" 
                            rows="4" 
                            placeholder="Tell us about your trading goals and what you hope to achieve..."
                            class="w-full"
                        ></textarea>
                    </div>

                    <div class="flex items-start">
                        <input 
                            type="checkbox" 
                            name="marketing_consent" 
                            id="marketing_consent"
                            class="mt-1 mr-3"
                        />
                        <label for="marketing_consent" class="text-sm text-gray-400">
                            I agree to receive marketing emails and updates about Futures Trading Academy. 
                            You can unsubscribe at any time.
                        </label>
                    </div>

                    <button type="submit" class="btn btn-primary w-full text-center">
                        <i class="fas fa-paper-plane mr-2"></i>
                        Join Waitlist
                    </button>

                    <p class="text-xs text-gray-500 text-center">
                        By submitting this form, you agree to our 
                        <a href="/terms" class="text-blue-400 hover:underline">Terms of Service</a> and 
                        <a href="/privacy" class="text-blue-400 hover:underline">Privacy Policy</a>
                    </p>
                </form>
            </div>

            <!-- Benefits Section -->
            <div class="mt-16">
                <h2 class="text-2xl font-bold text-center mb-8">Waitlist Benefits</h2>
                <div class="grid md:grid-cols-3 gap-6">
                    <div class="card text-center">
                        <div class="text-4xl mb-4">🎁</div>
                        <h3 class="font-bold mb-2">Early Access</h3>
                        <p class="text-gray-400 text-sm">
                            Get exclusive early access to new courses and content before public launch
                        </p>
                    </div>
                    <div class="card text-center">
                        <div class="text-4xl mb-4">💰</div>
                        <h3 class="font-bold mb-2">Special Pricing</h3>
                        <p class="text-gray-400 text-sm">
                            Receive exclusive founding member discounts and lifetime pricing locks
                        </p>
                    </div>
                    <div class="card text-center">
                        <div class="text-4xl mb-4">🎯</div>
                        <h3 class="font-bold mb-2">Free Resources</h3>
                        <p class="text-gray-400 text-sm">
                            Access free trading guides, cheat sheets, and educational materials
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="bg-slate-950 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
            <p>&copy; 2025 Futures Trading Academy. All rights reserved.</p>
        </div>
    </footer>

    <script>
        document.getElementById('waitlist-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            
            try {
                const response = await fetch('/api/waitlist', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                
                if (response.ok) {
                    document.getElementById('success-message').classList.remove('hidden');
                    document.getElementById('waitlist-form').classList.add('hidden');
                    
                    // Scroll to success message
                    document.getElementById('success-message').scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' 
                    });
                }
            } catch (error) {
                alert('There was an error submitting your form. Please try again.');
            }
        });
    </script>
</body>
</html>`
  )
})

// Waitlist API endpoint (POST)
waitlist.post('/api/waitlist', async (c) => {
  try {
    const data = await c.req.json()
    
    // In a real application, you would:
    // 1. Validate the data
    // 2. Store in database (Cloudflare D1)
    // 3. Send confirmation email
    // 4. Add to email marketing list (ConvertKit, Mailchimp, etc.)
    
    console.log('New waitlist signup:', data)
    
    // For now, just return success
    // TODO: Integrate with email service and database
    
    return c.json({ 
      success: true, 
      message: 'Successfully added to waitlist' 
    })
  } catch (error) {
    return c.json({ 
      success: false, 
      message: 'Error processing request' 
    }, 400)
  }
})

export { waitlist }
