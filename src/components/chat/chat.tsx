import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Chat = () => {
  const notes = [
    {
      variant: "note" as const,
      title: "Note",
      description: "Opaque brown background",
      content: "Jot down a quick thought.",
    },
    {
      variant: "painting" as const,
      title: "Painting",
      description: "Purple tint, slightly transparent",
      content: "Attach or describe an artwork.",
    },
    {
      variant: "quotes" as const,
      title: "Quotes",
      description: "Blue tint, slightly transparent",
      content: "“Simplicity is the soul of efficiency.”",
    },
    {
      variant: "note" as const,
      title: "Recipe",
      description: "Quick ingredients & steps",
      content: "Tomatoes, basil, garlic, olive oil...",
    },
    {
      variant: "quotes" as const,
      title: "Inspiration",
      description: "Short, uplifting line",
      content: "“Stay curious, build boldly.”",
    },
    {
      variant: "painting" as const,
      title: "Sketch",
      description: "Idea for a composition",
      content: "Thumbnail of light/shadow study.",
    },
  ];

  return (
    <div className="px-40 flex flex-col space-y-5 w-full">
      <Label className="text-center text-2xl font-semibold">
        welcome to darknote.
      </Label>
      <Input className="h-13 rounded-full pl-5" placeholder="Add a note..." />

      <Carousel className="w-full">
        <div className="flex items-center gap-3">
          <CarouselPrevious outside />
          <CarouselContent className="w-full">
          {notes.map((n, idx) => (
            <CarouselItem key={idx} className="basis-[240px]">
              <div className="p-1">
                <Card variant={n.variant} className="min-h-48">
                  <CardHeader>
                    <CardTitle>{n.title}</CardTitle>
                    <CardDescription>{n.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                      <p>{n.content}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext outside />
        </div>
      </Carousel>
    </div>
  );
};

export default Chat;
