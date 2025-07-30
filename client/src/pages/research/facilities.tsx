import { NavigationHeader } from "@/components/navigation-header";
import { MainNavBar } from "@/components/navigation";
import { BrandingFooter } from "@/components/branding-footer";
import { Link } from "wouter";

export default function ResearchFacilities() {
  return (
    <div className="min-h-screen bg-neutral-light-gray flex flex-col w-full relative overflow-hidden">
      {/* Background image with minimal opacity */}
      <img
        src="/lab-facility-bg.jpg"
        alt="Lab Facility Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none z-0"
        aria-hidden="true"
      />
      <div className="w-full" style={{ position: 'relative', zIndex: 10 }}>
        <NavigationHeader currentSection="research" onNavigate={() => {}} />
        <MainNavBar />
      </div>
      <main className="flex-1 w-full max-w-7xl mx-auto py-12 px-4 relative z-10">
        <section>
          <h1 className="text-4xl font-bold mb-8 flex items-center gap-2">
            <span role="img" aria-label="Facilities">🛠️</span> Facilities
          </h1>
          <p className="mb-10 text-lg text-neutral-700 max-w-3xl">
            The Computational Intelligence Lab, under the guidance of Dr. S. N. Omkar, is equipped with a blend of high-end computational and experimental hardware necessary for its diverse research in AI, robotics, and biomechanics.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Computational Infrastructure */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-4 border-t-4 border-blue-500">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">💻</span>
                <h2 className="text-2xl font-semibold">Computational Infrastructure</h2>
              </div>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                <li><b>High-Performance Workstations:</b> Multi-core CPUs and powerful <b>NVIDIA GPUs</b> for deep learning and simulations.</li>
                <li><b>Server Access:</b> Dedicated servers and access to the <b>Supercomputer Education and Research Centre (SERC)</b> at IISc, a leading HPC facility.</li>
              </ul>
            </div>
            {/* Unmanned Systems and Robotics */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-4 border-t-4 border-green-500">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🤖</span>
                <h2 className="text-2xl font-semibold">Unmanned Systems & Robotics</h2>
              </div>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                <li><b>Fleet of UAVs:</b> Custom-built and commercial multi-rotor drones (quadcopters) and fixed-wing platforms.</li>
                <li><b>Sensors & Payloads:</b> <b>LiDAR</b>, stereo/high-res cameras, IMUs, GPS modules.</li>
                <li><b>Ground Control Station (GCS):</b> For mission planning, real-time monitoring, and data acquisition.</li>
                <li><b>Indoor Flight Arena:</b> Safe, controlled space for testing navigation, swarms, and control algorithms.</li>
              </ul>
            </div>
            {/* Biomechanics and Motion Capture */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-4 border-t-4 border-pink-500">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🏃‍♂️</span>
                <h2 className="text-2xl font-semibold">Biomechanics & Motion Capture</h2>
              </div>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                <li><b>3D Motion Capture System:</b> Professional-grade mocap for precise 3D human movement analysis.</li>
                <li><b>Biosensors:</b> <b>EMG</b> and other physiological sensors for monitoring biomechanical parameters.</li>
              </ul>
            </div>
            {/* Software and Development Tools */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-4 border-t-4 border-yellow-500">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🧑‍💻</span>
                <h2 className="text-2xl font-semibold">Software & Development Tools</h2>
              </div>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                <li><b>Industry-standard & Open-source Software:</b> <b>MATLAB/Simulink</b>, <b>ROS</b>, <b>TensorFlow</b>, <b>PyTorch</b>, and more for development, simulation, and analysis.</li>
              </ul>
            </div>
            {/* Workstation PCs */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-4 border-t-4 border-purple-500">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🖥️</span>
                <h2 className="text-2xl font-semibold">Workstation PCs</h2>
              </div>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                <li>Multiple high-end desktop PCs for research, simulation, and development tasks.</li>
                <li>Each workstation is equipped with ergonomic seating and dual monitors for productivity.</li>
              </ul>
            </div>
            {/* Tables */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-4 border-t-4 border-cyan-500">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🪑</span>
                <h2 className="text-2xl font-semibold">Tables</h2>
              </div>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                <li>Spacious, modular tables designed for collaborative work and project assembly.</li>
                <li>Dedicated areas for group discussions, hardware prototyping, and teamwork.</li>
              </ul>
            </div>
            {/* Personalised PC Setups */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-4 border-t-4 border-orange-500">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🧑‍🔬</span>
                <h2 className="text-2xl font-semibold">Personalised PC Setups</h2>
              </div>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                <li>Custom PC setups tailored to individual researchers’ needs, including specialized hardware and software configurations.</li>
                <li>Support for remote access and personalized development environments.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex-none w-full bg-neutral-light-gray text-neutral-dark-gray z-10 p-0 m-0">
        <div className="w-full p-0 m-0">
          <BrandingFooter />
        </div>
      </footer>
    </div>
  );
} 