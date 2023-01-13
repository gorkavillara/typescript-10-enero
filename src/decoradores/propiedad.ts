function Min(limit: number) {
    return function(target: Object, propertyKey: string) {
      let value: string
      const getter = () => value
  
      const setter = (newValue: string) => {
        if (newValue.length < limit) {
          Object.defineProperty(target, "errors", {
            value: `La propiedad ${propertyKey} debe tener al menos ${limit} caracteres`
          })
        } else {
          value = newValue
        }
      }
  
      Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
      })
    }
  }
  
  class User {
    @Min(3)
    username: string
    
    @Min(8)
    password: string
    errors?: string
    constructor(u: string, p: string) {
      this.username = u
      this.password = p
    }
  }
  
  const user = new User("gorkavillar", "1234")
  if (!user.errors) {
    console.log("✅ Todo correcto!")
    console.log("username:", user.username)
    console.log("password:", user.password)
  } else {
    console.log("❌ Hay errores!")
    console.log("Error:", user.errors)
  }
  