import type { auth } from "@rag/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@rag/ui/components/card";

type Session = typeof auth.$Infer.Session;

export default function Dashboard({ session }: { session: Session }) {
  const { user } = session;
  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Card className="mx-auto mt-8 max-w-md">
      <CardHeader className="items-center text-center">
        {user.image ? (
          <img
            src={user.image}
            alt={user.name}
            className="mb-2 size-24 rounded-full object-cover ring-2 ring-foreground/10"
          />
        ) : (
          <div className="mb-2 flex size-24 items-center justify-center rounded-full bg-muted text-2xl font-semibold ring-2 ring-foreground/10">
            {initials}
          </div>
        )}
        <CardTitle className="text-2xl">{user.name}</CardTitle>
        <CardDescription>{user.email}</CardDescription>
      </CardHeader>
      <CardContent className="text-center text-muted-foreground">
        You are signed in with GitHub.
      </CardContent>
    </Card>
  );
}
