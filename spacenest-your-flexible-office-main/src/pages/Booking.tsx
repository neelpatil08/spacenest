import { useState } from "react";

const Booking = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBooking = async () => {
    if (!date || !slot) {
      alert("Please select date & slot ❌");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          date,
          slot,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      alert("Booking successful ✅");

    } catch (err) {
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-50">
      
      <div className="backdrop-blur-xl bg-white/70 border border-white/30 shadow-2xl p-10 rounded-3xl w-[420px]">
        
        <h2 className="text-3xl font-bold text-center mb-2">
          Book Your Desk 🪑
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Reserve your workspace easily
        </p>

        <div className="flex flex-col gap-4">

          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <select
            onChange={(e) => setSlot(e.target.value)}
            className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="">Select Slot</option>
            <option value="Morning">Morning ☀️</option>
            <option value="Afternoon">Afternoon 🌤️</option>
            <option value="Evening">Evening 🌙</option>
          </select>

          <button
            onClick={handleBooking}
            disabled={loading}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition disabled:opacity-50"
          >
            {loading ? "Booking..." : "Book Now"}
          </button>

        </div>

      </div>
    </div>
  );
};

export default Booking;