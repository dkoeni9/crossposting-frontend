// src/components/DashboardLayout.jsx

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@radix-ui/themes";
import {
  Home,
  Calendar,
  PlusCircle,
  MessageSquare,
  CreditCard,
  Settings,
  User,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function DashboardLayout({ children }) {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Дашборд", href: "/dashboard", icon: Home },
    { name: "Календарь", href: "/dashboard/calendar", icon: Calendar },
    { name: "Создать пост", href: "/dashboard/create", icon: PlusCircle },
    { name: "Аккаунты", href: "/dashboard/accounts", icon: MessageSquare },
    { name: "Подписка", href: "/dashboard/subscription", icon: CreditCard },
    { name: "Настройки", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-white">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <Link to="/dashboard" className="flex items-center gap-2">
            <span className="text-xl font-bold">КроссПост</span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="hidden md:flex rounded-full">
              <User className="h-5 w-5" />
              <span className="sr-only">Меню пользователя</span>
            </Button>

            {/* Мобильное меню: кнопка */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Открыть меню</span>
            </Button>
          </div>
        </div>

        {/* Мобильный Drawer */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-20 flex">
            {/* Полупрозрачный фон */}
            <div
              className="absolute inset-0 bg-black opacity-30"
              onClick={() => setIsMenuOpen(false)}
            />
            {/* Само меню */}
            <div className="relative w-[250px] sm:w-[300px] bg-white shadow-xl">
              <div className="flex items-center justify-between p-4 border-b">
                <span className="text-lg font-bold">КроссПост</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Закрыть меню</span>
                </Button>
              </div>
              <div className="flex-1 overflow-auto py-2">
                <nav className="grid gap-1 px-2">
                  {navigation.map((item) => (
                    <Button
                      key={item.name}
                      variant={pathname === item.href ? "secondary" : "ghost"}
                      className="justify-start rounded-lg"
                      asChild
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Link to={item.href} className="flex items-center px-2 py-2">
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.name}
                      </Link>
                    </Button>
                  ))}
                </nav>
              </div>
              <div className="border-t p-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <User className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">Иван Иванов</div>
                    <div className="text-xs text-gray-500">ivan@example.com</div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  className="w-full justify-start rounded-lg text-gray-500"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Выйти
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <div className="flex flex-1">
        {/* Боковая навигация для десктопа */}
        <aside className="hidden w-64 shrink-0 border-r md:block">
          <div className="flex h-full flex-col gap-2 p-4">
            <nav className="grid gap-1 py-2">
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className="justify-start rounded-lg"
                  asChild
                >
                  <Link to={item.href} className="flex items-center px-2 py-2">
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Link>
                </Button>
              ))}
            </nav>
            <div className="mt-auto">
              <Button
                variant="ghost"
                className="w-full justify-start rounded-lg text-gray-500"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Выйти
              </Button>
            </div>
          </div>
        </aside>

        {/* Основной контент */}
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto py-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
