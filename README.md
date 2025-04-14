## Moment 2 "Att göra"-applikation
Denna uppgift går ut på att skapa en "Att göra"-applikation och använda sig av objektorienterad programmering med TypeScript. Den ska innehålla:
- Ett formulär för att lägga till en ny todo
- En lista över inlagda todos
- En knapp så man kan markera en todo som klar
- Har lagt till en knapp för att ta bort en todo
- Det ska gå att spara en todo till localstorage och sedan hämta info från localstorage

### Metoder
Har använt mig av följande metoder för klassen TodoList:
- todos - en array skapas av todo-objekt
- addTodo - en metod för att lägga till nya todos
- markTodoCompleted - markerar todos som är avklarade
- getTodos - metod som hämtar lista med todos
- saveToLocalStorage - sparar alla nya todos till localstorage
- loadFromLocalStorage - hämtar in todos från localstorage
- deleTodo - skapar en metod för att kunna ta bort en enskild todo

#### Filer
Har delat upp mina filer på följande sätt:
- ITodo - interface för task, completed och priority
- Todo - importerar interface och skapar en klass
- TodoList - importerar klassen todo och innehåller alla metoder för listan
- main - innehåller alla funktioner för att göra så att metoderna från todoList fungerar som de ska

##### Om mig
Hanna Angeria, haan2402@student.miun.se