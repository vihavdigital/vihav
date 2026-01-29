"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import EnquiryForm from "@/components/ui/EnquiryForm";

export default function EnquiryModal({ isOpen, onClose, title = "Enquire Now", layout = "center", contextData = {}, onSuccessAction }) {
    const isSidebar = layout === "right-sheet";

    const modalVariants = {
        center: {
            initial: { opacity: 0, scale: 0.95, y: 20 },
            animate: { opacity: 1, scale: 1, y: 0 },
            exit: { opacity: 0, scale: 0.95, y: 20 },
            className: "fixed inset-0 m-auto w-full max-w-lg h-fit max-h-[90vh] bg-background border border-border rounded-2xl shadow-2xl z-[70] overflow-hidden flex flex-col"
        },
        "right-sheet": {
            initial: { x: "100%", opacity: 0.5 },
            animate: { x: 0, opacity: 1 },
            exit: { x: "100%", opacity: 0.5 },
            className: "fixed top-0 right-0 h-full w-full max-w-md bg-background border-l border-border shadow-2xl z-[70] flex flex-col rounded-l-2xl"
        }
    };

    const currentVariant = modalVariants[isSidebar ? "right-sheet" : "center"];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] cursor-pointer"
                    />

                    {/* Modal/Sheet */}
                    <motion.div
                        initial={currentVariant.initial}
                        animate={currentVariant.animate}
                        exit={currentVariant.exit}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className={currentVariant.className}
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-6 border-b border-border shrink-0">
                            <h3 className="font-serif text-2xl text-foreground">{title}</h3>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-4 md:p-8 overflow-y-auto flex-1">
                            <EnquiryForm
                                onSuccess={() => {
                                    if (onSuccessAction) onSuccessAction();
                                    onClose();
                                }}
                                variant="standard"
                                contextData={contextData}
                            />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
