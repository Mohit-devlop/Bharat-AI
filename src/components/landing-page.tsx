import { motion } from "framer-motion";
import {
  Sprout,
  TrendingUp,
  Globe,
  ChevronRight,
  Droplets,
  FlaskConical,
  CloudRain,
  Sparkles,
  CheckCircle2,
  BarChart3,
  ShieldCheck,
  Layers,
  ArrowRight,
} from "lucide-react";
import { Button } from "./ui/button";
import { AnimatedBackground } from "./animated-background";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/language-context";

interface LandingPageProps {
  onStartPrediction: () => void;
  onLanguageChange: (lang: string) => void;
}

export function LandingPage({ onStartPrediction, onLanguageChange }: LandingPageProps) {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang as any);
    onLanguageChange(lang);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const capabilities = [
    {
      icon: TrendingUp,
      title: t("yieldPrediction"),
      description:
        "Accurate harvest estimates per acre powered by soil health, crop variety, and regional climate models.",
      metric: "95% Accuracy",
      badgeClass: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
    },
    {
      icon: Droplets,
      title: t("waterOptimization"),
      description:
        "Precision irrigation schedules matched to crop growth stages so every drop counts during dry spells.",
      metric: "30% Water Saved",
      badgeClass: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
    },
    {
      icon: FlaskConical,
      title: t("fertilizerPlans"),
      description:
        "Balanced NPK dosage recommendations that protect soil fertility while maximizing grain quality.",
      metric: "Smart NPK Split",
      badgeClass: "bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300",
    },
    {
      icon: CloudRain,
      title: t("weatherInsights"),
      description:
        "7-day rainfall, humidity, and temperature outlooks to help you plan sowing, spraying, and harvesting.",
      metric: "Live Forecasts",
      badgeClass: "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Enter Farm & Crop Details",
      description:
        "Choose your crop, soil type, field size, and region in under 60 seconds using our simple guided form.",
      icon: Layers,
    },
    {
      step: "02",
      title: "Bharat AI Analyzes Conditions",
      description:
        "Our models combine soil properties, seasonal patterns, and weather telemetry to forecast outcomes.",
      icon: BarChart3,
    },
    {
      step: "03",
      title: "Get Your Actionable Plan",
      description:
        "Receive expected yield, net profit projections, and step-by-step irrigation & fertilizer schedules.",
      icon: ShieldCheck,
    },
  ];

  const supportedCrops = [
    { name: "Wheat", season: "Rabi", icon: "🌾" },
    { name: "Rice", season: "Kharif", icon: "🍚" },
    { name: "Corn", season: "Kharif / Rabi", icon: "🌽" },
    { name: "Cotton", season: "Kharif", icon: "🌸" },
    { name: "Sugarcane", season: "Annual", icon: "🎋" },
    { name: "Potato", season: "Rabi", icon: "🥔" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />

      {/* Top Navigation Bar */}
      <header className="relative z-10 container mx-auto px-4 py-4">
        <div className="flex justify-between items-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-green-200 dark:border-green-800 rounded-2xl px-4 py-3 shadow-sm">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="p-2 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 text-white shadow-sm">
              <Sprout size={24} />
            </div>
            <div>
              <div className="font-semibold text-green-800 dark:text-green-100 leading-none">
                {t("appName")}
              </div>
              <div className="text-xs text-green-600 dark:text-green-300 mt-1">
                Bharat AI Platform
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-green-800 dark:text-green-100">
            <button
              type="button"
              onClick={() => scrollToSection("features")}
              className="hover:text-green-600 dark:hover:text-green-300 transition-colors cursor-pointer"
            >
              Features
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("how-it-works")}
              className="hover:text-green-600 dark:hover:text-green-300 transition-colors cursor-pointer"
            >
              How It Works
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("crops")}
              className="hover:text-green-600 dark:hover:text-green-300 transition-colors cursor-pointer"
            >
              Supported Crops
            </button>
          </nav>

          {/* Language & Quick Action */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="flex items-center gap-2 bg-green-50 dark:bg-slate-700 border border-green-200 dark:border-green-700 rounded-full px-3 py-1.5">
              <Globe className="text-green-600 dark:text-green-400" size={18} />
              <select
                aria-label="Select Language"
                value={language}
                className="bg-transparent text-sm font-medium cursor-pointer focus:outline-none text-green-800 dark:text-green-100"
                onChange={(e) => handleLanguageChange(e.target.value)}
              >
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="mr">मराठी</option>
                <option value="ta">தமிழ்</option>
                <option value="od">ଓଡ଼ିଆ</option>
                <option value="bn">বাংলা</option>
              </select>
            </div>

            <Button
              onClick={onStartPrediction}
              className="hidden lg:flex bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full px-6 shadow-sm"
            >
              {t("startNow")}
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Hero Copy & CTA */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 dark:bg-slate-800/90 border border-green-200 dark:border-green-700 shadow-sm text-sm font-medium text-green-700 dark:text-green-300"
            >
              <Sparkles size={16} className="text-green-600 dark:text-green-400" />
              <span>Bharat AI • Smart Agriculture Companion</span>
            </motion.div>

            <motion.h1
              className="text-4xl font-semibold tracking-tight text-green-800 dark:text-green-100"
              style={{ lineHeight: 1.15 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t("heroTitle")}
            </motion.h1>

            <motion.p
              className="text-green-700 dark:text-green-200 text-lg md:text-xl"
              style={{ lineHeight: 1.6 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              {t("heroSubtitle")}
            </motion.p>

            {/* Quick Feature Pills */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { icon: "🌱", textKey: "yieldPrediction" },
                { icon: "💧", textKey: "waterOptimization" },
                { icon: "🧪", textKey: "fertilizerPlans" },
                { icon: "☀️", textKey: "weatherInsights" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-green-200 dark:border-green-700 shadow-sm text-sm font-medium"
                  whileHover={{ scale: 1.05, borderColor: "#f59e0b" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">{feature.icon}</span>
                  <span className="text-green-800 dark:text-green-100">{t(feature.textKey)}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
            >
              <Button
                onClick={onStartPrediction}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 rounded-full shadow-lg group"
                size="lg"
              >
                {t("startNow")}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronRight className="ml-2" size={20} />
                </motion.div>
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() => scrollToSection("features")}
                className="border-2 border-green-600 dark:border-green-400 text-green-700 dark:text-green-100 hover:bg-green-50 dark:hover:bg-green-900 px-8 py-6 rounded-full"
                size="lg"
              >
                {t("learnMore")}
              </Button>
            </motion.div>

            {/* Trust Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center gap-6 pt-2 text-sm text-green-700 dark:text-green-300"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-green-600 dark:text-green-400" />
                <span>6 Indian Languages</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-green-600 dark:text-green-400" />
                <span>Instant AI Recommendations</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-green-600 dark:text-green-400" />
                <span>Farmer-First Design</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Visual Showcase Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 dark:border-slate-700/50">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1707721690544-781fe6ede937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NjIxODg2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Indian farmer inspecting healthy crops"
                className="w-full h-full object-cover"
              />

              {/* Top-Right Floating Yield Card */}
              <motion.div
                className="absolute top-6 right-6 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-green-100 dark:border-green-800"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-green-100 dark:bg-green-900/30">
                    <TrendingUp className="text-green-600 dark:text-green-400" size={22} />
                  </div>
                  <div>
                    <div className="font-semibold text-green-800 dark:text-green-100">+35%</div>
                    <div className="text-xs text-green-600 dark:text-green-300">Avg Yield Boost</div>
                  </div>
                </div>
              </motion.div>

              {/* Bottom-Left Floating Insight Card */}
              <motion.div
                className="absolute bottom-6 left-6 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-green-100 dark:border-green-800"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900">
                    <Droplets className="text-blue-600 dark:text-blue-400" size={22} />
                  </div>
                  <div>
                    <div className="font-semibold text-green-800 dark:text-green-100">30% Water Saved</div>
                    <div className="text-xs text-green-600 dark:text-green-300">Smart Irrigation Active</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative floating emojis */}
            <motion.div
              className="absolute -top-4 -left-4 text-6xl"
              animate={{ rotate: [0, 10, 0], y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🌾
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -right-4 text-5xl"
              animate={{ rotate: [0, -10, 0], y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              🚜
            </motion.div>
          </motion.div>
        </section>

        {/* Impact Stats Bar */}
        <motion.section
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          {[
            { number: "50K+", label: "Farmers Empowered", icon: "👨‍🌾" },
            { number: "95%", label: "Forecast Accuracy", icon: "🎯" },
            { number: "30%", label: "Water Conserved", icon: "💧" },
            { number: "40%", label: "Profit & Yield Lift", icon: "📈" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-green-100 dark:border-green-800"
              whileHover={{ scale: 1.04, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-semibold text-green-800 dark:text-green-100">
                {stat.number}
              </div>
              <div className="text-sm text-green-600 dark:text-green-300 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.section>

        {/* Core Capabilities Section */}
        <section id="features" className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold tracking-widest">
              CAPABILITIES
            </div>
            <h2 className="text-3xl font-semibold text-green-800 dark:text-green-100">
              Everything Your Farm Needs to Thrive
            </h2>
            <p className="text-green-700 dark:text-green-200">
              Built for Indian soil conditions, seasonal cycles, and practical day-to-day farm decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl p-6 border-2 border-green-100 dark:border-green-800 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl ${item.badgeClass}`}>
                      <item.icon size={24} />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-50 dark:bg-slate-700 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-700">
                      {item.metric}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 dark:text-green-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-green-700 dark:text-green-200" style={{ lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="mt-20">
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-green-100 dark:border-green-800 shadow-xl">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold tracking-widest">
                HOW IT WORKS
              </div>
              <h2 className="text-3xl font-semibold text-green-800 dark:text-green-100">
                From Farm Inputs to Smart Harvest Plan in 3 Steps
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-green-200 dark:border-green-700 shadow-md space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-semibold text-green-600 dark:text-green-400">
                      {item.step}
                    </span>
                    <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                      <item.icon size={22} />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-green-800 dark:text-green-100">
                    {item.title}
                  </h3>
                  <p className="text-sm text-green-700 dark:text-green-200" style={{ lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Crops Showcase */}
        <section id="crops" className="mt-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold tracking-widest mb-2">
                MAJOR INDIAN CROPS
              </div>
              <h2 className="text-3xl font-semibold text-green-800 dark:text-green-100">
                Choose Your Crop & Predict Yield Instantly
              </h2>
            </div>
            <Button
              onClick={onStartPrediction}
              variant="outline"
              className="border-2 border-green-600 dark:border-green-400 text-green-700 dark:text-green-100 hover:bg-green-50 dark:hover:bg-green-900 rounded-full"
            >
              Predict Now <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {supportedCrops.map((crop, idx) => (
              <motion.button
                key={idx}
                type="button"
                onClick={onStartPrediction}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-green-100 dark:border-green-800 shadow-md text-center cursor-pointer transition-all hover:border-green-400"
              >
                <div className="text-4xl mb-2">{crop.icon}</div>
                <div className="font-semibold text-green-800 dark:text-green-100">{crop.name}</div>
                <div className="text-xs text-green-600 dark:text-green-300 mt-1">{crop.season}</div>
              </motion.button>
            ))}
          </div>
        </section>

        {/* Final CTA Banner */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 text-white shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <h2 className="text-3xl font-semibold">
                Ready to Grow Smarter This Season?
              </h2>
              <p className="text-green-100 text-lg">
                Get your personalized AI crop yield forecast, irrigation schedule, and fertilizer plan in seconds.
              </p>
            </div>
            <Button
              onClick={onStartPrediction}
              size="lg"
              className="bg-white text-green-800 hover:bg-green-50 px-8 py-6 rounded-full shadow-lg font-semibold"
            >
              {t("startNow")}
              <ChevronRight className="ml-2" size={20} />
            </Button>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
