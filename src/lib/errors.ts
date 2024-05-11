export class NotFound extends Error {
    status:number;
    constructor(message:string) {
      super()
      this.name = 'NotFound'
      this.message = message
      this.status = 404
    }
  }
  
  
  export class NotValid extends Error {
    status:number;
    constructor(message:string, status:number) {
      super()
      this.name = 'NotValid'
      this.message = message;
      this.status = status
    }
  }
  
  export class NotAuthorized extends Error {
    status:number;
    constructor(message:string) {
      super()
      this.name = 'NotAuthorized'
      this.message = (message ? message : 'Unauthorized')
      this.status = 401
    }
  }