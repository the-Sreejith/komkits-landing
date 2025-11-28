"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, DollarSign, RefreshCcw, Settings, FileText, Mail, ShoppingCart, Database, BarChart3, BrainCircuit, ArrowRight, Store } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";

const tabs = [
  "Automate Bookkeeping",
  "Generate Invoices",
  "Track Growth",
  "Ops on Autopilot",
  "Connect Store",
];

export function PipelineSection() {
  const [activeTab, setActiveTab] = useState("Automate Bookkeeping");

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <section id="pipeline" className="bg-black py-12 lg:py-20 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              <span className="text-white">Streamline your finances</span>
              <br />
              <span className="text-[#ffaa40]">from order to audit</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Komkits handles the heavy lifting of e-commerce bookkeeping. Connect your channels, automate reconciliation, and get real-time financial clarity.
            </p>
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium text-sm transition-colors"
              data-cal-namespace="15min"
              data-cal-link="the-sreejith/15min"
              data-cal-config='{"layout":"month_view"}'
            >
              Book a Demo
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-between items-stretch mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-6 py-3 rounded-lg text-xs sm:text-sm font-medium transition-colors border flex items-center",
                activeTab === tab
                  ? "bg-black border-blue-500 text-white"
                  : "bg-transparent border-white/10 text-gray-400 hover:text-white hover:border-white/20"
              )}
            >
              {getTabIcon(tab)}
              <span className="ml-2">{tab}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
                {activeTab === "Connect Store" && (
                    <TabContent key="connect" title="Seamless Store Integration" description="Connect Shopify, WooCommerce, or Amazon in one click. We sync orders, refunds, and fees automatically." stat="1-Click" statLabel="setup" color="#4ADE80">
                        <ConnectStoreDiagram />
                    </TabContent>
                )}
                {activeTab === "Automate Bookkeeping" && (
                    <TabContent key="bookkeeping" title="AI-Driven Categorization" description="Our AI analyzes every transaction and assigns the correct tax codes and categories, learning from your history." stat="99%" statLabel="accuracy" color="#60A5FA">
                         <AutomateBookkeepingDiagram />
                    </TabContent>
                )}
                {activeTab === "Generate Invoices" && (
                    <TabContent key="invoices" title="Instant Invoicing" description="Turn orders into professional invoices automatically. Send to customers or sync with your accounting software." stat="0" statLabel="manual work" color="#F87171">
                        <GenerateInvoicesDiagram />
                    </TabContent>
                )}
                 {activeTab === "Track Growth" && (
                    <TabContent key="growth" title="Real-Time Financial Insights" description="Monitor cash flow, profit margins, and expense trends across all channels in one dashboard." stat="24/7" statLabel="visibility" color="#FACC15">
                        <TrackGrowthDiagram />
                    </TabContent>
                )}
                 {activeTab === "Ops on Autopilot" && (
                    <TabContent key="ops" title="Complete Financial Autopilot" description="Set rules for payouts, tax estimation, and supplier payments. Let Komkits handle the operations." stat="10h+" statLabel="saved per week" color="#C084FC">
                        <OpsAutopilotDiagram />
                    </TabContent>
                )}
            </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function TabContent({ title, description, stat, statLabel, children, color }: any) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="lg:col-span-2">
                     <div>
                        <h3 className="text-xl font-semibold mb-2">{title}</h3>
                        <p className="text-gray-400 text-sm">{description}</p>
                     </div>
                </div>
                <div className="flex items-start justify-end">
                    <div className="bg-white/5 border border-white/10 p-4 rounded-lg w-44">
                        <div className="text-xl font-bold mb-1 flex items-start" style={{ color }}>
                            {stat}
                            <ArrowRight className="w-4 h-4 -rotate-45 ml-1 mt-1" />
                        </div>
                        <div className="text-xs font-medium opacity-70 text-gray-300">{statLabel}</div>
                    </div>
                </div>
            </div>
             {/* Diagram Container */}
             <div className="relative min-h-[400px] w-full bg-black p-4 sm:p-8 rounded-xl border border-white/5 overflow-hidden">
                {children}
             </div>
        </motion.div>
    )
}

function ConnectStoreDiagram() {
    const containerRef = useRef<HTMLDivElement>(null);
    const shopifyRef = useRef<HTMLDivElement>(null);
    const wooRef = useRef<HTMLDivElement>(null);
    const amazonRef = useRef<HTMLDivElement>(null);
    const syncRef = useRef<HTMLDivElement>(null);
    const dbRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className="relative flex flex-col items-center justify-center h-full w-full py-8 gap-8">
             <div className="flex flex-col gap-4 absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-10">
                <Node ref={shopifyRef} label="Shopify" icon={<Store className="w-4 h-4" />} />
                <Node ref={wooRef} label="WooCommerce" icon={<ShoppingCart className="w-4 h-4" />} />
                <Node ref={amazonRef} label="Amazon" icon={<Store className="w-4 h-4" />} />
             </div>
             
             <div className="flex items-center gap-12 md:gap-24 z-10">
                 <div className="w-[140px]"></div> {/* Spacer */}
                <Node ref={syncRef} label="Multi-Channel Sync" icon={<RefreshCcw className="w-4 h-4" />} className="border-blue-500/50" />
                <Node ref={dbRef} label="Komkits DB" icon={<Database className="w-4 h-4" />} status="success" />
             </div>
             
            <AnimatedBeam containerRef={containerRef} fromRef={shopifyRef} toRef={syncRef} duration={3} curvature={50} />
            <AnimatedBeam containerRef={containerRef} fromRef={wooRef} toRef={syncRef} duration={3} />
            <AnimatedBeam containerRef={containerRef} fromRef={amazonRef} toRef={syncRef} duration={3} curvature={-50} />
            <AnimatedBeam containerRef={containerRef} fromRef={syncRef} toRef={dbRef} duration={2} pathColor="#4ADE80" gradientStartColor="#4ADE80" gradientStopColor="#22C55E" endXOffset={-70} />
        </div>
    )
}

