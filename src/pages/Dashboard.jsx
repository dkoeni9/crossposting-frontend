// src/pages/DashboardPage.jsx

import { Link } from "react-router-dom";
import { DashboardLayout } from "../components/DashboardLayout";
import { Button, Card } from "@radix-ui/themes";
import { PlusCircle, BarChart3, ArrowUpRight } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    { title: "Всего постов", value: "24", note: "+5 с прошлой недели" },
    { title: "Запланировано", value: "7", note: "Следующий пост через 2 часа" },
    { title: "Вовлеченность", value: "+12.5%", note: "По сравнению с прошлым месяцем" },
    { title: "Аккаунты", value: "2", note: "Все подключены" },
  ];

  const accounts = [
    { platform: "ВКонтакте", username: "@username" },
    { platform: "Telegram", username: "@username" },
  ];

  const recentPosts = [1, 2, 3];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Дашборд</h1>
        <Button asChild className="rounded-full">
          <Link to="/dashboard/create" className="flex items-center">
            <PlusCircle className="mr-2 h-4 w-4" />
            Создать пост
          </Link>
        </Button>
      </div>

      {/* Статистика */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <div className="flex items-center justify-between p-4 border-b">
              <div className="text-sm font-medium">{stat.title}</div>
              <BarChart3 className="h-4 w-4 text-gray-500" />
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-gray-500">{stat.note}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Подключенные аккаунты */}
      <h2 className="text-xl font-bold mt-8 mb-4">Подключенные аккаунты</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {accounts.map((acct) => (
          <Card key={acct.platform}>
            <div className="p-4 border-b">
              <div className="text-sm font-medium">{acct.platform}</div>
              <div className="text-xs text-gray-500">{acct.username}</div>
            </div>
            <div className="p-4">
              <Button variant="outline" size="small" className="w-full rounded-full">
                <ArrowUpRight className="mr-2 h-3.5 w-3.5" />
                Просмотр аккаунта
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Недавние посты */}
      <h2 className="text-xl font-bold mt-8 mb-4">Недавние посты</h2>
      <div className="grid gap-4">
        {recentPosts.map((i) => (
          <Card key={i}>
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <div className="text-sm font-medium">Пост #{i}</div>
                <div className="text-xs px-2 py-1 rounded-full bg-gray-100">Опубликован</div>
              </div>
              <div className="text-xs text-gray-500">Опубликован 2 дня назад • 2 платформы</div>
            </div>
            <div className="p-4 flex justify-between">
              <div className="flex space-x-1">
                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs">В</div>
                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs">Т</div>
              </div>
              <Button variant="ghost" size="small" className="rounded-full">
                Подробнее
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
}
