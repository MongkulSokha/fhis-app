import { useRouter } from "next/navigation";
import { Button } from "./button";

export default function CancelButton() {
  const router = useRouter();

  return (
    <Button
      className="hover:bg-gray-200 border-2 font-semibold cursor-pointer border-gray-400 bg-white text-gray-400 px-4 py-2 rounded mx-2"
      onClick={() => router.back()}
    >
      Cancel
    </Button>
  );
}
