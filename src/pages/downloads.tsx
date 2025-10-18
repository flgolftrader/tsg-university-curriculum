export function downloadsPage() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Download Curriculum - TSG University</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <link href="/static/styles.css" rel="stylesheet">
</head>
<body class="bg-slate-900 text-white">
    <!-- Navigation -->
    <nav class="navbar py-4">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <a href="/" class="text-2xl font-bold gradient-text">
                <i class="fas fa-graduation-cap mr-2"></i>
                TSG University
            </a>
            <div class="hidden md:flex space-x-8">
                <a href="/" class="nav-link">Home</a>
                <a href="/curriculum" class="nav-link">Curriculum</a>
                <a href="/pricing" class="nav-link">Pricing</a>
                <a href="/downloads" class="nav-link active">Downloads</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div class="mb-8">
                <i class="fas fa-download text-6xl text-blue-400 mb-6 inline-block"></i>
            </div>
            <h1 class="text-5xl md:text-6xl font-bold mb-6">
                Download <span class="gradient-text">Complete Curriculum</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Access all 8 curriculum documents including the complete 320-lesson framework, 
                implementation roadmap, and production guides
            </p>
        </div>
    </section>

    <!-- Download Instructions -->
    <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-8 mb-16">
                <!-- Download Option 1: Direct GitHub -->
                <div class="card">
                    <div class="flex items-center mb-4">
                        <i class="fab fa-github text-4xl text-blue-400 mr-4"></i>
                        <h3 class="text-2xl font-bold">Option 1: GitHub Repository</h3>
                    </div>
                    <p class="text-gray-400 mb-6">
                        Access all curriculum files directly from our GitHub repository. 
                        You can view, download, or clone the entire repository.
                    </p>
                    <a href="https://github.com/flgolftrader/tsg-university-curriculum" 
                       target="_blank"
                       class="btn btn-primary inline-flex items-center">
                        <i class="fab fa-github mr-2"></i>
                        View on GitHub
                    </a>
                </div>

                <!-- Download Option 2: Convert to PDF -->
                <div class="card">
                    <div class="flex items-center mb-4">
                        <i class="fas fa-file-pdf text-4xl text-red-400 mr-4"></i>
                        <h3 class="text-2xl font-bold">Option 2: Convert to PDF</h3>
                    </div>
                    <p class="text-gray-400 mb-6">
                        Use online services to convert markdown files to PDF format. 
                        See instructions below for recommended conversion tools.
                    </p>
                    <button onclick="document.getElementById('pdf-instructions').scrollIntoView({behavior: 'smooth'})" 
                            class="btn btn-secondary inline-flex items-center">
                        <i class="fas fa-book mr-2"></i>
                        View Instructions
                    </button>
                </div>
            </div>

            <!-- Available Documents -->
            <div class="mb-16">
                <h2 class="text-3xl font-bold mb-8 text-center">
                    <i class="fas fa-file-alt mr-2"></i>
                    Available Documents
                </h2>
                <div class="grid gap-4">
                    <!-- Document 1 -->
                    <div class="card hover:border-blue-500 transition-colors">
                        <div class="flex items-start justify-between">
                            <div class="flex-1">
                                <h4 class="text-xl font-bold mb-2">
                                    <i class="fas fa-book text-blue-400 mr-2"></i>
                                    COMPLETE_CURRICULUM.md
                                </h4>
                                <p class="text-gray-400 text-sm mb-2">
                                    Master curriculum framework for all 320 lessons with 8 detailed sample lessons
                                </p>
                                <div class="flex items-center text-sm text-gray-500">
                                    <span class="mr-4"><i class="fas fa-file mr-1"></i> 31 KB</span>
                                    <span><i class="fas fa-lines mr-1"></i> 1,141 lines</span>
                                </div>
                            </div>
                            <div class="ml-4">
                                <a href="https://github.com/flgolftrader/tsg-university-curriculum/blob/main/COMPLETE_CURRICULUM.md" 
                                   target="_blank"
                                   class="btn btn-sm btn-secondary">
                                    <i class="fas fa-external-link-alt mr-1"></i> View
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Document 2 -->
                    <div class="card hover:border-blue-500 transition-colors">
                        <div class="flex items-start justify-between">
                            <div class="flex-1">
                                <h4 class="text-xl font-bold mb-2">
                                    <i class="fas fa-graduation-cap text-purple-400 mr-2"></i>
                                    CAMPUS_1_COMPLETE.md
                                </h4>
                                <p class="text-gray-400 text-sm mb-2">
                                    8 fully detailed lesson plans for Campus 1 (Foundations)
                                </p>
                                <div class="flex items-center text-sm text-gray-500">
                                    <span class="mr-4"><i class="fas fa-file mr-1"></i> 19 KB</span>
                                    <span><i class="fas fa-lines mr-1"></i> 586 lines</span>
                                </div>
                            </div>
                            <div class="ml-4">
                                <a href="https://github.com/flgolftrader/tsg-university-curriculum/blob/main/CAMPUS_1_COMPLETE.md" 
                                   target="_blank"
                                   class="btn btn-sm btn-secondary">
                                    <i class="fas fa-external-link-alt mr-1"></i> View
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Document 3 -->
                    <div class="card hover:border-blue-500 transition-colors">
                        <div class="flex items-start justify-between">
                            <div class="flex-1">
                                <h4 class="text-xl font-bold mb-2">
                                    <i class="fas fa-university text-green-400 mr-2"></i>
                                    CAMPUS_2-8_COMPLETE.md
                                </h4>
                                <p class="text-gray-400 text-sm mb-2">
                                    Complete structures for remaining 7 campuses (280 lessons)
                                </p>
                                <div class="flex items-center text-sm text-gray-500">
                                    <span class="mr-4"><i class="fas fa-file mr-1"></i> 24 KB</span>
                                    <span><i class="fas fa-lines mr-1"></i> 824 lines</span>
                                </div>
                            </div>
                            <div class="ml-4">
                                <a href="https://github.com/flgolftrader/tsg-university-curriculum/blob/main/CAMPUS_2-8_COMPLETE.md" 
                                   target="_blank"
                                   class="btn btn-sm btn-secondary">
                                    <i class="fas fa-external-link-alt mr-1"></i> View
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Document 4 -->
                    <div class="card hover:border-blue-500 transition-colors">
                        <div class="flex items-start justify-between">
                            <div class="flex-1">
                                <h4 class="text-xl font-bold mb-2">
                                    <i class="fas fa-briefcase text-yellow-400 mr-2"></i>
                                    CURRICULUM_IMPLEMENTATION_SUMMARY.md
                                </h4>
                                <p class="text-gray-400 text-sm mb-2">
                                    Executive summary and project status report
                                </p>
                                <div class="flex items-center text-sm text-gray-500">
                                    <span class="mr-4"><i class="fas fa-file mr-1"></i> 20 KB</span>
                                    <span><i class="fas fa-lines mr-1"></i> 565 lines</span>
                                </div>
                            </div>
                            <div class="ml-4">
                                <a href="https://github.com/flgolftrader/tsg-university-curriculum/blob/main/CURRICULUM_IMPLEMENTATION_SUMMARY.md" 
                                   target="_blank"
                                   class="btn btn-sm btn-secondary">
                                    <i class="fas fa-external-link-alt mr-1"></i> View
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Document 5 -->
                    <div class="card hover:border-blue-500 transition-colors">
                        <div class="flex items-start justify-between">
                            <div class="flex-1">
                                <h4 class="text-xl font-bold mb-2">
                                    <i class="fas fa-road text-orange-400 mr-2"></i>
                                    IMPLEMENTATION_ROADMAP.md
                                </h4>
                                <p class="text-gray-400 text-sm mb-2">
                                    Complete 4-phase production plan with budgets and timelines
                                </p>
                                <div class="flex items-center text-sm text-gray-500">
                                    <span class="mr-4"><i class="fas fa-file mr-1"></i> 31 KB</span>
                                    <span><i class="fas fa-lines mr-1"></i> 1,093 lines</span>
                                </div>
                            </div>
                            <div class="ml-4">
                                <a href="https://github.com/flgolftrader/tsg-university-curriculum/blob/main/IMPLEMENTATION_ROADMAP.md" 
                                   target="_blank"
                                   class="btn btn-sm btn-secondary">
                                    <i class="fas fa-external-link-alt mr-1"></i> View
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Document 6 -->
                    <div class="card hover:border-blue-500 transition-colors">
                        <div class="flex items-start justify-between">
                            <div class="flex-1">
                                <h4 class="text-xl font-bold mb-2">
                                    <i class="fas fa-file-pdf text-red-400 mr-2"></i>
                                    CURRICULUM_PDF_GENERATION_GUIDE.md
                                </h4>
                                <p class="text-gray-400 text-sm mb-2">
                                    Instructions for converting markdown files to PDF
                                </p>
                                <div class="flex items-center text-sm text-gray-500">
                                    <span class="mr-4"><i class="fas fa-file mr-1"></i> 14 KB</span>
                                    <span><i class="fas fa-lines mr-1"></i> 494 lines</span>
                                </div>
                            </div>
                            <div class="ml-4">
                                <a href="https://github.com/flgolftrader/tsg-university-curriculum/blob/main/CURRICULUM_PDF_GENERATION_GUIDE.md" 
                                   target="_blank"
                                   class="btn btn-sm btn-secondary">
                                    <i class="fas fa-external-link-alt mr-1"></i> View
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Document 7 -->
                    <div class="card hover:border-blue-500 transition-colors">
                        <div class="flex items-start justify-between">
                            <div class="flex-1">
                                <h4 class="text-xl font-bold mb-2">
                                    <i class="fas fa-check-circle text-teal-400 mr-2"></i>
                                    COMPLETE_DELIVERY_SUMMARY.md
                                </h4>
                                <p class="text-gray-400 text-sm mb-2">
                                    Final comprehensive summary of all deliverables
                                </p>
                                <div class="flex items-center text-sm text-gray-500">
                                    <span class="mr-4"><i class="fas fa-file mr-1"></i> 15 KB</span>
                                    <span><i class="fas fa-lines mr-1"></i> 566 lines</span>
                                </div>
                            </div>
                            <div class="ml-4">
                                <a href="https://github.com/flgolftrader/tsg-university-curriculum/blob/main/COMPLETE_DELIVERY_SUMMARY.md" 
                                   target="_blank"
                                   class="btn btn-sm btn-secondary">
                                    <i class="fas fa-external-link-alt mr-1"></i> View
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Document 8 -->
                    <div class="card hover:border-blue-500 transition-colors">
                        <div class="flex items-start justify-between">
                            <div class="flex-1">
                                <h4 class="text-xl font-bold mb-2">
                                    <i class="fas fa-clipboard-list text-indigo-400 mr-2"></i>
                                    SESSION_SUMMARY.md
                                </h4>
                                <p class="text-gray-400 text-sm mb-2">
                                    Comprehensive session recap with all project details
                                </p>
                                <div class="flex items-center text-sm text-gray-500">
                                    <span class="mr-4"><i class="fas fa-file mr-1"></i> 40 KB</span>
                                    <span><i class="fas fa-lines mr-1"></i> 1,141 lines</span>
                                </div>
                            </div>
                            <div class="ml-4">
                                <a href="https://github.com/flgolftrader/tsg-university-curriculum/blob/main/SESSION_SUMMARY.md" 
                                   target="_blank"
                                   class="btn btn-sm btn-secondary">
                                    <i class="fas fa-external-link-alt mr-1"></i> View
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- PDF Conversion Instructions -->
            <div id="pdf-instructions" class="scroll-mt-20">
                <h2 class="text-3xl font-bold mb-8 text-center">
                    <i class="fas fa-magic mr-2"></i>
                    How to Convert to PDF
                </h2>
                
                <div class="grid md:grid-cols-3 gap-6 mb-12">
                    <!-- Method 1 -->
                    <div class="card">
                        <div class="text-center mb-4">
                            <i class="fas fa-browser text-5xl text-blue-400 mb-3 inline-block"></i>
                            <h3 class="text-xl font-bold">Browser Method</h3>
                            <p class="text-sm text-gray-500">Easiest</p>
                        </div>
                        <ol class="space-y-3 text-sm text-gray-400">
                            <li><strong>1.</strong> Open file on GitHub</li>
                            <li><strong>2.</strong> Use browser Print function</li>
                            <li><strong>3.</strong> Select "Save as PDF"</li>
                        </ol>
                    </div>

                    <!-- Method 2 -->
                    <div class="card border-blue-500">
                        <div class="text-center mb-4">
                            <i class="fas fa-cloud text-5xl text-purple-400 mb-3 inline-block"></i>
                            <h3 class="text-xl font-bold">Online Service</h3>
                            <p class="text-sm text-green-400">⭐ Recommended</p>
                        </div>
                        <ol class="space-y-3 text-sm text-gray-400">
                            <li><strong>1.</strong> Visit <a href="https://markdowntopdf.com" target="_blank" class="text-blue-400 hover:underline">markdowntopdf.com</a></li>
                            <li><strong>2.</strong> Copy/paste markdown content</li>
                            <li><strong>3.</strong> Click "Convert" and download</li>
                        </ol>
                    </div>

                    <!-- Method 3 -->
                    <div class="card">
                        <div class="text-center mb-4">
                            <i class="fas fa-terminal text-5xl text-yellow-400 mb-3 inline-block"></i>
                            <h3 class="text-xl font-bold">Pandoc (Advanced)</h3>
                            <p class="text-sm text-gray-500">Best Quality</p>
                        </div>
                        <ol class="space-y-3 text-sm text-gray-400">
                            <li><strong>1.</strong> Install Pandoc + LaTeX</li>
                            <li><strong>2.</strong> Run command (see guide)</li>
                            <li><strong>3.</strong> Get professional PDF</li>
                        </ol>
                    </div>
                </div>

                <!-- Quick Stats -->
                <div class="card bg-gradient-to-br from-blue-900/50 to-purple-900/50">
                    <div class="text-center">
                        <h3 class="text-2xl font-bold mb-6">📊 Complete Curriculum Package</h3>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div>
                                <div class="text-3xl font-bold text-blue-400 mb-2">194 KB</div>
                                <div class="text-sm text-gray-400">Total Size</div>
                            </div>
                            <div>
                                <div class="text-3xl font-bold text-purple-400 mb-2">6,410</div>
                                <div class="text-sm text-gray-400">Lines</div>
                            </div>
                            <div>
                                <div class="text-3xl font-bold text-green-400 mb-2">8</div>
                                <div class="text-sm text-gray-400">Documents</div>
                            </div>
                            <div>
                                <div class="text-3xl font-bold text-yellow-400 mb-2">320</div>
                                <div class="text-sm text-gray-400">Lessons</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900">
        <div class="max-w-4xl mx-auto px-4 text-center">
            <h2 class="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p class="text-xl text-gray-300 mb-8">
                Download the complete curriculum and begin your journey to trading mastery
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://github.com/flgolftrader/tsg-university-curriculum" 
                   target="_blank"
                   class="btn btn-primary btn-lg inline-flex items-center justify-center">
                    <i class="fab fa-github mr-2"></i>
                    View on GitHub
                </a>
                <a href="/pricing" class="btn btn-secondary btn-lg inline-flex items-center justify-center">
                    <i class="fas fa-graduation-cap mr-2"></i>
                    Enroll Now
                </a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-slate-950 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center text-gray-400">
                <p>&copy; 2025 The Speculators Guild University. All rights reserved.</p>
                <p class="mt-2">
                    <i class="fas fa-rocket mr-2"></i>
                    Transform Your Trading, Transform Your Life
                </p>
            </div>
        </div>
    </footer>
</body>
</html>`;
}
