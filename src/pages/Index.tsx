import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import ScrollExpandHero from "@/components/ScrollExpandHero";
import BentoGrid from "@/components/BentoGrid";
import PlanSection from "@/components/PlanSection";
import FAQSection from "@/components/FAQSection";
import ChatBotSection from "@/components/ChatBotSection";
import Footer from "@/components/Footer";

const Index = () => {
    useEffect(() => {
        // Add chatbot script
        const script = document.createElement("script");
        script.innerHTML = `
      (function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="e0v61zj4YxVNM4nCpl2q9";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
    `;
        document.body.appendChild(script);

        return () => {
            // Cleanup if needed
            const existingScript = document.querySelector(
                'script[id="e0v61zj4YxVNM4nCpl2q9"]'
            );
            if (existingScript) {
                existingScript.remove();
            }
        };
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main>
                <ScrollExpandHero />
                <BentoGrid />
                <PlanSection />
                <FAQSection />
                <ChatBotSection />
            </main>
            <Footer />
        </div>
    );
};

export default Index;
