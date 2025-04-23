import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Collect Customer Feedback
          <span className="text-primary"> Effortlessly</span>
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Simple tools to gather authentic customer feedback via SMS and QR
          codes. Improve your business with real insights.
        </p>
      </div>
      <div className="flex gap-4">
        <Link href="/login">
          <Button variant="default" size="lg">
            Get Started
          </Button>
        </Link>
        <Link href="/about">
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
}
