"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface ActivityData {
  date: string;
  activity: number;
}

interface GitHubEvent {
  created_at: string;
}

export default function GithubActivityChart() {
  const [data, setData] = useState<ActivityData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.github.com/users/FadQode/events"
      );
      const events = await res.json();

      // hitung activity per tanggal
      const counts: Record<string, number> = {};

      events.forEach((event: GitHubEvent) => {
        const date = new Date(event.created_at)
          .toISOString()
          .split("T")[0];

        counts[date] = (counts[date] || 0) + 1;
      });

      const formatted = Object.keys(counts).map((date) => ({
        date: date.slice(5), // MM-DD
        activity: counts[date],
      }));

      setData(formatted.reverse());
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-60">
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid stroke="#2e5f63" strokeDasharray="3 3" />
          <XAxis dataKey="date" stroke="#aecdc7" />
          <YAxis stroke="#aecdc7" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="activity"
            stroke="#55b6bc"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}