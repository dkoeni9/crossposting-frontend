// src/pages/CalendarPage.jsx

import { Link } from "react-router-dom";
import { DashboardLayout } from "../components/DashboardLayout";
import { Button, Card } from "@radix-ui/themes";
import { PlusCircle, ChevronLeft, ChevronRight } from "lucide-react";

export default function CalendarPage() {
  // Mock data for calendar
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const today = new Date().getDate();

  // Mock scheduled posts
  const scheduledPosts = [
    { day: 5, count: 2, platforms: ["T", "В"] },
    { day: 12, count: 1, platforms: ["T", "В"] },
    { day: 15, count: 3, platforms: ["T", "В"] },
    { day: 22, count: 1, platforms: ["T", "В"] },
    { day: 28, count: 2, platforms: ["T", "В"] },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Календарь</h1>
        <Button asChild className="rounded-full">
          <Link to="/dashboard/create" className="flex items-center">
            <PlusCircle className="mr-2 h-4 w-4" />
            Запланировать пост
          </Link>
        </Button>
      </div>

      <Card className="p-4">
        <div className="flex items-center justify-between mb-6">
          <Button variant="outline" size="icon" className="rounded-full">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Предыдущий месяц</span>
          </Button>
          <h2 className="text-xl font-medium">Май 2025</h2>
          <Button variant="outline" size="icon" className="rounded-full">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Следующий месяц</span>
          </Button>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"].map((day) => (
            <div
              key={day}
              className="py-2 text-sm font-medium text-gray-500 border-b border-gray-200"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {/* Пустые ячейки перед 1-м числом */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={`empty-${i}`}
              className="aspect-square p-1 border border-gray-300 rounded-md"
            />
          ))}

          {days.map((day) => {
            const hasPost = scheduledPosts.find((post) => post.day === day);

            return (
              <div
                key={day}
                className={`aspect-square p-1 relative rounded-md border ${day === today ? "border-indigo-500" : "border-gray-300"
                  } hover:border-gray-400 transition-colors`}
              >
                <div className="h-full w-full flex flex-col p-1">
                  <span className={`text-sm ${day === today ? "font-bold" : ""}`}>
                    {day}
                  </span>

                  {hasPost && (
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-0.5 mt-1 justify-center">
                        {hasPost.platforms.map((platform, i) => (
                          <div
                            key={i}
                            className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center text-[10px]"
                          >
                            {platform}
                          </div>
                        ))}
                      </div>
                      <div className="text-[10px] text-center mt-1 text-gray-500">
                        {hasPost.count} пост{hasPost.count > 1 ? "а" : ""}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      <h2 className="text-xl font-bold mt-8 mb-4">Предстоящие посты</h2>
      <div className="grid gap-4">
        {scheduledPosts.slice(0, 3).map((post, i) => (
          <Card key={i} className="p-4 flex items-center justify-between">
            <div>
              <div className="font-medium">Пост #{i + 1}</div>
              <div className="text-sm text-gray-500">Май {post.day}, 2025 • 10:00</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex space-x-1">
                {post.platforms.map((platform, j) => (
                  <div
                    key={j}
                    className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs"
                  >
                    {platform}
                  </div>
                ))}
              </div>
              <Button variant="outline" size="small" className="rounded-full">
                Редактировать
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
}
