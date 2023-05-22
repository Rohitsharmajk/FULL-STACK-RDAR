    export  interface loginDto
    {
         UserName:string,
         Password :string
    }
    export  interface registerDto
    {
         UserName:string,
         Password :string,
         ConfirmPass:string
    }
    export interface flightDto
    {
        source:string,
        destination:string,
        date:Date,
        id:number,
        name:string,
        fare:number
    }
    export interface passengerDto
    {
        Name:string,
        Email:string,
        Gender:string,
        Phone?:number,
        Age?:number
    }
    export interface passengerBookDto
    {
        flightId:number,
        passengers:passengerDto[]
    }
    export interface obj{
        id:number,
      };