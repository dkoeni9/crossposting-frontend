import { Button } from "@/components/ui/button";


export function TelegramButton({ onSuccess }) {
  const handleTelegramAuth = () => {
    // Здесь будет реальная логика авторизации через Telegram
    console.log("Telegram Auth initiated");
    // Имитация успешной авторизации
    if (onSuccess) {
      onSuccess({ id: "123456789", username: "username" });
    }
  };

  return (
    <Button
      type="button"
      onClick={handleTelegramAuth}
      className="w-full flex items-center justify-center gap-2 bg-[#0088cc] hover:bg-[#0077b5] text-white rounded-md h-10"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4476 14.0032 10.4043 13.9893 10.3636C13.9753 10.323 13.9514 10.2859 13.92 10.255C13.84 10.186 13.73 10.206 13.63 10.222C13.5 10.242 12.01 11.272 9.16 13.312C8.69 13.632 8.27 13.787 7.9 13.782C7.49 13.777 6.71 13.562 6.13 13.377C5.42 13.152 4.86 13.032 4.91 12.632C4.93 12.422 5.22 12.207 5.76 11.987C8.82 10.623 10.84 9.727 11.81 9.3C14.6 7.975 15.24 7.757 15.67 7.747C15.77 7.747 16.01 7.772 16.17 7.902C16.28 8.002 16.33 8.137 16.34 8.247C16.36 8.357 16.36 8.597 16.34 8.797L16.64 8.8Z"
          fill="white"
        />
      </svg>
      Войти через Telegram
    </Button>
  );
}
