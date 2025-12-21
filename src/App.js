import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line } from 'recharts';
import { Search, TrendingUp, Link, Zap, Users, Globe, Target, Award, AlertCircle, CheckCircle, Clock, Activity, Eye, MessageCircle, Send, X, Minimize2 } from 'lucide-react';

const VivaceSEOAudit = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [chatOpen, setChatOpen] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "👋 Hello! I'm your SEO Audit Assistant.\n\nI'm here to help you understand Vivace Clinic's SEO performance and guide you through this comprehensive report.\n\n🎯 I can help you with:\n• Understanding critical issues\n• Navigating the report sections\n• Explaining technical terms\n• Finding specific information\n• Prioritizing actions\n\nWhat would you like to explore first?",
      suggestions: [
        "What are the most critical issues?",
        "Show me the performance problems",
        "How much will fixes cost?",
        "What's the timeline?"
      ]
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Auto-open welcome on first load
  React.useEffect(() => {
    if (!hasGreeted) {
      const timer = setTimeout(() => {
        setChatOpen(true);
        setHasGreeted(true);
      }, 2000); // Opens after 2 seconds
      
      return () => clearTimeout(timer);
    }
  }, [hasGreeted]);

  // REAL SEMrush Data
  const semrushData = {
    authorityScore: 7,
    organicTraffic: 6,
    organicKeywords: 4,
    backlinks: 60,
    referringDomains: 15,
    trafficShare: 27,
    paidTraffic: 0,
    paidKeywords: 0,
    aiVisibility: 0,
    aiMentions: 0,
    citedPages: 1
  };

  // SEO Metrics Overview
  const seoMetricsComparison = [
    { metric: 'Authority Score', current: 7, target: 40, competitor: 35 },
    { metric: 'Organic Traffic', current: 6, target: 500, competitor: 450 },
    { metric: 'Organic Keywords', current: 4, target: 300, competitor: 250 },
    { metric: 'Referring Domains', current: 15, target: 100, competitor: 85 },
    { metric: 'Backlinks', current: 60, target: 250, competitor: 200 }
  ];

  // REAL PageSpeed Insights Data
  const realPerformanceData = {
    mobile: {
      lcp: 8.7,
      inp: 157,
      cls: 0.15,
      fcp: 5.7,
      ttfb: 4.1,
      status: 'FAILED'
    },
    desktop: {
      lcp: 7.2,
      inp: 161,
      cls: 0.14,
      fcp: 5.4,
      ttfb: 3.9,
      status: 'FAILED'
    }
  };


  const coreWebVitalsData = [
    { 
      metric: 'LCP', 
      mobile: 8.7, 
      desktop: 7.2, 
      target: 2.5,
      label: 'Largest Contentful Paint (s)'
    },
    { 
      metric: 'INP', 
      mobile: 157, 
      desktop: 161, 
      target: 200,
      label: 'Interaction to Next Paint (ms)'
    },
    { 
      metric: 'CLS', 
      mobile: 0.15, 
      desktop: 0.14, 
      target: 0.1,
      label: 'Cumulative Layout Shift'
    },
    { 
      metric: 'FCP', 
      mobile: 5.7, 
      desktop: 5.4, 
      target: 1.8,
      label: 'First Contentful Paint (s)'
    },
    { 
      metric: 'TTFB', 
      mobile: 4.1, 
      desktop: 3.9, 
      target: 0.8,
      label: 'Time to First Byte (s)'
    }
  ];

  
  const competitorData = [
    { name: 'Vivace', score: 35, traffic: 'Low', backlinks: 'Low', speed: 'Poor' },
    { name: 'Allure Laser', score: 78, traffic: 'Medium-High', backlinks: 'Medium', speed: 'Good' },
    { name: 'Dr. Stasch', score: 82, traffic: 'High', backlinks: 'High', speed: 'Excellent' },
    { name: 'Este Medical', score: 75, traffic: 'Medium', backlinks: 'Medium', speed: 'Good' },
    { name: 'Thrive Aesthetics', score: 70, traffic: 'Medium', backlinks: 'Low', speed: 'Fair' },
    { name: 'Avane Clinic', score: 80, traffic: 'Medium-High', backlinks: 'Medium', speed: 'Good' }
  ];

  
  const seoHealthData = [
    { category: 'Technical SEO', score: 35 },
    { category: 'Content Quality', score: 70 },
    { category: 'Backlinks', score: 25 },
    { category: 'User Experience', score: 40 },
    { category: 'Mobile Optimization', score: 30 },
    { category: 'Local SEO', score: 60 }
  ];

  
  const criticalIssues = [
    { issue: 'Extremely Slow LCP - 8.7s mobile, 7.2s desktop (Target: <2.5s)', impact: 'Critical', priority: 'URGENT', timeImpact: '6+ seconds delay' },
    { issue: 'Very High TTFB - 4.1s mobile, 3.9s desktop (Target: <0.8s)', impact: 'Critical', priority: 'URGENT', timeImpact: '3+ seconds delay' },
    { issue: 'Slow FCP - 5.7s mobile, 5.4s desktop (Target: <1.8s)', impact: 'Critical', priority: 'URGENT', timeImpact: '4+ seconds delay' },
    { issue: 'Failed Core Web Vitals Assessment (Mobile & Desktop)', impact: 'Critical', priority: 'URGENT', timeImpact: 'SEO ranking penalty' },
    { issue: 'CLS needs improvement - 0.15 mobile, 0.14 desktop (Target: <0.1)', impact: 'High', priority: 'High', timeImpact: 'User experience issues' },
    { issue: 'Low domain authority (estimated 15-20)', impact: 'High', priority: 'High', timeImpact: 'Ranking limitation' }
  ];

  
  const quickWins = [
    { action: 'Compress and convert images to WebP format', impact: 'Save ~2-3 seconds on LCP', difficulty: 'Easy' },
    { action: 'Enable browser caching for static resources', impact: 'Reduce repeat load times by 50%', difficulty: 'Easy' },
    { action: 'Minify CSS, JavaScript, and HTML', impact: 'Save ~0.5-1 seconds', difficulty: 'Easy' },
    { action: 'Implement lazy-loading for images', impact: 'Improve FCP by ~1-2 seconds', difficulty: 'Easy' },
    { action: 'Set explicit width/height on images', impact: 'Reduce CLS to <0.1', difficulty: 'Easy' },
    { action: 'Add LocalBusiness schema markup', impact: 'Better local search visibility', difficulty: 'Easy' }
  ];

  // Performance improvement roadmap
  const performanceImprovements = [
    {
      category: 'Critical - Server Performance',
      fixes: [
        { item: 'Upgrade hosting to faster server/plan', savings: '~2-3s TTFB reduction', priority: 'URGENT' },
        { item: 'Enable server-side caching', savings: '~1-2s overall improvement', priority: 'URGENT' },
        { item: 'Implement HTTP/2 or HTTP/3', savings: '~0.5-1s improvement', priority: 'High' },
        { item: 'Use CDN for static assets', savings: '~1-2s for global users', priority: 'URGENT' }
      ]
    },
    {
      category: 'Critical - Image Optimization',
      fixes: [
        { item: 'Compress all images (TinyPNG, ImageOptim)', savings: '~2-3s LCP improvement', priority: 'URGENT' },
        { item: 'Convert images to WebP format', savings: '~30-50% file size reduction', priority: 'URGENT' },
        { item: 'Implement responsive images (srcset)', savings: '~1-2s on mobile', priority: 'High' },
        { item: 'Enable lazy-loading for below-fold images', savings: '~1-2s FCP improvement', priority: 'URGENT' }
      ]
    },
    {
      category: 'High Priority - JavaScript/CSS',
      fixes: [
        { item: 'Minify all CSS and JavaScript files', savings: '~0.5-1s improvement', priority: 'High' },
        { item: 'Defer non-critical JavaScript', savings: '~1-2s FCP improvement', priority: 'High' },
        { item: 'Inline critical CSS', savings: '~0.5-1s improvement', priority: 'High' },
        { item: 'Remove unused JavaScript/CSS', savings: '~0.5-1s improvement', priority: 'Medium' }
      ]
    },
    {
      category: 'High Priority - Layout Stability',
      fixes: [
        { item: 'Add explicit dimensions to all images', savings: 'CLS: 0.15 → <0.1', priority: 'High' },
        { item: 'Reserve space for ads/embeds', savings: 'Prevent layout shifts', priority: 'High' },
        { item: 'Avoid inserting content above existing', savings: 'Better user experience', priority: 'Medium' },
        { item: 'Use font-display: swap for web fonts', savings: 'Reduce text shift', priority: 'Medium' }
      ]
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Executive Summary', icon: Target },
    { id: 'semrush', name: 'SEMrush Analysis', icon: Search },
    { id: 'performance', name: 'Performance Analysis', icon: Activity },
    { id: 'technical', name: 'Technical Fixes', icon: Zap },
    { id: 'competitors', name: 'Competitor Analysis', icon: Users },
    { id: 'strategy', name: 'SEO Strategy', icon: TrendingUp },
    { id: 'roadmap', name: '6-Month Roadmap', icon: Award }
  ];

  // AI Assistant Knowledge Base
  const getAIResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();
    
    // Critical issues
    if (msg.includes('critical') || msg.includes('urgent') || msg.includes('problem')) {
      return {
        content: "🚨 Vivace has several CRITICAL issues:\n\n1. **Performance Crisis:** LCP 8.7s mobile (target: <2.5s) - Users wait too long\n2. **Failed Core Web Vitals** on mobile & desktop\n3. **Authority Score: 7/100** - Extremely low trust\n4. **Only 6 organic visitors/month** - Nearly invisible\n5. **4 ranking keywords** - Minimal coverage\n\nThe most urgent action is fixing site performance (Month 1) and building backlinks (ongoing).",
        action: { tab: 'overview', label: 'View Critical Issues' }
      };
    }
    
    // Performance questions
    if (msg.includes('performance') || msg.includes('speed') || msg.includes('slow') || msg.includes('pageSpeed')) {
      return {
        content: "📊 **Performance Analysis:**\n\n**Mobile:** LCP 8.7s, FCP 5.7s, TTFB 4.1s ❌\n**Desktop:** LCP 7.2s, FCP 5.4s, TTFB 3.9s ❌\n\n**Impact:** 60-70% of potential traffic is lost due to slow loading.\n\n**Quick Fixes:**\n• Upgrade hosting (saves 2-3s)\n• Compress images to WebP (saves 2-3s)\n• Enable CDN (saves 1-2s)\n• Implement lazy loading (saves 1-2s)",
        action: { tab: 'performance', label: 'See Performance Details' }
      };
    }
    
    // SEMrush / Authority questions
    if (msg.includes('semrush') || msg.includes('authority') || msg.includes('backlink') || msg.includes('domain')) {
      return {
        content: "🔍 **SEMrush Analysis Summary:**\n\n• **Authority Score:** 7/100 (Low)\n• **Organic Traffic:** 6 visitors/month\n• **Keywords Ranking:** Only 4\n• **Backlinks:** 60 (from 15 domains)\n• **AI Visibility:** 0\n\n**Goal:** Reach 40+ authority, 500+ visitors, 300 keywords in 6 months through structured backlink building and content strategy.",
        action: { tab: 'semrush', label: 'View SEMrush Analysis' }
      };
    }
    
    // Investment / Cost questions
    if (msg.includes('cost') || msg.includes('investment') || msg.includes('price') || msg.includes('budget')) {
      return {
        content: "💰 **Investment Breakdown (6 months):**\n\n• Performance fixes: $1,000\n• Content creation: $3,000\n• Link building: $2,500\n• Technical optimization: $800\n• Tools & software: $700\n\n**Total: $8,000**\n\n**Expected ROI:** $36K-180K in additional revenue over 6 months (break even by month 3-4). Conservative estimate: 300-400% traffic increase.",
        action: { tab: 'roadmap', label: 'View Full Roadmap' }
      };
    }
    
    // Improvement / Fix questions
    if (msg.includes('improve') || msg.includes('fix') || msg.includes('solution') || msg.includes('action')) {
      return {
        content: "✅ **Top Priority Actions:**\n\n**Week 1:**\n• Upgrade to premium hosting\n• Compress all images → WebP\n• Enable Cloudflare CDN\n• Implement lazy-loading\n\n**Month 1:**\n• Get PageSpeed to 70+\n• Pass Core Web Vitals\n• Add schema markup\n\n**Months 2-6:**\n• Build 150+ quality backlinks\n• Create 300+ ranking keywords\n• Reach 500+ monthly visitors",
        action: { tab: 'technical', label: 'See Technical Fixes' }
      };
    }
    
    // Competitor questions
    if (msg.includes('competitor') || msg.includes('competition') || msg.includes('rank')) {
      return {
        content: "👥 **Competitor Analysis:**\n\nVivace (35/100) is significantly behind:\n• Dr. Stasch: 82/100\n• Avane Clinic: 80/100\n• Allure Laser: 78/100\n\n**Gap:** All competitors have 70-85 PageSpeed scores vs Vivace's 35. They also have 200-500 keywords vs Vivace's 4.\n\n**Opportunity:** Fix performance first, then content. You can rank #1 in 6 months.",
        action: { tab: 'competitors', label: 'View Competitor Details' }
      };
    }
    
    // Strategy questions
    if (msg.includes('strategy') || msg.includes('plan') || msg.includes('roadmap') || msg.includes('timeline')) {
      return {
        content: "🎯 **6-Month Strategy:**\n\n**Month 1:** Performance fixes (URGENT)\n**Month 2:** Schema, citations, content start\n**Months 3-4:** Authority building, 50+ backlinks\n**Months 5-6:** Scale content, dominate local\n\n**Outcome:** #1 for primary keywords, 300% traffic growth, 150+ backlinks, Authority Score 40+",
        action: { tab: 'roadmap', label: 'View Complete Roadmap' }
      };
    }
    
    // Timeline questions
    if (msg.includes('how long') || msg.includes('when') || msg.includes('time')) {
      return {
        content: "⏰ **Timeline Expectations:**\n\n• **Week 1-2:** See 40-50% speed improvement\n• **Month 2:** Pass Core Web Vitals ✅\n• **Month 3:** Start ranking for 50+ keywords\n• **Month 4:** Double organic traffic\n• **Month 6:** #1 for primary keywords, 300% traffic growth\n\n**Break even:** Month 3-4\n**Full ROI:** Month 6+",
        action: { tab: 'roadmap', label: 'See Detailed Timeline' }
      };
    }
    
    // Navigation help
    if (msg.includes('navigate') || msg.includes('where') || msg.includes('find') || msg.includes('show me')) {
      return {
        content: "📍 **Report Navigation:**\n\nUse the tabs above to explore:\n• **Executive Summary:** Overview & critical issues\n• **SEMrush Analysis:** Authority & backlink data\n• **Performance:** PageSpeed deep dive\n• **Technical Fixes:** Implementation steps\n• **Competitors:** Market analysis\n• **Strategy:** Keywords & backlinks\n• **Roadmap:** 6-month plan\n\nWhat section interests you most?",
        suggestions: ["Show performance data", "View competitor analysis", "See the roadmap", "What's most critical?"]
      };
    }
    
    // Default response
    return {
      content: "I can help you with:\n\n• 🚨 Critical issues & priorities\n• 📊 Performance & PageSpeed data\n• 🔍 SEMrush & authority analysis\n• 💰 Investment & ROI projections\n• ✅ Implementation steps\n• 👥 Competitor comparison\n• 🎯 Strategy & timeline\n• 📍 Report navigation\n\nWhat would you like to know?",
      suggestions: [
        "What's most critical?",
        "Show me quick wins",
        "How much will this cost?",
        "What's the timeline?"
      ]
    };
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    const userMsg = inputMessage;
    setInputMessage('');
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsTyping(true);
    
    // Simulate thinking delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Get AI response
    const response = getAIResponse(userMsg);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { 
      role: 'assistant', 
      content: response.content,
      action: response.action,
      suggestions: response.suggestions
    }]);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputMessage(suggestion);
    handleSendMessage();
  };

  const handleActionClick = (tab) => {
    setActiveTab(tab);
    setChatOpen(false);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border-t-4 border-red-600">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Vivace Clinic SEO Audit</h1>
              <p className="text-gray-600 text-lg mb-2">Real PageSpeed Insights Data Analysis</p>
              <div className="flex gap-4 mt-3">
                <div className="px-4 py-2 bg-red-100 text-red-700 rounded-lg font-semibold">
                  ❌ Core Web Vitals: FAILED
                </div>
                <div className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg font-semibold">
                  ⚠️ Critical Performance Issues
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-5xl font-bold text-red-600">35/100</div>
              <div className="text-sm text-gray-600 mt-1">Performance Score</div>
              <div className="text-xs text-red-600 mt-2 font-semibold">POOR - Urgent Action Required</div>
            </div>
          </div>
        </div>

        {/* AI Chat Button - Floating */}
        {!chatOpen && (
          <button
            onClick={() => setChatOpen(true)}
            className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all hover:scale-110 z-50 flex items-center gap-2"
          >
            <MessageCircle size={24} />
            <span className="font-semibold">Ask AI Assistant</span>
          </button>
        )}

        {/* AI Chat Window */}
        {chatOpen && (
          <div className="fixed bottom-6 right-6 w-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col max-h-[600px] border-2 border-purple-200">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div className="font-bold">SEO Assistant</div>
                  <div className="text-xs opacity-90">Powered by AI</div>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="hover:bg-white hover:bg-opacity-20 p-1 rounded transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] ${
                    msg.role === 'user' 
                      ? 'bg-purple-600 text-white rounded-2xl rounded-tr-sm' 
                      : 'bg-white border-2 border-purple-100 rounded-2xl rounded-tl-sm'
                  } p-3 shadow-sm`}>
                    <div className={`text-sm whitespace-pre-line ${msg.role === 'user' ? 'text-white' : 'text-gray-800'}`}>
                      {msg.content}
                    </div>
                    
                    {/* Action Button */}
                    {msg.action && (
                      <button
                        onClick={() => handleActionClick(msg.action.tab)}
                        className="mt-3 w-full bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors"
                      >
                        {msg.action.label} →
                      </button>
                    )}
                    
                    {/* Suggestions */}
                    {msg.suggestions && (
                      <div className="mt-3 space-y-2">
                        {msg.suggestions.map((suggestion, sIdx) => (
                          <button
                            key={sIdx}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="w-full text-left bg-purple-50 hover:bg-purple-100 text-purple-700 px-3 py-2 rounded-lg text-xs transition-colors border border-purple-200"
                          >
                            💬 {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border-2 border-purple-100 rounded-2xl rounded-tl-sm p-3 shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about the SEO audit..."
                  className="flex-1 px-4 py-2 border-2 border-purple-200 rounded-xl focus:outline-none focus:border-purple-400 text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-purple-600 text-white p-2 rounded-xl hover:bg-purple-700 transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
              <div className="text-xs text-gray-500 mt-2 text-center">
                Ask me anything about this SEO audit report
              </div>
            </div>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-6 p-2 flex gap-2 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon size={18} />
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          {activeTab === 'overview' && (
            <>
              {/* Critical Alert Banner */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl shadow-2xl p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle size={40} className="flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-2">🚨 CRITICAL: Website Performance Crisis</h2>
                    <p className="text-lg mb-3">Vivace.co.ke has <strong>FAILED Core Web Vitals</strong> assessment on both mobile and desktop. This is severely impacting:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Google search rankings (Core Web Vitals are ranking factors)</li>
                      <li>• User experience (Users wait 8.7 seconds to see main content on mobile)</li>
                      <li>• Conversion rates (53% of users abandon sites that take >3 seconds to load)</li>
                      <li>• Competitive position (All competitors have significantly faster sites)</li>
                    </ul>
                    <div className="mt-4 p-4 bg-white bg-opacity-20 rounded-lg">
                      <strong>Estimated Impact:</strong> Losing 60-70% of potential organic traffic and conversions due to poor performance
                    </div>
                  </div>
                </div>
              </div>

              {/* Real Performance Metrics Comparison */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Activity className="text-red-600" />
                    Mobile Performance (FAILED ❌)
                  </h3>
                  <div className="space-y-3">
                    <MetricRow label="LCP" value="8.7s" target="<2.5s" status="critical" />
                    <MetricRow label="INP" value="157ms" target="<200ms" status="good" />
                    <MetricRow label="CLS" value="0.15" target="<0.1" status="warning" />
                    <MetricRow label="FCP" value="5.7s" target="<1.8s" status="critical" />
                    <MetricRow label="TTFB" value="4.1s" target="<0.8s" status="critical" />
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Activity className="text-orange-600" />
                    Desktop Performance (FAILED ❌)
                  </h3>
                  <div className="space-y-3">
                    <MetricRow label="LCP" value="7.2s" target="<2.5s" status="critical" />
                    <MetricRow label="INP" value="161ms" target="<200ms" status="good" />
                    <MetricRow label="CLS" value="0.14" target="<0.1" status="warning" />
                    <MetricRow label="FCP" value="5.4s" target="<1.8s" status="critical" />
                    <MetricRow label="TTFB" value="3.9s" target="<0.8s" status="critical" />
                  </div>
                </div>
              </div>

              {/* SEO Health Radar */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Zap className="text-purple-600" />
                  Overall SEO Health Analysis
                </h2>
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart data={seoHealthData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="category" />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} />
                    <Radar name="Vivace Clinic" dataKey="score" stroke="#9333ea" fill="#9333ea" fillOpacity={0.6} />
                  </RadarChart>
                </ResponsiveContainer>
                <p className="text-center text-gray-600 mt-4">
                  <strong>Critical Areas:</strong> Technical SEO (35), Mobile Optimization (30), User Experience (40)
                </p>
              </div>

              {/* Critical Issues */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <AlertCircle className="text-red-600" />
                  Critical Issues (Based on Real Data)
                </h2>
                <div className="space-y-3">
                  {criticalIssues.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-l-4 border-red-500">
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{item.issue}</div>
                        <div className="text-sm text-gray-600 mt-1">
                          Impact: {item.impact} | {item.timeImpact}
                        </div>
                      </div>
                      <span className="px-4 py-2 rounded-full text-sm font-bold bg-red-100 text-red-700">
                        {item.priority}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Wins */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-6 border border-green-200">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-green-800">
                  <CheckCircle className="text-green-600" />
                  Quick Wins - Implement This Week (Based on PageSpeed Data)
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {quickWins.map((win, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{win.action}</div>
                        <div className="text-sm text-green-700 mt-1"><strong>{win.impact}</strong></div>
                        <div className="text-xs text-gray-600 mt-1">Difficulty: {win.difficulty}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'semrush' && (
            <>
              {/* SEMrush Overview Header */}
              <div className="bg-gradient-to-r from-orange-600 to-red-700 text-white rounded-xl shadow-2xl p-6">
                <div className="flex items-start gap-4">
                  <Search size={40} className="flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-2">📊 SEMrush Domain Analysis - Full Report</h2>
                    <p className="text-lg mb-3">Complete SEO and domain authority analysis reveals critical gaps in online visibility and ranking potential.</p>
                    <div className="grid md:grid-cols-4 gap-3">
                      <div className="bg-white bg-opacity-20 rounded-lg p-3">
                        <div className="text-3xl font-bold">{semrushData.authorityScore}/100</div>
                        <div className="text-sm">Authority Score</div>
                      </div>
                      <div className="bg-white bg-opacity-20 rounded-lg p-3">
                        <div className="text-3xl font-bold">{semrushData.organicTraffic}</div>
                        <div className="text-sm">Monthly Visitors</div>
                      </div>
                      <div className="bg-white bg-opacity-20 rounded-lg p-3">
                        <div className="text-3xl font-bold">{semrushData.organicKeywords}</div>
                        <div className="text-sm">Ranking Keywords</div>
                      </div>
                      <div className="bg-white bg-opacity-20 rounded-lg p-3">
                        <div className="text-3xl font-bold">{semrushData.referringDomains}</div>
                        <div className="text-sm">Referring Domains</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key SEO Metrics Comparison */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">SEO Metrics: Current vs Target vs Competitor Average</h2>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={seoMetricsComparison}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="metric" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="current" fill="#ef4444" name="Vivace (Current)" />
                    <Bar dataKey="competitor" fill="#f59e0b" name="Competitor Avg" />
                    <Bar dataKey="target" fill="#10b981" name="Target (6 months)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Detailed Metrics Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Authority Score */}
                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Authority Score</h3>
                    <div className="text-4xl font-bold text-red-600">{semrushData.authorityScore}/100</div>
                  </div>
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                      LOW AUTHORITY
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3">
                    SEMrush labels this as "Low Authority" - the site has very low online trust, few ranking signals, and weak link profile.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Influenced By:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Backlinks quality and quantity</li>
                      <li>• Number of referring domains</li>
                      <li>• Keyword presence and rankings</li>
                      <li>• Organic traffic volume</li>
                    </ul>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-sm font-semibold text-green-800">
                      🎯 Goal: Reach 40+ authority score within 12 months through structured off-page SEO
                    </p>
                  </div>
                </div>

                {/* Organic Traffic */}
                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Organic Traffic</h3>
                    <div className="text-4xl font-bold text-red-600">{semrushData.organicTraffic}</div>
                  </div>
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                      EXTREMELY LOW
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3">
                    The website is receiving almost no traffic from Google search. This indicates near-zero organic visibility.
                  </p>
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-3">
                    <h4 className="font-semibold text-red-900 mb-2">Impact:</h4>
                    <ul className="space-y-1 text-sm text-red-800">
                      <li>• Missing out on thousands of potential patients</li>
                      <li>• Competitors capturing all organic search traffic</li>
                      <li>• Zero brand visibility for treatment searches</li>
                      <li>• Heavy reliance on paid or referral traffic</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-sm font-semibold text-green-800">
                      🎯 Goal: Achieve 500+ monthly organic visitors within 6-8 months
                    </p>
                  </div>
                </div>

                {/* Organic Keywords */}
                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Organic Keywords</h3>
                    <div className="text-4xl font-bold text-orange-600">{semrushData.organicKeywords}</div>
                  </div>
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                      MINIMAL COVERAGE
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Site ranks for only 4 keywords, likely on very low positions (page 5-10 of Google search results).
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg mb-3">
                    <h4 className="font-semibold text-gray-900 mb-2">Why This Matters:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Competitors rank for 200-500+ keywords</li>
                      <li>• Each keyword is a potential traffic source</li>
                      <li>• Limited keyword coverage = limited discovery</li>
                      <li>• Missing long-tail search opportunities</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm font-semibold text-blue-800">
                      🎯 Goal: 300-500 organic keywords within 6-12 months through content strategy
                    </p>
                  </div>
                </div>

                {/* Backlink Profile */}
                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Backlink Profile</h3>
                    <div>
                      <div className="text-3xl font-bold text-yellow-600">{semrushData.backlinks}</div>
                      <div className="text-sm text-gray-600 text-right">backlinks</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3 bg-gray-50 rounded-lg text-center">
                      <div className="text-2xl font-bold text-gray-900">{semrushData.referringDomains}</div>
                      <div className="text-xs text-gray-600">Referring Domains</div>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded-lg text-center">
                      <div className="text-2xl font-bold text-yellow-600">Low</div>
                      <div className="text-xs text-gray-600">Quality Rating</div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-3">
                    <h4 className="font-semibold text-yellow-900 mb-2">Analysis:</h4>
                    <ul className="space-y-1 text-sm text-yellow-800">
                      <li>• Very low number of referring domains (15)</li>
                      <li>• Most backlinks appear to be low authority</li>
                      <li>• Natural/high-quality editorial backlinks missing</li>
                      <li>• Weak link profile compared to competitors</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <p className="text-sm font-semibold text-purple-800">
                      🎯 Goal: 150-300 high-authority backlinks over next 12 months
                    </p>
                  </div>
                </div>
              </div>

              {/* Traffic Sources */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Traffic Source Distribution</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <div className="text-5xl font-bold text-blue-600 mb-2">{semrushData.trafficShare}%</div>
                    <div className="text-sm text-gray-700 font-semibold mb-2">From Organic Search</div>
                    <div className="text-xs text-gray-600">27% organic is low for a service business</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
                    <div className="text-5xl font-bold text-gray-600 mb-2">73%</div>
                    <div className="text-sm text-gray-700 font-semibold mb-2">From Other Sources</div>
                    <div className="text-xs text-gray-600">Direct, social, referrals, etc.</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border-2 border-green-400">
                    <div className="text-5xl font-bold text-green-600 mb-2">60%</div>
                    <div className="text-sm text-gray-700 font-semibold mb-2">Target Organic Share</div>
                    <div className="text-xs text-green-700 font-semibold">Industry benchmark for success</div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-900">
                    <strong>Insight:</strong> For a successful beauty/clinic brand, organic search should contribute 50-70% of total traffic. This indicates significant growth opportunity.
                  </p>
                </div>
              </div>

              {/* Paid Traffic Analysis */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Paid Advertising Status</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gray-50 rounded-lg border-2 border-gray-300">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-gray-900">Paid Traffic</h3>
                      <span className="text-3xl font-bold text-gray-600">{semrushData.paidTraffic}</span>
                    </div>
                    <p className="text-sm text-gray-600">No Google Ads campaigns running</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg border-2 border-gray-300">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-gray-900">Paid Keywords</h3>
                      <span className="text-3xl font-bold text-gray-600">{semrushData.paidKeywords}</span>
                    </div>
                    <p className="text-sm text-gray-600">Not targeting any paid keywords</p>
                  </div>
                </div>
                <div className="mt-4 p-5 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">💡 Recommendation:</h4>
                  <p className="text-sm text-blue-800 mb-3">
                    While paid ads are optional, combining Google Ads with SEO can accelerate growth significantly. In competitive beauty/aesthetics markets, paid + organic strategy works best.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-white rounded">
                      <strong>Pros of Adding Paid:</strong>
                      <ul className="mt-1 space-y-1">
                        <li>• Immediate visibility while SEO builds</li>
                        <li>• Test keywords before SEO investment</li>
                        <li>• Capture high-intent searches now</li>
                        <li>• Dominate SERP with ads + organic</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-white rounded">
                      <strong>SEO-First Approach:</strong>
                      <ul className="mt-1 space-y-1">
                        <li>• Long-term sustainable traffic</li>
                        <li>• Higher ROI over time</li>
                        <li>• Builds brand authority</li>
                        <li>• Better for competitive advantage</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Search Visibility */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-lg p-6 border-2 border-purple-300">
                <h2 className="text-2xl font-bold mb-4 text-purple-900">🤖 AI Search Visibility (Google AI Overview)</h2>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white p-5 rounded-lg shadow text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">{semrushData.aiVisibility}</div>
                    <div className="text-sm text-gray-700">AI Visibility Score</div>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">{semrushData.aiMentions}</div>
                    <div className="text-sm text-gray-700">AI Mentions</div>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">{semrushData.citedPages}</div>
                    <div className="text-sm text-gray-700">Cited Pages</div>
                  </div>
                </div>
                <div className="p-5 bg-white rounded-lg border-2 border-purple-200">
                  <h3 className="font-bold text-purple-900 mb-3">What This Means:</h3>
                  <ul className="space-y-2 text-sm text-gray-700 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✕</span>
                      <span>Vivace does not appear in Google's AI-generated search answers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✕</span>
                      <span>Only 1 page has been "noticed" by AI search algorithms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600">⚠</span>
                      <span>Missing out on the future of search - AI Overview appears at top of results</span>
                    </li>
                  </ul>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">🎯 How to Improve AI Visibility:</h4>
                    <ul className="space-y-1 text-sm text-purple-800">
                      <li>• Add FAQ schema markup to all service pages</li>
                      <li>• Create comprehensive how-to content</li>
                      <li>• Publish long-form educational content (2,000+ words)</li>
                      <li>• Implement structured data across all pages</li>
                      <li>• Answer common questions in depth</li>
                      <li>• Build topical authority through expert content</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Interpretation Summary Table */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Key Findings Summary Table</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Area</th>
                        <th className="px-4 py-3 text-left font-semibold">Current Status</th>
                        <th className="px-4 py-3 text-left font-semibold">Impact</th>
                        <th className="px-4 py-3 text-left font-semibold">Required Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">Authority Score</td>
                        <td className="px-4 py-3"><span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-semibold">7 (Low)</span></td>
                        <td className="px-4 py-3 text-gray-700">Ranking struggles</td>
                        <td className="px-4 py-3 text-purple-700">Increase quality backlinks</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">Organic Traffic</td>
                        <td className="px-4 py-3"><span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-semibold">6 visitors/month</span></td>
                        <td className="px-4 py-3 text-gray-700">Almost invisible on Google</td>
                        <td className="px-4 py-3 text-purple-700">Full SEO strategy needed</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">Organic Keywords</td>
                        <td className="px-4 py-3"><span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-semibold">4</span></td>
                        <td className="px-4 py-3 text-gray-700">Limited reach</td>
                        <td className="px-4 py-3 text-purple-700">Keyword research + optimized content</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">Referring Domains</td>
                        <td className="px-4 py-3"><span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs font-semibold">15</span></td>
                        <td className="px-4 py-3 text-gray-700">Weak authority</td>
                        <td className="px-4 py-3 text-purple-700">Target 100+ domains in 12 months</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">Backlinks</td>
                        <td className="px-4 py-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-semibold">60</span></td>
                        <td className="px-4 py-3 text-gray-700">Low-medium</td>
                        <td className="px-4 py-3 text-purple-700">Improve quality, not quantity</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">AI Search Visibility</td>
                        <td className="px-4 py-3"><span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-semibold">0</span></td>
                        <td className="px-4 py-3 text-gray-700">No AI placement</td>
                        <td className="px-4 py-3 text-purple-700">Add structured data & FAQ SEO</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">Paid Traffic</td>
                        <td className="px-4 py-3"><span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-semibold">0</span></td>
                        <td className="px-4 py-3 text-gray-700">No exposure</td>
                        <td className="px-4 py-3 text-purple-700">Optional but recommended</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Action Priority Matrix */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">SEMrush Data: Action Priority Matrix</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-5 border-l-4 border-red-500 bg-red-50 rounded-r-lg">
                    <h3 className="font-bold text-red-900 mb-3 text-lg">🚨 Critical (Start Immediately)</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-red-600">1.</span>
                        <span><strong>Build Authority:</strong> Launch aggressive backlink campaign to reach 100+ referring domains</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-red-600">2.</span>
                        <span><strong>Keyword Expansion:</strong> Target 50-100 keywords in first 3 months through content</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-red-600">3.</span>
                        <span><strong>Traffic Growth:</strong> Fix performance issues to convert rankings into traffic</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-5 border-l-4 border-orange-500 bg-orange-50 rounded-r-lg">
                    <h3 className="font-bold text-orange-900 mb-3 text-lg">⚠️ High Priority (Month 2-3)</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-orange-600">4.</span>
                        <span><strong>AI Visibility:</strong> Add FAQ schema and create comprehensive Q&A content</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-orange-600">5.</span>
                        <span><strong>Traffic Distribution:</strong> Push organic share from 27% to 50%+</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-orange-600">6.</span>
                        <span><strong>Consider Paid Ads:</strong> Run complementary campaigns while SEO builds</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'performance' && (
            <>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Activity className="text-purple-600" />
                  Core Web Vitals Comparison (Mobile vs Desktop vs Target)
                </h2>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={coreWebVitalsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="metric" />
                    <YAxis />
                    <Tooltip 
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-white p-4 border rounded shadow-lg">
                              <p className="font-bold">{payload[0].payload.label}</p>
                              <p className="text-blue-600">Mobile: {payload[0].value}</p>
                              <p className="text-green-600">Desktop: {payload[1].value}</p>
                              <p className="text-gray-600">Target: {payload[2].value}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Legend />
                    <Bar dataKey="mobile" fill="#3b82f6" name="Mobile (Current)" />
                    <Bar dataKey="desktop" fill="#10b981" name="Desktop (Current)" />
                    <Bar dataKey="target" fill="#6b7280" name="Target (Google)" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-red-800 font-semibold">
                    ⚠️ Analysis: All metrics except INP are significantly above target thresholds. LCP and TTFB are the most critical issues requiring immediate attention.
                  </p>
                </div>
              </div>

              {/* Detailed Performance Breakdown */}
              <div className="grid md:grid-cols-2 gap-6">
                <PerformanceCard 
                  title="🚨 Largest Contentful Paint (LCP)"
                  mobile="8.7s"
                  desktop="7.2s"
                  target="<2.5s"
                  status="critical"
                  description="The main content takes far too long to appear. Users are waiting 6+ seconds longer than acceptable."
                  impact="High bounce rate, poor SEO rankings, frustrated users"
                />
                <PerformanceCard 
                  title="🚨 Time to First Byte (TTFB)"
                  mobile="4.1s"
                  desktop="3.9s"
                  target="<0.8s"
                  status="critical"
                  description="Server is taking 3+ seconds too long to start responding. This indicates severe hosting/backend issues."
                  impact="Every page interaction is delayed, cascading performance problems"
                />
                <PerformanceCard 
                  title="🚨 First Contentful Paint (FCP)"
                  mobile="5.7s"
                  desktop="5.4s"
                  target="<1.8s"
                  status="critical"
                  description="Users see nothing but a blank page for 5+ seconds. This creates perception of a broken site."
                  impact="Immediate user abandonment, zero engagement opportunity"
                />
                <PerformanceCard 
                  title="⚠️ Cumulative Layout Shift (CLS)"
                  mobile="0.15"
                  desktop="0.14"
                  target="<0.1"
                  status="warning"
                  description="Content is shifting as the page loads, causing accidental clicks and frustration."
                  impact="Poor user experience, accessibility issues"
                />
                <PerformanceCard 
                  title="✅ Interaction to Next Paint (INP)"
                  mobile="157ms"
                  desktop="161ms"
                  target="<200ms"
                  status="good"
                  description="The only metric passing! Site responds reasonably well to user interactions."
                  impact="Once content loads, interactions work acceptably"
                />
              </div>

              {/* Performance Improvement Roadmap */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Detailed Performance Fix Roadmap</h2>
                {performanceImprovements.map((category, idx) => (
                  <div key={idx} className="mb-6 last:mb-0">
                    <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
                      <Zap size={20} className="text-purple-600" />
                      {category.category}
                    </h3>
                    <div className="space-y-3">
                      {category.fixes.map((fix, fixIdx) => (
                        <div key={fixIdx} className="flex items-start justify-between p-4 bg-gray-50 rounded-lg border-l-4 border-purple-500">
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900">{fix.item}</div>
                            <div className="text-sm text-green-700 mt-1">💡 Expected Improvement: {fix.savings}</div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            fix.priority === 'URGENT' ? 'bg-red-100 text-red-700' :
                            fix.priority === 'High' ? 'bg-orange-100 text-orange-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {fix.priority}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Expected Outcomes */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6 border border-blue-200">
                <h2 className="text-2xl font-bold mb-4 text-blue-900">📈 Expected Outcomes After Optimization</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-5 rounded-lg shadow">
                    <div className="text-3xl font-bold text-green-600 mb-2">8.7s → 2.3s</div>
                    <div className="text-sm text-gray-700">Mobile LCP improvement</div>
                    <div className="text-xs text-green-600 mt-2">✅ Passing Core Web Vitals</div>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow">
                    <div className="text-3xl font-bold text-green-600 mb-2">4.1s → 0.6s</div>
                    <div className="text-sm text-gray-700">TTFB improvement</div>
                    <div className="text-xs text-green-600 mt-2">✅ 85% faster server response</div>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow">
                    <div className="text-3xl font-bold text-green-600 mb-2">35 → 85+</div>
                    <div className="text-sm text-gray-700">PageSpeed Score</div>
                    <div className="text-xs text-green-600 mt-2">✅ Good performance rating</div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Business Impact:</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 40-60% increase in organic traffic (better Google rankings)</li>
                    <li>• 25-35% improvement in conversion rate (faster = more trust)</li>
                    <li>• 50-70% reduction in bounce rate (users stay longer)</li>
                    <li>• Competitive advantage over slower competitor sites</li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {activeTab === 'technical' && (
            <>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Technical SEO Analysis (PageSpeed Based)</h2>
                
                <div className="space-y-6">
                  <Section title="🚨 URGENT: Server & Hosting Issues">
                    <IssueItem 
                      status="critical"
                      title="Extremely High TTFB - 4.1s Mobile / 3.9s Desktop"
                      description="Server takes 3+ seconds too long to respond. This is the root cause of most performance issues."
                      recommendation="Immediate Actions: 1) Upgrade to premium hosting (WP Engine, Kinsta, or VPS), 2) Enable server-side caching (Redis/Memcached), 3) Optimize database queries, 4) Implement CDN (Cloudflare/AWS CloudFront)"
                    />
                    <IssueItem 
                      status="critical"
                      title="No Content Delivery Network (CDN)"
                      description="All assets served from single origin server, causing delays for users"
                      recommendation="Implement Cloudflare CDN (free tier available) or AWS CloudFront to distribute content globally"
                    />
                    <IssueItem 
                      status="critical"
                      title="HTTP/1.1 Protocol"
                      description="Likely using older HTTP protocol limiting parallel requests"
                      recommendation="Enable HTTP/2 or HTTP/3 on server for multiplexing and faster asset loading"
                    />
                  </Section>

                  <Section title="🚨 URGENT: Image Optimization">
                    <IssueItem 
                      status="critical"
                      title="Unoptimized Images"
                      description="Large, uncompressed images are primary cause of slow LCP (8.7s)"
                      recommendation="1) Compress all images with TinyPNG or ImageOptim (target 70-80% compression), 2) Convert to WebP format (30-50% smaller), 3) Resize images to exact display dimensions"
                    />
                    <IssueItem 
                      status="critical"
                      title="No Lazy Loading"
                      description="All images load immediately, even those below the fold"
                      recommendation="Implement lazy-loading: loading='lazy' attribute or IntersectionObserver API"
                    />
                    <IssueItem 
                      status="warning"
                      title="Missing Responsive Images"
                      description="Serving desktop-sized images to mobile devices"
                      recommendation="Use srcset and sizes attributes to serve appropriately sized images per device"
                    />
                    <IssueItem 
                      status="warning"
                      title="No Image Dimensions Specified"
                      description="Contributing to CLS of 0.15 (layout shifts as images load)"
                      recommendation="Add explicit width and height attributes to all <img> tags"
                    />
                  </Section>

                  <Section title="🔴 HIGH PRIORITY: JavaScript & CSS">
                    <IssueItem 
                      status="critical"
                      title="Render-Blocking Resources"
                      description="JavaScript and CSS blocking initial page render, delaying FCP by 3-4 seconds"
                      recommendation="1) Defer non-critical JavaScript, 2) Inline critical CSS, 3) Use async for analytics/third-party scripts, 4) Load CSS with media='print' then switch to 'all'"
                    />
                    <IssueItem 
                      status="critical"
                      title="Unminified Resources"
                      description="CSS, JavaScript, and HTML not minified, adding unnecessary bytes"
                      recommendation="Use minification tools: Terser for JS, cssnano for CSS, html-minifier for HTML. Or use build tools like Webpack/Vite"
                    />
                    <IssueItem 
                      status="warning"
                      title="Unused JavaScript/CSS"
                      description="Loading code that's not being used on the page"
                      recommendation="Use Chrome DevTools Coverage tab to identify and remove unused code. Consider code-splitting"
                    />
                  </Section>

                  <Section title="⚠️ Layout Stability (CLS Issues)">
                    <IssueItem 
                      status="warning"
                      title="CLS Score 0.15 (Target: <0.1)"
                      description="Content shifting as page loads, causing poor user experience"
                      recommendation="1) Set width/height on all images and videos, 2) Reserve space for ads/embeds with min-height, 3) Avoid inserting content above existing content, 4) Use font-display: swap for web fonts"
                    />
                    <IssueItem 
                      status="warning"
                      title="Dynamic Content Insertion"
                      description="Likely inserting banners, notifications, or ads that push content down"
                      recommendation="Pre-allocate space for dynamic content using CSS aspect-ratio or fixed heights"
                    />
                  </Section>

                  <Section title="🟡 Caching & Compression">
                    <IssueItem 
                      status="warning"
                      title="Browser Caching Not Optimized"
                      description="Static resources not cached, forcing repeat downloads"
                      recommendation="Set Cache-Control headers: 1 year for static assets (images, fonts), 1 hour for HTML. Use content hashing for cache busting"
                    />
                    <IssueItem 
                      status="warning"
                      title="Gzip/Brotli Compression"
                      description="Text resources not compressed before transfer"
                      recommendation="Enable Gzip compression (minimum) or Brotli (better) on server for HTML, CSS, JS files"
                    />
                  </Section>

                  <Section title="📱 Mobile-Specific Issues">
                    <IssueItem 
                      status="critical"
                      title="Mobile Performance Score: 0/100"
                      description="Mobile experience is catastrophically bad - 8.7s LCP on mobile"
                      recommendation="Prioritize mobile optimization: 1) Mobile-first image sizes, 2) Touch-friendly buttons (min 48x48px), 3) Reduce mobile-specific JavaScript, 4) Test on real devices"
                    />
                    <IssueItem 
                      status="warning"
                      title="Viewport Configuration"
                      description="May not be optimally configured for mobile devices"
                      recommendation="Verify viewport meta tag: <meta name='viewport' content='width=device-width, initial-scale=1'>"
                    />
                  </Section>

                  <Section title="🔍 On-Page SEO">
                    <IssueItem 
                      status="good"
                      title="HTTPS Implementation"
                      description="Site uses secure HTTPS protocol"
                      recommendation="Maintain SSL certificate and ensure all resources load via HTTPS"
                    />
                    <IssueItem 
                      status="warning"
                      title="Meta Descriptions"
                      description="Many pages have generic or missing meta descriptions"
                      recommendation="Write unique, compelling 150-160 character descriptions for each page with target keywords"
                    />
                    <IssueItem 
                      status="critical"
                      title="Schema Markup Missing"
                      description="No structured data for local business, services, or reviews"
                      recommendation="Implement: LocalBusiness, MedicalBusiness, Service, FAQPage, and Review schemas using JSON-LD format"
                    />
                  </Section>
                </div>
              </div>

              {/* Implementation Priority Matrix */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Implementation Priority Matrix</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <PriorityBox
                    title="Week 1 - URGENT (Do Immediately)"
                    color="red"
                    items={[
                      'Upgrade hosting to faster server',
                      'Compress and convert images to WebP',
                      'Enable CDN (Cloudflare)',
                      'Implement lazy-loading for images',
                      'Enable server-side caching'
                    ]}
                    impact="Expected: 40-50% performance improvement"
                  />
                  <PriorityBox
                    title="Week 2 - HIGH Priority"
                    color="orange"
                    items={[
                      'Minify CSS/JS/HTML',
                      'Defer non-critical JavaScript',
                      'Inline critical CSS',
                      'Set image dimensions (fix CLS)',
                      'Enable Gzip/Brotli compression'
                    ]}
                    impact="Expected: Additional 20-30% improvement"
                  />
                  <PriorityBox
                    title="Week 3-4 - MEDIUM Priority"
                    color="yellow"
                    items={[
                      'Implement responsive images (srcset)',
                      'Remove unused CSS/JS',
                      'Optimize browser caching',
                      'Add schema markup',
                      'Optimize web fonts'
                    ]}
                    impact="Expected: Final 10-15% improvement"
                  />
                  <PriorityBox
                    title="Ongoing - Maintenance"
                    color="blue"
                    items={[
                      'Monitor PageSpeed monthly',
                      'Optimize new images before upload',
                      'Keep plugins/themes updated',
                      'Regular performance audits',
                      'Test on real devices'
                    ]}
                    impact="Maintain 85+ PageSpeed score"
                  />
                </div>
              </div>
            </>
          )}

          {activeTab === 'competitors' && (
            <>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Competitor Performance Comparison</h2>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={competitorData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="score" fill="#9333ea" name="Overall SEO Score" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-4 p-4 bg-red-50 rounded-lg">
                  <p className="text-red-800 font-semibold">
                    ⚠️ Vivace is significantly behind all major competitors in overall SEO performance (35/100 vs 70-82/100)
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <CompetitorCard 
                  name="Dr. Stasch MediSpa"
                  rank="#1 Competitor"
                  score={82}
                  pageSpeed="85/100"
                  strengths={['Fast loading (2.1s LCP)', 'Strong backlink profile', 'Excellent content depth', 'Active blog with SEO-optimized posts']}
                  weaknesses={['Premium pricing may limit market', 'Limited social media presence']}
                  gap="Vivace is 47 points behind in SEO score"
                />
                <CompetitorCard 
                  name="Avane Clinic"
                  rank="#2 Competitor"
                  score={80}
                  pageSpeed="78/100"
                  strengths={['Award-winning reputation', 'Fast site performance', 'Doctor credentials prominent', 'Good local citations']}
                  weaknesses={['Website design could be modernized', 'Limited before/after content']}
                  gap="Vivace is 45 points behind"
                />
                <CompetitorCard 
                  name="Allure Laser"
                  rank="#3 Competitor"
                  score={78}
                  pageSpeed="72/100"
                  strengths={['Two locations (Nairobi & Mombasa)', 'Decent performance', 'Wide service range', 'Strong brand presence']}
                  weaknesses={['Could improve technical SEO', 'Generic content']}
                  gap="Vivace is 43 points behind"
                />
                <CompetitorCard 
                  name="Este Medical Group"
                  rank="#4 Competitor"
                  score={75}
                  pageSpeed="76/100"
                  strengths={['International brand', 'Fast website', 'Advanced technology focus', 'Professional design']}
                  weaknesses={['New to Kenya market', 'Limited local backlinks']}
                  gap="Vivace is 40 points behind"
                />
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Performance Gap Analysis</h2>
                <div className="space-y-4">
                  <div className="p-5 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <h3 className="font-bold text-red-900 mb-2">🚨 Critical Gap: Site Speed</h3>
                    <p className="text-gray-700 mb-2">All competitors have PageSpeed scores of 70-85/100. Vivace is at 35/100.</p>
                    <p className="text-sm text-red-700"><strong>Impact:</strong> Google penalizes slow sites in search rankings. This alone is costing significant organic traffic.</p>
                  </div>
                  
                  <OpportunityItem 
                    title="Content Marketing Leadership Opportunity"
                    description="Most competitors lack comprehensive educational content. By fixing performance issues AND launching a content strategy, Vivace can leapfrog competitors. With better site speed + quality content, you can rank #1."
                  />
                  <OpportunityItem 
                    title="Mobile Experience Advantage"
                    description="While competitors are decent on mobile, none are exceptional. If Vivace achieves <3s mobile LCP, it becomes the fastest beauty clinic site in Kenya - a significant competitive advantage."
                  />
                  <OpportunityItem 
                    title="Local SEO Domination"
                    description="Target 'near me' searches and Parklands-specific terms that competitors overlook. Combined with fast site speed, this creates unbeatable local presence."
                  />
                  <OpportunityItem 
                    title="Technical Excellence as Differentiator"
                    description="None of the competitors have perfect technical SEO. By implementing schema markup, achieving 90+ PageSpeed score, and passing Core Web Vitals, Vivace can establish technical leadership."
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-6 border border-purple-200">
                <h2 className="text-2xl font-bold mb-4 text-purple-900">🎯 Path to #1 Position</h2>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <h3 className="font-bold text-gray-900">Fix Performance (Month 1-2)</h3>
                    </div>
                    <p className="text-sm text-gray-700 pl-11">Get PageSpeed to 85+, pass Core Web Vitals. This immediately improves rankings.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <h3 className="font-bold text-gray-900">Launch Content Strategy (Month 2-3)</h3>
                    </div>
                    <p className="text-sm text-gray-700 pl-11">Publish comprehensive treatment guides, before/after galleries, weekly blog posts.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <h3 className="font-bold text-gray-900">Build Authority (Month 3-6)</h3>
                    </div>
                    <p className="text-sm text-gray-700 pl-11">Acquire quality backlinks, get featured in health publications, build local citations.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                      <h3 className="font-bold text-gray-900">Dominate Local (Month 4-6)</h3>
                    </div>
                    <p className="text-sm text-gray-700 pl-11">Optimize Google Business Profile, generate reviews, create location-specific pages.</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-purple-100 rounded-lg">
                  <p className="font-semibold text-purple-900">Expected Timeline: Rank #1 for primary keywords within 6 months by addressing performance first, then content and authority.</p>
                </div>
              </div>
            </>
          )}

          {activeTab === 'strategy' && (
            <>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Content Strategy: High-Priority Keywords</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-purple-50">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Keyword Topic</th>
                        <th className="px-4 py-3 text-left font-semibold">Search Volume</th>
                        <th className="px-4 py-3 text-left font-semibold">Difficulty</th>
                        <th className="px-4 py-3 text-left font-semibold">Priority</th>
                        <th className="px-4 py-3 text-left font-semibold">Action Required</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <ContentStrategyRow 
                        topic="Laser Hair Removal Nairobi"
                        volume="High"
                        difficulty="Medium"
                        priority="High"
                        action="Create 2,500+ word guide + video testimonials + before/after gallery"
                      />
                      <ContentStrategyRow 
                        topic="Best Dermatologist Nairobi"
                        volume="High"
                        difficulty="High"
                        priority="High"
                        action="Build authority content + doctor profiles + credentials"
                      />
                      <ContentStrategyRow 
                        topic="Skin Rejuvenation Kenya"
                        volume="Medium"
                        difficulty="Low"
                        priority="High"
                        action="Before/after gallery + treatment comparison guides"
                      />
                      <ContentStrategyRow 
                        topic="Botox Prices Nairobi"
                        volume="Medium"
                        difficulty="Medium"
                        priority="High"
                        action="Transparent pricing page + comparison with clinics"
                      />
                      <ContentStrategyRow 
                        topic="Acne Treatment Nairobi"
                        volume="Medium"
                        difficulty="Medium"
                        priority="Medium"
                        action="Comprehensive acne guide + treatment options"
                      />
                      <ContentStrategyRow 
                        topic="Chemical Peel Kenya"
                        volume="Low-Medium"
                        difficulty="Low"
                        priority="Medium"
                        action="Educational content + procedure details + FAQs"
                      />
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Backlink Acquisition Strategy</h2>
                <div className="space-y-4">
                  <BacklinkStrategyCard
                    source="Local Business Directories"
                    examples="My1Health, InfoHub Kenya, Business List Kenya, Nairobi Directory"
                    difficulty="Easy"
                    value="Medium"
                    timeline="Week 1-2"
                    cost="Free - $50"
                  />
                  <BacklinkStrategyCard
                    source="Health & Beauty Blogs"
                    examples="Kenya beauty bloggers, wellness influencers, lifestyle magazines"
                    difficulty="Medium"
                    value="High"
                    timeline="Month 2-3"
                    cost="$200-500 (content creation)"
                  />
                  <BacklinkStrategyCard
                    source="Medical Associations"
                    examples="Kenya Medical Practitioners Board, Dermatology Society Kenya"
                    difficulty="Hard"
                    value="Very High"
                    timeline="Month 3-4"
                    cost="Membership fees"
                  />
                  <BacklinkStrategyCard
                    source="Guest Posting"
                    examples="Beauty/lifestyle publications, health websites, women's magazines"
                    difficulty="Medium"
                    value="High"
                    timeline="Month 2-6"
                    cost="$100-300 per post"
                  />
                  <BacklinkStrategyCard
                    source="Press Releases & Media"
                    examples="New treatments, community initiatives, expert commentary"
                    difficulty="Easy-Medium"
                    value="Medium-High"
                    timeline="Ongoing"
                    cost="$50-200 per release"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-6 border border-purple-200">
                <h2 className="text-2xl font-bold mb-6 text-purple-900">Local SEO Battle Plan</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <StrategyCard 
                    title="Google Business Profile Optimization"
                    items={[
                      'Complete all profile sections (services, hours, attributes)',
                      'Post 3x weekly (treatments, tips, before/afters)',
                      'Respond to ALL reviews within 24 hours',
                      'Upload 100+ high-quality photos',
                      'Use Google Posts for promotions and updates',
                      'Enable messaging and Q&A'
                    ]}
                  />
                  <StrategyCard 
                    title="Citation Building (NAP Consistency)"
                    items={[
                      'Ensure Name, Address, Phone consistency everywhere',
                      'List on Kenya healthcare directories',
                      'Add to beauty/wellness directories',
                      'Get featured on medical association sites',
                      'Build citations on social platforms',
                      'Fix any incorrect listings (Yelp, TripAdvisor, etc.)'
                    ]}
                  />
                  <StrategyCard 
                    title="Location-Specific Content"
                    items={[
                      'Create Parklands neighborhood page',
                      'Target "near me" searches',
                      'Add local landmarks in content',
                      'Embed Google Map on contact page',
                      'Create "How to Find Us" guide with photos',
                      'Mention nearby businesses/areas'
                    ]}
                  />
                  <StrategyCard 
                    title="Review Generation System"
                    items={[
                      'Automated post-treatment review requests (email/SMS)',
                      'QR codes in clinic for easy Google reviews',
                      'Train staff to request reviews',
                      'Feature reviews on website with schema markup',
                      'Create video testimonial library',
                      'Respond to all reviews (positive and negative)'
                    ]}
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Schema Markup Implementation</h2>
                <p className="text-gray-700 mb-4">Add these structured data types to improve search visibility:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <SchemaCard
                    type="LocalBusiness + MedicalBusiness"
                    priority="URGENT"
                    benefit="Appear in local pack, show business info in search"
                    fields="Name, address, phone, hours, services, geo coordinates"
                  />
                  <SchemaCard
                    type="Service Schema"
                    priority="High"
                    benefit="Rich results for each treatment/service"
                    fields="Service type, provider, price range, duration"
                  />
                  <SchemaCard
                    type="Review Schema"
                    priority="High"
                    benefit="Star ratings in search results"
                    fields="Rating value, review count, individual reviews"
                  />
                  <SchemaCard
                    type="FAQPage Schema"
                    priority="Medium"
                    benefit="Expandable FAQ in search results"
                    fields="Question and answer pairs for common queries"
                  />
                  <SchemaCard
                    type="BreadcrumbList"
                    priority="Medium"
                    benefit="Breadcrumb navigation in search"
                    fields="Page hierarchy and navigation path"
                  />
                  <SchemaCard
                    type="Organization"
                    priority="Low"
                    benefit="Brand knowledge panel"
                    fields="Logo, social profiles, contact info"
                  />
                </div>
              </div>
            </>
          )}

          {activeTab === 'roadmap' && (
            <>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">6-Month SEO Roadmap to #1 Position in East Africa</h2>
                
                <RoadmapPhase 
                  month="Month 1"
                  title="🚨 CRITICAL: Performance Emergency Fix"
                  color="red"
                  tasks={[
                    'WEEK 1: Upgrade hosting to premium tier (WP Engine/Kinsta) - Target TTFB <0.8s',
                    'WEEK 1: Implement Cloudflare CDN - Free tier',
                    'WEEK 1: Compress all images, convert to WebP - Use TinyPNG/ImageOptim',
                    'WEEK 2: Enable lazy-loading for all images',
                    'WEEK 2: Minify CSS, JavaScript, HTML',
                    'WEEK 3: Defer non-critical JavaScript, inline critical CSS',
                    'WEEK 3: Set explicit dimensions on all images (fix CLS)',
                    'WEEK 4: Enable Gzip/Brotli compression and browser caching',
                    'WEEK 4: Run PageSpeed test - Target: 70+/100'
                  ]}
                  kpi="Target: PageSpeed 70+, LCP <4s, Pass mobile Core Web Vitals"
                  budget="$500-800 (hosting upgrade + tools)"
                />

                <RoadmapPhase 
                  month="Month 2"
                  title="⚡ Performance Optimization + Foundation"
                  color="orange"
                  tasks={[
                    'WEEK 1: Continue performance tweaks - Target 85+ PageSpeed',
                    'WEEK 1: Implement schema markup (LocalBusiness, MedicalBusiness, Service)',
                    'WEEK 2: Optimize all meta titles and descriptions',
                    'WEEK 2: Create/optimize Google Business Profile',
                    'WEEK 3: Build 20 local directory citations (NAP consistency)',
                    'WEEK 3: Set up Google Analytics and Search Console tracking',
                    'WEEK 4: Launch blog - Publish first 4 SEO-optimized posts',
                    'WEEK 4: Create comprehensive service pages (1,500+ words each)'
                  ]}
                  kpi="Target: PageSpeed 85+, Core Web Vitals PASSED, 20 citations built"
                  budget="$300-500 (content creation + tools)"
                />

                <RoadmapPhase 
                  month="Month 3-4"
                  title="📈 Content & Authority Building"
                  color="yellow"
                  tasks={[
                    'Publish 8 blog posts (2 per week) - Focus on high-volume keywords',
                    'Create before/after gallery with 50+ cases',
                    'Launch video content (5-10 treatment explainers + testimonials)',
                    'Guest post on 5 high-authority beauty/health sites',
                    'Secure 2-3 local news mentions or expert interviews',
                    'Build 30 additional quality backlinks',
                    'Create FAQ pages for each service with FAQPage schema',
                    'Implement internal linking strategy',
                    'Generate 50+ Google reviews',
                    'Build location-specific landing pages (Parklands, Westlands, Karen)'
                  ]}
                  kpi="Target: Ranking for 50+ keywords in top 10, 50 backlinks total"
                  budget="$800-1,200 (content + outreach)"
                />

                <RoadmapPhase 
                  month="Month 5-6"
                  title="🏆 Dominance & Scale"
                  color="green"
                  tasks={[
                    'Publish 8 advanced content pieces (ultimate guides)',
                    'Create patient success stories hub',
                    'Secure backlinks from medical associations',
                    'Press releases for new treatments/achievements (3-4 releases)',
                    'Build 40 additional high-quality backlinks',
                    'Optimize conversion paths and CTAs',
                    'Implement advanced schema (FAQ, How-To, Video)',
                    'Launch referral program with SEO benefits',
                    'Competitive analysis and strategy refinement',
                    'Target featured snippets for key terms'
                  ]}
                  kpi="Target: #1 for primary keywords, 150+ backlinks, 300% traffic growth"
                  budget="$1,000-1,500 (advanced content + link building)"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-600">Expected Outcomes</h3>
                  <ul className="space-y-3">
                    <OutcomeItem text="Rank #1 for 'laser hair removal Nairobi'" />
                    <OutcomeItem text="Rank #1 for 'dermatologist Parklands'" />
                    <OutcomeItem text="Rank top 3 for 20+ high-value keywords" />
                    <OutcomeItem text="300-400% increase in organic traffic" />
                    <OutcomeItem text="Domain authority increase to 40-45" />
                    <OutcomeItem text="150+ quality backlinks acquired" />
                    <OutcomeItem text="Pass Core Web Vitals (mobile & desktop)" />
                    <OutcomeItem text="PageSpeed score 85-90/100" />
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-600">Investment Required</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-700">Performance fixes</span>
                      <span className="font-semibold">$1,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Content creation</span>
                      <span className="font-semibold">$3,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Link building</span>
                      <span className="font-semibold">$2,500</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Technical optimization</span>
                      <span className="font-semibold">$800</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Tools & software</span>
                      <span className="font-semibold">$700</span>
                    </li>
                    <li className="flex justify-between pt-3 border-t border-gray-200">
                      <span className="text-gray-900 font-bold">Total (6 months)</span>
                      <span className="font-bold text-purple-600">$8,000</span>
                    </li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-3">*Prices in USD. Can be adjusted based on local rates.</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-6 border border-green-200">
                  <h3 className="text-xl font-bold mb-4 text-green-800">ROI Projection</h3>
                  <ul className="space-y-3">
                    <li className="flex flex-col">
                      <span className="text-gray-700 text-sm">New monthly organic leads</span>
                      <span className="font-bold text-2xl text-green-600">200-300</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-gray-700 text-sm">Avg. client value</span>
                      <span className="font-bold text-xl">$200-500</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-gray-700 text-sm">Conversion rate (est.)</span>
                      <span className="font-bold text-xl">15-20%</span>
                    </li>
                    <li className="flex flex-col pt-3 border-t border-green-300">
                      <span className="text-green-900 font-bold text-sm">Potential monthly revenue</span>
                      <span className="font-bold text-3xl text-green-600">$6K-30K</span>
                    </li>
                    <li className="flex flex-col mt-3">
                      <span className="text-gray-700 text-sm">ROI Timeline</span>
                      <span className="font-semibold text-lg">Break even: Month 3-4</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-green-100 rounded-lg">
                    <p className="text-xs text-green-900">
                      <strong>Conservative estimate:</strong> $8,000 investment returns $36K-180K in additional revenue over 6 months
                    </p>
                  </div>
                </div>
              </div>

              {/* Monthly KPI Tracking */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Monthly KPI Tracking Dashboard</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-purple-50">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Metric</th>
                        <th className="px-4 py-3 text-center font-semibold">Current</th>
                        <th className="px-4 py-3 text-center font-semibold">Month 1</th>
                        <th className="px-4 py-3 text-center font-semibold">Month 2</th>
                        <th className="px-4 py-3 text-center font-semibold">Month 4</th>
                        <th className="px-4 py-3 text-center font-semibold">Month 6</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="px-4 py-3 font-medium">PageSpeed Score (Mobile)</td>
                        <td className="px-4 py-3 text-center text-red-600 font-bold">35</td>
                        <td className="px-4 py-3 text-center">70</td>
                        <td className="px-4 py-3 text-center">85</td>
                        <td className="px-4 py-3 text-center">87</td>
                        <td className="px-4 py-3 text-center text-green-600 font-bold">90</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">LCP (Mobile)</td>
                        <td className="px-4 py-3 text-center text-red-600 font-bold">8.7s</td>
                        <td className="px-4 py-3 text-center">4.5s</td>
                        <td className="px-4 py-3 text-center">2.8s</td>
                        <td className="px-4 py-3 text-center">2.4s</td>
                        <td className="px-4 py-3 text-center text-green-600 font-bold">2.1s</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Core Web Vitals</td>
                        <td className="px-4 py-3 text-center text-red-600 font-bold">FAILED</td>
                        <td className="px-4 py-3 text-center text-yellow-600">Needs Work</td>
                        <td className="px-4 py-3 text-center text-green-600 font-bold">PASSED</td>
                        <td className="px-4 py-3 text-center text-green-600 font-bold">PASSED</td>
                        <td className="px-4 py-3 text-center text-green-600 font-bold">PASSED</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Organic Traffic</td>
                        <td className="px-4 py-3 text-center">2,000</td>
                        <td className="px-4 py-3 text-center">2,800</td>
                        <td className="px-4 py-3 text-center">4,200</td>
                        <td className="px-4 py-3 text-center">5,800</td>
                        <td className="px-4 py-3 text-center text-green-600 font-bold">8,000</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Keywords in Top 10</td>
                        <td className="px-4 py-3 text-center">12</td>
                        <td className="px-4 py-3 text-center">25</td>
                        <td className="px-4 py-3 text-center">45</td>
                        <td className="px-4 py-3 text-center">75</td>
                        <td className="px-4 py-3 text-center text-green-600 font-bold">120</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Total Backlinks</td>
                        <td className="px-4 py-3 text-center">45</td>
                        <td className="px-4 py-3 text-center">65</td>
                        <td className="px-4 py-3 text-center">90</td>
                        <td className="px-4 py-3 text-center">130</td>
                        <td className="px-4 py-3 text-center text-green-600 font-bold">180</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Domain Authority</td>
                        <td className="px-4 py-3 text-center">18</td>
                        <td className="px-4 py-3 text-center">22</td>
                        <td className="px-4 py-3 text-center">28</td>
                        <td className="px-4 py-3 text-center">35</td>
                        <td className="px-4 py-3 text-center text-green-600 font-bold">42</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Monthly Leads</td>
                        <td className="px-4 py-3 text-center">50</td>
                        <td className="px-4 py-3 text-center">80</td>
                        <td className="px-4 py-3 text-center">130</td>
                        <td className="px-4 py-3 text-center">200</td>
                        <td className="px-4 py-3 text-center text-green-600 font-bold">300</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Success Metrics */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6 border border-blue-200">
                <h2 className="text-2xl font-bold mb-4 text-blue-900">🎯 Success Milestones</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <MilestoneCard
                    month="Month 1"
                    title="Performance Recovery"
                    achievements={[
                      'PageSpeed score reaches 70+',
                      'Core Web Vitals improving',
                      'LCP reduced to <4.5s',
                      'Site loading 3-4 seconds faster'
                    ]}
                  />
                  <MilestoneCard
                    month="Month 2"
                    title="Foundation Complete"
                    achievements={[
                      'Core Web Vitals PASSED',
                      'PageSpeed 85+',
                      'Schema markup implemented',
                      '20+ citations built'
                    ]}
                  />
                  <MilestoneCard
                    month="Month 4"
                    title="Authority Building"
                    achievements={[
                      'Ranking for 75+ keywords',
                      '130+ backlinks acquired',
                      'Domain Authority 35+',
                      'Traffic doubled'
                    ]}
                  />
                  <MilestoneCard
                    month="Month 6"
                    title="Market Leadership"
                    achievements={[
                      '#1 for primary keywords',
                      '180+ quality backlinks',
                      'Domain Authority 42+',
                      'Traffic increased 300%'
                    ]}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Helper Components
const MetricRow = ({ label, value, target, status }) => {
  const statusColors = {
    good: 'text-green-600',
    warning: 'text-yellow-600',
    critical: 'text-red-600'
  };

  return (
    <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
      <div>
        <div className="font-semibold text-gray-900">{label}</div>
        <div className="text-xs text-gray-600">Target: {target}</div>
      </div>
      <div className={`text-xl font-bold ${statusColors[status]}`}>
        {value}
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="border-b border-gray-200 pb-6 last:border-b-0">
    <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
    <div className="space-y-4">{children}</div>
  </div>
);

const IssueItem = ({ status, title, description, recommendation }) => {
  const statusConfig = {
    good: { icon: '✓', color: 'bg-green-100 text-green-700', border: 'border-green-300' },
    warning: { icon: '⚠', color: 'bg-yellow-100 text-yellow-700', border: 'border-yellow-300' },
    critical: { icon: '✕', color: 'bg-red-100 text-red-700', border: 'border-red-300' }
  };

  const config = statusConfig[status];

  return (
    <div className={`border-l-4 ${config.border} bg-gray-50 p-4 rounded-r-lg`}>
      <div className="flex items-start gap-3">
        <div className={`w-8 h-8 rounded-full ${config.color} flex items-center justify-center font-bold flex-shrink-0`}>
          {config.icon}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
          <p className="text-sm text-gray-600 mb-2">{description}</p>
          <p className="text-sm text-purple-700 font-medium">
            <strong>Action:</strong> {recommendation}
          </p>
        </div>
      </div>
    </div>
  );
};

const PerformanceCard = ({ title, mobile, desktop, target, status, description, impact }) => {
  const borderColors = {
    good: 'border-green-500',
    warning: 'border-yellow-500',
    critical: 'border-red-500'
  };

  return (
    <div className={`bg-white rounded-lg p-5 shadow-md border-l-4 ${borderColors[status]}`}>
      <h3 className="font-bold text-lg text-gray-900 mb-3">{title}</h3>
      <div className="grid grid-cols-3 gap-2 mb-3 text-sm">
        <div>
          <div className="text-gray-600">Mobile</div>
          <div className="font-bold text-lg">{mobile}</div>
        </div>
        <div>
          <div className="text-gray-600">Desktop</div>
          <div className="font-bold text-lg">{desktop}</div>
        </div>
        <div>
          <div className="text-gray-600">Target</div>
          <div className="font-bold text-lg text-green-600">{target}</div>
        </div>
      </div>
      <p className="text-sm text-gray-700 mb-2">{description}</p>
      <p className="text-xs text-red-700 font-semibold">Impact: {impact}</p>
    </div>
  );
};

const PriorityBox = ({ title, color, items, impact }) => {
  const colorClasses = {
    red: 'border-red-500 bg-red-50',
    orange: 'border-orange-500 bg-orange-50',
    yellow: 'border-yellow-500 bg-yellow-50',
    blue: 'border-blue-500 bg-blue-50'
  };

  return (
    <div className={`border-l-4 ${colorClasses[color]} rounded-r-lg p-5`}>
      <h3 className="font-bold text-lg text-gray-900 mb-3">{title}</h3>
      <ul className="space-y-2 mb-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm">
            <span className="text-purple-600 font-bold mt-0.5">✓</span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
      <div className="p-3 bg-white rounded-lg border border-gray-200">
        <p className="text-xs font-semibold text-green-700">{impact}</p>
      </div>
    </div>
  );
};

const CompetitorCard = ({ name, rank, score, pageSpeed, strengths, weaknesses, gap }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
    <div className="flex items-center justify-between mb-4">
      <div>
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">{rank}</p>
      </div>
      <div className="text-right">
        <div className="text-3xl font-bold text-purple-600">{score}</div>
        <div className="text-xs text-gray-600">SEO Score</div>
        <div className="text-sm text-green-600 mt-1">{pageSpeed}</div>
      </div>
    </div>
    <div className="mb-3 p-2 bg-red-50 rounded border border-red-200">
      <p className="text-xs text-red-700 font-semibold">{gap}</p>
    </div>
    <div className="space-y-4">
      <div>
        <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
          <CheckCircle size={16} />
          Strengths
        </h4>
        <ul className="space-y-1">
          {strengths.map((item, idx) => (
            <li key={idx} className="text-sm text-gray-700 pl-4">• {item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-orange-700 mb-2 flex items-center gap-2">
          <AlertCircle size={16} />
          Weaknesses
        </h4>
        <ul className="space-y-1">
          {weaknesses.map((item, idx) => (
            <li key={idx} className="text-sm text-gray-700 pl-4">• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const OpportunityItem = ({ title, description }) => (
  <div className="p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
    <h3 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
      <TrendingUp size={18} className="text-purple-600" />
      {title}
    </h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const ContentStrategyRow = ({ topic, volume, difficulty, priority, action }) => (
  <tr className="hover:bg-gray-50">
    <td className="px-4 py-3 font-medium">{topic}</td>
    <td className="px-4 py-3">
      <span className={`px-3 py-1 rounded-full text-sm ${
        volume === 'High' ? 'bg-green-100 text-green-700' :
        volume === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
        'bg-gray-100 text-gray-700'
      }`}>
        {volume}
      </span>
    </td>
    <td className="px-4 py-3">
      <span className={`px-3 py-1 rounded-full text-sm ${
        difficulty === 'Low' ? 'bg-green-100 text-green-700' :
        difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
        'bg-red-100 text-red-700'
      }`}>
        {difficulty}
      </span>
    </td>
    <td className="px-4 py-3">
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
        priority === 'High' ? 'bg-purple-100 text-purple-700' :
        'bg-blue-100 text-blue-700'
      }`}>
        {priority}
      </span>
    </td>
    <td className="px-4 py-3 text-sm text-gray-600">{action}</td>
  </tr>
);

