import { redirect } from "next/navigation";

// The hub lives at /guides; the root just forwards there.
export default function Home() {
  redirect("/guides");
}
