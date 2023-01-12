function scope() {
    // var a: number = 1
    // let a: number = 1
    const a: number = 1
    if (true) {
        // var a: number = 2
        // let a: number = 2
        const a: number = 2
    }
    console.log(a) // ✅ let y const: 1 | ❌ var: 2
}

scope()