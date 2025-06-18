import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlusCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

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
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Календарь</h1>
        <Button asChild className="rounded-full">
          <Link to="/dashboard/create">
            <PlusCircle className="mr-2 h-4 w-4" />
            Запланировать пост
          </Link>
        </Button>
      </div>

      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
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

        <div className="grid grid-cols-7 gap-1 text-center mb-1">
          {["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"].map((day) => (
            <div key={day} className="py-1 text-sm font-medium text-muted-foreground border-b border-border">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {/* Empty cells for days before the 1st */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={`empty-${i}`} className="h-16 p-1 border border-border/30 rounded-md"></div>
          ))}

          {days.map((day) => {
            const hasPost = scheduledPosts.find((post) => post.day === day);

            return (
              <div
                key={day}
                className={`h-16 p-1 relative rounded-md border ${day === today ? "border-foreground" : "border-border"
                  } hover:border-border/80 transition-colors`}
              >
                <div className="h-full w-full flex flex-col p-1">
                  <span className={`text-sm ${day === today ? "font-bold" : ""}`}>{day}</span>

                  {hasPost && (
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-0.5 justify-center">
                        {hasPost.platforms.map((platform, i) => (
                          <div
                            key={i}
                            className="w-3 h-3 rounded-full bg-muted flex items-center justify-center text-[8px]"
                          >
                            {platform}
                          </div>
                        ))}
                      </div>
                      <div className="text-[8px] text-center mt-0.5 text-muted-foreground">{hasPost.count}</div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      <h2 className="text-xl font-bold mt-8 mb-4">Предстоящие посты</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {scheduledPosts.slice(0, 8).map((post, i) => (
          <Card key={i} className="aspect-square p-4 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex-1">
              <div className="font-medium text-lg mb-2">Пост #{i + 1}</div>
              <div className="text-sm text-muted-foreground mb-3">Май {post.day}, 2025</div>
              <div className="text-sm text-muted-foreground">10:00</div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-center space-x-1">
                {post.platforms.map((platform, j) => (
                  <div
                    key={j}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium"
                  >
                    {platform}
                  </div>
                ))}
              </div>

              <Button variant="outline" size="sm" className="w-full rounded-full">
                Редактировать
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
}
