import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="The Speculators Guild University - Master trading, lifestyle design, financial health, fitness, and wealth creation. Become the complete speculator." />
        <title>{title || 'The Speculators Guild University - Complete Speculator Education'}</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <link href="/static/styles.css" rel="stylesheet" />
      </head>
      <body>
        {/* Navigation */}
        <nav class="navbar py-4">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <a href="/" class="text-2xl font-bold gradient-text">
              <i class="fas fa-university mr-2"></i>
              The Speculators Guild
            </a>
            <div class="hidden md:flex space-x-6">
              <a href="/" class="text-gray-300 hover:text-white transition">Home</a>
              <a href="/curriculum" class="text-gray-300 hover:text-white transition">Curriculum</a>
              <a href="/pricing" class="text-gray-300 hover:text-white transition">Pricing</a>
              <a href="/about" class="text-gray-300 hover:text-white transition">About</a>
              <a href="/faq" class="text-gray-300 hover:text-white transition">FAQ</a>
              <a href="/downloads" class="text-gray-300 hover:text-white transition">
                <i class="fas fa-download mr-1"></i>Docs
              </a>
            </div>
            <a href="/waitlist" class="btn btn-primary">
              <i class="fas fa-user-plus mr-2"></i>
              Join Waitlist
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer class="bg-slate-950 py-12">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 class="text-xl font-bold gradient-text mb-4">The Speculators Guild</h3>
                <p class="text-gray-400">
                  Master trading, lifestyle, financial health, fitness, and wealth creation. Become the complete speculator.
                </p>
              </div>
              <div>
                <h4 class="font-bold mb-4">Learn</h4>
                <ul class="space-y-2 text-gray-400">
                  <li><a href="/curriculum" class="hover:text-white">Curriculum</a></li>
                  <li><a href="/pricing" class="hover:text-white">Pricing</a></li>
                  <li><a href="/faq" class="hover:text-white">FAQ</a></li>
                  <li><a href="/downloads" class="hover:text-white">
                    <i class="fas fa-download mr-1"></i>Documentation
                  </a></li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold mb-4">Company</h4>
                <ul class="space-y-2 text-gray-400">
                  <li><a href="/about" class="hover:text-white">About Us</a></li>
                  <li><a href="/contact" class="hover:text-white">Contact</a></li>
                  <li><a href="/careers" class="hover:text-white">Careers</a></li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold mb-4">Legal</h4>
                <ul class="space-y-2 text-gray-400">
                  <li><a href="/terms" class="hover:text-white">Terms of Service</a></li>
                  <li><a href="/privacy" class="hover:text-white">Privacy Policy</a></li>
                  <li><a href="/disclaimer" class="hover:text-white">Risk Disclaimer</a></li>
                </ul>
              </div>
            </div>
            <div class="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>&copy; 2025 The Speculators Guild University. All rights reserved.</p>
              <div class="mt-4 flex justify-center space-x-6">
                <a href="#" class="hover:text-white"><i class="fab fa-twitter"></i></a>
                <a href="#" class="hover:text-white"><i class="fab fa-youtube"></i></a>
                <a href="#" class="hover:text-white"><i class="fab fa-discord"></i></a>
                <a href="#" class="hover:text-white"><i class="fab fa-telegram"></i></a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
})
