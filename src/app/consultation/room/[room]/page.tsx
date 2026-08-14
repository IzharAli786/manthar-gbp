import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VideoRoom from "@/components/consult/VideoRoom";

export const metadata: Metadata = {
  title: "Consultation room",
  robots: { index: false, follow: false },
};

export default async function RoomPage({
  params,
}: {
  params: Promise<{ room: string }>;
}) {
  const { room } = await params;
  // Slugs come from makeRoomSlug(); anything else 404s.
  if (!/^[a-z0-9][a-z0-9-]{6,62}$/.test(room)) notFound();
  return <VideoRoom room={room} />;
}
