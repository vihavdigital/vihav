"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, User, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { COMPANY_INFO, FAQ_DATA } from "@/data/companyInfo";
import { PROJECTS } from "@/data/projects";

// Helper to get unique keywords from a project title
const getProjectKeywords = (title) => {
    const commonWords = ['keystone', 'vihav', 'group', 'the', 'project', 'residences', 'apartments', 'flats', 'villas'];
    return title.toLowerCase().split(' ').filter(w => !commonWords.includes(w) && w.length > 2);
};

// Simple Keyword Matcher function
const findResponse = (input) => {
    const lowerInput = input.toLowerCase();

    // 0. Greetings
    if (['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'help'].some(w => lowerInput.includes(w)) && lowerInput.length < 20) {
        return "Hello! I am the Vihav AI Assistant. Ask me about our **Projects** (like Niwa, Clermont, or 51), **Locations**, or **Prices**!";
    }

    // 1. Check for "List Projects" / "What projects" intents
    if (lowerInput.includes('project') && (lowerInput.includes('show') || lowerInput.includes('list') || lowerInput.includes('what') || lowerInput.includes('all'))) {
        const uniqueTitles = PROJECTS.slice(0, 5).map(p => `**${p.title}**`).join(', ');
        return `We have several premium projects including ${uniqueTitles}, and more. Which one would you like details for?`;
    }

    // 2. Check Specific Projects (Smart Keyword Matching)
    for (const project of PROJECTS) {
        const uniqueKeywords = getProjectKeywords(project.title);
        // Match if full title exists OR if any unique specific keyword (like "niwa", "clermont", "51") is found
        const isMatch = lowerInput.includes(project.title.toLowerCase()) ||
            uniqueKeywords.some(k => lowerInput.includes(k)) ||
            lowerInput.includes(project.slug.replace('-', ' '));

        if (isMatch) {
            // Intent Matching within Project Context
            if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('rate')) {
                return `Prices for **${project.title}** depend on the specific unit and floor. Please click the **Enquire** button to get a detailed cost sheet from our sales team.`;
            }
            if (lowerInput.includes('location') || lowerInput.includes('where') || lowerInput.includes('address')) {
                return `**${project.title}** is strategically located at **${project.location}**. It offers excellent connectivity.`;
            }
            if (lowerInput.includes('status') || lowerInput.includes('completion') || lowerInput.includes('ready')) {
                return `**${project.title}** is currently **${project.status || 'Under Construction'}**. Possession is expected soon.`;
            }
            if (lowerInput.includes('amenit')) { // amenities
                return `**${project.title}** features premium amenities like ${project.features ? project.features.slice(0, 3).join(', ') : 'Gym, Garden, and Security'}.`;
            }

            // Default Project Info
            return `**${project.title}** is a premium ${project.category} project located at ${project.location}. status: ${project.status || 'Ongoing'}. Would you like to know about its price, location, or amenities?`;
        }
    }

    // 3. Ambiguous "Keystone" or "Vihav" query
    if (lowerInput === 'keystone' || lowerInput === 'vihav') {
        return "We have several projects under this brand. Did you mean **Keystone Niwa**, **Keystone 51**, **Keystone Clermont**, or **Vihav Supremus**?";
    }

    // 4. Check FAQ Knowledge Base
    for (const faq of FAQ_DATA) {
        if (faq.keywords.some(k => lowerInput.includes(k))) {
            return faq.answer;
        }
    }

    // 5. Fallback
    return "I'm not sure about that. You can ask about **Clermont**, **Niwa**, **51**, or general questions like 'Where is your office?'. Use the **Enquire** form for detailed assistance.";
};

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, role: "assistant", text: "Hello! Welcome to Vihav Group. How can I help you find your dream property today?" }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), role: "user", text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        // Simulate network delay for natural feel
        setTimeout(() => {
            const responseText = findResponse(userMsg.text);
            const botMsg = { id: Date.now() + 1, role: "assistant", text: responseText };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 800);
    };

    return (
        <div className="fixed bottom-6 left-6 z-[100] flex flex-col items-start pointer-events-none">

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95, originX: 0, originY: 1 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="pointer-events-auto bg-background/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl w-[90vw] md:w-[380px] h-[500px] flex flex-col overflow-hidden mb-4"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/10 bg-black/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gold-400 flex items-center justify-center text-black">
                                    <Sparkles size={16} fill="currentColor" />
                                </div>
                                <div>
                                    <h3 className="font-serif font-bold text-foreground text-sm">Vihav Assistant</h3>
                                    <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Online
                                    </span>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 rounded-full hover:bg-black/10">
                                <X size={16} />
                            </Button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide" ref={scrollRef}>
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={cn(
                                        "flex w-full",
                                        msg.role === "user" ? "justify-end" : "justify-start"
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                                            msg.role === "user"
                                                ? "bg-gold-500 text-black rounded-tr-sm font-medium"
                                                : "bg-white/10 text-foreground border border-white/10 rounded-tl-sm backdrop-blur-md"
                                        )}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start w-full">
                                    <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 border-t border-white/10 bg-black/5">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="flex gap-2"
                            >
                                <input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about Niwa, pricing..."
                                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-gold-400/50 placeholder:text-muted-foreground/50 h-10 transition-all font-light"
                                />
                                <Button
                                    type="submit"
                                    size="icon"
                                    className="h-10 w-10 rounded-full bg-gold-500 text-black hover:bg-gold-400 transition-colors shadow-lg"
                                    disabled={!input.trim() || isTyping}
                                >
                                    <Send size={16} />
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Toggle Button */}
            <motion.button
                layout
                onClick={() => setIsOpen(!isOpen)}
                className="pointer-events-auto group relative flex items-center gap-2 bg-foreground text-background shadow-2xl hover:scale-105 transition-all active:scale-95 overflow-hidden rounded-full p-0 h-14"
                initial={{ width: 56 }}
                whileHover={{ width: 'auto' }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon Container */}
                <div className="relative z-10 w-14 h-14 flex items-center justify-center shrink-0">
                    <Sparkles size={24} className="group-hover:text-black transition-colors" />
                    {/* Notification Dot */}
                    {!isOpen && (
                        <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-red-500 rounded-full border border-background z-20 group-hover:border-gold-400" />
                    )}
                </div>

                {/* Text Label (Reveals on Hover) */}
                <motion.span
                    className="relative z-10 font-bold text-sm pr-6 whitespace-nowrap overflow-hidden group-hover:text-black"
                    initial={{ opacity: 0, width: 0 }}
                    whileHover={{ opacity: 1, width: 'auto' }}
                    transition={{ duration: 0.2 }}
                >
                    ASK VIHAV AI
                </motion.span>
            </motion.button>
        </div>
    );
}
