import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Calendar, Check, Clock, Lock, MessageSquare } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">КроссПост</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="#features" className="text-sm font-medium hover:text-foreground/80">
              Возможности
            </Link>
            <Link to="#pricing" className="text-sm font-medium hover:text-foreground/80">
              Тарифы
            </Link>
            <Link to="/login" className="text-sm font-medium hover:text-foreground/80">
              Вход
            </Link>
            <ThemeToggle />
          </nav>
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <Button variant="outline" size="icon" className="h-8 w-8">
              <span className="sr-only">Открыть меню</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Один пост. Множество платформ.
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Планируйте и публикуйте контент на всех социальных платформах в одном месте.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg" className="rounded-full transition-all duration-200 hover:scale-105">
                  <Link to="/signup">Попробовать бесплатно</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="py-12 md:py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">Поддержка ВК/Телеграм</h3>
                <p className="text-sm text-muted-foreground">Подключайтесь и публикуйте на всех основных платформах</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">Планирование</h3>
                <p className="text-sm text-muted-foreground">Планируйте и составляйте расписание контента заранее</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">Freemium</h3>
                <p className="text-sm text-muted-foreground">
                  Начните бесплатно и расширяйте возможности по мере роста
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">OAuth Безопасность</h3>
                <p className="text-sm text-muted-foreground">Безопасная аутентификация для всех ваших аккаунтов</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Как это работает</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Три простых шага для оптимизации вашей работы в социальных сетях
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-background">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold">Подключение</h3>
                <p className="text-sm text-muted-foreground">Безопасно подключите свои аккаунты в социальных сетях</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-background">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold">Создание</h3>
                <p className="text-sm text-muted-foreground">Создавайте контент один раз для всех платформ</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-background">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold">Планирование</h3>
                <p className="text-sm text-muted-foreground">
                  Настройте и забудьте с нашими инструментами планирования
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="py-12 md:py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Простые тарифы</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Выберите план, который подходит именно вам
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl gap-8 py-12 md:grid-cols-2">
              <div className="flex flex-col rounded-lg border bg-background p-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Бесплатный</h3>
                  <p className="text-muted-foreground">Идеально для начала работы</p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  0 ₽<span className="ml-1 text-sm font-normal text-muted-foreground">/месяц</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    Подключение до 3 аккаунтов
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    60 запланированных постов в месяц
                  </li>
                  {/* <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Базовая аналитика
                  </li> */}
                </ul>
                <Button className="mt-8 rounded-full" variant="outline">
                  Начать
                </Button>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Про</h3>
                  <p className="text-muted-foreground">Для опытных пользователей и команд</p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  299 ₽<span className="ml-1 text-sm font-normal text-muted-foreground">/месяц</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    Неограниченное количество аккаунтов
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    Неограниченное количество публикаций
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    Аналитика
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    Работа с комментариями
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    ИИ-ассистент
                  </li>
                </ul>
                <Button className="mt-8 rounded-full">Начать</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between md:py-8">
          <div className="flex flex-col gap-4 md:gap-2">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">КроссПост</span>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} КроссПост. Все права защищены.
            </p>
          </div>
          <nav className="flex flex-wrap gap-4 md:gap-6">
            <Link to="#" className="text-sm hover:underline">
              Условия
            </Link>
            <Link to="#" className="text-sm hover:underline">
              Конфиденциальность
            </Link>
            <Link to="#" className="text-sm hover:underline">
              Контакты
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
