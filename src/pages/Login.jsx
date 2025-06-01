import { Link } from "react-router-dom";
import { Button } from "@radix-ui/themes";
import { ThemeToggle } from "../components/ThemeToggle";
import { VKOneTapButton } from "../components/VkButton";
import { TelegramButton } from "../components/TelegramButton";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <div className="flex h-16 items-center justify-between px-6 border-b">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">КроссПост</span>
        </Link>
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="mx-auto w-full max-w-sm space-y-6">
          {/* Заголовок */}
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Вход</h1>
            <p className="text-gray-500">
              Введите свои учетные данные для доступа к аккаунту
            </p>
          </div>

          {/* Форма */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Пароль
                </label>
                <Link to="/forgot-password" className="text-sm underline text-indigo-600 hover:text-indigo-800">
                  Забыли пароль?
                </Link>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
              />
            </div>
            <Button className="w-full rounded-full px-4 py-2">Войти</Button>
          </div>

          {/* Ссылка на регистрацию */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              Нет аккаунта?{" "}
              <Link to="/signup" className="underline text-indigo-600 hover:text-indigo-800">
                Зарегистрироваться
              </Link>
            </p>
          </div>

          {/* Разделитель */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Или продолжить с</span>
            </div>
          </div>

          {/* Социальная авторизация */}
          <div className="space-y-3">
            <VKOneTapButton />
            <TelegramButton />
          </div>
        </div>
      </div>
    </div>
  );
}
