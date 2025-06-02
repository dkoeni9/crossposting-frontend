import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/theme-toggle";
import { Checkbox } from "@/components/ui/checkbox";
import { VKOneTapButton } from "@/components/vk-one-tap-button";
import { TelegramButton } from "@/components/telegram-button";

export default function SignupPage() {
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
            <h1 className="text-3xl font-bold">Регистрация</h1>
            <p className="text-muted-foreground">Создайте аккаунт, чтобы начать</p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">Имя</Label>
                <Input id="first-name" placeholder="Иван" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Фамилия</Label>
                <Input id="last-name" placeholder="Иванов" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="name@example.com" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input id="password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Подтвердите пароль</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm">
                Я согласен с{" "}
                <Link to="/terms" className="underline">
                  Условиями использования
                </Link>{" "}
                и{" "}
                <Link to="/privacy" className="underline">
                  Политикой конфиденциальности
                </Link>
              </Label>
            </div>
            <Button className="w-full rounded-full">Создать аккаунт</Button>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Уже есть аккаунт?{" "}
              <Link to="/login" className="underline">
                Войти
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
