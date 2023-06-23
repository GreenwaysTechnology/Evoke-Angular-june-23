//DTO  Or Entity class to capture form data.

export class UserModel {
    constructor(public id: number, public name: string, public date: Date,public  points: number,public city?:string) { }
}