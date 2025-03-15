# Aplikacja Pogodowa

## Opis

Aplikacja pogodowa stworzona w React i Vite, pozwalająca na sprawdzenie
aktualnej pogody w wybranym mieście. Pobiera dane z zewnętrznego API pogodowego
i wyświetla temperaturę, wilgotność oraz warunki atmosferyczne.

## Funkcjonalności

-   Wyszukiwanie pogody dla dowolnego miasta
-   Wyświetlanie temperatury, wilgotności oraz opisu pogody
-   Pobieranie danych z API pogodowego
-   Prosty i responsywny interfejs

## Technologie

-   React
-   Vite
-   JavaScript (ES6+) / TypeScript
-   CSS
-   API pogodowe (OpenWeatherMap)

## Instalacja

1. Sklonuj repozytorium:
    ```sh
    git clone https://github.com/iamdrzazgowski/weather-app.git
    ```
2. Przejdź do katalogu projektu:
    ```sh
    cd weather-app
    ```
3. Zainstaluj zależności:
    ```sh
    npm install
    ```
4. Uruchom aplikację:
    ```sh
    npm run dev
    ```

## Konfiguracja API

Aby aplikacja działała poprawnie, musisz uzyskać klucz API z wybranego serwisu
pogodowego (OpenWeatherMap) i dodać go do pliku .env:

    VITE_WEATHER_API_KEY=twoj_klucz_api

## Design aplikacji

![Design](https://github.com/iamdrzazgowski/weather-app/tree/main/design/weather-app-design.jpg)