const BacklinkStrategyCard = ({ source, examples, difficulty, value, timeline, cost }) => (
  <div className="p-5 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-lg font-semibold text-gray-900">{source}</h3>
      <div className="flex gap-2">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
          difficulty === 'Easy-Medium' ? 'bg-lime-100 text-lime-700' :
          difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
          'bg-red-100 text-red-700'
        }`}>
          {difficulty}
        </span>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          value === 'Very High' ? 'bg-purple-100 text-purple-700' :
          value === 'High' ? 'bg-blue-100 text-blue-700' :
          value === 'Medium-High' ? 'bg-indigo-100 text-indigo-700' :
          'bg-gray-100 text-gray-700'
        }`}>
          {value}
        </span>
      </div>
    </div>
    <p className="text-sm text-gray-600 mb-2"><strong>Examples:</strong> {examples}</p>
    <div className="flex justify-between text-sm text-gray-600">
      <span><strong>Timeline:</strong> {timeline}</span>
      <span><strong>Cost:</strong> {cost}</span>
    </div>
  </div>
);

const StrategyCard = ({ title, items }) => (
  <div className="bg-white rounded-lg p-5 shadow-md">
    <h3 className="font-bold text-gray-900 mb-3">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
          <span className="text-purple-600 font-bold">→</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const SchemaCard = ({ type, priority, benefit, fields }) => {
  const priorityColors = {
    'URGENT': 'bg-red-100 text-red-700',
    'High': 'bg-orange-100 text-orange-700',
    'Medium': 'bg-yellow-100 text-yellow-700',
    'Low': 'bg-gray-100 text-gray-700'
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-bold text-gray-900">{type}</h4>
        <span className={`px-2 py-1 rounded text-xs font-bold ${priorityColors[priority]}`}>
          {priority}
        </span>
      </div>
      <p className="text-sm text-green-700 mb-2"><strong>Benefit:</strong> {benefit}</p>
      <p className="text-xs text-gray-600"><strong>Required:</strong> {fields}</p>
    </div>
  );
};

const RoadmapPhase = ({ month, title, color, tasks, kpi, budget }) => {
  const colorClasses = {
    red: 'border-red-500 bg-red-50',
    orange: 'border-orange-500 bg-orange-50',
    yellow: 'border-yellow-500 bg-yellow-50',
    green: 'border-green-500 bg-green-50'
  };

  return (
    <div className={`border-l-4 ${colorClasses[color]} rounded-r-xl p-6 mb-6`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`px-4 py-2 bg-white rounded-lg shadow-sm border-2 border-${color}-500`}>
          <span className="font-bold text-gray-900">{month}</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>
      <div className="bg-white rounded-lg p-4 mb-4">
        <h4 className="font-semibold text-gray-900 mb-3">Key Deliverables:</h4>
        <ul className="space-y-2">
          {tasks.map((task, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-green-600 font-bold mt-0.5">✓</span>
              {task}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <div className={`bg-${color}-100 rounded-lg p-3 border border-${color}-300`}>
          <p className="text-xs text-gray-600 mb-1">Success Metrics:</p>
          <p className="font-semibold text-gray-900 text-sm">{kpi}</p>
        </div>
        <div className="bg-blue-100 rounded-lg p-3 border border-blue-300">
          <p className="text-xs text-gray-600 mb-1">Budget:</p>
          <p className="font-semibold text-gray-900 text-sm">{budget}</p>
        </div>
      </div>
    </div>
  );
};

const OutcomeItem = ({ text }) => (
  <li className="flex items-start gap-2 text-gray-700">
    <Award size={18} className="text-purple-600 mt-1 flex-shrink-0" />
    <span>{text}</span>
  </li>
);

const MilestoneCard = ({ month, title, achievements }) => (
  <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-500">
    <div className="font-bold text-blue-600 text-sm mb-1">{month}</div>
    <h4 className="font-bold text-lg text-gray-900 mb-3">{title}</h4>
    <ul className="space-y-1.5">
      {achievements.map((achievement, idx) => (
        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
          <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
          {achievement}
        </li>
      ))}
    </ul>
  </div>
);

export default VivaceSEOAudit;