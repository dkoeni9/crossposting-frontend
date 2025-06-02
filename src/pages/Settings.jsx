import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Настройки</h1>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3 mb-6">
          <TabsTrigger value="profile">Профиль</TabsTrigger>
          <TabsTrigger value="notifications">Уведомления</TabsTrigger>
          <TabsTrigger value="security">Безопасность</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Информация профиля</CardTitle>
              <CardDescription>Обновите информацию вашего аккаунта</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Имя</Label>
                <Input id="name" placeholder="Ваше имя" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Ваш email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="username">Имя пользователя</Label>
                <Input id="username" placeholder="Ваше имя пользователя" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="timezone">Часовой пояс</Label>
                <select
                  id="timezone"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option>UTC (GMT+0)</option>
                  <option>Москва (GMT+3)</option>
                  <option>Калининград (GMT+2)</option>
                  <option>Екатеринбург (GMT+5)</option>
                </select>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="rounded-full">Сохранить изменения</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Настройки уведомлений</CardTitle>
              <CardDescription>Управляйте способами получения уведомлений</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="post-published">Пост опубликован</Label>
                  <p className="text-sm text-muted-foreground">Получать уведомления, когда ваши посты публикуются</p>
                </div>
                <Switch id="post-published" />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="post-failed">Ошибка публикации</Label>
                  <p className="text-sm text-muted-foreground">
                    Получать уведомления, когда публикация постов не удалась
                  </p>
                </div>
                <Switch id="post-failed" defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="account-connected">Аккаунт подключен</Label>
                  <p className="text-sm text-muted-foreground">Получать уведомления при подключении нового аккаунта</p>
                </div>
                <Switch id="account-connected" />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="marketing">Маркетинговые письма</Label>
                  <p className="text-sm text-muted-foreground">Получать письма о новых функциях и обновлениях</p>
                </div>
                <Switch id="marketing" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="rounded-full">Сохранить настройки</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Настройки безопасности</CardTitle>
              <CardDescription>Управляйте безопасностью вашего аккаунта</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="current-password">Текущий пароль</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="new-password">Новый пароль</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirm-password">Подтвердите новый пароль</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="two-factor">Двухфакторная аутентификация</Label>
                  <p className="text-sm text-muted-foreground">
                    Добавьте дополнительный уровень защиты к вашему аккаунту
                  </p>
                </div>
                <Switch id="two-factor" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="rounded-full">Обновить пароль</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
}
