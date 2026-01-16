// Helper Component for Reusable Gallery Logic
function GallerySection({ blockId, title, heading, images, videos, theme, isLightMode = false }) {
    const [tab, setTab] = useState("images");

    // Only show tabs if there are videos
    const showTabs = videos && videos.length > 0;

    return (
        <>
            <div className="container mx-auto px-6 flex flex-col items-start md:grid md:grid-cols-3 md:items-end md:gap-0 gap-6 mb-12">
                <div className="md:col-span-1">
                    <span className={`${theme.text} uppercase tracking-[0.25em] text-xs font-bold mb-4 block`}>{title}</span>
                    <h2 className={`font-serif text-4xl md:text-5xl ${isLightMode ? 'text-black' : 'text-white'}`}>{heading}</h2>
                </div>

                {/* Tabs (Conditional) */}
                <div className="md:col-span-1 flex justify-start md:justify-center w-full">
                    {showTabs && (
                        <div className={`flex p-1 rounded-lg border backdrop-blur-sm ${isLightMode ? 'bg-gray-100 border-gray-200' : 'bg-white/10 border-white/10'}`}>
                            <button
                                onClick={() => setTab("images")}
                                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${tab === 'images'
                                    ? 'bg-white shadow-sm text-black'
                                    : (isLightMode ? 'text-gray-500 hover:text-black' : 'text-white/60 hover:text-white')}`}
                            >
                                <div className="flex items-center gap-2"><ImageIcon size={16} /> Images</div>
                            </button>
                            <button
                                onClick={() => setTab("videos")}
                                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${tab === 'videos'
                                    ? 'bg-white shadow-sm text-black'
                                    : (isLightMode ? 'text-gray-500 hover:text-black' : 'text-white/60 hover:text-white')}`}
                            >
                                <div className="flex items-center gap-2"><Play size={16} /> Videos</div>
                            </button>
                        </div>
                    )}
                </div>
                <div className="hidden md:block md:col-span-1"></div>
            </div>

            <div className="min-h-[400px]">
                <AnimatePresence mode="wait">
                    {tab === 'images' ? (
                        <motion.div
                            key="images"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <ProjectGallery images={images} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="videos"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="container mx-auto px-6"
                        >
                            <div className="grid md:grid-cols-2 gap-8">
                                {videos.map((vid, i) => (
                                    <div key={i} className="aspect-video bg-black rounded-lg overflow-hidden border border-white/10 shadow-2xl relative group">
                                        <video src={vid} controls className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
