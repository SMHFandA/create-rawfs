# Create react app with fake server

Це ще один бойлерплейт для створення СПА аплікацій. Відмінністю від інших є те що серверна частина
є налаштована з коробки. Також, є налаштована з коробки база даних PostgreSQL. Звісно, ви можете
не використовувати базу даних, або змінити на якусь іншу, скажімо, на MySQL.

## Початок роботи
Для початку роботи потрібно встановити наступні інструменти: `nvm`, `Docker` та `Docker compose`.
Це допоможе зберегти час і нерви.
Далі, потрібно ініціалізувати базу даних. Це робиться просто, за допомогою одної команди. 
Усі команди оформлені у вигляді `npm` скриптів, для зручності використання.

### Встановлення nvm
Щоб встановити, потрібно виконати [інструкції з встановлення](https://github.com/nvm-sh/nvm#installing-and-updating).
Далі, для зручності, раджу виконати наступні дії для більш глибокої
[інтеграції nvm у командну консоль](https://github.com/nvm-sh/nvm#deeper-shell-integration).

### Встановлення Docker та Docker compose
Найкраще скористатися документацією на офіційному сайті. Ось декілька посилань як це зробити:
[Встановлення Docker](https://docs.docker.com/engine/install/ubuntu),
[Налаштування Docker](https://docs.docker.com/engine/install/linux-postinstall/),
[встановлення Docker compose](https://docs.docker.com/compose/install/).

### Ініціалізація БД
Спершу потрібно підняти докер контейнер БД:
```shell
$ npm run docker:db:up
```
Тепер, для ініціалізації БД початковими даними, потрібно запустити команду:
```shell
$ npm run prisma -- db seed
```

### Старт аплікації для розробки
Для запуску аплікації потрібно виконати наступну команду:
```shell
$ npm start
```
При цьому запуститься докер контейнер БД та сервер розробки.
Фронт і бек частини запустяться по порту 3000, тобто аплікація буде доступна за
посиланням `localhost:3000`.

### Робота з бекендом
Якщо, під час розробки аплікації, вам довелося змінити схему БД, то щоб зміни стали доступними
потрібно перезапустити серсер розробки.
