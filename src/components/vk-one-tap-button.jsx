import { Button } from "@/components/ui/button";

export function VKOneTapButton({ onSuccess }) {
  const handleVKAuth = () => {
    // Здесь будет реальная логика авторизации через VK One Tap
    console.log("VK One Tap Auth initiated");
    // Имитация успешной авторизации
    if (onSuccess) {
      onSuccess({ user_id: "123456789", access_token: "sample_token" });
    }
  };

  return (
    <Button
      type="button"
      onClick={handleVKAuth}
      className="w-full flex items-center justify-center gap-2 bg-[#0077FF] hover:bg-[#0066CC] text-white rounded-md h-10"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.785 16.241C6.5 16.241 2.644 11.541 2.5 4.5H5.408C5.507 9.44 7.937 11.652 9.876 12.231V4.5H12.641V8.924C14.555 8.723 16.566 6.678 17.259 4.5H20.024C19.495 7.234 17.336 9.279 15.841 10.181C17.336 10.883 19.771 12.628 20.749 16.241H17.671C16.942 13.862 15.166 12.231 12.641 11.952V16.241H12.785Z"
          fill="white"
        />
      </svg>
      Войти через VK ID
    </Button>
  );
}
