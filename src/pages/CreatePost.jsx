import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Clock, ImageIcon, PaperclipIcon, Send } from "lucide-react";

export default function CreatePostPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Создать пост</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-full">
            Сохранить черновик
          </Button>
          <Button className="rounded-full">
            <Send className="mr-2 h-4 w-4" />
            Опубликовать сейчас
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="content">Содержание поста</Label>
                  <Textarea id="content" placeholder="О чем вы хотите рассказать?" className="mt-1.5 min-h-32" />
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" className="rounded-full">
                    <ImageIcon className="mr-2 h-4 w-4" />
                    Добавить изображение
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    <PaperclipIcon className="mr-2 h-4 w-4" />
                    Прикрепить файл
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Выбрать платформы</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="vk" defaultChecked />
                  <Label htmlFor="vk">ВКонтакте</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="telegram" defaultChecked />
                  <Label htmlFor="telegram">Telegram</Label>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Расписание</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="date">Дата</Label>
                  <div className="relative mt-1.5">
                    <Input id="date" type="date" className="pl-10" />
                    <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="time">Время</Label>
                  <div className="relative mt-1.5">
                    <Input id="time" type="time" className="pl-10" />
                    <Clock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}