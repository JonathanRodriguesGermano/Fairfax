import Link from "next/link"

import { Badge } from "@/components/ui/badge"

const CATEGORIES = [
  { name: "Camisetas", href: "/product-fashion/camisetas" },
  { name: "Bermudas & Shorts", href: "/product-fashion/bermuda-shorts" },
  { name: "Calças", href: "/product-fashion/calas" },
  { name: "Jaquetas & Moletons", href: "/product-fashion/jaquetas-moletons" },
  { name: "Tênis", href: "/product-fashion/tnis" },
  { name: "Acessórios", href: "/product-fashion/acessrios" },
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