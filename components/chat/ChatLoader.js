"use client";

import dynamic from "next/dynamic";

// Dynamically import ChatWidget with SSR disabled
// This is allowed here because ChatLoader is a client component
const ChatWidget = dynamic(() => import("./ChatWidget"), { ssr: false });

export default function ChatLoader() {
    return <ChatWidget />;
}
