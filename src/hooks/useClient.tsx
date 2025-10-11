import { useEffect, useState } from "react";

export default function useClient() {
  const [isMountedClientSide, setIsMountedClientSide] = useState(false);

  useEffect(() => {
    setIsMountedClientSide(true);
  }, []);

  return { isMountedClientSide, setIsMountedClientSide };
}
