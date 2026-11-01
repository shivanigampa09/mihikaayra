import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Factory, Sparkles } from 'lucide-react';
import { QuoteNowButton } from '../components/common/QuoteNowButton';

import imgKeyboard from '../assets/images/gaming_keyboard_1786176304220.jpg';
import imgMouse from '../assets/images/gaming_mouse_1786176323378.jpg';
import imgHeadset from '../assets/images/gaming_headset_1786176336002.jpg';
import imgChair from '../assets/images/gaming_chair_1786176347860.jpg';
import imgMonitor from '../assets/images/gaming_monitor_1786176360911.jpg';
import imgConsole from '../assets/images/gaming_console_1786176371819.jpg';
import imgController from '../assets/images/gaming_controller_1786176384061.jpg';
import imgCooling from '../assets/images/pc_cooling_kits_1786176453582.jpg';
import imgVr from '../assets/images/vr_headset_1786176472013.jpg';
import imgDesk from '../assets/images/desk_accessories_1786176490141.jpg';
import gamingHeaderImg from '../assets/images/category-gaming.png';


interface GamingItem {
  id: string;
  name: string;
  image: string;
  manufacturingProcess: string;
  specifications: string[];
  performanceHighlights: string;
}

export const GamingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const gamingList: GamingItem[] = [
    {
      id: 'gaming-keyboards',
      name: 'Mechanical RGB Gaming Keyboards',
      image: imgKeyboard,
      manufacturingProcess: 'High-precision SMT (Surface Mount Technology) circuit board assembly with hot-swappable mechanical switches, aircraft-grade anodized aluminum top plates, and double-shot PBT keycaps molded with translucent legends for per-key RGB backlighting.',
      specifications: ['Hot-Swappable Mechanical Switches', 'Aircraft Aluminum Top Plate', 'Double-Shot PBT Keycaps', 'Detachable Braided Type-C Cable', 'Anti-Ghosting N-Key Rollover'],
      performanceHighlights: 'Engineered for ultra-fast actuation, tactile response, zero latency, and extreme durability rated for 100 million keystrokes in competitive esports.'
    },
    {
      id: 'gaming-mouse',
      name: 'Ultra-Lightweight Wireless Gaming Mouse',
      image: imgMouse,
      manufacturingProcess: 'Precision injection-molded honeycomb exoskeleton housing with 26,000 DPI optical sensor integration, optical micro-switches to eliminate double-clicking, PTFE virgin feet for frictionless glide, and low-latency 2.4GHz wireless transmission.',
      specifications: ['26,000 DPI Optical Sensor', 'Optical Micro Switches', '100% Virgin Grade PTFE Feet', '59g Ultra-Light Shell', 'Low-Latency 2.4GHz Wireless'],
      performanceHighlights: 'Provides sub-millisecond motion tracking precision, feather-light weight for rapid flick shots, and zero cable drag for competitive FPS titles.'
    },
    {
      id: 'gaming-headsets',
      name: '7.1 Surround Sound Gaming Headsets',
      image: imgHeadset,
      manufacturingProcess: '50mm neodymium magnetic drivers acoustically tuned inside noise-isolating earcups. Constructed with reinforced steel headband sliders, memory foam ear cushions covered in breathable cooling gel fabric, and detachable broadcast-quality noise-canceling microphone.',
      specifications: ['50mm Neodymium Audio Drivers', 'Cooling-Gel Memory Foam Ear Cups', 'Detachable Noise-Cancelling Mic', 'Steel-Reinforced Frame', 'Virtual 7.1 Spatial Sound'],
      performanceHighlights: 'Delivers immersive 360-degree directional spatial audio to pinpoint enemy footsteps while keeping ears cool during marathon gaming sessions.'
    },
    {
      id: 'gaming-chairs',
      name: 'Ergonomic Racing-Style Gaming Chairs',
      image: imgChair,
      manufacturingProcess: 'Robot-welded 1.5mm tubular steel chassis surrounded by high-density cold-cured foam cushioning. Wrapped in breathable perforated PU leather, equipped with Class-4 explosion-proof gas lift cylinder, 4D adjustable armrests, and 165° reclining backrest.',
      specifications: ['High-Density Cold-Cured Molded Foam', 'Breathable Perforated PU Leather', 'Class-4 Hydraulic Gas Lift', '4D Multi-Directional Armrests', 'Heavy-Duty Steel Base'],
      performanceHighlights: 'Offers total spinal lumbar support and custom posture adjustability to prevent fatigue during long streaming or competitive play.'
    },
    {
      id: 'gaming-monitors',
      name: '240Hz Curved QD-OLED Gaming Monitors',
      image: imgMonitor,
      manufacturingProcess: 'Quantum-dot OLED panel manufacturing with 0.03ms GTG response time and 1000R curvature. Integrated with anti-glare etching, custom heatsink thermal management, and G-Sync/FreeSync Premium Pro synchronization controller boards.',
      specifications: ['240Hz Refresh Rate QD-OLED Panel', '0.03ms GTG Response Time', '1000R Immersive Curvature', 'HDR TRUE BLACK 400', 'HDMI 2.1 & DisplayPort 1.4'],
      performanceHighlights: 'Eliminates motion blur, ghosting, and screen tearing while providing infinite contrast ratios and deep vibrant colors for peak gaming performance.'
    },
    {
      id: 'gaming-consoles',
      name: 'Next-Gen Ultra HD Gaming Consoles',
      image: imgConsole,
      manufacturingProcess: 'Custom AMD Zen 2 CPU and RDNA 2 GPU architecture fabricated on 7nm process technology. Features custom high-speed NVMe SSD storage controller (5.5GB/s raw throughput), liquid metal cooling interface, and quiet whisper fan ventilation system.',
      specifications: ['Custom 8-Core AMD Zen 2 CPU', '10.3 TFLOPS RDNA 2 GPU', '1TB Ultra-Fast Custom NVMe SSD', 'Liquid Metal Thermal Compound', '4K 120Hz Ray Tracing Engine'],
      performanceHighlights: 'Delivers near-instantaneous game load times, realistic ray-traced lighting reflections, and silky-smooth 4K 120FPS gameplay.'
    },
    {
      id: 'controllers',
      name: 'Pro Wireless Gaming Controllers',
      image: imgController,
      manufacturingProcess: 'Built with drift-free Hall Effect magnetic joystick sensors, dual haptic feedback actuators, adaptive tension triggers, textured rubberized grips, and remappable rear paddle switches on an anti-friction housing.',
      specifications: ['Hall Effect Drift-Free Joysticks', 'Adaptive Haptic Trigger Actuators', 'Remappable Rear Paddles', 'Textured Non-Slip Grip', 'Rechargeable 15-Hour Battery'],
      performanceHighlights: 'Ensures lifetime joystick precision without stick drift, tactile physical trigger immersion, and customizable button mappings for pro tournament play.'
    },
    {
      id: 'pc-gaming-accessories',
      name: 'PC Gaming Accessories & Cooling Kits',
      image: imgCooling,
      manufacturingProcess: 'High-density braided PET sleeving on 18AWG copper power extension cables, magnetic addressable ARGB LED strips, GPU anti-sag support brackets, and high-static pressure PWM cooling fans with fluid dynamic bearings.',
      specifications: ['18AWG Braided Copper PSU Extensions', 'Magnetic ARGB LED Light Strips', 'Fluid Dynamic Bearing PWM Fans', 'GPU Aluminum Support Arm'],
      performanceHighlights: 'Optimizes internal computer airflow, prevents heavy graphics card sag, and elevates custom PC chassis aesthetics with synchronized lighting.'
    },
    {
      id: 'vr-headsets',
      name: 'All-In-One Wireless VR Headsets',
      image: imgVr,
      manufacturingProcess: 'Dual fast-switch LCD/OLED displays (4K resolution per eye) paired with pancake optical lenses for crisp clarity. Powered by mobile Snapdragon XR processors with 6DoF inside-out optical tracking cameras and spatial audio speakers.',
      specifications: ['4K Per-Eye Resolution Displays', 'Pancake Optical Lens Architecture', 'Inside-Out 6DoF Camera Tracking', 'Qualcomm Snapdragon XR Processor', 'Integrated 3D Spatial Audio'],
      performanceHighlights: 'Transports users into fully immersive 360-degree virtual reality environments with total freedom of motion and no tethering wires.'
    },
    {
      id: 'gaming-desk-accessories',
      name: 'Gaming Desk Accessories & Cable Organizers',
      image: imgDesk,
      manufacturingProcess: 'Carbon-fiber textured MDF tabletop mounted on heavy-duty T-shaped steel legs with integrated full-desk micro-weave mousepad mat, headphone hook, cup holder, under-desk cable tray, and edge ambient LED lighting.',
      specifications: ['Carbon-Fiber Textured Waterproof Top', 'Heavy-Duty Powder-Coated Steel Frame', 'Full-Surface Micro-Weave Desk Mat', 'Under-Desk Cable Management Tray', 'Built-in Cup & Headphone Holders'],
      performanceHighlights: 'Provides a rock-solid, clutter-free, ergonomic workspace designed specifically to support heavy multi-monitor setups and gaming gear.'
    }
  ];

  const filteredList = activeTab === 'all'
    ? gamingList
    : gamingList.filter(g => g.id === activeTab);

  return (
    <div>
      <PageHeader
        title="Gaming Gear & Esports Accessories"
        breadcrumbText="Gaming"
        bgImage={gamingHeaderImg}
        compact={true}
      />

      <section className="py-12 bg-[#F8F9FA] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Category Filter Pills */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-md space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              Filter by Gaming Item ({gamingList.length} Categories):
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-[#0D3B66] text-[#D4AF37] shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                All Gaming Gear ({gamingList.length})
              </button>
              {gamingList.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === item.id
                      ? 'bg-[#0D3B66] text-[#D4AF37] shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Gaming Cards List */}
          <div className="space-y-8">
            {filteredList.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row items-stretch"
              >
                {/* Compact Left Image Column */}
                <div className="w-full md:w-64 lg:w-72 shrink-0 relative h-52 md:h-auto overflow-hidden bg-slate-100 flex items-center justify-center p-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Right Content Column */}
                <div className="flex-1 p-6 sm:p-7 space-y-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    
                    {/* Title */}
                    <div>
                      <h2 className="text-2xl font-bold font-serif text-[#031322] leading-tight">
                        {item.name}
                      </h2>
                    </div>

                    {/* MANUFACTURING / BUILD PROCESS TEXT BOX */}
                    <div className="bg-[#F8FAFC] rounded-2xl p-4.5 border border-slate-200 space-y-2">
                      <h4 className="text-xs font-bold text-[#0D3B66] uppercase tracking-wider flex items-center gap-2">
                        <Factory className="w-4 h-4 text-[#0077B6]" />
                        Engineering & Precision Build Process:
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">
                        {item.manufacturingProcess}
                      </p>
                    </div>

                    {/* Key Components & Specs */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Key Components & Tech Specifications:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {item.specifications.map((ing, i) => (
                          <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg font-medium border border-slate-200">
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Purpose & Gaming Advantage */}
                    <div className="bg-[#FFFBEB] rounded-2xl p-4 border border-amber-200/80 space-y-1.5">
                      <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        Ergonomics & Competitive Gaming Advantage:
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">
                        {item.performanceHighlights}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
                      <QuoteNowButton itemName={item.name} />
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};
