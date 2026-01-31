"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarBadge,
} from "@/components/ui/avatar";

export default function AvatarPlaygroundPage() {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold">Avatar</h1>
        <p className="text-sm text-muted-foreground">
          Tamanhos, imagens e fallbacks do componente de avatar.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">Sizes</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Avatar size="sm">
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <Avatar size="default">
            <AvatarFallback>DF</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback>LG</AvatarFallback>
          </Avatar>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">With Image</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">With Fallback</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Avatar>
            <AvatarImage src="/invalid-url.png" alt="Invalid" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">With Badge</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            <AvatarBadge />
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback>LG</AvatarFallback>
            <AvatarBadge />
          </Avatar>
        </div>
      </section>
    </div>
  );
}
