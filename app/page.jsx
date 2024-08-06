import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1">
      <section id="hero" className="bg-muted py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Bem-vindo ao meu portfólio
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Explore meus projetos e entre em contato para saber mais.
            </p>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Entre em contato
            </Link>
          </div>
          <Image
            src="/eu.jpg"
            width="600"
            height="400"
            alt="Hero Image"
            className="mx-auto rounded-lg shadow-lg"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
        </div>
      </section>
      <section id="projects" className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meus Projetos
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Confira alguns dos meus trabalhos mais recentes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Image
                  src="/eu.jpg"
                  width="400"
                  height="225"
                  alt="Project 1"
                  className="rounded-t-lg"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }}
                />
              </CardHeader>
              <CardContent className="p-4 space-y-2">
                <h3 className="text-xl font-bold">Projeto 1</h3>
                <p className="text-muted-foreground">Descrição do Projeto 1</p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Ver Projeto
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  src="/eu.jpg"
                  width="400"
                  height="225"
                  alt="Project 2"
                  className="rounded-t-lg"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }}
                />
              </CardHeader>
              <CardContent className="p-4 space-y-2">
                <h3 className="text-xl font-bold">Projeto 2</h3>
                <p className="text-muted-foreground">Descrição do Projeto 2</p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Ver Projeto
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  src="/eu.jpg"
                  width="400"
                  height="225"
                  alt="Project 3"
                  className="rounded-t-lg"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }}
                />
              </CardHeader>
              <CardContent className="p-4 space-y-2">
                <h3 className="text-xl font-bold">Projeto 3</h3>
                <p className="text-muted-foreground">Descrição do Projeto 3</p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Ver Projeto
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
