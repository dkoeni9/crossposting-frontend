// src/pages/CreatePostPage.jsx

import { Link } from "react-router-dom";
import { DashboardLayout } from "../components/DashboardLayout";
import { Button, Card } from "@radix-ui/themes";
import {
  Calendar,
  Clock,
  ImageIcon,
  Paperclip,
  Send,
} from "lucide-react";

export default function CreatePostPage() {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Создать пост</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-full px-4 py-2">
            Сохранить черновик
          </Button>
          <Button className="rounded-full px-4 py-2 flex items-center">
            <Send className="mr-2 h-4 w-4" />
            Опубликовать сейчас
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {/* Секция "Содержание поста" */}
          <Card>
            <div className="p-6 space-y-4">
              <div>
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-gray-700"
                >
                  Содержание поста
                </label>
                <textarea
                  id="content"
                  placeholder="О чем вы хотите рассказать?"
                  className="mt-1.5 w-full rounded-md border border-gray-300 px-3 py-2 min-h-[128px] focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="small" className="rounded-full px-3 py-1 flex items-center">
                  <ImageIcon className="mr-2 h-4 w-4" />
                  Добавить изображение
                </Button>
                <Button variant="outline" size="small" className="rounded-full px-3 py-1 flex items-center">
                  <Paperclip className="mr-2 h-4 w-4" />
                  Прикрепить файл
                </Button>
              </div>
            </div>
          </Card>

          {/* Секция "Выбрать платформы" */}
          <Card>
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Выбрать платформы</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center space-x-2">
                  <input
                    id="vk"
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="vk" className="text-sm text-gray-700">
                    ВКонтакте
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    id="telegram"
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="telegram" className="text-sm text-gray-700">
                    Telegram
                  </label>
                </div>
              </div>
            </div>
          </Card>

          {/* Секция "Расписание" */}
          <Card>
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Расписание</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Дата
                  </label>
                  <div className="relative mt-1.5">
                    <input
                      id="date"
                      type="date"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 pl-10 focus:border-indigo-500 focus:outline-none"
                    />
                    <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Время
                  </label>
                  <div className="relative mt-1.5">
                    <input
                      id="time"
                      type="time"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 pl-10 focus:border-indigo-500 focus:outline-none"
                    />
                    <Clock className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Секция "Предпросмотр" */}
        <div>
          <Card className="sticky top-20">
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Предпросмотр</h3>
                <div className="rounded-lg border border-gray-300 p-4 bg-gray-50">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                    <div>
                      <div className="font-medium text-sm">Имя пользователя</div>
                      <div className="text-xs text-gray-500">Только что</div>
                    </div>
                  </div>
                  <p className="text-sm mb-3">
                    О чем вы хотите рассказать?
                  </p>
                  <div className="aspect-video rounded-md bg-gray-200 flex items-center justify-center text-sm text-gray-500">
                    Предпросмотр изображения
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium">Будет опубликовано в:</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-1 rounded-full bg-gray-200 text-xs">
                      ВКонтакте
                    </span>
                    <span className="px-2 py-1 rounded-full bg-gray-200 text-xs">
                      Telegram
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium">Запланировано на:</h4>
                  <div className="text-sm text-gray-700 mt-1">
                    15 мая, 2025 в 10:00
                  </div>
                </div>

                <Button className="w-full rounded-full px-4 py-2">
                  Запланировать пост
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
