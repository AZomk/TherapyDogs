export default function TherapyDogsPage() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-white flex flex-col">
      
      {/* Top Header Bar */}
      <header className="w-full border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-300">Menu</span>
        <div className="text-center">
          <h1 className="text-xl font-extrabold tracking-wider uppercase">Paws & Calm</h1>
          <p className="text-[10px] tracking-widest text-slate-400 uppercase">Therapy Dogs</p>
        </div>
        <span className="text-sm text-slate-300 border border-slate-700 rounded-full px-3 py-1">
          Website  by A-TECH students
        </span>
      </header>

      {/* Main Hero Section */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-12 flex flex-col justify-center">
        
        {/* Optional Top Information Blurb */}
        <div className="mb-8 max-w-2xl">
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Certified therapy dogs provide comfort, emotional support, and stress relief 
            across campuses, hospitals, and community centers.
          </p>
        </div>

        {/* Overlapping Card + Video Frame Layout */}
        <div className="relative flex flex-col md:flex-row items-center">
          
          {/* Left Overlapping Info Card */}
          <div className="z-10 w-full md:w-96 bg-[#3b1534] p-8 rounded-2xl shadow-2xl md:-mr-16 mb-6 md:mb-0 border border-white/10">
            <h2 className="text-2xl font-bold mb-3">What to Expect</h2>
            <p className="text-slate-200 text-sm leading-relaxed mb-6">
              Therapy dog sessions are calm, welcoming, and open to everyone. 
              Anyone can come in to pet, relax, and take a mental break.
            </p>
          </div>

          {/* Right Media / Video Container */}
          <div className="w-full md:flex-1 h-80 md:h-[460px] rounded-2xl overflow-hidden bg-gradient-to-tr from-[#3b1534] via-slate-800 to-teal-900 border border-slate-700/60 flex items-center justify-center relative shadow-xl">
            
            {/* Placeholder until you send your video */}
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                <span className="text-2xl ml-1">▶</span>
              </div>
              <p className="text-sm font-medium text-slate-200">Video Placeholder</p>
              <p className="text-xs text-slate-400 mt-1">Drop your .mp4 file into /public when ready</p>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}