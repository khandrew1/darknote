import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Chat = () => {
  return (
    <div className="px-40 flex flex-col space-y-5 w-full">
      <Label className="text-center text-2xl font-semibold">
        welcome to darknote.
      </Label>
      <Input className="h-13 rounded-full pl-5" placeholder="Add a note..." />
      <div className="flex flex-row flex-wrap gap-4">
        <Card variant="note" className="flex-1 min-w-[220px]">
          <CardHeader>
            <CardTitle>Note</CardTitle>
            <CardDescription>Opaque brown background</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Jot down a quick thought.</p>
          </CardContent>
        </Card>

        <Card variant="painting" className="flex-1 min-w-[220px]">
          <CardHeader>
            <CardTitle>Painting</CardTitle>
            <CardDescription>Purple tint, slightly transparent</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Attach or describe an artwork.</p>
          </CardContent>
        </Card>

        <Card variant="quotes" className="flex-1 min-w-[220px]">
          <CardHeader>
            <CardTitle>Quotes</CardTitle>
            <CardDescription>Blue tint, slightly transparent</CardDescription>
          </CardHeader>
          <CardContent>
            <p>“Simplicity is the soul of efficiency.”</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chat;
