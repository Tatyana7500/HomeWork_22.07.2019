//Для заполнения массива использовала Random :)


//1. Условные операторы

//Задание 1.1
//Если а – четное посчитать а*b, иначе а+b
function task1(){
    let num1 = parseInt(document.formTask1.numberTask1_1.value);
    let num2 = parseInt(document.formTask1.numberTask1_2.value);
    let num3;
    if(num1%2 == 0){
        num3 = num1*num2;
    }else{
        num3 = 1*num1+1*num2;
    }
    document.getElementById("task1").innerHTML=num3;
}

//Задание 1.2
//Определить в какой четверти принадлежит точка с координатами (х,у)
function task2(){
    let x = parseInt(document.formTask2.numberTask2_1.value);
    let y = parseInt(document.formTask2.numberTask2_2.value);
    let result;
    if(x>0 && y>0){
        result = 1;
    }else if(x<0 && y>0){
        result = 2;
    }else if(x<0 && y<0){
        result = 3;
    }else{
        result = 4;
    }
    document.getElementById("task2").innerHTML="Точка с координатами ("+x+";"+y+") лежит в "+result+" четверти.";
}

//Задание 1.3
//Найти суммы только положительных из трех чисел
function task3(){
    let a = parseInt(document.formTask3.numberTask3_1.value);
    let b = parseInt(document.formTask3.numberTask3_2.value);
    let c = parseInt(document.formTask3.numberTask3_3.value);
    let result=0;
    if(a>0){
        result += a;
    }
    if(b>0){
        result += b;
    }
    if(c>0){
        result += c;
    }
    document.getElementById("task3").innerHTML=result;
}

//Задание 1.4
//Посчитать выражение max(а*b*с, а+b+с)+3
function task4() {
    let a = parseInt(document.formTask4.numberTask4_1.value);
    let b = parseInt(document.formTask4.numberTask4_2.value);
    let c = parseInt(document.formTask4.numberTask4_3.value);
    let result=0;
    result = max(a*b*c, a+b+c);
    result += 3;
    document.getElementById("task4").innerHTML=result;
}
//функция определения максимума
function max(num1, num2){
    if(num1>num2) {
        return num1;
    }
    else {
        return num2;
    }
}

//Задание 1.5
//Написать программу определения оценки студента по его рейтингу
function task5(){
    let rating = parseInt(document.formTask5.numberTask5_1.value);
    let result;
    if(rating<20){
        result = "F";
    }else if(rating>=20 && rating<40){
        result = "E";
    }else if(rating>=40 && rating<60){
        result = "D";
    }else if(rating>=60 && rating<75){
        result = "C";
    }else if(rating>=75 && rating<90){
        result = "B";
    }else if(rating>=90 && rating<=100){
        result = "A";
    }
    document.getElementById("task5").innerHTML=result;
}

//2. Циклы

//Задание 2.1
//Найти сумму четных чисел и их количество в диапазоне от 1 до 99
function task2_1() {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < 100; i += 2) {
        count++;
        sum += i;
    }
    document.getElementById("task2_1_sum").innerHTML = sum;
    document.getElementById("task2_1_count").innerHTML = count;
}

//Задание 2.2
//Проверить простое ли число?
function task2_2(){
    let num = parseInt(document.formTask2_2.numberTask2_2_1.value);
    let result=0; //количество делителей

    for(let i=1; i<num; i++){
        if(num%i==0){
            result++;
        }
    }
    if(result>2){
        document.getElementById("task2_2").innerHTML = "веденное число не простое";
    }else{
        document.getElementById("task2_2").innerHTML = "веденное число простое";
    }
}

//Задание 2.3
//Найти корень натурального числа с точностью до целого
//Последовательным подбором
function task2_3_1(){
    let a = parseInt(document.formTask2_3.numberTask2_3_1.value);
    let result = 0;
    if(a<0){
        result = "введите число больше 0";
    }
    else if(a == 0 || a == 1)
    {
        result = a;
    }
    else
    {
        let k=1;
        while(a>0){
            a-=k;
            k+=2;
            if(a<0){
                result+=0;
            }
            else{
                result+=1;
            }
        }
    }
    document.getElementById("task2_3_1").innerHTML = result;
}

