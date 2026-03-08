 import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  MapPin,
  Recycle,
  Leaf,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
  Calendar,
  Truck,
  Award,
  TrendingUp,
} from "lucide-react";

export default function EcoVoltApp() {
  const [activeTab, setActiveTab] = useState("home");
  const [pickupForm, setPickupForm] = useState({
    name: "",
    email: "",
    phone: "",
    batteryType: "lithium-ion",
    capacity: "",
    date: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [selectedCenter, setSelectedCenter] = useState(null);

  const disposalCenters = [
    {
      id: 1,
      name: "EcoVolt Downtown Hub",
      location: "123 Green Street, Chennai",
      hours: "9 AM - 6 PM",
      capacity: "85%",
      distance: "2.3 km",
    },
    {
      id: 2,
      name: "Coastal Recycling Facility",
      location: "456 Marine Drive, Chennai",
      hours: "8 AM - 7 PM",
      capacity: "42%",
      distance: "5.1 km",
    },
    {
      id: 3,
      name: "EcoVolt North Branch",
      location: "789 Eco Park, Chennai",
      hours: "10 AM - 5 PM",
      capacity: "60%",
      distance: "8.7 km",
    },
  ];

  const handlePickupChange = (e) => {
    const { name, value } = e.target;
    setPickupForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-6 border-b border-emerald-500/20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-2xl font-bold"
        >
          <Zap className="w-8 h-8 text-emerald-400" />
          <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
            EcoVolt
          </span>
        </motion.div>

        <div className="flex gap-8">
          {["home", "finder", "process", "impact"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-medium transition-all relative group ${
                activeTab === tab
                  ? "text-emerald-400"
                  : "text-gray-300 hover:text-emerald-300"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {activeTab === tab && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {/* Home Tab */}
          {activeTab === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen pt-20 px-8"
            >
              {/* Hero */}
              <div className="max-w-4xl mx-auto text-center mb-20">
                <motion.h1
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-7xl font-black mb-6 leading-tight"
                >
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                    Safe EV Battery
                  </span>
                  <br />
                  Disposal Made Simple
                </motion.h1>
                <motion.p
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-xl text-gray-300 mb-8"
                >
                  Responsible recycling of electric vehicle batteries. Protect
                  the planet, recover valuable resources.
                </motion.p>
                <motion.button
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={() => setActiveTab("finder")}
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-400 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 transition-all group"
                >
                  Request Pickup Now
                  <ArrowRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              {/* Stats */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-20"
              >
                {[
                  { icon: TrendingUp, label: "Batteries Recycled", value: "24,850" },
                  { icon: Award, label: "Materials Recovered", value: "412 tons" },
                  { icon: Leaf, label: "CO‚ÇÇ Prevented", value: "1,240 tons" },
                  { icon: Zap, label: "Energy Saved", value: "8.4M kWh" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 text-center hover:border-emerald-400/60 transition-colors"
                  >
                    <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                    <div className="text-sm text-gray-400 mb-2">{stat.label}</div>
                    <div className="text-2xl font-bold text-emerald-300">
                      {stat.value}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Features */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto pb-20"
              >
                {[
                  {
                    icon: Truck,
                    title: "Free Pickup",
                    desc: "We collect batteries from your location at no cost",
                  },
                  {
                    icon: Recycle,
                    title: "Expert Recycling",
                    desc: "Certified facilities ensure safe & responsible processing",
                  },
                  {
                    icon: CheckCircle,
                    title: "Full Transparency",
                    desc: "Track your battery from collection to final recovery",
                  },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-emerald-500/20 to-teal-500/5 border border-emerald-500/20 rounded-xl p-8 hover:border-emerald-400/50 transition-all group"
                  >
                    <feature.icon className="w-12 h-12 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Finder Tab */}
          {activeTab === "finder" && (
            <motion.div
              key="finder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen pt-20 px-8 pb-20"
            >
              <div className="max-w-5xl mx-auto">
                <motion.h2
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-5xl font-black mb-4 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent"
                >
                  Find & Schedule
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-gray-400 mb-12 text-lg"
                >
                  Locate nearby disposal centers and request a pickup
                </motion.p>

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Form */}
                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    className="lg:col-span-1 bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-8"
                  >
                    <h3 className="text-2xl font-bold mb-6">Pickup Request</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={pickupForm.name}
                        onChange={handlePickupChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={pickupForm.email}
                        onChange={handlePickupChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={pickupForm.phone}
                        onChange={handlePickupChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
                      />
                      <select
                        name="batteryType"
                        value={pickupForm.batteryType}
                        onChange={handlePickupChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-emerald-500/20 rounded-lg text-white focus:outline-none focus:border-emerald-400"
                      >
                        <option value="lithium-ion">Lithium-Ion</option>
                        <option value="lead-acid">Lead-Acid</option>
                        <option value="polymer">LiPo</option>
                      </select>
                      <input
                        type="text"
                        name="capacity"
                        placeholder="Capacity (kWh)"
                        value={pickupForm.capacity}
                        onChange={handlePickupChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
                      />
                      <input
                        type="date"
                        name="date"
                        value={pickupForm.date}
                        onChange={handlePickupChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-emerald-500/20 rounded-lg text-white focus:outline-none focus:border-emerald-400"
                      />
                      <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-400 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
                      >
                        Request Pickup
                      </button>
                    </form>
                    <AnimatePresence>
                      {submitted && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="mt-4 p-4 bg-emerald-500/20 border border-emerald-400 rounded-lg flex items-center gap-2 text-emerald-300"
                        >
                          <CheckCircle className="w-5 h-5" />
                          Request submitted! We'll contact you soon.
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Centers List */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="lg:col-span-2 space-y-4"
                  >
                    {disposalCenters.map((center) => (
                      <motion.div
                        key={center.id}
                        variants={itemVariants}
                        onClick={() =>
                          setSelectedCenter(
                            selectedCenter?.id === center.id ? null : center
                          )
                        }
                        className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 cursor-pointer hover:border-emerald-400/60 transition-all"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="text-xl font-bold text-emerald-300">
                              {center.name}
                            </h4>
                            <p className="text-gray-400 flex items-center gap-2 mt-1">
                              <MapPin className="w-4 h-4" />
                              {center.location}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-emerald-400 font-semibold">
                              {center.distance}
                            </div>
                            <div className="text-xs text-gray-500">away</div>
                          </div>
                        </div>

                        <AnimatePresence>
                          {selectedCenter?.id === center.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-4 pt-4 border-t border-emerald-500/20 space-y-2"
                            >
                              <div className="flex justify-between">
                                <span className="text-gray-400">Hours:</span>
                                <span className="text-white">
                                  {center.hours}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Capacity:</span>
                                <div className="flex items-center gap-2">
                                  <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
                                    <div
                                      className="h-full bg-gradient-to-r from-emerald-400 to-teal-300"
                                      style={{
                                        width: center.capacity,
                                      }}
                                    ></div>
                                  </div>
                                  <span className="text-emerald-300 font-semibold">
                                    {center.capacity}
                                  </span>
                                </div>
                              </div>
                              <button className="w-full mt-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
                                Get Directions
                              </button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Process Tab */}
          {activeTab === "process" && (
            <motion.div
              key="process"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen pt-20 px-8 pb-20"
            >
              <div className="max-w-4xl mx-auto">
                <motion.h2
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-5xl font-black mb-4 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent"
                >
                  Our Process
                </motion.h2>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-8 mt-12"
                >
                  {[
                    {
                      number: "01",
                      title: "Assessment",
                      desc: "We evaluate your battery's condition and safety status through certified diagnostics.",
                    },
                    {
                      number: "02",
                      title: "Safe Transport",
                      desc: "Specialized packaging and trained personnel ensure secure transportation to our facility.",
                    },
                    {
                      number: "03",
                      title: "Disassembly",
                      desc: "Automated systems carefully disassemble batteries while minimizing environmental impact.",
                    },
                    {
                      number: "04",
                      title: "Material Recovery",
                      desc: "We extract lithium, cobalt, nickel, and other valuable materials for reuse.",
                    },
                    {
                      number: "05",
                      title: "Second Life",
                      desc: "Usable batteries are repurposed for stationary energy storage systems.",
                    },
                    {
                      number: "06",
                      title: "Certification",
                      desc: "You receive a detailed report on your battery's recovery and environmental impact.",
                    },
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      className="flex gap-6 group"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 flex items-center justify-center text-2xl font-black text-slate-900 group-hover:scale-110 transition-transform">
                          {step.number}
                        </div>
                        {i < 5 && (
                          <div className="w-1 h-12 bg-gradient-to-b from-emerald-500 to-teal-400 mt-2"></div>
                        )}
                      </div>
                      <div className="pb-8">
                        <h3 className="text-2xl font-bold text-emerald-300 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 max-w-2xl">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Impact Tab */}
          {activeTab === "impact" && (
            <motion.div
              key="impact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen pt-20 px-8 pb-20"
            >
              <div className="max-w-5xl mx-auto">
                <motion.h2
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-5xl font-black mb-4 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent"
                >
                  Our Impact
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-gray-400 mb-12 text-lg"
                >
                  Making a difference, one battery at a time
                </motion.p>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid md:grid-cols-2 gap-8"
                >
                  {[
                    {
                      icon: Leaf,
                      title: "Environmental Protection",
                      stats: [
                        "99.5% recovery rate",
                        "Zero hazardous waste",
                        "Reduced mining by 80%",
                      ],
                    },
                    {
                      icon: Zap,
                      title: "Energy & Resources",
                      stats: [
                        "8.4M kWh energy saved",
                        "412 tons recovered",
                        "100% circular economy",
                      ],
                    },
                    {
                      icon: Award,
                      title: "Certifications",
                      stats: [
                        "ISO 14001",
                        "e-Stewards certified",
                        "UN sustainable goals",
                      ],
                    },
                    {
                      icon: TrendingUp,
                      title: "Growth & Impact",
                      stats: [
                        "24,850 batteries recycled",
                        "45% growth YoY",
                        "15 facilities worldwide",
                      ],
                    },
                  ].map((impact, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      className="bg-gradient-to-br from-emerald-500/20 to-teal-500/5 border border-emerald-500/30 rounded-xl p-8"
                    >
                      <impact.icon className="w-12 h-12 text-emerald-400 mb-4" />
                      <h3 className="text-2xl font-bold text-emerald-300 mb-4">
                        {impact.title}
                      </h3>
                      <ul className="space-y-2">
                        {impact.stats.map((stat, j) => (
                          <li
                            key={j}
                            className="text-gray-300 flex items-center gap-2"
                          >
                            <CheckCircle className="w-4 h-4 text-emerald-400" />
                            {stat}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-emerald-500/20 mt-20 px-8 py-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-emerald-400" />
              <span className="font-bold">EcoVolt</span>
            </div>
            <p className="text-gray-400 text-sm">
              Safe, responsible EV battery disposal.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-emerald-300">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button className="hover:text-emerald-400 transition">
                  About Us
                </button>
              </li>
              <li>
                <button className="hover:text-emerald-400 transition">
                  Careers
                </button>
              </li>
              <li>
                <button className="hover:text-emerald-400 transition">
                  Blog
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-emerald-300">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button className="hover:text-emerald-400 transition">
                  FAQ
                </button>
              </li>
              <li>
                <button className="hover:text-emerald-400 transition">
                  Contact
                </button>
              </li>
              <li>
                <button className="hover:text-emerald-400 transition">
                  Privacy
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-emerald-300">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@ecovolt.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-emerald-500/20 pt-8 text-center text-gray-500 text-sm">
          <p>¬© 2026 EcoVolt. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

