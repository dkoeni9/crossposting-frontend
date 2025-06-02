import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, ExternalLink, MoreHorizontal, Trash2 } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function AccountsPage() {
  const accounts = [
    { platform: "ВКонтакте", username: "@username", connected: true },
    { platform: "Telegram", username: "@username", connected: true },
  ];

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Подключенные аккаунты</h1>
        <Button className="rounded-full">
          <PlusCircle className="mr-2 h-4 w-4" />
          Подключить новый аккаунт
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {accounts.map((account, i) => (
          <Card key={i}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-base font-medium">{account.platform}</CardTitle>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Открыть меню</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      <span>Просмотр профиля</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive focus:text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      <span>Отключить</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <CardDescription>{account.username}</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                <span className="text-xs">Подключен</span>
              </div>
            </CardContent>
            <CardFooter className="pt-2">
              <Button variant="outline" size="sm" className="w-full rounded-full">
                <ExternalLink className="mr-2 h-3.5 w-3.5" />
                Просмотр аккаунта
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <h2 className="text-xl font-bold mt-8 mb-4">Подключить новую платформу</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">ВКонтакте</CardTitle>
            <CardDescription>Подключите дополнительный аккаунт ВКонтакте</CardDescription>
          </CardHeader>
          <CardFooter className="pt-2">
            <Button size="sm" className="w-full rounded-full">
              <PlusCircle className="mr-2 h-3.5 w-3.5" />
              Подключить
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Telegram</CardTitle>
            <CardDescription>Подключите дополнительный канал Telegram</CardDescription>
          </CardHeader>
          <CardFooter className="pt-2">
            <Button size="sm" className="w-full rounded-full">
              <PlusCircle className="mr-2 h-3.5 w-3.5" />
              Подключить
            </Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  );
}
