console.log('#6. JavaScript homework example file')

/*
 * #1
 * Задача: Калькулятор калорійності продуктів через клас.
 * Завдання: Розробити модуль на JavaScript, який імплементує клас CalorieCalculator. Клас має використовувати Map для управління даними про калорійність продуктів. Необхідно реалізувати наступні функціональності:
 * Додавання продуктів: Метод addProduct приймає назву продукту та його калорійність, додаючи їх до колекції.
 * Отримання калорійності продукту: Метод getProductCalories повертає калорійність продукту за його назвою. Якщо продукт не знайдено, повертає рядок 'Product not found'.
 * Видалення продукту: Метод removeProduct видаляє продукт з колекції за назвою.
 *
 * Критерії перевірки:
 * Клас CalorieCalculator має бути реалізований з використанням ключового слова class.
 * Внутрішнє сховище продуктів має бути реалізоване за допомогою new Map().
 * Наявність методів addProduct, getProductCalories, та removeProduct.
 */
console.log(`Завдання №1`);
document.write(`Завдання №1 <br>`);
class CalorieCalculator {
  constructor() {
    this.products = new Map();
  };

  addProduct(name, calories) {
    if (this.products.has(name)) {
        console.log(`Продукт "${name}" вже існує. Оновлення даних...`);
    }
    this.products.set(name, calories);
  };

  getProductCalories(name) {
    if (this.products.has(name)) {
        return this.products.get(name);
    } else {
        return 'Product not found';
    };
  };

  removeProduct(name) {
    if (this.products.has(name)) {
        this.products.delete(name);
        console.log(`Продукт "${name}" успішно видалено.`);
    } else {
        console.log(`Продукт "${name}" не знайдено.`);
    };
  };
};

// Демонстрація використання
const calorieCalculator = new CalorieCalculator();
calorieCalculator.addProduct('Apple', 52);
calorieCalculator.addProduct('Banana', 89);

console.log(calorieCalculator.getProductCalories('Apple')); // 52
document.write(calorieCalculator.getProductCalories('Apple') + '<br>');
console.log(calorieCalculator.getProductCalories('Banana')); // 89
document.write(calorieCalculator.getProductCalories('Banana') + '<br>');

calorieCalculator.removeProduct('Apple');
console.log(calorieCalculator.getProductCalories('Apple')); // Product not found
document.write(calorieCalculator.getProductCalories('Apple') + '<br>' + '<br>');

/*
 * #2
 * Задача: Унікальні користувачі.
 * Завдання: Реалізувати модуль на JavaScript у формі класу UniqueUsernames, який використовує Set для збереження унікальних імен користувачів. Клас має надавати можливість:
 * Додавання імен користувачів: Метод addUser дозволяє додати нове ім'я до набору. Якщо ім'я вже існує, воно не буде додано повторно, зберігаючи унікальність імен у наборі.
 * Перевірка наявності імені: Метод exists перевіряє, чи існує задане ім'я серед збережених унікальних імен.
 * Отримання кількості унікальних імен: Метод count повертає кількість унікальних імен, збережених у наборі.
 *
 * Критерії перевірки:
 * Наявність методів addUser, exists, count у класі UniqueUsernames.
 * Використання конструкції class для створення класу UniqueUsernames.
 * Застосування new Set() для внутрішнього сховища імен користувачів у конструкторі класу.
 */
console.log(`Завдання №2`);
document.write(`Завдання №2 <br>`);
class UniqueUsernames {
  constructor() {
    this.usernames = new Set();
  };

  addUser(username) {
    if (this.usernames.has(username)) {
      console.log(`Користувач "${username}" вже існує.`);
      document.write(`Користувач "${username}" вже існує. <br>`);
    } else {
      this.usernames.add(username);
      console.log(`Користувач "${username}" успішно доданий.`);
      document.write(`Користувач "${username}" успішно доданий. <br>`);
    };
  };

  exists(username) {
    if (this.usernames.has(username)) {
      console.log(`Користувач "${username}" не знайден.`);
      document.write(`Користувач "${username}" не знайден. <br>`);
    };
  };

  count() {
    return this.usernames.size;
  };
};

// Демонстрація використання
const uniqueUsernames = new UniqueUsernames();
uniqueUsernames.addUser('john_doe');
uniqueUsernames.addUser('jane_doe');
uniqueUsernames.addUser('john_doe'); // Ця дія не змінить набір, оскільки 'john_doe' вже існує

console.log(`Існує 'john_doe': ${uniqueUsernames.exists('john_doe')}`); // true
document.write(`Існує 'john_doe': ${uniqueUsernames.exists('john_doe')} <br>`);
console.log(`Кількість унікальних імен: ${uniqueUsernames.count()}`); // 2
document.write(`Кількість унікальних імен: ${uniqueUsernames.count()} <br>`);

// Експорт для використання в тестах
