import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const Chat = () => {
  return (
    <div className="px-40 flex flex-col space-y-5 w-full">
      <Label className="text-center text-2xl font-semibold">
        welcome to darknote.
      </Label>
      <Input className="h-13 rounded-full pl-5" placeholder="Add a note..." />
    </div>
  );
};

export default Chat;
