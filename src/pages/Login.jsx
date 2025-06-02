import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/theme-toggle";
import { VKOneTapButton } from "@/components/vk-one-tap-button";
import { TelegramButton } from "@/components/telegram-button";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex h-16 items-center justify-between px-6 border-b">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">КроссПост</span>
        </Link>
        <ThemeToggle />
      </div>
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="mx-auto w-full max-w-sm space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Вход</h1>
            <p className="text-muted-foreground">Введите свои учетные данные для доступа к аккаунту</p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="name@example.com" type="email" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Пароль</Label>
                <Link to="/forgot-password" className="text-sm underline">
                  Забыли пароль?
                </Link>
              </div>
              <Input id="password" type="password" />
            </div>
            <Button className="w-full rounded-full">Войти</Button>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Нет аккаунта?{" "}
              <Link to="/signup" className="underline">
                Зарегистрироваться
              </Link>
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Или продолжить с</span>
            </div>
          </div>
          <div className="space-y-3">
            <VKOneTapButton />
            <TelegramButton />
          </div>
        </div>
      </div>
    </div>
  );
}