function AutomateBookkeepingDiagram() {
    const containerRef = useRef<HTMLDivElement>(null);
    const txRef = useRef<HTMLDivElement>(null);
    const aiRef = useRef<HTMLDivElement>(null);
    const incomeRef = useRef<HTMLDivElement>(null);
    const expenseRef = useRef<HTMLDivElement>(null);
    const reviewRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className="relative flex flex-col items-center justify-center h-full w-full py-8 gap-8">
             <div className="flex items-center gap-12 md:gap-24 z-10">
                <Node ref={txRef} label="Transaction" icon={<DollarSign className="w-4 h-4" />} type="trigger" />
                <Node ref={aiRef} label="AI Engine" icon={<BrainCircuit className="w-4 h-4" />} className="border-purple-500/50" />
                <div className="flex flex-col gap-8">
                    <Node ref={incomeRef} label="Income" subLabel="Sales" status="success" icon={<Check className="w-4 h-4" />} />
                    <Node ref={expenseRef} label="Expense" subLabel="Ads/Software" status="success" icon={<Check className="w-4 h-4" />} />
                    <Node ref={reviewRef} label="Unsure" subLabel="Review needed" status="warning" icon={<DollarSign className="w-4 h-4" />} />
                </div>
             </div>

            <AnimatedBeam containerRef={containerRef} fromRef={txRef} toRef={aiRef} duration={2} />
            <AnimatedBeam containerRef={containerRef} fromRef={aiRef} toRef={incomeRef} duration={3} curvature={50} pathColor="#4ADE80" gradientStartColor="#4ADE80" gradientStopColor="#22C55E" endXOffset={-70} />
            <AnimatedBeam containerRef={containerRef} fromRef={aiRef} toRef={expenseRef} duration={3} curvature={0} pathColor="#4ADE80" gradientStartColor="#4ADE80" gradientStopColor="#22C55E" endXOffset={-70} />
             <AnimatedBeam containerRef={containerRef} fromRef={aiRef} toRef={reviewRef} duration={3} curvature={-50} pathColor="#FACC15" gradientStartColor="#FACC15" gradientStopColor="#EAB308" endXOffset={-70} />
        </div>
    )
}

function GenerateInvoicesDiagram() {
    const containerRef = useRef<HTMLDivElement>(null);
    const orderRef = useRef<HTMLDivElement>(null);
    const generatorRef = useRef<HTMLDivElement>(null);
    const emailRef = useRef<HTMLDivElement>(null);
    const accountingRef = useRef<HTMLDivElement>(null);

    return (
         <div ref={containerRef} className="relative flex flex-col items-center justify-center h-full w-full py-8 gap-8">
             <div className="flex items-center gap-12 md:gap-24 z-10">
                <Node ref={orderRef} label="New Order" icon={<ShoppingCart className="w-4 h-4" />} type="trigger" />
                <Node ref={generatorRef} label="Invoice Gen" icon={<FileText className="w-4 h-4" />} />
                <div className="flex flex-col gap-12">
                     <Node ref={emailRef} label="Send Email" icon={<Mail className="w-4 h-4" />} status="success" />
                     <Node ref={accountingRef} label="Sync Xero/QB" icon={<RefreshCcw className="w-4 h-4" />} status="success" />
                </div>
             </div>

             <AnimatedBeam containerRef={containerRef} fromRef={orderRef} toRef={generatorRef} duration={2} />
            <AnimatedBeam containerRef={containerRef} fromRef={generatorRef} toRef={emailRef} duration={3} curvature={50} pathColor="#4ADE80" gradientStartColor="#4ADE80" gradientStopColor="#22C55E" endXOffset={-70} />
            <AnimatedBeam containerRef={containerRef} fromRef={generatorRef} toRef={accountingRef} duration={3} curvature={-50} pathColor="#4ADE80" gradientStartColor="#4ADE80" gradientStopColor="#22C55E" endXOffset={-70} />
        </div>
    )
}

