По результатам.
1. Не совсем понял почему задание определено как ,бекэнд, на мой взгляд это фронтэнд пеимущественно (возможно необходимо было сделать пагинацию с запросами на бек...).
2. Не стал использовать express.js для бека, так как задача легко решается встроенными пакетами nodejs.
3. На сервере сделал обновление котировок по таймауту и хранение их в обьекте для экономии ресурсов - оптимизация при большом трафике.
4. На фронте использовал cdn vuejs, потому что разворачивать vue-cli для 1го представления...
5. Котировки по ссылке  http://phisix-api3.appspot.com/stocks.json не обновляются, проверить не было возможности, но 99.9% рабочий вариант.

Запуск:
- npm i
- node server
- открыть в браузере index.html