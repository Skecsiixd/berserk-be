import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // <-- EZT IMPORTÁLD!

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. CORS konfiguráció
  // Fontos, hogy az Angular appod címe legyen az 'origin'!
  app.enableCors({
    origin: 'http://localhost:4200', // <-- Cseréld erre az Angular appod URL-jét!
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Engedélyezett HTTP metódusok
    credentials: true, // Engedélyezi a cookie-k és hitelesítő adatok küldését
  });

  // 2. Globális Validációs Pipe beállítása a DTO-khoz
  // Ez automatikusan validálja a bejövő adatokat a DTO-ban definiált szabályok szerint.
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Csak azokat a mezőket engedi át, amik szerepelnek a DTO-ban
    forbidNonWhitelisted: true, // Hibát dob, ha olyan mező érkezik, ami nincs a DTO-ban
    transform: true // Megpróbálja átalakítani a bejövő adatokat a DTO típusára
  }));

  // 3. Port beállítás
  // A process.env.PORT ?? 3000 azt jelenti, hogy ha van környezeti változó (pl. production environmentben),
  // akkor azt használja, egyébként a 3000-es portot. Ez teljesen rendben van.
  await app.listen(process.env.PORT ?? 3000);

  console.log(`NestJS alkalmazás fut a ${await app.getUrl()} címen`); // Egy kis visszajelzés
}
bootstrap();