function TrackGrowthDiagram() {
     const containerRef = useRef<HTMLDivElement>(null);
    const data1Ref = useRef<HTMLDivElement>(null);
    const data2Ref = useRef<HTMLDivElement>(null);
    const analyticsRef = useRef<HTMLDivElement>(null);
    const dashboardRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className="relative flex flex-col items-center justify-center h-full w-full py-8 gap-8">
             <div className="flex items-center gap-12 md:gap-24 z-10">
                 <div className="flex flex-col gap-12">
                    <Node ref={data1Ref} label="Sales Data" icon={<DollarSign className="w-4 h-4" />} type="trigger" />
                    <Node ref={data2Ref} label="Expense Data" icon={<DollarSign className="w-4 h-4" />} type="trigger" />
                 </div>
                <Node ref={analyticsRef} label="Analytics" icon={<BarChart3 className="w-4 h-4" />} />
                <Node ref={dashboardRef} label="Dashboard" status="success" />
            </div>

             <AnimatedBeam containerRef={containerRef} fromRef={data1Ref} toRef={analyticsRef} duration={2} curvature={50} />
            <AnimatedBeam containerRef={containerRef} fromRef={data2Ref} toRef={analyticsRef} duration={2} curvature={-50} />
            <AnimatedBeam containerRef={containerRef} fromRef={analyticsRef} toRef={dashboardRef} duration={3} pathColor="#4ADE80" gradientStartColor="#4ADE80" gradientStopColor="#22C55E" endXOffset={-70} />
        </div>
    )
}

function OpsAutopilotDiagram() {
    const containerRef = useRef<HTMLDivElement>(null);
    const supplierRef = useRef<HTMLDivElement>(null);
    const checkRef = useRef<HTMLDivElement>(null);
    const payRef = useRef<HTMLDivElement>(null);
    const notifyRef = useRef<HTMLDivElement>(null);

    return (
         <div ref={containerRef} className="relative flex flex-col items-center justify-center h-full w-full py-8 gap-8">
            <div className="flex items-center gap-12 md:gap-24 z-10">
                <Node ref={supplierRef} label="Bill Received" icon={<FileText className="w-4 h-4" />} type="trigger" />
                <Node ref={checkRef} label="Verify PO" icon={<Check className="w-4 h-4" />} />
                 <div className="flex flex-col gap-12">
                     <Node ref={payRef} label="Schedule Pay" icon={<DollarSign className="w-4 h-4" />} status="success" />
                     <Node ref={notifyRef} label="Notify Team" icon={<Mail className="w-4 h-4" />} status="success" />
                </div>
            </div>

            <AnimatedBeam containerRef={containerRef} fromRef={supplierRef} toRef={checkRef} duration={2} />
            <AnimatedBeam containerRef={containerRef} fromRef={checkRef} toRef={payRef} duration={3} curvature={50} pathColor="#4ADE80" gradientStartColor="#4ADE80" gradientStopColor="#22C55E" endXOffset={-70} />
            <AnimatedBeam containerRef={containerRef} fromRef={checkRef} toRef={notifyRef} duration={3} curvature={-50} pathColor="#4ADE80" gradientStartColor="#4ADE80" gradientStopColor="#22C55E" endXOffset={-70} />
        </div>
    )
}


// Shared Node Component
import { forwardRef } from "react";

interface NodeProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    subLabel?: string;
    icon?: React.ReactNode;
    type?: "default" | "trigger" | "output";
    status?: "default" | "success" | "warning" | "error";
}

const Node = forwardRef<HTMLDivElement, NodeProps>(({ className, label, subLabel, icon, type = "default", status = "default", ...props }, ref) => {
    return (
        <div 
            ref={ref} 
            className={cn(
                "relative flex items-center gap-3 p-3 rounded-xl border bg-[#151B2B] min-w-[140px] shadow-sm transition-all",
                type === "trigger" && "border-white/10",
                type === "default" && "border-white/10",
                status === "success" && "border-green-500/30 bg-green-500/10",
                status === "warning" && "border-yellow-500/30 bg-yellow-500/10",
                status === "error" && "border-red-500/30 bg-red-500/10",
                className
            )}
            {...props}
        >
            <div className={cn(
                "flex items-center justify-center w-8 h-8 rounded-lg",
                status === "success" ? "bg-green-500/20 text-green-500" : 
                status === "warning" ? "bg-yellow-500/20 text-yellow-500" : 
                status === "error" ? "bg-red-500/20 text-red-500" :
                "bg-white/5 text-gray-400"
            )}>
                {icon || <div className="w-2 h-2 rounded-full bg-current" />}
            </div>
            <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-medium text-white leading-tight">{label}</span>
                {subLabel && <span className="text-[10px] text-gray-400 leading-tight">{subLabel}</span>}
            </div>
        </div>
    );
});

Node.displayName = "Node";

function getTabIcon(tab: string) {
  switch (tab) {
    case "Connect Store":
      return <Store className="w-3 h-3 sm:w-4 sm:h-4" />;
    case "Automate Bookkeeping":
      return <BrainCircuit className="w-3 h-3 sm:w-4 sm:h-4" />;
    case "Generate Invoices":
      return <FileText className="w-3 h-3 sm:w-4 sm:h-4" />;
    case "Track Growth":
      return <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4" />;
    case "Ops on Autopilot":
      return <Settings className="w-3 h-3 sm:w-4 sm:h-4" />;
    default:
      return null;
  }
}
