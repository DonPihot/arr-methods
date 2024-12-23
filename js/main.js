// let arr = [33,1,2,5,10];
// 
// arr.sort()
// 
// arr.sort((a, b) => a - b) - Здесь сортируется по возрастанию чисел. Просто нужно запомнить эту дебильную конструкцию, больше о ней читать в интернете.
// 
// arr.reverse() - отзеркаливание
//
// arr.split('').reverse() - то есть можно писать и вот так
//
// Остальное в интернете...



// ДОМАШКА:

// forEach: - перебор массива

console.log("forEach:");



    // Вывод нечётных чисел:

    let arr1 = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];

    arr1.forEach(function(item)
    { 
        if (item % 2 !== 0)
            {
                console.log(item); // Здесь не получится присвоить этот метод отдельной переменной, ибо метод есть цикл, срабатывающий не раз!
            }
    } )

    // У которых кол-во символов не больше 4-х:

    let arr2 = ["lorem ipsum", "javascript", "php", "css", "react", "git", "html", "mysql"];

    arr2.forEach(item => { if(item.length <= 4) {console.log(item);} })



console.log("");



// filter: - возврат данных

console.log("filter:");



    // Отрицательные элементы:

    let arr3 = [1, -3, 5, 6, -7, 8, 9, -11];

    let arr_3 = arr3.filter(item => { if(item < 0) {return item;} })

        console.log(arr_3);

    // Чётные элементы:

    let arr4 = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];

    let arr_4 = arr4.filter(item => { if(item % 2 == 0) {return item;} })

        console.log(arr_4);

    // Длина не равна трём:

    let arr5 = ["lorem ipsum", "javascript", "php", "css", "react", "git", "html", "mysql"];

    let arr_5 = arr5.filter(function(item)
    {  
        if(item.length !== 3)
        {
            return item;
        }
    })

        console.log(arr_5);



console.log("");



// map: - перебрать массив и вернуть данные для каждого элемента

console.log("map:");



    // Квадрат чисел:

    let arr6 = [5, 6, 7, 8, 9];

    let arr_6 = arr6.map(item => item*item)

        console.log(arr_6);

    // Сумма свойств объекта:

    let arr7 = [{a: 10, b: 5}, {a: 20, b: 22}, {a: 131, b: 55}];

    let arr_7 = arr7.map(function(item)
    {
        return item.a + item.b;
    })

        console.log(arr_7);



console.log("");



// Reduce:

console.log("Reduce:");



    // Сумма отрицательных элеменов:
    
    let arr8 = [-13, 0, 12, 1662, -0.32, -102, -2];
    
    let arr_8 = arr8.filter(function(item)
    {
        if(item <= 0)
            {
                return item;
            }
    })
    
    let result_arr_8 = arr_8.reduce((sum, item) => sum + item, 0)
    
        console.log(result_arr_8);
    
    // Сумма свойств х всех объектов:
    
    let arr9 = [{x: 10, y: "lorem"}, {x: 21, y: "lorem"}, {x: -17, y: "lorem"}, {x: 156, y: "lorem"}];
    
    let arr_9 = arr9.map(item => {return item.x})
    
    let result_arr_9 = arr_9.reduce((sum, item) => sum + item, 0)
    
        console.log(result_arr_9);







