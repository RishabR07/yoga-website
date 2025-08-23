import React, { useState } from "react";

export default function Classes() {
  const yogaClasses = [
    {
      title: "Hatha Yoga",
      level: "Beginner",
      instructor: "Dr. Meera",
      location: "Hall A",
      schedule: "Wednesday • 3:00 PM - 5:00 PM",
      desc: "Traditional yoga focusing on basic asanas and breathing.",
    },
    {
      title: "Vinyasa Flow",
      level: "Intermediate",
      instructor: "Mr. Arjun",
      location: "Meditation Hall",
      schedule: "Wednesday • 3:00 PM - 5:00 PM",
      desc: "Dynamic flow connecting movement with breath.",
    },
    {
      title: "Ashtanga Yoga",
      level: "Advanced",
      instructor: "Ms. Kavya",
      location: "Rooftop",
      schedule: "Wednesday • 3:00 PM - 5:00 PM",
      desc: "Intense and structured sequence of powerful asanas.",
    },
    {
      title: "Meditation & Pranayama",
      level: "All Levels",
      instructor: "Swami Anand",
      location: "Hall B",
      schedule: "Wednesday • 3:00 PM - 5:00 PM",
      desc: "Mindfulness, breathing techniques, and relaxation.",
    },
    {
      title: "Surya Namaskar Practice",
      level: "Beginner",
      instructor: "Mr. Ravi",
      location: "Hall C",
      schedule: "Wednesday • 3:00 PM - 5:00 PM",
      desc: "Sequence of 12 poses to energize body and mind.",
    },
    {
      title: "Yin Yoga",
      level: "All Levels",
      instructor: "Ms. Anjali",
      location: "Meditation Hall",
      schedule: "Wednesday • 3:00 PM - 5:00 PM",
      desc: "Slow-paced yoga focusing on deep connective tissue.",
    },
    {
      title: "Restorative Yoga",
      level: "Beginner",
      instructor: "Dr. Lakshmi",
      location: "Hall D",
      schedule: "Wednesday • 3:00 PM - 5:00 PM",
      desc: "Gentle poses supported by props for relaxation.",
    },
    {
      title: "Power Yoga",
      level: "Intermediate",
      instructor: "Mr. Kiran",
      location: "Fitness Room",
      schedule: "Wednesday • 3:00 PM - 5:00 PM",
      desc: "Energetic yoga style combining cardio and strength.",
    },
    {
      title: "Iyengar Yoga",
      level: "All Levels",
      instructor: "Mrs. Shanti",
      location: "Hall A",
      schedule: "Wednesday • 3:00 PM - 5:00 PM",
      desc: "Focus on alignment and precision with props.",
    },
    {
      title: "Kundalini Yoga",
      level: "Advanced",
      instructor: "Guru Mahesh",
      location: "Meditation Hall",
      schedule: "Wednesday • 3:00 PM - 5:00 PM",
      desc: "Breath, chanting, and movement to awaken energy.",
    },
    {
      title: "Prenatal Yoga",
      level: "Beginner",
      instructor: "Dr. Rekha",
      location: "Hall B",
      schedule: "Wednesday • 3:00 PM - 5:00 PM",
      desc: "Safe yoga practices for expecting mothers.",
    },
    {
      title: "Kids Yoga",
      level: "Beginner",
      instructor: "Ms. Divya",
      location: "Hall C",
      schedule: "Wednesday • 3:00 PM - 5:00 PM",
      desc: "Fun yoga games and poses designed for children.",
    },
    {
      title: "Chair Yoga",
      level: "Beginner",
      instructor: "Mr. Suresh",
      location: "Hall D",
      schedule: "Wednesday • 3:00 PM - 5:00 PM",
      desc: "Modified yoga for seniors and office workers.",
    },
    {
      title: "Yoga Nidra",
      level: "All Levels",
      instructor: "Ms. Neha",
      location: "Meditation Hall",
      schedule: "Wednesday • 3:00 PM - 5:00 PM",
      desc: "Guided meditation for deep relaxation and sleep.",
    },
    {
      title: "Advanced Asanas Workshop",
      level: "Advanced",
      instructor: "Mr. Vivek",
      location: "Rooftop",
      schedule: "Wednesday • 3:00 PM - 5:00 PM",
      desc: "Master challenging poses like headstands and arm balances.",
    },
  ];

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  // Filter classes based on search
  const filteredClasses = yogaClasses.filter((cls) =>
    cls.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-white to-[#fdf6e3] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#b8860b] mb-4">
          Yoga Club Classes
        </h2>
        <p className="text-[#a0522d] max-w-2xl mx-auto">
          Explore our weekly classes and join to deepen your yoga journey.
        </p>

        {/* Search Bar */}
        <div className="mt-6 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search classes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 rounded-lg border border-[#deb887] focus:outline-none focus:ring-2 focus:ring-[#b8860b]"
          />
        </div>
      </div>

      {/* Classes Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {filteredClasses.map((cls, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#deb887] hover:scale-105 transition-transform duration-300"
          >
            <div className="p-6 text-left">
              <h3 className="text-2xl font-bold text-[#b8860b] mb-2">
                {cls.title}
              </h3>
              <p className="text-[#3e2f1c] mb-3">{cls.desc}</p>
              <p className="text-sm text-[#a0522d] font-semibold">
                ⏰ {cls.schedule}
              </p>
              <p className="text-sm text-[#a0522d] italic">
                📌 {cls.level}
              </p>
              <p className="text-sm text-[#a0522d]">
                👩‍🏫 {cls.instructor}
              </p>
              <p className="text-sm text-[#a0522d] mb-4">
                📍 {cls.location}
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="bg-[#b8860b] text-white px-6 py-2 rounded-lg font-bold w-full hover:bg-[#a0522d] transition"
              >
                Join Class
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Enrollment Form Modal */}
      {showForm && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black/50 z-50 p-4"
          onClick={() => setShowForm(false)}
        >
          <div
            className="bg-white p-6 rounded-xl shadow-xl text-[#3e2f1c] max-w-md w-full border border-[#deb887]"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4 text-[#b8860b]">
              Enroll in a Class
            </h3>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-3 rounded-lg border border-[#deb887] focus:outline-none focus:ring-2 focus:ring-[#b8860b]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-3 rounded-lg border border-[#deb887] focus:outline-none focus:ring-2 focus:ring-[#b8860b]"
            />
            <select className="w-full p-3 mb-3 rounded-lg border border-[#deb887] text-[#3e2f1c] focus:outline-none focus:ring-2 focus:ring-[#b8860b]">
              {yogaClasses.map((cls, i) => (
                <option key={i}>{cls.title}</option>
              ))}
            </select>
            <button
              className="bg-[#b8860b] text-white px-6 py-3 rounded-lg font-bold w-full hover:bg-[#a0522d] transition"
              onClick={() => setShowForm(false)}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
