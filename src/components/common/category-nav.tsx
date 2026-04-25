import Link from "next/link"

import { Badge } from "@/components/ui/badge"

const CATEGORIES = [
  { name: "Camisetas", href: "/camisetas" },
  { name: "Bermudas & Shorts", href: "/bermudas" },
  { name: "Calças", href: "/calcas" },
  { name: "Jaquetas & Moletons", href: "/jaquetas" },
  { name: "Tênis", href: "/tenis" },
  { name: "Acessórios", href: "/acessorios" },
]

interface CategoryNavProps {
  isVisible?: boolean
}

export function CategoryNav({ isVisible = true }: CategoryNavProps) {
  if (!isVisible) return null

  return (
    <nav className="hidden w-full flex-wrap items-center justify-center gap-4 overflow-x-auto border-t pt-4 whitespace-nowrap md:flex">
      <div className="flex justify-center gap-6">
        {CATEGORIES.map((category) => (
          <Badge key={category.href} variant="outline">
            <Link
              href={category.href}
              className="hover:text-primary text-sm font-medium uppercase"
            >
              {category.name}
            </Link>
          </Badge>
        ))}
      </div>
    </nav>
  )
}