//Бинарным поиском
function task2_3_2(){
    let a = parseInt(document.formTask2_3.numberTask2_3_1.value);
    const epsilon = 0.1; //погрешность
    let st = 0;
    let en = a;
    let result = (st + en) / 2;
    let squaResult = result*result;
    while (abs(squaResult - a) > epsilon) {
        if (squaResult > a) {
            en = result
        } else {
            st = result
        }
        result = (st + en) / 2;
        squaResult = result*result;
    }
    document.getElementById("task2_3_2").innerHTML = ~~result;  // ~~ округление
}

function abs(n) {
    return n < 0 ? n * -1 : n
}

//Задание 2.4
//Вычислить факториал числа n
function task2_4(){
    let n = parseInt(document.formTask2_4.numberTask2_4_1.value);
    let result = factorial(n);
    document.getElementById("task2_4").innerHTML = result;
}

function factorial(n) {
    if(n==0 || n==1){
        return 1;
    }
    else
    {
        return n*factorial(n-1);
    }
}

//Задание 2.5
//Посчитать сумму цифр заданного числа
function task2_5(){
    let n = parseInt(document.formTask2_5.numberTask2_5_1.value);
    let p = n; //вспомогательная переменная
    let sum=0;
    while (p != 0)
    {
        sum = sum + p%10;
        p = parseInt(p/10).toFixed(); // toFixed округление
    }

    document.getElementById("task2_5").innerHTML = sum;
}

//Задание 2.6
//Вывести число, которое является зеркальным отображением последовательности цифр заданного числа
function task2_6(){
    let n = parseInt(document.formTask2_6.numberTask2_6_1.value);
    let k=0; //вспомогательная переменная
    let result="";
    while(n!=0){
        k = n%10;
        result = result + k;
        n =parseInt(n/10).toFixed();  // toFixed округление
    }
    document.getElementById("task2_6").innerHTML = result;
}

//3. Одномерные массивы
//функция для заполнения массива рандомно
function random_array(n){
    let array = [n];
    for (let i = 0; i < n; i++) {
        array[i] = parseInt((Math.random() * 99 + 1).toFixed()); //формируем массив целочисленных чисел рандомно
    }
    return array;
}

//Задание 3.1
// 1.	Найти минимальный элемент массива
// 2.	Найти максимальный элемент массива
// 3.	Найти индекс минимального элемента массива
// 4.	Найти индекс максимального элемента массива
// 5.	Посчитать сумму элементов массива с нечетными индексами
// 6.	Сделать реверс массива (массив в обратном направлении)
// 7.	Посчитать количество нечетных элементов массива
// 8.	Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2
// 9.	Отсортировать массив пузырьком (Bubble)
// 10.  Отсортировать массив выбором (Select)
// 11.  Отсортировать массив вставками (Insert)
function task3_1() {
    let n = parseInt(document.formTask3_1.numberTask3_1.value);
    let array = random_array(n);
    document.getElementById("array").innerHTML = array; //вывод массива

    let max = array[0]; //макс. элемент
    let min = array[0]; //миним. элемент
    let max_i = 0; //индекс максимального элемента
    let min_i = 0; //индекс минимального элемента
    let sum_odd_index = 0; //сумма элементов с нечетными индексами
    let count_odd_elements = 0; //количество нечетных элементов

    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
            max_i = i;
        }
        if (min > array[i]) {
            min = array[i];
            min_i = i;
        }
        if (i % 2 != 0) {
            sum_odd_index += array[i];
        }
        if (array[i] % 2 != 0) {
            count_odd_elements++;
        }
    }
    document.getElementById("max_element").innerHTML = max; //вывод максимального єлемента
    document.getElementById("min_element").innerHTML = min; //вывод максимального єлемента
    document.getElementById("index_max").innerHTML = max_i; //вывод максимального єлемента
    document.getElementById("index_min").innerHTML = min_i; //вывод максимального єлемента
    document.getElementById("sum_odd").innerHTML = sum_odd_index; //вывод максимального єлемента
    document.getElementById("count_odd").innerHTML = count_odd_elements; //вывод максимального єлемента

    //реверс массива
    let temp;
    for(let i=0, j=array.length-1; i<j; i++, j--){
        {
            temp = array[j];
            array[j] = array[i];
            array[i] = temp;
        }
    }
    document.getElementById("revers").innerHTML = array; //вывод массива в обратном порядке

    //замена первой и второй половины массива
    let flag;
    if(array.length%2==0){
        for(let i=0, j=array.length/2; i<array.length/2; i++, j++){
            flag = array[i];
            array[i]=array[j];
            array[j]=flag;
        }
    }
    else{
        for(let i=0, j=parseInt((array.length/2).toFixed()); i<(array.length/2).toFixed()-1; i++, j++){     // toFixed округление
            flag = array[i];
            array[i]=array[j];
            array[j]=flag;
        }
    }
    document.getElementById("change_array").innerHTML = array; //вывод массива замененными половинами после реверса
}

