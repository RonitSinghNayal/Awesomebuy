import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  return (
    <button className="flex items-center space-x-2 p-2 border rounded-lg hover:bg-gray-100">
      <ArrowLeft size={20} />
      <span>Back</span>
    </button>
  );
}
