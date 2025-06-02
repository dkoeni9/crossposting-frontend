import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, CreditCard } from "lucide-react";

export default function SubscriptionPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Подписка</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Текущий план: Бесплатный</CardTitle>
                <CardDescription>Базовые функции для личного использования</CardDescription>
              </div>
              <div className="px-3 py-1 rounded-full bg-muted text-xs">Текущий</div>
            </div>
          </CardHeader>
          <CardContent className="pb-2">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4" />
                Подключение до 3 аккаунтов
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4" />
                10 запланированных постов в месяц
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4" />
                Базовая аналитика
              </li>
            </ul>
          </CardContent>
          <CardFooter className="pt-4">
            <Button variant="outline" className="w-full rounded-full" disabled>
              Текущий план
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>План Про</CardTitle>
            <CardDescription>Расширенные функции для профессионалов</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="mb-4">
              <span className="text-3xl font-bold">1490 ₽</span>
              <span className="text-muted-foreground">/месяц</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4" />
                Неограниченное количество аккаунтов
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4" />
                Неограниченное количество запланированных постов
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4" />
                Расширенная аналитика
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4" />
                Командное сотрудничество
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4" />
                Приоритетная поддержка
              </li>
            </ul>
          </CardContent>
          <CardFooter className="pt-4">
            <Button className="w-full rounded-full">Перейти на Про</Button>
          </CardFooter>
        </Card>
      </div>

      <h2 className="text-xl font-bold mt-8 mb-4">Способ оплаты</h2>
      <Card>
        <CardHeader>
          <CardTitle>Добавить способ оплаты</CardTitle>
          <CardDescription>Безопасно добавьте способ оплаты к вашему аккаунту</CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="rounded-full">
            <CreditCard className="mr-2 h-4 w-4" />
            Добавить способ оплаты
          </Button>
        </CardContent>
      </Card>

      <h2 className="text-xl font-bold mt-8 mb-4">История платежей</h2>
      <Card>
        <CardContent className="p-6">
          <div className="text-center py-6 text-muted-foreground">История платежей отсутствует</div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
