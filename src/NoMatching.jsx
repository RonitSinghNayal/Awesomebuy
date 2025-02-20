import React from "react";
import { XCircle } from "lucide-react";
import { motion } from "framer-motion";

function NoMatching() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-gray-700 text-white p-6 rounded-2xl shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <XCircle className="w-12 h-12 text-red-400 mb-2" />
      <p className="text-2xl font-semibold">No Matching Product Found</p>
      <p className="text-sm text-gray-300 mt-1">Try adjusting your search criteria.</p>
    </motion.div>
  );
}

export default NoMatching;
