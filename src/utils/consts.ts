import { Hours } from "./types";

export const api_key_stormglass = '9c19e700-9010-11ed-bc36-0242ac130002-9c19e7c8-9010-11ed-bc36-0242ac130002';
export const api_key_openweather = '342e669094e8d5e7a50f26427f8298b1';


export const putDaysIntoArr = (dataArr: Hours[]) => {
    const arr = [] as Hours[][];
    let arr2 = [] as Hours[];
    for (let index = 0, count = 1; index < dataArr.length; index++) {
        if (index < count * 24 && index >= (count - 1) * 24) {
            arr2.push(dataArr[index]);
            if (arr2.length >= 24) {
                arr.push(arr2);
                arr2 = [];
                count++;
            }
        }
    }
    return arr;
}

// export const putNumbersIntoArr = (dataArr: number[]) => {
//     const arr = [] as number[][];
//     let arr2 = [] as number[];

//     for (let index = 0, count = 1; index < dataArr.length; index++) {
//         if (index < count * 24 && index >= (count - 1) * 24) {
//             arr2.push(dataArr[index]);
//             if (arr2.length >= 24) {
//                 arr.push(arr2);
//                 arr2 = [];
//                 count++;
//             }
//         }
//     }
//     return arr;
// }

// export const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 12, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 13, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 15, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 16, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 17, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 18, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 19, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 110, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];