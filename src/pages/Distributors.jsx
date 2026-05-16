import { useEffect, useState } from "react";
import { themes } from "../config/themeConfig";
import InnerBanner from "../components/InnerBanner";
import distributorBanner from "../assets/images/aboutBannerImg.png";
import { apiInfo } from "../service/api";
import { FaMapMarkerAlt, FaUser, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Distributors() {
  const [distributors, setDistributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDistributors = async () => {
      try {
        setLoading(true);
        const response = await apiInfo.get("/distributor-information/?status=Approved");
        // Ensure we handle the data structure correctly based on our API test
        const data = response.data.data || [];
        setDistributors(data);
      } catch (err) {
        console.error("Error fetching distributors:", err);
        setError("Failed to load distributors. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchDistributors();
  }, []);

  // Grouping logic
  const groupDistributorsByState = (list) => {
    return list.reduce((acc, d) => {
      let stateName = d.state || d.sales_region || "Other";
      
      // Normalize state name (Title Case)
      stateName = stateName.trim().toLowerCase();
      stateName = stateName.charAt(0).toUpperCase() + stateName.slice(1);
      
      // Handle common variations
      if (stateName === "Gujrat") stateName = "Gujarat";

      if (!acc[stateName]) acc[stateName] = [];
      acc[stateName].push(d);
      return acc;
    }, {});
  };

  const groupedDistributors = groupDistributorsByState(distributors);
  const states = Object.keys(groupedDistributors).sort();

  return (
    <div className="min-h-screen bg-[var(--bg-secondary)] pb-20">
      <InnerBanner 
        title="Our Distributors" 
        current="Distributors" 
        bg={distributorBanner} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 sm:mt-20">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-white text-lg font-medium">Fetching our network...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-500 text-xl">{error}</p>
          </div>
        ) : distributors.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-white text-xl">No distributors found.</p>
          </div>
        ) : (
          <div className="space-y-16">
            {states.map((state) => (
              <div key={state} className="animate-fadeIn">
                {/* State Header */}
                <div className="flex items-center gap-4 mb-8">
                  <h2 
                    className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider"
                    style={{ fontFamily: themes.fontPrimary }}
                  >
                    {state}
                  </h2>
                  <div className="flex-grow h-[2px] bg-gradient-to-r from-[var(--primary)] to-transparent opacity-50"></div>
                </div>

                {/* Distributors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedDistributors[state].map((dist, idx) => (
                    <div 
                      key={dist.id || idx}
                      className="group bg-[#00001a] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-[var(--primary)] hover:shadow-[0_0_20px_rgba(210,0,0,0.2)] hover:-translate-y-1"
                    >
                      <div className="mb-4">
                        <span className="text-[var(--primary)] text-xs font-bold uppercase tracking-widest">
                          {dist.city || dist.state || state}
                        </span>
                        <h3 className="text-xl font-bold text-white group-hover:text-[var(--primary)] transition-colors">
                          {dist.distributor_name}
                        </h3>
                      </div>
                      
                      <div className="space-y-3">
                        {/* Address */}
                        <div className="flex items-start gap-3 text-gray-400">
                          <FaMapMarkerAlt className="mt-1 text-[var(--primary)] flex-shrink-0" />
                          <p className="text-sm leading-relaxed">
                            {dist.address_line_1 && `${dist.address_line_1}, `}
                            {dist.address_line_2 && `${dist.address_line_2}, `}
                            {dist.city && `${dist.city}, `}
                            {dist.state && `${dist.state} `}
                            {dist.pincode && `- ${dist.pincode}`}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