//сортировка bubble
function bubble() {
    let n = parseInt(document.formTask3_1_1.numberTask3_1_1.value);
    let array_bubble = random_array(n);
    document.getElementById("array_bubble").innerHTML = array_bubble; //вывод массива
    let temp = 0; //переменная для сортировки Bubble
    for (let i = 0; i < array_bubble.length - 1; i++) {
        for (let j = i + 1; j < array_bubble.length; j++) {
            if (array_bubble[i] > array_bubble[j]) {
                temp = array_bubble[i];
                array_bubble[i] = array_bubble[j];
                array_bubble[j] = temp;
            }
        }
    }
    document.getElementById("sort_bubble").innerHTML = array_bubble; //вывод отсортир. массива
}

//сортировка Select
function select_sort() {
    let n = parseInt(document.formTask3_1_2.numberTask3_1_2.value);
    let array_sort_select = random_array(n);
    document.getElementById("array_select").innerHTML = array_sort_select; //вывод массива
    let k = 0;
    let x = 0;
    for (let i = 0; i < array_sort_select.length; i++) {
        k = i;
        x = array_sort_select[i];
        for (let j = i + 1; j < array_sort_select.length; j++) {
            if (array_sort_select[j] < x) {
                k = j;
                x = array_sort_select[j];
            }
        }
        array_sort_select[k] = array_sort_select[i];
        array_sort_select[i] = x;
    }
    document.getElementById("sort_select").innerHTML = array_sort_select; //вывод отсортир. массива
}

//сортировка Insert
function insert_sort(){
    let n = parseInt(document.formTask3_1_3.numberTask3_1_3.value);
    let array_sort_insert = random_array(n);
    document.getElementById("array_insert").innerHTML = array_sort_insert; //вывод массива

    for(let i = 0; i<array_sort_insert.length; i++){
        let y=array_sort_insert[i], j=i-1;
        while(j>=0 && array_sort_insert[j]>y)
        {
            array_sort_insert[j+1] = array_sort_insert[j];
            j--;
        }
        array_sort_insert[j+1]=y;
    }
    document.getElementById("sort_insert").innerHTML = array_sort_insert; //вывод отсортир. массива
}

//сортировка Quick
function quick_sort(){
    let n = parseInt(document.formTask3_1_4.numberTask3_1_4.value);
    let array_sort_quick = random_array(n);
    document.getElementById("array_quick").innerHTML = array_sort_quick.join(", "); //вывод массива
    array_sort_quick = quick(array_sort_quick,0, n-1);
    document.getElementById("sort_quick").innerHTML = array_sort_quick.join(", ");  //вывод отсортир. массива
}

function quick(array_sort, left, right){
    let i = left, j = right;
    let temp;
    let middle = (left+right)/2;
    let y = array_sort[middle.toFixed()];
    while(i<=j){
        while(array_sort[i] < y)
        i++;
        while(array_sort[j] > y)
        j--;
        if(i<=j){
            temp = array_sort[i];
            array_sort[i]=array_sort[j];
            array_sort[j]=temp;
            i++;
            j--;
        }
    }
    if(left<j)
        quick(array_sort, left, j);
    if(i<right)
        quick(array_sort,i,right);
    return array_sort;
}


//сортировка Merge
function merge_sort(){
    let n = parseInt(document.formTask3_1_5.numberTask3_1_5.value);
    let array_sort_merge = random_array(n);
    document.getElementById("array_merge").innerHTML = array_sort_merge.join(", "); //вывод массива
    array_sort_merge = merge_sort_array(array_sort_merge, 0, array_sort_merge.length-1);
    document.getElementById("sort_merge").innerHTML = array_sort_merge.join(", "); //вывод отсортир. массива
}

function merge_sort_array(array_merge, start, end){
    if(start<end){
        let middle = Math.floor((start+end)/2);
        merge_sort_array(array_merge, start, middle);
        merge_sort_array(array_merge, middle+1, end)
        Merge(array_merge, start, middle, end);
    }
    return array_merge;
}

