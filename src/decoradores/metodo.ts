function LogFunctionName() {
    return function(target: Object, key: string, descriptor: PropertyDescriptor) {
      console.log(key)
      return descriptor
    }
  }
  
  function LogParameters() {
    return function(target: Object, key: string, descriptor: PropertyDescriptor) {
      // console.log(target, key, descriptor)
      const origFunction: Function = descriptor.value
      descriptor.value = function() {
        console.log(arguments[0])
        return origFunction
      }
      return descriptor
    }
  }
  
  class Square {
    side: number
    constructor(s: number) {
      this.side = s
    }
  
    // Log el nombre de la función
    // @LogFunctionName()
    getSurface() {
      // return Math.pow(this.side, 2)
      return this.side ** 2
    }
  
    // @LogFunctionName()
    whatsMyName() {
      return "Square"
    }
  
    @LogParameters()
    getVolume(h: number) {
      return h * (this.side ** 2)
    }
  }
  
  const mySquare = new Square(10)
  const area: number = mySquare.getSurface()
  
  // console.log(area)
  
  // console.log(mySquare.whatsMyName())
  
  const volume: number = mySquare.getVolume(30)