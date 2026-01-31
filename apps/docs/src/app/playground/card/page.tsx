import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CardPlaygroundPage() {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold">Card</h1>
        <p className="text-sm text-muted-foreground">
          Estrutura de cards com header, conteúdo e footer.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">Basic Card</h2>
        <div className="max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>
                Uma breve descrição do conteúdo do card.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Este é o conteúdo principal do card. Pode conter qualquer
                elemento necessário.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">With Actions</h2>
        <div className="max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>Card with Action</CardTitle>
              <CardDescription>Card com botão de ação no header.</CardDescription>
              <CardAction>
                <Button size="sm" variant="outline">
                  Edit
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                O CardAction é posicionado no canto superior direito do header.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">With Footer</h2>
        <div className="max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>Complete Card</CardTitle>
              <CardDescription>
                Card com header, conteúdo e footer.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Este card demonstra a estrutura completa com todas as partes
                disponíveis.
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex gap-2">
                <Button size="sm">Save</Button>
                <Button size="sm" variant="outline">
                  Cancel
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}
