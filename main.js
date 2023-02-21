function load() {
    let column_1 = [5, 8, 4, 3, 9, 7, 1, 6, 5, 2, 5, 6, 2, 7, 9, 9, 2, 8, 10, 3, 5, 7, 8, 1, 9, 1, 10, 6, 8, 7]
    let column_2 = [7, 2, 3, 9, 5, 8, 1, 10, 7, 1, 8, 4, 9, 6, 2, 4, 7, 4, 10, 4, 10, 6, 9, 9, 7, 1, 8, 7, 5, 6]
    let column_3 = [87, 90, 77, 65, 86, 41, 63, 69, 80, 46, 74, 60, 56, 44, 79, 67, 89, 58, 95, 71, 47, 40, 48, 56, 46, 67, 75, 59, 92, 92]
    let column_4 = [56, 95, 78, 82, 62, 90, 69, 90, 98, 83, 55, 50, 61, 95, 82, 89, 51, 40, 49, 41, 56, 41, 82, 94, 97, 57, 100, 100, 87, 76]

    let sum_1 = 0;
    for (i = 0; i<column_1.length; i++) {
        sum_1 = sum_1 + column_1[i];
    }
    console.log("Sum of column 1 = " + sum_1);

    let sum_2 = 0;
    for (i = 0; i<column_2.length; i++) {
        sum_2 = sum_2 + column_2[i];
    }
    console.log("Sum of column 2 = " + sum_2);

    let sum_3 = 0;
    for (i = 0; i<column_3.length; i++) {
        sum_3 = sum_3 + column_3[i];
    }
    console.log("Sum of column 3 = " + sum_3);

    let sum_4 = 0;
    for (i = 0; i<column_4.length; i++) {
        sum_4 = sum_4 + column_4[i];
    }
    console.log("Sum of column 4 = " + sum_4);

    let sums = [sum_1, sum_2, sum_3, sum_4]

    let total_score = sum_1 + sum_2 + sum_3 + sum_4;
    console.log("Total score: " + total_score)

    const results = {
    col1: column_1,  
    col2: column_2,      
    col3: column_3,  
    col4: column_4,  
    sums: sums,
    total_score: total_score
    }
    console.log(results)
}


