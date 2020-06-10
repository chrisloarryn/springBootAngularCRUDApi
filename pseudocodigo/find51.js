/*
1.- Realiza pseudocódigo para la búsqueda del valor 51
    [1, 3, 13, 15, 17, 19, 21, 23, 31, 34, 40, 51, 54, 68]
*/
const array = [1, 3, 13, 15, 17, 19, 21, 23, 31, 34, 40, 51, 54, 68];
const numToFind = 51;

const findByNumber = (list, num) => list.some(n => n === num)

/*
2.- Realiza pseudocódigo para el ordenamiento de la lista
    [54,53,2,1,5,98,73,86,98,94,1,2,3,2]

    ## array.sort(a,b => #ORDEN#);
    #ORDEN# b - a for desc
            a - b for asc
*/
const OrderArray = (list) => list.sort((a, b) => a - b)


/*
Console Logs
 */
console.log('FindFn::', findByNumber(array, numToFind));
console.log('OrderFn::', OrderArray(array))