function Merge(array_merge, start, middle, end){
    let arr = new Array(end+1-start);
    let j = middle+1, k=0, h = start, i=0;
    while(h<=middle && j<=end){
        if(array_merge[h] <= array_merge[j]){
            arr[i]=array_merge[h];
            h++;
        }
        else{
            arr[i]=array_merge[j];
            j++;
        }
        i++;
    }
    if(h>middle){
        for(k=j; k<=end; k++){
            arr[i]=array_merge[k];
            i++;
        }
    }
    else{
        for(k=h; k<=middle; k++){
            arr[i]=array_merge[k];
            i++;
        }
    }
    for(k=0; k<=end-start;k++)
        array_merge[k+start]=arr[k];
    return array_merge;
}

//сортировка Shell
function shell_sort(){
    let n = parseInt(document.formTask3_1_6.numberTask3_1_6.value);
    let array_sort_shell = random_array(n);
    document.getElementById("array_shell").innerHTML = array_sort_shell; //вывод массива
    array_sort_shell = shell(array_sort_shell);
    document.getElementById("sort_shell").innerHTML = array_sort_shell;  //вывод отсортир. массива
}

function shell(array_sort){
    let i = (array_sort.length/2).toFixed(); // toFixed округление
    while(i>0){
        for(let j=0; j<array_sort.length; j++){
            let k=j, t=array_sort[j];
            while (k>=i && array_sort[k-i]>t){
                array_sort[k] = array_sort[k-i];
                k -= i;
            }
            array_sort[k] = t;
        }
        if(i==2){
            i=1;
        }
        else{
            i=~~(i*5/11);
        }
    }
    return array_sort;
}

//сортировка Heap
function heap_sort(){
    let n = parseInt(document.formTask3_1_7.numberTask3_1_7.value);
    let array_sort_heap = random_array(n);
    document.getElementById("array_heap").innerHTML = array_sort_heap; //вывод массива
    array_sort_heap = heap(array_sort_heap, n);
    document.getElementById("sort_heap").innerHTML = array_sort_heap; //вывод отсортир. массива
}

function heap(array_sort_heap, n) {
    let i= ~~(n/2), j, k, t;
    while (true){
        if(i>0)
        {
            t=array_sort_heap[--i];
        }
        else{
            n--;
            if(n==0){
                return array_sort_heap;
            }
            t = array_sort_heap[n];
            array_sort_heap[n] = array_sort_heap[0];
        }
        j=i; k=j*2+1;
        while (k<n){
            if(k+1 < n && array_sort_heap[k+1] > array_sort_heap[k])
                k++;
            if(array_sort_heap[k]>t){
                array_sort_heap[j] = array_sort_heap[k];
                j=k;
                k=j*2+1;
            }
            else
            {break;}
        }
        array_sort_heap[j] = t;
    }
}

//4. Функции
//Задание 4.1
//Получить строковое название дня недели по номеру дня.

function day_of_week() {
    let day = parseInt(document.formTask4_1.numberTask4_1.value);
    switch (day) {
        case 1:{
            document.getElementById("day").innerHTML = "Понедельник";
            break;
        }
        case 2:{
            document.getElementById("day").innerHTML = "Вторник";
            break;
        }
        case 3:{
            document.getElementById("day").innerHTML = "Среда";
            break;
        }
        case 4:{
            document.getElementById("day").innerHTML = "Четверг";
            break;
        }
        case 5:{
            document.getElementById("day").innerHTML = "Пятница";
            break;
        }
        case 6:{
            document.getElementById("day").innerHTML = "Суббота";
            break;
        }
        case 7:{
            document.getElementById("day").innerHTML = "Воскресенье";
            break;
        }
        default:{
            alert("Введите правильно день недели!");
        }

    }
}

//Задание 4.2
//Найти расстояние между двумя точками в двухмерном декартовом пространстве.
function distance() {
    let x1 = parseInt(document.formTask4_2.numberTask4_2_1.value);
    let y1 = parseInt(document.formTask4_2.numberTask4_2_2.value);
    let x2 = parseInt(document.formTask4_2.numberTask4_2_3.value);
    let y2 = parseInt(document.formTask4_2.numberTask4_2_4.value);
    let distance;
    distance = sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    document.getElementById("distance").innerHTML = distance;
}

function sqrt(n){
    const epsilon = 0.01; //погрешность
    let low = 0;
    let high = n;
    let result = (low + high)/2;
    let squaResult = result*result;

    while (abs(squaResult - n) >= epsilon) {
        if (squaResult > n) {
            high = result;
        } else {
            low = result;
        }
        result = (low + high) / 2;
        squaResult = result*result;
    }
    return result;
}





