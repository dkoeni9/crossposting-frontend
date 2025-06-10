import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="container flex flex-col items-center justify-center gap-4 text-center">
                <h1 className="text-9xl font-bold text-primary">404</h1>
                <h2 className="text-3xl font-semibold text-foreground">Страница не найдена</h2>
                <p className="text-muted-foreground max-w-[600px]">
                    Извините, но страница, которую вы ищете, не существует или была перемещена.
                </p>
                <Link
                    to="/"
                    className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                    Вернуться на главную
                </Link>
            </div>
        </div>
    );
} 