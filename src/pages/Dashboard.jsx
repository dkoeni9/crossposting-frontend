import { Link } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, BarChart3, ArrowUpRight } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Первая публикация",
    date: "Опубликован 1 день назад • 3 платформы",
    content: "Сегодня мы запустили новую функцию планирования публикаций сразу в несколько соцсетей.",
    platforms: ["В", "Т"],
  },
  {
    id: 2,
    title: "SMM-лайфхак",
    date: "Опубликован 2 дня назад • 2 платформы",
    content: "Совет недели: используйте отложенный постинг для охвата вечерней аудитории.",
    platforms: ["В"],
  },
  {
    id: 3,
    title: "Промо-акция",
    date: "Опубликован 5 дней назад • 1 платформа",
    content: "Запустили промо: всем новым пользователям — бесплатная неделя Pro-тарифа!",
    platforms: ["В", "Т"],
  },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Дашборд</h1>
        <Button asChild className="rounded-full">
          <Link to="/dashboard/create">
            <PlusCircle className="mr-2 h-4 w-4" />
            Создать пост
          </Link>
        </Button>
      </div>

      {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Всего постов</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+5 с прошлой недели</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Запланировано</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">Следующий пост через 2 часа</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Вовлеченность</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12.5%</div>
            <p className="text-xs text-muted-foreground">По сравнению с прошлым месяцем</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Аккаунты</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Все подключены</p>
          </CardContent>
        </Card>
      </div> */}

      <h2 className="text-xl font-bold mt-8 mb-4">Подключенные аккаунты</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">ВКонтакте</CardTitle>
            <CardDescription>@id147260703</CardDescription>
          </CardHeader>
          <CardFooter className="pt-2">
            <Button variant="outline" size="sm" className="w-full rounded-full">
              <ArrowUpRight className="mr-2 h-3.5 w-3.5" />
              Просмотр аккаунта
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Telegram</CardTitle>
            <CardDescription>@kyoni9d</CardDescription>
          </CardHeader>
          <CardFooter className="pt-2">
            <Button variant="outline" size="sm" className="w-full rounded-full">
              <ArrowUpRight className="mr-2 h-3.5 w-3.5" />
              Просмотр аккаунта
            </Button>
          </CardFooter>
        </Card>
      </div>

      <h2 className="text-xl font-bold mt-8 mb-4">Недавние посты</h2>
      <div className="grid gap-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-sm font-medium">{post.title}</CardTitle>
                <div className="text-xs px-2 py-1 rounded-full bg-muted">Опубликован</div>
              </div>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-sm">{post.content}</p>
            </CardContent>
            <CardFooter className="pt-2 flex justify-between">
              <div className="flex space-x-1">
                {post.platforms.map((p, idx) => (
                  <div key={idx} className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs">{p}</div>
                ))}
              </div>
              <Button variant="ghost" size="sm" className="rounded-full">
                Подробнее
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
}
