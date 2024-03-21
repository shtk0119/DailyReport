'use client';

import { SampleItem } from "@/types/Sample";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [samples, setSamples] = useState<SampleItem[]>([]);
  const router = useRouter();

  const getSamples = async () => {
      const response = await fetch('http://localhost/api/samples');
      const json = await response.json();
      setSamples(json);
  }

  useEffect(() => {
      getSamples();
  }, []);

  return (
    <div>
      <ul>
        {samples.map((sample) =>
          <li key={sample.id}>
            {sample.text}
          </li>
        )}
      </ul>
    </div>
  );
}
