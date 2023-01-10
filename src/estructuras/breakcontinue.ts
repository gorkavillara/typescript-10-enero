// Uso del Break
for (let i = 0; i < 10; i++) {
    console.log(i)
    if (i === 5) break
}

let i: number = 0
while(i < 10) {
    console.log(i)
    if (i === 5) break
    i++
}

// Uso del Continue
for (let i = 0; i < 10; i++) {
    if (i === 5) continue
    console.log(i)
}

let j: number = 0
while(j < 10) {
    j++
    if (j === 5) continue
    console.log(j)
}