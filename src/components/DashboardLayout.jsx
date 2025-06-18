import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Calendar, Home, LogOut, MessageSquare, PlusCircle, Settings, User, CreditCard, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";


export function DashboardLayout({ children }) {
  const pathname = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Дашборд", href: "/dashboard", icon: Home },
    { name: "Создать пост", href: "/dashboard/create", icon: PlusCircle },
    { name: "Календарь", href: "/dashboard/calendar", icon: Calendar },
    { name: "Аккаунты", href: "/dashboard/accounts", icon: MessageSquare },
    { name: "Подписка", href: "/dashboard/subscription", icon: CreditCard },
    { name: "Настройки", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b border-border bg-background">
        <div className="w-full px-4 md:px-6 lg:px-8 flex h-14 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/dashboard" className="flex items-center gap-2">
              <span className="text-xl font-bold">КроссПост</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="rounded-full md:flex hidden">
              <User className="h-5 w-5" />
              <span className="sr-only">Меню пользователя</span>
            </Button>

            {/* Мобильное меню */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Открыть меню</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[250px] sm:w-[300px] p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                    <span className="text-lg font-bold">КроссПост</span>
                    <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                      <X className="h-5 w-5" />
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
                          <Link to={item.href}>
                            <item.icon className="mr-2 h-4 w-4" />
                            {item.name}
                          </Link>
                        </Button>
                      ))}
                    </nav>
                  </div>
                  <div className="border-t p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                        <User className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">Иван Иванов</div>
                        <div className="text-xs text-muted-foreground">ivan@example.com</div>
                      </div>
                    </div>
                    <Button variant="ghost" className="w-full justify-start rounded-lg text-muted-foreground">
                      <LogOut className="mr-2 h-4 w-4" />
                      Выйти
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 shrink-0 border-r border-border md:block">
          <div className="flex h-full flex-col gap-2 p-4">
            <nav className="grid gap-1 py-2">
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className="justify-start rounded-lg"
                  asChild
                >
                  <Link to={item.href}>
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Link>
                </Button>
              ))}
            </nav>
            <div className="mt-auto">
              <Button variant="ghost" className="w-full justify-start rounded-lg text-muted-foreground">
                <LogOut className="mr-2 h-4 w-4" />
                Выйти
              </Button>
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-auto">
          <div className="container py-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
