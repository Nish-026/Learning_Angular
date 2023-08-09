export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name:string,desc:string, imagePath:string){
        this.name= name;
        this.description= desc;
        this.imagePath= imagePath;
    }
}

//This is the basic model of the recipes that we will add
