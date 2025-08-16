import { IRootState } from "@/types/Root/root.types";
import { useSelector } from "react-redux";

export default function useRootState() {
  const root = useSelector((state: IRootState) => state);

  return {
    ...root,
  };
}
