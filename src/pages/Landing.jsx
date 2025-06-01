// src/pages/LandingPage.jsx

import { Link } from "react-router-dom";
import { Button } from "@radix-ui/themes";
import {
  HamburgerMenuIcon,
  CalendarIcon,
  ClockIcon,
  LockClosedIcon,
  ChatBubbleIcon,
  CheckIcon,
} from "@radix-ui/react-icons";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl flex h-16 items-center justify-between px-4 sm:px-6">
          <h1 className="text-xl font-bold">КроссПост</h1>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="#features" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Возможности
            </Link>
            <Link to="#pricing" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Тарифы
            </Link>
            <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Вход
            </Link>
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <HamburgerMenuIcon className="h-5 w-5 text-gray-700" />
              <span className="sr-only">Открыть меню</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="flex flex-col items-center justify-center py-20 text-center">
          <h1 className="mx-auto max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
            Один пост. Множество платформ.
          </h1>
          <p className="mt-4 mx-auto max-w-xl text-gray-600 sm:text-lg">
            Планируйте и публикуйте контент на всех социальных платформах в одном месте.
          </p>
          <div className="mt-8">
            <Button asChild size="large" className="rounded-full px-6 py-3">
              <Link to="/signup">Попробовать бесплатно</Link>
            </Button>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="bg-gray-50 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-3 rounded-lg border bg-white p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <ChatBubbleIcon className="h-6 w-6 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold">Поддержка ВК/Телеграм</h3>
                <p className="text-sm text-gray-500">
                  Подключайтесь и публикуйте на всех основных платформах
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 rounded-lg border bg-white p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <CalendarIcon className="h-6 w-6 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold">Планирование</h3>
                <p className="text-sm text-gray-500">
                  Планируйте и составляйте расписание контента заранее
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 rounded-lg border bg-white p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <ClockIcon className="h-6 w-6 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold">Freemium</h3>
                <p className="text-sm text-gray-500">
                  Начните бесплатно и расширяйте возможности по мере роста
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 rounded-lg border bg-white p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <LockClosedIcon className="h-6 w-6 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold">OAuth Безопасность</h3>
                <p className="text-sm text-gray-500">
                  Безопасная аутентификация для всех ваших аккаунтов
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold">Как это работает</h2>
            <p className="mt-4 text-gray-600">
              Три простых шага для оптимизации вашей работы в социальных сетях
            </p>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {["Подключение", "Создание", "Планирование"].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center space-y-3 rounded-lg p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-white text-lg font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-semibold">{step}</h3>
                  <p className="text-sm text-gray-500">
                    {step === "Подключение" && "Безопасно подключите свои аккаунты в социальных сетях"}
                    {step === "Создание" && "Создавайте контент один раз для всех платформ"}
                    {step === "Планирование" && "Настройте и забудьте с нашими инструментами планирования"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="bg-gray-50 py-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center">Простые тарифы</h2>
            <p className="mt-2 text-center text-gray-600">
              Выберите план, который подходит именно вам
            </p>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {/* Free Plan */}
              <div className="rounded-lg border bg-white p-6 text-center">
                <h3 className="text-2xl font-semibold">Бесплатный</h3>
                <p className="mt-1 text-gray-500">Идеально для начала работы</p>
                <div className="mt-4 flex items-baseline justify-center text-3xl font-bold">
                  0 ₽<span className="ml-1 text-sm font-normal text-gray-500">/месяц</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-gray-600">
                  <li className="flex items-center justify-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    Подключение до 3 аккаунтов
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    10 запланированных постов в месяц
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    Базовая аналитика
                  </li>
                </ul>
                <Button className="mt-6 rounded-full px-6 py-2">Начать</Button>
              </div>

              {/* Pro Plan */}
              <div className="rounded-lg border bg-white p-6 text-center">
                <h3 className="text-2xl font-semibold">Про</h3>
                <p className="mt-1 text-gray-500">Для опытных пользователей и команд</p>
                <div className="mt-4 flex items-baseline justify-center text-3xl font-bold">
                  1490 ₽<span className="ml-1 text-sm font-normal text-gray-500">/месяц</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-gray-600">
                  <li className="flex items-center justify-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    Неограниченное количество аккаунтов
                  </li>
                  <li className="flex items-centerjustify-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    Неограниченное количество запланированных постов
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    Расширенная аналитика
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    Командное сотрудничество
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    Приоритетная поддержка
                  </li>
                </ul>
                <Button className="mt-6 rounded-full px-6 py-2">Начать</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-4 px-4 py-10 sm:flex-row sm:px-6 md:py-8">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <span className="text-lg font-bold">КроссПост</span>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} КроссПост. Все права защищены.
            </p>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm text-gray-600">
            <Link to="#" className="hover:underline">
              Условия
            </Link>
            <Link to="#" className="hover:underline">
              Конфиденциальность
            </Link>
            <Link to="#" className="hover:underline">
              Контакты
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
