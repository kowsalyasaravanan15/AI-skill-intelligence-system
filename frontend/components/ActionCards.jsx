"use client";

export default function ActionCard({ title, iconSrc, buttonBg, isCheckSkills }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center gap-4 w-full sm:w-64">
      <img src={iconSrc} alt={title} className="w-16 h-16" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <button className={`px-4 py-2 text-white rounded ${buttonBg}`}>
        {isCheckSkills ? "Check Skills" : "View Recommendations"}
      </button>
    </div>
  );
}
